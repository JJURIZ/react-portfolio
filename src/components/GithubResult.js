import React from 'react'

function GithubResult(props) {

    return(
        <div>
            {/* <h4>Profile for: {props.username.name}</h4> */}
            <h4>Username: {props.profile.login}</h4>
            <h4>Location: {props.profile.location}</h4>
            <h4>Bio: {props.profile.bio}</h4>
        </div>
    )
}

export default GithubResult;