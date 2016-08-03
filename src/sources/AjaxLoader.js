'use strict';

import $ from 'jquery';

class AjaxLoader {
  constructor(url) {
    this.url = url;
  }

  fetch(callback) {
    $.ajax({
      url: this.url,
      dataType: 'json',
      success: function(data) {
	callback(data);
      }
    });
  }
}

export default AjaxLoader;
