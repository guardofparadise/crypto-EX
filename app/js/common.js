(function(){

	let currency = 'USD';

	let url_ETH = `https://apiv2.bitcoinaverage.com/indices/global/ticker/ETH${currency}`;
	let url_LTC	= `https://apiv2.bitcoinaverage.com/indices/global/ticker/LTC${currency}`;
	let url_BTC	= `https://apiv2.bitcoinaverage.com/indices/global/ticker/BTC${currency}`;

let sign;
let math_sign = '%';

if(currency === 'RUB') sign = '₽';
else if(currency === 'GBP') sign = '£';
else if(currency === 'EUR') sign = '€';
else sign = '$';

function xhrReqEth() {
let xhr = new XMLHttpRequest();

xhr.open('GET', url_ETH, true)
xhr.onload = function() {
	if(this.status === 200){
		let eth = JSON.parse(this.responseText);
		console.log(eth);

		let path_h = eth.changes.percent.hour.toFixed(1),
				path_d = eth.changes.percent.day.toFixed(1),
				path_w = eth.changes.percent.week.toFixed(1),
				path_m = eth.changes.percent.month.toFixed(1);

		let ether 	 	 	 = document.querySelector('.card-etherium'),
				eth_price 	 = ether.querySelector('.price'),
				eth_checkBox = ether.querySelector('#switch-1'),
				eth_hour	   = ether.querySelector('.hour'),
				eth_day  		 = ether.querySelector('.day'),
				eth_week 		 = ether.querySelector('.week'),
				eth_month 	 = ether.querySelector('.month');

				eth_price.textContent = sign + ' ' + eth.ask.toFixed(2);
				eth_hour.textContent  = path_h + ' ' + math_sign;
				eth_day.textContent   = path_d + ' ' + math_sign;
				eth_week.textContent  = path_w + ' ' + math_sign;
				eth_month.textContent = path_m + ' ' + math_sign;

				eth_checkBox.addEventListener('change', function(){
					eth_hour.textContent  === eth.changes.percent.hour.toFixed(1) + ' ' + math_sign ? eth_hour.textContent = eth.changes.price.hour.toFixed(2) + ' ' + currency : eth_hour.textContent = eth.changes.percent.hour.toFixed(1) + ' ' + math_sign;
					eth_day.textContent  === eth.changes.percent.day.toFixed(1) + ' ' + math_sign ? eth_day.textContent = eth.changes.price.day.toFixed(2) + ' ' + currency : eth_day.textContent = eth.changes.percent.day.toFixed(1) + ' ' + math_sign
					eth_week.textContent  === eth.changes.percent.week.toFixed(1) + ' ' + math_sign ? eth_week.textContent = eth.changes.price.week.toFixed(2) + ' ' + currency : eth_week.textContent = eth.changes.percent.week.toFixed(1) + ' ' + math_sign
					eth_month.textContent  === eth.changes.percent.month.toFixed(1) + ' ' + math_sign ? eth_month.textContent = eth.changes.price.month.toFixed(2) + ' ' + currency : eth_month.textContent = eth.changes.percent.month.toFixed(1) + ' ' + math_sign
				})
	}
}
xhr.send()
}

function xhrReqLtc() {
let xhr = new XMLHttpRequest();

xhr.open('GET', url_LTC, true)
xhr.onload = function() {
	if(this.status === 200){
		let ltc = JSON.parse(this.responseText);
		console.log(ltc);

		let litecoin 	 	 	 = document.querySelector('.card-litecoin'),
		ltc_price 	 = litecoin.querySelector('.price'),
		ltc_checkBox = litecoin.querySelector('#switch-2'),
		ltc_hour	   = litecoin.querySelector('.hour'),
		ltc_day  		 = litecoin.querySelector('.day'),
		ltc_week 		 = litecoin.querySelector('.week'),
		ltc_month 	 = litecoin.querySelector('.month');

		ltc_price.textContent = sign + ' ' + ltc.ask.toFixed(2);
		ltc_hour.textContent  = ltc.changes.percent.hour.toFixed(1) + ' ' + math_sign;
		ltc_day.textContent   = ltc.changes.percent.day.toFixed(1) + ' ' + math_sign;
		ltc_week.textContent  = ltc.changes.percent.week.toFixed(1) + ' ' + math_sign;
		ltc_month.textContent = ltc.changes.percent.month.toFixed(1) + ' ' + math_sign;

		ltc_checkBox.addEventListener('change', function(){
			ltc_hour.textContent  === ltc.changes.percent.hour.toFixed(1) + ' ' + math_sign ? ltc_hour.textContent = ltc.changes.price.hour.toFixed(2) + ' ' + currency : ltc_hour.textContent = ltc.changes.percent.hour.toFixed(1) + ' ' + math_sign;
			ltc_day.textContent  === ltc.changes.percent.day.toFixed(1) + ' ' + math_sign ? ltc_day.textContent = ltc.changes.price.day.toFixed(2) + ' ' + currency : ltc_day.textContent = ltc.changes.percent.day.toFixed(1) + ' ' + math_sign
			ltc_week.textContent  === ltc.changes.percent.week.toFixed(1) + ' ' + math_sign ? ltc_week.textContent = ltc.changes.price.week.toFixed(2) + ' ' + currency : ltc_week.textContent = ltc.changes.percent.week.toFixed(1) + ' ' + math_sign
			ltc_month.textContent  === ltc.changes.percent.month.toFixed(1) + ' ' + math_sign ? ltc_month.textContent = ltc.changes.price.month.toFixed(2) + ' ' + currency : ltc_month.textContent = ltc.changes.percent.month.toFixed(1) + ' ' + math_sign
		})
	}
}
xhr.send()
}

function xhrReqBtc() {
let xhr = new XMLHttpRequest();

xhr.open('GET', url_BTC, true)
xhr.onload = function() {
	
	if(this.status === 200){
		let btc = JSON.parse(this.responseText);
		console.log(btc);
		let path_h = btc.changes.percent.hour.toFixed(1),
				path_d = btc.changes.percent.day.toFixed(1),
				path_w = btc.changes.percent.week.toFixed(1),
				path_m = btc.changes.percent.month.toFixed(1);

				let bitcoin 	 	 	 = document.querySelector('.card-bitcoin'),
				btc_price 	 = bitcoin.querySelector('.price'),
				btc_hour	   = bitcoin.querySelector('.hour'),
				btc_day  		 = bitcoin.querySelector('.day'),
				btc_week 		 = bitcoin.querySelector('.week'),
				btc_checkBox = bitcoin.querySelector('#switch-3'),
				btc_month 	 = bitcoin.querySelector('.month');

				btc_price.textContent = sign + ' ' + btc.ask.toFixed(2);
				btc_hour.textContent  = path_h + ' ' + math_sign;
				btc_day.textContent   = path_d + ' ' + math_sign;
				btc_week.textContent  = path_w + ' ' + math_sign;
				btc_month.textContent = path_m + ' ' + math_sign;

				btc_checkBox.addEventListener('change', function(){
					btc_hour.textContent  === btc.changes.percent.hour.toFixed(1) + ' ' + math_sign ? btc_hour.textContent = btc.changes.price.hour.toFixed(2) + ' ' + currency : btc_hour.textContent = btc.changes.percent.hour.toFixed(1) + ' ' + math_sign;
					btc_day.textContent  === btc.changes.percent.day.toFixed(1) + ' ' + math_sign ? btc_day.textContent = btc.changes.price.day.toFixed(2) + ' ' + currency : btc_day.textContent = btc.changes.percent.day.toFixed(1) + ' ' + math_sign
					btc_week.textContent  === btc.changes.percent.week.toFixed(1) + ' ' + math_sign ? btc_week.textContent = btc.changes.price.week.toFixed(2) + ' ' + currency : btc_week.textContent = btc.changes.percent.week.toFixed(1) + ' ' + math_sign
					btc_month.textContent  === btc.changes.percent.month.toFixed(1) + ' ' + math_sign ? btc_month.textContent = btc.changes.price.month.toFixed(2) + ' ' + currency : btc_month.textContent = btc.changes.percent.month.toFixed(1) + ' ' + math_sign
				})
	}
}
xhr.send()
}
	

	window.addEventListener('load', function(){
		
		let btn = document.getElementsByTagName('button')[0];
		let curCur = document.querySelector('.selectize-input');

		btn.addEventListener('click', function(){
			let currency = 'USD';

			currency = document.querySelector('.item').textContent;

			let url_ETH = `https://apiv2.bitcoinaverage.com/indices/global/ticker/ETH${currency}`;
			let url_LTC	= `https://apiv2.bitcoinaverage.com/indices/global/ticker/LTC${currency}`;
			let url_BTC	= `https://apiv2.bitcoinaverage.com/indices/global/ticker/BTC${currency}`;

	let sign;
	let math_sign = '%';

	if(currency === 'RUB') sign = '₽';
	else if(currency === 'GBP') sign = '£';
	else if(currency === 'EUR') sign = '€';
	else sign = '$';

	function xhrReqEth() {
		let xhr = new XMLHttpRequest();

		xhr.open('GET', url_ETH, true)
		xhr.onload = function() {
			if(this.status === 200){
				let eth = JSON.parse(this.responseText);
				console.log(eth);

				let path_h = eth.changes.percent.hour.toFixed(1),
						path_d = eth.changes.percent.day.toFixed(1),
						path_w = eth.changes.percent.week.toFixed(1),
						path_m = eth.changes.percent.month.toFixed(1);

				let ether 	 	 	 = document.querySelector('.card-etherium'),
					  eth_price 	 = ether.querySelector('.price'),
				    eth_checkBox = ether.querySelector('#switch-1'),
						eth_hour	   = ether.querySelector('.hour'),
						eth_day  		 = ether.querySelector('.day'),
						eth_week 		 = ether.querySelector('.week'),
						eth_month 	 = ether.querySelector('.month');

						eth_price.textContent = sign + ' ' + eth.ask.toFixed(2);
						eth_hour.textContent  = path_h + ' ' + math_sign;
						eth_day.textContent   = path_d + ' ' + math_sign;
						eth_week.textContent  = path_w + ' ' + math_sign;
						eth_month.textContent = path_m + ' ' + math_sign;

						eth_checkBox.addEventListener('change', function(){
							eth_hour.textContent  === eth.changes.percent.hour.toFixed(1) + ' ' + math_sign ? eth_hour.textContent = eth.changes.price.hour.toFixed(2) + ' ' + currency : eth_hour.textContent = eth.changes.percent.hour.toFixed(1) + ' ' + math_sign;
							eth_day.textContent  === eth.changes.percent.day.toFixed(1) + ' ' + math_sign ? eth_day.textContent = eth.changes.price.day.toFixed(2) + ' ' + currency : eth_day.textContent = eth.changes.percent.day.toFixed(1) + ' ' + math_sign
							eth_week.textContent  === eth.changes.percent.week.toFixed(1) + ' ' + math_sign ? eth_week.textContent = eth.changes.price.week.toFixed(2) + ' ' + currency : eth_week.textContent = eth.changes.percent.week.toFixed(1) + ' ' + math_sign
							eth_month.textContent  === eth.changes.percent.month.toFixed(1) + ' ' + math_sign ? eth_month.textContent = eth.changes.price.month.toFixed(2) + ' ' + currency : eth_month.textContent = eth.changes.percent.month.toFixed(1) + ' ' + math_sign
						})
			}
		}
		xhr.send()
	}

	function xhrReqLtc() {
		let xhr = new XMLHttpRequest();

		xhr.open('GET', url_LTC, true)
		xhr.onload = function() {
			if(this.status === 200){
				let ltc = JSON.parse(this.responseText);
				console.log(ltc);

				let litecoin 	 	 	 = document.querySelector('.card-litecoin'),
				ltc_price 	 = litecoin.querySelector('.price'),
				ltc_checkBox = litecoin.querySelector('#switch-2'),
				ltc_hour	   = litecoin.querySelector('.hour'),
				ltc_day  		 = litecoin.querySelector('.day'),
				ltc_week 		 = litecoin.querySelector('.week'),
				ltc_month 	 = litecoin.querySelector('.month');

				ltc_price.textContent = sign + ' ' + ltc.ask.toFixed(2);
				ltc_hour.textContent  = ltc.changes.percent.hour.toFixed(1) + ' ' + math_sign;
				ltc_day.textContent   = ltc.changes.percent.day.toFixed(1) + ' ' + math_sign;
				ltc_week.textContent  = ltc.changes.percent.week.toFixed(1) + ' ' + math_sign;
				ltc_month.textContent = ltc.changes.percent.month.toFixed(1) + ' ' + math_sign;

				ltc_checkBox.addEventListener('change', function(){
					ltc_hour.textContent  === ltc.changes.percent.hour.toFixed(1) + ' ' + math_sign ? ltc_hour.textContent = ltc.changes.price.hour.toFixed(2) + ' ' + currency : ltc_hour.textContent = ltc.changes.percent.hour.toFixed(1) + ' ' + math_sign;
					ltc_day.textContent  === ltc.changes.percent.day.toFixed(1) + ' ' + math_sign ? ltc_day.textContent = ltc.changes.price.day.toFixed(2) + ' ' + currency : ltc_day.textContent = ltc.changes.percent.day.toFixed(1) + ' ' + math_sign
					ltc_week.textContent  === ltc.changes.percent.week.toFixed(1) + ' ' + math_sign ? ltc_week.textContent = ltc.changes.price.week.toFixed(2) + ' ' + currency : ltc_week.textContent = ltc.changes.percent.week.toFixed(1) + ' ' + math_sign
					ltc_month.textContent  === ltc.changes.percent.month.toFixed(1) + ' ' + math_sign ? ltc_month.textContent = ltc.changes.price.month.toFixed(2) + ' ' + currency : ltc_month.textContent = ltc.changes.percent.month.toFixed(1) + ' ' + math_sign
				})
			}
		}
		xhr.send()
	}

	function xhrReqBtc() {
		let xhr = new XMLHttpRequest();

		xhr.open('GET', url_BTC, true)
		xhr.onload = function() {
			
			if(this.status === 200){
				let btc = JSON.parse(this.responseText);
				console.log(btc);
				let path_h = btc.changes.percent.hour.toFixed(1),
						path_d = btc.changes.percent.day.toFixed(1),
						path_w = btc.changes.percent.week.toFixed(1),
						path_m = btc.changes.percent.month.toFixed(1);

						let bitcoin 	 	 	 = document.querySelector('.card-bitcoin'),
						btc_price 	 = bitcoin.querySelector('.price'),
						btc_hour	   = bitcoin.querySelector('.hour'),
						btc_day  		 = bitcoin.querySelector('.day'),
						btc_week 		 = bitcoin.querySelector('.week'),
						btc_checkBox = bitcoin.querySelector('#switch-3'),
						btc_month 	 = bitcoin.querySelector('.month');

						btc_price.textContent = sign + ' ' + btc.ask.toFixed(2);
						btc_hour.textContent  = path_h + ' ' + math_sign;
						btc_day.textContent   = path_d + ' ' + math_sign;
						btc_week.textContent  = path_w + ' ' + math_sign;
						btc_month.textContent = path_m + ' ' + math_sign;

						btc_checkBox.addEventListener('change', function(){
							btc_hour.textContent  === btc.changes.percent.hour.toFixed(1) + ' ' + math_sign ? btc_hour.textContent = btc.changes.price.hour.toFixed(2) + ' ' + currency : btc_hour.textContent = btc.changes.percent.hour.toFixed(1) + ' ' + math_sign;
							btc_day.textContent  === btc.changes.percent.day.toFixed(1) + ' ' + math_sign ? btc_day.textContent = btc.changes.price.day.toFixed(2) + ' ' + currency : btc_day.textContent = btc.changes.percent.day.toFixed(1) + ' ' + math_sign
							btc_week.textContent  === btc.changes.percent.week.toFixed(1) + ' ' + math_sign ? btc_week.textContent = btc.changes.price.week.toFixed(2) + ' ' + currency : btc_week.textContent = btc.changes.percent.week.toFixed(1) + ' ' + math_sign
							btc_month.textContent  === btc.changes.percent.month.toFixed(1) + ' ' + math_sign ? btc_month.textContent = btc.changes.price.month.toFixed(2) + ' ' + currency : btc_month.textContent = btc.changes.percent.month.toFixed(1) + ' ' + math_sign
						})
			}
		}
		xhr.send()
	}

	xhrReqEth();
	xhrReqLtc();
	xhrReqBtc();

		})
	})

	

	document.addEventListener('DOMContentLoaded', xhrReqEth);
	document.addEventListener('DOMContentLoaded', xhrReqLtc);
	document.addEventListener('DOMContentLoaded', xhrReqBtc);

	// setInterval(xhrReqEth, 30000)
	// setInterval(xhrReqLtc, 30000)
	// setInterval(xhrReqBtc, 30000)

})()


$(function() {
		$('select').selectize();
});
