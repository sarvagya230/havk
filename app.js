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