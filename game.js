function send()
{
number_1 = document.getElementById("number_1").value;
number_2 = document.getElementById("number_2").value;
actual_answer = parseInt(number_1) * parseInt(number_2);
question_number="<h4>" + number1 + "X" + number2  + "</h4>";
input_box="<br>Answer : <input type='text' id='input check_box'>"
check_button="<br><br><button class='btn btn-info' onclick='check()'>Check</button>"
row =  question_number + input_box + check_button

dcument.goetElementById("output").innerHTML = row;
dcument.goetElementById("number1").value = "";
    dcument.goetElementById("number2").value ="";
}

function check()
{
get_answer = document.getElementById("input_check_box").value;
if(get_answer == actual_answer)
{



    if(answer_turn == "player1")
{
update_player1_score = player1_score +1
document.getElementById("player1_score").innerHTML = update_player1_score;   
}





    if(question == "player1")   
{
question_turn = "player2"
document.getElementById("player_question").innerHTML = "Question_Turn -" + player2_name;   
}


else
{
question_turn = "player1"
document.getElementById("player_question").innerHTML = "Question_Turn -" + player1_name;   
}




}

}





























