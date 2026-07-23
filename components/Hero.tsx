"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 flex items-center overflow-hidden bg-gradient-to-br from-[#071521] via-[#0B1F33] to-[#16395D]"
    >
      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden">

        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute -top-20 -left-20 w-[450px] h-[450px] rounded-full bg-yellow-400/10 blur-[150px]"
        />

        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-yellow-400/10 blur-[170px]"
        />

      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <h1 className="text-5xl lg:text-3xl font-black leading-tight text-white">

            Shape Your

            <br />

            <span className="text-yellow-400">
              Future
            </span>

            <br />

            With

            <br />

            <span className="text-yellow-300">
              AKASH
            </span>

            <br />

            Tuition Centre

          </h1>

          <h2 className="mt-5 text-2xl font-extrabold uppercase tracking-[6px] text-yellow-400">

            ONLY FOR GIRLS

          </h2>

          <p className="mt-6 max-w-xl text-lg text-gray-300 leading-9">

            Quality coaching for State Board & CBSE students from
            1st to 12th Standard.

            <br />
            Weekly Tests • Study Materials • Personal Attention •
            Complete Exam Preparation.

          </p>

          <div className="flex gap-5 mt-10">

            <a
              href="#admission"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-[#071521] font-bold shadow-xl hover:scale-105 duration-300"
            >
              Apply Now
            </a>

            <a
              href="#about"
              className="px-8 py-4 rounded-full border-2 border-yellow-400 text-yellow-300 hover:bg-yellow-400 hover:text-[#071521] duration-300"
            >
              Learn More
            </a>

          </div>

          {/* Stats */}

          <div className="grid grid-cols-2 gap-5 mt-14">

            <div className="bg-white/5 backdrop-blur-xl border border-yellow-400/20 rounded-3xl p-6">

              <h2 className="text-4xl font-black text-yellow-400">
                100+
              </h2>

              <p className="text-white mt-2">
                Happy Students
              </p>

            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-yellow-400/20 rounded-3xl p-6">

              <h2 className="text-4xl font-black text-yellow-400">
                100%
              </h2>

              <p className="text-white mt-2">
                Result Support
              </p>

            </div>

          </div>

        </motion.div>

        {/* RIGHT */}

<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1 }}
  className="flex justify-center -mt-16 lg:-mt-24"
>

  <motion.img
    animate={{
      y: [0, -15, 0],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
    }}
    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900"
    alt="Students"
    className="w-full max-w-[620px] rounded-[35px] border border-yellow-400/20 shadow-[0_0_60px_rgba(255,193,7,0.15)]"
  />

</motion.div>

      </div>

    </section>
  );
}