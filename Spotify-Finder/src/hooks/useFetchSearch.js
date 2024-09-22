const useFetchSearch = () => {

    const search = async (url, token) => {
        try {
            const search = await fetch(url, {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            })

            let searchResult = await search.json();
            return searchResult;

        } catch (err) {
            console.log(err);
        }
    }

    return { search };
}

export default useFetchSearch;