/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.techandsolve.lazyloading.services;

import com.techandsolve.lazyloading.ejb.LazyLoadingBean;
import com.techandsolve.lazyloading.model.Case;
import com.techandsolve.lazyloading.model.Execution;
import com.techandsolve.lazyloading.model.TripsToProcess;
import java.util.List;
import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

/**
 *
 * @author tatiana.gomez
 */
@Path("lazy")
@RequestScoped
public class LazyLoadingServices {
    
    @Inject
    private LazyLoadingBean bean;
    
    @GET
    @Path("executions")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Execution> getExecutionsList(){
        return bean.queryExecutionsList();
    }
    
    @POST
    @Path("processFile")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public List<Case> processFile(TripsToProcess data){
        return bean.calculate(data);
    }
    
}
