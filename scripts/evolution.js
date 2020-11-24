var evolutionList = document.querySelector("#evolutionList");

//Functoin that fetches the specific species data, needed to fetch the evolution data.
function fetchSpecies(id) { 
    evolutionList.innerHTML= "";
    var url = "https://pokeapi.co/api/v2/pokemon-species/"
    fetch(url + id)
    .then(response => response.json())
    .then(data => fetchEvolution(data.evolution_chain.url));
}

//Function that fetches the specific evolution data.
function fetchEvolution(url) { 
    fetch(url)
    .then(response => response.json())
    .then(data => getChain(data.chain));
}

//Function that derives the specific data needed to display the evolution of the Pokemon.
function getChain(chain) { 
    var evolution = [];
    console.log(chain);
    //Adds evoltions while they are present in the chain. 
    while(chain != null) { 
        evolution.push({
            name: capitalize(chain.species.name),
            image: getImage(chain.species.name)
        });
        //When the pokemon has more than one evolution (like with Eevee) all of these evolutions need to be added.
        if(chain.evolves_to.length > 1) { 
            for(let i = 0; i < chain.evolves_to.length; i++) { 
                evolution.push({
                    name: capitalize(chain.evolves_to[i].species.name),
                    image: getImage(chain.evolves_to[i].species.name)
                });
            }
        }
        //Set the chain to the next chain to change the paramater in the while loop. 
        chain = chain.evolves_to[0];
    } 
    //Place the evolution in the modal. 
    console.log(evolution);
    setEvolution(evolution); 
}

//Function that displays the evolution. 
function setEvolution(chain) { 
    if(chain[0].name == "Eevee") { 
        let remove = chain.pop();
        let remove2 = chain.pop();
    } 
    if(chain[0].name == "Oddish" || chain[0].name == "Tyrogue" || chain[0].name == "Poliwag" || chain[0].name == "Slowpoke") { 
        let remove = chain.pop();
    }
    for(let i = 0; i < chain.length; i++) { 
        var fig = document.createElement("fig");
        var img = document.createElement("img");
        var figcaption = document.createElement("figcaption");

        img.src = chain[i].image;
        img.alt = "A picture of the Pokemon " + chain[i].name;
        img.style.background = getBackground(getTypes(chain[i].name));
        figcaption.textContent = chain[i].name;

        fig.appendChild(img);
        fig.appendChild(figcaption);
    
        evolutionList.appendChild(fig);
    }
}

//Function that recieves the types of the given pokemon.
function getTypes(name) { 
    for(var i = 0; i < pokemonData.length; i++) { 
        if(name == pokemonData[i].name) { 
            return pokemonData[i].types;
        }
    }
}

//Function that places the image of the Pokemon in to the evolution data.
function getImage(name) { 
    name = capitalize(name);
    for(var i = 0; i < pokemonData.length; i++) { 
        if(name == pokemonData[i].name) { 
            return pokemonData[i].images[0];
        }
    }
}