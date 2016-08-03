'use strict';

import React from 'react';

require('styles/filterBar/PartitionSelect.css');

class PartitionSelectComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange() {
    this.props.onUserInput(this.refs.partitionSelectInput.value);
  }
  
  render() {
    return (
      <div className="partitionselect-component">
	<select ref="partitionSelectInput" onChange={this.handleChange} value={this.props.partition}>
	  <option>aws</option>
	  <option>aws-cn</option>
	  <option>aws-us-gov</option>
        </select>
      </div>
    );
  }
}

PartitionSelectComponent.displayName = 'FilterBarPartitionSelectComponent';

// Uncomment properties you need
PartitionSelectComponent.propTypes = {
  partition: React.PropTypes.string.isRequired,
  onUserInput: React.PropTypes.func.isRequired
};
// PartitionSelectComponent.defaultProps = {};

export default PartitionSelectComponent;
