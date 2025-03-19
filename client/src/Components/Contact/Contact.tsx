import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import {
  closeModal,
  resetState,
  sentEmailError,
  sentEmailSuccess,
} from "../../features/contact/contactSlice";
import "./Contact.scss";
import { SubjectCheckbox } from "./SubjectCheckbox";

export const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const dispatch = useDispatch();

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      dispatch(resetState());
      await emailjs.sendForm(
        import.meta.env.EMAILJS_SERVICE_ID,
        import.meta.env.EMAILJS_TEMPLATE_ID,
        form.current || "",
        import.meta.env.EMAILJS_PUBLIC_KEY
      );
      dispatch(sentEmailSuccess());
      if (form.current) {
        form.current.reset();
      }
      setTimeout(() => {
        dispatch(closeModal());
      }, 5000);
    } catch (error) {
      dispatch(sentEmailError());
    }
  };

  const checkboxItems: Array<string> = [
    "Job Opportunity",
    "Project Collaboration",
    "Mentorship Request",
    "Networking / Chat",
    "Speaking Engagement",
    "Consulting Inquiry",
    "Feedback / Suggestions",
    "Other",
  ];

  return (
    <div className="contact-section">
      <section className="contact-section-header">
        <h1>Let's Connect!</h1>
        <p>
          I'm always open to discussing new opportunities, collaborations, or
          mentorship. Whether it's a job, project, or just a chat, feel free to
          reach out!
        </p>
      </section>
      <form ref={form} onSubmit={sendEmail} className="contact-form-container">
        <label>
          <span>Full Name *</span>
          <input type="text" name="name" required placeholder="Full Name" />
        </label>

        <label>
          <span>Email *</span>
          <input type="email" name="email" required placeholder="Email" />
        </label>

        <label>
          <span>Message *</span>
          <textarea
            name="message"
            required
            placeholder="Leave me a message..."
            rows={8}
          />
        </label>

        <div className="checkbox-container">
          <span className="checkbox-container__label">Subject</span>
          <div className="checkbox-group">
            {checkboxItems.map((subject) => (
              <SubjectCheckbox value={subject} key={subject} />
            ))}
          </div>
        </div>

        <button type="submit" className="submit-button">
          Send Message
        </button>
      </form>
    </div>
  );
};
