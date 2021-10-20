Listik = $("#listik")
let gotinfo = localStorage.getItem("recid")
console.log(gotinfo)
$.ajax({
    url: "https://realibi.kz/courses/" + gotinfo,
    method: "get",
    success: function (response) {
        console.log(response)
        let users = response
        users.map(item => {
        Listik.append(` <div class="block">
        <p>Название курсов:${item.title}</p>
        <p> Телефонный номер:${item.phones}</p>
        <p> Описание курсов:${item.description}</p>
        <p> Адрес курсов:${item.addresses}</p>
        <p> Инстаграм курсов:${item.instagram}</p>
        <p id="lolo"> <img src="${item.img_src}"></p>
        
        </div>`)
        })
    },
    error: function () {
        console.log("ошибка!")
    }
})