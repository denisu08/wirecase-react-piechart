import React, { Component } from 'react';

import Gist from 'react-gist';
import PieChart from 'wirecase-react-piechart';

const data = [
  { title: 'Data 1', value: 100, color: '#22594e' },
  { title: 'Data 2', value: 60, color: '#2f7d6d' },
  { title: 'Data 3', value: 30, color: '#3da18d' },
  { title: 'Data 4', value: 20, color: '#69c2b0' },
  { title: 'Data 5', value: 10, color: '#a1d9ce' }
];

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Wirecase React Piechart Viewer Demo</h1>
        <PieChart
          data={data}
          // If you need expand on hover (or touch) effect
          expandOnHover
          // If you need custom behavior when sector is hovered (or touched)
          onSectorHover={(d, i, e) => {
            if (d) {
              console.log('Mouse enter - Index:', i, 'Data:', d, 'Event:', e);
            } else {
              console.log('Mouse leave - Index:', i, 'Event:', e);
            }
          }}
        />
      </div>
    );
  }
}
