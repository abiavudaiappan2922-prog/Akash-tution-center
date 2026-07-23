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
  Cookies.remove("admin", {
    path: "/",
  });

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

      await fetch(`/api/delete-student/${id}`, {
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

      await fetch(`/api/update-student/${student._id}`, {
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

const classData: {
  class: string;
  students: number;
}[] = [];

const classMap: any = {};

students.forEach((student) => {
  const cls =
    student.className ||
    student.studentClass ||
    "Unknown";

  if (!classMap[cls]) {
    classMap[cls] = 0;
  }

  classMap[cls]++;
});

Object.keys(classMap).forEach((cls) => {
  classData.push({
    class: cls,
    students: classMap[cls],
  });
});

  const admissionData = [
    {
      name: "Admissions",
      count: students.length,
    },
  ];
  console.log("ADMIN PAGE NEW VERSION");
  return (

    <div className="min-h-screen bg-gradient-to-br from-[#061321] via-[#0B1F33] to-[#132F4C] p-6 relative overflow-hidden">
      <div className="flex justify-between items-center mb-8">

      <h1 className="text-5xl font-extrabold text-yellow-400">
          Admin Dashboard
        </h1>

        <div className="flex gap-4">

          <button
            onClick={exportExcel}
           className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-[#081827] px-6 py-3 rounded-xl text-lg font-bold shadow-lg" 
          >
            Excel
          </button>

          <button
            onClick={logout}
            className="bg-[#081827] border border-yellow-400/30 text-yellow-400 px-6 py-3 rounded-xl text-lg font-bold shadow-lg"
          >
            Logout
          </button>

        </div>

      </div>

      

      {/* CARDS */}

      <div className="grid md:grid-cols-1 gap-6 mb-10">

        <div className="bg-gradient-to-br from-[#0B1F33] to-[#061321] border border-yellow-400/30 text-white p-8 rounded-3xl shadow-xl">

          <h2 className="text-2xl font-bold mb-2">
            Total Students
          </h2>

          <p className="text-4xl font-extrabold">
            {students.length}
          </p>

        </div>

       

        

      </div>

      {/* GRAPH */}

      <div className="bg-white/10 backdrop-blur-xl border border-yellow-400/20 p-6 rounded-3xl shadow-2xl mb-10">

<h2 className="text-2xl font-bold mb-5 text-yellow-400">
Class Wise Students
</h2>

<ResponsiveContainer
width="100%"
height={500}
>

<BarChart data={classData}>

<CartesianGrid strokeDasharray="3 3"/>

<XAxis
  dataKey="class"
  interval={0}
  angle={0}
  textAnchor="middle"
  height={60}
/>

<YAxis/>

<Tooltip/>

<Bar
dataKey="students"
fill="#2563eb"
radius={[8,8,0,0]}
barSize={35}
/>

</BarChart>

</ResponsiveContainer>

</div>

      {/* SEARCH */}

      <div className="bg-white/10 backdrop-blur-xl border border-yellow-400/20 p-6 rounded-3xl shadow-xl mb-10 flex gap-4">

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

      <div className="overflow-x-auto bg-white/10 backdrop-blur-xl border border-yellow-400/20 rounded-3xl shadow-2xl">

        <table className="w-full">

          <thead>

            <tr className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-[#081827] text-base">

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
? "bg-[#081827]"
: "bg-[#0B1F33]"
                  } hover:bg-blue-50`}
                >

                  <td className="p-4 text-yellow-400 font-semibold">
                    {student.studentName}
                  </td>

                  <td className="p-4 text-gray-200">
                    {student.parentName}
                  </td>

                  <td className="p-4 text-gray-200">
                    {student.parentMobile}
                  </td>

                  <td className="p-4 text-gray-200">
                    {student.alternateMobile || "-"}
                  </td>

                  <td className="p-4 text-gray-200">
                    {student.className}
                  </td>

                  <td className="p-4 text-gray-200">
                    {student.bloodGroup}
                  </td>

                  <td className="p-4 text-gray-200">
                    {student.healthIssue}
                  </td>

                  <td className="p-4 text-gray-200">
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