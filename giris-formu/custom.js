var listele=document.getElementById("listele")
let data=fetch("https://dummyjson.com/products")
.then(cevap=>cevap.json())
.then(veriler=>{
   veriler=Object.values(veriler).forEach
   
        if(veriler.id<=5)
        {
            veriler.map((listele)=>
            document.getElementById("veriler").innerHTML+="<li>"+veriler.title+"</li>"
            )
        }
        
    });
