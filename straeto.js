function InjectInfo(data){
	alert("HEY! LISTEN!");
	var origin = document.querySelector('#originName');
	var dest = 	document.querySelector('#destinationName');
	var form = 	document.querySelector('#minimalJourneyRequestDetails');
	origin.value = data.origin;
	dest.value = data.dest;
	form.submit();
}
chrome.runtime.onMessage.addListener(function(request, sender) {
    alert("HEY!");
  //if (request.action == "input") {
    InjectInfo(request.data);
});
