var windows = process.platform.indexOf("win") == 0;



function clear()
{
	if (!windows)
	{
		process.stdout.write("\033[2J");
	}
	else
	{
		var lines = process.stdout.getWindowSize()[1];
		var stdout = "";
		
		for (var i=0; i<lines; i++)
		{
			stdout += "\r\n";
		}
		
		process.stdout.write(stdout);
	}
	
	// Reset cursur
	process.stdout.write("\033[0f");
}



module.exports = clear;
