const todos= [
    {
        name: 'call the dentist ',
        completed: false
},
{
    name: 'Schedule a dinner with Peter ',
    completed: false
},
{
    name: 'Adopt a dog ',
    completed: false
},
{
    name: ' Call the vet ',
    completed: false
},
{
    name: 'No Alcohol Today',
    completed: false
},
]


//<li> <input type="checkbox"> call the dentist </li>
           //create render function
           //read the data in the array of object and populate the todolist
        const populate =() =>{
            document.querySelector(".Todo").innerHTML= ''
        todos.forEach(todo=> {
            console.log(todo)
            var li= document.createElement("li")
                li.innerHTML=` <input type="checkbox"> ${todo.name}`
                document.querySelector(".Todo").appendChild(li)
            });
        }
        populate()
        //grab the +sign
        var plussign= document.querySelector(".add")

        // make the input box pops up when the sign is clicked
      plussign.addEventListener("click", (e)=>{
        document.getElementById("input").style.display="block"
        
        
          // add the data inputed to the todos
          // make the inputbox disappear
      })
      document.addEventListener("keydown", (e)=>{
          if(e.key=="Enter"){
            var inputdata= document.getElementById("inputed").value

            var obj={
                name:inputdata,
                completed:false
            }
            todos.push(obj)

            populate()
            //disappear()
            
           
          }

      })
      //var disappear= ()=>{
      //  document.getElementById("input").style.display= "none"
        //document.getElementById("inputed").value=" "
      //}
      //when the main body is clicked the input div shopuld disappear
      // grab the body 
      // write an eventlistener
      
      document.addEventListener("click",(e)=>{
       if(e.target.className !="transparent" )
       { if(e.target.className ="add"){
        document.getElementById("input").style.display= "block"
       }else{
        document.getElementById("input").style.display= "none"
       }
    }
      })