let head = {
    reg:'Sreg',
    nname:'Sname',
    email:'Semail',
    age:'Sage',
    per:'Sper',
    result:'Sresult'
}
let item1 = {
sreg: 101,
sname: "kamya",
semail: "kamya 345@gmail.com",
sage: 12,
sper: 31,
sresult: 'FAILL'
};
let item2 = {
sreg: 102,
sname: "manmay",
semail: "manmay345@gmail.com",
sage: 12,
sper: 89,
sresult: 'PASS'
};
let item3 = {
sreg: 103,
sname: "lucky",
semail: "lucky345@gmail.com",
sage: 14,
sper: 32,
sresult: 'FAILL'
};
let item4 = {
sreg: 104,
sname: "ramana",
semail: "ramana345@gmail.com",
sage: 13,
sper: 36,
sresult: 'PASS'
};
let item5 = {
sreg: 105,
sname: "deepa",
semail: "deepa345@gmail.com",
sage: 12,
sper: 58,
sresult: 'PASS'
};
let item6 = {
sreg: 106,
sname: "lakshman",
semail: "lakshman345@gmail.com",
sage: 11,
sper: 47,
sresult: 'PASS'
};
let htmlhead=`<thead class="table-dark">
    <th>${head.reg}</th>
    <th>${head.nname}</th>
    <th>${head.email}</th>
    <th>${head.age}</th>
    <th>${head.per}</th><br>
    <th>${head.result}</th>
</thead>`
let htmldata1 = `<tr>
            <td>${item1.sreg}</td>
            <td>${item1.sname}</td>
            <td>${item1.semail}</td>
            <td>${item1.sage}</td>
            <td>${item1.sper}%</td>
          <td>${item1.sresult}</td>
</tr>`
let htmldata2 = `<tr>
            <td>${item2.sreg}</td>
            <td>${item2.sname}</td>
            <td>${item2.semail}</td>
            <td>${item2.sage}</td>
            <td>${item2.sper}%</td>
            <td>${item2.sresult}</td>
</tr>`
let htmldata3 = `<tr>
            <td>${item3.sreg}</td>
            <td>${item3.sname}</td>
            <td>${item3.semail}</td>
            <td>${item3.sage}</td>
            <td>${item3.sper}%</td>
            <td>${item3.sresult}</td>
</tr>`
let htmldata4 = `<tr>
            <td>${item4.sreg}</td>
            <td>${item4.sname}</td>
            <td>${item4.semail}</td>
            <td>${item4.sage}</td>
            <td>${item4.sper}%</td>
            <td>${item4.sresult}</td>
</tr>`
let htmldata5 = `<tr>
            <td>${item5.sreg}</td>
            <td>${item5.sname}</td>
            <td>${item5.semail}</td>
            <td>${item5.sage}</td>
            <td>${item5.sper}%</td>
            <td>${item5.sresult}</td>
</tr>`
let htmldata6 = `<tr>
            <td>${item6.sreg}</td>
            <td>${item6.sname}</td>
            <td>${item6.semail}</td>
            <td>${item6.sage}</td>
            <td>${item6.sper}%</td>
            <td>${item6.sresult}</td>
</tr>`
let allstudent = document.getElementById('allStudent');
let allpassstudent = document.getElementById('allPassStudent');
let allfailstudent = document.getElementById('allFaillStudent');
let displayTag = document.getElementById('display');
function showDisplay() {
displayTag.innerHTML = [htmlhead ,htmldata1, htmldata2, htmldata3, htmldata4, htmldata5, htmldata6];
}
allstudent.addEventListener('click', showDisplay);
function allPassStudent() {
if ((item2.sper & item4.sper & item5.sper & item6.sper) < 35) {
displayTag.innerHTML = [htmlhead,htmldata2, htmldata4, htmldata5, htmldata6];
}
else {
console.log('something is worng ')
}
}
allpassstudent.addEventListener('click', allPassStudent);
function allFailStudent() {
if ((item1.sper & item3.sper) < 35) {
displayTag.innerHTML = [htmlhead,htmldata1, htmldata3];
}
else {
console.log('something is worng ')
}
}
allfailstudent.addEventListener('click', allFailStudent);