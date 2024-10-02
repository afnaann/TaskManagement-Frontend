import { useContext } from "react";
import { Link, useLocation } from "react-router-dom"; // Import React Router's hook
import { AuthContext } from "../context/AuthContext";

const Sidebar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const location = useLocation(); // Get the current path
  const isActive = (path) => location.pathname === path;

  return (
    <div className="fixed">
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          />
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          {/* Profile Section */}
          <div className="flex items-center p-4 mb-6 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <img
              className="w-12 h-12 rounded-full"
              src="https://via.placeholder.com/150" // Replace with actual profile image URL
              alt="Profile"
            />
            <div className="ms-4">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                {user.username}
              </h4>{" "}
              {/* Profile Name */}
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {" "}
                {user.email}{" "}
              </p>{" "}
              {/* Profile Role */}
            </div>
          </div>

          {/* Menu Section */}
          <ul className="space-y-2 font-medium">
            {/* Dashboard Link */}
            <li>
              <Link
                to={"/admin/home"}
                className={`flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${
                  isActive("/admin/home")
                    ? "bg-gray-200 dark:bg-black"
                    : "text-gray-900 dark:text-white"
                }`}
              >
                <svg
                  className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span className="ms-3">Dashboard</span>
              </Link>
            </li>
            {/* Tasks Link */}
            <li>
              <Link
                to={"/admin/tasks"}
                className={`flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${
                  isActive("/admin/tasks")
                    ? "bg-gray-200 dark:bg-gray-900"
                    : "text-gray-900 dark:text-white"
                }`}
              >
                <svg
                  className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span className="ms-3">Tasks</span>
              </Link>
            </li>
            {/* Add Tasks Link */}
            <li>
              <Link
                to={"/admin/addtask"}
                className={`flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${
                  isActive("/admin/addtask")
                    ? "bg-gray-200 dark:bg-gray-900"
                    : "text-gray-900 dark:text-white"
                }`}
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M11 18a2 2 0 1 1-4 0V4a2 2 0 1 1 4 0v14Zm7-14a2 2 0 1 0-4 0v14a2 2 0 1 0 4 0V4Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Add Tasks</span>
              </Link>
            </li>
            {/* Submit Task Link */}
            <li>
              <Link
                to={"/admin/assigntask"} // Change this to your actual submit task path
                className={`flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${
                  isActive("/admin/assigntask")
                    ? "bg-gray-200 dark:bg-gray-900"
                    : "text-gray-900 dark:text-white"
                }`}
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M11 18a2 2 0 1 1-4 0V4a2 2 0 1 1 4 0v14Zm7-14a2 2 0 1 0-4 0v14a2 2 0 1 0 4 0V4Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Assign Task</span>
              </Link>
            </li>
            {/* Logout Button */}
            <li>
              <button
                onClick={logoutUser} // Replace this with your logout handler function
                className={`flex items-center p-2 pr-36 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${
                  isActive("/logout")
                    ? "bg-gray-200 dark:bg-gray-900"
                    : "text-gray-900 dark:text-white"
                }`}
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M3 10a1 1 0 0 1 1-1h8.586l-3.293-3.293a1 1 0 0 1 1.414-1.414l5 5a1 1 0 0 1 0 1.414l-5 5a1 1 0 1 1-1.414-1.414L12.586 11H4a1 1 0 0 1-1-1Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
