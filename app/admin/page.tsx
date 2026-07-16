"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  LineChart,
  Line,
} from "recharts";

export default function AdminPage() {
  const router = useRouter();

useEffect(() => {
  const admin = Cookies.get("admin");

  if (!admin) {
    router.replace("/login");
    return;
  }

  fetchAdmissions();
}, [router]);

  const [students, setStudents] = useState<any[]>([]);
  
  const [search, setSearch] = useState("");
  const [selectedClass, setSelectedClass] = useState("");

 const logout = () => {
  Cookies.remove("admin");
  router.replace("/login");
};
const fetchAdmissions = async () => {
  try {
    const res = await fetch("/api/admission");

    const data = await res.json();

    setStudents(Array.isArray(data) ? data : []);
  } catch (error) {
    console.log(error);
  }
};
 

 
  
  /* DELETE */

  const deleteStudent = async (id: string) => {

    const confirmDelete = confirm(
      "Delete this student?"
    );

    if (!confirmDelete) return;

    try {

      await fetch(`/api/admission/${id}`, {
        method: "DELETE",
      });

      fetchAdmissions();

    } catch (error) {

      console.log(error);

    }

  };

  /* EDIT */

  const editStudent = async (student: any) => {

    const newName = prompt(
      "Edit Student Name",
      student.studentName
    );

    if (!newName) return;

    try {

      await fetch(`/api/admission/${student._id}`, {

        method: "PUT",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          ...student,
          studentName: newName,
        }),

      });

      fetchAdmissions();

    } catch (error) {

      console.log(error);

    }

  };

  /* EXPORT CSV */

  const exportExcel = () => {

    if (students.length === 0) {

      alert("No students available");

      return;

    }

    const rows = students.map((s) => ({

      StudentName: s.studentName,

      ParentName: s.parentName,

      ParentMobile: s.parentMobile,

      AlternateMobile: s.alternateMobile,

      Class: s.className,

      BloodGroup: s.bloodGroup,

      HealthIssue: s.healthIssue,

      Address: s.address,

    }));

    const csvContent =
      "data:text/csv;charset=utf-8," +
      [
        Object.keys(rows[0]).join(","),

        ...rows.map((row) =>
          Object.values(row).join(",")
        ),
      ].join("\n");

    const encodedUri = encodeURI(csvContent);

    const link = document.createElement("a");

    link.setAttribute("href", encodedUri);

    link.setAttribute(
      "download",
      "students.csv"
    );

    document.body.appendChild(link);

    link.click();

  };

 

  /* FILTER */

  const filteredStudents = students.filter(
    (student) => {

      const matchSearch =
        student.studentName
          ?.toLowerCase()
          .includes(search.toLowerCase()) ||

        student.parentName
          ?.toLowerCase()
          .includes(search.toLowerCase());

      const matchClass =
        selectedClass === "" ||
        student.className === selectedClass;

      return matchSearch && matchClass;

    }
  );

  /* GRAPH */

  const classData = [
    ...new Set(
      students.map((s) => s.className)
    ),
  ].map((cls) => ({
    class: cls,

    students: students.filter(
      (s) => s.className === cls
    ).length,
  }));

  const admissionData = [
    {
      name: "Admissions",
      count: students.length,
    },
  ];
  console.log("ADMIN PAGE NEW VERSION");
  return (

    <div className="min-h-screen bg-gray-100 p-6">

      <div className="flex justify-between items-center mb-8">

        <h1 className="text-5xl font-extrabold text-blue-600">
          Admin Dashboard
        </h1>

        <div className="flex gap-4">

          <button
            onClick={exportExcel}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl text-lg font-bold shadow-lg"
          >
            Excel
          </button>

          <button
            onClick={logout}
            className="bg-black text-white px-6 py-3 rounded-xl text-lg font-bold shadow-lg"
          >
            Logout
          </button>

        </div>

      </div>

      

      {/* CARDS */}

      <div className="grid md:grid-cols-3 gap-6 mb-10">

        <div className="bg-blue-600 text-white p-8 rounded-3xl shadow-xl">

          <h2 className="text-2xl font-bold mb-2">
            Total Students
          </h2>

          <p className="text-4xl font-extrabold">
            {students.length}
          </p>

        </div>

        <div className="bg-green-600 text-white p-8 rounded-3xl shadow-xl">

          <h2 className="text-2xl font-bold mb-2">
            Classes
          </h2>

          <p className="text-4xl font-extrabold">
            {classData.length}
          </p>

        </div>

        <div className="bg-purple-600 text-white p-8 rounded-3xl shadow-xl">

          <h2 className="text-2xl font-bold mb-2">
            Today Admissions
          </h2>

          <p className="text-4xl font-extrabold">
            {students.length}
          </p>

        </div>

      </div>

      {/* GRAPH */}

      <div className="grid md:grid-cols-2 gap-6 mb-10">

        <div className="bg-white p-6 rounded-3xl shadow-lg">

          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Admission Overview
          </h2>

          <ResponsiveContainer
            width="100%"
            height={300}
          >

            <LineChart data={admissionData}>

              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="name" />

              <YAxis />

              <Tooltip />

              <Line
                type="monotone"
                dataKey="count"
                stroke="#2563eb"
                strokeWidth={4}
              />

            </LineChart>

          </ResponsiveContainer>

        </div>

        <div className="bg-white p-6 rounded-3xl shadow-lg">

          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Class Wise Students
          </h2>

          <ResponsiveContainer
            width="100%"
            height={300}
          >

            <BarChart data={classData}>

              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="class" />

              <YAxis />

              <Tooltip />

              <Bar
                dataKey="students"
                fill="#16a34a"
                radius={[10, 10, 0, 0]}
              />

            </BarChart>

          </ResponsiveContainer>

        </div>

      </div>

      {/* SEARCH */}

      <div className="bg-white p-6 rounded-3xl shadow-lg mb-10 flex gap-4">

        <input
          type="text"
          placeholder="Search student"
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="flex-1 border-2 border-gray-300 rounded-2xl px-5 py-4 text-lg font-medium outline-none text-black"
        />

        <select
          value={selectedClass}
          onChange={(e) =>
            setSelectedClass(e.target.value)
          }
          className="border-2 border-gray-300 rounded-2xl px-5 py-4 text-lg font-medium text-black"
        >

          <option value="">
            All Classes
          </option>

          {[...Array(12)].map((_, i) => (

            <option
              key={i}
              value={`${i + 1}th Standard`}
            >
              {i + 1}th Standard
            </option>

          ))}

        </select>

      </div>

      {/* TABLE */}

      <div className="overflow-x-auto bg-white rounded-3xl shadow-xl">

        <table className="w-full">

          <thead>

            <tr className="bg-blue-600 text-white text-base">

              <th className="p-5 text-left">
                Student Name
              </th>

              <th className="p-5 text-left">
                Parent Name
              </th>

              <th className="p-5 text-left">
                Parent Mobile
              </th>

              <th className="p-5 text-left">
                Alternate Mobile
              </th>

              <th className="p-5 text-left">
                Class
              </th>

              <th className="p-5 text-left">
                Blood Group
              </th>

              <th className="p-5 text-left">
                Health Issue
              </th>

              <th className="p-5 text-left">
                Address
              </th>

              <th className="p-5 text-center">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {filteredStudents.map(
              (student, index) => (

                <tr
                  key={student._id}
                  className={`border-b ${
                    index % 2 === 0
                      ? "bg-white"
                      : "bg-gray-50"
                  } hover:bg-blue-50`}
                >

                  <td className="p-4 text-black font-semibold">
                    {student.studentName}
                  </td>

                  <td className="p-4 text-gray-800">
                    {student.parentName}
                  </td>

                  <td className="p-4 text-gray-800">
                    {student.parentMobile}
                  </td>

                  <td className="p-4 text-gray-800">
                    {student.alternateMobile || "-"}
                  </td>

                  <td className="p-4 text-gray-800">
                    {student.className}
                  </td>

                  <td className="p-4 text-gray-800">
                    {student.bloodGroup}
                  </td>

                  <td className="p-4 text-gray-800">
                    {student.healthIssue}
                  </td>

                  <td className="p-4 text-gray-800">
                    {student.address}
                  </td>

                  <td className="p-4">

                    <div className="flex gap-2 flex-wrap">

                      <button
                        onClick={() =>
                          editStudent(student)
                        }
                        className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg font-bold"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() =>
                          deleteStudent(student._id)
                        }
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-bold"
                      >
                        Delete
                      </button>
                      <button
  onClick={() => {
    const message = `Dear ${student.parentName},

Greetings from AKASH TUITION CENTER.

We would like to inform you regarding your child.

👤 Student Name : ${student.studentName}
🏫 Class : ${student.className}

If you have any questions regarding attendance, fees, classes or notes, please feel free to contact us.

Thank you.
AKASH TUITION CENTER`;

    window.open(
      `https://wa.me/91${student.parentMobile}?text=${encodeURIComponent(
        message
      )}`,
      "_blank"
    );
  }}
  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-bold"
>
  WhatsApp
</button>

                    </div>

                  </td>

                </tr>

              )
            )}

          </tbody>

        </table>

      </div>

    </div>

  );

}