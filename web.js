let tg = window.Telegram.WebApp; //получаем объект webapp телеграма 

let money = 0

tg.expand(); //расширяем на все окно  

tg.MainButton.text = "Заработать"; //изменяем текст кнопки 
tg.MainButton.setText("Закончить работу"); //изменяем текст кнопки иначе
tg.MainButton.textColor = "#F55353"; //изменяем цвет текста кнопки
tg.MainButton.color = "#143F6B"; //изменяем цвет бэкграунда кнопки
tg.MainButton.setParams({"color": "#143F6B"}); //так изменяются все параметры 
tg.MainButton.show()

function buttonClick(elem) {
    money++
    elem.value = `Заработано: ${money}$`
};

Telegram.WebApp.onEvent('mainButtonClicked', function(){
	tg.sendData(`${money}`); 
	//при клике на основную кнопку отправляем данные в строковом виде
});
