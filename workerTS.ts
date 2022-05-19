const workers =[];

const isWorkersValid = (worker) =>
{
    return worker.isValid;
}

for (let i= 0; i<10; i++)
{
    const worker ={
        firstName: 'First Name ' + i,
            lastName: 'Last Name' + i, 
            job: 'Job ' + i,
            isValid: true
        };

        
if (isWorkersValid(worker)) { workers.push(worker)}
    
};
console.log(workers);



