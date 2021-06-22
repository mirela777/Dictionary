var words= new Array();
function add_words(){
var word = document.getElementById("text").value;
 words.push(word.toLowerCase());
}

function search(){
    var w = document.getElementById("text2").value;
    var txt ;
    words.forEach(function(words){
        if(w === words){
           txt = "The searched word exists in the dictionary.";    
    }
        else{
        txt = "The searched word does not exists in the dictionary.";
        }})
     document.getElementById("txt").innerHTML = txt;  
}
