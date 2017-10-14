/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.techandsolve.lazyloading.filters;

import java.io.IOException;
import javax.ws.rs.WebApplicationException;
import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.container.ContainerRequestFilter;
import javax.ws.rs.container.ContainerResponseContext;
import javax.ws.rs.container.ContainerResponseFilter;
import javax.ws.rs.core.Response;

/**
 *
 * @author tatiana.gomez
 */
public class CrossOriginResourceSharingFilter implements ContainerResponseFilter, ContainerRequestFilter {
    @Override
    public void filter(ContainerRequestContext requestContext, ContainerResponseContext response) throws IOException {
        response.getHeaders().putSingle("Access-Control-Allow-Origin", "*");
        response.getHeaders().putSingle("Access-Control-Allow-Methods", "GET, HEAD, POST, PUT, DELETE, OPTIONS");
        response.getHeaders().putSingle("Access-Control-Allow-Headers", "Origin, Accept, Authorization, Content-Type, x-forwarded-for, user-token, usage-browser, usage-os, usage-device, locale, statusCodeMTS");
        response.getHeaders().putSingle("Access-Control-Expose-Headers", "statusCodeMTS");
        response.getHeaders().putSingle("Access-Control-Allow-Credentials", "true");
        response.getHeaders().putSingle("Access-Control-Max-Age", "1209600");
    }

    @Override
    public void filter(ContainerRequestContext requestContext) throws IOException {
        String method = requestContext.getMethod();
        if (method.equals("OPTIONS")) {
            throw new WebApplicationException(Response.Status.OK);
        }
    } 
}
