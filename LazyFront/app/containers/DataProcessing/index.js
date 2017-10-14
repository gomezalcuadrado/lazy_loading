/**
 *
 * DataProcessing
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import Loader from '../../components/Loader';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectDataProcessing from './selectors';
import reducer from './reducer';
import saga from './saga';
import * as actions from './actions';

import FileInput from '../../components/FileInput';

function DataProcessing(p) {
  let documentRef;
  let file;

  function processFile(){
    p.processFile(documentRef.value, file)
  }

  function handleChange (event) {
    file = event.target.files[0];
  };

  return (
    <div className="form-content">
      <Loader show={p.dataprocessing.showLoader ? 'block' : 'none'}/>
      <form className="form-horizontal">
        <div className="form-group">
          <label htmlFor="documentNumber" className="col-sm-3 control-label no-padding">Número de documento</label>
          <div className="col-sm-9">
            <input type="text" className="form-control" id="documentNumber" placeholder="Ingrese el número" 
              ref={(input) => { documentRef = input; }}
            />
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-3 control-label no-padding">Cargar archivo</label>
          <div className="col-sm-9">
            <FileInput name="myImage"
              accept=".png,.gif"
              placeholder="Documento a procesar"
              className="form-control"
              onChange={handleChange} />
          </div>
        </div>
        <div className="col-md-12 text-right no-padding">
          <button type="button" onClick={processFile} className="btn btn-primary">Procesar</button>
        </div>
      </form>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  dataprocessing: makeSelectDataProcessing(),
});

const withConnect = connect(mapStateToProps, actions);

const withReducer = injectReducer({ key: 'dataprocessing', reducer });
const withSaga = injectSaga({ key: 'dataprocessing', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(DataProcessing);
