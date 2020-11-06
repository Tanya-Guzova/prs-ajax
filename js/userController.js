const baseUrl = "http://localhost:8080/api/";


$(
    () => {
        $("#displayUsers").on("click",
            () => {
               
                //start a call to a server, read data from DB and assign all the data to users variable
                $.getJSON(`${baseUrl}/users`).done(users => {
                    let tbody = $("#tbody");
                        tbody.empty();
                    for (let u of users) {
                        /*all below are objects, when appending objects, unlike strings, 
                        you put td objects inside tr object, and tr object inside tbody object */
                        let tr = $("<tr></tr>");
                        let td1 = $(`<td>${u.id}</td>`);
                        let td2 = $(`<td>${u.userName}</td>`);
                        let td3 = $(`<td>${u.password}</td>`);
                        let td4 = $(`<td>${u.firstName}</td>`);
                        let td5 = $(`<td>${u.lastName}</td>`);
                        /*you can concatinate first and last name as
                        let name = $(`<td>${u.firstName} ${u.lastName}</td>`);
                        */
                        let td6 = $(`<td>${u.phoneNumber}</td>`);
                        let td7 = $(`<td>${u.email}</td>`);
                        let td8 = $(`<td>${u.reviewer}</td>`);
                        let td9 = $(`<td>${u.admin}</td>`);
                        tr.append(td1).append(td2).append(td3).append(td4).append(td5).append(td6).append(td7).append(td8).append(td9);
                        tbody.append(tr);
                    }
                })
            })

    }
)

//  display user by id

$(
    () => {
        $("#ppkButton").on("click",
            () => {
                let id = $("#ppk").val();       
                //start a call to a server, read data from DB and assign all the data to users variable
                $.getJSON(`${baseUrl}/users/${id}`).done(u => {
                    $("#pid").val(u.id);
                    $("#pusername").val(u.userName);
                    $("#ppassword").val(u.password);
                    $("#pfirstName").val(u.firstName);
                    $("#plastName").val(u.lastName);
                    $("#pphoneNumber").val(u.phoneNumber);
                    $("#pemail").val(u.email);
                    $("#pisReviewer").val(u.reviewer);
                    $("#pisAdmin").val(u.admin);
                })
            })
    }
)