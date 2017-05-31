quantity = [['Voltaje','V'],
			['Corriente','A'],
			['Potencia Activa','W'],
			['Potencia Reactiva','VAR'],
			['Potencia Aparente','VA'],
			['Fase','°'],
			['Factor de Potencia',''],
			];


function getStockChart(url, elementID){
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


function getLiveChart(elementID, phase,quantityID) {
//  alert(mydata[0].temp);
	$(document).ready(function () {
		Highcharts.setOptions({
			global: {
				useUTC: false
			}
		});
		$(elementID).highcharts({
			chart: {
				type: 'spline',
				marginRight: 10,
				events: {
					load: function requestData() {
						// set up the updating of the chart each second
						var series = this.series[0];
						var shift = false;
						setInterval(function () {
							shift = series.data.length > 20;
								var y =  data.Fphases[0].fmeasures[quantityID].value;
								var x =  Date.parse(data.date);
								series.addPoint( [x,y], true, shift);
						}, 2000);
					}
				}
			},
			title: {
				text: quantity[quantityID][0]
			},
			xAxis: {
				type: 'datetime',
				tickPixelInterval: 150
			},
			yAxis: {
				title: {
					text: quantity[quantityID][0] +' ('+ quantity[quantityID][1] + ")"
				}
			},
			tooltip: {
				formatter: function () {
					return '<b>' + this.series.name + '</b><br/>' +
					Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
					Highcharts.numberFormat(this.y, 2);
				}
			},
			series: [{
				name: quantity[quantityID][0],
				data: []
			}]
		});
	});
}