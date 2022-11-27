const fetchRequest = async ({ method = 'GET',url,body=``}) => {
    var resp = await fetch(
        url,
        {
            method: method,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    var jsonResp = await resp.json()
    if (!jsonResp.success){
        return []
    }
    return jsonResp.response
}

export default fetchRequest