'use strict';

import React from 'react';

require('styles/serviceTable/OperationRow.css');

import striptags from 'striptags';

class OperationRowComponent extends React.Component {
  constructor(props) {
    super(props);
    this.first_sentence = this.getFirstSentence(props.operation.documentation);
  }

  getFirstSentence(doc) {
    var sentence = striptags(doc).split(/\. /,1)[0];
    if (! sentence.endsWith('.')) sentence += '.';
    return sentence;
  }

  componentWillReceiveProps(nextProps) {
    this.first_sentence = this.getFirstSentence(nextProps.operation.documentation);
  }
  
  render() {
    return (
      <div className="operationrow-component">
        {this.props.service}:{this.props.operation.name} - {this.first_sentence}
      </div>
    );
  }
}

OperationRowComponent.displayName = 'ServiceTableOperationRowComponent';

// Uncomment properties you need
// OperationRowComponent.propTypes = {};
// OperationRowComponent.defaultProps = {};

export default OperationRowComponent;
