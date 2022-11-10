function show_result(data){
    let result = document.getElementById("result");
    result.innerHTML = "<br\><h3>Таблица действий</h3><table id='mytable'><tr><th>Шаг</th><th>Значение</th></tr></table>"
    let table=document.querySelector("#mytable")
    table.innerHTML += `<tr><td>Введенное число</td><td>${data.value[0]}</td></tr>`
    table.innerHTML += `<tr><td>Число в двоичном виде</td><td>${data.value[1]}</td></tr>`
    table.innerHTML += `<tr><td>Реверс числа в двоичном виде</td><td>${data.value[2]}</td></tr>`
    table.innerHTML += `<tr><td>Реверс числа в десятичном виде</td><td>${data.value[3]}</td></tr>`

}
$(document).ready(function(){
    $("#translate_table").bind("ajax:success", function(xhr, data, status)
    {
        show_result(data)
    })
})