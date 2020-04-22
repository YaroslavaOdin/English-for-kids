
document.body.onload = addTable;

function addTable() {
	var table = document.createElement('table');
	table.setAttribute('id', 'tbl_stat');
	document.body.append(table);

	var tbody = table.appendChild(document.createElement('tbody'));
	var index_section = 0;
	var index_words_eng = 0;
	var index_words_ru = 0;
	for(var i = 1; i < 67; i++) { 
		var tr_name_section = ',' + i + ',';
		var tr = tbody.appendChild(document.createElement('tr'));

		if(i == 1) {
			var th = tr.appendChild(document.createElement('th'));
			th.setAttribute('colspan', '7');
			
			var button_stat = document.createElement('input');
	        button_stat.setAttribute('type', 'button');
	        button_stat.setAttribute('id', 'buttonStat');
	        button_stat.setAttribute('onclick', 'deleteCookieAllCountWords()');
	        button_stat.setAttribute('value', 'Reset');
	        th.append(button_stat);
		};

		if(i == 2) {
			for(var j = 1; j < 8; j++) { 
				var th = tr.appendChild(document.createElement('th'));
				th.innerHTML = arr_th[j-1];
			};
		};

		if(numb_tr_section.indexOf(tr_name_section) > -1) {
			var td1 = tr.appendChild(document.createElement('td'));
			td1.setAttribute('rowspan', '8');
			td1.innerHTML = arr_name_section[index_section];
			index_section++;

			var td2 = tr.appendChild(document.createElement('td'));
			td2.innerHTML = arr_words_eng[index_words_eng];
			index_words_eng++;

			var td3 = tr.appendChild(document.createElement('td'));
			td3.innerHTML = arr_words_ru[index_words_ru];
			index_words_ru++;

			for(var k = 1; k < 5; k++) { 
				var td = tr.appendChild(document.createElement('td'));
			};
		};

		if(i > 2) {
			if(numb_tr_section.indexOf(tr_name_section) < 0) {
				for(var k = 1; k < 7; k++) { 
					var td = tr.appendChild(document.createElement('td'));
					if(k == 1) {
						td.innerHTML = arr_words_eng[index_words_eng];
						index_words_eng++;
					};
					if(k == 2) {
						td.innerHTML = arr_words_ru[index_words_ru];
						index_words_ru++;
					};
				};
			};
		};
	}
	//add data table
	fillingTbl();

	let selectedA = document.getElementById('id_menu_stat');
	selectedA.classList.add('menu_active');
}

