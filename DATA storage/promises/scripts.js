document.getElementById("fetchData").addEventListener("click",fetchEmployeeData);

function fetchEmployeeData (){

   let  employeePromise = new Promise( (resolve,reject) =>{
      setTimeout(() => {
        let success =true;
        if(success){
            let employeeData = {
                name:"John",
                age:25,
                designation: "software Developer"
            }
            resolve(employeeData);
        }else {
            reject("Failed to Fetch data");
        }
      },2000)
 
    }); 

    employeePromise
    .then((employeeData) => {
    console.log(employeeData);
 document.getElementById("employeeData").innerHTML = 'Name: ${employeeData.name}, Age: ${employeeData.age},Desgnation: ${ employeeData.desgnation}';
    })
    .catch((error) =>{
     console.log(error);
    } )

}