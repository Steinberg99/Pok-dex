//This function returns the background for the Pokemon sprite. 
function getBackground(types) {
    if (types[1]) {
        return `linear-gradient(to right, ${chooseColor(types[0])} 0%, ${chooseColor(types[0])} 50%, #000000 50%, ${chooseColor(types[1])} 50%, ${chooseColor(types[1])} 100%)`;
    } else {
        return chooseColor(types[0])
    }
}

//This function returns the color on the given type of Pokemon;
function chooseColor(type) {
    switch(type) {
        case "Fire":
            return "#F08030";
        case "Water":
            return "#6890F0";
        case "Poison":
            return "#A040A0";
        case "Grass":
            return "#78C850";
        case "Flying":
            return "#A890F0";
        case "Bug":
            return "#A8B820";
        case "Normal":
            return "#A8A878";
        case "Electric":
            return "#F8D030";
        case "Ground":
            return "#E0C068";
        case "Fairy":
            return "#EE99AC";
        case "Fighting":
            return "#C03028";
        case "Psychic":
            return "#F85888";
        case "Rock":
            return "#B8A038";
        case "Steel":
            return "#B8B8D0";
        case "Ice":
            return "#98D8D8";
        case "Ghost":
            return "#705898";
        case "Dragon":
            return "#7038F8";
        case "Dark":
            return "#705848";
    }
}

//This function returns the light color on the given type of Pokemon;
function chooseColorLight(type) { 
    switch(type) {
        case "Fire":
            return "#F5AC78";
        case "Water":
            return "#9DB7F5";
        case "Poison":
            return "#C183C1";
        case "Grass":
            return "#A7DB8D";
        case "Flying":
            return "#C6B7F5";
        case "Bug":
            return "#C6D16E";
        case "Normal":
            return "#C6C6A7";
        case "Electric":
            return "#FAE078";
        case "Ground":
            return "#EBD69D";
        case "Fairy":
            return "#F4BDC9";
        case "Fighting":
            return "#D67873";
        case "Psychic":
            return "#FA92B2";
        case "Rock":
            return "#D1C17D";
        case "Steel":
            return "#D1D1E0";
        case "Ice":
            return "#BCE6E6";
        case "Ghost":
            return "#A292BC";
        case "Dragon":
            return "#A27DFA";
        case "Dark":
            return "#A29288";
    }
}