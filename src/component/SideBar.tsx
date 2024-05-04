import { FaHome } from "react-icons/fa";
import { IoIosGlobe } from "react-icons/io";
export const SideBar = () => {
  const handleNewAssignment = () => {
    alert("New Assignment is created");
  };
  return (
    <div className="w-5/12 bg-gray-100 p-2">
      <div className="my-12 flex cursor-pointer">
        <IoIosGlobe className="mx-3 text-[24px]" />
        <p className="text-sm font-semibold">Hi, AltWorld</p>
      </div>
      <div className="my-12 flex cursor-pointer">
        <FaHome color="#4fd1c5" className="mx-4" />
        <span className="text-sm font-semibold">Dashboard</span>
      </div>
      <div
        className="my-12 bg-teal-400  text-white p-4 rounded-xl"
        style={{ width: "85%" }}>
        <div className="mb-4">
          <p className="bg-white text-gray-700 w-10  h-10 rounded-xl flex justify-center items-center font-semibold text-[22px] cursor-pointer">
            +
          </p>
        </div>
        <div className="mb-4">
          <p className="textmd font-semibold">New Assignment?</p>
        </div>
        <div className="mb-4">
          <p className="text-sm">
            Select from pre-defined questions to have a quick turn around.
          </p>
        </div>
        <button
          className="bg-white  rounded-xl text-gray-800 py-2 px-4 text-[14px] font-semibold"
          onClick={handleNewAssignment}>
          Create New Assignment
        </button>
      </div>
    </div>
  );
};
