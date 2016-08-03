'use strict';

import React from 'react';

require('styles/filterBar/GlobInput.css');

class GlobInputComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.props.onUserInput(this.refs.globInput.value);
  }
  
  render() {
    return (
      <div className="globinput-component">
      <input type="text" value={this.props.operation_glob} ref="globInput"
      onChange={this.handleChange} />
      </div>
    );
  }
}

GlobInputComponent.displayName = 'FilterBarGlobInputComponent';

// Uncomment properties you need
// GlobInputComponent.propTypes = {};
// GlobInputComponent.defaultProps = {};

export default GlobInputComponent;
