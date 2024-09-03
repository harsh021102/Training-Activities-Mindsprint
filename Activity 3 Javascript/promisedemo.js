function check(age)
{
    const promise = new Promise((resolve,reject)=>{
        if(age>=18)
            resolve('valid')
        else
            reject('not valid')
    }).then(
        value=>console.log(value)
    ).catch(
        (error)=>console.log(error)
    )
    return promise
}
check(56)
console.log(check(4));
