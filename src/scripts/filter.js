//add your js code here

const fetchedData = async()=>{

    let year = document.getElementById('year').value;
    let team1 = document.getElementById('team1').value;
    let team2 = document.getElementById('team2').value;

    const query = new URLSearchParams()
    if(year){
        query.set('year', year)
    }
    if(team1){
        query.set('team1', team1)
    }
    if(team2){
        query.set('team2', team2)
    }

    try {
        let res = await fetch(`https://jsonmock.hackerrank.com/api/football_matches?${query.toString()}`)
        let data = await res.json()

        let outputData = data.data
        const tableBody = document.querySelector('tbody')

        tableBody.innerHTML = ""

        outputData.forEach(el=>{
            let row = document.createElement('tr')
            row.innerHTML = `<td>${el.competition}</td>
            <td>${el.year}</td>
            <td>${el.round}</td>
            <td>${el.team1}</td>
            <td>${el.team2}</td>
            <td>${el.team1goals}</td>
            <td>${el.team2goals}</td>`

            tableBody.appendChild(row)
        })
        
    } catch (error) {
        console.log(error)
    }
}


const filterEl = document.querySelectorAll("#year, #team1, #team2")
filterEl.forEach(el =>{
    el.addEventListener("change", fetchedData)
})

fetchedData()