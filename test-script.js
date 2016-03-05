//Jeremy Eramian 2016
//Pre-Scripting Browser Testing
//
// Script Notes
// Only Black Gekko Development team has to enter user ID
//

function consoleError()
{
	console.log("Something has gone wrong, please contact an administrator");
}
function consoleSuccess()
{
	console.log("The test was a success!");
}
function testComplete()
{
	console.log("Test(s) have completed");
}
function testPass()
{
	console.log("Test(s) have passed");
}
function testFail()
{
	console.log("Test(s) have failed");
}

var codename = window.navigator.appCodeName;
var appVersion = window.navigator.appVersion;
var canWeHasCookie = navigator.cookieEnabled;

function localStorageTest()
{
	try
	{
		if(localStorage !== 'undefined')
		{
			testPass();
		}
	}
	catch(err)
	{
		testFail();
	}
	finally
	{
		testComplete();
	}
}

function cookiesEnabled()
{
	if(!navigator.cookieEnabled)
	{
		testPass();
		testComplete();
	}
}

function getBrowser()
{
	console.log(codename);
	console.log(appVersion);
}

//WORK IN PROGRESS START
var testerNames = [];

function testerInfo()
{
	//new name prompt
	var testerName = window.prompt('Please enter the name of the tester');
	if(testerName.length > 0)
	{
		testerNames[0] = testerName;
		console.log(testerName);
		localStorage.setItem('TesterNames', JSON.stringify(testerNames));
		var gekkoID = window.prompt('Please enter your Black Gekko ID');
		if(gekkoID.length > 0)
		{
			console.log('Thank you!');
		}
		else
		{
			console.log('Not Gekko team');
		}
	}
	else
	{
		consoleError();
	}
}

var storedTesters = JSON.parse(localStorage.getItem('TesterNames'));
//WORK IN PROGRESS END