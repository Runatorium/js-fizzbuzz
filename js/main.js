const Domcontainer = document.querySelector('.container');

for (let i = 1; i <= 100; i++){
    if (i % 3 ===0 && i % 5 === 0){
        console.log('Fizzbuzz')
        const square = `<div class="square fizzbuzz">'Fizzbuzz'</div>`;
        Domcontainer.innerHTML += square;
    }
    else if (i % 5 === 0){
        console.log('buzz');
        const square = `<div class="square buzz">'buzz'</div>`;
        Domcontainer.innerHTML += square;
    }
    else if (i % 3 === 0){
        console.log('fizz');
        const square = `<div class="square fizz">'Fizz'</div>`;
        Domcontainer.innerHTML += square;
    }
    else {
        console.log(i);
        const square = `<div class="square">'${i}'</div>`;
        Domcontainer.innerHTML += square;
    }
}


