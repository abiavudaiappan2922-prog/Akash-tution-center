export default function Footer() {

  return (

    <footer className="bg-gray-900 text-white py-16">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">

        {/* About */}

        <div>

          <h2 className="text-3xl font-bold text-blue-400">
            AKASH TUTION CENTER
          </h2>

          <p className="mt-4 text-gray-400 leading-7">
            Best tuition center for girls with expert coaching,
            study materials, and personal attention for CBSE students.
          </p>

        </div>

        {/* Quick Links */}

        <div>

          <h3 className="text-2xl font-semibold">
            Quick Links
          </h3>

          <div className="mt-4 flex flex-col gap-3 text-gray-400">

            <a href="#home" className="hover:text-white transition">
              Home
            </a>

            <a href="#about" className="hover:text-white transition">
              About
            </a>

            <a href="#classes" className="hover:text-white transition">
              Classes
            </a>

            <a href="#fees" className="hover:text-white transition">
              Fees
            </a>

            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>

          </div>

        </div>

        {/* Contact Info */}

        <div>

          <h3 className="text-2xl font-semibold">
            Contact Info
          </h3>

          <div className="mt-4 text-gray-400 space-y-4">

            <p>
              📍 No:4/476, Veeravanjeenthan Street,
              P.T. Moorthy Nagar,
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

      </div>

      {/* Bottom Footer */}

      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500">

        © 2026 AKASH TUTION CENTER. All Rights Reserved.

      </div>

    </footer>

  );
}