/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.techandsolve.lazyloading.utils;

import com.techandsolve.lazyloading.model.Day;
import java.util.List;
import static org.assertj.core.api.Assertions.*;
import org.junit.Test;

/**
 *
 * @author tatiana.gomez
 */
public class DataExtractorTest {
    
    private DataExtractor extractor = new DataExtractor();
    
    @Test
    public void shouldConvertInputToObjects(){
        String text = "2\n"
                + "3\n"
                + "10\n"
                + "25\n"
                + "15\n"
                + "2\n"
                + "26\n"
                + "24\n"; 
        List<Day> days = extractor.convertInputToObjects(text);
        assertThat(days).hasSize(2);
        assertThat(days.get(0).getBoxes()).hasSize(3);
        assertThat(days.get(1).getBoxes()).hasSize(2);
        
    }
}
