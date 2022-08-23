function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


window.onload = () => {
    const random = getRandomInt(1, 150)
    dataFetch(random)
}

const dataFetch = async (id) => {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await res.json()
        card(data)
    } catch (error) {
        console.log("error 404")
    }
}

const card = (pokemon) => {
    const img = document.querySelector(".card-img-top")
    const text = document.querySelector(".card-text")
    const healt = document.querySelector(".healt")
    const attack = document.querySelector(".attack")
    const defense = document.querySelector(".defense")

    img.src = pokemon.sprites.front_default
    text.innerHTML = pokemon.name
    healt.innerHTML = pokemon.stats[0].base_stat + " health"
    attack.innerHTML = pokemon.stats[1].base_stat + " attack"
    defense.innerHTML = pokemon.stats[2].base_stat + " defense"


    console.log(pokemon)
}