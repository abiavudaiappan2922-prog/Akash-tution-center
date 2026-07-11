"use client";

import { useState } from "react";

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
      className="py-24 bg-gradient-to-b from-blue-50 to-white"
    >

      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-12">

          <h2 className="text-5xl font-extrabold text-blue-700">
            Admission Form
          </h2>

          <p className="text-gray-600 text-xl mt-4">
            Join Our Tuition Center For Better Learning
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-10 rounded-[35px] shadow-2xl space-y-8 border border-gray-100"
        >

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <label className="text-lg font-bold text-gray-700">
                Student Name
              </label>

              <input
                type="text"
                name="studentName"
                placeholder="Enter Student Name"
                value={formData.studentName}
                onChange={handleChange}
                className="w-full mt-2 border-2 border-gray-200 p-4 rounded-2xl text-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label className="text-lg font-bold text-gray-700">
                Parent Name
              </label>

              <input
                type="text"
                name="parentName"
                placeholder="Enter Parent Name"
                value={formData.parentName}
                onChange={handleChange}
                className="w-full mt-2 border-2 border-gray-200 p-4 rounded-2xl text-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>

          </div>

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <label className="text-lg font-bold text-gray-700">
                Parent Mobile Number
              </label>

              <input
                type="text"
                name="parentMobile"
                placeholder="Enter Mobile Number"
                value={formData.parentMobile}
                onChange={handleChange}
                className="w-full mt-2 border-2 border-gray-200 p-4 rounded-2xl text-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label className="text-lg font-bold text-gray-700">
                Alternate Mobile Number
              </label>

              <input
                type="text"
                name="alternateMobile"
                placeholder="Optional Number"
                value={formData.alternateMobile}
                onChange={handleChange}
                className="w-full mt-2 border-2 border-gray-200 p-4 rounded-2xl text-lg focus:outline-none focus:border-blue-500"
              />
            </div>

          </div>

          <div>

            <label className="text-lg font-bold text-gray-700">
              Address
            </label>

            <textarea
              name="address"
              placeholder="Enter Address"
              value={formData.address}
              onChange={handleChange}
              className="w-full mt-2 border-2 border-gray-200 p-4 rounded-2xl text-lg focus:outline-none focus:border-blue-500"
              rows={4}
              required
            />

          </div>

          <div className="grid md:grid-cols-2 gap-6">

            <div>

              <label className="text-lg font-bold text-gray-700">
                Select Class
              </label>

              <select
                name="className"
                value={formData.className}
                onChange={handleChange}
                className="w-full mt-2 border-2 border-gray-200 p-4 rounded-2xl text-lg focus:outline-none focus:border-blue-500"
                required
              >

                <option value="">
                  Choose Class
                </option>

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

            </div>

            <div>

              <label className="text-lg font-bold text-gray-700">
                Blood Group
              </label>

              <select
                name="bloodGroup"
                value={formData.bloodGroup}
                onChange={handleChange}
                className="w-full mt-2 border-2 border-gray-200 p-4 rounded-2xl text-lg focus:outline-none focus:border-blue-500"
                required
              >

                <option value="">
                  Select Blood Group
                </option>

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

          </div>

          <div>

            <label className="text-lg font-bold text-gray-700">
              Any Health Issue?
            </label>

            <select
              name="healthIssue"
              value={formData.healthIssue}
              onChange={handleChange}
              className="w-full mt-2 border-2 border-gray-200 p-4 rounded-2xl text-lg focus:outline-none focus:border-blue-500"
              required
            >

              <option value="">
                Select Option
              </option>

              <option value="No">
                No
              </option>

              <option value="Yes">
                Yes
              </option>

            </select>

          </div>

          {formData.healthIssue === "Yes" && (

            <div>

              <label className="text-lg font-bold text-gray-700">
                Mention Health Problem
              </label>

              <textarea
                name="healthProblem"
                placeholder="Enter Health Problem"
                value={formData.healthProblem}
                onChange={handleChange}
                className="w-full mt-2 border-2 border-gray-200 p-4 rounded-2xl text-lg focus:outline-none focus:border-blue-500"
                rows={4}
                required
              />

            </div>

          )}

          <div>

            <label className="text-lg font-bold text-gray-700">
              Message
            </label>

            <textarea
              name="message"
              placeholder="Any Additional Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full mt-2 border-2 border-gray-200 p-4 rounded-2xl text-lg focus:outline-none focus:border-blue-500"
              rows={4}
            />

          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-5 rounded-2xl font-bold text-2xl hover:scale-[1.02] transition-all duration-300 shadow-lg"
          >

            Submit Admission

          </button>

        </form>

      </div>

    </section>

  );

}