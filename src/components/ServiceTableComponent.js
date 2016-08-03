'use strict';

import React from 'react';
import AjaxLoader from '../sources/AjaxLoader';
import OperationRow from './serviceTable/OperationRowComponent';

require('styles//ServiceTable.css');

class ServiceTableComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      metadata: {
	serviceFullName: ''
      },
      operations: {}
    };
    this.update = this.update.bind(this);
    this.operation_regexp = this.makeOpGlobRegexp(this.props.operation_glob);
  }

  update(data) {
    this.setState(data);
  }
  
  componentDidMount() {
    var loader = new AjaxLoader('data/' + this.props.service +
				'/service.json');
    loader.fetch(this.update);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.service != nextProps.service) {
      var loader = new AjaxLoader('data/' + nextProps.service +
				  '/service.json');
      loader.fetch(this.update);
    }
    this.operation_regexp = this.makeOpGlobRegexp(nextProps.operation_glob);
  }

  makeOpGlobRegexp(opglob) {
    if (opglob == '') {
      return new RegExp('.*');
    } else {
      return new RegExp('^' + opglob.replace(/\*/g, '.*') + '$');
    }
  }
  
  render() {
    var operationNodes = Object.keys(this.state.operations).map((op, index) => {
      if (op.search(this.operation_regexp) != -1) {
	return (
	  <OperationRow key={index} operation={this.state.operations[op]}
          service={this.props.service} />
	);
      }
    });
      
    return (
      <div className="servicetable-component">
        Service: {this.props.service} {this.state.metadata.serviceFullName}
        {operationNodes}
      </div>
    );
  }
}

ServiceTableComponent.displayName = 'ServiceTableComponent';

// Uncomment properties you need
// ServiceTableComponent.propTypes = {};
// ServiceTableComponent.defaultProps = {};

export default ServiceTableComponent;
