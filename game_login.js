function login() {
    player1name = document.getElementById("Player_1_name").value ;
    player2name = document.getElementById("Player_2_name").value ;

    localStorage.setItem("player1 name",player1name);
    localStorage.setItem("player2 name",player2name);

    window.location ="game_page.html";
}