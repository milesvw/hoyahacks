//chart
document.addEventListener('DOMContentLoaded', function () {
  const chart = Highcharts.chart('container', {
    chart: {
      type: 'bar',
      backgroundColor: '#fef8ff',
    },
    title: {
      text: '',
    },
    xAxis: {
      categories: ['Coke', 'Diet Coke', 'Coke Zero'],
    },
    yAxis: {
      title: {
        text: '',
      },
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        name: 'Votes',
        selected: true,
        data: [1, 20, 4],
      },
      
    ],
  });
});
