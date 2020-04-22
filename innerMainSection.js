
let nameModeApplication = getCookie('mode_application');
let modePlay = (nameModeApplication == 'mode_play');

document.body.onload = addElementMainSection;

function addElementMainSection() {
	let newSection = document.createElement('section');
    newSection.setAttribute('id', 'Main_Page');
    document.body.append(newSection);

    let newDiv1 = document.createElement('div');
    newDiv1.classList.add('flex-container');
    newSection.prepend(newDiv1);

    for(let i = 1; i < 9; i++) {


		let newA1 = document.createElement('a');
		newA1.setAttribute('href', 'categories.html');
		newA1.classList.add('main_card');
    	newA1.setAttribute('onclick', "setCookie('category', '" + arrCategory[i-1] + "')"); 
		newA1.setAttribute('style', 'text-decoration: none;');
		newDiv1.append(newA1);
		
		let newDiv2 = document.createElement('div');
    	newA1.append(newDiv2);

    	let newDiv3 = document.createElement('div');
    	newDiv3.setAttribute('id', 'id_card_gard_' + i);
		if(modePlay) {
			newDiv3.classList.add('card_grad_play');
		} else {
			newDiv3.classList.add('card_grad');
		};
    	newA1.append(newDiv3);

    	let newImg1 = document.createElement('img');
    	newImg1.setAttribute('src', arrImgCategory[i-1]);
    	newImg1.setAttribute('alt', 'image');    	
    	newImg1.classList.add('image_main');
    	newA1.append(newImg1);

    	let newDiv4 = document.createElement('div');
    	newDiv4.classList.add('container_text');
    	newA1.append(newDiv4);

    	let newP1 = document.createElement('p');
        newP1.innerHTML = arrCategoryP[i-1];
        newDiv4.append(newP1);
	};
	
	let selectedA = document.getElementById('id_menu_main');
	selectedA.classList.add('menu_active');
}

//cklick F5 del mode application
document.onkeydown = onkeydown;
function onkeydown() {
    if(event.keyCode == 116) {
        deleteCookie('mode_application');
    };
}
 


