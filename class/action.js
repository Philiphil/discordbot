var Action = class Action{
	constructor(
		{
			func=null,
			useMessage=false,
			isMessage=false,
			isReply=false,
			deleteMessage=false
		}
	){
		this.func = func;
		this.useMessage=useMessage;
		this.isMessage=isMessage;
		this.isReply=isReply;
		this.deleteMessage=deleteMessage;
	}
	execute(message)
	{
		this.send( message, this.func(message) )
	}
	send(message,response)
	{
		if(response==null)return;
		if(this.isMessage){
  			message.channel.send( response )
  			.then(() => {
  				if(this.deleteMessage)message.delete() 
  			})
		}else if(this.isReply){
			message.reply( response )
				.then(() => {
					if(this.deleteMessage)message.delete() 
				})
		}		
	}
}

module.exports = {
	Action:Action
}