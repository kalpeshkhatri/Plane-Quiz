// now aapne aa niche valo part aapne javascript thi add karva mangiye 6iye. varam var html thi karva nathi mangata.
//  <div id="Questions1" class="question"></div>
// <p>What is the primary purpose of an airplane's wing?</p>
        
        // <input type="radio"  id="question011" name="answer1" value="Propulsion">
        // <label for="question011"> Propulsion</label>
        // <br>

        // <input type="radio" id="question012" name="answer1" value="Lift">
        // <label for="question012">Lift </label>
        // <br>

        // <input type="radio" id="question013" name="answer1" value="Stability">
        // <label for="question013">Stability</label>
        // <br>

        // <input type="radio" id="question014" name="answer1" value="Maneuverability">
        // <label for="question014">Maneuverability</label>
        // <br></br>
//</div>


//---------------------------------------------
//lets make data in array:
const arr=[{question:"What is the primary purpose of an airplane's wings?",option1: "Propulsion",option2:"Lift",option3:"Stability",option4:"Maneuverability"},
    {question:"Which part of the airplane is responsible for propulsion?",
    option1:"Fuselage",
    option2:"Cockpit",
    option3:"Engine",
    option4:"Rudder"
    },
    {question:'What does "FAA" stand for in aviation?',
    option1:"Federal Aviation Administration",
    option2:"Flight Association of America",
    option3:"Federal Air Authority",
    option4:"Flying Aircraft Agency"

    },
     {question:"What is the speed of sound at sea level, commonly referred to as Mach 1?",
    option1:"343 m/s",
    option2:"500 m/s",
    option3:"280 m/s",
    option4:"150 m/s"},
     {question:"Which is the world's largest passenger aircraft?",
    option1:"Boeing 747",
    option2:"Airbus A380",
    option3:"Concorde",
    option4:"Boeing 787"},
     {question:"Who is credited with inventing the first successful airplane?",
    option1:"The Wright Brothers ",
    option2:"Amelia Earhart",
    option3:"Charles Lindbergh",
    option4:"Howard Hughes"},
     {question:"Which was the first commercial jet airliner?",
    option1:"Boeing 707",
    option2:"Concorde",
    option3:"De Havilland Comet",
    option4:"Douglas DC-3"},
     {question:"Which year did the Concorde make its maiden flight?",
    option1:"1965",
    option2:"1969",
    option3:"1973",
    option4:"1976"},
     {question:"What airline operated the first commercial flight in 1914?",
    option1:"Delta",
    option2:"St. Petersburg-Tampa Airboat Line",
    option3:"Pan American",
    option4:"British Airways"},
     {question:"Which aircraft dropped the first atomic bomb?",
    option1:"Enola Gay",
    option2:"Bockscar",
    option3:"Little Boy",
    option4:"Memphis Belle"},
     {question:'In what year did the infamous "Miracle on the Hudson" landing occur?',
    option1:"2007",
    option2:"2009",
    option3:"2011",
    option4:"2013"},
     {question:"Which flight disappeared in 2014, sparking one of aviation's greatest mysteries?",
    option1:"Malaysia Airlines MH17",
    option2:"Malaysia Airlines MH370",
    option3:"Air France 447",
    option4:"Pan Am Flight 103"},
     {question:"What caused the crash of the Hindenburg airship in 1937?",
    option1:"Bird strike",
    option2:"Fire due to hydrogen gas",
    option3:"Engine failure",
    option4:"Lightning"},
     {question:"Which airport had a runway collision in 1977, leading to the deadliest aviation accident in history?",
    option1:"Tenerife",
    option2:"Heathrow",
    option3:"JFK",
    option4:"Charles de Gaulle"},
     {question:"Which pilot successfully landed a plane after losing an engine over Japan in 1989?",
    option1:"Captain Sully Sullenberger",
    option2:"Captain Al Haynes",
    option3:"Captain Tammie Jo Shults",
    option4:"Captain Chesley Burnett"},
     {question:"What is the main purpose of the black box in an airplane?",
    option1:"Storing fuel",
    option2:"Recording flight data and cockpit audio",
    option3:"Controlling autopilot",
    option4:"Monitoring passengers"},
     {question:"What is the average cruising altitude for a commercial jetliner?",
    option1:"5,000 feet",
    option2:"20,000 feet",
    option3:"35,000 feet",
    option4:"50,000 feet"},
     {question:"What is the term for the small upward-pointing tips on the ends of wings?",
    option1:"Spoilers",
    option2:"Winglets",
    option3:"Rudders",
    option4:"Flaps"},
     {question:"Which country manufactures the Sukhoi Su-30 fighter jet?",
    option1:"USA",
    option2:"China",
    option3:"Russia",
    option4:"France"},
     {question:'What does "VFR" stand for in aviation?',
    option1:"Visual Flight Rules",
    option2:"Vertical Flight Requirements",
    option3:"Velocity Flight Route",
    option4:"Variable Flight Range"},
    //  {question:"",
    // option1:"",
    // option2:"",
    // option3:"",
    // option4:""},
     
    ]



