"use client";

import { useEffect, useState } from "react";

export default function AttendancePage() {

  const [attendance, setAttendance] =
    useState<any[]>([]);

  useEffect(() => {

    fetchAttendance();

  }, []);

  const fetchAttendance = async () => {

    try {

      const res = await fetch(
        "/api/attendance"
      );

      const data = await res.json();

      setAttendance(data);

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-5xl font-extrabold text-blue-600 mb-10">
        Attendance
      </h1>

      <div className="bg-white rounded-3xl shadow-xl overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="bg-blue-600 text-white">

              <th className="p-5 text-left">
                Student Name
              </th>

              <th className="p-5 text-left">
                Date
              </th>

              <th className="p-5 text-left">
                Status
              </th>

            </tr>

          </thead>

          <tbody>

            {attendance.map((item) => (

              <tr
                key={item._id}
                className="border-b"
              >

                <td className="p-5 text-black">
                  {item.studentName}
                </td>

                <td className="p-5 text-black">
                  {item.date}
                </td>

                <td
                  className={`p-5 font-bold ${
                    item.status === "Present"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {item.status}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  );

}