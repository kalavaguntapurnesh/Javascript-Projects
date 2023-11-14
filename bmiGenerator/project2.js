//here submit is used bcoz we use forms here

const form = document.querySelector('form');

console.log(form);

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')


    if(height === '' || height < 0 || isNaN(height))
    {
        results.innerHTML = `Please give valid height ${height}`;
    }
    else if(weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give valid height ${weight}`;
    }

    else{
        const bmi = (weight / ((height*weight) / 10000)).toFixed(2);
        results.innerHTML = `<span>${bmi}</span>`
    }

})