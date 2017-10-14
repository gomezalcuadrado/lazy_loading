/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.techandsolve.lazyloading.services;

import com.techandsolve.lazyloading.ejb.LazyLoadingBean;
import com.techandsolve.lazyloading.model.TripsToProcess;
import java.util.List;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.runners.MockitoJUnitRunner;
import static org.assertj.core.api.Assertions.*;
import org.junit.Test;

/**
 *
 * @author tatiana.gomez
 */
@RunWith(MockitoJUnitRunner.class)
public class LazyLoadingServicesTest {
    
    @InjectMocks
    private LazyLoadingServices service;
    
    @Mock
    private LazyLoadingBean bean;
    
    @Mock
    private List list;
    
    @Test
    public void shouldReturnExecutionsList(){
        Mockito.when(bean.queryExecutionsList()).thenReturn(list);
        List executions = service.getExecutionsList();
        assertThat(executions).isEqualTo(list);
    }
    
    @Test
    public void shouldReturnCasesList(){
        TripsToProcess data = new TripsToProcess();
        Mockito.when(bean.calculate(data)).thenReturn(list);
        List cases = service.processFile(data);
        assertThat(cases).isEqualTo(list);
    }
}
