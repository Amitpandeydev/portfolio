import { useState } from "react";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submissions, setSubmissions] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !message) return;

    const newEntry = {
      email,
      message,
    };

    setSubmissions([newEntry, ...submissions]);

    // clear form
    setEmail("");
    setMessage("");
  };

  return (
    <div className="container py-5">

      {/* HEADING */}
      <div className="text-center mb-4" data-aos="fade-up">
        <h2 className="fw-bold">Contact Us</h2>
        <p className="text-muted">
          Have a question or want to work with us? Send us a message.
        </p>
      </div>

      {/* FORM */}
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit} className="card p-4 shadow-sm" data-aos="fade-up">

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea
                className="form-control"
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your message"
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Submit
            </button>

          </form>
        </div>
      </div>

      {/* DISPLAY SUBMITTED DATA */}
      {submissions.length > 0 && (
        <div className="mt-5">
          <h4 className="text-center mb-4">Submitted Messages</h4>

          <div className="row justify-content-center">
            <div className="col-md-8">
              {submissions.map((item, index) => (
                <div
                  key={index}
                  className="card mb-3 shadow-sm"
                  data-aos="fade-up"
                >
                  <div className="card-body">
                    <p className="mb-1">
                      <strong>Email:</strong> {item.email}
                    </p>
                    <p className="mb-0">
                      <strong>Message:</strong> {item.message}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}

    </div>
  );
}
