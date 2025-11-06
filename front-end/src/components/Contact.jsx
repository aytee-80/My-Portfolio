import React from "react";

export default function Contact() {
  return (
    <footer className="contact" id="contact">
      <h2>Say hello and let's work together!</h2>
      <form>
        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="Your email address" />
        </div>
        <div className="form-group">
          <label>Input your message</label>
          <textarea placeholder="Describe your project"></textarea>
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>

      <div className="contact-info">
        <p><strong>Email:</strong> amogelangthompson@gmail.com</p>
        <p><strong>Phone:</strong> 067 072 9097</p>
        <p>
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://www.linkedin.com/in/amogelang-thomson-369a7623a"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Profile
          </a>
        </p>
        <p>
          <strong>GitHub:</strong>{" "}
          <a
            href="https://github.com/aytee-80"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Repositories
          </a>
        </p>
      </div>

      <p className="footer-note">© 2025 Amogelang Thomson — Built with React</p>
    </footer>
  );
}
