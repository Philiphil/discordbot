const { Command} = require('../class/command.js');
const { Trigger }  = require('../class/trigger.js');
const { Action }  = require('../class/action.js');


const trigger = new Trigger({
	keyword:"!rand",
	firstWord:true,	
});

const action = new Action({
	isReply:true,
	useMessage:true,
	deleteMessage:true,
});

action.func = require('../actions/randAction.js');

const command = new Command();
command.addTrigger(trigger)
command.addAction(action)

module.exports =  {
	command:command
}