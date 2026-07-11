"use client";

import { useEffect, useState } from "react";

export default function FeesPage() {

  const [fees, setFees] =
    useState<any[]>([]);

  useEffect(() => {

    fetchFees();

  }, []);

  const fetchFees = async () => {

    try {

      const res = await fetch(
        "/api/fees"
      );

      const data = await res.json();

      setFees(data);

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-5xl font-extrabold text-purple-600 mb-10">
        Tuition Fees
      </h1>

      <div className="bg-white rounded-3xl shadow-xl overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="bg-purple-600 text-white">

              <th className="p-5 text-left">
                Month
              </th>

              <th className="p-5 text-left">
                Amount
              </th>

              <th className="p-5 text-left">
                Status
              </th>

            </tr>

          </thead>

          <tbody>

            {fees.map((item) => (

              <tr
                key={item._id}
                className="border-b"
              >

                <td className="p-5 text-black">
                  {item.month}
                </td>

                <td className="p-5 text-black">
                  ₹{item.amount}
                </td>

                <td
                  className={`p-5 font-bold ${
                    item.status === "Paid"
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