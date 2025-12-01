import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_ko3hmpt", "template_ahbmmqd", form.current, {
        publicKey: "I6HAT5mUZH7WHabGE",
      })
      .then(
        () => {
          setEmail("");
          setName("");
          setMessage("");
          setSuccess("Message Sent Successfully ✅");
        },
        (error) => {
          console.log("FAILED...", error.text);
          setSuccess("Failed to send message ❌");
        }
      );
  };

  return (
    <div>
      <p className="text-primary dark:text-primary transition-colors duration-300">{success}</p>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
        <input type="hidden" name="to_email" value="ahmedxyx93@gmail.com" />
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
          className="h-12 rounded-lg bg-white/50 dark:bg-darkBrown-light text-lightText dark:text-white px-2 border border-primary/30 focus:border-primary focus:outline-none transition-colors duration-300 placeholder:text-lightGrey dark:placeholder:text-lightGrey"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
          className="h-12 rounded-lg bg-white/50 dark:bg-darkBrown-light text-lightText dark:text-white px-2 border border-primary/30 focus:border-primary focus:outline-none transition-colors duration-300 placeholder:text-lightGrey dark:placeholder:text-lightGrey"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          name="message"
          rows="9"
          placeholder="Message"
          required
          className="rounded-lg bg-white/50 dark:bg-darkBrown-light text-lightText dark:text-white p-2 border border-primary/30 focus:border-primary focus:outline-none transition-colors duration-300 placeholder:text-lightGrey dark:placeholder:text-lightGrey"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="w-full rounded-lg border border-primary dark:border-primary text-white dark:text-white h-12 font-bold text-xl hover:bg-primary dark:hover:bg-primary bg-primary dark:bg-primary transition-all duration-500"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
