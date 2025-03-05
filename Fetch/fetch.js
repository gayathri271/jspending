const step1=new Promise((resolve, reject)=>{
    try{
        if(1){
            setTimeout(()=>{
            resolve("Resolve Sucessfully  step 1")
            let p= document.getElementById("pro")
            p.innerText="Resolve Sucessfully step 1 but failed at step2"
            },2000)
             }else{
                setTimeout(()=>{
                       reject("failed at step 1")
                },2000)
             }
    }catch(err){
                      reject(`error at step1 ${err.message}`);
                      
    }
});