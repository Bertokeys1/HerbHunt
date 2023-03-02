import React, { useRef } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import emailjs from "@emailjs/browser";

export default function Contacts() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qvga7bg",
        "template_t8ivwpr",
        form.current,
        "AaOxXPjoUUM_9BIig"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <form ref={form} id="contact" className="mt-5 pb-5 contact" onSubmit={sendEmail}>
      <div className="post-heading text-center">
        <h3 className="display-4 font-weight-bold">Contact Me</h3>
        <hr className="w-50 mx-auto pb-2" />
      </div>

      <section className="contactInfo">
        <div className="fs-2">Send me an email. I'll contact you shortly.</div>
        <div className="fs-5">
        <li>What services are you looking for?</li>
        <li>Please send a description of your vessel. Include information about the speed and the engine type (gas/diesel).</li>
        <li>What dates are you looking for?</li>
        <li>Where is the daparting location and arrival description?</li>
        </div>
      </section>
      
      <div className="contactForm">
        <TextField
          id="standard-basic"
          label="Email"
          variant="standard"
          type="email"
          name="email"
        />
        <TextField
          id="standard-basic"
          label="Name"
          variant="standard"
          type="text"
          name="from_name"
        />
        <TextField
          id="standard-basic"
          label="Subject"
          variant="standard"
          type="subject"
          name="Subject"
        />
        <TextField
          id="fullWidth"
          label="Message"
          variant="standard"
          fullwidth
          multiline
          rows={6}
          type="text"
          name="message"
        />

      <Button variant="text" type="submit" value="Send">Send</Button>
      </div>
    </form>
  );
}
