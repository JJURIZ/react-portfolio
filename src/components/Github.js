import React, { useState } from 'react'
import axios from 'axios'

import GithubResult from './GithubResult';

function Github() {

    const [username, setUsername] = useState('');
    const [profile, setProfile] = useState(null);
    
    const handleSubmit = (e) => {
        e.preventDefault()
        let url = `https://api.github.com/users/${username}`
        axios.get(url)
        .then(result => {
            setProfile(result.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Find GitHub User</h1>
                {profile ? <GithubResult profile={profile} /> : null}
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" onChange={e => setUsername(e.target.value)} />
                <input type="submit" value="Find Profile" />
            </form>
        </div>
    )
}

export default Github;