/////////////////////////////////////////////////////////////////
     // https://jsonplaceholder.typicode.com/
     let promise = fetch("https://jsonplaceholder.typicode.com/posts");
     promise.then(res =>
         res.json()).then(d => {
 //            console.log(d);
             // let val="";
             // ///console.log(store);
             // for(let i=0;i<d.length;i++){
             // val+=d[i].title ;  
             // val+=d[i].body;  
             // //console.log(store);
             // }
             // let space=document.getElementById("a").innerHTML= val;
let data1 = "";
let data2 = "sdsdsds";             
d.map((value) => {

data1+= `<div  class="card"> 
<img  src="./CrickLogo.jpg" alt="img"   style="width: 100%;height:200px"/>
<h2 class="id">${value.id}</h2>
<p class="title"> ${value.title}</p>
<p class="body">  ${value.body}  </p>
</div>`;
});
document.getElementById("cards").innerHTML = data1;
         }).catch(err => {
             console.error(err);
         })
