const { Command} = require('../class/command.js');
const { Trigger }  = require('../class/trigger.js');
const { Action }  = require('../class/action.js');


const trigger = new Trigger({
	keyword:"!btc",
	firstWord:true,	
});

const action = new Action({
	isReply:true,
	useMessage:true,
});

action.keyword = trigger.keyword

action.func = require('../actions/btcAction.js');

const command = new Command();
command.addTrigger(trigger)
command.addAction(action)

module.exports =  {
	command:command
}
