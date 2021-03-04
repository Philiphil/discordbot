const { Bot } =  require('./bot/bot.js')

var bot = new Bot({

})

bot.textCommands.push(
	require('./builtinCommands/randCommand.js')
);
bot.textCommands.push(
	require('./builtinCommands/responseCommand.js')
);
bot.textCommands.push(
	require('./builtinCommands/getCommand.js')
);
bot.textCommands.push(
	require('./builtinCommands/btcCommand.js')
);

bot.run()