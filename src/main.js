const diceBtn = document.querySelector('#diceBtn');
const advice = document.querySelector('#advice');
const adviceId = document.querySelector('#AdviceId');

getAdvice();

diceBtn.addEventListener('click', async () => {
    getAdvice()
})

function getAdvice() {
    //Generar un id aleatorio
    const id = Math.floor(Math.random() * 100) + 1

    //llamar a la api
    //Con them
    fetch(`	https://api.adviceslip.com/advice/${id}`)
        .then(res => res.json())
        .then(data => {
            //Mostrar valor API
            const adviceMsg = data.slip.advice;
            advice.innerText = adviceMsg;
            adviceId.innerText = data.slip.id;
        })
        .catch(err => getAdvice());
}

//Con async await
/*const res = await fetch(`https://api.adviceslip.com/advice/1`)
const data = await res.json()
console.log(data.slip.advice)*/