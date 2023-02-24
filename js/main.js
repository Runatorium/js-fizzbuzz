const Domcontainer = document.querySelector('.container');

for (let i = 1; i <= 100; i++){
    if (i % 3 ===0 && i % 5 === 0){
        console.log('Fizzbuzz')
        const square = document.createElement('div');
        square.classList.add('fizzbuzz');
        square.append('fizzbuzz');
        Domcontainer.append(square);;
    }
    else if (i % 5 === 0){
        console.log('buzz');
        const square = document.createElement('div');
        square.classList.add('buzz');
        square.append('buzz');
        Domcontainer.append(square);
    }
    else if (i % 3 === 0){
        console.log('fizz');
        const square = document.createElement('div');
        square.classList.add('fizz');
        square.append('fizz');
        Domcontainer.append(square);
    }
    else {
        console.log(i);
        const square = document.createElement('div');
        square.classList.add('square');
        square.append(i);
        Domcontainer.append(square);
        
    }
}

