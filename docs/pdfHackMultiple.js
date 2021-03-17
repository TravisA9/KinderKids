// Works for     https://orientbook.net/abc     ...and others
/////////////////////////////////////////////////////////////////////////////
pdfemb_trans.watermark_map = [] // Disable watermark 
/////////////////////////////////////////////////////////////////////////////
$ = (sel) => document.getElementById(sel); // Syntactic sugar
/////////////////////////////////////////////////////////////////////////////
var body = document.getElementsByTagName("Body")[0];
var parent = document.createElement("div");
parent.id = 'box'
parent.style.backgroundColor = "#1d1c25";
parent.style.position = "fixed";
parent.style.display = "inline-block";
parent.style.left = "0px";
parent.style.top = "0px";
parent.style.zIndex = "1000";
parent.style.padding = "10px 10px 0px 10px";
parent.style.borderRadius = "0px 0px 50px 0px";
body.prepend(parent)
$('box').innerHTML = `
<style type="text/css">
	.bord{ padding:5px; border:medium solid #c32e2e; background:lightblue; font-size: 22px;
	    font-family: "Libre Franklin", "Helvetica Neue", helvetica, arial, sans-serif;
 }
.bord:hover{ background: white;}
.but{ background-color: #1b81bb; border-radius: 5px; color: #fff; cursor: pointer;
    display: inline-block; font-weight: 800; padding: 1em 2em;
    -webkit-transition: background 0.2s; transition: background 0.2s; margin:5px;
    font-family: "Libre Franklin", "Helvetica Neue", helvetica, arial, sans-serif;
}
	.but:hover{ background: gray;}
</style>


<span id='name' class="bord" title="Name Prefix" contentEditable=true style="border-right:0px; border-radius:7px 0px 0px 7px;" >document_</span><span id='index' title="Doc. Index" class="bord" contentEditable=true style="border-left:0px; border-right:0px;" >001</span><span id='ext' title="Extention" class="bord" style=" border-radius:0px 7px 7px 0px;border-left:0px;" contentEditable=true>.jpg</span><br>

<div style="padding:5px">
<button class='but' onclick="findAvailablePages()">Generate</button> <span id='total' title="Total pages" class="bord" style='background:white; border-radius:7px; margin-right:10px;'></span>
 <a id='link' download="" ></a></div>`;
/////////////////////////////////////////////////////////////////////////////
	var myVar = setInterval(myTimer, 1000);
	var numberPages = 0
/////////////////////////////////////////////////////////////////////////////
function myTimer() {
	var msg = document.querySelector('.pdfemb-loadingmsg')
	if(msg != null){ return;}
	else{ 
		numberPages = document.getElementsByClassName("pdfemb-inner-div").length
		$('total').innerHTML = numberPages
		window.clearInterval(myVar) // stop timer
	}
}
/////////////////////////////////////////////////////////////////////////////
	var canvases = []
	var interval = null //setInterval(download, 300, canvases);
/////////////////////////////////////////////////////////////////////////////
function findAvailablePages(){
	var index = parseInt($('index').innerHTML);
	var allPages = document.getElementsByClassName("pdfemb-inner-div")

	for (var i = index; i < allPages.length; i++) {
		var canv = allPages[i]
		if(canv.hasChildNodes()){
			canvases.push({id:"pdfemb-page" + i, index:i})
		}
	}
	if(canvases.length>0){
		interval = setInterval(download, 1000, canvases);
		download(canvases)
	}else{
		alert("Warning: No new pages found! You may need to scroll through a portion of the pdf to load missing pages. Also, make sure that the page index is between 1 and " + numberPages + '.');
	}
}
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
function download(canvases) {
  if(canvases.length == 0){ clearInterval(interval); }
	var current = canvases.shift();    // pop() takes from wrong end of array
	var canvas = document.getElementsByClassName(current.id)[0]

	var link = $("link");
	var num = current.index.toString().padStart(3, '0')
	link.download = $('name').innerHTML + num + $('ext').innerHTML
	link.href = canvas.children[0].toDataURL()
	link.click();
	$('index').innerHTML = (current.index+1).toString().padStart(3, '0');

}






		  

