
const Education = () => {
  return (
    <div className="border-b border-neutral-700 pb-4 lg:mb-35 bg-neutral-900 flex justify-center items-center py-16">
      <div className="w-full max-w-3xl">
      <h2 className="text-4xl font-light text-white pb-6 text-center tracking-wide">
  Education
</h2>

        <div className="bg-neutral-800 rounded-lg p-6 shadow-lg mb-6">
          <h3 className="text-xl font-bold text-blue-400">AISSMS College of Engineering</h3>
          <p className="text-md text-gray-400">2022 – 2025</p>
          <p className="text-md text-gray-200">
            Bachelor of Engineering - Computer Engineering - CGPA: 8.40
          </p>
          <p className="text-md text-gray-400">Pune, Maharashtra</p>
        </div>

        <div className="bg-neutral-800 rounded-lg p-6 shadow-lg mb-6">
          <h3 className="text-xl font-bold text-blue-400">K.K.Wagh Polytechnic</h3>
          <p className="text-md text-gray-400">2019 – 2022</p>
          <p className="text-md text-gray-200">
            Diploma - Computer Technology - Percentage: 89.60%
          </p>
          <p className="text-md text-gray-400">Nashik, Maharashtra</p>
        </div>

        <div className="bg-neutral-800 rounded-lg p-6 shadow-lg">
          <h3 className="text-xl font-bold text-blue-400">New English School</h3>
          <p className="text-md text-gray-400">2018 – 2019</p>
          <p className="text-md text-gray-200">
            Secondary School Certificate - Percentage: 79.40%
          </p>
          <p className="text-md text-gray-400">Sakri, Maharashtra</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
