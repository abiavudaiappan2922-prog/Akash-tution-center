"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#081827] py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-yellow-400 uppercase tracking-[5px] font-bold">
            ABOUT US
          </p>

          <h2 className="text-5xl md:text-6xl font-extrabold text-white mt-4">
            Why Choose
            <span className="text-yellow-400"> Akash Tuition Centre?</span>
          </h2>

          <p className="text-gray-400 text-lg mt-6 max-w-3xl mx-auto">
            We provide high-quality coaching for State Board & CBSE students
            from 1st to 12th standard with personal attention, regular tests,
            study materials and complete exam preparation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >

            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=900"
              alt="About"
              className="rounded-[35px] shadow-2xl border-2 border-yellow-400/20"
            />

            <div className="absolute -bottom-8 -right-8 bg-yellow-400 rounded-3xl px-8 py-6 shadow-2xl">

              <h2 className="text-4xl font-extrabold text-[#081827]">
                100+
              </h2>

              <p className="font-semibold text-[#081827]">
                Happy Students
              </p>

            </div>

          </motion.div>

          {/* Content */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >

            <div className="grid md:grid-cols-2 gap-6">

              {[
                
                {
                  icon: "👩‍🏫",
                  title: "Expert Teacher",
                  desc: "Friendly & Experienced Staff",
                },
                
                {
                  icon: "🎯",
                  title: "Board Exam Coaching",
                  desc: "10th,11th &12th Special",
                },
                {
                  icon: "⭐",
                  title: "Personal Attention",
                  desc: "Small Batch Coaching",
                },
                {
                  icon: "🏆",
                  title: "Excellent Results",
                  desc: "High Success Rate",
                },
              ].map((item, index) => (

                <motion.div
                  key={index}
                  whileHover={{
                    scale: 1.05,
                    y: -8,
                  }}
                  className="bg-[#10263b] rounded-3xl p-6 border border-yellow-400/20 hover:border-yellow-400 transition"
                >

                  <div className="text-5xl">
                    {item.icon}
                  </div>

                  <h3 className="text-white text-xl font-bold mt-4">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 mt-2">
                    {item.desc}
                  </p>

                </motion.div>

              ))}

            </div>

          </motion.div>

        </div>

        {/* Statistics */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .9 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-8 mt-20"
        >

          {[
            {
              number: "100+",
              text: "Students",
            },
            {
              number: "98%",
              text: "Success Rate",
            },
            {
              number: "5+",
              text: "Years Experience",
            },
            {
              number: "24/7",
              text: "Support",
            },
          ].map((item, index) => (

            <motion.div
              key={index}
              whileHover={{
                scale: 1.08,
              }}
              className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-3xl p-8 text-center shadow-xl"
            >

              <h2 className="text-5xl font-extrabold text-[#081827]">
                {item.number}
              </h2>

              <p className="text-[#081827] text-xl font-bold mt-4">
                {item.text}
              </p>

            </motion.div>

          ))}

        </motion.div>

      </div>
    </section>
  );
}