 Player1name = localStorage.getItem("player1 name");
 Player2name = localStorage.getItem("player2 name");
 
 score_1 = 0 ;
 score_2 = 0 ;

 document.getElementById("name1").innerHTML = Player1name + " : " ;
 document.getElementById("name2").innerHTML = Player2name + " : " ;

 document.getElementById("score1").innerHTML = score_1 ;
 document.getElementById("score2").innerHTML = score_2 ;

 document.getElementById("qname").innerHTML = "Question turn : "+ Player1name ;
 document.getElementById("aname").innerHTML = "Answer turn : "+ Player2name ;

 function send() {
    get_word = document.getElementById("words").value ;
    word = get_word.toLowerCase();
    console.log(word);

    charat1 = word.charAt(1);
    console.log(charat1);

    length_minus = Math.floor(word.length / 2 );
    charat2  = word.charAt(length_minus);
    console.log(charat2);

    length_WORD = word.length - 1 ;
    charat3 = word.charAt(length_WORD);
    console.log(charat3);

    remove_1 = word.replace(charat1 , "_");
    remove_2 = remove_1.replace(charat2,"_");
    remove_3 = remove_2.replace(charat3,"_");
    console.log(remove_3);

    qword = "<h4 id='word_display'> Q. "+ remove_3 + "</h4>";
    input_box = "<br> Answer : <input type ='text' id='inputbox'>  ";
    button = "<br> <br> <button class='btn btn-info' onclick='check()'>Check </button>";
    row = qword + input_box + button ; 
    document.getElementById("output").innerHTML = row ;
    document.getElementById("words").value = "";

 }

 questionturn = "player1";
 answerturn   = "player2";

 function check() {
   getanswer = document.getElementById("inputbox").value ;
   Answer = getanswer.toLowerCase();
   console.log(Answer);

   if(Answer == word ){
      if (answerturn == "player1") {
         score_1 = score_1 + 1 ;
         document.getElementById("score1").innerHTML = score_1 ;
      } else {
         score_2 = score_2 + 1 ;
         document.getElementById("score2").innerHTML = score_2 ;
      }
   }

   if (questionturn == "player1") {
      questionturn = "player2";
      document.getElementById("qname").innerHTML = "Question turn : "+ Player2name ;
   } else {
      questionturn = "player1";
      document.getElementById("qname").innerHTML = "Question turn : "+ Player1name ;
   }

   if (answerturn == "player1") {
      answerturn = "player2";
      document.getElementById("aname").innerHTML =" Answer turn : "+ Player2name ;
   } else {
      answerturn = "player1";
      document.getElementById("aname").innerHTML =" Answer turn : "+ Player1name ;
   }

   document.getElementById("output").innerHTML = "" ;
 }