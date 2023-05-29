const btnSwitch = document.getElementById('switch');

const priceFirst = document.querySelector('#priceFirst')
const priceSecond = document.querySelector('#priceSecond')
const priceThird = document.querySelector('#priceThird')

btnSwitch.addEventListener('click', () =>{
    //billing annually
    if(btnSwitch.checked){
        priceFirst.innerHTML = '&dollar;199.99'
        priceSecond.innerHTML = '&dollar;249.99'
        priceThird.innerHTML = '&dollar;399.99'
    } else{
        priceFirst.innerHTML = '&dollar;19.99'
        priceSecond.innerHTML = '&dollar;24.99'
        priceThird.innerHTML = '&dollar;39.99'
    } 
}) 
