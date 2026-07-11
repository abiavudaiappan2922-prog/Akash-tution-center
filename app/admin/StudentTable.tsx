"use client";

type Props = {
  students: any[];
};

export default function StudentTable({ students }: Props) {

  async function deleteStudent(id: string) {

    try {

      const response = await fetch(
        `/api/delete-student/${id}`,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();

      if (data.success) {
        window.location.reload();
      } else {
        alert("Delete failed");
      }

    } catch (error) {

      console.log(error);

      alert("Something went wrong");

    }

  }

  return (

    <main className="min-h-screen bg-gray-100 p-10">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-bold text-blue-700">
          Admin Dashboard
        </h1>

        <p className="mt-4 text-gray-600 text-lg">
          Manage admission students.
        </p>

        <div className="mt-10 bg-white rounded-3xl shadow-2xl p-8 overflow-x-auto">

          <h2 className="text-3xl font-bold mb-8">
            Admission Students
          </h2>

          <table className="w-full border-collapse">

            <thead>

              <tr className="bg-blue-600 text-white">

                <th className="p-4 text-left">Student Name</th>
                <th className="p-4 text-left">Parent Name</th>
                <th className="p-4 text-left">Phone</th>
                <th className="p-4 text-left">Class</th>
                <th className="p-4 text-left">Message</th>
                <th className="p-4 text-left">Action</th>

              </tr>

            </thead>

            <tbody>

              {students.map((student: any) => (

                <tr
                  key={student._id}
                  className="border-b hover:bg-gray-50"
                >

                  <td className="p-4">{student.studentName}</td>
                  <td className="p-4">{student.parentName}</td>
                  <td className="p-4">{student.phone}</td>
                  <td className="p-4">{student.studentClass}</td>
                  <td className="p-4">{student.message}</td>

                  <td className="p-4">

                    <button
                      onClick={() => deleteStudent(student._id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600"
                    >
                      Delete
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </main>

  );

}