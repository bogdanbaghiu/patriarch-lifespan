import React, { Component } from "react";
import Chart from "react-apexcharts";
import BORNDATA from "./data/born";
import LIVEDATA from "./data/live";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: 'Perioadă de timp fără fii',
          data: BORNDATA
        },
        {
          name: 'Perioadă de timp cu fii',
          data: LIVEDATA
        },
      ],
      options: {
        annotations: {
          xaxis: [
            {
              x: 1656,
              type: 'numeric',
              borderColor: "transparent",
              label: {
                borderColor: "transparent",
                style: {
                  color: "#FEB019",
                  fontSize: '14px',
                },
                orientation: "horizontal",
                text: "1656",
                position: "bottom",
                offsetY: 22,
              },
            },
            {
              x: 1656,
              type: 'numeric',
              borderColor: "#FEB019",
              label: {
                borderColor: "#FEB019",
                style: {
                  color: "#fff",
                  background: "#FEB019",
                  fontSize: '14px',
                },
                orientation: "horizontal",
                text: "POTOP",
              }
            },
          ]
        },
        colors: ['#ff0000', '#E7E6E6'],
        chart: {
          type: 'rangeBar',
          width: '80%',
        },
        plotOptions: {
          bar: {
            horizontal: true,
            barHeight: '80%',
            rangeBarGroupRows: true,
            dataLabels: {
              maxItems: 100,
              hideOverflowingLabels: false,
            }
          }
        },
        xaxis: {
          type: 'numeric'
        },
        stroke: {
          width: 0
        },
        fill: {
          type: 'solid',
          opacity: 1
        },
        legend: {
          position: 'top',
          horizontalAlign: 'left'
        },
        dataLabels: {
          enabled: true,
          style: {
            fontSize: '14px',
            colors: ['#fff', '#1B1A17']
          }
        },
      },
    };
  }

  render() {
    return (
      <div className="app">
        <div className="mixed-chart">
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="rangeBar"
            width="110%"
          />
        </div>
      </div>
    );
  }
}

export default App;