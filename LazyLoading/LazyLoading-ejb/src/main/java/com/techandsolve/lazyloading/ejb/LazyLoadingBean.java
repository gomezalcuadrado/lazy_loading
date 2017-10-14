/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.techandsolve.lazyloading.ejb;

import com.techandsolve.lazyloading.model.Case;
import com.techandsolve.lazyloading.model.Day;
import com.techandsolve.lazyloading.model.Execution;
import com.techandsolve.lazyloading.model.TripsToProcess;
import com.techandsolve.lazyloading.utils.DataExtractor;
import java.util.Collections;
import java.util.Date;
import java.util.LinkedList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

/**
 *
 * @author tatiana.gomez
 */

@Stateless
public class LazyLoadingBean {
    
    @PersistenceContext
    private EntityManager manager;
    
    @Inject
    private DataExtractor dataExtractor;
    
    public List<Execution> queryExecutionsList(){
        TypedQuery<Execution> query = manager.createQuery("select e from Execution e", Execution.class);
        List<Execution> resultList = query.getResultList();
        return resultList;
    }
    
    public List<Case> calculate(TripsToProcess data){
        saveExecution(data.getDocument());
        List<Day> days = dataExtractor.convertInputToObjects(data.getFile());
        Stream<Case> cases = days.stream().map(day -> calculateDay(day));
        return cases.collect(Collectors.toList());
    } 

    private Case calculateDay(Day day) {
        LinkedList<Integer> boxes = day.getBoxes();
        Collections.sort(boxes);
        int trips = 0;
        
        for (Integer max = boxes.pollLast(); max != null; max = boxes.pollLast()) {
            int elementsByTrip = 1;
            while (max * elementsByTrip < 50 ) {            
               boxes.pollFirst();
               elementsByTrip ++;
            }
            trips++;            
        }
                
        return new Case(trips);
    }

    private void saveExecution(String document) {
        Execution execution = new Execution(document, new Date());
        manager.persist(execution);
    }
}
