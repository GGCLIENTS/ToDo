// // JS ecmascript ES1 - ES5 
// // E6 nemeltuud
// // ES6 uzeh
// // var --> let , const
// // var a=5
// // var a=6
// // let b
// // const pi = 3.14;
// // addEventListener --> browser deer hiigd uildeliig todorhoilno onclick 
// // click, scroll, input............
// console.log(btn)
// createElement --> shine tag uusgen
//  appedndChild()
// parentElement --> tag iin dotorh tag ruu handah
// classname --> class iin neriig shalgah
// classList , className --> tag deer shineer class uusgen
const btn = document.getElementsByTagName('button')[0]
const ol = document.getElementsByTagName('ol')[0]
const li = document.getElementsByTagName('li')[0]
const inpt = document.getElementsByTagName('input')[0]
const img = document.getElementsByTagName('img')
btn.addEventListener("click", function add(){
     if(inpt.value == ""){
          alert("hooson baij bolohgui")
     }else{
          let li = document.createElement('li')
     console.log('li')
     li.innerText = inpt.value
     ol.appendChild(li)
     inpt.value = ""
     const check = document.createElement('button')
     check.innerHTML = '<i class="bi bi-pen-fill"></i>'
     li.appendChild(check)
     const delBtn = document.createElement('button')
     delBtn.innerHTML = '<i class="bi bi-trash-fill"></i>'
     li.appendChild(delBtn)
     delBtn.className = 'delete';
     check.className = 'check';
     }
     save();
})
ol.addEventListener('click' , function toDo(e){
     console.log(e.target)
     let olEl = e.target;
     let liEl = olEl.parentElement;
     console.log(liEl)
     let dltEl = liEl.parentElement;
     console.log(dltEl)
     if(olEl.className == 'bi bi-trash-fill'){
          dltEl.remove()
     }else if(olEl.className == 'bi bi-pen-fill'){
          let check = liEl.parentElement;
     check.classList.toggle('checked');
     }
})
// localstorage --> bidni oruulsan datag web browserd hadgalna 
// setItem -> datag haruuna , getitem -> hadgasan datag duudna , clearItem removeitem --> hadgalsanitem ustgana
function save(){
     localStorage.setItem("toDo",ol.innerHTML);
}
function getData(){
     let data = localStorage.getItem('toDO')
     console.log(data)
     ol.innerHTML = localStorage.getItem('toDo')
}
getData();