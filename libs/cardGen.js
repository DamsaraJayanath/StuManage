export const cardGen = (name, age, clas, subject=[]) => {
    
    let sub = ''

    subject.forEach(ele=>{
        sub += `<p>${ele}</p>`
    })

    return`

<div class="card">
        <h1 class="name">${name}</h1>
        <div class="infor">
            <p>Age: ${age}</p>
            <p>Class is: ${clas}</p>
        </div>
        <h3>Subjects</h3>
        <div class="subjects">
            ${sub}
        </div>

`}