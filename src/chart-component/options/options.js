import CustomAnnotations from "./annotations";
import Legends from "./legends";

const Options = {
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
};

export default Options;