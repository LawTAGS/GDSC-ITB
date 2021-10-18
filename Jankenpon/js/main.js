const enemyPokemon = [
    "./image/Charmander.png",
    "./image/Bulbasaur.png",
    "./image/Squirtle.png"
]

function handleClick(item) {
    if (item == 'Charmander'){
        const randomNumber = Math.floor(Math.random() * 3);
        let enemy = enemyPokemon[randomNumber];
        let player = "./image/Charmander.png";
        document.getElementById("logo-pilihan-pemain").src = player;
        document.getElementById("logo-pilihan-opponent").src = enemy;
        document.getElementById("result").innerHTML = winner(player, enemy);
    }
    
    else if (item == 'Bulbasaur'){
        const randomNumber = Math.floor(Math.random() * 3);
        let enemy = enemyPokemon[randomNumber];
        let player = "./image/Bulbasaur.png";
        document.getElementById("logo-pilihan-pemain").src = player;
        document.getElementById("logo-pilihan-opponent").src = enemy;
        document.getElementById("result").innerHTML = winner(player, enemy);
    }

    else if (item == 'Squirtle'){
        const randomNumber = Math.floor(Math.random() * 3);
        let enemy = enemyPokemon[randomNumber];
        let player = "./image/Squirtle.png";
        document.getElementById("logo-pilihan-pemain").src = player;
        document.getElementById("logo-pilihan-opponent").src = enemy;
        document.getElementById("result").innerHTML = winner(player, enemy);
    }
}

function winner(player, enemy){
    if(player == "./image/Charmander.png" && enemy == "./image/Bulbasaur.png"){
        return "Win";
    }

    else if(player == "./image/Bulbasaur.png" && enemy == "./image/Squirtle.png"){
        return "Win";
    }

    else if(player == "./image/Squirtle.png" && enemy == "./image/Charmander.png"){
        return "Win";
    }

    else if(player == enemy){
        return "Draw";
    }

    else{
        return "Lose";
    }
}