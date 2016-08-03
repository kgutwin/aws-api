'use strict';

import React from 'react';
import PartitionTable from './PartitionTableComponent';
import FilterBar from './FilterBarComponent';

import AjaxLoader from '../sources/AjaxLoader';

require('styles//AwsApiFilterTable.css');

class AwsApiFilterTableComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected_partition: 'aws',
      selected_service: 'ec2',
      operation_glob: '*',
      partitions: {}
    };
    this.updateSelectedPartition = this.updateSelectedPartition.bind(this);
    this.updateSelectedService = this.updateSelectedService.bind(this);
    this.updateOperationGlob = this.updateOperationGlob.bind(this);
    this.updatePartitions = this.updatePartitions.bind(this);
  }

  componentDidMount() {
    var loader = new AjaxLoader('data/endpoints.json');
    loader.fetch(this.updatePartitions);
  }

  updateSelectedPartition(partition) {
    this.setState({ selected_partition: partition });
  }

  updateSelectedService(service) {
    this.setState({ selected_service: service });
  }

  updateOperationGlob(operation_glob) {
    this.setState({ operation_glob: operation_glob });
  }

  updatePartitions(data) {
    var new_partitions = {}
    data.partitions.map((p) => {
      new_partitions[p.partition] = p;
    });
    this.setState({partitions: new_partitions});
  }

  getServices() {
    if (this.state.selected_partition in this.state.partitions) {
      return Object.keys(this.state.partitions[this.state.selected_partition]
			 .services);
    } else {
      return [];
    }
  }
  
  render() {
    return (
      <div className="awsapifiltertable-component">
        <FilterBar
          partition={this.state.selected_partition}
          onPartitionSelect={this.updateSelectedPartition}
          services={this.getServices()}
          selected_service={this.state.selected_service}
          onServiceSelect={this.updateSelectedService}
          operation_glob={this.state.operation_glob}
          onGlobInput={this.updateOperationGlob}
	/>
	<PartitionTable
          partition={this.state.partitions[this.state.selected_partition]}
          service={this.state.selected_service}
          operation_glob={this.state.operation_glob}
	/>
      </div>
    );
  }
}

AwsApiFilterTableComponent.displayName = 'AwsApiFilterTableComponent';

// Uncomment properties you need
// AwsApiFilterTableComponent.propTypes = {};
// AwsApiFilterTableComponent.defaultProps = {};

export default AwsApiFilterTableComponent;
