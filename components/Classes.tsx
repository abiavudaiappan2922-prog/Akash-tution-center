export default function Classes() {

  const classes = [

    "Class I",
    "Class II",
    "Class III",
    "Class IV",
    "Class V",
    "Class VI",
    "Class VII",
    "Class VIII",
    "Class IX",
    "Class X",
    "Class XI",
    "Class XII"

  ];

  return (

    <section
      id="classes"
      className="py-24 bg-gray-100"
    >

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <h2 className="text-4xl font-bold text-gray-800">
            Classes & Subjects
          </h2>

          <p className="mt-4 text-gray-600">
            CBSE coaching with special subject training.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {classes.map((item, index) => (

            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-lg hover:scale-105 transition"
            >

              <h3 className="text-2xl font-bold text-blue-700">
                {item}
              </h3>

              <p className="mt-4 text-gray-600">
                Expert coaching with study materials and test preparation.
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}