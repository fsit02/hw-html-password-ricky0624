//功能一:純數字
function choice1() {
    var result = "";
	var sPool = "0123456789";
	var rows = new Number(text_rows1.value) ;
    Math.seedrandom($("#txtSeed").val()); //隨機亂數 //$就是讀取的意思,讀取txtSeed
	var iRandom = 0;
	var ch = "?";
	
	for (iRow = 1; iRow <= rows; iRow++) 
	{
		var sLine = (iRow + 100).toString().substr(1, 2) + ": ";
		        
		for (iCol = 1; iCol <= 10; iCol++) 
		{
		    iRandom = Math.floor(Math.random() * sPool.length);
			ch = sPool.substr(iRandom, 1);
			sLine += ch;
		}
		        
		result += sLine + "<br>";
	}
	        
	　$("#randomTable_1").html(result);  
}
// 功能2:數字+小寫字母: (去除 l, o)
// var sPool = "abcdefghijkmnpqrstuvwxyz0123456789";
function choice2(){
	var rows = new Number(text_rows2.value) ;
	var result = "";
	var sPool = "abcdefghijkmnpqrstuvwxyz0123456789";
	Math.seedrandom($("#txtSeed_a1").val());
	
	var iRandom = 0;
	var ch = "?" ;
	
	for (iRow = 1; iRow <= rows; iRow++) 
	{
		var sLine = (iRow + 100).toString().substr(1, 2) + ": ";
		        
		for (iCol = 1; iCol <= 10; iCol++) 
		{
		    iRandom = Math.floor(Math.random() * sPool.length);
			ch = sPool.substr(iRandom, 1);
			sLine += ch;
		}
		        
		result += sLine + "<br>";
	}
	        
	$("#randomTable_2").html(result);
}
// // 功能3:數字+大小寫字母: (去除 I, O, l, o)
// // var sPool = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz0123456789";
function choice3() {
	var result = "";
	var sPool = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz0123456789";
	var rows = new Number(text_rows3.value) ;
	Math.seedrandom($("#txtSeed_A1").val());
	var iRandom = 0;
	var ch = "?" ;
	for (var iRow = 1; iRow <= rows; iRow++) {
		var sLine = (iRow + 100).toString().substr(1, 2) + ": "; 
			for(var answer =1; answer<=10;answer++)                
			{
			  iRandom = Math.floor(Math.random() * sPool.length);
			  ch = sPool.substr(iRandom, 1);
			sLine += ch
		}
		result += sLine + "<br>";
	}
	$("#randomTable_3").html(result);
}