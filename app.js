const myForm = document.getElementById('myForm');
myForm.addEventListener('submit',(e)=>{
  e.preventDefault();
  const valor = document.getElementById('valor').value;
  localStorage.setItem('Mi valor', valor);

})