const { Command} = require('../class/command.js');
const { Trigger }  = require('../class/trigger.js');
const { Action }  = require('../class/action.js');

const https = require('https');

const trigger = new Trigger({
	keyword:"!get",
	firstWord:true,	
});

const action = new Action({
	isReply:true,
	useMessage:true,
	deleteMessage:true,
});

action.keyword = trigger.keyword

action.func = require('../actions/getAction.js');

const command = new Command();
command.addTrigger(trigger)
command.addAction(action)

module.exports =  {
	command:command
}
