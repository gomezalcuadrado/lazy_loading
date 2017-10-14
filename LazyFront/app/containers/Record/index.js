/**
 *
 * Record
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectRecord from './selectors';
import reducer from './reducer';
import saga from './saga';
import * as actions from './actions';

export class Record extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  
  componentWillMount(){
    this.props.getExecutions();
  }

  render() {
    return (
      <div className="table-responsive"> 
        <table className="table table-striped"> 
          <thead> 
            <tr> 
              <th>Cédula del ejecutor</th> 
              <th>Fechas de ejecución</th> 
            </tr> 
          </thead> 
          <tbody>
            {this.props.record.executions.map(e => 
              <tr> 
                <td>{e.document}</td> 
                <td>{e.date}</td> 
              </tr> 
            )} 
          </tbody> 
        </table> 
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  record: makeSelectRecord(),
});

const withConnect = connect(mapStateToProps, actions);

const withReducer = injectReducer({ key: 'record', reducer });
const withSaga = injectSaga({ key: 'record', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Record);
