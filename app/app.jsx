var React = require('react');
var ReactDOM = require('react-dom');

var {Provider} = require('react-redux');

var actions = require('actions');
var store = require('configureStore').configure();




var css = require('./style.scss');
var foundation = require('../node_modules/foundation-sites/dist/css/foundation.min.css');





ReactDOM.render(
    <Provider store={store}>
      <p>template is up and running</p>
    </Provider>,
          document.getElementById('app')
      );
