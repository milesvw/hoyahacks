//chart
document.addEventListener('DOMContentLoaded', function () {
  const chart = Highcharts.chart('container', {
    chart: {
      type: 'bar',
      backgroundColor: '#fef8ff',
    },
    title: {
      text: 'Results',
    },
    xAxis: {
      categories: ['Coke', 'Diet Coke', 'Coke Zero'],
    },
    yAxis: {
      title: {
        text: 'Votes',
      },
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        name: 'Jane',
        selected: true,
        data: [1, 20, 4],
      },
      
    ],
  });
});
