var dataBank = [
    {
        Question: "What is your Name ?",
        Answer: {
            a: "Haris",
            b: "Saad",
            c: "Anas"
        },
        correctAnswer: "c"

    },
    {
        Question: "What is your Age ?",
        Answer: {
            a: "18",
            b: "22",
            c: "12"
        },
        correctAnswer: "b"

    },
    {
        Question: "What is your Nationality ?",
        Answer: {
            a: "Pakistan",
            b: "America",
            c: "India"
        },
        correctAnswer: "a"

    },
    {
        Question: "What is your Religion ?",
        Answer: {
            a: "Islam",
            b: "Jew",
            c: "Christian"
        },
        correctAnswer: "a"

    },
    {
        Question: "What is your Hobby ?",
        Answer: {
            a: "Gardening",
            b: "Internet Surfing",
            c: "Outdoor Games"
        },
        correctAnswer: "b"

    }
]



var i = 0;
var count = 0;

var finalAnswer;

function checkAnswer() {
    
    var question = dataBank[i].Question;
    var options = dataBank[i].Answer;
    
    var ans = dataBank[i].correctAnswer;
    
    finalAnswer = (options[ans]); 

    
    
    var innerHtml = '<div id="remove'+i+'"><h2 class="font-weight-bold py-5 mt-5" >'+ question +'</h2><li><div class="input-group"><div class="input-group-prepend"><div class="input-group-text"> <input type="radio" id="option1" aria-label="Radio button for following text input" name="question'+i+'" value="'+ options.a +'"></div></div> <label type="text" class="form-control" for="option1" aria-label="Text input with radio button" >'+ options.a + '</label></div></li><li><div class="input-group"><div class="input-group-prepend"><div class="input-group-text"> <input type="radio" id="option2" aria-label="Radio button for following text input" name="question'+i+'" value="'+ options.b +'"></div></div> <label type="text" class="form-control" for="option2" aria-label="Text input with radio button" >' + options.b + '</label></div></li><li><div class="input-group"><div class="input-group-prepend"><div class="input-group-text"> <input type="radio" id="option3" aria-label="Radio button for following text input" name="question'+i+'" value="'+options.c+'"></div></div> <label type="text" class="form-control" for="option3" aria-label="Text input with radio button" >'+options.c+'</label></div></li></div>'
    var innerHtml1 = '<button id="next'+i+'" class="btn btn-primary btn-small text-center" type="submit" onClick="nextQuestion()">Submit</button>'    
    document.getElementById('allQuestions').insertAdjacentHTML("afterbegin", innerHtml)
    document.getElementById('button').insertAdjacentHTML("afterbegin", innerHtml1)

    return finalAnswer;
}

checkAnswer();

function countScore(){

    for (var j = 0 ; j< 3; j++){
        var checkout = document.getElementsByName('question'+i)[j];
        // console.log(document.getElementsByName('question'+i)[j].checked)
        //console.log(checkout.value);
        if (checkout.checked == true){
            checkout.value == f ? count++ : null;
        }else{
            alert('You Will Be Marked 0');
            
        }

}}





function nextQuestion(){

    
    countScore();
    document.getElementById('remove'+i).className= 'd-none';
    document.getElementById('next'+i).className= 'd-none';
   


    i++;
    if(i<dataBank.length){
    checkAnswer();
    }else{
        calculateScore();
    }
}

function calculateScore() {
    document.getElementById('remove'+i).className= 'd-none';
    document.getElementById('next'+i).className= 'd-none';


    
}
