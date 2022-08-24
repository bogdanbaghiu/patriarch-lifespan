import PropTypes from 'prop-types';
import React, { Component } from 'react';
import BORNDATA from '../data/born';
import LIVEDATA from '../data/live';
import CustomAnnotations from './options/annotations';
import Legends from './options/legends';
import Chart from "react-apexcharts";

export class CustomChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [
                {
                    name: 'Perioadă de timp fără fii',
                    data: BORNDATA
                },
                {
                    name: 'Perioadă trăită după ce a avut fii',
                    data: LIVEDATA
                },
            ],
            options: {
                annotations: CustomAnnotations,
                legend: Legends,
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
            <div className="mixed-chart">
                <Chart
                    options={this.state.options}
                    series={this.state.series}
                    type="rangeBar"
                    width="110%"
                />
            </div>
        )
    }
}

export default CustomChart