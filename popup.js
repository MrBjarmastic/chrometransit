
document.addEventListener('DOMContentLoaded', function(){
	document.getElementById('searchButt').addEventListener('click', searchForRoute);
	document.getElementById('mapButt').addEventListener('click', goToMap);
	document.getElementById('tableButt').addEventListener('click', goToTable);
	document.getElementById('buyButt').addEventListener('click', goToBuy);
});

function searchForRoute(){

  var input = getInput();
  
  //alert(input);
	chrome.tabs.create({ url: "http://www.straeto.is/" ,active:false},function(tab){ 
    //alert("Penis")   
    setTimeout(function () {        
      chrome.tabs.sendMessage(tab.id, {data: input},function(){
      });
      tab.active = true;
    }, 1000);
  });
  //chrome.tabs.executeScript(ID, { file: "straeto.js" },function(){
  //});
  //alert(input.origin);
}

function getInput(){
    var input = {};
  input.origin = document.getElementById('inpOrig').value;
  input.dest = document.getElementById('inpDest').value;
  input.timeH = document.getElementById('timeH').options[document.getElementById('timeH').selectedIndex].value;
  input.timeM = document.getElementById('timeM').options[document.getElementById('timeM').selectedIndex].value;
  
  if(document.getElementById('leave').checked){
    input.timeRev = document.getElementById('leave').value;
  } else {
    input.timeRev = document.getElementById('arrive').value;
  }
  
  input.dateD = document.getElementById('dateD').options[document.getElementById('dateD').selectedIndex].value;
  input.dateMY = document.getElementById('dateM').options[document.getElementById('dateM').selectedIndex].value;
  return input;
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
}

window.onload = onWindowLoad;