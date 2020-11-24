//Array for the Pokemons data. 
const pokemonData = [];
//List for the Pokemons from the index.html file. All of the implemented generations have a separate list. 
var listGen1 = document.querySelector("#gen1");
var listGen2 = document.querySelector("#gen2");
var listGen3 = document.querySelector("#gen3");
var listGen4 = document.querySelector("#gen4");
var listGen5 = document.querySelector("#gen5");

function loadPokemon () { 
    //The amount of Pokemons that need to be loaded.
    var pokemonAmout = 649;
    //Array that saves the results from the fetch method.
    var promises = [];
    var i;
    var url = "https://pokeapi.co/api/v2/pokemon/";
    for(i = 1; i < pokemonAmout + 1; i++) { 
        promises.push(
            fetch(url + i)
            .then(response => { 
                return response.json(); 
            })
        )
    }

    //The promises saved in the promises array get fulfilled. Thier data gets saved in the pokemonData array. 
    Promise.all(promises).then(results =>{
        results.forEach(pokemon => { 
            pokemonData.push({ 
                //Save the recied date into this Pokemon element.
                id: pokemon.id,
                name: capitalize(pokemon.name), 
                types: pokemon.types[1] ? [capitalize(pokemon.types[0].type.name), capitalize(pokemon.types[1].type.name)] : [capitalize(pokemon.types[0].type.name)],
                images: [pokemon.sprites.front_default, pokemon.sprites.front_shiny],
                stats: getStats(pokemon.stats),
                height: pokemon.height / 10,
                weight: pokemon.weight / 10
            });
        });
        //Run the displayPokemon function when the promises have been fulfilled.
        console.log(pokemonData);
        displayPokemon(pokemonData);
    })
}

//Function that displays the recieved data on the webpage. 
function displayPokemon(data) {
    data.forEach(element => { 
        //Create the HTML elements.
        var li = document.createElement("li");
        var div = document.createElement("div");
        var img = document.createElement("img");
        var h3 = document.createElement("h3");
        var p = document.createElement("p");

        //Select the background color of the list element.
        li.style.background = chooseColorLight(element.types[0])

        //Insert the information into the image and text element.
        img.src = element.images[0];
        img.alt = element.name;
        img.style.background = getBackground(element.types);
        h3.textContent = element.name;
        p.textContent = "ID: " + element.id;

        //Add the elememts to the div element. 
        div.appendChild(h3);
        div.appendChild(p);

        //Add the types to the Pokemon div. 
        element.types.forEach(type => { 
            var p = document.createElement("p");
            p.textContent = type;
            p.className = "type";
            p.style.background = chooseColor(type);
            div.appendChild(p);
        })

        //Add the elements to the Pokemon li element.
        li.appendChild(div);
        li.appendChild(img);

        li.id = element.id;

        //Add the li element to the ol list element. 
        appendListElement(element.id, li);
    })
}

//Function that places the list element in the correct list based on the given Pokemon id. 
function appendListElement(id, listElement) { 
    if(id <= 151) { 
        listGen1.appendChild(listElement);
    } else if(id >= 152 && id <= 251) { 
        listGen2.appendChild(listElement);
    } else if (id >= 252 && id <= 386) { 
        listGen3.appendChild(listElement);
    } else if (id >= 387 && id <= 493) { 
        listGen4.appendChild(listElement);
    } else { 
        listGen5.appendChild(listElement);
    }
}

//Function that retrieves the stats from the recieved data. 
function getStats(stats) { 
    var temp = [];
    stats.forEach(element => temp.push(element.base_stat));
    return temp;
}

//Function that capitalizes the fist letter of a string. 
function capitalize(string) { 
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//Eventlistner that loads the pokemonData when the DOM content has beel loaded. 
document.addEventListener('DOMContentLoaded', function () {
    loadPokemon();
})