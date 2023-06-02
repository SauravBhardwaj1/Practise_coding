//add your js code here

const filterBtn= document.querySelector('button');

filterBtn.addEventListener('click',()=>{
    window.location.href="./filter.html"
})

let page=0

const fetchDataAdd = async()=>{
    page=page+1;

    try {
        let res= await fetch(`https://jsonmock.hackerrank.com/api/football_matches?page=${page}`)
        let data= await res.json()

        let outputData = data.data
        displayData(outputData)
    } catch (error) {
        console.log(error)
    }
}

fetchDataAdd()

const fetchDataSub = async()=>{
    page=page-1;
    
    try {
        let res= await fetch(`https://jsonmock.hackerrank.com/api/football_matches?page=${page}`)
        let data= await res.json()

        let outputData = data.data
        displayData(outputData)
    } catch (error) {
        console.log(error)
    }
}



const displayData = (data)=>{
    document.querySelector('tbody').innerHTML= null

    data.forEach(el=>{
        let row = document.createElement('tr')

        let col= document.createElement('td')
        col.innerText = el.competition

        let col1= document.createElement('td')
        col1.innerText = el.year

        let col2= document.createElement('td')
        col2.innerText = el.round

        let col3= document.createElement('td')
        col3.innerText = el.team1

        let col4= document.createElement('td')
        col4.innerText = el.team2

        let col5= document.createElement('td')
        col5.innerText = el.team1goals

        let col6= document.createElement('td')
        col6.innerText = el.team2goals

        row.append(col,col1,col2,col3,col4,col5,col6)
        document.querySelector('tbody').append(row)
    })
}

