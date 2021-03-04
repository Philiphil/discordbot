const { Command} = require('../class/command.js');
const { Trigger }  = require('../class/trigger.js');
const { Action }  = require('../class/action.js');


const trigger = new Trigger({
	keyword:"ping",
	containsWord:true,	
});

const action = new Action({
	isReply:true,
	useMessage:true,
	deleteMessage:true,
});

action.func = function(){
	return "pong"
}

const command = new Command();
command.addTrigger(trigger)
command.addAction(action)

module.exports =  {
	command:command
}