// const element1=document.createElement('div')
// element1.setAttribute('class','question')

// // have aa div ni andar aapne <p> <input> <label> append kartu javanu 6e.
// //lets name <p>
// const paragraph=document.createElement('p')
// paragraph.innerText=arr[0].question

// have radio type input banavvanu 6e.
// const input1=document.createElement('input');
// input1.setAttribute('type','radio');
// input1.setAttribute('id',`option+${0}+${1}`);
// input1.setAttribute('name',`answer${0}`);
// input1.setAttribute('value',`${arr[0].option1}`)

// const label1=document.createElement('label');
// label1.setAttribute('for',`option+${0}+${1}`);
// label1.innerText=arr[0].option1

// const brake1=document.createElement('br');
// //------

// const input2=document.createElement('input');
// input2.setAttribute('type','radio');
// input2.setAttribute('id',`option+${0}+${2}`);
// input2.setAttribute('name',`answer${0}`);
// input2.setAttribute('value',`${arr[0].option1}`)

// const label2=document.createElement('label');
// label2.setAttribute('for',`option+${0}+${2}`);
// label2.innerText=arr[0].option2

// const brake2=document.createElement('br');

////////////////////////////////////////////////////////
///////////////////////////////////////////////////////
function makingdiv(num1){
    const element1=document.createElement('div')
    element1.setAttribute('class','question')
    element1.setAttribute('id',`question${num1}`)
    return element1
}
function makingpara(num1){
    const paragraph=document.createElement('p');
    paragraph.innerText=`Q.${num1+1}  ${arr[num1].question}`;
    return paragraph
}
function makinginput(num1,num2){
    const input3=document.createElement('input');
    input3.setAttribute('type','radio');
    input3.setAttribute('id',`option${num1}${num2}`);
    input3.setAttribute('name',`answer${num1+1}`);
    input3.setAttribute('value',`${arr[num1][`option${num2}`]}`)
    // label2.setAttribute('class',`option${num2}`)

    return input3

}
// num1 e kaya number no question 6e te.
//num2 e kaya number no option 6e te.

function makinglabel(num1,num2){
    const label2=document.createElement('label');
    label2.setAttribute('for',`option${num1}${num2}`);
    // label2.setAttribute('class',`option${num2}`)
    label2.innerText=arr[num1][`option${num2}`]
    return label2
}

function makingbrack(){
    const brake2=document.createElement('br');
    return brake2
}
// console.log(makinginput(1,2))

// adding button for correct or wrong:
function addbutton(){
    const element=document.createElement('BUTTON');
    element.innerHTML='';
    return element

}



// have aapne aa arr par loop lagavine aapne aa upar ni badhi method no use karta sikhiye.

