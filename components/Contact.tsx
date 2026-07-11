export default function Contact() {

  return (

    <section
      id="contact"
      className="py-24 bg-gray-100"
    >

      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center">

          <h2 className="text-4xl font-bold text-gray-800">
            Contact Us
          </h2>

          <p className="mt-4 text-gray-600">
            Get in touch for admissions and details.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-10 mt-16">

          <div className="bg-white p-10 rounded-3xl shadow-xl">

            <h3 className="text-2xl font-bold text-blue-700">
              AKASH TUTION CENTER
            </h3>

            <div className="mt-6 space-y-4 text-gray-700">

              <p>
                📍 No:4/476, Veeravanjeenthan Street,
                P.T. Moorthy Nagar,
                Nearby S.P. Chicken Centre,
                Padiyanallur, Redhills,
                Chennai - 600052
              </p>

              <p>
                📞 9087580456
              </p>

              <p>
                👩‍🏫 Karthiga (M.Sc Mathematics)
              </p>

            </div>

          </div>

          <div className="bg-white p-10 rounded-3xl shadow-xl">

            <iframe
              src="https://www.google.com/maps?q=Redhills,Chennai&output=embed"
              className="w-full h-80 rounded-2xl"
              loading="lazy"
            ></iframe>

          </div>

        </div>

      </div>

    </section>

  );
}