function studentInfo(name , dept , task){
    console.log('Student Name :', name);
    console.log('Student Dept', dept);
    task();
}

function studentOne(){
    console.log('Present at campus in time');
}

function studentTwo() {
    console.log('You Must Complete Your Math Task');
}

studentInfo('Sajeeb', 'CS', studentOne);
studentInfo('Shakib', 'ES', studentTwo);