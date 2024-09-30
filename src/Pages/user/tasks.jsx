import { useContext, useEffect, useState } from "react";
import UserSidebar from "../../components/usersidebar";
import ApiContext from "../../context/ApiContext";

const TaskTable = () => {
  const { tasks } = useContext(ApiContext);

  const getStatusClass = (status) => {
    switch (status) {
      case true:
        return "bg-green-100 text-green-800";
      case false:
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };
  return (
    <div className="flex">
      <UserSidebar />
      <div className="flex-grow p-6 ml-64 mt-20">
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Title
                </th>
                <th scope="col" className="px-6 py-3">
                  Description
                </th>
                <th scope="col" className="px-6 py-3">
                  File
                </th>
                <th scope="col" className="px-6 py-3">
                  Completed
                </th>
              </tr>
            </thead>
            <tbody>
              {tasks?.map((task, index) => (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {task.task.title}
                  </td>
                  <td className="px-6 py-4">{task.task.description}</td>
                  <td className="px-6 py-4">
                    <a
                      href={task.task.file}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm transition"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View File
                    </a>
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusClass(
                        task.completed
                      )}`}
                    >
                      {task.completed ? 'Completed': 'Pending'}
                    </span>
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
