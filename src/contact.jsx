import '../src/contact.css';

export default function Contact() {
    return (
        <>
            <section id="contact-section">
                <h1 className="contactTitle">Get in Touch</h1>
                <p className="contactDesc">
                    Feel free to reach out via the form below or contact me through the provided details.
                </p>
                
                <form id="contactForm">
                    <div className="formGroup">
                        <label htmlFor="myFName">* First Name:</label>
                        <input type="text" id="myFName" name="myFName" required autoFocus placeholder="John" />
                    </div>
                    
                    <div className="formGroup">
                        <label htmlFor="myLName">* Last Name:</label>
                        <input type="text" id="myLName" name="myLName" required placeholder="Doe" />
                    </div>
                    
                    <div className="formGroup">
                        <label htmlFor="myEmail">* Email:</label>
                        <input type="email" id="myEmail" name="myEmail" required placeholder="john.doe@example.com" />
                    </div>
                    
                    <div className="formGroup">
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" rows="4" placeholder="Write your message here..." />
                    </div>

                    <input type="submit" className="submit" value="Submit" />
                </form>

                <div className="contactDetails">
                    <p><i>Call me on: <strong>888-555-5555</strong></i></p>
                    <p><strong>Facebook:</strong> <a href="https://www.facebook.com/issia.kone" target="_blank" rel="noopener noreferrer">Issia Kone</a></p>
                    <p><strong>Email:</strong> <a href="mailto:ikone@my.centennialcollege.ca">ikone@my.centennialcollege.ca</a></p>
                </div>
            </section>
        </>
    );
}
