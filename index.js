let arr = [];
let x = -1;


function add() {
    const namee = document.getElementById("namee").value;
    const course = document.getElementById("course").value;
    const contactNumber = document.getElementById("contactNumber").value;
    const address = document.getElementById("address").value;
    const input = document.getElementById("search").value;

    if (namee && course && contactNumber && address) {
        let data = {
            namee: namee,
            course: course,
            contactNumber: contactNumber,
            address: address
        };
        arr.push(data);

        tablee(arr);
        document.getElementById("namee").value = "";
        document.getElementById("course").value = "";
        document.getElementById("contactNumber").value = "";
        document.getElementById("address").value = "";
        document.getElementById("addd").style.display = "";
        document.getElementById("save").style.display = "none";
    } else {
        alert("Enter Name, Course, Contact Number, and Address");
    }
}

function tablee(arr) {
    const tbody = document.getElementById("tbody");
    tbody.innerHTML = "";

    for (let i = 0; i < arr.length; i++) {
        const row = document.createElement("tr");
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        const td3 = document.createElement("td");
        const td4 = document.createElement("td");
        const td5 = document.createElement("td");
        const td6 = document.createElement("td");

        td1.innerHTML = i + 1;
        td2.innerHTML = arr[i].namee;


        td3.innerHTML = arr[i].course;
        if (td3.innerHTML == "Full Stack") {
            td3.className = "bg-green-300 text-white";
        }
        else if (td3.innerHTML == "Ui/Ux") {
            td3.className = "bg-yellow-300 text-white"
        }
        else if (td3.innerHTML == "Front-End") {
            td3.className = "bg-purple-300 text-white"

        }
        td4.innerHTML = arr[i].contactNumber;
        td5.innerHTML = arr[i].address;

        let editButton = document.createElement('button');
        editButton.innerHTML = 'Edit';
        editButton.className = "bg-yellow-500 text-white rounded-md px-2 py-1 mx-3";
        let deleteButton = document.createElement('button');
        deleteButton.innerHTML = 'Delete';
        deleteButton.className = "bg-red-500 text-white rounded-md px-2 py-1";

        td6.appendChild(editButton);
        td6.appendChild(deleteButton);

        row.appendChild(td1);
        row.appendChild(td2);
        row.appendChild(td3);
        row.appendChild(td4);
        row.appendChild(td5);
        row.appendChild(td6);

        tbody.appendChild(row);

        deleteButton.addEventListener('click', function () {
            tbody.removeChild(row);
            arr.splice(i, 1);
            tablee(arr);
        });

        editButton.addEventListener('click', function () {
            x = i;
            document.getElementById("namee").value = arr[i].namee;
            document.getElementById("course").value = arr[i].course;
            document.getElementById("contactNumber").value = arr[i].contactNumber;
            document.getElementById("address").value = arr[i].address;
            document.getElementById("addd").style.display = "none";
            document.getElementById("save").style.display = "";
        });
    }
}

function update() {
    const name1 = document.getElementById("namee").value;
    const course1 = document.getElementById("course").value;
    const contactNumber1 = document.getElementById("contactNumber").value;
    const address1 = document.getElementById("address").value;

    if (name1 && course1 && contactNumber1 && address1) {
        arr[x].namee = name1;
        arr[x].course = course1;
        arr[x].contactNumber = contactNumber1;
        arr[x].address = address1;
        x = -1;

        document.getElementById("addd").style.display = "";
        document.getElementById("save").style.display = "none";

        document.getElementById("namee").value = "";
        document.getElementById("course").value = "";
        document.getElementById("contactNumber").value = "";
        document.getElementById("address").value = "";

        tablee(arr);
    } else {
        alert("Enter field");
    }
}

function reset() {
    document.getElementById("namee").value = "";
    document.getElementById("course").value = "";
    document.getElementById("contactNumber").value = "";
    document.getElementById("address").value = "";
}

tablee(arr);
const input = document.getElementById("search");

input.addEventListener("input", function () {

    const searchValue = input.value.toLowerCase();
    
    const FilteredNamed = arr.filter((moiz) => moiz.namee.toLowerCase().includes(searchValue)  || moiz.address.toLowerCase() .includes(searchValue)  || moiz.contactNumber.toString() .includes(searchValue) );
    console.log(FilteredNamed);
    
    tablee(FilteredNamed);

});

