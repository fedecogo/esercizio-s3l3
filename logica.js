const newcard = document.getElementById('partefissa');
newcard.addEventListener ('submit',function(e){
    e.preventDefault();
    const newinput = document.getElementById('text');
    const task = newinput.value;
    console.log(task);

    const newContactCard = document.createElement('div');
    newContactCard.classList.add('topolino') 
    const newtext = document.getElementById('saved-text');
    newContactCard.innerHTML = `<p class='marcoo'> You should do ${text.value} </p><button class='marco' ></button><button class='marco' ></button> `;
    console.log(newtext)
    newtext.appendChild(newContactCard);
})