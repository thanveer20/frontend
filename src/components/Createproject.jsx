import React from "react";
import axios from "axios";
import { useRef, useState } from "react";

const Createproject = () => {
  axios.defaults.baseURL = "http://localhost:8081";

  const projectNameRef = useRef("");
  const projectDescRef = useRef("");
  const projectStartDateRef = useRef();
  const projectEndDateRef = useRef();
  const [projectDetails, setProjectDetails] = useState({
    projectName: "",
    projectDescription: "",
    projectStartDate: "",
    projectEndDate: "",
  });

  const handleInputChange = (event) => {
    setProjectDetails({
      ...projectDetails,
      [event.target.name]: event.target.value,
    });
  };

  const handleSaveProject = async (event) => {
    event.preventDefault();
    let data = {
      projectName: projectNameRef.current.value,
      projectDescription: projectDescRef.current.value,
      projectStartDate: projectStartDateRef.current.value,
      projectEndDate: projectEndDateRef.current.value,
    };
    setProjectDetails({
      projectName: projectNameRef.current.value,
      projectDescription: projectDescRef.current.value,
      projectStartDate: projectStartDateRef.current.value,
      projectEndDate: projectEndDateRef.current.value,
    });
    console.log(data, projectDetails);

    await axios
      .post("/api/projects", data)
      .then((response) => {
        setProjectDetails({
          projectName: "",
          projectDescription: "",
          projectStartDate: "",
          projectEndDate: "",
        });
        projectStartDateRef.current.value = "";
        projectEndDateRef.current.value = "";
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="w-full">
      <h2 className="w-full flex justify-center items-center uppercase font-poppins h-[100px] font-bold">
        Create Project
      </h2>
      <div className="flex justify-center items-center">
        <form
          action=""
          className="p-10 w-[70%] bg-discount-gradient rounded-2xl font-poppins text-white h-[500px] flex flex-col justify-center items-center "
        >
          <div className="w-full  flex justify-center  ">
            <label htmlFor="" className="w-[30%]">
              Project Name :
            </label>
            <input
              type="text"
              placeholder="Name..."
              className="h-[40px] text-black outline-none w-[50%] border-none"
              ref={projectNameRef}
              onChange={handleInputChange}
              value={projectDetails.projectName}
              name="projectName"
            />
          </div>
          <div className="w-full  flex mt-5 justify-center  ">
            <label htmlFor="" className="w-[30%]">
              Description :
            </label>
            <textarea
              placeholder="About project..."
              className="h-[120px] text-black outline-none w-[50%] border-none"
              ref={projectDescRef}
              onChange={handleInputChange}
              value={projectDetails.projectDescription}
              name="projectDescription"
            ></textarea>{" "}
          </div>
          <div className="w-full mt-5  flex justify-center  ">
            <label htmlFor="" className="w-[30%]">
              Start date :
            </label>
            <input
              type="date"
              className="h-[40px] text-black outline-none w-[50%] border-none"
              ref={projectStartDateRef}
              onChange={handleInputChange}
              value={projectDetails.startDate}
              name="projectStartDate"
            />
          </div>
          <div className="w-full mt-5  flex justify-center  ">
            <label htmlFor="" className="w-[30%]">
              End Date :
            </label>
            <input
              type="date"
              className="h-[40px] text-black outline-none w-[50%] border-none"
              ref={projectEndDateRef}
              onChange={handleInputChange}
              value={projectDetails.endDate}
              name="projectEndDate"
            />
          </div>
          <div className="flex justify-center items-center">
            <button
              className="mt-10 w-[80px] rounded-xl hover:scale-110 text-black font-poppins font-semibold h-[40px] bg-secondary"
              onClick={(event) => handleSaveProject(event)}
            >
              ADD
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Createproject;
