function calculateAge(birthday){
    const today = new Date()

    const year = parseInt(birthday.split('.')[2])
    const month = parseInt(birthday.split('.')[1])
    const day = parseInt(birthday.split('.')[0])

    if(today.getMonth()+1 < month || (today.getMonth()+1 === month && today.getDate() < day))
        return today.getFullYear() - year - 1;
    else
        return today.getFullYear() - year;
}


const BIRTHDAY = '09.08.2003';  ///more constant, unchangeable

const age = calculateAge(BIRTHDAY);  //less constant, constant only at definite period of time, can be changed after definite date

alert(age);