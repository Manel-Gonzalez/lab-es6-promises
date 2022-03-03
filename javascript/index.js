// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
  getInstruction("mashedPotatoes", 0, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 2, (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 3, (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 4, (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  }, (error) => console.log(error));



// Iteration 1 - using callbacks
// ...
getInstruction("mashedPotates",0,(step1)=>{
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;

  getInstruction("mashedPotates",1,(step2)=>{
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
    
    getInstruction("mashedPotates",2,(step3)=>{
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;

      getInstruction("mashedPotates",3,(step4)=>{
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;

        getInstruction("mashedPotates",4,(step5)=>{
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
          document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready</li>`;
          document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");

        },(error) => console.log(error));
      },(error) => console.log(error));
    },(error) => console.log(error));
  },(error) => console.log(error));
},(error) => console.log(error));


// Iteration 2 - using promises
// ...
obtainInstruction("steak",0)
  .then((step1) =>{
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
    return obtainInstruction("steak",1)
  })
  .then((step2) =>{
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
    return obtainInstruction("steak",2)
  })
  .then((step3) =>{
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
    return obtainInstruction("steak",3)
  })
  .then((step4) =>{
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
    return obtainInstruction("steak",4)
  })
  .then((step5) =>{
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
    return obtainInstruction("steak",5)
  })
  .then((step6) =>{
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
    return obtainInstruction("steak",6)
  })
  .then((step7) =>{
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`;
    return obtainInstruction("steak",7)
  })
  .then((step8) =>{
    document.querySelector("#steak").innerHTML += `<li>${step8}</li>`;
    document.querySelector("#steak").innerHTML += `<li>Steak is ready</li>`;
    document.querySelector("#steakImg").removeAttribute("hidden");
  }).catch;
// Iteration 3 using async/await
// ...

async function makeBroccoli(){
  try {
    const step0 = await obtainDirections("brocoli", 0);
    document.querySelector("#brocoli").innerHTML += `<li>${step0}</li>`;


    const step1 = await obtainDirections("brocoli", 1);
    document.querySelector("#brocoli").innerHTML += `<li>${step1}</li>`;

    const step2 = await obtainDirections("brocoli", 2);
    document.querySelector("#brocoli").innerHTML += `<li>${step2}</li>`;

    const step3 = await obtainDirections("brocoli", 3);
    document.querySelector("#brocoli").innerHTML += `<li>${step3}</li>`;

    const step4 = await obtainDirections("brocoli", 4);
    document.querySelector("#brocoli").innerHTML += `<li>${step4}</li>`;

    const step5 = await obtainDirections("brocoli", 5);
    document.querySelector("#brocoli").innerHTML += `<li>${step5}</li>`;

    const step6 = await obtainDirections("brocoli", 6);
    document.querySelector("#brocoli").innerHTML += `<li>${step6}</li>`;
    document.querySelector("#brocoli").innerHTML += `<li>Brocoli is ready</li>`;
    document.querySelector("#brocoliImg").removeAttribute("hidden");

  }catch(error){
    console.log("Algo fue mal: ",error)
  }
}

makeBroccoli();

const pr0 = obtainInstruction("brusselSprouts",0);
const pr1 = obtainInstruction("brusselSprouts",1);
const pr2 = obtainInstruction("brusselSprouts",2);
const pr3 = obtainInstruction("brusselSprouts",3);
const pr4 = obtainInstruction("brusselSprouts",4);
const pr5 = obtainInstruction("brusselSprouts",5);
const pr6 = obtainInstruction("brusselSprouts",6);


Promise.all([pr0,pr1,pr2,pr3,pr4,pr5,pr6]).then((values)=>{
  values.forEach((instruction)=> {
    document.querySelector("#brusselSprouts").innerHTML += `<li>${instruction}</li>`;
  }).catch((error)=> console.log(error));
})

// Bonus 2 - Promise all
// ...