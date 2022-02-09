$(document).ready(function () {
    var data = [{
        "id": "100",
        "name": "iPhone 4S",
        "brand": "Apple",
        "os": "iOS"
    },
    {
        "id": "101",
        "name": "Moto X",
        "brand": "Motorola",
        "os": "Android"
    },
    {
        "id": "102",
        "name": "iPhone 6",
        "brand": "Apple",
        "os": "iOS"
    },
    {
        "id": "103",
        "name": "Samsung Galaxy S",
        "brand": "Samsung",
        "os": "Android"
    },
    {
        "id": "104",
        "name": "Google Nexus",
        "brand": "ASUS",
        "os": "Android"
    },
    {
        "id": "105",
        "name": "Surface",
        "brand": "Microsoft",
        "os": "Windows"
    }];
    console.log("in ready");
    let drop = "<div id=\"drop1\"><label for=\"os\">Choose OS :</label><select name=\"OS\" id=\"os\"><option value=\"Android\">Android</option><option value=\"iOS\">iOS</option><option value=\"Windows\">Windows</option></select></div>";
    $("body").append(drop);
    let drop2 = "<div id=\"drop2\"><label for=\"brand\">Choose Brand :</label><select name=\"brand\" id=\"brand\"><option value=\"Apple\">Apple</option><option value=\"Motorola\">Motorola</option><option value=\"Samsung\">Samsung</option><option value=\"ASUS\">ASUS</option><option value=\"Microsoft\">Microsoft</option></select></div>";
    // $("body").append(drop2);  
    $("#one").before(drop1);
    $("#one").before(drop2);
    let sel1;
    let sel2;
    let check;
    $("#brand").change(function (event) {
        // alert("You have Selected  :: "+$(this).val());
        sel1 = $(this).val();
        // displayTble($(this).val());
        filter($(this).val());
    });
    $("#os").change(function (event) {
        // alert("You have Selected  :: "+$(this).val());
        sel2 = $(this).val();
        displayTble($(this).val());
        filter($(this).val());
    });
    console.log(typeof (sel2));
    console.log(sel1, sel2);
    $("#one").on("click", "a#edit", function () {  //clicking the edit link
        // alert("The paragraph was clicked.");
        let pid = $(this).data('pid');
        // alert(pid);
        hide(pid);
    });

    function hide(id) {
        let afterHideArr = [];
        for (let i = 0; i < displayedArr.length; i++) {
            let obj = displayedArr[i];
            if (obj.id != id) {
                afterHideArr.push(obj);
            }
        }
        displayTble(afterHideArr);
    }
    let displayedArr = [];
    function displayTble(data1) {// display table
        displayedArr = [];
        // $("#one").show();
        console.log("indiply");  //  	ID	Name	Brand	Operating System 	Remove
        let html = "<table><tr><th>ID </th><th> Name</th><th>Brand</th><th>Operating System</th><th>Remove</th></tr>";
        for (let i = 0; i < data1.length; i++) {
            console.log(i);
            html += "<tr><td>"
                + data1[i].id +
                "</td><td>"
                + data1[i].name +
                "</td><td>"
                + data1[i].brand +
                "</td><td>"
                + data1[i].os +
                "</td><td>" +
                "<a href=" + " #" + " id=\"edit\" data-pid=" + data1[i].id + ">X</a>"
            "</td></tr>"
        }

        $("#one").html(html + "</table>");

        for (let i = 0; i < data1.length; i++) {
            let obj = data1[i];
            displayedArr.push(obj);
        }

    }

    let filterd = [];
    function filter(val) {
        console.log(val);
        if (val == "Android" || val == "iOS" || val == "Windows") {
            check = 0;
        } else if (val == "Apple" || val == "Motorola" || val == "Samsung" || val == "ASUS") {
            check = 1;
            console.log("check=1")
        }
        console.log("check" + check);
        if (check == 0) { // if chooes os go here   
            filterd = [];
            for (let i = 0; i < data.length; i++) {
                //get ith obj
                let obj = data[i];
                //check it by choosen valuw
                if (obj.os == val) {

                    filterd.push(data[i]);
                }
                //then push into filtered array
            }
            console.log("filter" + filterd);
            displayTble(filterd);
        }
        if (check == 1) { // if chooes brand
            let nfil = [];
            for (let i = 0; i < filterd.length; i++) {
                //get ith obj
                let obj = filterd[i];
                //check it by choosen valuw
                if (obj.brand == val) {
                    nfil.push(filterd[i]);
                }
                //then push into filtered array
            }
            console.log("filter" + filterd);
            console.log("nfill" + nfil);
            displayTble(nfil);
        }
    }


});