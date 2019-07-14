import React, { Component } from 'react';

import Gist from 'react-gist';
import PieChart from 'wirecase-react-piechart';

const data = [
  { label: 'Facebook', value: 100, color: '#3b5998' },
  { label: 'Twitter', value: 60, color: '#00aced' },
  { label: 'Google Plus', value: 30, color: '#dd4b39' },
  { label: 'Pinterest', value: 20, color: '#cb2027' },
  { label: 'Linked In', value: 10, color: '#007bb6' }
];

export default class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      expandedSector: null
    };

    this.handleMouseEnterOnSector = this.handleMouseEnterOnSector.bind(this);
    this.handleMouseLeaveFromSector = this.handleMouseLeaveFromSector.bind(
      this
    );
  }

  handleMouseEnterOnSector(sector) {
    this.setState({ expandedSector: sector });
  }

  handleMouseLeaveFromSector() {
    this.setState({ expandedSector: null });
  }

  render() {
    return (
      <center>
        <h1>Wirecase React JSON Viewer Demo</h1>
        <div style={{ display: 'table-row' }}>
          <PieChart
            data={data}
            expandedSector={this.state.expandedSector}
            onMouseEnterOnSector={this.handleMouseEnterOnSector}
            onMouseLeaveFromSector={this.handleMouseLeaveFromSector}
            props={{ height: 200, width: 200 }}
          />
          <div
            style={{
              display: 'table-cell',
              verticalAlign: 'middle',
              textAlign: 'left'
            }}
          >
            {data.map((d, i) => (
              <div key={i}>
                <span style={{ background: d.color }} />
                <span
                  style={{
                    fontWeight: this.state.expandedSector == i ? 'bold' : null
                  }}
                >
                  {d.label} : {d.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </center>
    );
  }
}
