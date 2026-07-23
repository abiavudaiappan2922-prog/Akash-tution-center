"use client";

import { motion } from "framer-motion";

const classes = [
  {
    title: "Class I - V",
    subtitle: "Foundation Programme",
    description:
      "Strong fundamentals in English, Tamil, Mathematics and Environmental Science with activity-based learning.",
  },
  {
    title: "Class VI - VIII",
    subtitle: "Middle School Excellence",
    description:
      "Concept-oriented coaching in Maths, Science, English and Social Science with weekly assessments.",
  },
  {
    title: "Class IX - X",
    subtitle: "Board Exam Preparation",
    description:
      "Special coaching for State Board students with model exams, revision tests and previous year question papers.",
  },
  {
    title: "Class XI",
    subtitle: "Higher Secondary",
    description:
      "Mathematics, Computer Science, Commerce and Science groups with individual subject coaching.",
  },
  {
    title: "Class XII",
    subtitle: "Public Exam Coaching",
    description:
      "Complete public exam preparation, daily tests, important questions and score improvement guidance.",
  },
  {
    title: "Special Coaching",
    subtitle: "Exam Success Programme",
    description:
      "Crash courses, revision batches, doubt clearing sessions and personal attention for every student.",
  },
];

export default function Classes() {
  return (
    <section
      id="classes"
      className="py-24 bg-gradient-to-b from-[#081827] via-[#0d2338] to-[#081827]"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[5px] text-yellow-400 font-semibold">
            Our Courses
          </p>

          <h2 className="text-5xl font-extrabold text-white mt-4">
            Classes We Offer
          </h2>

          <p className="text-gray-300 mt-6 max-w-3xl mx-auto text-lg leading-8">
            Personalized coaching for students from 1st Standard to 12th
            Standard with experienced teachers, study materials, regular tests
            and complete academic support.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {classes.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="group rounded-3xl bg-[#11253d]/90 border border-yellow-500/20 p-8 backdrop-blur-xl shadow-xl hover:border-yellow-400 transition-all duration-500"
            >
              <div className="w-14 h-1 bg-yellow-400 rounded-full mb-6 group-hover:w-24 transition-all duration-500"></div>

              <h3 className="text-3xl font-bold text-white">
                {item.title}
              </h3>

              <p className="text-yellow-400 font-semibold mt-3 tracking-wide">
                {item.subtitle}
              </p>

              <p className="text-gray-300 mt-6 leading-8">
                {item.description}
              </p>
<a
  href="#admission"
  className="inline-block mt-8 bg-gradient-to-r from-yellow-400 to-yellow-500 text-[#081827] px-8 py-3 rounded-full font-bold shadow-lg hover:scale-105 hover:shadow-yellow-500/40 transition-all duration-300"
>
  Apply Now
</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}