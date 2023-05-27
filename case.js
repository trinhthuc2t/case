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

        constructor(name, mssv, email, phone, address, gander) {
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
    console.log(list);
}


//  arr.push(list);

//  console.log(arr)
/* disPlay(arr);

}

function disPlay(arr) {

 let table = `<h3>Danh sách HS/SV</h3>
 <table width="1000" border="1" cellspacing="0" cellpadding="0" class="table-list">
     <tr>
         <th>STT</th>
         <th>Họ và tên</th>
         <th>Mã số HS/SV</th>
         <th>Email</th>
         <th>Số điện thoại</th>
         <th>Địa chỉ</th>
         <th>Giới tính</th>
         <th>Thay đổi</th>
     </tr>
     `;
 for (let i = 0; i < arr.length; i++) {
     let listStudent = table + `
     <tr>
             <td>${Student.getName()}</td>
             <td>${this.getId()}</td>
             <td>${this.getEmail()}</td>
             <td>${this.getPhone()}</td>
             <td>${this.getAddress()}</td>
             <td>${this.getGender()}</td>
             <td></td>
</tr>
</table>


`;
 }
}
*/