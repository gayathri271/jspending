let cont=document.getElementById("dv")
cont.innerHTML="<img src='https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?cs=srgb&dl=daylight-environment-forest-459225.jpg&fm=jpg' width='300px'/> <h2>NATURE</h2> <p>Engaging Nature</p> <div><p>price: 230rs</p> <button>addTocart</button><div>"



let sec=document.getElementById("m")
sec.style.marginTop="50px"
sec.innerHTML="<img src='https://www.thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg' width='300px'/><h2>NATURE</h2><p>ENGAGING NATURE</p><p>Price: 300rs</p><button>addtocart</button>"

var data=[{id:1,name:"Gayathri",course:"ECE"},{id:2,name:"Manisha",course:"CSE"},{id:3,name:"Gowthami",course:"EEE"},{id:4,name:"Chethan",course:"Mech"}]
console.log(data)
let cardcontainer=document.getElementById("ob")
for(i=0;i<=data.length;i++){
    let card=document.createElement("div")
    card.innerHTML=`<p>${data[i].id}</p><p>${data[i].name}</p><p>${data[i].course}</p>`
    cardcontainer.appendChild(card)
}