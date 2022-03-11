let namasteBtn = document.querySelector('button');
namasteBtn.addEventListener('click',inputMsg);

function showMsg(){
    alert(" ");
}

function inputMsg(){
    let name = prompt('enter name of students');
    namasteBtn.textContent = 'Roll No. 1' + name;
} 