function InjectInfo(data){
	var button = document.getElementsByName('methoddefaultMethod')[0]
	var origin = document.getElementById('originName');
	var dest = 	document.getElementById('destinationName');
	var form = 	document.getElementById('minimalJourneyRequestDetails');
	//form.originName.blur();
	button.focus();
	//origin.focus();
	origin.value = data.origin;
	form.originName.value = data.origin;
	form.timeH.focus();
	dest.focus();
	dest.value = data.dest;
	form.destinationName.value = data.dest;
	form.timeH.focus();	

	form.timeH = data.timeH;
	form.timeM = data.timeM;

	form.dateD = data.dateD;
	form.dateMY = data.dateMY;   
	
	form.submit();
}
chrome.runtime.onMessage.addListener(function(message, sender,sendResponse) {
    //sendResponse();
    InjectInfo(message.data);
});
