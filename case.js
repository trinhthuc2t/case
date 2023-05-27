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

        setName() {
            this.name = newName;
        }

        setAge() {
            this.id = newMssv;
        }

        setEmail() {
            this.email = newEmail;
        }

        setPhone() {
            this.phone = newPhone;
        }

        setAddress() {
            this.address = newAddress;
        }

        setGander() {
            this.gender = newGender

        }

        edit(newName, newMssv, newEmail, newPhone, newAddress, newGender) {
            this.name = newName;
            this.id = newMssv;
            this.email = newEmail;
            this.phone = newPhone;
            this.address = newAddress;
            this.gender = newGender;
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
                <td>${i + 1}</td>
                <td>${arr[i].getName()}</td>
                <td>${arr[i].getId()}</td>
                <td>${arr[i].getEmail()}</td>
                <td>${arr[i].getPhone()}</td>
                <td>${arr[i].getAddress()}</td>
                <td>${arr[i].getGender()}</td>
                <td></td>
            </tr>
        `;
        table += listStudent;
    }

    table += `</table>`;
    document.getElementById('list').innerHTML = table;
}
