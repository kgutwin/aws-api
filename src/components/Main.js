require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import AwsApiFilterTable from './AwsApiFilterTableComponent';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <AwsApiFilterTable />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
