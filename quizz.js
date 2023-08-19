const question =[{
    'ques':'Who is the PM of India',
    'a':"Narendra Modi",
    'b':"Siddaramayya",
    "c":"Yedeyurappa",
    "d":"Sadananda Gowda",
    "correct":"a"
},
{
    'ques':'Who is the cheif minister of Karnataka',
    'a':"Kumar Swamy",
    'b':"Siddaramayya",
    "c":"Yedeyurappa",
    "d":"Sadananda Gowda",
    "correct":"b"
},
{
    'ques':'Who is the Home Minister of Karnataka',
    'a':"Kumar Swamy",
    'b':"Dr.G Parameshwar",
    "c":"Sri H.k Patil",
    "d":"Sri Ramalingaredddy",
    "correct":"b"
},
{
    'ques':'Who is the Agriculter Minister of Karnataka',
    'a':"Kumar Swamy",
    'b':"Dr.G Parameshwar",
    "c":"Sri H.k Patil",
    "d":"Sri Chaluvarayaswamy",
    "correct":"d"
},
{
    'ques':'Who is the Education Minister of Karnataka',
    'a':"Kumar Swamy",
    'b':"Dr.G Madhu Bangarappa",
    "c":"Dr MC Sudhakar",
    "d":"Sri Ramalingaredddy",
    "correct":"b"
},
]
let index =0;
let totalquestion = question.length;
let right = 0,wrong=0;
const que = document.getElementById("queBox")
const loadoptions = document.querySelectorAll(".option")
const loadquestion = () =>{
    if(index === totalquestion){
       return  endquiz()
    }
        reset();
    
   
    const data = question[index];
    que.innerHTML = `${index+1}) ${data.ques}`
    loadoptions[0].nextElementSibling.innerText = data.a;
    loadoptions[1].nextElementSibling.innerText = data.b;
    loadoptions[2].nextElementSibling.innerText = data.c;
    loadoptions[3].nextElementSibling.innerText = data.d;

}
const submitQuiz  = () => {
    const data = question[index];
    const ans = getAnswer();
    if(ans === data.correct){
        right++;
    }else{
        wrong++;
    }
    index++;
    loadquestion();
    return;
}
const getAnswer = () => {
    let ans;
    loadoptions.forEach (
        (input) => {
            if(input.checked){
                ans = input.value;
            }
        }
    )
    return ans;
}
const reset = () =>{
    loadoptions.forEach (
        (input) => {
            input.checked = false;
        }
    )

}
const endquiz = () => {
document.getElementById("mini").innerHTML = `<h2>Thank for playing a quiz</h2>
<br><br>
<h4>Total correct answer is ${right}/${totalquestion}</h4>`

}
loadquestion();