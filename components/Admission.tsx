"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Admission() {

  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    parentMobile: "",
    alternateMobile: "",
    address: "",
    className: "",
    bloodGroup: "",
    healthIssue: "",
    healthProblem: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    const sendData = {

      studentName: formData.studentName,

      parentName: formData.parentName,

      parentMobile: formData.parentMobile,

      alternateMobile: formData.alternateMobile,

      address: formData.address,

      className: formData.className,

      bloodGroup: formData.bloodGroup,

      healthIssue:
        formData.healthIssue === "Yes"
          ? formData.healthProblem
          : "No",

      message: formData.message,

    };

    const res = await fetch("/api/admission", {

      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(sendData),

    });

    const data = await res.json();

    if (data.success) {

      alert("Admission Submitted Successfully!");

      setFormData({
        studentName: "",
        parentName: "",
        parentMobile: "",
        alternateMobile: "",
        address: "",
        className: "",
        bloodGroup: "",
        healthIssue: "",
        healthProblem: "",
        message: "",
      });

    } else {

      alert("Something went wrong");

    }

  };

  return (

    <section
      id="admission"
      className="py-24 bg-gradient-to-b from-[#081827] via-[#0d2338] to-[#081827]"
    >

      <div className="max-w-7xl mx-auto px-6">

        <motion.div

          initial={{ opacity: 0, y: 40 }}

          whileInView={{ opacity: 1, y: 0 }}

          transition={{ duration: .8 }}

          viewport={{ once: true }}

          className="text-center mb-16"

        >

          <p className="uppercase tracking-[5px] text-yellow-400 font-semibold">

            Admission Open

          </p>

          <h2 className="text-5xl font-extrabold text-white mt-4">

            Join Akash Tuition Centre

          </h2>

          <p className="text-gray-400 text-lg mt-5">

            Fill the admission form and our team will contact you shortly.

          </p>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT CARD */}

          <motion.div

            initial={{ opacity: 0, x: -60 }}

            whileInView={{ opacity: 1, x: 0 }}

            transition={{ duration: .8 }}

            viewport={{ once: true }}

            className="bg-[#10263b] rounded-[35px] p-10 border border-yellow-500/20 shadow-2xl"

          >

            <h2 className="text-4xl font-bold text-white">

              Why Choose Us?

            </h2>

            <p className="text-gray-400 mt-6 leading-8">

              We provide quality education with personal attention, weekly
              tests, study materials and complete academic guidance.

            </p>

            <div className="mt-10 space-y-6">

              {[
                "Experienced Teachers",
                "Small Batch Coaching",
                "Weekly Tests",
                "Study Materials",
                "Personal Attention",
                "Board Exam Preparation",
              ].map((item, index) => (

                <div
                  key={index}
                  className="flex items-center gap-4"
                >

                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>

                  <p className="text-white text-lg">

                    {item}

                  </p>

                </div>

              ))}

            </div>

          </motion.div>

          {/* RIGHT FORM */}

          <motion.form

            onSubmit={handleSubmit}

            initial={{ opacity: 0, x: 60 }}

            whileInView={{ opacity: 1, x: 0 }}

            transition={{ duration: .8 }}

            viewport={{ once: true }}

            className="bg-[#10263b] rounded-[35px] p-10 border border-yellow-500/20 shadow-2xl space-y-6"

          >
            {/* Student Name */}

<div className="grid md:grid-cols-2 gap-6">

  <input
    type="text"
    name="studentName"
    placeholder="Student Name"
    value={formData.studentName}
    onChange={handleChange}
    required
    className="bg-[#081827] border border-yellow-500/20 rounded-2xl p-4 text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none"
  />

  <input
    type="text"
    name="parentName"
    placeholder="Parent Name"
    value={formData.parentName}
    onChange={handleChange}
    required
    className="bg-[#081827] border border-yellow-500/20 rounded-2xl p-4 text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none"
  />

</div>

<div className="grid md:grid-cols-2 gap-6">

  <input
    type="text"
    name="parentMobile"
    placeholder="Parent Mobile Number"
    value={formData.parentMobile}
    onChange={handleChange}
    required
    className="bg-[#081827] border border-yellow-500/20 rounded-2xl p-4 text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none"
  />

  <input
    type="text"
    name="alternateMobile"
    placeholder="Alternate Mobile (Optional)"
    value={formData.alternateMobile}
    onChange={handleChange}
    className="bg-[#081827] border border-yellow-500/20 rounded-2xl p-4 text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none"
  />

</div>

<textarea
  name="address"
  placeholder="Address"
  value={formData.address}
  onChange={handleChange}
  rows={3}
  required
  className="w-full bg-[#081827] border border-yellow-500/20 rounded-2xl p-4 text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none"
/>

<div className="grid md:grid-cols-2 gap-6">

  <select
    name="className"
    value={formData.className}
    onChange={handleChange}
    required
    className="bg-[#081827] border border-yellow-500/20 rounded-2xl p-4 text-white focus:border-yellow-400 focus:outline-none"
  >

    <option value="">Select Class</option>

    <option>1st Standard</option>
    <option>2nd Standard</option>
    <option>3rd Standard</option>
    <option>4th Standard</option>
    <option>5th Standard</option>
    <option>6th Standard</option>
    <option>7th Standard</option>
    <option>8th Standard</option>
    <option>9th Standard</option>
    <option>10th Standard</option>
    <option>11th Standard</option>
    <option>12th Standard</option>

  </select>

  <select
    name="bloodGroup"
    value={formData.bloodGroup}
    onChange={handleChange}
    required
    className="bg-[#081827] border border-yellow-500/20 rounded-2xl p-4 text-white focus:border-yellow-400 focus:outline-none"
  >

    <option value="">Blood Group</option>

    <option>A+</option>
    <option>A-</option>
    <option>B+</option>
    <option>B-</option>
    <option>AB+</option>
    <option>AB-</option>
    <option>O+</option>
    <option>O-</option>

  </select>

</div>

<select
  name="healthIssue"
  value={formData.healthIssue}
  onChange={handleChange}
  required
  className="w-full bg-[#081827] border border-yellow-500/20 rounded-2xl p-4 text-white focus:border-yellow-400 focus:outline-none"
>

  <option value="">Any Health Issue?</option>

  <option value="No">No</option>
  <option value="Yes">Yes</option>

</select>

{formData.healthIssue === "Yes" && (

  <textarea
    name="healthProblem"
    placeholder="Mention Health Problem"
    value={formData.healthProblem}
    onChange={handleChange}
    rows={3}
    required
    className="w-full bg-[#081827] border border-yellow-500/20 rounded-2xl p-4 text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none"
  />

)}



<button
  type="submit"
  className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-[#081827] py-5 rounded-2xl font-bold text-xl hover:scale-[1.03] transition-all duration-300 shadow-lg"
>

  Apply For Admission

</button>

</motion.form>

</div>

</div>

</section>

);

}