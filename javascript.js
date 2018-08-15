let textFlag = true;

function focus() {
  document.getElementById('cosmet630').style.filter = 'blur'
}

function maxText() {
  if(window.outerWidth > 1000) {
    document.getElementById('cosmet_desc').style.fontSize = '1.7vw';
    console.log(document.getElementById('cosmet_desc').style.fontSize = '1.7vw');
    document.getElementById('sharpwave_desc').style.fontSize = '1.7vw';
    document.getElementById('cs230_desc').style.fontSize = '1.7vw';
    document.getElementById('biopodz_desc').style.fontSize = '1.7vw';
    document.getElementById('hitik_desc').style.fontSize = '1.7vw';
    document.getElementById('thesis_desc').style.fontSize = '1.7vw';
    document.getElementById('watch_desc').style.fontSize = '1.7vw';
    document.getElementById('epee_desc').style.fontSize = '1.7vw';
    document.getElementById('pen_desc').style.fontSize = '1.7vw';
    document.getElementById('msi_desc').style.fontSize = '1.7vw';
    document.getElementById('archviz_desc').style.fontSize = '1.7vw';
    document.getElementById('idrink_desc').style.fontSize = '1.7vw';
  }
  else if(window.outerWidth < 1000 || window.outerWidth > 500) {
    document.getElementById('cosmet_desc').style.fontSize = '2.1vw';
    console.log(document.getElementById('cosmet_desc').style.fontSize = '2.3vw');
    document.getElementById('sharpwave_desc').style.fontSize = '2.3vw'; 
    document.getElementById('cs230_desc').style.fontSize = '2.3vw';
    document.getElementById('biopodz_desc').style.fontSize = '2.3vw';
    document.getElementById('hitik_desc').style.fontSize = '2.3vw';
    document.getElementById('thesis_desc').style.fontSize = '2.3vw';
    document.getElementById('watch_desc').style.fontSize = '2.3vw';
    document.getElementById('epee_desc').style.fontSize = '2.3vw';
    document.getElementById('pen_desc').style.fontSize = '2.3vw';
    document.getElementById('msi_desc').style.fontSize = '2.3vw';
    document.getElementById('archviz_desc').style.fontSize = '2.3vw';
    document.getElementById('idrink_desc').style.fontSize = '2.3vw';  
  }

  else if(window.outerWidth < 1500 || window.outerWidth > 1000) {
    document.getElementById('cosmet_desc').style.fontSize = '.1vw';
    console.log(document.getElementById('cosmet_desc').style.fontSize = '2.3vw');
    document.getElementById('sharpwave_desc').style.fontSize = '2.3vw'; 
    document.getElementById('cs230_desc').style.fontSize = '2.3vw';
    document.getElementById('biopodz_desc').style.fontSize = '2.3vw';
    document.getElementById('hitik_desc').style.fontSize = '2.3vw';
    document.getElementById('thesis_desc').style.fontSize = '2.3vw';
    document.getElementById('watch_desc').style.fontSize = '2.3vw';
    document.getElementById('epee_desc').style.fontSize = '2.3vw';
    document.getElementById('pen_desc').style.fontSize = '2.3vw';
    document.getElementById('msi_desc').style.fontSize = '2.3vw';
    document.getElementById('archviz_desc').style.fontSize = '2.3vw';
    document.getElementById('idrink_desc').style.fontSize = '2.3vw';  
  }

  else if(window.outerWidth < 500) {
    document.getElementById('cosmet_desc').style.display = 'none';
    console.log(document.getElementById('cosmet_desc').style.fontSize = '3vw');
    document.getElementById('sharpwave_desc').style.fontSize = '3vw'; 
    document.getElementById('cs230_desc').style.style.fontSize = '3vw';
    document.getElementById('biopodz_desc').style.fontSize = '3vw';
    document.getElementById('hitik_desc').style.fontSize = '3vw';
    document.getElementById('thesis_desc').style.fontSize = '3vw';
    document.getElementById('watch_desc').style.fontSize = '3vw';
    document.getElementById('epee_desc').style.fontSize = '3vw';
    document.getElementById('pen_desc').style.fontSize = '3vw';
    document.getElementById('msi_desc').style.fontSize = '3vw';
    document.getElementById('archviz_desc').style.fontSize = '3vw';
    document.getElementById('idrink_desc').style.fontSize = '3vw';  
  }
  else {
    document.getElementById('cosmet_desc').style.display = 'none';
    console.log(document.getElementById('cosmet_desc').style.fontSize = '2vw');
    document.getElementById('sharpwave_desc').style.fontSize = '2vw'; 
    document.getElementById('cs230_desc').style.style.fontSize = '2vw';
    document.getElementById('biopodz_desc').style.fontSize = '2vw';
    document.getElementById('hitik_desc').style.fontSize = '2vw';
    document.getElementById('thesis_desc').style.fontSize = '2vw';
    document.getElementById('watch_desc').style.fontSize = '2vw';
    document.getElementById('epee_desc').style.fontSize = '2vw';
    document.getElementById('pen_desc').style.fontSize = '2vw';
    document.getElementById('msi_desc').style.fontSize = '2vw';
    document.getElementById('archviz_desc').style.fontSize = '2vw';
    document.getElementById('idrink_desc').style.fontSize = '2vw';  
  }
}

