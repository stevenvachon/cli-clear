"use strict";
var windows = process.platform.indexOf("win") === 0;



function clear()
{
	var i,lines;
	var stdout = "";
	
	if (windows === false)
	{
		stdout += "\033[2J";
	}
	else
	{
		lines = process.stdout.getWindowSize()[1];
		
		for (i=0; i<lines; i++)
		{
			stdout += "\r\n";
		}
	}
	
	// Reset cursur
	stdout += "\033[0f";
	
	process.stdout.write(stdout);
}



module.exports = clear;
