/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectDataProcessing from './selectors';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Results from '../../components/Results';
import Record from '../Record';
import DataProcessing from '../DataProcessing';

import {Modal, ModalHeader, ModalTitle, ModalClose, ModalBody, ModalFooter} from 'react-modal-bootstrap';

class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  openModal() {
    this.setState({
      isOpen: true
    });
  };
 
  hideModal() {
    this.setState({
      isOpen: false
    });
  };

  componentWillReceiveProps(){
    this.openModal()
  }

  constructor(props){
    super(props)
    this.state = {isOpen: true}
    this.openModal= this.openModal.bind(this)
    this.hideModal= this.hideModal.bind(this)
  }
  
  render() {
    
    return (
      <div>
        <Header />
        <div className="container">
          <ul className="nav nav-tabs" role="tablist">
            <li role="presentation" className="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab"><i className="ti-package"></i> Procesar</a></li>
            <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab"><i className="ti-alarm-clock"></i> Historial</a></li>
          </ul>
          <div className="tab-content">
            <div role="tabpanel" className="tab-pane active" id="home">
              <DataProcessing openModal={this.openModal}/>
            </div>
            <div role="tabpanel" className="tab-pane" id="profile">
              <Record/>
            </div>
          </div>
        </div>
        <Modal isOpen={this.props.data.cases != null && this.state.isOpen} onRequestHide={this.hideModal}>
          <ModalHeader>
            <ModalClose onClick={this.hideModal}/>
            <ModalTitle>Resultado del procesamiento</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <Results cases={this.props.data.cases}/>
          </ModalBody>
          <ModalFooter>
            <button className='btn btn-primary' onClick={this.hideModal}>
              Cerrar
            </button>
          </ModalFooter>
        </Modal>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  data: makeSelectDataProcessing(),
});

export default connect(mapStateToProps, {})(HomePage);