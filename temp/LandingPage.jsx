import React, {useState} from "react";
import { FaSearch, FaFilter, FaExclamationTriangle, FaClipboardList, FaCheckCircle, FaAngleDown, FaBars } from "react-icons/fa";
import AddTask from "../../task-management/src/components/AddTasks.jsx";
import AssignedSuccessModal from "../../task-management/src/components/AssignedSuccessModal.jsx";
import CalendarModal from "../../task-management/src/components/CalendarModel.jsx";
import {tasks} from "./tasks.js";
import SummaryCard from "../../task-management/src/components/SummaryCard.jsx";
import TaskColumn from "../../task-management/src/components/TaskColumn.jsx";

const LandingPage = (props) => {
  const [addTask, setAddTask] = useState(false); 
  const [showCalendar, setShowCalendar] = useState(false);
  const [showAssignModal, setShowAssignModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState("Select Deadline");

  


  
  
  console.log(props.responseData.data.map((data) => {console.log(data.title)}));

  // console.log(typeof props.responseData); 
  // console.log(typeof props.responseData[0]); 
  // console.log("Full Response:", props.responseData);
  // const tasksArray = props.responseData[0]|| [];
  // console.log("Tasks Array:", tasksArray);



  return (
    <div className="bg-white min-h-screen px-3 mt-6 md:px-5 md:mt-10 mb-16">
      {/* Search & Filter */}
      <div className="flex w-full justify-between items-center bg-[#ECEDEE] py-3 px-2 md:px-5 md:py-5 rounded-3xl shadow-md shadow-stone-400 ">
        <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-md shadow-stone-400 w-[284px]">
          <FaSearch className="text-gray-700  lg:h-[20px] w-[20px]" />
          <input type="text" placeholder="Search Project" className="ml-2 outline-none w-full bg-white" />
        </div>
        <button className="flex text-gray-600 items-center bg-white px-1 md:px-4 py-2 ml-3 rounded-md shadow-md border-gray-400 border-2">
          <FaFilter className="md:mr-2 text-gray-700 h-[16px] w-[16px]" />
          <span className="hidden md:block font-[poppin] text-[14px]">Filter</span>
          <FaAngleDown className="md:ml-2 text-gray-500  h-[16px] w-[16px]" />
        </button>
      </div>

      {/* Sidebar Summary */}
      <div className="flex mt-7 space-x-5 md:space-x-12">
        {/* <button className="flex"><FaBars className="text-xl"/></button> */}
        <div className=" w-[200px] md:w-[322px] flex flex-col gap-4">
          <SummaryCard 
            icon={<FaExclamationTriangle className="text-red-100 bg-red-500 h-12 w-12 p-3 rounded-full" />} title={"Expired Tasks"} 
            count={5} 
          />
          <SummaryCard 
            icon={<FaClipboardList className="text-orange-100 bg-orange-500 h-12 w-12 p-3 rounded-full" />} 
            title={"All Active Tasks"} count={7} 
          />
          <SummaryCard 
            icon={<FaCheckCircle className="text-blue-100 bg-blue-500 h-12 w-12 p-3 rounded-full" />} title={"Completed Tasks"} count="2/7" 
          />
          <button onClick={() => setAddTask(true)} className="bg-black py-3 rounded-2xl shadow-md text-sm text-gray-200">+ Add Task</button>
        </div>

        {/* Modals */}
        {addTask && <AddTask 
                      addTask={addTask} 
                      setAddTask={setAddTask} 
                      handleCalendarToggle={handleCalendarToggle}
                      handleAssignToggle={handleAssignToggle}
                      selectedDate={selectedDate}
                    />}
        {showCalendar && <CalendarModal  
                      handleDateSelect={handleDateSelect} 
                      setShowCalendar={setShowCalendar}
                      setShowAssignModal={setShowAssignModal}
                    />}
        {showAssignModal && <AssignedSuccessModal
                      setShowAssignModal={setShowAssignModal}
                    />}

        {/* Columns */}
        <div className="flex-grow grid md:grid-cols-3  gap-6 md:gap-14 md:ml-6">

      
          <TaskColumn 
            title={"To Do"} 
            color={"#4B0082"} 
            tasks={tasks.todo} 
          />
          <TaskColumn 
            title={"On Progress"} 
            color={"#FFA500"} 
            tasks={tasks.progress} 
          />
          <TaskColumn 
            title={"Done"} 
            color={"#00FF00"} 
            tasks={tasks.done} 
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
