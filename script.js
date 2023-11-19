console.log(countries_data)
// for (let i = 0; i < countries_data.length; i++) {
//     console.log(countries_data[i])
// }

//? Array olduğunda forEach 

// countries_data.forEach((ulke) => {
//     console.log(ulke.population + ' - ' + ulke.name)
// })

//? a'dan b'ye dersek küçükten büyüğe
//? b'den a'ya dersek büyükten küçüğe



// console.log(countries_data)
// countries_data.forEach((ulke) => {
//     console.log(ulke.name)
// })

// countries_data.forEach((ulke) => {
//     // const ol = document.createElement('ol')
//     // const li = document.createElement('li')
//     // li.innerHTML = ulke.name
//     const p = document.createElement('p')

//     // let sira;
//     // for (let i = 1; i <= countries_data.length; i++) {
//     //     sira = i
//     // }

//     p.textContent = `${ulke.name}`

//     document.body.append(p)
//     // ol.append(li)

//     // document.body.append(ol)
// })

countries_data.sort((a, b) => b.population - a.population)

let toplam = 0
for (let i = 0; i < countries_data.length; i++) {
    toplam += countries_data[i].population
}
console.log((countries_data[0].population / toplam) * 100)
console.log(countries_data[0].population)

for (let i = 0; i < countries_data.length; i++) {

    const parentDiv = document.createElement('div')
    parentDiv.style.display = 'flex'
    parentDiv.style.justifyContent = 'start'
    parentDiv.style.width = '100%'
    parentDiv.style.gap = '15px'
    parentDiv.style.alignItems = 'center'
    parentDiv.style.marginTop = '10px'
    parentDiv.style.border = "1px solid black"
    parentDiv.style.position = 'relative'

    parentDiv.addEventListener('mouseover', () => {
        parentDiv.style.backgroundColor = 'pink'
        img.style.left = '80%'
    })

    parentDiv.addEventListener('mouseout', () => {
        parentDiv.style.backgroundColor = 'white'
        img.style.left = '30%'
    })

    const p = document.createElement('p')

    p.addEventListener('mouseover', () => {
        p.style.color = 'aqua'
    })

    p.addEventListener('mouseout', () => {
        p.style.color = 'black'
    })


    p.textContent = `${i + 1}. ${countries_data[i].name}`


    let oran = (countries_data[i].population / toplam) * 100

    const div = document.createElement('div')

    div.style.height = '10px'
    div.style.backgroundColor = 'blue'
    div.style.width = `${oran.toFixed(2)}%`
    // div.style.float = 'left'
    // div.style.marginTop = '15px'

    const img = document.createElement('img')
    img.src = countries_data[i].flag
    img.style.width = '75px'
    img.style.position = 'absolute'
    img.style.left = '30%'
    img.style.transition = 'all 1s linear'
    // img.style.marginLeft = '25px'

    parentDiv.append(img)
    parentDiv.append(p)
    parentDiv.append(div)


    document.body.append(parentDiv)

    // countries_data.filter((ulke) => {
    //     if (ulke.region == 'Americas') {
    //         console.log(ulke.name)
    //     }
    // })



}

//? forla bütün populasyonu topladık böldük ülkerin uzunluğuna / istediğimiz ülkenin nüfüsunu buna bölücez
