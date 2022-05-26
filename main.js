const choices = ["rock", "paper", "scissors"];

function computerPlay()
{

}

function isVictory(player_selection, computer_selection)
{
    if (player_selection === "rock")
    {
        if (computer_selection === "scissors") return true;
        else return false;
    }
    
    if (player_selection === "paper")
    {
        if (computer_selection === "rock") return true;
        else return false;
    }
    
    if (player_selection === "scissors")
    {
        if (computer_selection === "rock") return true;
        else return false;
    }

}

function game()
{
    let number_of_games = prompt("HOW MANY ROUNDS YOU WANT TO PLAY?", 5);
    let player_wins = 0;
    let computer_wins = 0;
    let rounds_played = 0;


    while(rounds_played<number_of_games)
    {
        let computer_selection = choices[Math.floor(Math.random() * choices.length)];
        let player_selection = prompt("ROCK PAPER SCISSOR?").toLowerCase();
        if (!choices.includes(player_selection))
        {
            alert("you made and unavailable selection!");
            continue;
        }
        
        if (isVictory(player_selection, computer_selection)) player_wins++;
        else computer_wins++;
        rounds_played++;

        console.log(`player : ${player_selection}`);
        console.log(`computer : ${computer_selection}`);
        console.log(`player wins: ${player_wins}`);
        console.log(`computer_wins: ${computer_wins}`);
        console.log(`rounds_played: ${rounds_played}`);
    }
}

game();