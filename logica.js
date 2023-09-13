const newcard = document.getElementById('partefissa')
newcard.addEventListener ('submit',function(e){
    e.preventDefault()
    
    const newContactCard = document.createElement('div'); 
    newContactCard.classList.add('list-card');

    newContactCard.innerHTML = 
    <p>${newcard}</p>

})