import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("mlevjjpg");
  if (state.succeeded) {
    return <p>Message Sent!</p>;
  }

  return (
    <section id="contact">
      <div>
        <form onSubmit={handleSubmit} id="form">
          <label htmlFor="email">Email Address:</label>
          <input id="email" type="email" name="email" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            placeholder="Send us a message"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button type="submit" disabled={state.submitting}>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
