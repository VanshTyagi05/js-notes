const form=document.querySelector("form")
console.log(form);

form.addEventListener('submit', function(e){
  e.preventDefault()
  const height=Number(document.querySelector('#height').value);
  const weight=Number(document.querySelector('#weight').value);
  const results=document.querySelector('#results');

   if(height==='' || height <0 || isNaN(height)){
    results.innerHTML="Please enter a valid Height"
   }
   else if(weight==='' || weight <0 || isNaN(weight)){
    results.innerHTML="Please enter a valid weight"
   }
   else {
    const bmi=(weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML=`<span>${bmi}</span>`

    if(bmi<18.5){
      const under=document.querySelector('#under');
      under.style.backgroundColor='yellow';
    }
    if(bmi>18.5 && bmi<24.9){
      const under=document.querySelector('#normal');
      under.style.backgroundColor='green';
    }
    if(bmi>24.9){
      const under=document.querySelector('#over');
      under.style.backgroundColor='red';
    }
   }


     
});