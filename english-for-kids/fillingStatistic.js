
function fillingTbl() {
	let tbl = document.getElementsByTagName('table');
	let tr = tbl[0].getElementsByTagName('tr');
	
	let summ_error = 0;
	//считаем общее кол-во ошибок
	for(let j = 0; j < 8; j++) {
		let arr_err = arr_name_cookie_error_all[j];
		for(let k = 0; k < 8; k++) {
			if(getCookie(arr_err[k])) {
				summ_error += getCookie(arr_err[k])*1;
			};
		};
	};
	
	for(let i = 3; i < 67; i++) {
		let tr_name_section = ',' + i + ',';
		let td = tr[i-1].getElementsByTagName('td');

		if(numb_tr_section.indexOf(tr_name_section) > -1) {
			let td_text = td[1].textContent;
			addTdlCookies(td,td_text,1,summ_error);
		};
		if(numb_tr_section.indexOf(tr_name_section) < 0) {
			let td_text = td[0].textContent;
			addTdlCookies(td,td_text,0,summ_error);
		};
	}
}

//закидываем данные из куки в таблицу
function addTdlCookies(td, tdText, firstIndex, summ_error) {
	if(getCookie(tdText)) {
		td[firstIndex+2].innerHTML = getCookie(tdText);
	};
	if(getCookie(tdText + '_success')) {
		td[firstIndex+3].innerHTML = getCookie(tdText + '_success');
	};
	if(getCookie(tdText + '_error')) {
		td[firstIndex+4].innerHTML = getCookie(tdText + '_error');
		//считаем процент каждой ошибки
		let numb_error = getCookie(tdText + '_error')*1;
		let percent_error = (numb_error*100)/summ_error;
		percent_error = round(percent_error, 0);
		td[firstIndex+5].innerHTML = percent_error + '%';
	};
}

//округляем
function round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}