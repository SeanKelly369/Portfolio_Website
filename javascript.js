let textFlag = true;

function growShrinkNav() {
  let Logo = document.getElementById("logo_header");
  let navIcon1 = document.getElementById("navIcon1");
  let navIcon2 = document.getElementById("navIcon2");
  let navIcon3 = document.getElementById("navIcon3");
  let navIcon4 = document.getElementById("navIcon4");
  let navIcon5 = document.getElementById("navIcon5");
  // let navIcon1Hover = document.getElementById("navIcon1:hover");

  if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 20) {
		textFlag = false;
    navIcon1.style.width = "32px";
    navIcon2.style.width = "32px";
    navIcon3.style.width = "32px";
    navIcon4.style.width = "32px";
    navIcon5.style.width = "32px";
    Logo.style.width = '44px';
		innerNav.style.marginTop = '.5%';
    nav.style.height = '54px';
    Logo.style.transition = 'all ease .5s';
    nav_links.style.transition = 'all ease .5s';
    nav_links.style.height = '38px';
		innerNav.style.fontSize = '12px';
		innerNav.style.transition = 'all easy .5s';
  } else {
    navIcon1.style.width = "40px";
    navIcon2.style.width = "40px";
    navIcon3.style.width = "40px";
    navIcon4.style.width = "40px";
    navIcon5.style.width = "40px";
    Logo.style.width = '62px';
    Logo.style.padding = '2px';
    nav.style.height = '80px';
    nav_links.style.height = '60px';
    nav_links.style.transition = 'all ease .5s';
    Logo.style.transition = 'all ease .5s';
		innerNav.style.marginTop = '1%';
		innerNav.style.fontSize = '14px';
		innerNav.style.transition = 'all ease .5s';
		textFlag = true;
    aboutme.style.width = "130%";
  }
}

function sizeChange() {
  if (window.outerWidth < 600 && window.outerWidth > 499) {
		if(textFlag){
			innerNav.style.fontSize = '10px';
		}else if(textFlag = false){
				innerNav.style.fontSize = '12px';
		}
    nav_links.style.width = '66%';
    nav_links.style.marginRight = '60px';
  } else if (window.outerWidth < 700 && window.outerWidth > 600) {
    nav_links.style.width = '70%';
    nav_links.style.marginRight = '80px';
		if(textFlag) {
			innerNav.style.fontSize = '12px';
		}

  } else if (window.outerWidth < 499) {
    nav_links.style.width = '62%';
    nav_links.style.marginRight = '30px';
		if(textFlag){
			innerNav.style.fontSize = '7px';
		}else if(textFlag = false){
				innerNav.style.fontSize = '12px';
		}
		// innerNav.style.fontSize = '7px';
		innerNav.style.padding = '2px';

  } else if (window.outerWidth < 800 && window.outerWidth > 700) {
    nav_links.style.width = '72%';
    nav_links.style.marginRight = '90px';
    footer.style.height = '3vh';

  } else if (window.outerWidth < 1000 && window.outerWidth > 800){

    footer.style.height = '4.5vh';
  }

  else {
    nav_links.style.width = '76%';
    nav_links.style.marginRight = '100px';
    footer.style.height = '3vh';
  }
}

//Open window showing details about the Sioux Watch
function showWatch() {
	let watchDetails = document.getElementById("watchDetails").style.display = 'block';
	let overlayOpen = document.getElementById('overlay').style.display = 'block';
	document.getElementById('overlay').style.transition = 'all ease .5s';
}

//Open window showing details about Biopodz
function showBiopodz() {
	let biopodzDetails = document.getElementById("biopodzDetails").style.display = 'block';
	let overlayOpen = document.getElementById('overlay').style.display = 'block';
	document.getElementById('overlay').style.transition = 'all ease .5s';
}

//Open window showing details about Epee football boots
function showEpee() {
	let epeeDetails = document.getElementById("epeeDetails").style.display = 'block';
	let overlayOpen = document.getElementById('overlay').style.display = 'block';
	document.getElementById('overlay').style.transition = 'all ease .5s';
}

//Open window showing details about Cozmet
function showCozmet() {
	let cozmetDetails = document.getElementById("cosmetDetails").style.display = 'block';
	let overlayOpen = document.getElementById('overlay').style.display = 'block';
	document.getElementById('overlay').style.transition = 'all ease .5s';
}

