import {student} from './Student';
import {school} from './school';

function getInputValue(elementID: string): string{ 

    const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementID);
        return inputElement.value;
}

var studentdata: school[]=[
    {'name':'Neel',
       'age':16,
       'studentclass':10,
       'favouritesubject':'English',
       'school_name':'DPS'
},
{'name':'Nitinl',
'age':16,
'studentclass':10,
'favouritesubject':'English',
'school_name':'GPS'
},
{'name':'Mukesh',
'age':16,
'studentclass':10,
'favouritesubject':'English',
'school_name':'BPS'
},
];

var newstudent:school;
document.getElementById('addstudent')!.addEventListener('click' ,  () =>{
    newstudent=new school();
    newstudent.name=getInputValue('name');
    newstudent.age=Number(getInputValue('age'));
    newstudent.studentclass=Number(getInputValue('Class'));
    newstudent.favouritesubject=getInputValue('subject');
    newstudent.school_name=getInputValue('schoolname');
    console.log(studentdata);
    studentdata.push(newstudent);

});
