
var xhttp = new XMLHttpRequest();
xhttp.open('POST', 'fundalize.com/includes/ajax_useractions.php', true);
var cookies = document.cookie;
var SID = getCookie('session');
var params = 'uid=20936&pid='+user_id+'&amount=10&session='+SID+'&message=Met%20liefde%20gegeven%203>&mode=donate';



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
