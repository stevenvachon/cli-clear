var exec = require("child_process").exec;
var util = require("util");



module.exports = function(callback)
{
	var cmd = /^win/.test(process.platform) ? "cls" : "clear";
	
	exec(cmd, function(error, stdout, stderr)
	{
		util.puts(stdout);
		
		callback();
	});
}



module.exports.version = "0.1.0";