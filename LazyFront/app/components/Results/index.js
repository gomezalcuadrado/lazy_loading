/**
*
* Results
*
*/

import React from 'react';
// import styled from 'styled-components';


function Results(p) {
  return (
    <div className="table-responsive"> 
      <table className="table table-striped"> 
        <thead> 
          <tr> 
            <th>Caso</th> 
            <th>Número de viajes</th> 
          </tr> 
        </thead> 
        <tbody>
          {p.cases.map( (e, index) => 
            <tr> 
              <td>Case #{index}</td> 
              <td>{e.quantity}</td> 
            </tr>
          )} 
        </tbody> 
      </table> 
    </div>
  );
}

Results.propTypes = {
  cases: React.PropTypes.array.isRequired
};

export default Results;
