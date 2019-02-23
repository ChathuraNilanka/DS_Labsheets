var student = {
    firstname: 'tenusha',
    lastname: 'guruge',
    studentId: 'IT16170162',

    getFirstName: function () {
        return this.firstname
    },

    getLastName: function () {
        return this.lastname
    }
}

function Student(firstname, lastname, studentId){
    this.firstname = firstname;
    this.lastname = lastname;
    this.studentId = studentId;
}
student1 = new Student('a', 'b', 'c');

console.log(student.getFirstName());