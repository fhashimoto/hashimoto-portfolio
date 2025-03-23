import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingIcon from "../../assets/loading";
import {
  closeModal,
  resetState,
  sentEmailError,
  sentEmailSuccess,
} from "../../features/contact/contactSlice";
import { RootState } from "../../store/store";
import "./Contact.scss";
import { SubjectCheckbox } from "./SubjectCheckbox";

export const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state: RootState) => state.contact);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      dispatch(resetState());
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current || "",
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
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
    <section className="contact-section" id="contact">
      <div className="contact-section-header">
        <h2>Let's Connect!</h2>
        <p>
          I'm always open to discussing new opportunities, collaborations, or
          mentorship. Whether it's a job, project, or just a chat, feel free to
          reach out!
        </p>
      </div>
      <form ref={form} onSubmit={sendEmail} className="contact-form-container">
        <label>
          <span>Full Name *</span>
          <input
            type="text"
            name="name"
            required
            placeholder="Full Name"
            disabled={isLoading}
          />
        </label>

        <label>
          <span>Email *</span>
          <input
            type="email"
            name="email"
            required
            placeholder="Email"
            disabled={isLoading}
          />
        </label>

        <label>
          <span>Message *</span>
          <textarea
            name="message"
            required
            placeholder="Leave me a message..."
            rows={8}
            disabled={isLoading}
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

        <button type="submit" className="submit-button" disabled={isLoading}>
          {isLoading ? <LoadingIcon size={30} /> : <span>Send Message</span>}
        </button>
      </form>
    </section>
  );
};
