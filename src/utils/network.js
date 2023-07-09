

export const getApiResource = async (url) => {
     
       try {
        const res = await fetch(url) 

        if(!res.ok) {
            console.error('Could not fetch.', res.status)
            return false
        }

        return await res.json()
       } catch (error) {
        console.error('Could not fetch.', error.message)
        return false;
       }
        
}
 
// getApiResource(SWAPI_ROOTS + SWAPI_PEOPLE)
//         .then(body => console.log(body))
//         .catch(error => console.log(error))









