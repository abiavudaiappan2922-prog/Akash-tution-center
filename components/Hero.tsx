export default function Hero() {

  return (

    <section className="min-h-screen bg-gradient-to-r from-blue-700 to-purple-700 flex items-center">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        <div>

          <h1 className="text-6xl font-bold text-white leading-tight">
            Best Tuition Center <br /> For Students
          </h1>

          <p className="text-white text-xl mt-6 leading-9">
            Expert coaching for State Board & CBSE students from 
            1st to 12th standard. Special classes available for 
            10th, 11th & 12th students with subject-wise coaching, 
            study materials, tests, and exam preparation.
          </p>

          <div className="flex gap-5 mt-10">

            {/* JOIN NOW BUTTON */}
            <a
              href="#admission"
              className="bg-white text-blue-700 px-8 py-4 rounded-2xl font-bold hover:scale-105 transition"
            >
              Join Now
            </a>

            {/* LEARN MORE BUTTON */}
            <a
              href="#about"
              className="border border-white text-white px-8 py-4 rounded-2xl font-bold hover:bg-white hover:text-blue-700 transition"
            >
              Learn More
            </a>

          </div>

        </div>

        <div>

          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="students"
            className="rounded-3xl shadow-2xl"
          />

        </div>

      </div>

    </section>

  );

}