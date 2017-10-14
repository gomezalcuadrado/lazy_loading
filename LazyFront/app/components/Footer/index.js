/**
*
* Footer
*
*/

import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
    position: absolute;
    bottom: 0;
    text-align: center;
    width: 100%;
    background-color: #ececec;
    padding: 20px;
    z-index: 3;

    p{
      font-family: 'Roboto', sans-serif !important;
      font-weight: 300;
      margin: 0;
    }
`;

function Footer() {
  return (
    <Content>
      <p>Prueba Técnica | Crecimiento profesional</p>
      <p>Elaborado por Tatiana Gómez</p>
      <p>2017</p>
    </Content>
  );
}

Footer.propTypes = {

};

export default Footer;
