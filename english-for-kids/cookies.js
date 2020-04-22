
function setCookie(name, value) {
    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + "; path=/";
    document.cookie = updatedCookie;
}

function getCookie(name) {
    let matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function deleteCookie(name) {
    setCookie(name, "");
}

function deleteCookieAllCountWords(){
	for(var i = 0; i < arr_name_cookie_all.length; i++) {
		let arr_name_cookie_all_elem = arr_name_cookie_all[i];
		for(var j = 0; j < 8; j++) {
			let name_cookie = arr_name_cookie_all_elem[j];
			if(getCookie(name_cookie)) {
				deleteCookie(name_cookie);
			};
		};
	};
	location.reload();
}	
