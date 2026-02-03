// src/components/Contact/Contact.jsx
// src/components/Contact/Contact.jsx
import { useState } from "react";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState(null); // "success" / "error"

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        try {
            await fetch("/", {
                method: "POST",
                body: formData
            });

            setStatus("success");
            setName("");
            setEmail("");
            setMessage("");
        } catch (err) {
            setStatus("error");
        }
    };

    return (
        <div className="contact">
            <h1 className="hero-h1">Reach Out</h1>

            <form
                className="contact-form"
                name="contact"
                method="POST"
                action="/"
                data-netlify="true"
                netlify-honeypot="bot-field"
                // onSubmit={handleSubmit}
            >
                {/* Required hidden inputs */}
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" />

                <div className="form-row">
                    <div className="form-field">
                        <label>Name:</label>
                        <input
                            name="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-field">
                        <label>Email:</label>
                        <input
                            name="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-field">
                        <label>Message:</label>
                        <textarea
                            name="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        />
                    </div>
                </div>

                <div className="button-container">
                    <button type="submit">Send</button>
                </div>

                {status === "success" && (
                    <p className="success-message">
                        Sent!
                    </p>
                )}

                {status === "error" && (
                    <p className="error-message">
                        Something went wrong. Please try again.
                    </p>
                )}
            </form>

        </div>

    );
}

// export default Contact;


    // return (
    //     <div>
    //         <h1 className="hero-h1">Reach Out</h1>
            
    //         <form action="">

    //         </form>

    //         {/* <iframe
    //             src="https://docs.google.com/forms/d/e/1FAIpQLScK3p67b5NG87ev-A47UM39DDxfZLcauZql6o4oJ2M8NhpeLg/viewform?usp=header"
    //             frameBorder="0"
    //             marginHeight="0"
    //             marginWidth="0">
    //             Loading…
    //         </iframe> */}
    //     </div>
    // );
// }

export default Contact;