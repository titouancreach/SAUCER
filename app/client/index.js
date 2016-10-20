/**
 * @file    Application entry point.
 * @author  Titouan CREACH
 */

import React from 'react';
import { render } from 'react-dom';

function App(props) {
  return (
    <h1> SAUCER </h1>
  );
}

render(
  <App />,
  document.getElementById('root')
);
