function InjectInfo(data){
   		var origin= document.getElementById('originName');
		var dest = 	document.getElementById( 'destinationName');
		var form = 	document.getElementById( 'minimalJourneyRequestDetails');
		origin.value = data.origin;
		dest.value = data.dest;
	setTimeout(function () {        
	//alert("HEY! LISTEN!");

		form.submit();
    }, 1000);
}
chrome.runtime.onMessage.addListener(function(message, sender,sendResponse) {
    sendResponse();
    InjectInfo(message.data);
});
