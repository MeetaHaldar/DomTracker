function Hero() {
  return (
    <section className="bg-[#FFF8F3] py-20 px-6 font-poppins text-[#3D365C]">
      <div className="max-w-4xl mx-auto text-left">
        <h3 className="text-sm font-semibold bg-[#F8B55F] text-[#3D365C] inline-block px-4 py-1 rounded-full mb-4 shadow-sm">
          Our Mission
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold text-[#7C4585] mb-6 leading-snug">
          Empowering Students to Learn, Grow & Succeed 🚀
        </h2>
        <p className="text-base md:text-lg leading-relaxed text-[#4B445C] mb-8">
          I'm a Full Stack Web Developer with 2 years of experience and a deep
          belief in learning and sharing. I love teaching what I know — because
          we grow faster when we grow together.
          <br />
          <br />
          This free platform was created to support students and beginners in
          building strong resumes, preparing for interviews, and gaining
          practical tech insights.
          <br />
          <br />
          <span className="font-semibold text-[#C95792]">
            Let’s grow and build the future — together!
          </span>
        </p>
        <a
          href="#resume-feedback"
          className="inline-block bg-[#7C4585] hover:bg-[#C95792] text-white font-semibold px-6 py-3 rounded-xl shadow-md transition-all duration-300"
        >
          Get Free Resume Feedback Now
        </a>
      </div>
    </section>
  );
}

export default Hero;
