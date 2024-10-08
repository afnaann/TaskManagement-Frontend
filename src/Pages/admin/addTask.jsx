import { useState } from 'react';
import Sidebar from '../../components/sidebar';
import useAxios from '../../api/useAxios';

const AddTaskForm = () => {
  const [title, setTitle] = useState('');  
  const [description, setDescription] = useState(''); 
  const [files, setFiles] = useState([]);  
  const api = useAxios()

  const handleFileChange = (e) => {
    setFiles([...e.target.files]);  
  };

  const handleSubmit = async (e) => {
    e.preventDefault();  
    
    console.log({ title, description, files });  
    const response = await api.post('/auth/admin/addtask',{title, description,files})
    console.log(response)
    if (response.status == 200){
      setTitle('')
      setDescription('')
      setFiles(' ')
    }
  };


  return (
    <div className="flex bg-white h-screen"> 
      <Sidebar />

      <div className="flex-auto p-6 ml-96 mr-10 mt-24 2xl:mr-96">
        <h2 className="text-3xl font-bold text-gray-800 mb-5">Add New Task</h2> 
        <form onSubmit={handleSubmit} className="bg-gray-200 shadow-md rounded-lg p-8">
          {/* Task Title Input */}
          <div className="mb-6">
            <label className="block text-gray-800 text-sm font-medium mb-2" htmlFor="title">
              Task Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}  // Update title state on change
              className="shadow-sm appearance-none border border-gray-300 rounded-md w-full py-2 px-4 text-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Description Input */}
          <div className="mb-6">
            <label className="block text-gray-800 text-sm font-medium mb-2" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}  // Update description state on change
              className="shadow-sm appearance-none border border-gray-300 rounded-md w-full py-2 px-4 text-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400" 
              rows="4"
              required
            />
          </div>

          {/* File Upload */}
          <div className="mb-6">
            <label className="block text-gray-800 text-sm font-medium mb-2" htmlFor="files">
              Upload Files (PDF, Images)
            </label>
            <input
              type="file"
              id="files"
              onChange={handleFileChange}  // Handle file change
              multiple
              accept=".pdf, .jpg, .jpeg, .png"
              className="shadow-sm appearance-none border border-gray-300 rounded-md w-full py-2 px-4 text-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
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

export default AddTaskForm;
