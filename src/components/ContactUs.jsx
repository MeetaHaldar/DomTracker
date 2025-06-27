function ContactUs() {
  return (
    <section className="bg-[#F3F0FF] py-20 px-6 font-poppins text-[#3D365C]">
      <div className="max-w-3xl mx-auto text-left">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Us</h2>
        <form className="space-y-5">
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              rows="4"
              placeholder="How can we help you?"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-[#7C4585] hover:bg-[#C95792] text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
export default ContactUs;
