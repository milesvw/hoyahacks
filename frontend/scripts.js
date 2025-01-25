//chart
document.addEventListener('DOMContentLoaded', function () {
    const chart = Highcharts.chart('container', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Results'
        },
        xAxis: {
            categories: ['Coke', 'Diet Coke', 'Coke Zero']
        },
        yAxis: {
            title: {
                text: 'Votes'
            }
        },
        series: [{
            name: 'Jane',
            selected:true,
            data: [1, 20, 4]
        }]
    });
});