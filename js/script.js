function datta(){
	var st = document.getElementById("data_rojd").value;

	var str = st.match(/^[0-9]{2}\.[0-9]{2}\.[0-9]{4}$/i);
	
	var i;
	
	if (!str){
		alert("Дата рождения введена в неверном формате \nПример: 11.07.1990 или 01.05.1956");
		return false;
	}	else {
		i = str;	
		var arr = new Array(i);
		}
		//return true;
		//var x = new Array(date);
		arr = arr.toString();
		//x = x.toString();
		arr = arr.split(".");
		
		var date = new Date(arr[2], arr[1]-1, arr[0], 1, 1, 1); //Дата из текстового поля формы
		//alert("Вы ввели дату " + date); // проверяем что оноа верна 
		
		var date1 = new Date(); // текущая дата, сегодня тоесть
		
		date1.toString = function(){
		var year = date1.getFullYear();
		var mounth = date1.getMonth()+1; //правка, прибавляем к месяцу единицу, ьак как отсчёт от 0, т.е 
										//Январь не первый месяц, а 0, но х.з. почему дата несоответствует
		var day = date1.getDay();
		if (mounth < 10) mounth = "0" + mounth; //ведущий 0
		if (day < 10) day = "0" + day;			//ведущий 0
		return day + "." + mounth + "." + year;
		}
		//alert("Сегодня " + date1); 
		
		var age = date1.getTime() - date.getTime(); //милисекунды разности дата-время
		var age_sec = Math.floor(age / 1000); // секунды
		document.getElementById("sec").innerHTML = age_sec;
		
		var hour = Math.floor(age_sec / 3600); // ну тут сам конеш
		document.getElementById("hours").innerHTML = hour;
		
		var resault = Math.floor(age / 8.64e7); // 8.64e7 = 86 400 000 миллисекунд
		document.getElementById("day").innerHTML = resault;
}
	

