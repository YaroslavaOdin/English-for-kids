document.write('<div class = "burger-menu">');  
document.write('<a href="#" class="burger-menu__button"> <span class="burger-menu__lines"></span> </a>');
	document.write('<nav class="burger-menu_nav" id="menu">');
		document.write('<a id="id_menu_main" href="index.html" class="burger-menu__link">Main Page</a>');
		for(let i = 0; i < arrCategory.length; i++) {
			document.write('<a  id="id_menu_category_'+ i +'" href="categories.html" onclick=\'' + 'setCookie("category", "' + arrCategory[i] + '")' + '\' class="burger-menu__link">' + arrCategoryP[i] + '</a>');
		}
		document.write('<a id="id_menu_stat" href="statistics.html" class="burger-menu__link">Statistic</a>');
	document.write('</nav>');
document.write('<div class="burger-menu__overlay"></div></div>');
document.write('<input type="checkbox" id="switch" onclick="clickChbx()"><label for="switch">Toggle</label>');
document.write('<script src = "script_for_menu.js"></script>');
document.write('<script src = "cookies.js"></script>');
document.write('<script src = "modeApplic.js"></script>');



       