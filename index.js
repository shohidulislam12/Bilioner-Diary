
const getperson=async ()=>{
  try{
    const res=await fetch('https://forbes400.onrender.com/api/forbes400?limit=10')
    const data =await res.json()
     displaydata(data)
     document.getElementById('calculateallmoney').onclick=()=>totalwealth(data)
     
  }
    catch (error){
        console.log('error is ',error)}
}

const displaydata=(data)=>{
    const usercontainer=document.getElementById('usercontainer')
   data.forEach(element => {
    const div=document.createElement('div')
    div.innerHTML=`
        <div class="grid text-center grid-cols-5 p-5 border-b-2 border-white bg-gray-400 hover:bg-white ">
        <h2 class="text-sm font-bold flex gap-10">${element.personName} <i class="fa-solid fa-eye"></i></h2>
        <h3 class=" text-sm ">${element.countryOfCitizenship}</h3>
        <h3 class="text-sm">${element.industries}</h3>
        <h3 class="text-sm ">${element.rank}</h3>
        <h3 class=" text-sm ">${element.finalWorth}</h3>
      </div>
    `
    usercontainer.appendChild(div)
     
   });
}
const  totalwealth=(data)=>{
   const total=data.reduce((current,previous)=>previous.finalWorth+current,0);document.getElementById('totalamount').innerText=parseFloat(total.toFixed(3))
   console.log(total);

}
///randomy add any item

const getpersonrand=async ()=>{
    try{
      const res=await fetch('https://forbes400.onrender.com/api/forbes400/')
      const data =await res.json()
       displaydatarand(data)
       document.getElementById('calculateallmoney').onclick=()=>totalwealth(data)
       
    }
      catch (error){
          console.log('error is ',error)}
  }
  const displaydatarand=(data)=>{
   const random= Math.floor(Math.random() * 400) + 1;
 console.log(data[random]);
 const usercontainer=document.getElementById('usercontainer')


  const div=document.createElement('div')
  div.innerHTML +=`
      <div class="grid text-center grid-cols-5 p-5 border-b-2 border-white bg-gray-400 hover:bg-white">
      <h2 class="text-sm font-bold flex gap-10">${data[random].personName} <i class="fa-solid fa-eye"></i></h2>
      <h3 class=" text-sm ">${data[random].countryOfCitizenship}</h3>
      <h3 class="text-sm">${data[random].industries}</h3>
      <h3 class="text-sm ">${data[random].rank}</h3>
      <h3 class=" text-sm ">${data[random].finalWorth}</h3>
    </div>
  `
  usercontainer.appendChild(div)
   


  }












getperson()