
document.addEventListener('DOMContentLoaded', function(){
	document.getElementById('searchButt').addEventListener('click', searchForRoute);
	document.getElementById('mapButt').addEventListener('click', goToMap);
	document.getElementById('tableButt').addEventListener('click', goToTable);
	document.getElementById('buyButt').addEventListener('click', goToBuy);
});

function searchForRoute(){

  var input = getInput();
	chrome.tabs.create({ url: "http://www.straeto.is/" ,active:false});
  var tab;
  chrome.tabs.query( {url:"http://www.straeto.is/"},function(results){
    tab = results[0];
  });
  //chrome.tabs.executeScript(ID, { file: "straeto.js" },function(){
    chrome.tabs.sendMessage(tab.id, {action:"input",data: input},function(sender){
      tab.active = true;
    });
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




//chrome.extension.onMessage.addListener(function(request, sender,callBack) {
//  if (request.action == "InsertInput") {
//    callBack
//  }
//});

function onWindowLoad() {

  //var message = document.querySelector('#message');

  //chrome.tabs.executeScript(null, {
  //  file: "straeto.js"
  //}, function() {
  //  // If you try and inject into an extensions page or the webstore/NTP you'll get an error
  //  if (chrome.extension.lastError) {
  //    message.innerText = 'There was an error injecting script : \n' + chrome.extension.lastError.message;
  //  }
  //});

}

window.onload = onWindowLoad;