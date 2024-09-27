import UserSidebar from "../../components/usersidebar";

const TaskTable = () => {
  const tasks = [
    {
      title: "Create Homepage Layout",
      description: "Design and implement the homepage layout for the new website.",
      fileUrl: "/files/homepage_layout.pdf", // Example file URL
    },
    {
      title: "Fix Navigation Bar Bug",
      description: "Resolve the issue where the navigation bar overlaps the content.",
      fileUrl: "/files/navbar_bug_fix.pdf", // Example file URL
    },
    {
      title: "Implement User Authentication",
      description: "Develop a user authentication system with JWT and OAuth.",
      fileUrl: "/files/user_auth.pdf", // Example file URL
    },
  ];

  return (
    <div className="flex">
      <UserSidebar />
      <div className="flex-grow p-6 ml-64 mt-20">
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">Title</th>
                <th scope="col" className="px-6 py-3">Description</th>
                <th scope="col" className="px-6 py-3">File</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task, index) => (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {task.title}
                  </td>
                  <td className="px-6 py-4">{task.description}</td>
                  <td className="px-6 py-4">
                    <a
                      href={task.fileUrl}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm transition"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View File
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TaskTable;
