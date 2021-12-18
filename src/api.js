export async function fetchData() {
    const requestOptions = {
        method: "GET"
    }
    const temp = await fetch(`http://localhost:5000/Stephanie/locations.json`, requestOptions).then((data) => {
        if(!data.ok){
            throw Error("something went wrong fetching data")
        }
        return data.json()
    }).catch(function(e){
        console.error(e)
    })
   return temp
}