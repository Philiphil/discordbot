var Trigger = class Trigger{
	constructor(
		{
			keyword = "",
			isRegex=false,
			containsWord=false,
			firstWord=false,
			caseInsensitive=false,
			cooldown = 0,
			lastExecution=null
		}
	){
		this.keyword = keyword;
		this.isRegex=isRegex;
		this.containsWord=containsWord;
		this.firstWord=firstWord;
		this.caseInsensitive=caseInsensitive;
		this.cooldown = cooldown;
		this.lastExecution=lastExecution;
	}
	isOn(message){
		var isOn = false
		var timestamp=null;
		if(this.cooldown>0)
		{
			timestamp = Date.now();
			if(!lastExecution != null){
				if(lastExecution+this.cooldown>timestamp)return false;
			}
		}

		if(!this.caseInsensitive){
			this.keyword=this.keyword.toLowerCase()
			message.content=message.content.toLowerCase()
		}
		if(this.containsWord && message.content.indexOf(this.keyword) > -1)isOn=true
		if(this.firstWord && message.content.indexOf(this.keyword)==0)isOn=true
		if(isOn)this.lastExecution=timestamp;
		return isOn;
	}
}

module.exports = {
	Trigger:Trigger
}