function Contact(props) {
    return (
        <div>
        <h1>This is the Contact Page</h1>
        <p><span>Phone: </span>{props.aboutMe[0].phone}</p>
        </div>
    )
}

export default Contact;