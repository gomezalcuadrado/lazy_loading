/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.techandsolve.lazyloading.ejb;

import com.techandsolve.lazyloading.model.Case;
import com.techandsolve.lazyloading.model.Execution;
import com.techandsolve.lazyloading.model.TripsToProcess;
import com.techandsolve.lazyloading.utils.DataExtractor;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.runners.MockitoJUnitRunner;
import static org.assertj.core.api.Assertions.*;
import org.junit.Test;
import org.mockito.Spy;

/**
 *
 * @author tatiana.gomez
 */
@RunWith(MockitoJUnitRunner.class)
public class LazyLoadingBeanTest {

    @InjectMocks
    private LazyLoadingBean bean;

    @Mock
    private EntityManager manager;

    @Mock
    private TypedQuery<Execution> query;

    @Mock
    private List<Execution> list;
    
    @Spy
    private DataExtractor extractor = new DataExtractor();

    @Test
    public void shouldReturnListByQueryEntityManager() {
        Mockito.when(manager.createQuery("select e from Execution e", Execution.class)).thenReturn(query);
        Mockito.when(query.getResultList()).thenReturn(list);

        List<Execution> result = bean.queryExecutionsList();

        assertThat(result).isEqualTo(list);
    }

    @Test
    public void shouldCalculateTrips() {
                String text = "2\n"
                + "4\n"
                + "10\n"
                + "25\n"
                + "25\n"
                + "15\n"
                + "2\n"
                + "26\n"
                + "24\n"; 
        TripsToProcess data = new TripsToProcess("213123", text);
        List<Case> cases = bean.calculate(data);
        assertThat(cases).hasSize(2);
        assertThat(cases.get(0).getQuantity()).isEqualTo(2);
        assertThat(cases.get(1).getQuantity()).isEqualTo(1);

    }

}
