$(document).ready(function(){
	var script = document.createElement('script');
	script.src = 'https://www.w3schools.com/lib/w3.js';
	script.type = 'text/javascript';
	document.getElementsByTagName('head')[0].appendChild(script);
	var newdiv=document.createElement('div');
	newdiv.id="right-pane";
	newdiv.style.position="fixed";
	newdiv.style.width="0%";
	newdiv.style.height="100%";
	newdiv.style.zIndex="2";
	newdiv.style.right="0%";
	newdiv.style.top="0%";
	var ans=false;
	//newdiv.style.backgroundColor="red";
	document.getElementsByTagName('body')[0].appendChild(newdiv);
	document.getElementsByTagName('body')[0].addEventListener("mousedown", mouseDown);
	function mouseDown() {
		if(ans==false)
		{document.getElementsByTagName('body')[0].addEventListener("mouseup", mouseUp);}
	}
	function mouseUp() {
	    var str=window.getSelection();
	    if((str!="")&&(str!=" "))
	    {
	    	alert('selection:'+str);
	    	ans=true;
	    	document.getElementById("right-pane").style.width="35%";
	    	var url = "http://localhost:8080/Eligere/index.html";
		    /*var xhr= new XMLHttpRequest();
			xhr.open('GET', url, true);
			xhr.onreadystatechange= function() {
			    if (this.readyState!==4) return;
			    if (this.status!==200) return; // or whatever error handling you want
			    document.getElementById('right-pane').innerHTML= this.responseText;
			};
			xhr.send();*/
			//newdiv.setAttribute("w3-include-html",url);
			//w3.includeHTML();
	    }    
	}
	function goback()
	{
	    document.getElementById("right-pane").innerHTML ="";
	    document.getElementById("right-pane").style.width = '0%';
	}
});

    
