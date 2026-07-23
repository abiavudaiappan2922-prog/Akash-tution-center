"use client";

import { motion } from "framer-motion";

export default function Fees() {

  const fees = [

    { className: "1st Standard", fees: "₹300 / Month" },
    { className: "2nd Standard", fees: "₹300 / Month" },
    { className: "3rd Standard", fees: "₹350 / Month" },
    { className: "4th Standard", fees: "₹350 / Month" },
    { className: "5th Standard", fees: "₹400 / Month" },
    { className: "6th Standard", fees: "₹450 / Month" },
    { className: "7th Standard", fees: "₹500 / Month" },
    { className: "8th Standard", fees: "₹550 / Month" },
    { className: "9th Standard", fees: "₹750 / Month" },
    { className: "10th Standard", fees: "₹1000 / Month" },
    { className: "11th Standard", fees: "₹1200 / Month" },
    { className: "12th Standard", fees: "₹1500 / Month" },

  ];

  return (

    <section
      id="fees"
      className="py-24 bg-[#081827]"
    >

      <div className="max-w-7xl mx-auto px-6">

        <motion.div

          initial={{ opacity: 0, y: 40 }}

          whileInView={{ opacity: 1, y: 0 }}

          transition={{ duration: .8 }}

          viewport={{ once: true }}

          className="text-center"

        >

          <p className="uppercase tracking-[5px] text-yellow-400 font-semibold">

            Fees Structure

          </p>

          <h2 className="text-5xl font-extrabold text-white mt-4">

            Academic Year 2026 - 2027

          </h2>

          <p className="text-gray-400 mt-6 text-lg">

            Affordable fee structure with quality coaching.

          </p>

        </motion.div>

        <motion.div

          initial={{ opacity: 0, y: 50 }}

          whileInView={{ opacity: 1, y: 0 }}

          transition={{ duration: .8 }}

          viewport={{ once: true }}

          className="mt-16 rounded-[35px] overflow-hidden border border-yellow-500/20 bg-[#10263b] shadow-2xl"

        >

          <div className="grid grid-cols-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-[#081827] font-bold text-xl p-6">

            <div>Class</div>

            <div className="text-right">Monthly Fees</div>

          </div>

          {fees.map((item, index) => (

            <motion.div

              key={index}

              whileHover={{ backgroundColor: "#17344f" }}

              className="grid grid-cols-2 p-6 border-b border-white/10 text-white transition"

            >

              <div className="font-semibold">

                {item.className}

              </div>

              <div className="text-right font-bold text-yellow-400">

                {item.fees}

              </div>

            </motion.div>

          ))}

        </motion.div>
        {/* ================= Special Subject Fees ================= */}

<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: .8 }}
  viewport={{ once: true }}
  className="mt-20"
>

  <div className="text-center">

    <p className="uppercase tracking-[5px] text-yellow-400 font-semibold">
      Special Coaching
    </p>

    <h2 className="text-4xl font-extrabold text-white mt-4">
      Special Subject Fees
    </h2>

    <p className="text-gray-400 mt-4 text-lg">
      Individual Subject Coaching for State Board & CBSE Students
    </p>

  </div>

  <div className="mt-10 rounded-[35px] overflow-hidden bg-[#10263b] border border-yellow-500/20 shadow-2xl">

    {/* Header */}

    <div className="grid grid-cols-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-[#081827] font-bold text-xl p-6">

      <div>Class</div>

      <div className="text-center">State Board</div>

      <div className="text-right">CBSE</div>

    </div>

    {[
      {
        className: "10th Standard",
        state: "₹400 / Subject",
        cbse: "₹500 / Subject",
      },
      {
        className: "11th Standard",
        state: "₹500 / Subject",
        cbse: "₹600 / Subject",
      },
      {
        className: "12th Standard",
        state: "₹800 / Subject",
        cbse: "₹1000 / Subject",
      },
    ].map((item, index) => (

      <motion.div
        key={index}
        whileHover={{
          backgroundColor: "#17344f",
        }}
        className="grid grid-cols-3 p-6 border-b border-white/10 text-white transition duration-300"
      >

        <div className="font-semibold">
          {item.className}
        </div>

        <div className="text-center text-yellow-400 font-bold">
          {item.state}
        </div>

        <div className="text-right text-yellow-400 font-bold">
          {item.cbse}
        </div>

      </motion.div>

    ))}

  </div>

  {/* Note */}

  <div className="mt-8 rounded-3xl border border-yellow-500/20 bg-[#11253d] p-6">

    <h3 className="text-yellow-400 text-xl font-bold">
      Important Note
    </h3>

    <p className="text-gray-300 mt-3 leading-8">
      • Fees shown above are charged per subject.
      <br />
      • Students can choose one or more subjects based on their requirements.
      <br />
      • Contact the tuition centre for complete fee details and offers.
    </p>

  </div>

</motion.div>

        {/* Bottom Card */}

        <motion.div

          initial={{ opacity: 0, y: 50 }}

          whileInView={{ opacity: 1, y: 0 }}

          transition={{ duration: 1 }}

          viewport={{ once: true }}

          className="mt-16"

        >

          <div className="rounded-[35px] bg-gradient-to-r from-yellow-400 to-yellow-500 p-10 text-center shadow-2xl">

            <h3 className="text-3xl font-extrabold text-[#081827]">

              Admission Open for 2026 - 2027

            </h3>

            <p className="mt-4 text-[#081827] text-lg">

              Limited Seats Available. Enroll today and secure your admission.

            </p>

            <a

              href="#admission"

              className="inline-block mt-8 bg-[#081827] text-yellow-400 px-10 py-4 rounded-full font-bold hover:scale-105 transition"

            >

              Apply Now

            </a>

          </div>

        </motion.div>

      </div>

    </section>

  );

}