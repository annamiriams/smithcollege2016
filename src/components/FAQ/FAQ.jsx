import { Link } from "react-router-dom";

const FAQ = () => {
    return (
        <div>
            <h1 className="hero-h1">FAQ</h1>
            <div className="primary-container">

                <br />
                <div className="faq-container">
                    <div className="detail-card">
                        <h3>When can we register for reunion?</h3>
                        <p>Look for the Reunion Registration email from the college the first week of February! We don't yet know what date it will arrive, but as soon as you see it, please immediately sign up if you are hoping to stay in college housing for the Reunion Weekend. Spots are limited and there was a wait list last year.</p>
                        <p>If you do not receive an email with a personal registration link then you may have opted out of Smith emails at some point. Please reach out to <a href="mailto:reunionregistration@smith.edu">reunionregistration@smith.edu</a> for support.</p>
                    </div>

                    <div className="detail-card">
                        <h3>How much will reunion cost?</h3>
                        <p style={{ fontStyle: 'italic' }}>Projected registration fees are listed below. Final costs will be available during registration.</p>

                        <table className="cost-table">
                            <tbody>
                                <tr>
                                    <td>Class fee</td>
                                    <td>$50</td>
                                </tr>
                                <tr>
                                    <td>College fee</td>
                                    <td>$30</td>
                                </tr>
                                <tr>
                                    <td>Campus housing (includes breakfast)</td>
                                    <td>$160</td>
                                </tr>
                                <tr>
                                    <td>Meals (lunch & dinner)</td>
                                    <td>$170–$250</td>
                                </tr>
                                <tr className="total-row">
                                    <td>Total</td>
                                    <td>$410–$490</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="detail-card">
                        <h3>Is there Financial Assistance?</h3>
                        <p>Financial assistance for Reunion is available! Our class leadership team has decided on two financial assistance packages. We will be offering</p>
                        <table className="cost-table">
                            <tbody>
                                <tr>
                                    <td>Housing coverage</td>
                                    <td>$160 value</td>
                                </tr>
                                <tr>
                                    <td>Meals coverage</td>
                                    <td>$168 - $214 value</td>
                                </tr>
                            </tbody>
                        </table>
                        <br />
                        <p>We invite anyone who may need financial support for Reunion registration costs to fill out <a target="_blank" href="https://go.pardot.com/e/885143/jtjQTXYE3WpgkC476/2txm6k/978120520/h/HEud9JcJWGwW_YWhHVn6f-Wh3nFFCRkSNDkzaKdkfL0">this Google form</a>. Responses will be compiled by a staff member at Smith and names will be removed to preserve anonymity before sending to a class representative to approve on a rolling basis. </p>
                        <p>Funding is limited, so please fill out the form as soon as you are able if you need financial assistance. Once approved, you will receive a unique link to register for Reunion from the Reunion Registration team.</p>
                    </div>

                    <div className="detail-card">
                        <h3>What can we expect at Reunion?</h3>
                        <p>In addition to Ivy Day and graduation, there will be many events taking place on campus throughout the weekend. Below are class-specific events that we hope to highlight! You will receive additional details about the weekend schedule as we get closer to reunion.</p>

                        <p>You're welcome to arrive as early as Thursday evening (May 14) and can swing by our class headquarters to pick up your Class of 2016 merch.</p>

                        <p>On Saturday (May 16), we will have our "Mini Mountain Day" class program. This will be a casual event to reconnect with classmates, enjoy cider and donuts, play lawn games, and craft. Later that evening, we'll have our class dinner, where you'll hear a welcome from the reunion team and a performance by the Smiffenpoofs. </p>
                    </div>

                    <div className="detail-card">
                        <h3>More questions?</h3>
                        <p>Check out the <a target="_blank" href='https://go.pardot.com/e/885143/alums-reunion/2txm68/978120520/h/HEud9JcJWGwW_YWhHVn6f-WH4nFFCRkSNDkzaKdkfL0'>Smith Reunion website</a> for more information. You can also reach out to someone at Smith by <a href="mailto:reunionregistration@smith.edu">email</a> or call them at 413-585-2150.</p>
                        <p>Feel free to reach out to the Smith Class of 2016 class cabinet through <a target="_blank" href="https://smithcollege2016.com/contact">our contact page</a>, <a href="mailto:smithcollegeclassof2016@gmail.com">our email</a>, or <a href='https://www.instagram.com/smithcollegeclassof2016' target="_blank">instagram</a>.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;