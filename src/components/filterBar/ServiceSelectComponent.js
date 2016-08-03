'use strict';

import React from 'react';

require('styles/filterBar/ServiceSelect.css');

class ServiceSelectComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.props.onUserInput(this.refs.serviceSelectInput.value);
  }

  render() {
    return (
      <div className="serviceselect-component">
	<select ref="serviceSelectInput" onChange={this.handleChange} value={this.props.selected_service}>
	{this.props.services.map((svc, index) => (
	    <option key={index}>{svc}</option>
	))}
	</select>
      </div>
    );
  }
}

ServiceSelectComponent.displayName = 'FilterBarServiceSelectComponent';

// Uncomment properties you need
// ServiceSelectComponent.propTypes = {};
// ServiceSelectComponent.defaultProps = {};

export default ServiceSelectComponent;
