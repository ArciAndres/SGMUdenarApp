function getChart(url, elementID){
	$.getJSON(url, function (data) {
		// Create the chart
		Highcharts.stockChart(elementID, {
			rangeSelector: {
				selected: 1
			},
			color: {
				linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
				stops: [
						[0, '#003399'],
						[1, '#3366AA']
					]
			},
			title: {
				text: 'Voltaje'
			},
			series: [{
				name: 'AAPL',
				data: data,
				tooltip: {
					valueDecimals: 2
				}
			}]
		});
	});
};

function getJSONfile(url){
	JSON.parse
};