//Open window showing details about Epee football Audi pen
function showPen() {
	let penDetails = document.getElementById("penDetails").style.display = 'block';
	let overlayOpen = document.getElementById('overlay').style.display = 'block';
	document.getElementById('overlay').style.transition = 'all ease .5s';
}

//Open window showing details about Sharpwave
function showSharpwave() {
	let sharpwaveDetails = document.getElementById("sharpwaveDetails").style.display = 'block';
	let overlayOpen = document.getElementById('overlay').style.display = 'block';
	document.getElementById('overlay').style.transition = 'all ease .5s';
}

// Open window showing details about Sharpwave
function showHitik() {
	document.getElementById("hitikDetails").style.display = 'block';
	document.getElementById('overlay').style.display = 'block';
	document.getElementById('overlay').style.transition = 'all ease .5s';
}

// Open window showing details about Arch Viz work
function showArch() {
  document.getElementById("archDetails").style.display = 'block';
	document.getElementById('overlay').style.display = 'block';
	document.getElementById('overlay').style.transition = 'all ease .5s';
}

// Open window showing details about Sharpwave
function showMSI() {
	document.getElementById("MSIDetails").style.display = 'block';
	document.getElementById('overlay').style.display = 'block';
	document.getElementById('overlay').style.transition = 'all ease .5s';
}

// Open window showing details about iDrink
function showiDrink() {
	document.getElementById("iDrinkDetails").style.display = 'block';
	document.getElementById('overlay').style.display = 'block';
	document.getElementById('overlay').style.transition = 'all ease .5s';
}

// Open window showing details about iDrink
function showThesis() {
	document.getElementById("thesisDetails").style.display = 'block';
	document.getElementById('overlay').style.display = 'block';
	document.getElementById('overlay').style.transition = 'all ease .5s';
}

// Open window showing details about Hobbies
function showHobbies() {
	document.getElementById("hobbiesDetails").style.display = 'block';
	document.getElementById('overlay').style.display = 'block';
	document.getElementById('overlay').style.transition = 'all ease .5s';
}

// Open window showing details about CS230
function showCS230() {
	document.getElementById("CS230Details").style.display = 'block';
	document.getElementById('overlay').style.display = 'block';
	document.getElementById('overlay').style.transition = 'all ease .5s';
}

// Open window showing details about about me
function showAboutMeDetails() {
	document.getElementById("AboutMeDetails").style.display = 'block';
	document.getElementById('overlay').style.display = 'block';
	document.getElementById('overlay').style.transition = 'all ease .5s';
}

//Close window
function hideProject() {

	document.getElementById('watchDetails').style.display = 'none';
  document.getElementById('biopodzDetails').style.display = 'none';
  document.getElementById('epeeDetails').style.display= 'none';
  document.getElementById('penDetails').style.display= 'none';
  document.getElementById('overlay').style.display = 'none';
  document.getElementById('cosmetDetails').style.display = 'none';
  document.getElementById('sharpwaveDetails').style.display = 'none';
  document.getElementById('hitikDetails').style.display = 'none';
  document.getElementById('archDetails').style.display = 'none';
  document.getElementById('MSIDetails').style.display = 'none';
  document.getElementById('iDrinkDetails').style.display = 'none';
  document.getElementById('hobbiesDetails').style.display = 'none';
  document.getElementById('thesisDetails').style.display = 'none';
  document.getElementById('CS230Details').style.display = 'none';
  document.getElementById('AboutMeDetails').style.display = 'none';
}

// Copyright year
function getDate() {
  document.write(new Date().getFullYear());
}

function ScrollTo(name) {
  //init thread
  ScrollToResolver(document.getElementById(name));
}

function ScrollToResolver(elem) {
  var jump = parseInt(elem.getBoundingClientRect().top * .2);
  document.getElementById('thesisDetails').scrollTop += jump;
  document.documentElement.scrollTop += jump;
  //lastjump detects anchor unreachable, also manual scrolling to cancel animation if scroll > jump
  if (!elem.lastjump || elem.lastjump > Math.abs(jump)) {
    elem.lastjump = Math.abs(jump);
    setTimeout(function() {
      ScrollToResolver(elem);
    }, "86");
  } else {
    elem.lastjump = null;
  }
}
