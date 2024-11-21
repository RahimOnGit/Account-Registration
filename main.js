let inputs = document.querySelectorAll("input")
inputs[0].focus();

console.log(inputs[3].type," the value is ", inputs[0].value);

inputs.forEach(element=>
{
    console.log(element.type);
}
)



//all inputs mandatory
inputs.forEach(element =>
{
    element.setAttribute("required","required");
}
)


//password check


//one by one 


//password field

let pass_field = document.querySelector('#pass');
pass_field.addEventListener("input",()=>
    {
        if(pass_field.value.length< 7)
        {
pass_field.classList.add("error")
        }
        else
        {
            pass_field.classList.remove("error")
        }
    })

//confirm password field
    let cpass_field = document.querySelector("#conf-pass") 
    let sign_button = document.querySelector("#sign-up-button");

cpass_field.addEventListener("input",()=>{
    if(pass_field.value===cpass_field.value)
        {
            cpass_field.classList.remove("error")
            sign_button.disabled = false
        }
    else 
  
    {
        cpass_field.classList.add("error")
        sign_button.disabled = true
    }
})

// to add 2 event listeners 

// let pass_field = document.querySelectorAll('input[type ="password"]')
// pass_field.forEach(field =>{
//     field.addEventListener("input",()=>
//     {
//         if(field.value.length< 7)
//         {
// field.classList.add("error")
//         }
//         else
//         {
//             field.classList.remove("error")
//         }
//     })
// })


//

let name_f = document.querySelector("#name");

let mail_f = document.querySelector("#mail");

let username_f = document.querySelector("#username");








const form = document.querySelector("form");
form.addEventListener("submit",(event)=> {
  event.preventDefault();
// console.log(fname.value,
//     username.value,
//     mail.value,
//    pass_field.value);

const registrationData = {

    fname : name_f.value,
     mail: mail_f.value,
     username: username_f.value,
     password:pass_field.value
   
  };

   console.log("thank you   ",registrationData.fname);


    console.log("submitted");

    form.reset();
});