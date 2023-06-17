
let search = document.getElementById("query")


const fetch = async()=>{
    let query = document.getElementById("query")
    try {
        let res = await fetch(`ulr?${query}`)
        let data = res.json()
        dispayData(data.data)
    } catch (error) {
        console.error(error)
    }
    

}

const dispayData =(data)={
    /// Displaying data here
}


const debounce = ()=>{
    setTimeout(() => {
        
    }, 2000)
}