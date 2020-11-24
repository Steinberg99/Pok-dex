//The modal HTML elements. 
var modal = document.querySelector("#modal");
var modalContent = document.querySelector("#modalContent");

//All of the Pokemon lists from the HTML file;
var pokemonListGenI = document.querySelector("#gen1");
var pokemonListGenII = document.querySelector("#gen2");
var pokemonListGenIII = document.querySelector("#gen3");
var pokemonListGenIV = document.querySelector("#gen4");
var pokemonListGenV = document.querySelector("#gen5");

//All of the elements in the modal. 
var pokemonName = document.querySelector("#pokemonName");
var pokemonID = document.querySelector("#pokemonID");
var pokemonIMG = document.querySelector("#pokemonImage");
var pokemonIMGShiny = document.querySelector("#pokemonImageShiny");
var pokemonTypes = document.querySelector("#typesModal");
var pokemonStats = document.getElementsByClassName("stat");
var pokemonHeight = document.querySelector("#pokemonHeight");
var pokemonWeight = document.querySelector("#pokemonWeight");

function selectPokemon(id) { 
    fetchSpecies(id);

    var pokemon = pokemonData[id - 1];
    modal.style.display = "flex";

    pokemonName.textContent = pokemon.name;
    pokemonID.textContent = "ID: " + pokemon.id;
    
    pokemonIMG.src = pokemon.images[0];
    pokemonIMG.alt = "A picture of the Pokemon " + pokemon.name;
    pokemonIMG.style.background = getBackground(pokemon.types);

    pokemonIMGShiny.src = pokemon.images[1]; 
    pokemonIMGShiny.alt = "A picture of the shiny Pokemon " + pokemon.name;
    pokemonIMGShiny.style.background = getBackground(pokemon.types);

    pokemonTypes.innerHTML = "";
    pokemon.types.forEach(type => {
        var li = document.createElement("li");
        li.textContent = type;
        li.style.background = chooseColor(type);
        pokemonTypes.appendChild(li);
    });

    for(let i = 0; i < pokemonStats.length; i++) { 
        var text = pokemonStats[i].textContent.split(" ")[0];
        pokemonStats[i].textContent = text + " " + pokemon.stats[i];
    }

    pokemonHeight.textContent = "Height: " + pokemon.height + " m";
    pokemonWeight.textContent = "Weight: " + pokemon.weight + " kg";
}

//Funtion that returns the id of the Pokemon based on the given HTML element. 
function getID(element) { 
    if(element.target.tagName == "P" || element.target.tagName == "H3") { 
        return element.toElement.parentElement.parentElement.id;
    } else if (element.target.tagName == "LI") { 
        return element.toElement.id;
    } else { 
        return element.toElement.parentElement.id;
    }
}

//Eventlistners for all of the generations. 
pokemonListGenI.addEventListener("click", function(e){ 
    if(e.target.tagName == "OL") {
        return;
    } else { 
        selectPokemon((getID(e)));
    }
})

pokemonListGenII.addEventListener("click", function(e){ 
    if(e.target.tagName == "OL") {
        return;
    } else { 
        selectPokemon((getID(e)));
    }
})

pokemonListGenIII.addEventListener("click", function(e){ 
    if(e.target.tagName == "OL") {
        return;
    } else { 
        selectPokemon((getID(e)));
    }
})

pokemonListGenIV.addEventListener("click", function(e){ 
    if(e.target.tagName == "OL") {
        return;
    } else { 
        selectPokemon((getID(e)));
    }
})

pokemonListGenV.addEventListener("click", function(e){ 
    if(e.target.tagName == "OL") {
        return;
    } else { 
        selectPokemon((getID(e)));
    }
})


window.addEventListener("click", function (e) {
    if (e.target == modal) {
        modal.style.display = "none";
    }
})