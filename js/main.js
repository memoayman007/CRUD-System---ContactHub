const btnDisplayAddForm = document.getElementById("btn-display-form");
const btnFormClose = document.getElementById("btn-form-close");
const inputForm = document.getElementById("input-form");

btnDisplayAddForm.addEventListener("click",function(){
    inputForm.classList.replace("d-none","d-block");
})

btnFormClose.addEventListener("click" , function(){
    inputForm.classList.replace("d-block","d-none");
})

