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
                        <p>Registration is officially open! Look for the Reunion Registration email from the college or check <a href="https://smith.my.site.com/smithcommunity/s/findmyreunionlink" target="_blank">this link</a> for your personalized link to register. Housing is limited, so please sign up soon!</p>
                    </div>

                    <div className="detail-card">
                        <h3>When does registration close?</h3>
                        <p>April 30, 2026 is the last day you can register for reunion. See info below about reimbursable fees in case you register and then learn you cannot attend.</p>
                    </div>

                    <div className="detail-card">
                        <h3>How much will reunion cost?</h3>
                        <p>Projected registration fees are listed below. Meal fees are reimburseable by May 1, and housing fees are reimbursable at any time. The class and college fees are non-reimburseable. Consider reunion a choose-your-own-adventure--you're welcome to stay and eat off-campus and avoid those costs. Meals are further customizable and are not a flat cost. Anyone wishing to attend reunion should register and pay the base fee of $80 (class and college fees only).</p>

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
                        <p>Financial assistance for Reunion is available! Our class leadership team has decided on two financial assistance packages. </p>
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
                        <h3>Where will I stay if I signed up for on-campus housing?</h3>
                        <p>Campus housing locations for classmates will be assigned near to class headquarters, which is the main gathering place for our class. Housing assignments for alums and guests will be made near their reuning classmates in multiple houses assigned to the class, in accordance with accessibility and companion needs. Provided that all accessibility and companion needs can be met, we try to group alums in individual rooms in close proximity to their senior house classmates within their assigned houses.</p>
                        <p>Please make sure to check your profile in the <a target="_blank" href="https://smith.my.site.com/smithcommunity/s/login/">Smith Network</a> to confirm your senior house assignment. You can update your senior house as needed in your profile or by contacting Smithie Records by <a href="mailto:smithierecords@smith.edu">email</a> or <a href="tel:+1-413-585-2036">phone</a>.</p>
                    </div>

                    <div className="detail-card">
                        <h3>When can I arrive for check-in?</h3>
                        <p>Check-in will be at Seelye Hall at the days and times listed below:</p>
                        <table className="cost-table">
                            <tbody>
                                <tr>
                                    <td>Thursday</td>
                                    <td>3pm-9pm</td>
                                </tr>
                                <tr>
                                    <td>Friday</td>
                                    <td>8am-8pm</td>
                                </tr>
                                <tr>
                                    <td>Saturday</td>
                                    <td>8am-8pm</td>
                                </tr>
                            </tbody>
                        </table>
                        <br />
                    </div>

                    <div className="detail-card">
                        <h3>How early can I get into my room?</h3>
                        <p>If you registered for on-campus housing, you can check into your room as early as 4pm on Thursday.</p>
                    </div>

                    <div className="detail-card">
                        <h3>When do I have to be out of my room?</h3>
                        <p>Everyone needs to be out of on-campus housing by 11am on Sunday.</p>
                    </div>

                    <div className="detail-card">
                        <h3>What events are happening during Reunion?</h3>
                        <p>In addition to Ivy Day and graduation, there will be <a target="_blank" href='https://www.smith.edu/alums/reunion/schedules'>many events</a> taking place on campus throughout the weekend. Below are class-specific events that we hope to highlight!</p>

                        <p>You're welcome to arrive as early as Thursday evening (May 14) and can swing by our class headquarters to pick up your Class of 2016 merch.</p>

                        <p>On Saturday (May 16), we will have our "Mini Mountain Day" class program. This will be a casual event to reconnect with classmates, enjoy cider and donuts, play lawn games, and craft. Later that evening, we'll have our class dinner, where you'll hear a welcome from the reunion team and a performance by the Smiffenpoofs. </p>

                        <p></p>
                    </div>

                    <div className="detail-card">
                        <h3>More questions?</h3>
                        <p>Check out the <a target="_blank" href='https://www.smith.edu/alums/reunion'>Smith Reunion website</a> for more information. You can also reach out to someone at Smith by <a href="mailto:reunionregistration@smith.edu">email</a> or call them at 413-585-2150.</p>
                        <p>Feel free to reach out to the Smith Class of 2016 class cabinet through <a target="_blank" href="https://smithcollege2016.com/contact">our contact page</a>, <a href="mailto:smithcollegeclassof2016@gmail.com">our email</a>, or <a href='https://www.instagram.com/smithcollegeclassof2016' target="_blank">instagram</a>.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;