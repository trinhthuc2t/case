let arr = [];

function save() {
    //console.log('ok')
    let fullName = document.getElementById('fullname').value;
    let mssv = document.getElementById('id').value;
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

    class Student {
        name;
        id;
        email;
        phone;
        address;
        gender;

        constructor(name, mssv, email, phone, address, gender) {
            this.name = name;
            this.id = mssv;
            this.email = email;
            this.phone = phone;
            this.address = address;
            this.gender = gender;
        }

        getName() {
            return this.name;
        }

        getId() {
            return this.id;
        }

        getEmail() {
            return this.email;
        }

        getPhone() {
            return this.phone;
        }

        getAddress() {
            return this.address;
        }

        getGender() {
            return this.gender

        }

        setName(newName) {
            this.name = newName;
        }

        setId(newMssv) {
            this.id = newMssv;
        }

        setEmail(newEmail) {
            this.email = newEmail;
        }

        setPhone(newPhone) {
            this.phone = newPhone;
        }

        setAddress(newAddress) {
            this.address = newAddress;
        }

        setGander(newGender) {
            this.gender = newGender

        }
    }

    let list = new Student(fullName, mssv, email, phone, address, gender);
    arr.push(list);
    console.log(arr);
    disPlay(arr);
}

function disPlay(arr) {
    let table = `
    `;

    for (let i = 0; i < arr.length; i++) {
        let listStudent = `
            <tr>
                <td>${i+2}</td>
                <td>${arr[i].getName()}</td>
                <td>${arr[i].getId()}</td>
                <td>${arr[i].getEmail()}</td>
                <td>${arr[i].getPhone()}</td>
                <td>${arr[i].getAddress()}</td>
                <td>${arr[i].getGender()}</td>
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
    document.getElementById('email').value = '';
    document.getElementById('phonenumber').value = '';
    document.getElementById('address').value = '';
    document.getElementById('1').checked = false
    document.getElementById('2').checked = false
    document.getElementById('3').checked = false

}



function deleteStudent(index) {
 arr.splice(index,1);
 disPlay(arr)
}


function editStuden(i) {
    let Student = arr[i];
    document.getElementById('fullname').value = Student.getName() ;
    document.getElementById('id').value = Student.getId();
    document.getElementById('email').value = Student.getEmail();
    document.getElementById('phonenumber').value = Student.getPhone();
    document.getElementById('address').value = Student.getAddress();
    document.getElementById('edit').innerHTML = `
    <button onclick="edit(${i})">Lưu lại
    `;

}
function edit(index){
    let newName = document.getElementById('fullname').value;
    let newMssv = document.getElementById('id').value;
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
    arr[index].setName(newName);
    arr[index].setId(newMssv);
    arr[index].setPhone(newPhone);
    arr[index].setEmail(newEmail);
    arr[index].setAddress(newAddress);
    arr[index].setGander(newGender)
    disPlay(arr)
}



