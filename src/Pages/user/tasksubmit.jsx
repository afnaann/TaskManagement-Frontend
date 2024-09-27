import { useState } from 'react';
import UserSidebar from '../../components/usersidebar';

const TaskSubmit = () => {
  const [assignment, setAssignment] = useState(''); // Selected assignment
  const [answerTitle, setAnswerTitle] = useState(''); // Answer title
  const [answerFile, setAnswerFile] = useState(null); // Answer file

  const assignments = [
    { id: 1, title: 'Assignment 1' },
    { id: 2, title: 'Assignment 2' },
    { id: 3, title: 'Assignment 3' }
  ];

  const handleFileChange = (e) => {
    setAnswerFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ assignment, answerTitle, answerFile });
  };

  return (
    <div className="flex bg-white h-screen">
      <UserSidebar />

      <div className="flex-auto p-6 ml-96 mr-10 mt-24 2xl:mr-96">
        <h2 className="text-3xl font-bold text-gray-800 mb-5">Submit Assignment Answer</h2>
        <form onSubmit={handleSubmit} className="bg-gray-200 shadow-md rounded-lg p-8">
          
          {/* Assignment Select */}
          <div className="mb-6">
            <label className="block text-gray-800 text-sm font-medium mb-2" htmlFor="assignment">
              Select Assignment
            </label>
            <select
              id="assignment"
              value={assignment}
              onChange={(e) => setAssignment(e.target.value)}
              className="shadow-sm appearance-none border border-gray-300 rounded-md w-full py-2 px-4 text-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            >
              <option value="" disabled>Select an assignment</option>
              {assignments.map((assignment) => (
                <option key={assignment.id} value={assignment.title}>
                  {assignment.title}
                </option>
              ))}
            </select>
          </div>

          {/* Answer Title */}
          <div className="mb-6">
            <label className="block text-gray-800 text-sm font-medium mb-2" htmlFor="answerTitle">
              Answer Title
            </label>
            <input
              type="text"
              id="answerTitle"
              value={answerTitle}
              onChange={(e) => setAnswerTitle(e.target.value)}
              className="shadow-sm appearance-none border border-gray-300 rounded-md w-full py-2 px-4 text-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Answer File Upload */}
          <div className="mb-6">
            <label className="block text-gray-800 text-sm font-medium mb-2" htmlFor="answerFile">
              Upload Answer (PDF)
            </label>
            <input
              type="file"
              id="answerFile"
              onChange={handleFileChange}
              accept=".pdf"
              className="shadow-sm appearance-none border border-gray-300 rounded-md w-full py-2 px-4 text-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
            >
              Submit Answer
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default TaskSubmit;
