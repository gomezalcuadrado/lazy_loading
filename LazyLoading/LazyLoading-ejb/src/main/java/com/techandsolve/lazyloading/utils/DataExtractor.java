/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.techandsolve.lazyloading.utils;

import com.techandsolve.lazyloading.model.Day;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Stream;

/**
 *
 * @author tatiana.gomez
 */
public class DataExtractor {
    
    public List<Day> convertInputToObjects(String text){
        int[] data = Stream.of(text.split("\n")).mapToInt(Integer::parseInt).toArray();
        
        int dayBoxes = 0;
        List<Day> days = new ArrayList<>();
        Day day = null;
        for (int i = 1; i < data.length; i++) {
            if(dayBoxes == 0){
                dayBoxes = data[i];
                day = new Day();
                days.add(day);
            }else{
                day.getBoxes().add(data[i]);
                if(day.getBoxes().size() == dayBoxes){
                    dayBoxes = 0;
                }
            }
        }
      
        return days;
    }
}

