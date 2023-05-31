

// function hideAll(){
//     document.getElementById('display').innerHTML = ''
// }


function checkPass() {
    let use = document.getElementById('use').value;
    let pass = document.getElementById('pass').value;
    if (use === 'admin' && pass === '123456') {
        showDiv();
        document.getElementById('checkpass').innerHTML = 'admin';
        document.getElementById('form-container').style.flexDirection = 'column';

       // document.getElementById('hideRanh').innerHTML = '';

    } else {
        document.getElementById('use').value = ''
        document.getElementById('pass').value = ''
        alert('Sai thông tin tài khoản');
    }
}





function showDiv() {
    let login = document.getElementById('display');
     login.classList.add('display');
}






class Student {
    name;
    id;
    point;
    email;
    phone;
    address;
    gender;

    constructor(name, mssv, point, email,phone, address, gender) {
        this.name = name;
        this.id = mssv;
        this.point = point;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.gender = gender;
    }
}




let thuy = new Student('Tạ Thị Thùy', 'DTN082746',7.5 , 'tathuy@gmail.com', '0948292241', 'Hà Nội', 'Nữ');
let thai = new Student('Hoàng Văn Thái', 'DTN082749',8.0, 'thai@gmail.com', '0990202731', 'Hà Nội', 'Nam');
let arr = [thuy, thai];





function add() {
    let fullName = document.getElementById('fullname').value;
    let mssv = document.getElementById('id').value;
    let point = document.getElementById('point').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phonenumber').value;
    let address = document.getElementById('address').value;
    let gender = '';
    if (document.getElementById('1').checked) {
        gender = document.getElementById('1').value;
    } else if (document.getElementById('2').checked) {
        gender = document.getElementById('2').value;
    } else if (document.getElementById('3').checked) {
        gender = document.getElementById('3').value;
    }

    let list = new Student(fullName ,mssv ,point , email, phone, address, gender);

    arr.push(list);

    disPlay(arr);

}





console.log(arr);


function disPlay(arr) {
    let table = `
    `;

    for (let i = 0; i < arr.length; i++) {
        let listStudent = `
            <tr>
                <td>${i + 1}</td>
                <td>${arr[i].name}</td>
                <td>${arr[i].id}</td>
                <td>${arr[i].point}</td>
                <td>${arr[i].email}</td>
                <td>${arr[i].phone}</td>
                <td>${arr[i].address}</td>
                <td>${arr[i].gender}</td>
                <td><button onclick="deleteStudent(${i})" style="width: 50px">Delete 
                <button onclick="editStuden(${i})" style="width: 50px">Edit</button></td>
            </tr>
        `;
        table += listStudent;
    }

    table += `</table>`;
    document.getElementById('list').innerHTML = table;
    document.getElementById('fullname').value = '';
    document.getElementById('id').value = '';
    document.getElementById('point').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phonenumber').value = '';
    document.getElementById('address').value = '';
    document.getElementById('1').checked = false;
    document.getElementById('2').checked = false;
    document.getElementById('3').checked = false;
    arrPoint(arr);

}





function deleteStudent(index) {
    arr.splice(index, 1);
    disPlay(arr)
}







function editStuden(i) {
    let Student = arr[i];
    document.getElementById('fullname').value = Student.name;
    document.getElementById('id').value = Student.id;
    document.getElementById('point').value = Student.point;
    document.getElementById('email').value = Student.email;
    document.getElementById('phonenumber').value = Student.phone;
    document.getElementById('address').value = Student.address;
    document.getElementById('edit').innerHTML = `
    <button onclick="edit(${i})" style="background-color: yellow">Lưu lại
    `;

}

function edit(index) {
    let newName = document.getElementById('fullname').value;
    let newMssv = document.getElementById('id').value;
    let newPoint = document.getElementById('point').value;
    let newEmail = document.getElementById('email').value;
    let newPhone = document.getElementById('phonenumber').value;
    let newAddress = document.getElementById('address').value;
    let newGender = '';
    if (document.getElementById('1').checked) {
        newGender = document.getElementById('1').value;
    } else if (document.getElementById('2').checked) {
        newGender = document.getElementById('2').value;
    } else if (document.getElementById('3').checked) {
        newGender = document.getElementById('3').value;
    }
    arr[index].name = newName;
    arr[index].id = newMssv;
    arr[index].point = newPoint;
    arr[index].email = newEmail;
    arr[index].phone = newPhone;
    arr[index].address = newAddress;
    arr[index].gender = newGender;
    disPlay(arr)
    document.getElementById('edit').innerHTML = ``
    disPlay(arr)
}


function search() {
    let searchArr = []
    let search = document.getElementById('search').value
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].name.includes(search)) {
            searchArr.push(arr[i]);
        }
    }
    disPlay(searchArr);
}
disPlay(arr);




function arrPoint(arr1){
    let arrPoint2 = []
    for (let i = 0; i < arr1.length; i++) {
        arrPoint2.push(arr1[i]);
    }
    arrPoint2.sort((st1, st2) => st2.point - st1.point);
    console.log(arrPoint2)
    for (let i = 0; i < arrPoint2.length; i++){
        if (i===5){
            break
        }
    document.getElementById(`name${i+1}`).innerHTML = arrPoint2[i].name;
    document.getElementById(`point${i+1}`).innerHTML = arrPoint2[i].point;
    }
}
