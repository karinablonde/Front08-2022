document.addEventListener('DOMContentLoaded', function(){
    const result = document.getElementById('result') 
    const form = document.getElementById('formTickets')  
    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        let data = new FormData(form)
        let amount = parseInt(data.get('amount'))
        let discount = parseInt(data.get('category'))
    
        let total = (amount*200)*(100-discount)/100;
        result.innerText  = total;


    });
    const btnClear = document.getElementById('btn-reset');
    btnClear.addEventListener('click', ()=>{
        result.innerText = '';
    })
})

