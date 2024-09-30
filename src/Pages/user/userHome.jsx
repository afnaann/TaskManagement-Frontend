import { useContext, useEffect, useState } from "react";
import useAxios from "../../api/useAxios";
import UserSidebar from "../../components/usersidebar";
import ApiContext from "../../context/ApiContext";

const UserHome = () => {
  const {tasks} = useContext(ApiContext)

  if(!tasks){
    return <div>loading...</div>
  }
  const completedTasks = tasks.filter(task => task.completed)
  return (
    <>
      <UserSidebar />
      <div className="p-6 sm:ml-64">
        {/* Dashboard Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">User Dashboard</h1>
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          {/* Total Students */}
          <div className="p-6 bg-white rounded-xl shadow-lg dark:bg-gray-800 h-48 flex items-center justify-center">
            <div className="flex items-center">
              <div className="p-4 text-blue-500 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-400">
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12a4 4 0 1 0-8 0 4 4 0 0 0 8 0zM12 14v7m4-7h7m-7 0h-7m4 0v7m-4-7H5m7 0v7"
                  />
                </svg>
              </div>
              <div className="ml-6">
                <p className="mb-2 text-lg font-medium text-gray-600 dark:text-gray-400">Total Tasks</p>
                <p className="text-2xl font-semibold text-gray-900 dark:text-white">{tasks.length}</p>
              </div>
            </div>
          </div>

          {/* Total Assignments */}
          <div className="p-6 bg-white rounded-xl shadow-lg dark:bg-gray-800 h-48 flex items-center justify-center">
            <div className="flex items-center">
              <div className="p-4 text-green-500 bg-green-100 rounded-full dark:bg-green-900 dark:text-green-400">
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 13h6m2 0a2 2 0 1 1 2 2 2 2 0 0 1-2 2m-2-2a2 2 0 0 1-2-2m2 2v6m-2-2a2 2 0 1 1-2 2 2 2 0 0 1 2-2m-2 2v6"
                  />
                </svg>
              </div>
              <div className="ml-6">
                <p className="mb-2 text-lg font-medium text-gray-600 dark:text-gray-400">Completed Tasks</p>
                <p className="text-2xl font-semibold text-gray-900 dark:text-white">{completedTasks.length}</p>
              </div>
            </div>
          </div>

          {/* Completed Assignments */}
          <div className="p-6 bg-white rounded-xl shadow-lg dark:bg-gray-800 h-48 flex items-center justify-center">
            <div className="flex items-center">
              <div className="p-4 text-purple-500 bg-purple-100 rounded-full dark:bg-purple-900 dark:text-purple-400">
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div className="ml-6">
                <p className="mb-2 text-lg font-medium text-gray-600 dark:text-gray-400">Pending Tasks</p>
                <p className="text-2xl font-semibold text-gray-900 dark:text-white">{tasks.length - completedTasks.length}</p>
              </div>
            </div>
          </div>

          {/* Pending Assignments */}
          <div className="p-6 bg-white rounded-xl shadow-lg dark:bg-gray-800 h-48 flex items-center justify-center">
            <div className="flex items-center">
              <div className="p-4 text-red-500 bg-red-100 rounded-full dark:bg-red-900 dark:text-red-400">
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 13h6m2 0a2 2 0 1 1 2 2 2 2 0 0 1-2 2m-2-2a2 2 0 0 1-2-2m2 2v6m-2-2a2 2 0 1 1-2 2 2 2 0 0 1 2-2m-2 2v6"
                  />
                </svg>
              </div>
              <div className="ml-6">
                <p className="mb-2 text-lg font-medium text-gray-600 dark:text-gray-400">In Progress</p>
                <p className="text-2xl font-semibold text-gray-900 dark:text-white">0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserHome;
