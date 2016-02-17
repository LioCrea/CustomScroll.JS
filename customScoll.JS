	
		
	// FOR NON COMMERCIAL USE ONLY!
	//
	//
	// V1.1 - Creator: Liocrea / www.liocrea.com
	//
	//
	// HOW TO USE THIS PLUGIN:
	// 1. Create a div#content that wraps the whole document (start just after <body>, end juste before </body>)
	// 2. Make sur the id is #content and not something else or it won't work
	// 3. Insert the script/link to the script within <script type="text/javascript"> tag right before </body>
	// 4. Insert the customScroll.css file inside a <link> tag within the <head> of the page. You can customize almost everything to create YOUR scrollbar
	// 5. No need to import any jQuery library. It is a 100% pur Javascript script
	//
	// Optimized for Chrome ans IE browsers. Not working for Firefox browers right now. I'm working on that
	// Working for all browsers' sizes
	//
	// Issue/Bug? Contact lio@liototo.com or go on Github: https://github.com/LioCrea
	//
	
	if(!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {	// disable plugin if mobile
			var isFirefox = typeof InstallTrigger !== 'undefined'; 
			if(isFirefox)
				alert('This plugin doesn\'t work well under Firefox');

var allContent = document.getElementById('content'); 
var parent = allContent.parentNode; 
var creaWrapper = document.createElement('div'); 
creaWrapper.setAttribute('id' , 'wrapper'); 
parent.replaceChild(creaWrapper, allContent); 
creaWrapper.appendChild(allContent); 
var setScrollColor, setScrollBackColor; 
setScrollColor = allContent.getAttribute('scrollerColor'); 
setScrollBackColor = allContent.getAttribute('scrollBackColor'); 

var myBody = document.body; 
myBody.style.msOverflowStyle='none'; 
myBody.style.overflow = 'auto'; 
myBody.style.paddingRight = '10px'; 

var div1 , div2; 
div1 = document.createElement('div'); 
div1.setAttribute('class' , 'customScroll'); 
div1.style.position = 'fixed'; 
div1.style.zIndex = '10000!important'; 
div1.style.height = '100vh'; 
div1.style.top = '0'; 
div1.style.right = '0'; 
document.body.appendChild(div1); 

var customScroll = document.getElementsByClassName('customScroll')[0]; 
div2 = document.createElement('div'); 
div2.setAttribute('class' , 'scroller'); 
div2.style.cursor = 'pointer'; 					  
customScroll.appendChild(div2); 

var wrap = document.getElementById('wrapper'); 
wrap.style.overflow = 'hidden'; 
var customScrollHeight = customScroll.offsetHeight; 
var scroller = document.getElementsByClassName('scroller')[0]; 
var scrollerHeight = scroller.offsetHeight; 
var doc = document.getElementById('content'); 
var docHeight = doc.offsetHeight; 
var onLoadFactor = docHeight/customScrollHeight; 
var onLoadScrollerHeight = customScrollHeight/onLoadFactor+'px'; 

var rTScroll, rTScrollerPos, cursorPos, newHeight; 
var dragging = false; 
scroller.style.height = onLoadScrollerHeight; 

function onScroll(){ 
	docHeight = doc.offsetHeight; 
	onLoadFactor = docHeight/customScrollHeight; 
	rTScroll = myBody.scrollTop; 
	rTScrollerPos = rTScroll/onLoadFactor; 
	scroller.style.marginTop = rTScrollerPos+'px';
}
 
function onClick(evt){ 
	dragging = true; 
	cursorPos = evt.clientY; 
	scroller.style.top = cursorPos; 
	newHeight = cursorPos; 
	myBody.scrollTop = cursorPos*onLoadFactor; 
	doc.scrollTop = cursorPos; 
	console.log('cursor pos: '+cursorPos); 
	console.log('ScrollerTopPos: '+scroller.offsetTop); 
	console.log('NewTop: '+newHeight); 
} 
 
function onMouse(ev){
	myBody.style.webkitUserSelect = 'none';
	myBody.style.webkitTouchCallout = 'none';
	myBody.style.khtmlUserSelect = 'none';
	myBody.style.mozUserSelect = 'none';
	myBody.style.msUserSelect = 'none';
	myBody.style.userSelect = 'none';
	var $el = $('.scroller');
	var dragging = false; // drag it or not
	var startY = 0;
	var startT = 0;

	dragging = true;
	startY = ev.clientY;
	startT = scroller.style.marginTop+'px';
		
	window.addEventListener("mousemove" , function(ev) {
		if (dragging){
			myBody.scrollTop = ev.clientY*onLoadFactor; 
			
			// calculate new top
			var newSlide = parseInt(startT,10) + (ev.clientY - startY);
			
			//stay in parent
			var maxSlide =  div1.offsetHeight-scroller.offsetHeight;          
			newSlide = newSlide<0?0:newSlide>maxSlide?maxSlide:newSlide;
			scroller.style.marginTop = newSlide +'px';
		}
	}, false)
	
	window.addEventListener("mouseup" , function() {
		dragging = false;
		myBody.style.webkitUserSelect = 'default';
		myBody.style.webkitTouchCallout = 'default';
		myBody.style.khtmlUserSelect = 'default';
		myBody.style.mozUserSelect = 'default';
		myBody.style.msUserSelect = 'default';
		myBody.style.userSelect = 'default';		
	}, false);
}

window.addEventListener("scroll", onScroll,true); 
customScroll.addEventListener("click", onClick,false);
scroller.addEventListener("mousedown", onMouse,true);

		//
		//
		// DEMO SCRIPT
		// DEMO SCRIPT
		// DEMO SCRIPT
		//
		//
		
		

		
	

		
