// Chart
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

document.getElementById('vote-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent default form submission
  const selectedFlavor = document.querySelector('input[name="flavor"]:checked').value;
  console.log(`You voted for: ${selectedFlavor}`);
  alert(`Thank you for voting for: ${selectedFlavor}!`);
  // Here, you can add code to send the vote to the server
});
