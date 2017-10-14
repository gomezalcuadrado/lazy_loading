/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.techandsolve.lazyloading.model;

/**
 *
 * @author tatiana.gomez
 */
public class TripsToProcess {
    private String document;
    private String file;

    public TripsToProcess() {
    }

    public TripsToProcess(String document, String file) {
        this.document = document;
        this.file = file;
    }

    
    
    public String getDocument() {
        return document;
    }

    public void setDocument(String document) {
        this.document = document;
    }

    public String getFile() {
        return file;
    }

    public void setFile(String file) {
        this.file = file;
    }
    
}
