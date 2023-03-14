const questions=[{
    "question":"Which of the following is NOT a common method of social engineering? ",
    "answer":2,
    "options":["A)Phishing","B)Shoulder surfing","C)Malware injection","D)Spear phishing"],
},{"question":"What is the term used to describe the practice of using multiple authentication methods to access a system?,",
"answer":0,
"options":["A.  Multifactor authentication", 
   " B.Single-factor authentication",
   " C. Biometric authentication",
   " D.  None of the above"],},{
    "question":"What is the term used to describe the practice of hiding data within other data?",
    "answer":1,
    "options":["a. Encryption","b. Steganography","c. Authentication","d. Authorization"],
   },{
    "question":"Which of the following is a type of attack that involves intercepting and altering communications between two parties",
    "answer":3,
    "options":["a. Phishing","b. Malware","c. Distributed denial of service (DDoS)","d.  Man-in-the-middle (MitM) attack "],
   },{
    "question":"What is the term used to describe the practice of accessing a system or network without authorization?",
    "answer":0,
    "options":["a. Hacking","b.Phishing","c.Social engineering","d.Malware"],
   },{
    "question":"What is the term used to describe a malicious software that is designed to damage, disrupt, or gain unauthorized access to a system or network?",
    "answer":3,
    "options":["a. Virus","b. Worm","c. Trojan","d.All of the above"],
   },{
    "question":"Which of the following is a technique used to prevent unauthorized access to a system or network by blocking certain types of traffic?",
    "answer":0,
    "options":["a.Firewall","b.Antivirus","c. Encryption","d.Intrusion detection system (IDS)"],
   },{
    "question":"What is the term used to describe the practice of verifying the identity of a user or device before allowing access to a system or network?",
    "answer":0,
    "options":["a. Authentication","b. Authorization","c. Encryption","d. Steganography"],
   },{
    "question":"What is the term used to describe a type of attack in which an attacker gains access to a system or network by exploiting a vulnerability that has not yet been patched?",
    "answer":1,
    "options":["a.Social engineering","b.Zero-day exploit","c. Cross-site scripting (XSS)","d. SQL injection"],
   },{
    "question":"What is the term used to describe a type of attack in which an attacker gains access to a system or network by exploiting a vulnerability that has not yet been patched?",
    "answer":1,
    "options":["a. Encryption","b. Digital signature","c. Hash function","d. Symmetric key"],

   }]

let questionNumber=0
document.querySelectorAll('.number').forEach((el,index)=>{
    el.style.background="#1b1b1b"
    el.addEventListener("click",(e)=>{
        document.querySelectorAll('.number').forEach((ele,index)=>{
            ele.style.background="#1b1b1b"})
        el.style.background="#1D1370"

        questionNumber=index
        set()
    })
})
document.querySelectorAll('.number')[0].style.background="#1D1370"
set()
function pop(element){
    let opa=0
    element.style.opacity=opa
    setInterval(()=>{
        if(opa<1){
            opa+=0.5
            element.style.opacity=opa

        }

    },0.5)

}
function set(){
let element=document.querySelectorAll('.option')
pop(document.querySelector('.question'))
document.querySelector('.question').innerHTML=questions[questionNumber]["question"]
element.forEach((el,index)=>{
    el.style.background="rgba(27, 27, 27,0.7)"
})
element.forEach((el,index)=>{
    pop(el)
    el.addEventListener('click',()=>{
        if(questions[questionNumber]["answer"]==index){
            
            el.style.background="#187330"
        }
        else{
            el.style.background="#8f312e"
        }
    })
    el.children[0].innerHTML=questions[questionNumber]["options"][index]
})
}
document.querySelector('body').style.overflow="hidden"
var loader=document.querySelector('.loadingPage')
loader.style.opacity="1"
const observer=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show")
        }
        else{
            entry.target.classList.remove("show")
        }

    })
})

const hidenEL=document.querySelectorAll('.hidden')
hidenEL.forEach((el)=>{observer.observe(el)})
console.log(hidenEL)
am4core.useTheme(am4themes_animated);
var chart = am4core.create("earth", am4maps.MapChart);
var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
polygonSeries.color="#0af"
polygonSeries.useGeodata = true;
var polygonTemplate = polygonSeries.mapPolygons.template;
polygonTemplate.tooltipText = "{name}";
polygonTemplate.stroke = am4core.color("#000");
if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition((pos)=>{

       
        chart.deltaLongitude=-pos.coords.longitude;
        chart.deltaLatitude = -pos.coords.latitude;
        console.log(pos.coords.longitude)
        
       polygonSeries.data.forEach((e)=>{
            if(e.id==="IN"){
                console.log(e)
            }
        })
        document.querySelector('.main').style.opacity="1";loader.style.opacity="0";document.querySelector('body').style.overflowY="visible"

    },()=>
{    console.log("yo")
fetch('https://api.ipregistry.co/2401:4900:3b36:b3d2:85fd:ced6:e2:660?key=nnym2r91gi242170')
    .then(function (response) {
       let ipdata=response.json().then((data) =>{
        console.log("Success")
        document.querySelector('.main').style.opacity="1";loader.style.opacity="0";document.querySelector('body').style.overflowY="visible";chart.deltaLatitude=-data.location.latitude;chart.deltaLongitude=-data.location.longitude})
       
       fetch('./country-codes.json',(data)=>{
        
       })
    }).catch(error => {console.log(error)})
   
   ;})
        

   


}
else{
    fetch('https://api.ipregistry.co/2401:4900:3b36:b3d2:85fd:ced6:e2:660?key=nnym2r91gi242170')
    .then(function (response) {
       let ipdata=response.json()
       fetch('./country-codes.json',(data)=>{
        console.log(ipdata,data)
       })
    })
    document.querySelector('.main').style.opacity="1";loader.style.opacity="0";document.querySelector('body').style.overflowY="visible"
}

chart.geodata = am4geodata_worldLow;
chart.projection = new am4maps.projections.Orthographic();
chart.panBehavior = "rotateLongLat";

var graticuleSeries = chart.series.push(new am4maps.GraticuleSeries());
graticuleSeries.mapLines.template.line.stroke = am4core.color("#0af");
graticuleSeries.mapLines.template.line.strokeOpacity = 0.08;

var hs = polygonTemplate.states.create("hover");
hs.properties.fill = chart.colors.getIndex(0).brighten(-0.5);

let animation;
let timeOutRotation=setTimeout(function(){
  animation = chart.animate({property:"deltaLongitude", to:100000}, 20000000);
}, 3000)

chart.seriesContainer.events.on("down", function(){
  animation.pause()
})

chart.seriesContainer.events.on("up", function(){
    animation.resume()
})