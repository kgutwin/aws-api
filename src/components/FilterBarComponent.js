'use strict';

import React from 'react';
import PartitionSelect from './filterBar/PartitionSelectComponent';
import ServiceSelect from './filterBar/ServiceSelectComponent';
import GlobInput from './filterBar/GlobInputComponent';

require('styles//FilterBar.css');

let FilterBarComponent = (props) => (
  <div className="filterbar-component">
    <PartitionSelect partition={props.partition}
    onUserInput={props.onPartitionSelect} />
    <ServiceSelect services={props.services}
    selected_service={props.selected_service}
    onUserInput={props.onServiceSelect} />
    <GlobInput operation_glob={props.operation_glob}
    onUserInput={props.onGlobInput} />
  </div>
);

FilterBarComponent.displayName = 'FilterBarComponent';

// Uncomment properties you need
FilterBarComponent.propTypes = {
  partition: React.PropTypes.string.isRequired,
  onPartitionSelect: React.PropTypes.func.isRequired
};
// FilterBarComponent.defaultProps = {};

export default FilterBarComponent;
