
       //* Name,capital,region
       
var res=fetch("https://restcountries.com/v2/all")
.then((data)=>data.json())
.then((data1)=>{
    console.log(data1)
    var div=document.createElement("div");
     div.setAttribute("class","container");
     var htag=document.createElement("h1");
     htag.innerHTML=`Weather API`
     var div1=document.createElement("div");
     div1.setAttribute("class","row");

 
    for(var i=0;i<data1.length;i++){
var div2=document.createElement("div");
div2.setAttribute("class"," card-group col col-lg-4 col-sm-6 p-3")
div2.innerHTML=`   <div class="card" style="width: 20rem;">

<div class="card-header text-center"><b>${data1[i].name}</b></div>
<img src="${data1[i].flags.svg}" class="card-img-top img-thumbnail p-4" style="width: 350px;height: 250px";alt="${data1[i].name} flag">
<div class="card-body mt-3 text-center">
  <h5 class="card-title"><b>Capital:</b>${ data1[i].capital}</h5>
  <h5 class="card-title"><b>Region:</b>${data1[i].region}</h5>
  <h5 class="card-title"><b>Country-Code:</b>${data1[i].alpha3Code}</h5>
 
  <button class="btn btn-secondary" id="button" onclick=foo(${data1[i].latlng},${data1[i].latlng})><a>Click For Weather</a></button>
</div>
</div> `


div1.append(div2)
}


div.append(div1);
document.body.append(htag,div)
})
.catch((error)=>console.log(error));

function foo(a,b){ 
   
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${a}&lon=${b}&appid=68d4b5af00cd5dde723e854f0323f3c1`) 
  .then((data)=>data.json()) 
  .then((data1)=>{     
    alert(`Temperature: ${data1.main.temp}`); 
  }); 
}


