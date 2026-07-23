"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#071627] to-[#020B14] border-t border-yellow-500/20">

      <div className="max-w-7xl mx-auto px-6 py-20">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="grid lg:grid-cols-3 gap-14"
        >

          {/* About */}

          <div>

            <h2 className="text-4xl font-extrabold text-yellow-400">
              AKASH TUITION CENTRE
            </h2>

            <p className="mt-6 text-gray-300 leading-8 text-lg">
              Best Tuition Centre for Girls from
              1st to 12th Standard with quality coaching,
              personal attention, weekly tests and excellent
              academic support.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-3xl font-bold text-white mb-8">
              Quick Links
            </h3>

            <div className="space-y-5">

              {[
                "Home",
                "About",
                "Classes",
                "Fees",
                "Admission",
                "Contact",
              ].map((item) => (

                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  whileHover={{ x: 10, color: "#facc15" }}
                  className="block text-lg text-gray-300 duration-300"
                >
                  {item}
                </motion.a>

              ))}

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-3xl font-bold text-white mb-8">
              Contact Info
            </h3>

            <div className="space-y-8">

              <motion.div
                whileHover={{ scale: 1.03 }}
              >

                <h4 className="text-yellow-400 text-xl font-bold">
                  Address
                </h4>

                <p className="text-gray-300 mt-2 leading-8">

                  No:4/476,
                  Veeravanjeenthan Street,

                  <br />

                  P.T. Moorthy Nagar,

                  <br />

                  Nearby S.P Chicken Centre,

                  <br />

                  Padiyanallur,

                  Redhills,

                  <br />

                  Chennai - 600052

                </p>

              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03 }}
              >

                <h4 className="text-yellow-400 text-xl font-bold">
                  Phone
                </h4>

                <a
                  href="tel:9087580456"
                  className="text-white text-lg hover:text-yellow-400 duration-300"
                >
                  +91 9087580456
                </a>

              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03 }}
              >

                <h4 className="text-yellow-400 text-xl font-bold">
                  Faculty
                </h4>

                <p className="text-white text-lg mt-2">
                  Karthiga
                </p>

                <p className="text-gray-300">
                  M.Sc Mathematics
                </p>

              </motion.div>

            </div>

          </div>

        </motion.div>

        {/* Bottom */}

        <motion.div

          initial={{ opacity: 0 }}

          whileInView={{ opacity: 1 }}

          transition={{ delay: .4 }}

          viewport={{ once: true }}

          className="border-t border-yellow-500/20 mt-16 pt-8 text-center"

        >

          <p className="text-gray-400 text-lg">

            © 2026
            <span className="text-yellow-400 font-semibold">
              {" "}AKASH TUITION CENTRE
            </span>

            . All Rights Reserved.

          </p>

          <p className="text-gray-500 mt-3">

            Designed with ❤️ for Education

          </p>

        </motion.div>

      </div>

    </footer>
  );
}