import PropTypes from 'prop-types';
import React, { Component } from 'react';
import BORNDATA from '../data/born';
import LIVEDATA from '../data/live';
import CustomAnnotations from './options/annotations';
import Legends from './options/legends';
import Chart from "react-apexcharts";
import Options from './options/options';

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
            options: Options,
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