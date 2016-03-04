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

//WORK IN PROGRESS
function logTester()
{
	//namePrompt
	console.log('Please enter testers name');
	var testerName = readline();
	if(testerName.length > 0)
	{
		console.log('Thank You!');
		//Black Gekko Development userID
		console.log('Please enter your userID');
		var userID = readline();
		if(userID.length > 0)
		{
			console.log('Thank You!');
		}
		else
		{
			consoleError();
		}
	}
	else
	{
		consoleError();
	}
}
//WORK IN PROGRESS
