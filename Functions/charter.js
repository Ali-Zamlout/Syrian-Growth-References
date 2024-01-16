Chart.defaults.color = "black";
Chart.defaults.font.family = 'bahnschrift'


// DATA
// ================================================================
var data = {
	datasets: []
};



// Plugins
// ================================================================
var Plugins = {

	legend: { display: false },

	title: {
		display: true,
		text: 'Height-for-Age Growth Charts',
		font: {
			weight: 'bolder',
			family: 'bahnschrift',
			size: 22,
			Color: 'black'
		},
		padding: {
			bottom: '5'
		}
	},

	subtitle: {
		display: true,
		text: '2-20 years',
		font: {
			weight: 'bold',
			family: 'bahnschrift',
			size: 16
		},
		padding: {
			bottom: '10'
		}
	},

	annotation: {
		annotations: {}
	}
}


// OPTIONS
// ================================================================
var options = {
	responsive: true,
	maintainAspectRatio: false,
	aspectRatio: false,
	plugins: Plugins,

	scales: {

		x: {
			min: 2,
			max: 21,
			type: 'linear',
			display: true,

			title: {
				display: true,
				text: 'Age (years)',
				font: {
					weight: 'bolder',
					family: 'bahnschrift',
					size: '14'
				}
			},

			ticks: {
				callback: (value, index) => index == 19 ? '' : value,
				stepSize: 1,
				padding: 10,
				font: { weight: 'bolder', family: 'bahnschrift' },
			},

			grid: { drawTicks: false },

			border: {
				// color: 'black',
				width: 2,
				z: 10
			},
		},


		y: {
			title: {
				display: true,
				text: 'Height (cm)',
				font: {
					weight: 'bolder',
					family: 'bahnschrift',
					size: '14'
				}
			},
			min: 65,
			max: 200,
			ticks: {
				beginAtZero: false,
				stepSize: 5,
				padding: 10,
				font: {
					family: 'bahnschrift',
					weight: 'bold'
				}
			},
			grid: {
				drawTicks: false
			},
			border: {
				// color: 'black',
				width: 2,
				z: 10
			}
		}

	}
};



// Create the chart
var ctx = document.getElementById('myChart').getContext('2d');
var Render = new Chart(ctx, {
	type: 'line',
	data: data,
	options: options
});
