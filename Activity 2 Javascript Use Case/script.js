let data = []
let ind = -1
function addDetails()
{
    const fullname = document.querySelector('#nameadd')
    const phone = document.querySelector('#phoneadd')
    const ob = {
        id: Date.now(),
        name: fullname.value,
        number: phone.value,
    }
    fullname.value=""
    phone.value=""
    data.push(ob)
    display()
}
function display(){
    const body = document.querySelector('tbody')
    let str = ""
    for(let i in data)
    {
        const index = +i+1
        // console.log(index);
        
        str+=`
        <tr>
            <td>${index}</td>
            <td>${data[i].name}</td>
            <td>${data[i].number}</td>
            <td>
                <button id="${i}" type="submit" class="btn btn-success w-25" onclick ="updateData(${i})">Edit</button>
                <button id="${i}" type="submit" class="btn btn-danger w-25" onclick="deleteData(${i})">Delete</button>
            </td>
        </tr>`
    }
    body.innerHTML=str
}
function updateData(index){
    ind=index
    const disableDisplay = document.querySelector('.displayname')
    const name = document.querySelector('.nameupdate')
    const number = document.querySelector('.phoneupdate')
    disableDisplay.value = data[index].name
    name.value = data[index].name
    number.value = data[index].number
    // console.log(index,data);
    // display()
}
function saveDetails()
{
    const disableDisplay = document.querySelector('.displayname')
    const name = document.querySelector('.nameupdate')
    const number = document.querySelector('.phoneupdate')
    data[ind].name = name.value
    data[ind].number=number.value
    disableDisplay.value = ""
    name.value = ""
    number.value = ""
    display()
}
function deleteData(index){
    console.log("Delete: ",index);
    
    data.splice(index,1);
    display()
}