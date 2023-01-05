  const boxEls = document.querySelectorAll('.box i')
  const buttonEls = document.querySelectorAll('button')
  
  buttonEls.forEach((button)=>{
    button.addEventListener('click', ()=>{

      button.parentElement.classList.toggle('active')
      button.firstChild.classList.toggle('fa-close')
      // parentNode.classList.toggle('active')
    })
  })