import React from "react";
import "./Contact.css";
import { TfiEmail } from "react-icons/tfi";
const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8f4a6baf-31cd-41bc-aa47-e5e22892a886");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      setResult(data.message);
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <TfiEmail />
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo quaerat
          accusantium, veniam, doloremque cum necessitatibus nulla tenetur
          sapiente obcaecati aspernatur sunt cumque natus earum, voluptas
          exercitationem dolore nostrum eius omnis.
        </p>
        <ul>
          <li>meeta0haldar1001@gmail.com</li>
          <li>+91 8076436600</li>
          <li>Address: Noida</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
          />
          <label>Phone No</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter Your Number"
            required
          />
          <label>Email ID</label>
          <input
            type="email"
            name="emailId"
            placeholder="Enter Your Number"
            required
          />
          <label>Add Resume Link</label>
          <input
            type="link"
            name="resume"
            placeholder="Enter Your Number"
            required
          />
          <label>Write your messages Here</label>
          <textarea
            name="message"
            rows="6"
            placeholder=" enter your mesage"
            required
          ></textarea>
          <button type="submit" className="dark-btn btn">
            Submit Now
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