function growShrinkNav() {
  let Logo = document.getElementById("logo_header");
  let navIcon1 = document.getElementById("navIcon1");
  let navIcon2 = document.getElementById("navIcon2");
  let navIcon3 = document.getElementById("navIcon3");
  let navIcon4 = document.getElementById("navIcon4");
  let navIcon5 = document.getElementById("navIcon5");

  if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 20) {
		textFlag = false;
    navIcon1.style.width = "60%";
    navIcon1.style.transition = 'all ease .5s';
    navIcon1.style.marginLeft = '0';
    navIcon2.style.width = "60%";
    navIcon2.style.transition = 'all ease .5s';
    navIcon2.style.marginLeft = '0';
    navIcon3.style.width = "60%";
    navIcon3.style.transition = 'all ease .5s';
    navIcon3.style.marginLeft = '0';
    navIcon4.style.width = "60%";
    navIcon4.style.transition = 'all ease .5s';
    navIcon4.style.marginLeft = '0';
    navIcon5.style.width = "60%";
    navIcon5.style.transition = 'all ease .5s';
    navIcon5.style.marginLeft = '0';
    Logo.style.width = '70px';
    Logo.style.transition = 'all ease .5s';


  } else {
    navIcon1.style.width = "45px";
    navIcon1.style.marginLeft = '7px';
    navIcon2.style.width = "45px";
    navIcon2.style.marginLeft = '7px';
    navIcon3.style.width = "45px";
    navIcon3.style.marginLeft = '7px';
    navIcon4.style.width = "45px";
    navIcon4.style.marginLeft = '7px';
    navIcon5.style.width = "45px";
    navIcon5.style.marginLeft = '7px';
    Logo.style.width = '62px';
    Logo.style.padding = '2px';
    Logo.style.transition = 'all ease .5s';
		textFlag = true;
  }
}

//Open window showing details about the Sioux Watch
function showWatch() {
	document.getElementById("watchDetails").style.display = 'block';
	document.getElementById('overlay').style.display = 'block';
	document.getElementById('overlay').style.transition = 'all ease .5s';
}

//Open window showing details about Biopodz
function showBiopodz() {
	document.getElementById("biopodzDetails").style.display = 'block';
	document.getElementById('overlay').style.display = 'block';
	document.getElementById('overlay').style.transition = 'all ease .5s';
}

//Open window showing details about Epee football boots
function showEpee() {
	document.getElementById("epeeDetails").style.display = 'block';
	document.getElementById('overlay').style.display = 'block';
	document.getElementById('overlay').style.transition = 'all ease .5s';
}

//Open window showing details about Cozmet
function showCozmet() {
	document.getElementById("cosmetDetails").style.display = 'block';
	document.getElementById('overlay').style.display = 'block';
	document.getElementById('overlay').style.transition = 'all ease .5s';
}

//Open window showing details about Epee football Audi pen
function showPen() {
	document.getElementById("penDetails").style.display = 'block';
	document.getElementById('overlay').style.display = 'block';
	document.getElementById('overlay').style.transition = 'all ease .5s';
}

//Open window showing details about Sharpwave
function showSharpwave() {
	document.getElementById("sharpwaveDetails").style.display = 'block';
	document.getElementById('overlay').style.display = 'block';
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
