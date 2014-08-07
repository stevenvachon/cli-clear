var windows = process.platform.indexOf("win") == 0;



function clear()
{
	var stdout = "";
	
	if (!windows)
	{
		stdout += "\033[2J";
	}
	else
	{
		var lines = process.stdout.getWindowSize()[1];
		
		for (var i=0; i<lines; i++)
		{
			stdout += "\r\n";
		}
	}
	
	// Reset cursur
	stdout += "\033[0f";
	
	process.stdout.write(stdout);
}



module.exports = clear;
