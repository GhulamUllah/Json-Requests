let variable=1  //global
function getproduct(){
fetch('https://fakestoreapi.com/products')
.then(function (response){
  return  response.json()
})
.then(function(product){
    console.log(product)
let html_=''
    for (let index = 0; index < product.length; index++) {
        const element = product[index];
    html_+=`
    <div class='samiullah'>
    <img src=${element.image} alt='' />
    <h3>Title: ${element.title}</h3>
    <h3>category: ${element.category}</h3>
    <h3>description: ${element.description}</h3>
    <h3>id: ${element.id}</h3>
    <h3>price: ${element.price}</h3>
    <h3>Rating: ${element.rating.count}</h3>
    <h3>Rating: ${element.rating.rate}</h3>
    </div>`  
    }
    document.getElementById('product').innerHTML=html_

})
}
getproduct()
let x=2

function addproduct() {
   
    document.getElementById('form').addEventListener('submit', function (event) {
        event.preventDefault()
        let Title=document.getElementById('title').value
        let image=document.getElementById('image').value
        let price=document.getElementById('price').value
        let rate=document.getElementById('rate').value
        let count=document.getElementById('count').value
        let description=document.getElementById('description').value
        let catagory=document.getElementById('catagory').value
        let option={
            category: catagory,
            description: description,
            image: image,
            price:price,
            rating:{
                count:count,
                rate:rate,
            }, 
            title:Title}
        let postdata={
            method: 'POST',
            body:JSON.stringify(option),
            headers:{
            "Content-Type":"application/json"
            }}
           
            fetch('https://fakestoreapi.com/products',postdata).then(function (response) {
                response.json()
            }).then((res)=>{
                getproduct()
            })
         
    })
}
addproduct()
