function setoptoutcookie(){
 var d = new Date();
 d.setTime(d.getTime() + (100*365*24*60*60*1000));
 d = d.toUTCString();
 document.cookie = "webtrekkOptOut=1;expires=" + d + ";path=/;domain=<ENTER YOUR DOAMIN HERE>";
}