	
		
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

				// create #wrapper
				var allContent = document.getElementById('content');
				var parent = allContent.parentNode;
				var creaWrapper = document.createElement('div');
				creaWrapper.setAttribute('id' , 'wrapper');
				parent.replaceChild(creaWrapper, allContent);
				creaWrapper.appendChild(allContent);
				var setScrollColor, setScrollBackColor;
				setScrollColor = allContent.getAttribute('scrollerColor');
				setScrollBackColor = allContent.getAttribute('scrollBackColor');

				// dynamic body style
				var myBody = document.body;
				myBody.style.overflow = 'auto';
				myBody.style.paddingRight = '10px';
				myBody.style.msOverflowStyle='none';
				
				var div1 , div2;
				// dynamic customScroll creation
				div1 = document.createElement('div');
				div1.setAttribute('class' , 'customScroll');
				div1.style.position = 'fixed';
				div1.style.zIndex = '10000!important';
				div1.style.height = '100vh';
				div1.style.top = '0';
				div1.style.right = '0';
				myBody.appendChild(div1);
				
				// dynamic scroller creation
				var customScroll = document.getElementsByClassName('customScroll')[0];
				div2 = document.createElement('div');
				div2.setAttribute('class' , 'scroller');
				div2.style.cursor = 'pointer';
				div2.style.transition = '.15s';
				customScroll.appendChild(div2);
				
				// minimum set of condition for #wrapper. DO NOT CHANGE
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
			
			// allContent.style.height = docHeight+'px';
			// myBody.style.height = docHeight+'px';
			scroller.style.height = onLoadScrollerHeight;
				console.log('content height: '+allContent.offsetHeight);
				console.log('wrapper height: '+docHeight);
				console.log('body height: '+myBody.offsetHeight);
			// console.log('WindowSize: '+winHeight);
			// console.log('ScrollerHeight: '+scrollerHeight);
			// console.log('DocHeight: '+docHeight);
			// console.log('CustomScrollHeight: '+customScrollHeight);
			// console.log('OnLoadFactor: '+onLoadFactor);
			// console.log('OnLoadScrollerHeight: '+onLoadScrollerHeight);
			
			function onScroll(){
				docHeight = doc.offsetHeight; // compatibilite infinite scroll
				onLoadFactor = docHeight/customScrollHeight; // compatibilite infinite scroll
				rTScroll = myBody.scrollTop; // retrieve RT scroll position of wrap
				rTScrollerPos = rTScroll/onLoadFactor; // calculate RT scroller position as a function of onLoadFactor
				scroller.style.marginTop = rTScrollerPos+'px'; // update RT scroller position
				// console.log('RTScroll: '+rTScrollerPos);
				// console.log('wrapper position: '+wrap.scrollTop);
				// console.log('body width: '+myBody.offsetHeight);
				// console.log('content width: '+docHeight);
			}
			
			function onClick(evt){
			//	dragging = true;
				cursorPos = evt.clientY;
				scroller.style.top = cursorPos;
				newHeight = cursorPos;
				myBody.scrollTop = cursorPos*onLoadFactor; // retrieve doc position
				doc.scrollTop = cursorPos;
				console.log('cursor pos: '+cursorPos);
				console.log('ScrollerTopPos: '+scroller.offsetTop);
				console.log('NewTop: '+newHeight);
			}
			
			function onMouse(){
				myBody.style.webkitUserSelect = 'none';
				myBody.style.webkitTouchCallout = 'none';
				myBody.style.khtmlUserSelect = 'none';
				myBody.style.mozUserSelect = 'none';
				myBody.style.msUserSelect = 'none';
				myBody.style.userSelect = 'none';
				var el = document.getElementsByClassName('scroller')[0];
				var parent = document.getElementsByClassName('customScroll')[0];
				var dragging = false;
				var startY = 0;
				var startT = 0;
						console.log('top/down: '+el.style.marginTop);
				window.onmousedown = function(ev) {
				console.log('WORKING');
					dragging = true;
					startY = ev.clientY;
					startT = el.style.marginTop;
					console.log('top/down2: '+startT);
				};
				window.onmousemove = function(ev) {
					if (dragging){
						myBody.scrollTop = ev.clientY*onLoadFactor; 
						console.log('top: '+startT);
						// calculate new top
						var newSlide = parseInt(startT,10) + (ev.clientY - startY);
						console.log('Mouse Position:  '+ev.clientY+'px // Element Position: '+el);
						//stay in parent
						var maxSlide =  parent.offsetHeight-el.offsetHeight;   
						
						newSlide = newSlide<0?0:newSlide>maxSlide?maxSlide:newSlide;
						el.style.MarginTop = newSlide+'px';
					}
				}
				window.onmouseup = function() {
					dragging = false;
				};
					}			
					
					// run function on scroll
					window.addEventListener("scroll", onScroll,true);
					customScroll.addEventListener("click", onClick,false);
					scroller.addEventListener("mousedown", onMouse,true);
			}	

		//
		//
		// DEMO SCRIPT
		// DEMO SCRIPT
		// DEMO SCRIPT
		//
		//
		
		

		
	

		
