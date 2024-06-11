const  input = document.getElementById('inputId');
const ulId = document.getElementById('list-ul')

function clickadd() {
  if(input.value === '') {
    alert('you must something write')
  }
  else {
    let a = document.createElement('li');
    a.innerHTML = input.value;
    ulId.appendChild(a)
    let span = document.createElement('span')
    span.innerHTML = '\u00d7'
    a.appendChild(span) 
  }
  input.value = ''
  saveDate()
}


ulId.addEventListener('click', function(e) {
  if(e.target.tagName == 'LI') {
    e.target.classList.toggle('checked')
    saveDate()
  }
  else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove()
    saveDate()
  }
},false)


function saveDate () {
  localStorage.setItem('data', ulId.innerHTML);
}

function showTask () {
  ulId.innerHTML = localStorage.getItem('data')
}

showTask()