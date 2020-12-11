function About(props) {

    return (
        <div>
        <h1>This is the About Page</h1>
        <p>{props.aboutMe[0].name}</p>
        <p>{props.aboutMe[0].profession}</p>
        </div>
    )
}

export default About;