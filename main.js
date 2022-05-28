// global variables
const choices = ["rock", "paper", "scissors"];
let player_wins = 0;
let computer_wins = 0;
let rounds_played = 0;

let player_selection = "";
let computer_selection = "";

const selection_highlight_duration = 1000;


function play(e) {
    // multiple selections in a short period of time causes highlight bug.
    if (player_selection !== "") return;

    // get element references
    player_selection = e.target.parentNode;

    computer_selection = document.querySelector(`.computer-container .${choices[Math.floor(Math.random() * choices.length)]}`).parentNode;

    
    isPlayerScored(player_selection, computer_selection) ? player_wins++ : computer_wins++;
    console.log(isPlayerScored(player_selection, computer_selection));
    console.log(player_selection);
    console.log(computer_selection);
    console.log(player_wins);
    console.log(computer_wins);
    updateScores();
    highlightSelections();
    setTimeout(resetSelections, selection_highlight_duration);
}

function highlightSelections(){
    player_selection.classList.add('player-selected');
    computer_selection.classList.add('computer-selected');
    setTimeout(() => player_selection.classList.remove('player-selected'), selection_highlight_duration);
    setTimeout(() => computer_selection.classList.remove('computer-selected'), selection_highlight_duration);
}

function resetSelections() {
    player_selection = "";
    computer_selection = "";
}

function isPlayerScored(player_selection, computer_selection)
{
    player_selection = player_selection.lastElementChild.className;
    computer_selection = computer_selection.lastElementChild.className;

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

function updateScores() {
    const player_score = document.querySelector(".player-score");
    player_score.textContent = `SCORE: ${player_wins}`;
    const computer_score = document.querySelector(".computer-score");
    computer_score.textContent =`SCORE: ${computer_wins}`;
}

const player_selections = document.querySelectorAll('.player-container .selection');

player_selections.forEach(selection => { selection.addEventListener('click', play)});