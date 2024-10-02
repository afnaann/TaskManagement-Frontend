import { useContext, useState } from "react";
import Sidebar from "../../components/sidebar";
import useAxios from "../../api/useAxios";
import Select from "react-select";
import ApiContext from "../../context/ApiContext";

const AssignTaskForm = () => {
  const [selectedTask, setSelectedTask] = useState(null); 
  const [assignees, setAssignees] = useState([]); 
  const api = useAxios();
  const { users, totalTasks } = useContext(ApiContext);

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    console.log({ selectedTask, assignees });
    try{
        const response = await api.post("/auth/admin/assigntask", {
          task: selectedTask.value,
          assignees:assignees,
        });
        console.log(response)
    }catch(error){
        console.log(error)
        console.log(error.response.data)
        console.log(error.response.status)
    }
  };
  const userOptions = users?.map((user) => ({
    value: user.email,
    label: user.username,
  }));

  const taskOptions = totalTasks?.map((task) => ({
    value: task.title,
    label: task.title,
  }));

  return (
    <div className="flex bg-white h-screen">
      <Sidebar />

      <div className="flex-auto p-6 ml-96 mr-10 mt-24 2xl:mr-96">
        <h2 className="text-3xl font-bold text-gray-800 mb-5">Assign Task To Users</h2>
        <form
          onSubmit={handleSubmit}
          className="bg-gray-200 shadow-md rounded-lg p-8"
        >
          <div className="mb-6">
            <label
              className="block text-gray-800 text-sm font-medium mb-2"
              htmlFor="task"
            >
              Select Task
            </label>
            <Select
              id="task"
              options={taskOptions}
              value={selectedTask}
              onChange={setSelectedTask}
              className="basic-single"
              classNamePrefix="select"
              placeholder="Choose a task..."
              isClearable
            />
          </div>

          {/* Assignee Selection */}
          <div className="mb-6">
            <label
              className="block text-gray-800 text-sm font-medium mb-2"
              htmlFor="assignees"
            >
              Assign to Users
            </label>
            <Select
              id="assignees"
              options={userOptions}
              value={assignees}
              onChange={setAssignees}
              isMulti
              className="basic-multi-select"
              classNamePrefix="select"
              placeholder="Select assignees..."
            />
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
            >
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AssignTaskForm;
