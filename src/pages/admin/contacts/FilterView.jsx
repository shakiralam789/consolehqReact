import { NavLink } from "react-router-dom";
import Paggination from "../../../components/admin/Paggination";
import BreadCrumb from "../../../components/admin/BreadCrumb";
import { Dropdown } from "flowbite-react";
import { useState } from "react";

export default function FilterView() {

  const [tabOpen, setTabOpen] = useState('activity')

  function tabFunc(id){
    setTabOpen(id)
  }
  
  return (
    <>
      <BreadCrumb title={"Filter Contact"} navigation={true} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
        <div className="bg-white p-6 2xl:p-8">
          <div className="flex justify-between items-center">
            <h2 className="font-50 text-primary font-semibold mb-4 2xl:mb-8">
              Robert Dewayne
            </h2>
            <button className="hover:text-secondary duration-300">
              <svg
                className="-mt-2 size-[21px] 2xl:size-[25px]"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.1846 25.5538H26.2503"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.975 4.74349C16.9446 3.58473 18.6875 3.41482 19.8703 4.36467C19.9357 4.4162 22.0369 6.04849 22.0369 6.04849C23.3362 6.83399 23.74 8.50388 22.9367 9.77824C22.8941 9.84648 11.0149 24.7056 11.0149 24.7056C10.6197 25.1986 10.0198 25.4897 9.37863 25.4967L4.82941 25.5538L3.80441 21.2154C3.66083 20.6054 3.80441 19.9647 4.19963 19.4717L15.975 4.74349Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.7764 7.50098L20.5917 12.7349"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <p className="font-18 text-gray-light">lorem ipsum</p>
        </div>
        <div className="bg-white p-6 2xl:p-8">
          <div className="grid grid-cols-12 gap-3">
            <div className="col-span-12 lg:col-span-7">
              <p className="font-28 font-semibold text-primary mb-4 2xl:mb-8">
                Invoices Owed to you
              </p>
              <span className="font-28 font-semibold text-default-green">
                45,300.00
              </span>
            </div>
            <div className="col-span-12 lg:col-span-5">
              <p className="font-18 italic text-gray-light pb-5 2xl:pb-6">
                They pay in 44 days on average
              </p>
              <span className="font-18 text-red1">45,300.00 Overdue</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white px-6 py-4 2xl:px-8 2xl:py-6 mt-5 2xl:mt-7">
        <div className="flex flex-wrap justify-between gap-3">
          <ul
            className="flex flex-wrap font-medium items-center gap-4 sm:gap-x-8 2xl:gap-x-12 gap-y-4 font-22"
          >
            <li role="presentation">
              <button
                onClick={()=> tabFunc('activity')}
                type="button"
                className={`capitalize text-primary hover:text-secondary cursor-pointer ${ tabOpen == 'activity' &&  'text-secondary'} duration-300`}
              >
                Activity
              </button>
            </li>
            <li role="presentation">
              <button
                onClick={()=> tabFunc('details')}
                type="button"
                className={`capitalize text-primary hover:text-secondary cursor-pointer ${ tabOpen == 'details' &&  'text-secondary'} duration-300`}
              >
                Contact Details
              </button>
            </li>
            <li role="presentation">
              <button
                onClick={()=> tabFunc('assessments')}
                type="button"
                className={`capitalize text-primary hover:text-secondary cursor-pointer ${ tabOpen == 'assessments' &&  'text-secondary'} duration-300`}
              >
                Assessments
              </button>
            </li>
            <NavLink
              to="/contacts/message"
              className="capitalize text-primary hover:text-secondary cursor-pointer duration-300"
            >
              Message
            </NavLink>
          </ul>
          <NavLink to="/contacts/archive">
            <svg
              className="duration-300 mx-auto size-6 2xl:size-8 text-primary hover:text-secondary"
              width="100pt"
              height="100pt"
              viewBox="0 0 100 100"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="currentColorff">
                <path
                  fill="currentColor"
                  opacity="1.00"
                  d=" M 14.33 17.34 C 18.10 16.14 22.12 16.83 26.01 16.67 C 29.88 16.79 33.91 16.19 37.63 17.48 C 42.44 19.67 45.67 24.17 50.13 26.86 C 61.07 27.40 72.05 26.76 83.00 27.16 C 87.84 27.43 92.01 32.11 91.69 36.96 C 91.63 49.29 91.70 61.62 91.66 73.95 C 91.75 79.01 87.08 83.53 82.02 83.31 C 61.01 83.38 40.00 83.30 18.99 83.34 C 13.60 83.95 8.22 79.46 8.34 73.96 C 8.33 57.99 8.32 42.02 8.35 26.05 C 8.27 22.28 10.87 18.71 14.33 17.34 M 16.28 23.21 C 14.36 24.00 14.74 26.32 14.62 27.98 C 14.64 42.66 14.64 57.34 14.61 72.01 C 14.74 73.67 14.37 76.00 16.29 76.78 C 19.17 77.24 22.10 77.01 25.00 77.05 C 43.01 77.05 61.02 77.03 79.03 77.07 C 80.59 77.04 82.17 77.08 83.71 76.77 C 85.65 76.03 85.24 73.65 85.38 72.02 C 85.33 60.34 85.43 48.65 85.34 36.97 C 85.34 35.50 84.62 33.28 82.83 33.35 C 71.26 33.15 59.66 33.64 48.11 33.14 C 43.23 30.50 39.85 25.57 34.86 23.16 C 28.69 22.83 22.44 22.75 16.28 23.21 Z"
                />
                <path
                  fill="currentColor"
                  opacity="1.00"
                  d=" M 44.00 38.00 C 47.97 37.39 52.03 37.39 56.00 38.00 C 55.92 39.29 56.59 41.49 54.58 41.55 C 51.54 41.80 48.46 41.80 45.42 41.55 C 43.44 41.58 44.08 39.22 44.00 38.00 Z"
                />
                <path
                  fill="currentColor"
                  opacity="1.00"
                  d=" M 44.09 46.20 C 48.00 45.55 52.00 45.55 55.91 46.20 C 55.89 47.48 56.51 49.35 54.82 49.87 C 51.62 50.12 48.38 50.12 45.18 49.87 C 43.49 49.38 44.14 47.46 44.09 46.20 Z"
                />
                <path
                  fill="currentColor"
                  opacity="1.00"
                  d=" M 45.75 54.78 C 48.43 53.68 51.55 54.25 54.36 54.60 C 55.28 58.81 57.19 63.34 55.57 67.60 C 53.14 72.07 45.89 71.65 44.13 66.87 C 43.24 62.82 44.46 58.61 45.75 54.78 M 48.10 63.05 C 48.04 64.57 48.02 66.59 50.00 66.77 C 51.98 66.58 51.95 64.57 51.89 63.06 C 50.63 62.77 49.37 62.77 48.10 63.05 Z"
                />
              </g>
            </svg>
          </NavLink>
        </div>
      </div>

      {/* tab content */}
      <div id="default-tab-content">
        {
          tabOpen == 'activity' && (
            <div
          id="activity"
        >
          <div className="bg-white mt-5 2xl:mt-7">
            <div className="pt-5 px-5 2xl:px-8 2xl:pt-8">
              <div className="flex flex-wrap -mx-4 gap-y-4">
                <div className="w-full md:w-5/12 lg:w-4/12 px-4">
                  <div className="relative group/main">
                    <Dropdown
                      className="dropdown px-2 w-[160px] 2xl:w-[225px]"
                      renderTrigger={() => {
                        return (
                          <button
                            className="w-full md:w-[160px] 2xl:w-[225px] flex items-center justify-between px-3 2xl:px-4 py-[11px] 2xl:py-5 rounded-md bg-white shadow-md text-gray-dark"
                            type="button"
                          >
                            <p className="font-20 font-medium mr-4 ">All</p>
                            <svg
                              className="group-has-[.dropdown]/main:rotate-180 duration-300 size-3 2xl:size[20px] ml-4"
                              viewBox="0 0 16 9"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M15 1L8 8L1 1"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </button>
                        );
                      }}
                    >
                      <Dropdown.Item class="list">All</Dropdown.Item>
                    </Dropdown>
                  </div>
                </div>
                <div className="w-full md:w-7/12 lg:w-8/12 px-4">
                  <div className="flex items-center gap-y-2 flex-wrap sm:flex-none justify-end w-full">
                    <div className="min-w-[300px] flex-1 lg:max-w-[421px] 2xl:max-w-[600px] w-full flex items-center border px-4 2xl:px-6">
                      <svg
                        className="size-5 2xl:size-7 text-gray-light"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                        ></path>
                      </svg>
                      <input
                        type="search"
                        className="default-search-input flex-1"
                        placeholder="Search..."
                      />
                    </div>
                    <div className="flex items-center">
                      <div className="group/main ml-4 flex items-center justify-center">
                        <Dropdown
                          className="dropdown w-[240px] z-10 2xl:w-[300px]"
                          dismissOnClick={false}
                          renderTrigger={() => {
                            return (
                              <button
                                id="filterDropdownButton"
                                data-dropdown-toggle="filterDropdown"
                                className="hover:text-secondary duration-300 group-has-[.dropdown]/main:text-secondary"
                              >
                                <svg
                                  className="icon-size"
                                  viewBox="0 0 32 29"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M14.0547 23.3074H1.05469"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M16.8848 5.42754H29.8848"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M9.7305 5.32803C9.7305 2.93799 7.77585 1 5.36525 1C2.95466 1 1 2.93799 1 5.32803C1 7.71807 2.95466 9.65606 5.36525 9.65606C7.77585 9.65606 9.7305 7.71807 9.7305 5.32803Z"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M30.5557 23.2353C30.5557 20.8452 28.6025 18.9072 26.192 18.9072C23.7799 18.9072 21.8252 20.8452 21.8252 23.2353C21.8252 25.6253 23.7799 27.5633 26.192 27.5633C28.6025 27.5633 30.5557 25.6253 30.5557 23.2353Z"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </button>
                            );
                          }}
                        >
                          <Dropdown.Header>
                          <div className="flex justify-between">
                            <span className="font-24 font-medium text-gray-dark">
                              Filter
                            </span>
                            <span className="font-18 text-gray-light">
                              0 filter selected
                            </span>
                          </div>
                          </Dropdown.Header>
                          <Dropdown.Item class='w-full'>
                          {/* body */}
                          <div className="text-left p-3 space-y-4">
                            <div>
                              <label className="default-label" htmlFor="">
                                Start Date
                              </label>
                              <div className="relative">
                                <input
                                  type="date"
                                  className="default-input"
                                  placeholder="Start Date"
                                />
                                <svg
                                  className="z-20 pointer-events-none absolute top-1/2 -translate-y-1/2 right-4 2xl:right-6 size-4 2xl:size-5"
                                  viewBox="0 0 20 23"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M1.09277 8.78385H18.9167"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M14.442 12.6891H14.4512"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M10.0045 12.6891H10.0137"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M5.55818 12.6891H5.56744"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M14.442 16.5758H14.4512"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M10.0045 16.5758H10.0137"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M5.55818 16.5758H5.56744"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M14.0433 1.37939V4.67017"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M5.96515 1.37939V4.67017"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M14.2383 2.9585H5.77096C2.83427 2.9585 1 4.59443 1 7.60152V16.6512C1 19.7055 2.83427 21.3793 5.77096 21.3793H14.229C17.175 21.3793 19 19.7339 19 16.7268V7.60152C19.0092 4.59443 17.1842 2.9585 14.2383 2.9585Z"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                                <span className="z-10 bg-white pointer-events-none absolute top-1/2 -translate-y-1/2 right-4 2xl:right-6 size-4 2xl:size-5"></span>
                              </div>
                            </div>
                            <div>
                              <label className="default-label" htmlFor="">
                                End Date
                              </label>
                              <div className="relative">
                                <input
                                  type="date"
                                  className="default-input"
                                  placeholder="End Date"
                                />
                                <svg
                                  className="z-20 pointer-events-none absolute top-1/2 -translate-y-1/2 right-4 2xl:right-6 size-4 2xl:size-5"
                                  viewBox="0 0 20 23"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M1.09277 8.78385H18.9167"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M14.442 12.6891H14.4512"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M10.0045 12.6891H10.0137"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M5.55818 12.6891H5.56744"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M14.442 16.5758H14.4512"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M10.0045 16.5758H10.0137"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M5.55818 16.5758H5.56744"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M14.0433 1.37939V4.67017"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M5.96515 1.37939V4.67017"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M14.2383 2.9585H5.77096C2.83427 2.9585 1 4.59443 1 7.60152V16.6512C1 19.7055 2.83427 21.3793 5.77096 21.3793H14.229C17.175 21.3793 19 19.7339 19 16.7268V7.60152C19.0092 4.59443 17.1842 2.9585 14.2383 2.9585Z"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                                <span className="z-10 bg-white pointer-events-none absolute top-1/2 -translate-y-1/2 right-4 2xl:right-6 size-4 2xl:size-5"></span>
                              </div>
                            </div>
                            <label className="flex group/check space-x-3.5 cursor-pointer">
                              <span className="cursor-pointer group-has-[input:checked]/check:bg-default-green group-has-[input:checked]/check:border-default-green flex justify-center items-center checkbox-size border border-gray-light rounded-[5px]">
                                <svg
                                  className="check-icon-size text-white group-has-[input:checked]/check:block hidden"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 448 512"
                                >
                                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
                                </svg>
                                <input
                                  className="border-[1.5px] border-gray-dark hidden"
                                  id=""
                                  name=""
                                  type="checkbox"
                                />
                              </span>
                              <span className="default-label mb-0">
                                Show deleted and voided
                              </span>
                            </label>
                          </div>
                          <div className="px-3 space-y-2 pb-2">
                          <button
                                type="button"
                                className="w-full font-normal flex-1 btn-primary"
                              >
                                Apply
                              </button>
                              <button
                                type="button"
                                className="w-full font-normal text-red1 flex-1 btn-white border border-red1"
                              >
                                Reset
                              </button>
                          </div>
                          </Dropdown.Item>
                        </Dropdown>
                      </div>

                      <div className="group/main ml-4 flex items-center justify-center">
                        {/* column header */}

                        <Dropdown
                          className="dropdown"
                          dismissOnClick={false}
                          renderTrigger={() => {
                            return (
                              <button
                                id="columnDropdownBtn"
                                data-dropdown-toggle="columnDropdown"
                                className="hover:text-secondary duration-300 group-has-[.dropdown]/main:text-secondary"
                              >
                                <svg
                                  className="icon-size"
                                  viewBox="0 0 42 35"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    x="1"
                                    y="1"
                                    width="40"
                                    height="33"
                                    rx="4"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                  />
                                  <line
                                    x1="14"
                                    y1="2"
                                    x2="14"
                                    y2="33"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                  />
                                  <line
                                    x1="28"
                                    y1="2"
                                    x2="28"
                                    y2="33"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                  />
                                </svg>
                              </button>
                            );
                          }}
                        >
                        <Dropdown.Item class=''>
                          <div className="bg-white border border-gray-dark/20 w-[240px] z-10 2xl:w-[300px]">
                            {/* header */}
                            <div className="p-3 border-b flex justify-between">
                              <span className="font-24 font-medium text-gray-dark">
                                Column
                              </span>
                            </div>
                            <div className="">
                              <div className="has-[input:checked]:bg-default-green/10 hover:bg-default-green/10 duration-300 border-b">
                                <label className="p-3 flex group/check space-x-3.5 cursor-pointer">
                                  <span className="cursor-pointer group-has-[input:checked]/check:bg-default-green group-has-[input:checked]/check:border-default-green flex justify-center items-center checkbox-size border border-gray-light rounded-[5px]">
                                    <svg
                                      className="check-icon-size text-white group-has-[input:checked]/check:block hidden"
                                      fill="currentColor"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 448 512"
                                    >
                                      <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
                                    </svg>
                                    <input
                                      className="border-[1.5px] border-gray-dark hidden"
                                      id=""
                                      name=""
                                      type="checkbox"
                                    />
                                  </span>
                                  <span className="default-label mb-0">
                                    Type
                                  </span>
                                </label>
                              </div>
                              <div className="has-[input:checked]:bg-default-green/10 hover:bg-default-green/10 duration-300 border-b">
                                <label className="p-3 flex group/check space-x-3.5 cursor-pointer">
                                  <span className="cursor-pointer group-has-[input:checked]/check:bg-default-green group-has-[input:checked]/check:border-default-green flex justify-center items-center checkbox-size border border-gray-light rounded-[5px]">
                                    <svg
                                      className="check-icon-size text-white group-has-[input:checked]/check:block hidden"
                                      fill="currentColor"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 448 512"
                                    >
                                      <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
                                    </svg>
                                    <input
                                      className="border-[1.5px] border-gray-dark hidden"
                                      id=""
                                      name=""
                                      type="checkbox"
                                    />
                                  </span>
                                  <span className="default-label mb-0">
                                    Number
                                  </span>
                                </label>
                              </div>
                              <div className="has-[input:checked]:bg-default-green/10 hover:bg-default-green/10 duration-300 border-b">
                                <label className="p-3 flex group/check space-x-3.5 cursor-pointer">
                                  <span className="cursor-pointer group-has-[input:checked]/check:bg-default-green group-has-[input:checked]/check:border-default-green flex justify-center items-center checkbox-size border border-gray-light rounded-[5px]">
                                    <svg
                                      className="check-icon-size text-white group-has-[input:checked]/check:block hidden"
                                      fill="currentColor"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 448 512"
                                    >
                                      <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
                                    </svg>
                                    <input
                                      className="border-[1.5px] border-gray-dark hidden"
                                      id=""
                                      name=""
                                      type="checkbox"
                                    />
                                  </span>
                                  <span className="default-label mb-0">
                                    Reference
                                  </span>
                                </label>
                              </div>
                              <div className="has-[input:checked]:bg-default-green/10 hover:bg-default-green/10 duration-300 border-b">
                                <label className="p-3 flex group/check space-x-3.5 cursor-pointer">
                                  <span className="cursor-pointer group-has-[input:checked]/check:bg-default-green group-has-[input:checked]/check:border-default-green flex justify-center items-center checkbox-size border border-gray-light rounded-[5px]">
                                    <svg
                                      className="check-icon-size text-white group-has-[input:checked]/check:block hidden"
                                      fill="currentColor"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 448 512"
                                    >
                                      <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
                                    </svg>
                                    <input
                                      className="border-[1.5px] border-gray-dark hidden"
                                      id=""
                                      name=""
                                      type="checkbox"
                                    />
                                  </span>
                                  <span className="default-label mb-0">
                                    Issue Date
                                  </span>
                                </label>
                              </div>
                              <div className="has-[input:checked]:bg-default-green/10 hover:bg-default-green/10 duration-300 border-b">
                                <label className="p-3 flex group/check space-x-3.5 cursor-pointer">
                                  <span className="cursor-pointer group-has-[input:checked]/check:bg-default-green group-has-[input:checked]/check:border-default-green flex justify-center items-center checkbox-size border border-gray-light rounded-[5px]">
                                    <svg
                                      className="check-icon-size text-white group-has-[input:checked]/check:block hidden"
                                      fill="currentColor"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 448 512"
                                    >
                                      <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
                                    </svg>
                                    <input
                                      className="border-[1.5px] border-gray-dark hidden"
                                      id=""
                                      name=""
                                      type="checkbox"
                                    />
                                  </span>
                                  <span className="default-label mb-0">
                                    Paid Date
                                  </span>
                                </label>
                              </div>
                              <div className="space-y-3 p-3">
                                <button
                                  type="button"
                                  className="w-full font-normal flex-1 btn-primary"
                                >
                                  Apply
                                </button>
                                <button
                                  type="button"
                                  className="w-full font-normal text-red1 flex-1 btn-white border border-red1"
                                >
                                  Reset
                                </button>
                              </div>
                            </div>
                          </div>
                        </Dropdown.Item>
                        </Dropdown>

                        {/* column dropdown  */}
                      </div>
                      <div className="group/main relative ml-4 flex items-center justify-center">
                        {/* report header */}
                        <Dropdown
                        className="dropdown w-[200px] z-10 2xl:w-[300px] px-2"
                          renderTrigger={() => {
                            return (
                              <button className="hover:text-secondary duration-300 group-has-[.dropdown]/main:text-secondary">
                                <svg
                                  className="icon-size"
                                  viewBox="0 0 29 36"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M20.0525 25.0186H8.72266C8.39114 25.0186 8.07319 25.1503 7.83877 25.3847C7.60435 25.6191 7.47266 25.937 7.47266 26.2686C7.47266 26.6001 7.60435 26.918 7.83877 27.1524C8.07319 27.3869 8.39114 27.5186 8.72266 27.5186H20.0525C20.384 27.5186 20.702 27.3869 20.9364 27.1524C21.1708 26.918 21.3025 26.6001 21.3025 26.2686C21.3025 25.937 21.1708 25.6191 20.9364 25.3847C20.702 25.1503 20.384 25.0186 20.0525 25.0186Z"
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M20.0525 18.9717H8.72266C8.39114 18.9717 8.07319 19.1034 7.83877 19.3378C7.60435 19.5722 7.47266 19.8902 7.47266 20.2217C7.47266 20.5532 7.60435 20.8711 7.83877 21.1056C8.07319 21.34 8.39114 21.4717 8.72266 21.4717H20.0525C20.384 21.4717 20.702 21.34 20.9364 21.1056C21.1708 20.8711 21.3025 20.5532 21.3025 20.2217C21.3025 19.8902 21.1708 19.5722 20.9364 19.3378C20.702 19.1034 20.384 18.9717 20.0525 18.9717Z"
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M20.0524 12.9243H15.7295C15.398 12.9243 15.08 13.056 14.8456 13.2904C14.6112 13.5249 14.4795 13.8428 14.4795 14.1743C14.4795 14.5058 14.6112 14.8238 14.8456 15.0582C15.08 15.2926 15.398 15.4243 15.7295 15.4243H20.0524C20.3839 15.4243 20.7019 15.2926 20.9363 15.0582C21.1707 14.8238 21.3024 14.5058 21.3024 14.1743C21.3024 13.8428 21.1707 13.5249 20.9363 13.2904C20.7019 13.056 20.3839 12.9243 20.0524 12.9243Z"
                                    fill="currentColor"
                                  />

                                  <path
                                    d="M22.0327 4.73248C22.0124 4.21414 21.7929 3.72361 21.42 3.36307C21.047 3.00253 20.5493 2.79979 20.0306 2.79707H18.0693C17.894 2.13509 17.5528 1.52872 17.0781 1.03518C16.7283 0.693597 16.3132 0.426024 15.8577 0.248447C15.4021 0.0708705 14.9155 -0.0130671 14.4267 0.00164834C13.574 -0.0202852 12.7383 0.242679 12.0518 0.748955C11.3652 1.25523 10.8671 1.97593 10.636 2.79707H8.66991C8.15153 2.79989 7.6542 3.00246 7.28137 3.36264C6.90855 3.72282 6.68895 4.21287 6.66825 4.73085C4.70977 5.02209 2.93474 6.04559 1.70154 7.59468C0.468345 9.14378 -0.131155 11.1031 0.0240801 13.077V26.4852C-0.053834 27.6071 0.106469 28.7327 0.494459 29.7882C0.88245 30.8438 1.48935 31.8053 2.2753 32.6096C3.06125 33.4139 4.00846 34.0428 5.05473 34.4551C6.101 34.8674 7.22265 35.0536 8.34601 35.0017L20.4196 34.9968C21.5371 35.0392 22.6511 34.846 23.6892 34.4298C24.7272 34.0136 25.6661 33.3837 26.4448 32.581C27.2235 31.7783 27.8246 30.8207 28.2091 29.7705C28.5935 28.7203 28.7528 27.601 28.6764 26.4852V13.077C28.8161 11.1066 28.2109 9.15557 26.9805 7.6102C25.7502 6.06483 23.9844 5.03781 22.0327 4.73248ZM9.15005 5.29707H11.6452C11.9598 5.29433 12.262 5.17423 12.4926 4.96032C12.7232 4.74641 12.8656 4.45409 12.8919 4.14065C12.8819 3.72081 13.0371 3.31383 13.3242 3.0073C13.6112 2.70076 14.0072 2.51919 14.4267 2.50165C14.6184 2.50499 14.8073 2.54873 14.9809 2.63002C15.1546 2.71131 15.3091 2.82832 15.4344 2.9734C15.5598 3.11848 15.6531 3.28837 15.7083 3.47197C15.7635 3.65558 15.7794 3.84876 15.7549 4.03892C15.7537 4.20379 15.7851 4.36727 15.8474 4.51993C15.9097 4.67258 16.0016 4.8114 16.1178 4.92836C16.234 5.04533 16.3722 5.13813 16.5245 5.20141C16.6767 5.26469 16.84 5.2972 17.0049 5.29707H19.5504V6.7554C19.5515 6.84114 19.5185 6.9238 19.4587 6.98527C19.3989 7.04673 19.3172 7.082 19.2314 7.08335H9.46906C9.38332 7.082 9.30161 7.04673 9.24182 6.98527C9.18202 6.9238 9.14902 6.84114 9.15005 6.7554V5.29707ZM26.1764 26.4852C26.2621 27.2744 26.174 28.0728 25.9181 28.8243C25.6623 29.5758 25.245 30.2622 24.6955 30.8351C24.1461 31.4081 23.4778 31.8538 22.7377 32.1408C21.9975 32.4279 21.2035 32.5494 20.4114 32.4968L8.34601 32.5017C7.54906 32.5624 6.74852 32.4467 6.00131 32.163C5.2541 31.8793 4.57858 31.4344 4.02277 30.8601C3.46697 30.2857 3.04454 29.5959 2.78551 28.8398C2.52648 28.0837 2.43722 27.2797 2.52408 26.4852V13.077C2.39691 11.7663 2.7505 10.454 3.51898 9.38456C4.28747 8.31515 5.41846 7.56151 6.70131 7.26402C6.81886 7.91313 7.16008 8.50057 7.6657 8.92426C8.17132 9.34796 8.80939 9.58115 9.46906 9.58332H19.2314C19.8938 9.58102 20.5343 9.34571 21.0407 8.91861C21.547 8.4915 21.8869 7.89985 22.0008 7.2473C23.287 7.5445 24.4206 8.30053 25.1893 9.37371C25.958 10.4469 26.309 11.7636 26.1764 13.077V26.4852Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </button>
                            );
                          }}
                        >
                          {/* report body */}
                          <Dropdown.Header className="px-2">
                            Report
                          </Dropdown.Header>
                          <Dropdown.Item class="list-with-icon">
                          <svg
                                  className="duration-300 size-4 2xl:size-6"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g clipPath="url(#clip0_70_2072)">
                                    <path
                                      d="M13.6148 2.7658C13.6149 2.86429 13.6345 2.96178 13.6723 3.05271C13.7102 3.14363 13.7656 3.22621 13.8353 3.29573C13.9051 3.36524 13.9879 3.42032 14.0789 3.45783C14.17 3.49535 14.2676 3.51455 14.3661 3.51434L19.437 3.503L11.5045 11.4355C11.364 11.5761 11.2851 11.7669 11.2852 11.9657C11.2852 12.1645 11.3642 12.3552 11.5048 12.4958C11.6454 12.6364 11.8361 12.7154 12.0349 12.7155C12.2338 12.7156 12.4245 12.6367 12.5652 12.4961L20.4968 4.56452L20.4801 10.1478C20.4799 10.2463 20.4991 10.3438 20.5366 10.4349C20.5742 10.5259 20.6292 10.6087 20.6988 10.6785C20.7683 10.7482 20.8508 10.8036 20.9417 10.8415C21.0327 10.8793 21.1301 10.8989 21.2286 10.8991C21.3271 10.8993 21.4247 10.8801 21.5157 10.8426C21.6068 10.805 21.6895 10.7499 21.7593 10.6804C21.8291 10.6109 21.8845 10.5284 21.9223 10.4374C21.9602 10.3465 21.9797 10.2491 21.9799 10.1506L22.0006 2.7513L22.0005 2.75061C22.0005 2.65205 21.9811 2.55444 21.9434 2.46337C21.9058 2.3723 21.8505 2.28955 21.7808 2.21986C21.7111 2.15017 21.6283 2.09489 21.5373 2.05719C21.4462 2.0195 21.3486 2.00012 21.25 2.00017L21.2493 2L14.3633 2.0145C14.2649 2.01465 14.1674 2.03421 14.0764 2.07205C13.9855 2.10989 13.9029 2.16528 13.8334 2.23505C13.7639 2.30482 13.7088 2.38761 13.6713 2.47867C13.6338 2.56974 13.6146 2.66731 13.6148 2.7658Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M21.25 13.2691C21.0511 13.2691 20.8603 13.3481 20.7197 13.4888C20.579 13.6294 20.5 13.8202 20.5 14.0191V16.084C20.5 18.7666 18.8643 20.5 16.333 20.5H7.665C5.13473 20.5 3.5 18.7666 3.5 16.084V7.916C3.5 5.23341 5.13477 3.5 7.665 3.5H10.2854C10.4843 3.5 10.6751 3.42098 10.8157 3.28033C10.9564 3.13968 11.0354 2.94891 11.0354 2.75C11.0354 2.55109 10.9564 2.36032 10.8157 2.21967C10.6751 2.07902 10.4843 2 10.2854 2H7.665C4.27637 2 2 4.37745 2 7.916V16.084C2 19.6226 4.27637 22 7.665 22H16.333C19.7227 22 22 19.6226 22 16.084V14.0191C22 13.8202 21.921 13.6294 21.7803 13.4888C21.6397 13.3481 21.4489 13.2691 21.25 13.2691Z"
                                      fill="currentColor"
                                    />
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_70_2072">
                                      <rect
                                        width="24"
                                        height="24"
                                        fill="white"
                                      />
                                    </clipPath>
                                  </defs>
                                </svg>
                                <span>Invoices approved</span>
                          </Dropdown.Item>
                          <Dropdown.Item class="list-with-icon">
                          <svg
                                  className="duration-300 size-4 2xl:size-6"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g clipPath="url(#clip0_70_2072)">
                                    <path
                                      d="M13.6148 2.7658C13.6149 2.86429 13.6345 2.96178 13.6723 3.05271C13.7102 3.14363 13.7656 3.22621 13.8353 3.29573C13.9051 3.36524 13.9879 3.42032 14.0789 3.45783C14.17 3.49535 14.2676 3.51455 14.3661 3.51434L19.437 3.503L11.5045 11.4355C11.364 11.5761 11.2851 11.7669 11.2852 11.9657C11.2852 12.1645 11.3642 12.3552 11.5048 12.4958C11.6454 12.6364 11.8361 12.7154 12.0349 12.7155C12.2338 12.7156 12.4245 12.6367 12.5652 12.4961L20.4968 4.56452L20.4801 10.1478C20.4799 10.2463 20.4991 10.3438 20.5366 10.4349C20.5742 10.5259 20.6292 10.6087 20.6988 10.6785C20.7683 10.7482 20.8508 10.8036 20.9417 10.8415C21.0327 10.8793 21.1301 10.8989 21.2286 10.8991C21.3271 10.8993 21.4247 10.8801 21.5157 10.8426C21.6068 10.805 21.6895 10.7499 21.7593 10.6804C21.8291 10.6109 21.8845 10.5284 21.9223 10.4374C21.9602 10.3465 21.9797 10.2491 21.9799 10.1506L22.0006 2.7513L22.0005 2.75061C22.0005 2.65205 21.9811 2.55444 21.9434 2.46337C21.9058 2.3723 21.8505 2.28955 21.7808 2.21986C21.7111 2.15017 21.6283 2.09489 21.5373 2.05719C21.4462 2.0195 21.3486 2.00012 21.25 2.00017L21.2493 2L14.3633 2.0145C14.2649 2.01465 14.1674 2.03421 14.0764 2.07205C13.9855 2.10989 13.9029 2.16528 13.8334 2.23505C13.7639 2.30482 13.7088 2.38761 13.6713 2.47867C13.6338 2.56974 13.6146 2.66731 13.6148 2.7658Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M21.25 13.2691C21.0511 13.2691 20.8603 13.3481 20.7197 13.4888C20.579 13.6294 20.5 13.8202 20.5 14.0191V16.084C20.5 18.7666 18.8643 20.5 16.333 20.5H7.665C5.13473 20.5 3.5 18.7666 3.5 16.084V7.916C3.5 5.23341 5.13477 3.5 7.665 3.5H10.2854C10.4843 3.5 10.6751 3.42098 10.8157 3.28033C10.9564 3.13968 11.0354 2.94891 11.0354 2.75C11.0354 2.55109 10.9564 2.36032 10.8157 2.21967C10.6751 2.07902 10.4843 2 10.2854 2H7.665C4.27637 2 2 4.37745 2 7.916V16.084C2 19.6226 4.27637 22 7.665 22H16.333C19.7227 22 22 19.6226 22 16.084V14.0191C22 13.8202 21.921 13.6294 21.7803 13.4888C21.6397 13.3481 21.4489 13.2691 21.25 13.2691Z"
                                      fill="currentColor"
                                    />
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_70_2072">
                                      <rect
                                        width="24"
                                        height="24"
                                        fill="white"
                                      />
                                    </clipPath>
                                  </defs>
                                </svg>
                                <span>Sent and paid</span>
                          </Dropdown.Item>
                          <Dropdown.Item class="list-with-icon">
                          <svg
                                  className="duration-300 size-4 2xl:size-6"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g clipPath="url(#clip0_70_2072)">
                                    <path
                                      d="M13.6148 2.7658C13.6149 2.86429 13.6345 2.96178 13.6723 3.05271C13.7102 3.14363 13.7656 3.22621 13.8353 3.29573C13.9051 3.36524 13.9879 3.42032 14.0789 3.45783C14.17 3.49535 14.2676 3.51455 14.3661 3.51434L19.437 3.503L11.5045 11.4355C11.364 11.5761 11.2851 11.7669 11.2852 11.9657C11.2852 12.1645 11.3642 12.3552 11.5048 12.4958C11.6454 12.6364 11.8361 12.7154 12.0349 12.7155C12.2338 12.7156 12.4245 12.6367 12.5652 12.4961L20.4968 4.56452L20.4801 10.1478C20.4799 10.2463 20.4991 10.3438 20.5366 10.4349C20.5742 10.5259 20.6292 10.6087 20.6988 10.6785C20.7683 10.7482 20.8508 10.8036 20.9417 10.8415C21.0327 10.8793 21.1301 10.8989 21.2286 10.8991C21.3271 10.8993 21.4247 10.8801 21.5157 10.8426C21.6068 10.805 21.6895 10.7499 21.7593 10.6804C21.8291 10.6109 21.8845 10.5284 21.9223 10.4374C21.9602 10.3465 21.9797 10.2491 21.9799 10.1506L22.0006 2.7513L22.0005 2.75061C22.0005 2.65205 21.9811 2.55444 21.9434 2.46337C21.9058 2.3723 21.8505 2.28955 21.7808 2.21986C21.7111 2.15017 21.6283 2.09489 21.5373 2.05719C21.4462 2.0195 21.3486 2.00012 21.25 2.00017L21.2493 2L14.3633 2.0145C14.2649 2.01465 14.1674 2.03421 14.0764 2.07205C13.9855 2.10989 13.9029 2.16528 13.8334 2.23505C13.7639 2.30482 13.7088 2.38761 13.6713 2.47867C13.6338 2.56974 13.6146 2.66731 13.6148 2.7658Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M21.25 13.2691C21.0511 13.2691 20.8603 13.3481 20.7197 13.4888C20.579 13.6294 20.5 13.8202 20.5 14.0191V16.084C20.5 18.7666 18.8643 20.5 16.333 20.5H7.665C5.13473 20.5 3.5 18.7666 3.5 16.084V7.916C3.5 5.23341 5.13477 3.5 7.665 3.5H10.2854C10.4843 3.5 10.6751 3.42098 10.8157 3.28033C10.9564 3.13968 11.0354 2.94891 11.0354 2.75C11.0354 2.55109 10.9564 2.36032 10.8157 2.21967C10.6751 2.07902 10.4843 2 10.2854 2H7.665C4.27637 2 2 4.37745 2 7.916V16.084C2 19.6226 4.27637 22 7.665 22H16.333C19.7227 22 22 19.6226 22 16.084V14.0191C22 13.8202 21.921 13.6294 21.7803 13.4888C21.6397 13.3481 21.4489 13.2691 21.25 13.2691Z"
                                      fill="currentColor"
                                    />
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_70_2072">
                                      <rect
                                        width="24"
                                        height="24"
                                        fill="white"
                                      />
                                    </clipPath>
                                  </defs>
                                </svg>
                                <span>Customer invoice activity</span>
                          </Dropdown.Item>
                        </Dropdown>
                      </div>

                      <div className="group/main ml-1 relative flex items-center justify-center">
                        {/* menu header */}
                        <Dropdown className="dropdown px-2 w-[160px]" renderTrigger={()=>{
                          return <button
                          className="hover:text-secondary duration-300 group-has-[.dropdown]/main:text-secondary"
                        >
                          <svg
                            className="size-6 2xl:size-7"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                            ></path>
                          </svg>
                        </button>
                        }}>
                            <Dropdown.Item class="list-with-icon">
                              <svg
                                  className="duration-300 size-4 2xl:size-6"
                                  viewBox="0 0 18 19"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M15.75 7.5C16.9805 7.5 18 8.51953 18 9.75V13.6875C18 14.0039 17.7188 14.25 17.4375 14.25H15.75V17.625C15.75 18.2578 15.2227 18.75 14.625 18.75H3.375C2.74219 18.75 2.25 18.2578 2.25 17.625V14.25H0.5625C0.246094 14.25 0 14.0039 0 13.6875V9.75C0 8.51953 0.984375 7.5 2.25 7.5V1.875C2.25 1.27734 2.74219 0.75 3.375 0.75H13.0078C13.3242 0.75 13.6055 0.890625 13.8164 1.10156L15.3984 2.68359C15.6094 2.89453 15.75 3.17578 15.75 3.49219V7.5ZM13.5 16.5V13.125H4.5V16.5H13.5ZM13.5 8.625V5.25H11.8125C11.4961 5.25 11.25 5.00391 11.25 4.6875V3H4.5V8.625H13.5ZM15.1875 11.1562C15.6445 11.1562 16.0312 10.8047 16.0312 10.3125C16.0312 9.85547 15.6445 9.46875 15.1875 9.46875C14.6953 9.46875 14.3438 9.85547 14.3438 10.3125C14.3438 10.8047 14.6953 11.1562 15.1875 11.1562Z"
                                    fill="currentColor"
                                  />
                                </svg>
                                <span>Print</span>
                            </Dropdown.Item>
                            <Dropdown.Item class="list-with-icon">
                            <svg
                                className="duration-300 size-4 2xl:size-6"
                                viewBox="0 0 20 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <mask
                                  id="path-1-inside-1_775_10867"
                                  fill="white"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M15.9033 6.35156L11.46 9.9646C10.6205 10.6306 9.43942 10.6306 8.59992 9.9646L4.11914 6.35156"
                                  />
                                </mask>
                                <path
                                  d="M16.8497 7.51537C17.4924 6.99272 17.5898 6.04797 17.0671 5.40522C16.5445 4.76247 15.5997 4.66511 14.957 5.18776L16.8497 7.51537ZM11.46 9.9646L12.3923 11.1397C12.397 11.136 12.4017 11.1322 12.4064 11.1284L11.46 9.9646ZM8.59992 9.9646L7.65834 11.1323L7.66766 11.1397L8.59992 9.9646ZM5.06069 5.18388C4.4158 4.66388 3.47146 4.76512 2.95146 5.41001C2.43145 6.05491 2.5327 6.99924 3.17759 7.51925L5.06069 5.18388ZM14.957 5.18776L10.5137 8.8008L12.4064 11.1284L16.8497 7.51537L14.957 5.18776ZM10.5278 8.78949C10.2343 9.02231 9.82565 9.02231 9.53218 8.78949L7.66766 11.1397C9.05319 12.2389 11.0068 12.2389 12.3923 11.1397L10.5278 8.78949ZM9.54147 8.79692L5.06069 5.18388L3.17759 7.51925L7.65837 11.1323L9.54147 8.79692Z"
                                  fill="currentColor"
                                  mask="url(#path-1-inside-1_775_10867)"
                                />
                                <path
                                  d="M14.9109 17.75H14.9089L5.09114 17.75L5.08906 17.75C2.5475 17.757 0.75 15.6847 0.75 12.9384V6.07001C0.75 3.3243 2.54749 1.25 5.09114 1.25H14.9089C17.4525 1.25 19.25 3.3243 19.25 6.07001V12.9384C19.25 15.6847 17.4525 17.757 14.9109 17.75Z"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                              <span>Email</span>
                            </Dropdown.Item>
                            <Dropdown.Item class="list-with-icon">
                            <svg
                                className="duration-300 size-4 2xl:size-6"
                                viewBox="0 0 18 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M0 9.5C0 11.28 0.527841 13.0201 1.51677 14.5001C2.50571 15.9802 3.91131 17.1337 5.55585 17.8149C7.20038 18.4961 9.00998 18.6743 10.7558 18.3271C12.5016 17.9798 14.1053 17.1226 15.364 15.864C16.6226 14.6053 17.4798 13.0016 17.8271 11.2558C18.1743 9.50998 17.9961 7.70038 17.3149 6.05585C16.6337 4.41131 15.4802 3.00571 14.0001 2.01677C12.5201 1.02784 10.78 0.5 9 0.5C6.61389 0.502729 4.32629 1.45182 2.63905 3.13905C0.951817 4.82629 0.00272979 7.11389 0 9.5ZM9 17.15C7.62805 17.1523 6.28081 16.785 5.09987 16.0867C3.91894 15.3884 2.94792 14.3848 2.28886 13.1816C1.62981 11.9783 1.30707 10.6197 1.35455 9.24854C1.40203 7.87741 1.81799 6.54438 2.5587 5.38957L14.9532 14.2933C14.2379 15.1846 13.3317 15.904 12.3014 16.3984C11.271 16.8929 10.1428 17.1497 9 17.15ZM16.65 9.5C16.6511 10.7841 16.3269 12.0476 15.7075 13.1725L3.38593 4.32126C4.42727 3.18758 5.78683 2.39497 7.28641 2.04733C8.786 1.6997 10.3556 1.81324 11.7896 2.3731C13.2235 2.93296 14.4548 3.913 15.3221 5.18475C16.1895 6.45651 16.6523 7.96064 16.65 9.5Z"
                                  fill="currentColor"
                                />
                              </svg>
                              <span>Void</span>
                            </Dropdown.Item>
                            <Dropdown.Item class="list-with-icon">
                            <svg
                                className="duration-300 size-4 2xl:size-6"
                                viewBox="0 0 19 22"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M18.7669 6.11135L13.1222 0.26823C13.0442 0.187501 12.9506 0.123275 12.847 0.0794114C12.7434 0.0355478 12.632 0.0129516 12.5194 0.0129803H12.2924C12.27 0.0111529 12.2507 0 12.2278 0C12.2049 0 12.1856 0.0111529 12.1632 0.0129803H5.11153C3.77385 0.00306355 2.48636 0.518728 1.52926 1.44775C0.572156 2.37678 0.0229057 3.64397 0.00103904 4.97355V16.8469C-0.0261576 18.1845 0.481491 19.4783 1.41262 20.4443C2.34376 21.4104 3.62234 21.9698 4.96791 22H5.10829L14.0378 21.9995C15.3762 21.9589 16.6452 21.3985 17.5728 20.4386C18.5005 19.4787 19.0127 18.1957 18.9998 16.8648V6.68674C18.9999 6.47223 18.9164 6.26601 18.7669 6.11135ZM16.4132 6.0735H15.0921C14.5539 6.07112 14.0386 5.85723 13.6585 5.47851C13.2785 5.09979 13.0645 4.587 13.0634 4.05206V2.60622L16.4132 6.0735ZM14.0084 20.3387H5.00381C4.55554 20.3282 4.11374 20.2301 3.70365 20.0498C3.29357 19.8695 2.92325 19.6106 2.61385 19.288C2.30446 18.9654 2.06205 18.5853 1.90048 18.1695C1.73892 17.7537 1.66137 17.3104 1.67226 16.8648V4.99356C1.6984 4.10715 2.06993 3.26549 2.70846 2.6462C3.34699 2.0269 4.20257 1.67841 5.09466 1.67426H11.3922V4.05209C11.394 5.02704 11.784 5.96163 12.4768 6.65168C13.1697 7.34173 14.1091 7.73113 15.0899 7.73481H17.3285V16.8696C17.3394 17.764 16.9983 18.6272 16.3781 19.2753C15.7579 19.9233 14.9076 20.3049 14.0084 20.3387Z"
                                  fill="currentColor"
                                />
                                <path
                                  d="M9.95551 12.0654L8.89301 13.1325V8.90918C8.89301 8.71027 8.81399 8.5195 8.67334 8.37885C8.53269 8.2382 8.34192 8.15918 8.14301 8.15918C7.9441 8.15918 7.75333 8.2382 7.61268 8.37885C7.47203 8.5195 7.39301 8.71027 7.39301 8.90918V13.1346L6.32805 12.0654C6.25854 11.9957 6.17597 11.9403 6.08505 11.9024C5.99414 11.8646 5.89666 11.845 5.79818 11.8448C5.6997 11.8446 5.60214 11.8638 5.51109 11.9014C5.42004 11.9389 5.33726 11.994 5.2675 12.0635C5.19773 12.133 5.14234 12.2156 5.10449 12.3065C5.06663 12.3974 5.04706 12.4949 5.04688 12.5934C5.0467 12.6918 5.06591 12.7894 5.10343 12.8804C5.14095 12.9715 5.19604 13.0543 5.26555 13.124L7.61076 15.479L7.61253 15.4802C7.71601 15.5956 7.86095 15.6655 8.01573 15.6745C8.05728 15.6869 8.09987 15.6955 8.14299 15.7002C8.23945 15.6997 8.33488 15.6804 8.42399 15.6435L8.42984 15.6423C8.52229 15.6039 8.60611 15.5473 8.67637 15.476L11.018 13.1241C11.1584 12.9832 11.2371 12.7923 11.2367 12.5934C11.2363 12.3945 11.157 12.2039 11.0161 12.0635C10.8752 11.9231 10.6843 11.8445 10.4854 11.8448C10.2865 11.8452 10.0959 11.9246 9.95554 12.0654L9.95551 12.0654Z"
                                  fill="currentColor"
                                />
                              </svg>
                              <span>Download</span>
                            </Dropdown.Item>
                            <Dropdown.Item class="list-with-icon">
                            <svg
                                className="duration-300 size-4 2xl:size-6"
                                width="100pt"
                                height="100pt"
                                viewBox="0 0 100 100"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g id="currentColorff">
                                  <path
                                    fill="currentColor"
                                    opacity="1.00"
                                    d=" M 14.33 17.34 C 18.10 16.14 22.12 16.83 26.01 16.67 C 29.88 16.79 33.91 16.19 37.63 17.48 C 42.44 19.67 45.67 24.17 50.13 26.86 C 61.07 27.40 72.05 26.76 83.00 27.16 C 87.84 27.43 92.01 32.11 91.69 36.96 C 91.63 49.29 91.70 61.62 91.66 73.95 C 91.75 79.01 87.08 83.53 82.02 83.31 C 61.01 83.38 40.00 83.30 18.99 83.34 C 13.60 83.95 8.22 79.46 8.34 73.96 C 8.33 57.99 8.32 42.02 8.35 26.05 C 8.27 22.28 10.87 18.71 14.33 17.34 M 16.28 23.21 C 14.36 24.00 14.74 26.32 14.62 27.98 C 14.64 42.66 14.64 57.34 14.61 72.01 C 14.74 73.67 14.37 76.00 16.29 76.78 C 19.17 77.24 22.10 77.01 25.00 77.05 C 43.01 77.05 61.02 77.03 79.03 77.07 C 80.59 77.04 82.17 77.08 83.71 76.77 C 85.65 76.03 85.24 73.65 85.38 72.02 C 85.33 60.34 85.43 48.65 85.34 36.97 C 85.34 35.50 84.62 33.28 82.83 33.35 C 71.26 33.15 59.66 33.64 48.11 33.14 C 43.23 30.50 39.85 25.57 34.86 23.16 C 28.69 22.83 22.44 22.75 16.28 23.21 Z"
                                  ></path>
                                  <path
                                    fill="currentColor"
                                    opacity="1.00"
                                    d=" M 44.00 38.00 C 47.97 37.39 52.03 37.39 56.00 38.00 C 55.92 39.29 56.59 41.49 54.58 41.55 C 51.54 41.80 48.46 41.80 45.42 41.55 C 43.44 41.58 44.08 39.22 44.00 38.00 Z"
                                  ></path>
                                  <path
                                    fill="currentColor"
                                    opacity="1.00"
                                    d=" M 44.09 46.20 C 48.00 45.55 52.00 45.55 55.91 46.20 C 55.89 47.48 56.51 49.35 54.82 49.87 C 51.62 50.12 48.38 50.12 45.18 49.87 C 43.49 49.38 44.14 47.46 44.09 46.20 Z"
                                  ></path>
                                  <path
                                    fill="currentColor"
                                    opacity="1.00"
                                    d=" M 45.75 54.78 C 48.43 53.68 51.55 54.25 54.36 54.60 C 55.28 58.81 57.19 63.34 55.57 67.60 C 53.14 72.07 45.89 71.65 44.13 66.87 C 43.24 62.82 44.46 58.61 45.75 54.78 M 48.10 63.05 C 48.04 64.57 48.02 66.59 50.00 66.77 C 51.98 66.58 51.95 64.57 51.89 63.06 C 50.63 62.77 49.37 62.77 48.10 63.05 Z"
                                  ></path>
                                </g>
                              </svg>
                              <span>Archive</span>
                            </Dropdown.Item>
                        </Dropdown>
                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-5 2xl:px-8 py-5 2xl:py-8">
              <div className="overflow-x-scroll">
                <table className="w-full border-separate border-spacing-y-0">
                  <thead className="whitespace-nowrap">
                    <tr className="capitalize [&>*:first-child]:border-l [&>*:last-child]:border-r *:border-t *:border-b">
                      <th className="px-5 py-5 2xl:px-7 2xl:py-7 font-thin">
                        <div className="flex items-center space-x-3 2xl:space-x-5">
                          <label className="flex group/check">
                            <span className="all-check cursor-pointer group-has-[input:checked]/check:bg-default-green group-has-[input:checked]/check:border-default-green flex justify-center items-center checkbox-size border border-gray-light rounded-[5px]">
                              <svg
                                className="check-icon-size text-white group-has-[input:checked]/check:block hidden"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                              >
                                <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                              </svg>
                              <input
                                className="border-[1.5px] border-gray-dark hidden"
                                id=""
                                name=""
                                type="checkbox"
                              />
                            </span>
                          </label>
                          <label
                            htmlFor="contact"
                            className="font-20 font-medium text-gray-dark"
                          >
                            Type
                          </label>
                        </div>
                      </th>
                      <th className="px-5 py-5 2xl:px-7 2xl:py-7">
                        <div className="flex items-center text-gray-dark font-medium font-20">
                          number
                        </div>
                      </th>
                      <th className="px-5 py-5 2xl:px-7 2xl:py-7">
                        <div className="flex items-center text-gray-dark font-medium font-20">
                          reference
                        </div>
                      </th>
                      <th className="px-5 py-5 2xl:px-7 2xl:py-7">
                        <div className="flex items-center text-gray-dark font-medium font-20">
                          issue date
                        </div>
                      </th>
                      <th className="px-5 py-5 2xl:px-7 2xl:py-7">
                        <div className="flex items-center text-gray-dark font-medium font-20">
                          paid date
                        </div>
                      </th>
                      <th className="px-5 py-5 2xl:px-7 2xl:py-7">
                        <div className="flex items-center text-gray-dark font-medium font-20">
                          Amount due
                        </div>
                      </th>
                      <th className="px-5 py-5 2xl:px-7 2xl:py-7">
                        <div className="flex items-center text-gray-dark font-medium font-20">
                          total
                        </div>
                      </th>
                      <th className="px-5 py-5 2xl:px-7 2xl:py-7">
                        <div className="flex items-center text-gray-dark font-medium font-20">
                          status
                        </div>
                      </th>
                      <th className="px-5 py-5 2xl:px-7 2xl:py-7"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="table-row table-row-css">
                      <td className="px-5 py-5 2xl:px-7 2xl:py-7">
                        <div className="group/check flex space-x-3 2xl:space-x-5">
                          <label className="flex">
                            <span className="sub-check cursor-pointer group-has-[input:checked]/check:bg-default-green group-has-[input:checked]/check:border-default-green flex justify-center items-center checkbox-size border border-gray-light rounded-[5px]">
                              <svg
                                className="check-icon-size text-white group-has-[input:checked]/check:block hidden"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                              >
                                <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                              </svg>
                              <input
                                className="border-[1.5px] border-gray-dark hidden"
                                id=""
                                name=""
                                type="checkbox"
                              />
                            </span>
                          </label>
                          <div className="flex items-center space-x-2">
                            <svg
                              className="group-has-[input:checked]/check:text-default-green size-[12px] 2xl:size-5 text-gray-light"
                              viewBox="0 0 14 19"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M6.36328 9.28516C6.1875 8.72266 6.22266 7.63281 6.29297 7.63281C6.60938 7.63281 6.57422 8.93359 6.36328 9.28516ZM6.32812 10.9375C6.64453 11.5352 7.10156 12.0273 7.52344 12.3789C6.67969 12.5195 5.97656 12.8711 5.30859 13.1172C5.69531 12.4492 6.04688 11.6406 6.32812 10.9375ZM3.02344 15.332C3.19922 14.7695 4.00781 14.1367 4.25391 13.8906C3.48047 15.1211 3.02344 15.332 3.02344 15.332ZM8.71875 5.875H13.5V17.4062C13.5 17.8984 13.1133 18.25 12.6562 18.25H0.84375C0.351562 18.25 0 17.8984 0 17.4062V1.09375C0 0.636719 0.351562 0.25 0.84375 0.25H7.875V5.03125C7.875 5.52344 8.22656 5.875 8.71875 5.875ZM8.4375 11.9219C7.73438 11.5 7.24219 10.9023 6.92578 10.0234C7.06641 9.39062 7.3125 8.40625 7.13672 7.77344C6.96094 6.75391 5.66016 6.85938 5.44922 7.52734C5.27344 8.19531 5.44922 9.10938 5.73047 10.2344C5.34375 11.2188 4.74609 12.5195 4.32422 13.2578C4.28906 13.2578 4.28906 13.2578 4.28906 13.2578C3.33984 13.75 1.72266 14.8398 2.39062 15.6484C2.56641 15.8945 2.95312 16 3.12891 16C3.76172 16 4.39453 15.3672 5.27344 13.8555C6.1875 13.5391 7.20703 13.1523 8.05078 13.0117C8.82422 13.4336 9.73828 13.7148 10.3008 13.7148C11.3555 13.7148 11.4258 12.5898 11.0039 12.168C10.5117 11.7109 9.10547 11.8516 8.4375 11.9219ZM13.2539 3.94141C13.3945 4.11719 13.5 4.32812 13.5 4.53906V4.75H9V0.25H9.21094C9.42188 0.25 9.63281 0.355469 9.80859 0.496094L13.2539 3.94141ZM10.6172 12.9414C10.6172 12.9414 10.4414 13.1875 9.14062 12.625C10.5469 12.5195 10.793 12.8359 10.6172 12.9414Z"
                                fill="currentColor"
                              />
                            </svg>
                            <p className="text-gray-light font-18 group-[.active]:text-default-green name">
                              Invoice
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-5 2xl:px-7 2xl:py-7">
                        <p className="text-gray-light font-18 group-[.active]:text-default-green name">
                          lw-000076543
                        </p>
                      </td>
                      <td className="px-5 py-5 2xl:px-7 2xl:py-7">
                        <p className="text-gray-light font-18 group-[.active]:text-default-green name"></p>
                      </td>
                      <td className="px-5 py-5 2xl:px-7 2xl:py-7">
                        <p className="text-gray-light font-18 group-[.active]:text-default-green name">
                          15 Jan 2023
                        </p>
                      </td>
                      <td className="px-5 py-5 2xl:px-7 2xl:py-7">
                        <p className="text-gray-light font-18 group-[.active]:text-default-green name">
                          15 Jan 2023
                        </p>
                      </td>
                      <td className="px-5 py-5 2xl:px-7 2xl:py-7">
                        <p className="text-gray-light font-18 group-[.active]:text-default-green name">
                          8,400.00
                        </p>
                      </td>
                      <td className="px-5 py-5 2xl:px-7 2xl:py-7">
                        <p className="text-gray-light font-18 group-[.active]:text-default-green name">
                          8,400.00
                        </p>
                      </td>
                      <td className="px-5 py-5 2xl:px-7 2xl:py-7">
                        <p className="flex items-center space-x-2 font-18 !text-default-yellow name">
                          <svg
                            className="size-[15px] 2xl:size-[20px]"
                            viewBox="0 0 14 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.25 0.25H2.375H11.375H12.5C13.0977 0.25 13.625 0.777344 13.625 1.375C13.625 2.00781 13.0977 2.5 12.5 2.5V2.88672C12.5 4.39844 11.9023 5.83984 10.8477 6.89453L8.45703 9.25L10.8477 11.6406C11.9023 12.6953 12.5 14.1367 12.5 15.6133V16C13.0977 16 13.625 16.5273 13.625 17.125C13.625 17.7578 13.0977 18.25 12.5 18.25H11.375H2.375H1.25C0.617188 18.25 0.125 17.7578 0.125 17.125C0.125 16.5273 0.617188 16 1.25 16V15.6133C1.25 14.1367 1.8125 12.6953 2.86719 11.6406L5.25781 9.25L2.86719 6.89453C1.8125 5.83984 1.25 4.39844 1.25 2.88672V2.5C0.617188 2.5 0.125 2.00781 0.125 1.375C0.125 0.777344 0.617188 0.25 1.25 0.25ZM10.25 15.6133V15.6484C10.25 14.7344 9.86328 13.8906 9.23047 13.2578L6.875 10.8672L4.48438 13.2578C3.85156 13.8906 3.5 14.7344 3.5 15.6133V16H10.25V15.6133Z"
                              fill="#FFAF36"
                            />
                          </svg>
                          <span className="capitalize">pending</span>
                        </p>
                      </td>
                      <td className="px-5 py-5 2xl:px-7 2xl:py-7">
                        <div className="group/main flex items-center justify-end">
                          <Dropdown
                            className="dropdown px-2 w-[130px] 2xl:w-[170px] z-[100]"
                            dismissOnClick="false"
                            renderTrigger={() => {
                              return (
                                <button className="group-has-[.dropdown]/main:text-secondary text-gray-light focus:text-secondary hover:text-secondary flex items-center justify-center !size-[25px] 2xl:!size-[34px] p-1.5 2xl:p-2">
                                  <svg
                                    className="h-full"
                                    stroke="currentColor"
                                    fill="currentColor"
                                    viewBox="0 0 6 26"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <circle
                                      cx="2.785"
                                      cy="2.785"
                                      r="2.785"
                                      fill="currentColor"
                                    />
                                    <circle
                                      cx="2.785"
                                      cy="12.9964"
                                      r="2.785"
                                      fill="currentColor"
                                    />
                                    <circle
                                      cx="2.785"
                                      cy="23.2083"
                                      r="2.785"
                                      fill="currentColor"
                                    />
                                  </svg>
                                </button>
                              );
                            }}
                          >
                            <Dropdown.Item class="list-with-icon">
                              <svg
                                className="w-3.5 2xl:w-4"
                                viewBox="0 0 18 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <mask
                                  id="mask0_105_3429"
                                  maskUnits="userSpaceOnUse"
                                  x="0"
                                  y="0"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M0.000976562 0H17.1816V18.9395H0.000976562V0Z"
                                    fill="white"
                                  />
                                </mask>
                                <g mask="url(#mask0_105_3429)">
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M11.1113 2.01664L1.69625 13.7916C1.52525 14.0056 1.46225 14.2816 1.52525 14.5466L2.20625 17.4316L5.24525 17.3936C5.53425 17.3906 5.80125 17.2616 5.97825 17.0416C9.19525 13.0166 15.3283 5.34264 15.5023 5.11764C15.6663 4.85164 15.7303 4.47564 15.6443 4.11364C15.5563 3.74264 15.3253 3.42764 14.9923 3.22664C14.9213 3.17764 13.2363 1.86964 13.1843 1.82864C12.5503 1.32064 11.6253 1.40864 11.1113 2.01664V2.01664ZM1.61425 18.9396C1.26725 18.9396 0.965251 18.7016 0.884251 18.3626L0.0652509 14.8916C-0.103749 14.1726 0.0642509 13.4306 0.525251 12.8546L9.94525 1.07264C9.94925 1.06864 9.95225 1.06364 9.95625 1.05964C10.9893 -0.175357 12.8573 -0.357357 14.1173 0.653643C14.1673 0.692643 15.8403 1.99264 15.8403 1.99264C16.4483 2.35464 16.9233 3.00164 17.1033 3.76764C17.2823 4.52564 17.1523 5.30764 16.7353 5.96864C16.7043 6.01764 16.6773 6.05964 7.14925 17.9796C6.69025 18.5516 6.00225 18.8846 5.26325 18.8936L1.62425 18.9396H1.61425Z"
                                    fill="currentColor"
                                  />
                                </g>
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M14.2244 8.68487C14.0644 8.68487 13.9044 8.63387 13.7674 8.52987L8.3154 4.34187C7.9874 4.08987 7.9254 3.61987 8.1774 3.28987C8.4304 2.96187 8.9004 2.90087 9.2294 3.15287L14.6824 7.33987C15.0104 7.59187 15.0724 8.06287 14.8194 8.39187C14.6724 8.58387 14.4494 8.68487 14.2244 8.68487"
                                  fill="currentColor"
                                />
                              </svg>
                              <p className="font-18 font-light">Edit</p>
                            </Dropdown.Item>
                            <Dropdown.Item class="list-with-icon">
                              <svg
                                className="w-4 2xl:w-5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="m9 13.5 3 3m0 0 3-3m-3 3v-6m1.06-4.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
                                />
                              </svg>
                              <p className="font-18 font-light">Archive</p>
                            </Dropdown.Item>
                            <Dropdown.Item class="list-with-icon">
                              <svg
                                className="w-4 2xl:w-5"
                                viewBox="0 0 18 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M8.784 18.9999C7.49673 18.9999 6.24176 18.9856 5.00009 18.96C3.41167 18.9286 2.3125 17.8988 2.13295 16.2724C1.8337 13.5744 1.32164 7.21496 1.31689 7.15131C1.28459 6.75896 1.57719 6.41505 1.96955 6.3837C2.35621 6.37325 2.70581 6.64496 2.73716 7.03636C2.74191 7.10096 3.25302 13.4385 3.54942 16.1156C3.65107 17.04 4.14983 17.5169 5.02955 17.535C7.40458 17.5853 9.82807 17.5882 12.4406 17.5407C13.3754 17.5226 13.8808 17.0552 13.9853 16.109C14.2798 13.4547 14.7928 7.10096 14.7985 7.03636C14.8299 6.64496 15.1766 6.37135 15.5652 6.3837C15.9576 6.416 16.2502 6.75896 16.2188 7.15131C16.2131 7.21591 15.6982 13.5915 15.4018 16.2657C15.2175 17.9254 14.1212 18.9353 12.4663 18.9657C11.1999 18.9875 9.97817 18.9999 8.784 18.9999"
                                  fill="currentColor"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M16.8229 4.73947H0.712511C0.319205 4.73947 0 4.42027 0 4.02696C0 3.63366 0.319205 3.31445 0.712511 3.31445H16.8229C17.2162 3.31445 17.5354 3.63366 17.5354 4.02696C17.5354 4.42027 17.2162 4.73947 16.8229 4.73947"
                                  fill="currentColor"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M13.719 4.73962C12.6379 4.73962 11.6993 3.96916 11.4865 2.90894L11.2556 1.75373C11.2072 1.57797 11.0067 1.42502 10.7787 1.42502H6.7573C6.52929 1.42502 6.32884 1.57797 6.27089 1.79743L6.04954 2.90894C5.83768 3.96916 4.89812 4.73962 3.817 4.73962C3.4237 4.73962 3.10449 4.42042 3.10449 4.02711C3.10449 3.6338 3.4237 3.3146 3.817 3.3146C4.22171 3.3146 4.57321 3.0258 4.65302 2.62869L4.88387 1.47347C5.11852 0.588059 5.88518 0 6.7573 0H10.7787C11.6508 0 12.4175 0.588059 12.6426 1.43072L12.8839 2.62869C12.9628 3.0258 13.3143 3.3146 13.719 3.3146C14.1123 3.3146 14.4315 3.6338 14.4315 4.02711C14.4315 4.42042 14.1123 4.73962 13.719 4.73962"
                                  fill="currentColor"
                                />
                              </svg>
                              <p className="font-18 font-light">Delete</p>
                            </Dropdown.Item>
                          </Dropdown>
                        </div>
                      </td>
                    </tr>
                    <tr className="table-row table-row-css">
                      <td className="px-5 py-5 2xl:px-7 2xl:py-7">
                        <div className="group/check flex items-center space-x-3 2xl:space-x-5">
                          <label className="flex">
                            <span className="sub-check cursor-pointer group-has-[input:checked]/check:bg-default-green group-has-[input:checked]/check:border-default-green flex justify-center items-center checkbox-size border border-gray-light rounded-[5px]">
                              <svg
                                className="check-icon-size text-white group-has-[input:checked]/check:block hidden"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                              >
                                <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                              </svg>
                              <input
                                className="border-[1.5px] border-gray-dark hidden"
                                id=""
                                name=""
                                type="checkbox"
                              />
                            </span>
                          </label>
                          <div className="flex items-center space-x-2">
                            <svg
                              className="group-has-[input:checked]/check:text-default-green size-[12px] 2xl:size-5 text-gray-light"
                              viewBox="0 0 14 19"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M6.36328 9.28516C6.1875 8.72266 6.22266 7.63281 6.29297 7.63281C6.60938 7.63281 6.57422 8.93359 6.36328 9.28516ZM6.32812 10.9375C6.64453 11.5352 7.10156 12.0273 7.52344 12.3789C6.67969 12.5195 5.97656 12.8711 5.30859 13.1172C5.69531 12.4492 6.04688 11.6406 6.32812 10.9375ZM3.02344 15.332C3.19922 14.7695 4.00781 14.1367 4.25391 13.8906C3.48047 15.1211 3.02344 15.332 3.02344 15.332ZM8.71875 5.875H13.5V17.4062C13.5 17.8984 13.1133 18.25 12.6562 18.25H0.84375C0.351562 18.25 0 17.8984 0 17.4062V1.09375C0 0.636719 0.351562 0.25 0.84375 0.25H7.875V5.03125C7.875 5.52344 8.22656 5.875 8.71875 5.875ZM8.4375 11.9219C7.73438 11.5 7.24219 10.9023 6.92578 10.0234C7.06641 9.39062 7.3125 8.40625 7.13672 7.77344C6.96094 6.75391 5.66016 6.85938 5.44922 7.52734C5.27344 8.19531 5.44922 9.10938 5.73047 10.2344C5.34375 11.2188 4.74609 12.5195 4.32422 13.2578C4.28906 13.2578 4.28906 13.2578 4.28906 13.2578C3.33984 13.75 1.72266 14.8398 2.39062 15.6484C2.56641 15.8945 2.95312 16 3.12891 16C3.76172 16 4.39453 15.3672 5.27344 13.8555C6.1875 13.5391 7.20703 13.1523 8.05078 13.0117C8.82422 13.4336 9.73828 13.7148 10.3008 13.7148C11.3555 13.7148 11.4258 12.5898 11.0039 12.168C10.5117 11.7109 9.10547 11.8516 8.4375 11.9219ZM13.2539 3.94141C13.3945 4.11719 13.5 4.32812 13.5 4.53906V4.75H9V0.25H9.21094C9.42188 0.25 9.63281 0.355469 9.80859 0.496094L13.2539 3.94141ZM10.6172 12.9414C10.6172 12.9414 10.4414 13.1875 9.14062 12.625C10.5469 12.5195 10.793 12.8359 10.6172 12.9414Z"
                                fill="currentColor"
                              />
                            </svg>
                            <p className="text-gray-light font-18 group-[.active]:text-default-green name">
                              Invoice
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-5 2xl:px-7 2xl:py-7">
                        <p className="text-gray-light font-18 group-[.active]:text-default-green name">
                          lw-000076543
                        </p>
                      </td>
                      <td className="px-5 py-5 2xl:px-7 2xl:py-7">
                        <p className="text-gray-light font-18 group-[.active]:text-default-green name"></p>
                      </td>
                      <td className="px-5 py-5 2xl:px-7 2xl:py-7">
                        <p className="text-gray-light font-18 group-[.active]:text-default-green name">
                          15 Jan 2023
                        </p>
                      </td>
                      <td className="px-5 py-5 2xl:px-7 2xl:py-7">
                        <p className="text-gray-light font-18 group-[.active]:text-default-green name">
                          15 Jan 2023
                        </p>
                      </td>
                      <td className="px-5 py-5 2xl:px-7 2xl:py-7">
                        <p className="text-gray-light font-18 group-[.active]:text-default-green name">
                          8,400.00
                        </p>
                      </td>
                      <td className="px-5 py-5 2xl:px-7 2xl:py-7">
                        <p className="text-gray-light font-18 group-[.active]:text-default-green name">
                          8,400.00
                        </p>
                      </td>
                      <td className="px-5 py-5 2xl:px-7 2xl:py-7">
                        <p className="flex items-center space-x-2 font-18 text-default-green name">
                          <svg
                            className="size-[15px] 2xl:size-[20px]"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <ellipse
                              cx="10"
                              cy="9.98611"
                              rx="10"
                              ry="9.98611"
                              fill="#27AE60"
                            />
                            <path
                              d="M6 10.359L8.374 12.7287L13.12 7.98926"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span className="capitalize">paid</span>
                        </p>
                      </td>
                      <td className="px-5 py-5 2xl:px-7 2xl:py-7">
                        <div className="group/main flex items-center justify-end">
                          <Dropdown
                            className="dropdown px-2 w-[130px] 2xl:w-[170px] z-[100]"
                            dismissOnClick="false"
                            renderTrigger={() => {
                              return (
                                <button className="group-has-[.dropdown]/main:text-secondary text-gray-light focus:text-secondary hover:text-secondary flex items-center justify-center !size-[25px] 2xl:!size-[34px] p-1.5 2xl:p-2">
                                  <svg
                                    className="h-full"
                                    stroke="currentColor"
                                    fill="currentColor"
                                    viewBox="0 0 6 26"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <circle
                                      cx="2.785"
                                      cy="2.785"
                                      r="2.785"
                                      fill="currentColor"
                                    />
                                    <circle
                                      cx="2.785"
                                      cy="12.9964"
                                      r="2.785"
                                      fill="currentColor"
                                    />
                                    <circle
                                      cx="2.785"
                                      cy="23.2083"
                                      r="2.785"
                                      fill="currentColor"
                                    />
                                  </svg>
                                </button>
                              );
                            }}
                          >
                            <Dropdown.Item class="list-with-icon">
                              <svg
                                className="w-3.5 2xl:w-4"
                                viewBox="0 0 18 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <mask
                                  id="mask0_105_3429"
                                  maskUnits="userSpaceOnUse"
                                  x="0"
                                  y="0"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M0.000976562 0H17.1816V18.9395H0.000976562V0Z"
                                    fill="white"
                                  />
                                </mask>
                                <g mask="url(#mask0_105_3429)">
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M11.1113 2.01664L1.69625 13.7916C1.52525 14.0056 1.46225 14.2816 1.52525 14.5466L2.20625 17.4316L5.24525 17.3936C5.53425 17.3906 5.80125 17.2616 5.97825 17.0416C9.19525 13.0166 15.3283 5.34264 15.5023 5.11764C15.6663 4.85164 15.7303 4.47564 15.6443 4.11364C15.5563 3.74264 15.3253 3.42764 14.9923 3.22664C14.9213 3.17764 13.2363 1.86964 13.1843 1.82864C12.5503 1.32064 11.6253 1.40864 11.1113 2.01664V2.01664ZM1.61425 18.9396C1.26725 18.9396 0.965251 18.7016 0.884251 18.3626L0.0652509 14.8916C-0.103749 14.1726 0.0642509 13.4306 0.525251 12.8546L9.94525 1.07264C9.94925 1.06864 9.95225 1.06364 9.95625 1.05964C10.9893 -0.175357 12.8573 -0.357357 14.1173 0.653643C14.1673 0.692643 15.8403 1.99264 15.8403 1.99264C16.4483 2.35464 16.9233 3.00164 17.1033 3.76764C17.2823 4.52564 17.1523 5.30764 16.7353 5.96864C16.7043 6.01764 16.6773 6.05964 7.14925 17.9796C6.69025 18.5516 6.00225 18.8846 5.26325 18.8936L1.62425 18.9396H1.61425Z"
                                    fill="currentColor"
                                  />
                                </g>
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M14.2244 8.68487C14.0644 8.68487 13.9044 8.63387 13.7674 8.52987L8.3154 4.34187C7.9874 4.08987 7.9254 3.61987 8.1774 3.28987C8.4304 2.96187 8.9004 2.90087 9.2294 3.15287L14.6824 7.33987C15.0104 7.59187 15.0724 8.06287 14.8194 8.39187C14.6724 8.58387 14.4494 8.68487 14.2244 8.68487"
                                  fill="currentColor"
                                />
                              </svg>
                              <p className="font-18 font-light">Edit</p>
                            </Dropdown.Item>
                            <Dropdown.Item class="list-with-icon">
                              <svg
                                className="w-4 2xl:w-5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="m9 13.5 3 3m0 0 3-3m-3 3v-6m1.06-4.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
                                />
                              </svg>
                              <p className="font-18 font-light">Archive</p>
                            </Dropdown.Item>
                            <Dropdown.Item class="list-with-icon">
                              <svg
                                className="w-4 2xl:w-5"
                                viewBox="0 0 18 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M8.784 18.9999C7.49673 18.9999 6.24176 18.9856 5.00009 18.96C3.41167 18.9286 2.3125 17.8988 2.13295 16.2724C1.8337 13.5744 1.32164 7.21496 1.31689 7.15131C1.28459 6.75896 1.57719 6.41505 1.96955 6.3837C2.35621 6.37325 2.70581 6.64496 2.73716 7.03636C2.74191 7.10096 3.25302 13.4385 3.54942 16.1156C3.65107 17.04 4.14983 17.5169 5.02955 17.535C7.40458 17.5853 9.82807 17.5882 12.4406 17.5407C13.3754 17.5226 13.8808 17.0552 13.9853 16.109C14.2798 13.4547 14.7928 7.10096 14.7985 7.03636C14.8299 6.64496 15.1766 6.37135 15.5652 6.3837C15.9576 6.416 16.2502 6.75896 16.2188 7.15131C16.2131 7.21591 15.6982 13.5915 15.4018 16.2657C15.2175 17.9254 14.1212 18.9353 12.4663 18.9657C11.1999 18.9875 9.97817 18.9999 8.784 18.9999"
                                  fill="currentColor"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M16.8229 4.73947H0.712511C0.319205 4.73947 0 4.42027 0 4.02696C0 3.63366 0.319205 3.31445 0.712511 3.31445H16.8229C17.2162 3.31445 17.5354 3.63366 17.5354 4.02696C17.5354 4.42027 17.2162 4.73947 16.8229 4.73947"
                                  fill="currentColor"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M13.719 4.73962C12.6379 4.73962 11.6993 3.96916 11.4865 2.90894L11.2556 1.75373C11.2072 1.57797 11.0067 1.42502 10.7787 1.42502H6.7573C6.52929 1.42502 6.32884 1.57797 6.27089 1.79743L6.04954 2.90894C5.83768 3.96916 4.89812 4.73962 3.817 4.73962C3.4237 4.73962 3.10449 4.42042 3.10449 4.02711C3.10449 3.6338 3.4237 3.3146 3.817 3.3146C4.22171 3.3146 4.57321 3.0258 4.65302 2.62869L4.88387 1.47347C5.11852 0.588059 5.88518 0 6.7573 0H10.7787C11.6508 0 12.4175 0.588059 12.6426 1.43072L12.8839 2.62869C12.9628 3.0258 13.3143 3.3146 13.719 3.3146C14.1123 3.3146 14.4315 3.6338 14.4315 4.02711C14.4315 4.42042 14.1123 4.73962 13.719 4.73962"
                                  fill="currentColor"
                                />
                              </svg>
                              <p className="font-18 font-light">Delete</p>
                            </Dropdown.Item>
                          </Dropdown>
                        </div>
                      </td>
                    </tr>
                    <tr className="table-row table-row-css">
                      <td className="px-5 py-5 2xl:px-7 2xl:py-7">
                        <div className="group/check flex space-x-3 2xl:space-x-5">
                          <label className="flex">
                            <span className="sub-check cursor-pointer group-has-[input:checked]/check:bg-default-green group-has-[input:checked]/check:border-default-green flex justify-center items-center checkbox-size border border-gray-light rounded-[5px]">
                              <svg
                                className="check-icon-size text-white group-has-[input:checked]/check:block hidden"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                              >
                                <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                              </svg>
                              <input
                                className="border-[1.5px] border-gray-dark hidden"
                                id=""
                                name=""
                                type="checkbox"
                              />
                            </span>
                          </label>
                          <div className="flex items-center space-x-2">
                            <svg
                              className="group-has-[input:checked]/check:text-default-green size-[12px] 2xl:size-5 text-gray-light"
                              viewBox="0 0 14 19"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M6.36328 9.28516C6.1875 8.72266 6.22266 7.63281 6.29297 7.63281C6.60938 7.63281 6.57422 8.93359 6.36328 9.28516ZM6.32812 10.9375C6.64453 11.5352 7.10156 12.0273 7.52344 12.3789C6.67969 12.5195 5.97656 12.8711 5.30859 13.1172C5.69531 12.4492 6.04688 11.6406 6.32812 10.9375ZM3.02344 15.332C3.19922 14.7695 4.00781 14.1367 4.25391 13.8906C3.48047 15.1211 3.02344 15.332 3.02344 15.332ZM8.71875 5.875H13.5V17.4062C13.5 17.8984 13.1133 18.25 12.6562 18.25H0.84375C0.351562 18.25 0 17.8984 0 17.4062V1.09375C0 0.636719 0.351562 0.25 0.84375 0.25H7.875V5.03125C7.875 5.52344 8.22656 5.875 8.71875 5.875ZM8.4375 11.9219C7.73438 11.5 7.24219 10.9023 6.92578 10.0234C7.06641 9.39062 7.3125 8.40625 7.13672 7.77344C6.96094 6.75391 5.66016 6.85938 5.44922 7.52734C5.27344 8.19531 5.44922 9.10938 5.73047 10.2344C5.34375 11.2188 4.74609 12.5195 4.32422 13.2578C4.28906 13.2578 4.28906 13.2578 4.28906 13.2578C3.33984 13.75 1.72266 14.8398 2.39062 15.6484C2.56641 15.8945 2.95312 16 3.12891 16C3.76172 16 4.39453 15.3672 5.27344 13.8555C6.1875 13.5391 7.20703 13.1523 8.05078 13.0117C8.82422 13.4336 9.73828 13.7148 10.3008 13.7148C11.3555 13.7148 11.4258 12.5898 11.0039 12.168C10.5117 11.7109 9.10547 11.8516 8.4375 11.9219ZM13.2539 3.94141C13.3945 4.11719 13.5 4.32812 13.5 4.53906V4.75H9V0.25H9.21094C9.42188 0.25 9.63281 0.355469 9.80859 0.496094L13.2539 3.94141ZM10.6172 12.9414C10.6172 12.9414 10.4414 13.1875 9.14062 12.625C10.5469 12.5195 10.793 12.8359 10.6172 12.9414Z"
                                fill="currentColor"
                              />
                            </svg>
                            <p className="text-gray-light font-18 group-[.active]:text-default-green name">
                              Invoice
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-5 2xl:px-7 2xl:py-7">
                        <p className="text-gray-light font-18 group-[.active]:text-default-green name">
                          lw-000076543
                        </p>
                      </td>
                      <td className="px-5 py-5 2xl:px-7 2xl:py-7">
                        <p className="text-gray-light font-18 group-[.active]:text-default-green name"></p>
                      </td>
                      <td className="px-5 py-5 2xl:px-7 2xl:py-7">
                        <p className="text-gray-light font-18 group-[.active]:text-default-green name">
                          15 Jan 2023
                        </p>
                      </td>
                      <td className="px-5 py-5 2xl:px-7 2xl:py-7">
                        <p className="text-gray-light font-18 group-[.active]:text-default-green name">
                          15 Jan 2023
                        </p>
                      </td>
                      <td className="px-5 py-5 2xl:px-7 2xl:py-7">
                        <p className="text-gray-light font-18 group-[.active]:text-default-green name">
                          8,400.00
                        </p>
                      </td>
                      <td className="px-5 py-5 2xl:px-7 2xl:py-7">
                        <p className="text-gray-light font-18 group-[.active]:text-default-green name">
                          8,400.00
                        </p>
                      </td>
                      <td className="px-5 py-5 2xl:px-7 2xl:py-7">
                        <p className="flex items-center space-x-2 font-18 text-default-green name">
                          <svg
                            className="size-[15px] 2xl:size-[20px]"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <ellipse
                              cx="10"
                              cy="9.98611"
                              rx="10"
                              ry="9.98611"
                              fill="#27AE60"
                            />
                            <path
                              d="M6 10.359L8.374 12.7287L13.12 7.98926"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span className="capitalize">paid</span>
                        </p>
                      </td>
                      <td className="px-5 py-5 2xl:px-7 2xl:py-7">
                        <div className="group/main flex items-center justify-end">
                          <Dropdown
                            className="dropdown px-2 w-[130px] 2xl:w-[170px] z-[100]"
                            dismissOnClick="false"
                            renderTrigger={() => {
                              return (
                                <button className="group-has-[.dropdown]/main:text-secondary text-gray-light focus:text-secondary hover:text-secondary flex items-center justify-center !size-[25px] 2xl:!size-[34px] p-1.5 2xl:p-2">
                                  <svg
                                    className="h-full"
                                    stroke="currentColor"
                                    fill="currentColor"
                                    viewBox="0 0 6 26"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <circle
                                      cx="2.785"
                                      cy="2.785"
                                      r="2.785"
                                      fill="currentColor"
                                    />
                                    <circle
                                      cx="2.785"
                                      cy="12.9964"
                                      r="2.785"
                                      fill="currentColor"
                                    />
                                    <circle
                                      cx="2.785"
                                      cy="23.2083"
                                      r="2.785"
                                      fill="currentColor"
                                    />
                                  </svg>
                                </button>
                              );
                            }}
                          >
                            <Dropdown.Item class="list-with-icon">
                              <svg
                                className="w-3.5 2xl:w-4"
                                viewBox="0 0 18 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <mask
                                  id="mask0_105_3429"
                                  maskUnits="userSpaceOnUse"
                                  x="0"
                                  y="0"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M0.000976562 0H17.1816V18.9395H0.000976562V0Z"
                                    fill="white"
                                  />
                                </mask>
                                <g mask="url(#mask0_105_3429)">
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M11.1113 2.01664L1.69625 13.7916C1.52525 14.0056 1.46225 14.2816 1.52525 14.5466L2.20625 17.4316L5.24525 17.3936C5.53425 17.3906 5.80125 17.2616 5.97825 17.0416C9.19525 13.0166 15.3283 5.34264 15.5023 5.11764C15.6663 4.85164 15.7303 4.47564 15.6443 4.11364C15.5563 3.74264 15.3253 3.42764 14.9923 3.22664C14.9213 3.17764 13.2363 1.86964 13.1843 1.82864C12.5503 1.32064 11.6253 1.40864 11.1113 2.01664V2.01664ZM1.61425 18.9396C1.26725 18.9396 0.965251 18.7016 0.884251 18.3626L0.0652509 14.8916C-0.103749 14.1726 0.0642509 13.4306 0.525251 12.8546L9.94525 1.07264C9.94925 1.06864 9.95225 1.06364 9.95625 1.05964C10.9893 -0.175357 12.8573 -0.357357 14.1173 0.653643C14.1673 0.692643 15.8403 1.99264 15.8403 1.99264C16.4483 2.35464 16.9233 3.00164 17.1033 3.76764C17.2823 4.52564 17.1523 5.30764 16.7353 5.96864C16.7043 6.01764 16.6773 6.05964 7.14925 17.9796C6.69025 18.5516 6.00225 18.8846 5.26325 18.8936L1.62425 18.9396H1.61425Z"
                                    fill="currentColor"
                                  />
                                </g>
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M14.2244 8.68487C14.0644 8.68487 13.9044 8.63387 13.7674 8.52987L8.3154 4.34187C7.9874 4.08987 7.9254 3.61987 8.1774 3.28987C8.4304 2.96187 8.9004 2.90087 9.2294 3.15287L14.6824 7.33987C15.0104 7.59187 15.0724 8.06287 14.8194 8.39187C14.6724 8.58387 14.4494 8.68487 14.2244 8.68487"
                                  fill="currentColor"
                                />
                              </svg>
                              <p className="font-18 font-light">Edit</p>
                            </Dropdown.Item>
                            <Dropdown.Item class="list-with-icon">
                              <svg
                                className="w-4 2xl:w-5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="m9 13.5 3 3m0 0 3-3m-3 3v-6m1.06-4.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
                                />
                              </svg>
                              <p className="font-18 font-light">Archive</p>
                            </Dropdown.Item>
                            <Dropdown.Item class="list-with-icon">
                              <svg
                                className="w-4 2xl:w-5"
                                viewBox="0 0 18 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M8.784 18.9999C7.49673 18.9999 6.24176 18.9856 5.00009 18.96C3.41167 18.9286 2.3125 17.8988 2.13295 16.2724C1.8337 13.5744 1.32164 7.21496 1.31689 7.15131C1.28459 6.75896 1.57719 6.41505 1.96955 6.3837C2.35621 6.37325 2.70581 6.64496 2.73716 7.03636C2.74191 7.10096 3.25302 13.4385 3.54942 16.1156C3.65107 17.04 4.14983 17.5169 5.02955 17.535C7.40458 17.5853 9.82807 17.5882 12.4406 17.5407C13.3754 17.5226 13.8808 17.0552 13.9853 16.109C14.2798 13.4547 14.7928 7.10096 14.7985 7.03636C14.8299 6.64496 15.1766 6.37135 15.5652 6.3837C15.9576 6.416 16.2502 6.75896 16.2188 7.15131C16.2131 7.21591 15.6982 13.5915 15.4018 16.2657C15.2175 17.9254 14.1212 18.9353 12.4663 18.9657C11.1999 18.9875 9.97817 18.9999 8.784 18.9999"
                                  fill="currentColor"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M16.8229 4.73947H0.712511C0.319205 4.73947 0 4.42027 0 4.02696C0 3.63366 0.319205 3.31445 0.712511 3.31445H16.8229C17.2162 3.31445 17.5354 3.63366 17.5354 4.02696C17.5354 4.42027 17.2162 4.73947 16.8229 4.73947"
                                  fill="currentColor"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M13.719 4.73962C12.6379 4.73962 11.6993 3.96916 11.4865 2.90894L11.2556 1.75373C11.2072 1.57797 11.0067 1.42502 10.7787 1.42502H6.7573C6.52929 1.42502 6.32884 1.57797 6.27089 1.79743L6.04954 2.90894C5.83768 3.96916 4.89812 4.73962 3.817 4.73962C3.4237 4.73962 3.10449 4.42042 3.10449 4.02711C3.10449 3.6338 3.4237 3.3146 3.817 3.3146C4.22171 3.3146 4.57321 3.0258 4.65302 2.62869L4.88387 1.47347C5.11852 0.588059 5.88518 0 6.7573 0H10.7787C11.6508 0 12.4175 0.588059 12.6426 1.43072L12.8839 2.62869C12.9628 3.0258 13.3143 3.3146 13.719 3.3146C14.1123 3.3146 14.4315 3.6338 14.4315 4.02711C14.4315 4.42042 14.1123 4.73962 13.719 4.73962"
                                  fill="currentColor"
                                />
                              </svg>
                              <p className="font-18 font-light">Delete</p>
                            </Dropdown.Item>
                          </Dropdown>
                        </div>
                      </td>
                    </tr>
                    <tr className="table-row table-row-css">
                      <td className="px-5 py-5 2xl:px-7 2xl:py-7">
                        <div className="group/check flex items-center space-x-3 2xl:space-x-5">
                          <label className="flex">
                            <span className="sub-check cursor-pointer group-has-[input:checked]/check:bg-default-green group-has-[input:checked]/check:border-default-green flex justify-center items-center checkbox-size border border-gray-light rounded-[5px]">
                              <svg
                                className="check-icon-size text-white group-has-[input:checked]/check:block hidden"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                              >
                                <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                              </svg>
                              <input
                                className="border-[1.5px] border-gray-dark hidden"
                                id=""
                                name=""
                                type="checkbox"
                              />
                            </span>
                          </label>
                          <div className="flex items-center space-x-2">
                            <svg
                              className="group-has-[input:checked]/check:text-default-green size-[12px] 2xl:size-5 text-gray-light"
                              viewBox="0 0 14 19"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M6.36328 9.28516C6.1875 8.72266 6.22266 7.63281 6.29297 7.63281C6.60938 7.63281 6.57422 8.93359 6.36328 9.28516ZM6.32812 10.9375C6.64453 11.5352 7.10156 12.0273 7.52344 12.3789C6.67969 12.5195 5.97656 12.8711 5.30859 13.1172C5.69531 12.4492 6.04688 11.6406 6.32812 10.9375ZM3.02344 15.332C3.19922 14.7695 4.00781 14.1367 4.25391 13.8906C3.48047 15.1211 3.02344 15.332 3.02344 15.332ZM8.71875 5.875H13.5V17.4062C13.5 17.8984 13.1133 18.25 12.6562 18.25H0.84375C0.351562 18.25 0 17.8984 0 17.4062V1.09375C0 0.636719 0.351562 0.25 0.84375 0.25H7.875V5.03125C7.875 5.52344 8.22656 5.875 8.71875 5.875ZM8.4375 11.9219C7.73438 11.5 7.24219 10.9023 6.92578 10.0234C7.06641 9.39062 7.3125 8.40625 7.13672 7.77344C6.96094 6.75391 5.66016 6.85938 5.44922 7.52734C5.27344 8.19531 5.44922 9.10938 5.73047 10.2344C5.34375 11.2188 4.74609 12.5195 4.32422 13.2578C4.28906 13.2578 4.28906 13.2578 4.28906 13.2578C3.33984 13.75 1.72266 14.8398 2.39062 15.6484C2.56641 15.8945 2.95312 16 3.12891 16C3.76172 16 4.39453 15.3672 5.27344 13.8555C6.1875 13.5391 7.20703 13.1523 8.05078 13.0117C8.82422 13.4336 9.73828 13.7148 10.3008 13.7148C11.3555 13.7148 11.4258 12.5898 11.0039 12.168C10.5117 11.7109 9.10547 11.8516 8.4375 11.9219ZM13.2539 3.94141C13.3945 4.11719 13.5 4.32812 13.5 4.53906V4.75H9V0.25H9.21094C9.42188 0.25 9.63281 0.355469 9.80859 0.496094L13.2539 3.94141ZM10.6172 12.9414C10.6172 12.9414 10.4414 13.1875 9.14062 12.625C10.5469 12.5195 10.793 12.8359 10.6172 12.9414Z"
                                fill="currentColor"
                              />
                            </svg>
                            <p className="text-gray-light font-18 group-[.active]:text-default-green name">
                              Invoice
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-5 2xl:px-7 2xl:py-7">
                        <p className="text-gray-light font-18 group-[.active]:text-default-green name">
                          lw-000076543
                        </p>
                      </td>
                      <td className="px-5 py-5 2xl:px-7 2xl:py-7">
                        <p className="text-gray-light font-18 group-[.active]:text-default-green name"></p>
                      </td>
                      <td className="px-5 py-5 2xl:px-7 2xl:py-7">
                        <p className="text-gray-light font-18 group-[.active]:text-default-green name">
                          15 Jan 2023
                        </p>
                      </td>
                      <td className="px-5 py-5 2xl:px-7 2xl:py-7">
                        <p className="text-gray-light font-18 group-[.active]:text-default-green name">
                          15 Jan 2023
                        </p>
                      </td>
                      <td className="px-5 py-5 2xl:px-7 2xl:py-7">
                        <p className="text-gray-light font-18 group-[.active]:text-default-green name">
                          8,400.00
                        </p>
                      </td>
                      <td className="px-5 py-5 2xl:px-7 2xl:py-7">
                        <p className="text-gray-light font-18 group-[.active]:text-default-green name">
                          8,400.00
                        </p>
                      </td>
                      <td className="px-5 py-5 2xl:px-7 2xl:py-7">
                        <p className="flex items-center space-x-2 font-18 !text-red1">
                          <svg
                            className="size-[15px] 2xl:size-[20px]"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <ellipse
                              cx="10"
                              cy="9.98611"
                              rx="10"
                              ry="9.98611"
                              fill="#EB5757"
                            />
                            <path
                              d="M13 12.9819L7 6.99023"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M13 6.99027L7 12.9819"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>

                          <span className="capitalize">overdue</span>
                        </p>
                      </td>
                      <td className="px-5 py-5 2xl:px-7 2xl:py-7">
                        <div className="group/main flex items-center justify-end">
                          <Dropdown
                            className="dropdown px-2 w-[130px] 2xl:w-[170px] z-[100]"
                            dismissOnClick="false"
                            renderTrigger={() => {
                              return (
                                <button className="group-has-[.dropdown]/main:text-secondary text-gray-light focus:text-secondary hover:text-secondary flex items-center justify-center !size-[25px] 2xl:!size-[34px] p-1.5 2xl:p-2">
                                  <svg
                                    className="h-full"
                                    stroke="currentColor"
                                    fill="currentColor"
                                    viewBox="0 0 6 26"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <circle
                                      cx="2.785"
                                      cy="2.785"
                                      r="2.785"
                                      fill="currentColor"
                                    />
                                    <circle
                                      cx="2.785"
                                      cy="12.9964"
                                      r="2.785"
                                      fill="currentColor"
                                    />
                                    <circle
                                      cx="2.785"
                                      cy="23.2083"
                                      r="2.785"
                                      fill="currentColor"
                                    />
                                  </svg>
                                </button>
                              );
                            }}
                          >
                            <Dropdown.Item class="list-with-icon">
                              <svg
                                className="w-3.5 2xl:w-4"
                                viewBox="0 0 18 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <mask
                                  id="mask0_105_3429"
                                  maskUnits="userSpaceOnUse"
                                  x="0"
                                  y="0"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M0.000976562 0H17.1816V18.9395H0.000976562V0Z"
                                    fill="white"
                                  />
                                </mask>
                                <g mask="url(#mask0_105_3429)">
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M11.1113 2.01664L1.69625 13.7916C1.52525 14.0056 1.46225 14.2816 1.52525 14.5466L2.20625 17.4316L5.24525 17.3936C5.53425 17.3906 5.80125 17.2616 5.97825 17.0416C9.19525 13.0166 15.3283 5.34264 15.5023 5.11764C15.6663 4.85164 15.7303 4.47564 15.6443 4.11364C15.5563 3.74264 15.3253 3.42764 14.9923 3.22664C14.9213 3.17764 13.2363 1.86964 13.1843 1.82864C12.5503 1.32064 11.6253 1.40864 11.1113 2.01664V2.01664ZM1.61425 18.9396C1.26725 18.9396 0.965251 18.7016 0.884251 18.3626L0.0652509 14.8916C-0.103749 14.1726 0.0642509 13.4306 0.525251 12.8546L9.94525 1.07264C9.94925 1.06864 9.95225 1.06364 9.95625 1.05964C10.9893 -0.175357 12.8573 -0.357357 14.1173 0.653643C14.1673 0.692643 15.8403 1.99264 15.8403 1.99264C16.4483 2.35464 16.9233 3.00164 17.1033 3.76764C17.2823 4.52564 17.1523 5.30764 16.7353 5.96864C16.7043 6.01764 16.6773 6.05964 7.14925 17.9796C6.69025 18.5516 6.00225 18.8846 5.26325 18.8936L1.62425 18.9396H1.61425Z"
                                    fill="currentColor"
                                  />
                                </g>
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M14.2244 8.68487C14.0644 8.68487 13.9044 8.63387 13.7674 8.52987L8.3154 4.34187C7.9874 4.08987 7.9254 3.61987 8.1774 3.28987C8.4304 2.96187 8.9004 2.90087 9.2294 3.15287L14.6824 7.33987C15.0104 7.59187 15.0724 8.06287 14.8194 8.39187C14.6724 8.58387 14.4494 8.68487 14.2244 8.68487"
                                  fill="currentColor"
                                />
                              </svg>
                              <p className="font-18 font-light">Edit</p>
                            </Dropdown.Item>
                            <Dropdown.Item class="list-with-icon">
                              <svg
                                className="w-4 2xl:w-5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="m9 13.5 3 3m0 0 3-3m-3 3v-6m1.06-4.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
                                />
                              </svg>
                              <p className="font-18 font-light">Archive</p>
                            </Dropdown.Item>
                            <Dropdown.Item class="list-with-icon">
                              <svg
                                className="w-4 2xl:w-5"
                                viewBox="0 0 18 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M8.784 18.9999C7.49673 18.9999 6.24176 18.9856 5.00009 18.96C3.41167 18.9286 2.3125 17.8988 2.13295 16.2724C1.8337 13.5744 1.32164 7.21496 1.31689 7.15131C1.28459 6.75896 1.57719 6.41505 1.96955 6.3837C2.35621 6.37325 2.70581 6.64496 2.73716 7.03636C2.74191 7.10096 3.25302 13.4385 3.54942 16.1156C3.65107 17.04 4.14983 17.5169 5.02955 17.535C7.40458 17.5853 9.82807 17.5882 12.4406 17.5407C13.3754 17.5226 13.8808 17.0552 13.9853 16.109C14.2798 13.4547 14.7928 7.10096 14.7985 7.03636C14.8299 6.64496 15.1766 6.37135 15.5652 6.3837C15.9576 6.416 16.2502 6.75896 16.2188 7.15131C16.2131 7.21591 15.6982 13.5915 15.4018 16.2657C15.2175 17.9254 14.1212 18.9353 12.4663 18.9657C11.1999 18.9875 9.97817 18.9999 8.784 18.9999"
                                  fill="currentColor"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M16.8229 4.73947H0.712511C0.319205 4.73947 0 4.42027 0 4.02696C0 3.63366 0.319205 3.31445 0.712511 3.31445H16.8229C17.2162 3.31445 17.5354 3.63366 17.5354 4.02696C17.5354 4.42027 17.2162 4.73947 16.8229 4.73947"
                                  fill="currentColor"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M13.719 4.73962C12.6379 4.73962 11.6993 3.96916 11.4865 2.90894L11.2556 1.75373C11.2072 1.57797 11.0067 1.42502 10.7787 1.42502H6.7573C6.52929 1.42502 6.32884 1.57797 6.27089 1.79743L6.04954 2.90894C5.83768 3.96916 4.89812 4.73962 3.817 4.73962C3.4237 4.73962 3.10449 4.42042 3.10449 4.02711C3.10449 3.6338 3.4237 3.3146 3.817 3.3146C4.22171 3.3146 4.57321 3.0258 4.65302 2.62869L4.88387 1.47347C5.11852 0.588059 5.88518 0 6.7573 0H10.7787C11.6508 0 12.4175 0.588059 12.6426 1.43072L12.8839 2.62869C12.9628 3.0258 13.3143 3.3146 13.719 3.3146C14.1123 3.3146 14.4315 3.6338 14.4315 4.02711C14.4315 4.42042 14.1123 4.73962 13.719 4.73962"
                                  fill="currentColor"
                                />
                              </svg>
                              <p className="font-18 font-light">Delete</p>
                            </Dropdown.Item>
                          </Dropdown>
                        </div>
                      </td>
                    </tr>
                    <tr className="table-row table-row-css">
                      <td className="px-5 py-5 2xl:px-7 2xl:py-7">
                        <div className="group/check flex items-center space-x-3 2xl:space-x-5">
                          <label className="flex">
                            <span className="sub-check cursor-pointer group-has-[input:checked]/check:bg-default-green group-has-[input:checked]/check:border-default-green flex justify-center items-center checkbox-size border border-gray-light rounded-[5px]">
                              <svg
                                className="check-icon-size text-white group-has-[input:checked]/check:block hidden"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                              >
                                <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                              </svg>
                              <input
                                className="border-[1.5px] border-gray-dark hidden"
                                id=""
                                name=""
                                type="checkbox"
                              />
                            </span>
                          </label>
                          <div className="flex items-center space-x-2">
                            <svg
                              className="group-has-[input:checked]/check:text-default-green size-[12px] 2xl:size-5 text-gray-light"
                              viewBox="0 0 14 19"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M6.36328 9.28516C6.1875 8.72266 6.22266 7.63281 6.29297 7.63281C6.60938 7.63281 6.57422 8.93359 6.36328 9.28516ZM6.32812 10.9375C6.64453 11.5352 7.10156 12.0273 7.52344 12.3789C6.67969 12.5195 5.97656 12.8711 5.30859 13.1172C5.69531 12.4492 6.04688 11.6406 6.32812 10.9375ZM3.02344 15.332C3.19922 14.7695 4.00781 14.1367 4.25391 13.8906C3.48047 15.1211 3.02344 15.332 3.02344 15.332ZM8.71875 5.875H13.5V17.4062C13.5 17.8984 13.1133 18.25 12.6562 18.25H0.84375C0.351562 18.25 0 17.8984 0 17.4062V1.09375C0 0.636719 0.351562 0.25 0.84375 0.25H7.875V5.03125C7.875 5.52344 8.22656 5.875 8.71875 5.875ZM8.4375 11.9219C7.73438 11.5 7.24219 10.9023 6.92578 10.0234C7.06641 9.39062 7.3125 8.40625 7.13672 7.77344C6.96094 6.75391 5.66016 6.85938 5.44922 7.52734C5.27344 8.19531 5.44922 9.10938 5.73047 10.2344C5.34375 11.2188 4.74609 12.5195 4.32422 13.2578C4.28906 13.2578 4.28906 13.2578 4.28906 13.2578C3.33984 13.75 1.72266 14.8398 2.39062 15.6484C2.56641 15.8945 2.95312 16 3.12891 16C3.76172 16 4.39453 15.3672 5.27344 13.8555C6.1875 13.5391 7.20703 13.1523 8.05078 13.0117C8.82422 13.4336 9.73828 13.7148 10.3008 13.7148C11.3555 13.7148 11.4258 12.5898 11.0039 12.168C10.5117 11.7109 9.10547 11.8516 8.4375 11.9219ZM13.2539 3.94141C13.3945 4.11719 13.5 4.32812 13.5 4.53906V4.75H9V0.25H9.21094C9.42188 0.25 9.63281 0.355469 9.80859 0.496094L13.2539 3.94141ZM10.6172 12.9414C10.6172 12.9414 10.4414 13.1875 9.14062 12.625C10.5469 12.5195 10.793 12.8359 10.6172 12.9414Z"
                                fill="currentColor"
                              />
                            </svg>
                            <p className="text-gray-light font-18 group-[.active]:text-default-green name">
                              Invoice
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-5 2xl:px-7 2xl:py-7">
                        <p className="text-gray-light font-18 group-[.active]:text-default-green name">
                          lw-000076543
                        </p>
                      </td>
                      <td className="px-5 py-5 2xl:px-7 2xl:py-7">
                        <p className="text-gray-light font-18 group-[.active]:text-default-green name"></p>
                      </td>
                      <td className="px-5 py-5 2xl:px-7 2xl:py-7">
                        <p className="text-gray-light font-18 group-[.active]:text-default-green name">
                          15 Jan 2023
                        </p>
                      </td>
                      <td className="px-5 py-5 2xl:px-7 2xl:py-7">
                        <p className="text-gray-light font-18 group-[.active]:text-default-green name">
                          15 Jan 2023
                        </p>
                      </td>
                      <td className="px-5 py-5 2xl:px-7 2xl:py-7">
                        <p className="text-gray-light font-18 group-[.active]:text-default-green name">
                          8,400.00
                        </p>
                      </td>
                      <td className="px-5 py-5 2xl:px-7 2xl:py-7">
                        <p className="text-gray-light font-18 group-[.active]:text-default-green name">
                          8,400.00
                        </p>
                      </td>
                      <td className="px-5 py-5 2xl:px-7 2xl:py-7">
                        <p className="flex items-center space-x-2 font-18 text-default-green name">
                          <svg
                            className="size-[15px] 2xl:size-[20px]"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <ellipse
                              cx="10"
                              cy="9.98611"
                              rx="10"
                              ry="9.98611"
                              fill="#27AE60"
                            />
                            <path
                              d="M6 10.359L8.374 12.7287L13.12 7.98926"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span className="capitalize">paid</span>
                        </p>
                      </td>
                      <td className="px-5 py-5 2xl:px-7 2xl:py-7">
                        <div className="group/main flex items-center justify-end">
                          <Dropdown
                            className="dropdown px-2 w-[130px] 2xl:w-[170px] z-[100]"
                            dismissOnClick="false"
                            renderTrigger={() => {
                              return (
                                <button className="group-has-[.dropdown]/main:text-secondary text-gray-light focus:text-secondary hover:text-secondary flex items-center justify-center !size-[25px] 2xl:!size-[34px] p-1.5 2xl:p-2">
                                  <svg
                                    className="h-full"
                                    stroke="currentColor"
                                    fill="currentColor"
                                    viewBox="0 0 6 26"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <circle
                                      cx="2.785"
                                      cy="2.785"
                                      r="2.785"
                                      fill="currentColor"
                                    />
                                    <circle
                                      cx="2.785"
                                      cy="12.9964"
                                      r="2.785"
                                      fill="currentColor"
                                    />
                                    <circle
                                      cx="2.785"
                                      cy="23.2083"
                                      r="2.785"
                                      fill="currentColor"
                                    />
                                  </svg>
                                </button>
                              );
                            }}
                          >
                            <Dropdown.Item class="list-with-icon">
                              <svg
                                className="w-3.5 2xl:w-4"
                                viewBox="0 0 18 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <mask
                                  id="mask0_105_3429"
                                  maskUnits="userSpaceOnUse"
                                  x="0"
                                  y="0"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M0.000976562 0H17.1816V18.9395H0.000976562V0Z"
                                    fill="white"
                                  />
                                </mask>
                                <g mask="url(#mask0_105_3429)">
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M11.1113 2.01664L1.69625 13.7916C1.52525 14.0056 1.46225 14.2816 1.52525 14.5466L2.20625 17.4316L5.24525 17.3936C5.53425 17.3906 5.80125 17.2616 5.97825 17.0416C9.19525 13.0166 15.3283 5.34264 15.5023 5.11764C15.6663 4.85164 15.7303 4.47564 15.6443 4.11364C15.5563 3.74264 15.3253 3.42764 14.9923 3.22664C14.9213 3.17764 13.2363 1.86964 13.1843 1.82864C12.5503 1.32064 11.6253 1.40864 11.1113 2.01664V2.01664ZM1.61425 18.9396C1.26725 18.9396 0.965251 18.7016 0.884251 18.3626L0.0652509 14.8916C-0.103749 14.1726 0.0642509 13.4306 0.525251 12.8546L9.94525 1.07264C9.94925 1.06864 9.95225 1.06364 9.95625 1.05964C10.9893 -0.175357 12.8573 -0.357357 14.1173 0.653643C14.1673 0.692643 15.8403 1.99264 15.8403 1.99264C16.4483 2.35464 16.9233 3.00164 17.1033 3.76764C17.2823 4.52564 17.1523 5.30764 16.7353 5.96864C16.7043 6.01764 16.6773 6.05964 7.14925 17.9796C6.69025 18.5516 6.00225 18.8846 5.26325 18.8936L1.62425 18.9396H1.61425Z"
                                    fill="currentColor"
                                  />
                                </g>
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M14.2244 8.68487C14.0644 8.68487 13.9044 8.63387 13.7674 8.52987L8.3154 4.34187C7.9874 4.08987 7.9254 3.61987 8.1774 3.28987C8.4304 2.96187 8.9004 2.90087 9.2294 3.15287L14.6824 7.33987C15.0104 7.59187 15.0724 8.06287 14.8194 8.39187C14.6724 8.58387 14.4494 8.68487 14.2244 8.68487"
                                  fill="currentColor"
                                />
                              </svg>
                              <p className="font-18 font-light">Edit</p>
                            </Dropdown.Item>
                            <Dropdown.Item class="list-with-icon">
                              <svg
                                className="w-4 2xl:w-5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="m9 13.5 3 3m0 0 3-3m-3 3v-6m1.06-4.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
                                />
                              </svg>
                              <p className="font-18 font-light">Archive</p>
                            </Dropdown.Item>
                            <Dropdown.Item class="list-with-icon">
                              <svg
                                className="w-4 2xl:w-5"
                                viewBox="0 0 18 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M8.784 18.9999C7.49673 18.9999 6.24176 18.9856 5.00009 18.96C3.41167 18.9286 2.3125 17.8988 2.13295 16.2724C1.8337 13.5744 1.32164 7.21496 1.31689 7.15131C1.28459 6.75896 1.57719 6.41505 1.96955 6.3837C2.35621 6.37325 2.70581 6.64496 2.73716 7.03636C2.74191 7.10096 3.25302 13.4385 3.54942 16.1156C3.65107 17.04 4.14983 17.5169 5.02955 17.535C7.40458 17.5853 9.82807 17.5882 12.4406 17.5407C13.3754 17.5226 13.8808 17.0552 13.9853 16.109C14.2798 13.4547 14.7928 7.10096 14.7985 7.03636C14.8299 6.64496 15.1766 6.37135 15.5652 6.3837C15.9576 6.416 16.2502 6.75896 16.2188 7.15131C16.2131 7.21591 15.6982 13.5915 15.4018 16.2657C15.2175 17.9254 14.1212 18.9353 12.4663 18.9657C11.1999 18.9875 9.97817 18.9999 8.784 18.9999"
                                  fill="currentColor"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M16.8229 4.73947H0.712511C0.319205 4.73947 0 4.42027 0 4.02696C0 3.63366 0.319205 3.31445 0.712511 3.31445H16.8229C17.2162 3.31445 17.5354 3.63366 17.5354 4.02696C17.5354 4.42027 17.2162 4.73947 16.8229 4.73947"
                                  fill="currentColor"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M13.719 4.73962C12.6379 4.73962 11.6993 3.96916 11.4865 2.90894L11.2556 1.75373C11.2072 1.57797 11.0067 1.42502 10.7787 1.42502H6.7573C6.52929 1.42502 6.32884 1.57797 6.27089 1.79743L6.04954 2.90894C5.83768 3.96916 4.89812 4.73962 3.817 4.73962C3.4237 4.73962 3.10449 4.42042 3.10449 4.02711C3.10449 3.6338 3.4237 3.3146 3.817 3.3146C4.22171 3.3146 4.57321 3.0258 4.65302 2.62869L4.88387 1.47347C5.11852 0.588059 5.88518 0 6.7573 0H10.7787C11.6508 0 12.4175 0.588059 12.6426 1.43072L12.8839 2.62869C12.9628 3.0258 13.3143 3.3146 13.719 3.3146C14.1123 3.3146 14.4315 3.6338 14.4315 4.02711C14.4315 4.42042 14.1123 4.73962 13.719 4.73962"
                                  fill="currentColor"
                                />
                              </svg>
                              <p className="font-18 font-light">Delete</p>
                            </Dropdown.Item>
                          </Dropdown>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <Paggination />
        </div>
          )
        }
       
        {
          tabOpen == 'details' && (
          <div
            id="details"
            className="bg-white px-6 py-4 2xl:px-8 2xl:py-6 mt-5 2xl:mt-7 space-y-8 2xl:space-y-12"
          >
            <div>
              <h3 className="font-24 capitalize mb-4 2xl:mb-6 font-medium">
                Contact Details
              </h3>
              <div className="flex flex-wrap -mx-4 gap-y-6 2xl:gap-y-8">
                <div className="px-4 w-full lg:w-1/2">
                  <label className="default-label" htmlFor="">
                    Contact Name
                  </label>
                  <p className="text-gray-light font-[300] font-18">
                    Robert Dewayne
                  </p>
                </div>
                <div className="px-4 w-full lg:w-1/2">
                  <label className="default-label" htmlFor="">
                    Account Number (Unique ID to help identity this contact)
                  </label>
                  <p className="text-gray-light font-[300] font-18">
                    43746834y3434
                  </p>
                </div>
                <div className="px-4 w-full lg:w-1/2">
                  <label className="default-label" htmlFor="">
                    Contact Type
                  </label>
                  <p className="text-gray-light font-[300] font-18">Customer</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-24 capitalize mb-4 2xl:mb-6 font-medium">
                Main Person
              </h3>
              <div className="flex flex-wrap -mx-4 gap-y-6 2xl:gap-y-8">
                <div className="px-4 w-full lg:w-1/2">
                  <label className="default-label" htmlFor="">
                    Full Name
                  </label>
                  <p className="text-gray-light font-[300] font-18">
                    Robert Dewayne
                  </p>
                </div>
                <div className="px-4 w-full lg:w-1/2">
                  <label className="default-label" htmlFor="">
                    Email
                  </label>
                  <p className="text-gray-light font-[300] font-18">
                    raquibapk@gmail.com
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-24 capitalize mb-4 2xl:mb-6 font-medium">
                Business information
              </h3>
              <div className="flex flex-wrap -mx-4 gap-y-6 2xl:gap-y-8">
                <div className="px-4 w-full lg:w-1/2">
                  <label className="default-label" htmlFor="">
                    Phone Number
                  </label>
                  <p className="text-gray-light font-[300] font-18">
                    +1(209)237-0450
                  </p>
                </div>
                <div className="px-4 w-full lg:w-1/2">
                  <label className="default-label" htmlFor="">
                    Website
                  </label>
                  <p className="text-gray-light font-[300] font-18">
                    www.consolhq.com
                  </p>
                </div>
                <div className="px-4 w-full lg:w-1/2">
                  <label className="default-label" htmlFor="">
                    Company registration number
                  </label>
                  <p className="text-gray-light font-[300] font-18">
                    {" "}
                    3463456546yhr5{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          )
        }
        {
          tabOpen == 'assessments' && (
            <div
              id="assessments"
              className="h-[300px] bg-white px-6 py-4 2xl:px-8 2xl:py-6 mt-5 2xl:mt-7"
            ></div>
          )
        }
      </div>
    </>
  );
}
