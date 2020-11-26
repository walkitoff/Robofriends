import React from 'react'; // react uses JSX syntax
import ReactDOM from 'react-dom'; //this is where our app is being displayed, ie web browser, android etc
import App from './containers/App.js';
import './index.css';
import 'tachyons';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
