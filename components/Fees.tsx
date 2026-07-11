export default function Fees() {

  const fees = [

    { className: "1st Standard", fees: "₹300" },
    { className: "2nd Standard", fees: "₹300" },
    { className: "3rd Standard", fees: "₹350" },
    { className: "4th Standard", fees: "₹350" },
    { className: "5th Standard", fees: "₹400" },
    { className: "6th Standard", fees: "₹450" },
    { className: "7th Standard", fees: "₹500" },
    { className: "8th Standard", fees: "₹550" },
    { className: "9th Standard", fees: "₹150 × 5 = ₹750" },
    { className: "10th Standard", fees: "₹200 × 5 = ₹1000" },
    { className: "11th Standard", fees: "₹200 × 6 = ₹1200" },
    { className: "12th Standard", fees: "₹250 × 6 = ₹1500" },

  ];

  const specialFees = [

    {
      className: "10th",
      stateBoard: "₹400",
      cbse: "₹500",
    },

    {
      className: "11th",
      stateBoard: "₹500",
      cbse: "₹600",
    },

    {
      className: "12th",
      stateBoard: "₹800",
      cbse: "₹1000",
    },

  ];

  return (

    <section
      id="fees"
      className="py-24 bg-gray-100"
    >

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <div className="text-center">

          <h2 className="text-5xl font-bold text-gray-900">
            Fees Structure
          </h2>

          <p className="text-gray-600 text-xl mt-5">
            Academic Year 2026 - 2027
          </p>

        </div>

        {/* MAIN FEES TABLE */}
        <div className="mt-16 bg-white rounded-3xl shadow-2xl overflow-hidden">

          <div className="bg-blue-700 text-white grid grid-cols-2 p-6 text-2xl font-bold">

            <div>Class</div>

            <div>Fees</div>

          </div>

          {fees.map((item, index) => (

            <div
              key={index}
              className="grid grid-cols-2 p-6 border-b text-lg hover:bg-gray-50 transition"
            >

              <div className="font-semibold text-gray-800">
                {item.className}
              </div>

              <div className="text-blue-700 font-bold">
                {item.fees}
              </div>

            </div>

          ))}

        </div>

        {/* SPECIAL SUBJECT FEES */}
        <div className="mt-20">

          <h3 className="text-4xl font-bold text-center text-purple-700">
            Special Subject Fees
          </h3>

          <p className="text-center text-gray-600 text-lg mt-4">
            Special coaching available for State Board & CBSE students
          </p>

          <div className="mt-10 bg-white rounded-3xl shadow-2xl overflow-hidden">

            {/* TABLE HEADER */}
            <div className="grid grid-cols-3 bg-purple-700 text-white p-6 text-xl font-bold">

              <div>Class</div>

              <div>State Board</div>

              <div>CBSE</div>

            </div>

            {/* TABLE ROWS */}
            {specialFees.map((item, index) => (

              <div
                key={index}
                className="grid grid-cols-3 p-6 border-b text-lg hover:bg-gray-50 transition"
              >

                <div className="font-semibold">
                  {item.className}
                </div>

                <div className="text-green-700 font-bold">
                  {item.stateBoard}
                </div>

                <div className="text-blue-700 font-bold">
                  {item.cbse}
                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>

  );

}