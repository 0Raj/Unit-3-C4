async function storeSearchterm(term) {
    try{
        let res = await fetch(`https://shrouded-earth-23381.herokuapp.com/api/search/?q=${term}`)
        let data = await res.json();
        return data;

    }catch(err){
        alert(err);
    }


}

export {storeSearchterm} ;