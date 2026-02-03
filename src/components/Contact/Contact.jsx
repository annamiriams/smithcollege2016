import { useState } from "react";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState(null); // "success" | "error"

    const encode = (data) =>
        Object.keys(data)
            .map(
                (key) =>
                    encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
            )
            .join("&");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await fetch("/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: encode({
                    "form-name": "contact",
                    name,
                    email,
                    message,
                }),
            });

            setStatus("success");
            setName("");
            setEmail("");
            setMessage("");
        } catch (error) {
            console.error(error);
            setStatus("error");
        }
    };

    return (
        <div>
            <h1 className="hero-h1 contact">Contact</h1>
            <div className="primary-container">

                <form
                    className="contact-form"
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
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
                        <p className="success-message">Sent!</p>
                    )}

                    {status === "error" && (
                        <p className="error-message">
                            Something went wrong. Please try again.
                        </p>
                    )}
                </form>
            </div>
        </div>
    );
};

export default Contact;
