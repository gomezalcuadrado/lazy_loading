/**
*
* Loader
*
*/

import React from 'react';
import styled, {keyframes} from 'styled-components';

const rotate360 = keyframes`
	from {
		transform: rotate(0deg);
	}

	to {
		transform: rotate(360deg);
	}
`;

const LoaderWrapper = styled.div`
    position: fixed;
    z-index: 9999999 !important;
    background-color: rgba(255, 255, 255, 0.5);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
`;

const Loader = styled.div`
    display: block;
    position: relative;
    left: 50%;
    top: 50%;
    width: 150px;
    height: 150px;
    margin: -75px 0 0 -75px;
    z-index: 1500;
    border: 3px solid transparent;
    border-top-color: #e82378;
    border-radius: 50%;
    animation: ${rotate360} 2s linear infinite;

    &:before {
        content: "";
        position: absolute;
        top: 5px;
        left: 5px;
        right: 5px;
        bottom: 5px;
        border: 3px solid transparent;
        border-top-color: #733aaa;
        border-radius: 50%;
        animation: ${rotate360} 3s linear infinite;
    }

    &:after {
        content: "";
        position: absolute;
        top: 15px;
        left: 15px;
        right: 15px;
        bottom: 15px;
        border: 3px solid transparent;
        border-top-color: #44a4ba;
        border-radius: 50%;
        animation: ${rotate360} 1.5s linear infinite;
        }
`;

export default (props) => 
    <LoaderWrapper style={{display: props.show}}>
        <Loader></Loader>
    </LoaderWrapper>






