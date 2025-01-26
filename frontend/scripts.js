let chart;

async function fetchPollData() {
    try {
        console.log('Fetching data...');
        const response = await fetch('http://localhost:3000/flavors');
        const data = await response.json();

        if (chart) {
            // Updates chart with new data
            console.log('Updating chart')
            updateChart(data);
        }
        else {
            // Creates new chart if doesn't exist yet (?)
            console.log('Creating chart')
            createChart(data);
        }
    }
    catch (error) {
        console.error('Error fetching poll data:', error);
    }
}

function createChart(data)  {
    console.log(data);
    chart = Highcharts.chart('container', {
        chart: {
            type: 'bar',
            style: {
                fontFamily: 'Arial, sans-serif'
            }
        },
        title: {
            text: 'Results',
            style: {
                color: '#d43a41',
                fontSize: '20px'
            }
        },
        xAxis: {
            categories: data.map(flavor => flavor.name),
            title: {
                text: 'Flavor',
                style: { color: '#d43a41' }
            }
        },
        yAxis: {
            title: {
                text: 'Votes',
                style: { 
                    color: '#d43a41' }
            }
        },
        series: [{
            name: 'Votes',
            data: data.map(flavor => flavor.votes),
            color: '#d43a41'
        }]
    });
}

function updateChart(data) {
    chart.xAxis[0].setCategories(data.map(flavor => flavor.name));
    chart.series[0].setData(data.map(flavor => flavor.votes));
    chart.redraw(); // Redraws to reflect current updated data
    console.log('Actually updating chart:', data);
}

// Submits vote and fetches new data after submitting
document.getElementById('poll-form').addEventListener('submit', async function(e) {
    e.preventDefault();

    const selectedFlavor = document.querySelector('input[name="flavor"]:checked')?.value;

    if(!selectedFlavor) {
        alert('Please select a flavor');
        return;
    }

    try {
        const response = await fetch('http://localhost:3000/poll', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ flavor: selectedFlavor })
        });

        // Fetches updated data
        fetchPollData();
    }
    catch (error) {
        console.error('Error submitting vote:', error);
    }
});
window.onload = fetchPollData;