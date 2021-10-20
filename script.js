let btn = document.querySelector("#btn")
let login = document.querySelector("#login")
let list = document.querySelector("#list")
btn.addEventListener('click', function () {
    $.ajax({
        url: "https://realibi.kz/teachers",
        method: "get",
        success: function (response) {
            listDiv = $("#list")
            listDiv2 = $("#list2")
            console.log(response)
            let users = response
            users.map(item => {
                if (item.approved = true & item.declined == false) {
                    listDiv.append(` <div class="info_block">
                <p id="hide">${item.course_id}</p>
                <p> Юзернейм:${item.fullname}</p>
                <p> Полное имя:${item.description}</p>
                <p id="lolo"> <img src="${item.img_url}"></p>
                </div>`)
                } else if (item.declined = true) {
                    listDiv2.append(` <div class="info_block">
                <p id="hide">${item.course_id}</p>
                <p> Юзернейм:${item.fullname}</p>
                <p> Полное имя:${item.description}</p>
                <p id="lolo"> <img src="${item.img_url}"></p>
                </div>`)
                }
                let teacherItems = document.querySelectorAll(".info_block");
                console.log(teacherItems)

                for (let i = 0; i < teacherItems.length; i++) {
                    teacherItems[i].addEventListener('click', function (event) {
                        let blockKids = event.currentTarget.children;
                        let courseId = blockKids[0].innerHTML;
                        console.log(courseId)
                        localStorage.setItem("recid",courseId)
                        window.location.href= "second.html"
                    })
                }
            });

        },
        error: function (response) {
            console.log("ошибка!")
        }
    })
})