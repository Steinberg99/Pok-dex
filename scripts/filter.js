//All of the Pokemon lists from the HTML file;
var pokemonLists = document.getElementsByClassName("pokemonList");

//List for the filter options from the index.html file.
var filterItems = document.querySelector("#filters");

//List of the individual filter items. 
var filterItemList = document.getElementsByClassName("filter");

//Text element that needs to appear when the Dark type is selected.
var darkText = document.querySelector("#darkText");

//Variable that keeps track of the last selected filter.
var lastElement = "";

//Functions that places all of the li elements from the PokemonLists variable in one list.
function getElement(i) {
    if (i <= 150) {
        return pokemonLists[0].getElementsByTagName("li")[i];
    } else if (i >= 151 && i <= 250) {
        return pokemonLists[1].getElementsByTagName("li")[i - 151];
    } else if (i >= 251 && i <= 385) {
        return pokemonLists[2].getElementsByTagName("li")[i - 251];
    } else if (i >= 386 && i <= 492) {
        return pokemonLists[3].getElementsByTagName("li")[i - 386];
    } else {
        return pokemonLists[4].getElementsByTagName("li")[i - 493];
    }
}

//Function that filters the pokemon based on the given type.
function filterPokemon(type) {
    if(type == "Dark") { 
        darkText.style.display = "block";
        pokemonLists[0].style.display = "none";
    } else { 
        darkText.style.display = "none";
        pokemonLists[0].style.display = "grid";
    }

    for (let i = 0; i < pokemonData.length; i++) {
        var element = getElement(i);
        if (pokemonData[i].types[0] == type || pokemonData[i].types[1] == type) {
            element.style.display = "flex";
        } else { 
            element.style.display = "none";
        }
    }
}

//Function that resets the pokemon list and the darkText.
function resetPokemon () { 
    darkText.style.display = "none";
    pokemonLists[0].style.display = "grid";
    for(let i = 0; i < pokemonData.length; i++) { 
        var element = getElement(i);
        element.style.display = "flex";
    }
}

//Function that resets the applied styling on the filter elements. 
function resetFilters(listItem) { 
    for(let i = 0; i < filterItemList.length; i++) { 
        if(filterItemList[i] != listItem) { 
            filterItemList[i].style.filter = "";
            filterItemList[i].style.border = "1px black solid";
        }
    }
}

//Eventlistner that runs when one of the filter items is clicked. 
filterItems.addEventListener("click", function (e) {
    if (e.target.tagName == "LI") {
        //When the lastElement is equal to the new element the filters must be reset, otherwise it runs the filterPokemon function. 
        if(lastElement == e.toElement) { 
            resetPokemon();
            e.target.style.filter = "";
            e.target.style.border = "1px black solid";
            lastElement = "";
        } else { 
            resetFilters(e.toElement);
            filterPokemon(e.toElement.innerText);
            e.target.style.filter = "grayscale(100%)";
            e.target.style.border = "1px white solid";
            lastElement = e.toElement; 
        }
    }
})