export default function About() {

  return (

    <section
      className="py-24 bg-white"
    >

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE IMAGE */}
        <div>

          <img
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7"
            alt="About Tuition"
            className="rounded-3xl shadow-2xl"
          />

        </div>

        {/* RIGHT SIDE CONTENT */}
        <div>

          <h2 className="text-5xl font-bold text-blue-700 leading-tight">
            About Our Tuition Center
          </h2>

          <p className="text-gray-700 text-lg mt-8 leading-9">

            We provide quality coaching for both 
            <span className="font-bold text-blue-700">
              {" "}State Board{" "}
            </span>
            and
            <span className="font-bold text-purple-700">
              {" "}CBSE students
            </span>
            from 1st to 12th standard.

          </p>

          <p className="text-gray-700 text-lg mt-6 leading-9">

            Special attention is given for 
            <span className="font-bold">
              {" "}10th, 11th & 12th students
            </span>
            with subject-wise coaching, revision tests,
            study materials, and exam preparation support.

          </p>

          <p className="text-gray-700 text-lg mt-6 leading-9">

            Our goal is to help every student improve
            their confidence, marks, and knowledge through
            friendly teaching and personal guidance.

          </p>

          {/* FEATURES */}
          <div className="grid grid-cols-2 gap-6 mt-10">

            <div className="bg-blue-100 p-6 rounded-2xl">

              <h3 className="text-2xl font-bold text-blue-700">
                1st - 12th
              </h3>

              <p className="text-gray-700 mt-2">
                All Classes Available
              </p>

            </div>

            <div className="bg-purple-100 p-6 rounded-2xl">

              <h3 className="text-2xl font-bold text-purple-700">
                State & CBSE
              </h3>

              <p className="text-gray-700 mt-2">
                Board Coaching
              </p>

            </div>

            <div className="bg-green-100 p-6 rounded-2xl">

              <h3 className="text-2xl font-bold text-green-700">
                Subject Wise
              </h3>

              <p className="text-gray-700 mt-2">
                Special Coaching
              </p>

            </div>

            <div className="bg-yellow-100 p-6 rounded-2xl">

              <h3 className="text-2xl font-bold text-yellow-700">
                Weekly Tests
              </h3>

              <p className="text-gray-700 mt-2">
                Exam Preparation
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}