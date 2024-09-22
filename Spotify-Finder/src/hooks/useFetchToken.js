const useFetchToken = () => {

    const url = import.meta.env.VITE_TOKEN_URL;

    const getAccessToken = async () => {
        const tokenRequest = await fetch(url, {
            method: 'POST',
            body: new URLSearchParams({
                'grant_type': 'client_credentials'
            }),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + btoa(import.meta.env.VITE_CLIENT_ID + ':' + import.meta.env.VITE_CLIENT_SECRET)
            }
        })
        const tokenResponse = await tokenRequest.json();
        return tokenResponse;
    }

    return { getAccessToken }
}

export default useFetchToken;