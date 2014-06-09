
document.addEventListener('DOMContentLoaded', function(){
	document.getElementById('searchButt').addEventListener('click', searchForRoute);
	document.getElementById('mapButt').addEventListener('click', goToMap);
	document.getElementById('tableButt').addEventListener('click', goToTable);
	document.getElementById('buyButt').addEventListener('click', goToBuy);
});


function findTitleTag(html){
  var reg = "<title>*</title>";
  

}

function searchForRoute(){
	var input = {};
	input.origin = document.getElementById('inpOrig').value;
	input.dest = document.getElementById('inpDest').value;
	input.timeH = document.getElementById('timeH').options[document.getElementById('timeH').selectedIndex].value;
	input.timeM = document.getElementById('timeM').options[document.getElementById('timeM').selectedIndex].value;
	
	if(document.getElementById('leave').checked){
		input.timeRev = document.getElementById('leave').value;
	} else {
		input.timeRev = document.getElementById('arrive').value
	}
	
	input.dateD = document.getElementById('dateD').options[document.getElementById('dateD').selectedIndex].value;
	input.dateMY = document.getElementById('dateM').options[document.getElementById('dateM').selectedIndex].value;
	console.log(input);
	chrome.tabs.create({ url: "http://www.straeto.is/" });
}

function goToMap(){
	chrome.tabs.create({ url: "http://www.straeto.is/rauntimakort/" });
}

function goToTable(){
	chrome.tabs.create({ url: "http://s.straeto.is/timetableplanner/captureServiceDetails.do?method=reset&hss=XhsTa118697940" });
}

function goToBuy(){
	chrome.tabs.create({ url: "https://www.straeto.is/kaupa-farmida-og-kort/verslun/" });
}




/*chrome.extension.onMessage.addListener(function(request, sender) {
  if (request.action == "getSource") {
    message.innerText = request.source;
  }
});*/
function round (time) {
	if(time%5 === 0){
		return time;
	} else {
		return time + (5 - time%5);
	}
}

function onWindowLoad() {
var timeObj = {};
var d = new Date();
timeObj.month = d.getMonth() + 1;
timeObj.year = d.getFullYear();
timeObj.day = d.getDate();
timeObj.hour = d.getHours();
timeObj.minute = round(d.getMinutes());
console.log(timeObj);
var formHour = document.getElementById('timeH');
formHour.value = timeObj.hour || 0;
var formMinute = document.getElementById('timeM');
formMinute.value = timeObj.minute || 0;
var formDay = document.getElementById('dateD');
formDay.value = timeObj.day || 0;
var formMonth = document.getElementById('dateM');
formMonth.value = timeObj.year + "-" + timeObj.month;
/*  var message = document.querySelector('#message');

  chrome.tabs.executeScript(null, {
    file: "getPagesSource.js"
  }, function() {
    // If you try and inject into an extensions page or the webstore/NTP you'll get an error
    if (chrome.extension.lastError) {
      message.innerText = 'There was an error injecting script : \n' + chrome.extension.lastError.message;
    }
  });
*/
}

window.onload = onWindowLoad;