let textFlag = true;

function growShrinkNav() {
  let Logo = document.getElementById("logo_header");
  //console.log(Logo);
  if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 20) {
		textFlag = false;
    Logo.style.width = '37px';
		innerNav.style.marginTop = '.5%';
    nav.style.height = '54px';
    Logo.style.transition = 'all ease .5s';
    nav_links.style.transition = 'all ease .5s';
    nav_links.style.height = '38px';
		innerNav.style.fontSize = '12px';
		innerNav.style.transition = 'all easy .5s';
  } else {
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
  }
}

function navChange() {
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

  } else {
    nav_links.style.width = '76%';
    nav_links.style.marginRight = '100px';
  }
  // console.log(window.outerWidth);
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
function showEpee() {
	let epeeDetails = document.getElementById("epeeDetails").style.display = 'block';
	let overlayOpen = document.getElementById('overlay').style.display = 'block';
	document.getElementById('overlay').style.transition = 'all ease .5s';
}

//Open window showing details about Sharpwave
function showSharpwave() {
	let sharpwaveDetails = document.getElementById("sharpwaveDetails").style.display = 'block';
	let overlayOpen = document.getElementById('overlay').style.display = 'block';
	document.getElementById('overlay').style.transition = 'all ease .5s';
}

//Open window showing details about Sharpwave
function showHitik() {
	document.getElementById("hitikDetails").style.display = 'block';
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
}
