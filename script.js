const toggle=document.getElementById('toggle');
const abc=document.getElementById('abc');
toggle.addEventListener('change',(e)=>{
   abc.classList.toggle('show-monthly');
})