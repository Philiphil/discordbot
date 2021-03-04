const { Client, Intents } = require("discord.js");
const common = require('../local/common.js')
const intents = new Intents([
    Intents.ALL,
]);

var bot = class Bot{
	constructor({login,serverId}){
		this.bot  = new Client({ ws: { intents } })		
		this.bot.login(login)
		this.textCommands = [];
		this.members=null;
		this.id=null;
		this.serverId=serverId;
	}
	run(){
		var self = this

		this.bot.on('ready', async function () {
		  self.id = self.bot.user.id;
		  await self.getOnlineMembers();
		  console.log("ready")
		  console.log(new Date())
		});

		this.bot.on('message', message => {
			if ( message.author.id == self.id) return
			for (var i = 0; i < self.textCommands.length; i++) {
				self.textCommands[i].command.on(message)
			}
		})
	}

	async getOnlineMembers(){
		var self=this;

		if(this.members) {
			return this.members
		}
		this.members = await this.bot.guilds.cache
			.get(this.serverId)
			.members.fetch({withPresences: true, cache: false});
		this.members.forEach(function(e,i,a){
			if(e.user.id== self.id){
				self.members.delete(i)
			}
		})
		return this.members
	}
}





async function getRandomOnlineMember(){
	let users = await getOnlineMembers()
	let rand = common.getRandomInt(users.size)
	var index=0;
	var user=null;
	users.forEach(function(e,i,a){
		if(index==rand){
			user= e;
		}
		index++
	})
	return user;
}



module.exports = {
	Bot : bot,

	getRandomOnlineMember: function(){
		return getRandomOnlineMember();
	}
}
