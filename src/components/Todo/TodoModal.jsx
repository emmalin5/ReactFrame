import React, { useState } from "react";
import { CalendarDateRangeIcon, PlusIcon } from "@heroicons/react/24/solid";
import { TimePicker } from "antd";

const TaskModal = ({ isOpen, onClose }) => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  return (
    <>
      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/85 bg-opacity-50">
          <div className="bg-white border border-gray-200 text-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl text-gray-600 font-semibold">
                Create task
              </h2>
              <button className="flex items-center text-black gap-1 text-sm hover:text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fillRule="evenodd" d="M12 5.25c1.213 0 2.415.046 3.605.135a3.256 3.256 0 0 1 3.01 3.01c.044.583.077 1.17.1 1.759L17.03 8.47a.75.75 0 1 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 0 0-1.06-1.06l-1.752 1.751c-.023-.65-.06-1.296-.108-1.939a4.756 4.756 0 0 0-4.392-4.392 49.422 49.422 0 0 0-7.436 0A4.756 4.756 0 0 0 3.89 8.282c-.017.224-.033.447-.046.672a.75.75 0 1 0 1.497.092c.013-.217.028-.434.044-.651a3.256 3.256 0 0 1 3.01-3.01c1.19-.09 2.392-.135 3.605-.135Zm-6.97 6.22a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.752-1.751c.023.65.06 1.296.108 1.939a4.756 4.756 0 0 0 4.392 4.392 49.413 49.413 0 0 0 7.436 0 4.756 4.756 0 0 0 4.392-4.392c.017-.223.032-.447.046-.672a.75.75 0 0 0-1.497-.092c-.013.217-.028.434-.044.651a3.256 3.256 0 0 1-3.01 3.01 47.953 47.953 0 0 1-7.21 0 3.256 3.256 0 0 1-3.01-3.01 47.759 47.759 0 0 1-.1-1.759L6.97 15.53a.75.75 0 0 0 1.06-1.06l-3-3Z" clipRule="evenodd" />
</svg> Repeat 
</button>
            </div>

            {/* Task Name Input */}
            <div className="mb-4">
              <input
                type="text"
                placeholder="Task name"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                className="w-full px-4 py-2 text-gray-800 border border-blue-500 rounded focus:outline-none focus:border-gray-600"
              />
            </div>

            {/* Task Description Textarea */}
            <div className="mb-4 ">
              <textarea
                placeholder="Task description"
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
                className="w-full text-gray-800 h-32 px-4 py-2 border border-blue-500 rounded resize-none focus:outline-none focus:border-gray-600"></textarea>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 mb-4  ">
              <button className="px-4 py-2 bg-blue-400 text-white rounded hover:bg-blue-600 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="size-5 bg-blue">
                  <path
                    fillRule="evenodd"
                    d="M15.621 4.379a3 3 0 0 0-4.242 0l-7 7a3 3 0 0 0 4.241 4.243h.001l.497-.5a.75.75 0 0 1 1.064 1.057l-.498.501-.002.002a4.5 4.5 0 0 1-6.364-6.364l7-7a4.5 4.5 0 0 1 6.368 6.36l-3.455 3.553A2.625 2.625 0 1 1 9.52 9.52l3.45-3.451a.75.75 0 1 1 1.061 1.06l-3.45 3.451a1.125 1.125 0 0 0 1.587 1.595l3.454-3.553a3 3 0 0 0 0-4.242Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              <button className="flex items-center bg-blue-400 hover:bg-blue-600 text-white px-4 py-2 rounded">
                <CalendarDateRangeIcon className="h-5 w-5" />
              </button>

              <div className="custom-time-picker flex gap-2">
                <TimePicker placeholder="Start Time" />
                <TimePicker placeholder="End Time" />
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="flex justify-end">
              <button
                className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 mr-2"
                onClick={onClose}>
                Cancel
              </button>
              <button className="px-4 py-2 bg-blue-400 text-white rounded hover:bg-blue-600">
                Create task
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TaskModal;
