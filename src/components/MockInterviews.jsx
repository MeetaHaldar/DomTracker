import { useState } from "react";
function MockInterviews() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    file: null,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("message", formData.message);
    data.append("resume", formData.file);

    try {
      await fetch("/api/mock-interview", {
        method: "POST",
        body: data,
      });
      setSubmitted(true);
    } catch (err) {
      console.error("Error submitting form", err);
    }
  };

  return (
    <section className="bg-[#F3F0FF] py-20 px-6 font-poppins text-[#3D365C]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
        <div className="md:w-1/2 text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Mock Interviews
          </h2>
          <ul className="list-disc ml-5 space-y-3">
            <li>📅 Book a slot for mock interviews (with calendar)</li>
            <li>🧠 Choose domain: DSA, Web Dev, ML, System Design, etc.</li>
            <li>🗣️ Interview mode: HR, Technical, Managerial</li>
          </ul>
        </div>

        <div className="md:w-1/2">
          {submitted ? (
            <div className="text-green-600 text-lg font-semibold">
              ✅ Successfully sent! We’ll get back to you soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block mb-1 font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Message</label>
                <textarea
                  name="message"
                  rows="3"
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                ></textarea>
              </div>
              <div>
                <label className="block mb-1 font-medium">
                  Upload Resume (PDF only)
                </label>
                <input
                  type="file"
                  name="file"
                  accept="application/pdf"
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              <button
                type="submit"
                className="bg-[#7C4585] hover:bg-[#C95792] text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300"
              >
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default MockInterviews;
