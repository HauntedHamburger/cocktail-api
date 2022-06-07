document.querySelector('.search-btn').addEventListener('click', findCocktail)


function findCocktail() {
    let search = document.querySelector('.search-string').value

    fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.querySelector('.name').innerText = data.drinks[0].strDrink
            document.querySelector('img').src = data.drinks[0].strDrinkThumb

            document.querySelector('.instructions').innerText = data.drinks[0].strInstructions

            document.querySelector('.glass').innerText = data.drinks[0].strGlass

            document.querySelector('.ingredient1').innerText = data.drinks[0].strIngredient1
            document.querySelector('.ingredient2').innerText = data.drinks[0].strIngredient2
            document.querySelector('.ingredient3').innerText = data.drinks[0].strIngredient3
            document.querySelector('.ingredient4').innerText = data.drinks[0].strIngredient4
            document.querySelector('.ingredient5').innerText = data.drinks[0].strIngredient5
            document.querySelector('.ingredient6').innerText = data.drinks[0].strIngredient6
            document.querySelector('.ingredient7').innerText = data.drinks[0].strIngredient7
            document.querySelector('.ingredient8').innerText = data.drinks[0].strIngredient8
    
        })
        .catch(err => {
            console.log(`error ${err}`)
        })
}
