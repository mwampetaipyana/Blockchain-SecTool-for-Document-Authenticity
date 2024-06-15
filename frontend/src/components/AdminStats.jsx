import React from "react";
import { IoDocuments, IoPeopleSharp } from "react-icons/io5";
import { FaCircleCheck, FaX } from "react-icons/fa6";

const AdminStats = () => {
  return (
    <div className="flex gap-4 w-full">
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
          <IoPeopleSharp className="text-2xl text-white " />
        </div>
        <div className="pl-4">
          <span className="text-sm text-neutral-900  font-bold">
            Total PROs
          </span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold ">34</strong>
            <span className="text-sm text-green-500 pl-2">+23%</span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
          <IoDocuments className="text-2xl text-white " />
        </div>
        <div className="pl-4">
          <span className="text-sm text-neutral-900 font-bold">
            Total Documents
          </span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold ">
              345
            </strong>
            <span className="text-sm text-green-500 pl-2">+24.5%</span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
          <FaCircleCheck className="text-2xl text-white " />
        </div>
        <div className="pl-4">
          <span className="text-sm text-neutral-900  font-bold">
            Total Verification
          </span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold ">
              250
            </strong>
            <span className="text-sm text-green-500 pl-2">+24%</span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
          <FaX className="text-2xl text-white " />
        </div>
        <div className="pl-4">
          <span className="text-sm text-neutral-900 font-bold">
            Total Failure
          </span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold ">34</strong>
            <span className="text-sm text-red-500 pl-2">+4%</span>
          </div>
        </div>
      </BoxWrapper>
    </div>
  );
};

export default AdminStats;

function BoxWrapper({ children }) {
  return (
    <div className="bg-white  rounded-sm p-4 flex-1 full border border-gray-200 flex items-center">
      {children}
    </div>
  );
}
