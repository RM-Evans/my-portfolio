import React from 'react';
import "./style.css";

const Contact = () => {

    const noop = (e) => {
        e.preventDefault()
        alert('For demonstration purposes only :) ')
        return false
    }
    return <div>
        <div class="contact-page">
            <h1 class="contact-header"> Trying to contact me? </h1>
            <div class="email-container">
                <h2> Drop me a message </h2>
                <form onSubmit={ noop } method="POST">
                    <fieldset>
                    <input placeholder="Your name" type="text" tabindex="1"  autofocus/>
                    </fieldset>
                    <fieldset>
                    <input placeholder="Your Email Address" type="email" tabindex="2" />
                    </fieldset>
                    <fieldset>
                    <input placeholder="Your Phone Number" type="tel" tabindex="3" />
                    </fieldset>
                    <fieldset>
                    <input placeholder="Your Web Site starts with http://" type="url" tabindex="4" />
                    </fieldset>
                    <fieldset>
                    <textarea placeholder="Type your Message Here...." tabindex="5" ></textarea>
                    </fieldset>
                    <fieldset>
                    <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
                    </fieldset>
                </form>
            </div>
        </div>

    </div>;

};

export default Contact;