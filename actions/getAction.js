const common = require('../local/common.js');
const https = require('https');

module.exports = function(){
	var self=this;
	let link= message.content.substring( message.content.indexOf(this.keyword) +this.keyword.length +1 )
	 https.get('https://api.coindesk.com/v1/bpi/currentprice/btc.json', (resp) => {
	  let data = '';
	  resp.on('data', (chunk) => {
	     data+= chunk;
	  });
	  resp.on('end', () => {
	  	self.send(message,data)
	  	return;
	  });
	})
	return;
}
