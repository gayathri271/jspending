async function n() {
    let a=await fetch("https://fakestoreapi.com/products")
    let data=await a.json()
    // console.log(data)
    
    let pro = document.getElementById("product");
    data.forEach((item) => {
    let card = document.createElement("div");
    card.style.border = "2px solid black";
    card.style.margin = "10px";
    card.style.padding = "20px";
    card.style.width = "300px";
    card.style.cursor="pointer"
    card.addEventListener("click", (e)=>{
        e.preventDefault();
        alert("this card is clicled"+item.id)
        localStorage.setItem("data",JSON.stringify({"title":item.title,"image":item.image,"price":item.price,"rate":item.rating.rate}))
        location="./open.html"
    });
    
    // Create and append the image
    let imgs = document.createElement("img");
    imgs.src = item.image;
    imgs.style.width = "80%";
    imgs.style.height="45%"
    card.appendChild(imgs);
    
    // Create and append the title
    let tit = document.createElement("h4");
    tit.innerText = item.title;
    card.appendChild(tit);
    
    let pr=document.createElement("span")
    pr.innerHTML=item.price;
    pr.style.color="red";
    card.appendChild(pr);
    
    let cat=document.createElement("p")
    cat.innerHTML=item.category;
    cat.style.color="green";
    card.appendChild(cat);
    
    let rat1=document.createElement("p")
    rat1.innerText=item.rating.rate
    card.appendChild(rat1)
    
    let rat2=document.createElement("p")
    rat2.innerText=item.rating.count
    card.appendChild(rat2)
    
    pro.style.display="flex"
    pro.style.marginLeft="30px"
    pro.style.flexWrap="wrap"
    pro.appendChild(card);
    });
}
n()