let i=0;
arr.forEach((obj)=>{
    // console.log(i)
    let div=makingdiv(i)
    let para=makingpara(i)
    let inp1=makinginput(i,1)
    let lab1=makinglabel(i,1)
    let brack1=makingbrack()

    let inp2=makinginput(i,2)
    let lab2=makinglabel(i,2)
    let brack2=makingbrack()

    let inp3=makinginput(i,3)
    let lab3=makinglabel(i,3)
    let brack3=makingbrack()

    let inp4=makinginput(i,4)
    let lab4=makinglabel(i,4)
    let brack4=makingbrack()

    // add button:
    let but=addbutton()

    // lets append this into div
    div.append(para,inp1,lab1,brack1,inp2,lab2,brack2,inp3,lab3,brack3,inp4,lab4,brack4,but);

    // aa div 6e tene 'all_question' id vala jode append karavi pade.
    let allque=document.getElementById('all_question');
    allque.append(div)
    i+=1
}
)

//-------------------------------------------------

const ANS={answer1:'Lift',answer2:'Engine',answer3:'Federal Aviation Administration',
    answer4:'343 m/s',
    answer5:'Airbus A380',
    answer6:'The Wright Brothers',
    answer7:'De Havilland Comet',
    answer8:'1969',
    answer9:'St. Petersburg-Tampa Airboat Line',
    answer10:'Enola Gay',
    answer11:'2009',
    answer12:'Malaysia Airlines MH370',
    answer13:'Fire due to hydrogen gas',
    answer14:'Tenerife',
    answer15:'Captain Al Haynes',
    answer16:'Recording flight data and cockpit audio',
    answer17:'35,000 feet',
    answer18:'Winglets',
    answer19:'Russia',
    answer20:'Visual Flight Rules',
}


// add event listener on all_question id:
// const element4=document.getElementById('all_question');
// element4.addEventListener('click',(e)=>{
//     console.log(e.target)//<input type="radio" id="option01" name="answer0" value="Propulsion">
//     //have aa kayo question 6e teni khabar padvi pade.tena mate ahiya aapne ne name attribute ma answer0 evu lakhelu 6e. to ek answer valo array banaviye ke jema answer hoy.tetho ANS array banavyu
//     console.log(e.target.name);
//     console.log(e.target.value);
//     console.log(ANS[e.target.name])
//     let tampname=e.target.name;
//     let questionnum=Number(tampname.slice(6,tampname.length))//string
//     console.log(tampname) //answer1  or answer19 or other
//     console.log(questionnum)//string

  
    
//         if (e.target.value===ANS[e.target.name]){
//             e.target.style.backgroundColor='green';
//         }
//         else{
//             e.target.style.backgroundColor='red';
//         }

    
//     // if (e.target.value===ANS[e.target.name]){
//     //     console.log('answer is correct')
//     //     // e.target.style.backgroundColor='green' //
//     //     // let element5=document.gete(`question${questionnum}`);
//     //     // console.log(element5)
//     //     // // element5.style.backgroundColor='green';

//     //     const parent=document.getElementById(`question${questionnum}`);
//     //     console.log(parent);
//     // }
//     // else{
//     //     e.target.style.backgroundColor='red';
//     //  }
// })

//------------------------------------------------------
// const element4=document.getElementById('all_question');
// element4.addEventListener('click',(e)=>{
//     // e.preventDefault()
//     // console.log(e.target);
//     // jo label vala par click karso to aa niche vali line aavse
//     //<label for="option01">Propulsion</label>

//     //jo input tag par click karso to aa niche vali line aavse.
//     //<input type="radio" id="option01" name="answer1" value="Propulsion">

//     // jo input ratio round par click karso to  input vali line malse. and tema aapne name ma answer1 hase aa 1 ne nikalvano 6e.
//     let questionnum;
//     if (e.target.tagName==='INPUT'){
//     questionnum=e.target.name.slice(6,e.target.name.length)
//     console.log(questionnum);//1
//     console.log(e.target.value);
//         if (e.target.value===ANS[`answer${questionnum}`]){
//             console.log('correct')
//             // e.target.style.backgroundColor='green'//this line is not works.
//             e.target.style.setProperty('background-color', 'green', 'important');

