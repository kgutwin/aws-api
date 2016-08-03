'use strict';

import React from 'react';
import ServiceTable from './ServiceTableComponent';

require('styles//PartitionTable.css');

let PartitionTableComponent = (props) => (
  <div className="partitiontable-component">
    Partition: {props.partition.partition} {props.partition.partitionName}
    <ServiceTable service={props.service}
    operation_glob={props.operation_glob} />
  </div>
);

PartitionTableComponent.displayName = 'PartitionTableComponent';

// Uncomment properties you need
PartitionTableComponent.propTypes = {
};
PartitionTableComponent.defaultProps = {
  partition: { partition: '', partitionName: '' }
};

export default PartitionTableComponent;
