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
        le
       polygonSeries.data.forEach((e)=>{
            if(e.id==="IN"){
                console.log(e)
            }
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