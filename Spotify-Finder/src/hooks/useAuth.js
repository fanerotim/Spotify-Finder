import { useState } from "react";

const useAuth = () => {

    const [token, setToken] = useState(null)

    const getAccessToken = () => {
        fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            body: new URLSearchParams({
                'grant_type': 'client_credentials'
            }),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + btoa(import.meta.env.VITE_CLIENT_ID + ':' + import.meta.env.VITE_CLIENT_SECRET)
            }
        })
        .then(res => res.json())
        .then(result => setToken(result.access_token))

        return token;
    }

    return { getAccessToken, token }
}

export default useAuth;