//         }
//     }

//     //jo label par click karso to tema label vali line aavse to tema 'for' attribute hoy 6e.tema option${index}${optionnum} aam hoy te to tema aa index kadhvo padse. to tema mate string ma slice lagavvanu 6e. aa label ma for attribute ne 'htmlFor' key thi access male 6e.
//     let questionnum1;
//     if (e.target.tagName==='LABEL'){
//     console.log(e.target)//<label for="option01">Propulsion</label>
//     console.log(e.target['htmlFor'])//option01
//     questionnum1=e.target['htmlFor'].slice(6,e.target['htmlFor'].length-1)//0
//     console.log(questionnum1);//1
//       if(e.target.innerHTML===ANS[`answer${questionnum1+1}`]){
//         e.target.style.backgroundColor='green'
//       }
//     }

    // if(e.target.value===ANS[`answer${questionnum}`] || e.target.innerHTML===ANS[`answer${questionnum1}`]){
    //     console.log('correct')
    //     e.target.style.backgroundColor='green'

    // }
    
    




    

// })
//----------------------------------------------------------------------
// submit button end ma add karva mate aapne html ma nakhso to te pahla dekhase to tena mate aapne javascript thi form badha question add thai jay pa6i j append kariye.
const element6=document.createElement('button');
element6.setAttribute('type','submit');
element6.innerHTML='submit';
element6.style.width='80px'
element6.style.height='50px'
// element6.style.marginBottom='100px';

// aa element6 ne form ma append karaviye.
const formfinal=document.getElementById('form4');
formfinal.append(element6);

let marks=0
//aa marks ne aapne div aaoisu tema aapisu.
    const element7=document.createElement('button')
    element7.innerHTML=`MARKS:${marks}`;
    element7.style.width='80px'
    element7.style.height='50px'
    formfinal.append(element7);



// have aapne formData object no use karisu.
// aa all question id par event listener lagavyu.
// const element4=document.getElementById('all_question')
// let marks=0
formfinal.addEventListener('submit',(e)=>{
    // aa form na data jyare submit par click karish tyare aa formData object ma jata rahe tevu karvanu 6e.page submit karya pa6i te display par rahvu joiye.
    e.preventDefault();
    const form5=document.getElementById('form4');
    
    // aa form ne formdata object ma pass karvanu 6e.
    const data=new FormData(form5);

    // have aa ma object ni rup ma key and value na form ma data aavi gaya hase. key je aapne name hase and value e value hase.
    //{answer1:   ,answer2:   ,answer3:   }
    // have aa form data par aapna ANS object ni value jode compare kari devanu.
    // let marks=0;
    console.log(data.entries())
    
    for (let [key,value] of data.entries()){
        console.log(key,value)
        // key e answer{num} aapse temthi aa number ne kathvano 6e.
        console.log(key)
        let n1=key.slice(6,key.length)
        console.log(n1)
        let parent1=document.getElementById(`question${n1-1}`);
        // aa element ma correct 6e ke wrong evu nakhvanu 6e.
        let element9=parent1.children[13]

        if(value===ANS[key]){
            element9.innerHTML='CORRECT';
            marks+=1;
        }
        else{
            element9.innerHTML='WRONG';
        }
        parent1.append(element9)
        
    }
    console.log(marks)
    console.log(data)

    // marks vala ma marks edit karva padse.
    element7.innerHTML=`MARKS:${marks}`;

    // ahiya aapne correct answer par green color karvano 6e.
    const all_question1=document.getElementsByClassName('question');
    let k=1;
    console.log(all_question1)
    for (let question of all_question1){
        // console.log(question)
        let element=question;
         for (let j of element.children){
            // console.log(j)
            if (j.innerHTML===ANS[`answer${k}`]){
                j.style.backgroundColor='green';
            }
         }
         k+=1;
    }

})

// const element8=document.getElementById('form4');
// console.log(element8)
// console.log(element8.children[2])





