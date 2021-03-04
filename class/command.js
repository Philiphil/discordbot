var Command = class Command{
	constructor(){
		this.triggers = [];
		this.actions = [];
	}
	on(message){
		var execute=false;
		for (var i = 0; i < this.triggers.length; i++) {
			if(this.triggers[i].isOn(message))
			{
				execute=true;
				break;
			}
		}
		if(execute){
			for (var i = 0; i < this.actions.length; i++) {
				this.actions[i].execute(message);
			}
		}
	}
	addTrigger(trigger){
		trigger.command=this
		this.triggers.push(trigger)
	}
	addAction(action){
		action.command=this
		this.actions.push(action)
	}

}


module.exports = {
	Command:Command
}