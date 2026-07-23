
export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-[#081524] to-[#0B1F33]"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <h2 className="text-5xl font-extrabold text-white">
            Contact Us
          </h2>

          <p className="text-gray-300 mt-5 text-xl">
            Get in touch for Admissions & Course Details
          </p>

        </div>

        {/* Contact Card */}

        <div className="bg-[#10263D] rounded-[35px] p-10 lg:p-14 shadow-2xl border border-yellow-500/20">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Contact Details */}

            <div>

              <h3 className="text-4xl font-bold text-yellow-400 mb-8">
                AKASH TUITION CENTRE
              </h3>

              <div className="space-y-8">

                <div>

                  <h4 className="text-yellow-400 text-2xl font-bold mb-3">
                    📍 Address
                  </h4>

                  <p className="text-gray-300 text-lg leading-8">
                    No:4/476,
                    Veeravanjeenthan Street,
                    <br />
                    P.T. Moorthy Nagar,
                    <br />
                    Nearby S.P. Chicken Centre,
                    <br />
                    Padiyanallur,
                    Redhills,
                    Chennai - 600052
                  </p>

                </div>

                <div>

                  <h4 className="text-yellow-400 text-2xl font-bold mb-3">
                    📞 Phone
                  </h4>

                  <p className="text-white text-xl font-semibold">
                    9087580456
                  </p>

                </div>

                <div>

                  <h4 className="text-yellow-400 text-2xl font-bold mb-3">
                    👩‍🏫 Faculty
                  </h4>

                  <p className="text-white text-xl">
                    Karthiga
                  </p>

                  <p className="text-gray-300">
                    M.Sc Mathematics
                  </p>

                </div>

                <div>

                  <h4 className="text-yellow-400 text-2xl font-bold mb-3">
                    🕒 Working Hours
                  </h4>

                  <p className="text-white text-lg">
                    Monday - Saturday
                  </p>

                  <p className="text-gray-300">
                    5:00 PM - 10:00 PM
                  </p>

                </div>

              </div>

            </div>

            {/* Google Map */}

            <div>

              <iframe
                src="https://www.google.com/maps?q=Redhills,Chennai&output=embed"
                className="w-full h-[520px] rounded-3xl border-4 border-yellow-400 shadow-xl"
                loading="lazy"
              ></iframe>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
