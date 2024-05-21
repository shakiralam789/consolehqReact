
import { NavLink } from "react-router-dom"
import Paggination from "../../../components/admin/Paggination"

import { Dropdown } from "flowbite-react"
import BreadCrumb from "../../../components/admin/BreadCrumb"

export default function Contacts() {
  return (
    <>
    
    <div className="flex space-x-8">
    </div>
        <BreadCrumb title='Contacts' navigation={true}/>

        <div className="bg-white mt-5 sm:mt-6">
            <div className="py-4 sm:py-5 px-4 sm:px-5 2xl:px-8 2xl:py-6 border-b">
                <div className="flex flex-wrap items-center -mx-2 gap-y-4">
                  <div className="w-full md:w-3/12 px-2">
                      <h5 className="text-gray-dark font-medium font-24">All Contacts</h5>
                  </div>
                  <div className="w-full sm:w-7/12 md:w-6/12 px-2">
                      <div className="flex items-center border px-4 2xl:px-6">
                            <svg className="size-[18px] 2xl:size[20px] text-gray-light" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"></path>
                            </svg>
                          <input type="search" className="default-search-input flex-1" placeholder="Search Contact" />                                                                        
                      </div>
                  </div>
                  <div className="w-full sm:w-5/12 md:w-3/12 px-2">
                      <div className="flex items-center justify-end">
                        
                      <div className="relative group/main w-full sm:w-fit">
                        <Dropdown className="w-[150px] dropdown px-2" dismissOnClick='false' renderTrigger={()=>
                          <button className="w-full sm:w-fit flex items-center justify-between px-3 2xl:px-4 py-[11px] 2xl:py-5 sm:rounded-md bg-white border sm:border-0 sm:shadow-md text-gray-dark" type="button">
                          <div className="flex items-center space-x-3">
                            <svg className="size-4 2xl:size[20px] group" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M5.81973 1.50005L5.81973 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M1 6.33984L5.81918 1.49986L10.6392 6.33984" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M15.4589 13.5L15.4589 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M10.6392 8.66016L15.4583 13.5001L20.2783 8.66016" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <p className="font-20 font-medium mr-4 border-l pl-4">Name</p>
                          </div>
                          <svg className="group-has-[.dropdown]/main:rotate-180 duration-300 size-3 2xl:size[20px] ml-4" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 1L8 8L1 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>   
                          </button>
                        }>
                          <Dropdown.Item class="list">
                              name 
                          </Dropdown.Item>
                          <Dropdown.Item class="list">
                              Email 
                          </Dropdown.Item>
                          <Dropdown.Item class="list">
                              Date added 
                          </Dropdown.Item>
                          <Dropdown.Item class="list">
                              They Owe 
                          </Dropdown.Item>
                          <Dropdown.Item class="list">
                              You Owe 
                          </Dropdown.Item>
                          
                          <Dropdown.Divider class="border-t w-full py-2 px-2">
                              <button className="w-full hover:text-secondary flex items-center space-x-2">
                                <svg className="size-4 2xl:size-5" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M5.81973 1.50005L5.81973 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                  <path d="M1 6.33984L5.81918 1.49986L10.6392 6.33984" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                  <path d="M15.4589 13.5L15.4589 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                  <path d="M10.6392 8.66016L15.4583 13.5001L20.2783 8.66016" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <p className="font-18">Reverse</p>
                              </button>
                          </Dropdown.Divider>
                        </Dropdown>
                      </div>

                      </div>
                  </div>
              </div>
            </div>
            <div className="py-5 px-4 sm:px-5 2xl:px-8 2xl:py-6 border-b">
                <div className="flex flex-wrap items-center -mx-4">
                  <div className="w-full sm:w-1/2 px-4 border-b sm:border-b-0 pb-5 sm:pb-0">
                      <h6 className="font-light font-18 text-gray-light">2 Contacts Selected</h6>
                  </div>
                  <div className="w-full sm:w-1/2 px-4 pt-5 sm:pt-0">
                      <div className="flex items-center justify-end">


                          <NavLink className="w-1/2 sm:w-fit flex justify-center sm:justify-start items-center space-x-3 2xl:space-x-4 pr-4 2xl:pr-6 group" to={''}>
                              <p className="text-gray-dark font-20 font-medium group-hover:text-secondary duration-300 pl-3 2xl:pl-4">Export</p>
                              <svg className="group-hover:text-secondary size-4 2xl:size-6 duration-300" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.7335 1.02995L14.7335 17.8125" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M18.7881 5.11035L14.7336 1.02935L10.6792 5.11035" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M21.1752 10.6338H22.4724C25.3019 10.6338 27.5947 12.9321 27.5947 15.7699L27.5947 22.5771C27.5947 25.4065 25.3075 27.6993 22.485 27.6993L6.99574 27.6993C4.16625 27.6993 1.87207 25.3995 1.87207 22.5632L1.87207 15.7545C1.87207 12.9266 4.16069 10.6338 6.98184 10.6338H8.29161" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>                                        
                          </NavLink>
                          <NavLink to="/contacts/archive" className="relative w-1/2 sm:w-fit flex justify-center sm:justify-start items-center pl-4 2xl:pl-6 group">
                              <p className="duration-300 text-gray-dark font-20 font-medium group-hover:text-secondary pr-3 2xl:pr-4">Archive</p>
                              <svg className="group-hover:text-secondary duration-300 mx-auto size-6 2xl:size-8 text-primary" width="100pt" height="100pt" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <g id="currentColorff">
                                <path fill="currentColor" opacity="1.00" d=" M 14.33 17.34 C 18.10 16.14 22.12 16.83 26.01 16.67 C 29.88 16.79 33.91 16.19 37.63 17.48 C 42.44 19.67 45.67 24.17 50.13 26.86 C 61.07 27.40 72.05 26.76 83.00 27.16 C 87.84 27.43 92.01 32.11 91.69 36.96 C 91.63 49.29 91.70 61.62 91.66 73.95 C 91.75 79.01 87.08 83.53 82.02 83.31 C 61.01 83.38 40.00 83.30 18.99 83.34 C 13.60 83.95 8.22 79.46 8.34 73.96 C 8.33 57.99 8.32 42.02 8.35 26.05 C 8.27 22.28 10.87 18.71 14.33 17.34 M 16.28 23.21 C 14.36 24.00 14.74 26.32 14.62 27.98 C 14.64 42.66 14.64 57.34 14.61 72.01 C 14.74 73.67 14.37 76.00 16.29 76.78 C 19.17 77.24 22.10 77.01 25.00 77.05 C 43.01 77.05 61.02 77.03 79.03 77.07 C 80.59 77.04 82.17 77.08 83.71 76.77 C 85.65 76.03 85.24 73.65 85.38 72.02 C 85.33 60.34 85.43 48.65 85.34 36.97 C 85.34 35.50 84.62 33.28 82.83 33.35 C 71.26 33.15 59.66 33.64 48.11 33.14 C 43.23 30.50 39.85 25.57 34.86 23.16 C 28.69 22.83 22.44 22.75 16.28 23.21 Z" />
                                <path fill="currentColor" opacity="1.00" d=" M 44.00 38.00 C 47.97 37.39 52.03 37.39 56.00 38.00 C 55.92 39.29 56.59 41.49 54.58 41.55 C 51.54 41.80 48.46 41.80 45.42 41.55 C 43.44 41.58 44.08 39.22 44.00 38.00 Z" />
                                <path fill="currentColor" opacity="1.00" d=" M 44.09 46.20 C 48.00 45.55 52.00 45.55 55.91 46.20 C 55.89 47.48 56.51 49.35 54.82 49.87 C 51.62 50.12 48.38 50.12 45.18 49.87 C 43.49 49.38 44.14 47.46 44.09 46.20 Z" />
                                <path fill="currentColor" opacity="1.00" d=" M 45.75 54.78 C 48.43 53.68 51.55 54.25 54.36 54.60 C 55.28 58.81 57.19 63.34 55.57 67.60 C 53.14 72.07 45.89 71.65 44.13 66.87 C 43.24 62.82 44.46 58.61 45.75 54.78 M 48.10 63.05 C 48.04 64.57 48.02 66.59 50.00 66.77 C 51.98 66.58 51.95 64.57 51.89 63.06 C 50.63 62.77 49.37 62.77 48.10 63.05 Z" />
                                </g>
                              </svg>
                              <span className="absolute -top-2 -bottom-2 bg-gray-light/20 w-[2px] left-0"></span>
                          </NavLink>
                      </div>
                  </div>
              </div>
            </div>
            <div className="px-2 sm:px-5 2xl:px-8 pb-5 2xl:pb-8">
              <div className="overflow-x-scroll">
                <table className="w-full border-separate border-spacing-y-0">
                  <thead className="whitespace-nowrap">
                    <tr>
                      <th className="w-8/12 py-4 2xl:py-6 px-2 sm:px-5 2xl:px-7">
                        <div className="flex items-center space-x-3 2xl:space-x-5">
                          <label className="flex group/check">
                            
                            <span className="all-check cursor-pointer group-has-[input:checked]/check:bg-default-green group-has-[input:checked]/check:border-default-green flex justify-center items-center checkbox-size border border-gray-light rounded-[5px]">
                              <svg className="check-icon-size text-white group-has-[input:checked]/check:block hidden" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                              <input className="border-[1.5px] border-gray-dark hidden" id="" name="" type="checkbox" />
                            </span>
                          </label>
                          <label htmlFor="contact" className="font-20 font-medium text-gray-dark">Contact</label>
                        </div>
                      </th>
                      <th className="max-w-[400px] py-4 2xl:py-6 sm:px-5 2xl:px-7">
                        <div className="flex items-center space-x-40 text-gray-dark font-medium font-20 pr-6">
                            <p>They Owe</p>
                        </div>
                      </th>
                      <th className="max-w-[400px] py-4 2xl:py-6 sm:px-5 2xl:px-7">
                        <div className="flex items-center space-x-40 text-gray-dark font-medium font-20 pr-6">
                            <p>You Owe</p>
                        </div>
                      </th>
                      <th className="pb-2.5 2xl:pb-4">
                       
                      </th>
                    </tr>
                  </thead>
                  <tbody className="without-border">
                    <tr className="table-row table-row-css *:border-transparent">
                      <td className="px-2 sm:px-5 py-3 2xl:px-7 2xl:py-6">
                        <div className="flex space-x-3 2xl:space-x-5">
                          <label className="flex group/check">
                           
                            <span className="mt-1 2xl:mt-0 sub-check cursor-pointer group-has-[input:checked]/check:bg-default-green group-has-[input:checked]/check:border-default-green flex justify-center items-center checkbox-size border border-gray-light rounded-[5px]">
                              <svg className="check-icon-size text-white group-has-[input:checked]/check:block hidden" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                              <input className="border-[1.5px] border-gray-dark hidden" id="" name="" type="checkbox" />
                            </span>
                          </label>
                            <div>
                              <p className="text-gray-dark font-20 group-[.active]:text-default-green name font-medium">Robert Dewayne</p>
                              <p className="text-gray-light font-16 mt-2.5 group-[.active]:text-default-green email opacity-70">raquibapk@gmail.com</p>
                            </div>
                        </div>
                      </td>
                      <td className="px-2 sm:px-5 py-3 2xl:px-7 2xl:py-6"></td>
                      <td className="px-2 sm:px-5 py-3 2xl:px-7 2xl:py-6"></td>
                      <td className="px-2 sm:px-5 py-3 2xl:px-7 2xl:py-6">
                      <div className="group/main flex items-center justify-end">
                          <Dropdown className="dropdown px-2 w-[130px] 2xl:w-[170px] z-[100]" dismissOnClick='false' renderTrigger={()=>{
                            return <button className="group-has-[.dropdown]/main:text-secondary text-gray-light focus:text-secondary hover:text-secondary flex items-center justify-center !size-[25px] 2xl:!size-[34px] p-1.5 2xl:p-2">
                                    <svg className="h-full" stroke="currentColor" fill="currentColor" viewBox="0 0 6 26" xmlns="http://www.w3.org/2000/svg">
                                      <circle cx="2.785" cy="2.785" r="2.785" fill="currentColor"/>
                                      <circle cx="2.785" cy="12.9964" r="2.785" fill="currentColor"/>
                                      <circle cx="2.785" cy="23.2083" r="2.785" fill="currentColor"/>
                                      </svg>
                                  </button>
                            }}>
                            <Dropdown.Item class="list-with-icon">
                              <svg className="w-3.5 2xl:w-4" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <mask id="mask0_105_3429" maskUnits="userSpaceOnUse" x="0" y="0">
                                  <path fillRule="evenodd" clipRule="evenodd" d="M0.000976562 0H17.1816V18.9395H0.000976562V0Z" fill="white"/>
                                  </mask>
                                  <g mask="url(#mask0_105_3429)">
                                  <path fillRule="evenodd" clipRule="evenodd" d="M11.1113 2.01664L1.69625 13.7916C1.52525 14.0056 1.46225 14.2816 1.52525 14.5466L2.20625 17.4316L5.24525 17.3936C5.53425 17.3906 5.80125 17.2616 5.97825 17.0416C9.19525 13.0166 15.3283 5.34264 15.5023 5.11764C15.6663 4.85164 15.7303 4.47564 15.6443 4.11364C15.5563 3.74264 15.3253 3.42764 14.9923 3.22664C14.9213 3.17764 13.2363 1.86964 13.1843 1.82864C12.5503 1.32064 11.6253 1.40864 11.1113 2.01664V2.01664ZM1.61425 18.9396C1.26725 18.9396 0.965251 18.7016 0.884251 18.3626L0.0652509 14.8916C-0.103749 14.1726 0.0642509 13.4306 0.525251 12.8546L9.94525 1.07264C9.94925 1.06864 9.95225 1.06364 9.95625 1.05964C10.9893 -0.175357 12.8573 -0.357357 14.1173 0.653643C14.1673 0.692643 15.8403 1.99264 15.8403 1.99264C16.4483 2.35464 16.9233 3.00164 17.1033 3.76764C17.2823 4.52564 17.1523 5.30764 16.7353 5.96864C16.7043 6.01764 16.6773 6.05964 7.14925 17.9796C6.69025 18.5516 6.00225 18.8846 5.26325 18.8936L1.62425 18.9396H1.61425Z" fill="currentColor"/>
                                  </g>
                                  <path fillRule="evenodd" clipRule="evenodd" d="M14.2244 8.68487C14.0644 8.68487 13.9044 8.63387 13.7674 8.52987L8.3154 4.34187C7.9874 4.08987 7.9254 3.61987 8.1774 3.28987C8.4304 2.96187 8.9004 2.90087 9.2294 3.15287L14.6824 7.33987C15.0104 7.59187 15.0724 8.06287 14.8194 8.39187C14.6724 8.58387 14.4494 8.68487 14.2244 8.68487" fill="currentColor"/>
                                </svg>
                                <p className="font-18 font-light">Edit</p>   
                            </Dropdown.Item>
                            <Dropdown.Item class="list-with-icon">
                                <svg className="w-4 2xl:w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="m9 13.5 3 3m0 0 3-3m-3 3v-6m1.06-4.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                                </svg>                                                                     
                                  <p className="font-18 font-light">Archive</p>   
                            </Dropdown.Item>
                            <Dropdown.Item class="list-with-icon">
                            <svg className="w-4 2xl:w-5" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M8.784 18.9999C7.49673 18.9999 6.24176 18.9856 5.00009 18.96C3.41167 18.9286 2.3125 17.8988 2.13295 16.2724C1.8337 13.5744 1.32164 7.21496 1.31689 7.15131C1.28459 6.75896 1.57719 6.41505 1.96955 6.3837C2.35621 6.37325 2.70581 6.64496 2.73716 7.03636C2.74191 7.10096 3.25302 13.4385 3.54942 16.1156C3.65107 17.04 4.14983 17.5169 5.02955 17.535C7.40458 17.5853 9.82807 17.5882 12.4406 17.5407C13.3754 17.5226 13.8808 17.0552 13.9853 16.109C14.2798 13.4547 14.7928 7.10096 14.7985 7.03636C14.8299 6.64496 15.1766 6.37135 15.5652 6.3837C15.9576 6.416 16.2502 6.75896 16.2188 7.15131C16.2131 7.21591 15.6982 13.5915 15.4018 16.2657C15.2175 17.9254 14.1212 18.9353 12.4663 18.9657C11.1999 18.9875 9.97817 18.9999 8.784 18.9999" fill="currentColor"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M16.8229 4.73947H0.712511C0.319205 4.73947 0 4.42027 0 4.02696C0 3.63366 0.319205 3.31445 0.712511 3.31445H16.8229C17.2162 3.31445 17.5354 3.63366 17.5354 4.02696C17.5354 4.42027 17.2162 4.73947 16.8229 4.73947" fill="currentColor"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M13.719 4.73962C12.6379 4.73962 11.6993 3.96916 11.4865 2.90894L11.2556 1.75373C11.2072 1.57797 11.0067 1.42502 10.7787 1.42502H6.7573C6.52929 1.42502 6.32884 1.57797 6.27089 1.79743L6.04954 2.90894C5.83768 3.96916 4.89812 4.73962 3.817 4.73962C3.4237 4.73962 3.10449 4.42042 3.10449 4.02711C3.10449 3.6338 3.4237 3.3146 3.817 3.3146C4.22171 3.3146 4.57321 3.0258 4.65302 2.62869L4.88387 1.47347C5.11852 0.588059 5.88518 0 6.7573 0H10.7787C11.6508 0 12.4175 0.588059 12.6426 1.43072L12.8839 2.62869C12.9628 3.0258 13.3143 3.3146 13.719 3.3146C14.1123 3.3146 14.4315 3.6338 14.4315 4.02711C14.4315 4.42042 14.1123 4.73962 13.719 4.73962" fill="currentColor"/>
                                    </svg>                                                                             
                                    <p className="font-18 font-light">Delete</p>   
                            </Dropdown.Item>
                          </Dropdown>
                        </div>
                      </td>
                    </tr>

                    <tr className="table-row table-row-css *:border-transparent">
                      <td className="px-2 sm:px-5 py-3 2xl:px-7 2xl:py-6">
                        <div className="flex space-x-3 2xl:space-x-5">
                          <label className="flex group/check">
                           
                            <span className="mt-1 2xl:mt-0 sub-check cursor-pointer group-has-[input:checked]/check:bg-default-green group-has-[input:checked]/check:border-default-green flex justify-center items-center checkbox-size border border-gray-light rounded-[5px]">
                              <svg className="check-icon-size text-white group-has-[input:checked]/check:block hidden" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                              <input className="border-[1.5px] border-gray-dark hidden" id="" name="" type="checkbox" />
                            </span>
                          </label>
                            <div>
                              <p className="text-gray-dark font-20 group-[.active]:text-default-green name font-medium">Robert Dewayne</p>
                              <p className="text-gray-light font-16 mt-2.5 group-[.active]:text-default-green email opacity-70">raquibapk@gmail.com</p>
                            </div>
                        </div>
                      </td>
                      <td className="px-2 sm:px-5 py-3 2xl:px-7 2xl:py-6"></td>
                      <td className="px-2 sm:px-5 py-3 2xl:px-7 2xl:py-6"></td>
                      <td className="px-2 sm:px-5 py-3 2xl:px-7 2xl:py-6">
                      <div className="group/main flex items-center justify-end">
                          <Dropdown className="dropdown px-2 w-[130px] 2xl:w-[170px] z-[100]" dismissOnClick='false' renderTrigger={()=>{
                            return <button className="group-has-[.dropdown]/main:text-secondary text-gray-light focus:text-secondary hover:text-secondary flex items-center justify-center !size-[25px] 2xl:!size-[34px] p-1.5 2xl:p-2">
                                    <svg className="h-full" stroke="currentColor" fill="currentColor" viewBox="0 0 6 26" xmlns="http://www.w3.org/2000/svg">
                                      <circle cx="2.785" cy="2.785" r="2.785" fill="currentColor"/>
                                      <circle cx="2.785" cy="12.9964" r="2.785" fill="currentColor"/>
                                      <circle cx="2.785" cy="23.2083" r="2.785" fill="currentColor"/>
                                      </svg>
                                  </button>
                            }}>
                            <Dropdown.Item class="list-with-icon">
                              <svg className="w-3.5 2xl:w-4" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <mask id="mask0_105_3429" maskUnits="userSpaceOnUse" x="0" y="0">
                                  <path fillRule="evenodd" clipRule="evenodd" d="M0.000976562 0H17.1816V18.9395H0.000976562V0Z" fill="white"/>
                                  </mask>
                                  <g mask="url(#mask0_105_3429)">
                                  <path fillRule="evenodd" clipRule="evenodd" d="M11.1113 2.01664L1.69625 13.7916C1.52525 14.0056 1.46225 14.2816 1.52525 14.5466L2.20625 17.4316L5.24525 17.3936C5.53425 17.3906 5.80125 17.2616 5.97825 17.0416C9.19525 13.0166 15.3283 5.34264 15.5023 5.11764C15.6663 4.85164 15.7303 4.47564 15.6443 4.11364C15.5563 3.74264 15.3253 3.42764 14.9923 3.22664C14.9213 3.17764 13.2363 1.86964 13.1843 1.82864C12.5503 1.32064 11.6253 1.40864 11.1113 2.01664V2.01664ZM1.61425 18.9396C1.26725 18.9396 0.965251 18.7016 0.884251 18.3626L0.0652509 14.8916C-0.103749 14.1726 0.0642509 13.4306 0.525251 12.8546L9.94525 1.07264C9.94925 1.06864 9.95225 1.06364 9.95625 1.05964C10.9893 -0.175357 12.8573 -0.357357 14.1173 0.653643C14.1673 0.692643 15.8403 1.99264 15.8403 1.99264C16.4483 2.35464 16.9233 3.00164 17.1033 3.76764C17.2823 4.52564 17.1523 5.30764 16.7353 5.96864C16.7043 6.01764 16.6773 6.05964 7.14925 17.9796C6.69025 18.5516 6.00225 18.8846 5.26325 18.8936L1.62425 18.9396H1.61425Z" fill="currentColor"/>
                                  </g>
                                  <path fillRule="evenodd" clipRule="evenodd" d="M14.2244 8.68487C14.0644 8.68487 13.9044 8.63387 13.7674 8.52987L8.3154 4.34187C7.9874 4.08987 7.9254 3.61987 8.1774 3.28987C8.4304 2.96187 8.9004 2.90087 9.2294 3.15287L14.6824 7.33987C15.0104 7.59187 15.0724 8.06287 14.8194 8.39187C14.6724 8.58387 14.4494 8.68487 14.2244 8.68487" fill="currentColor"/>
                                </svg>
                                <p className="font-18 font-light">Edit</p>   
                            </Dropdown.Item>
                            <Dropdown.Item class="list-with-icon">
                                <svg className="w-4 2xl:w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="m9 13.5 3 3m0 0 3-3m-3 3v-6m1.06-4.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                                </svg>                                                                     
                                  <p className="font-18 font-light">Archive</p>   
                            </Dropdown.Item>
                            <Dropdown.Item class="list-with-icon">
                            <svg className="w-4 2xl:w-5" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M8.784 18.9999C7.49673 18.9999 6.24176 18.9856 5.00009 18.96C3.41167 18.9286 2.3125 17.8988 2.13295 16.2724C1.8337 13.5744 1.32164 7.21496 1.31689 7.15131C1.28459 6.75896 1.57719 6.41505 1.96955 6.3837C2.35621 6.37325 2.70581 6.64496 2.73716 7.03636C2.74191 7.10096 3.25302 13.4385 3.54942 16.1156C3.65107 17.04 4.14983 17.5169 5.02955 17.535C7.40458 17.5853 9.82807 17.5882 12.4406 17.5407C13.3754 17.5226 13.8808 17.0552 13.9853 16.109C14.2798 13.4547 14.7928 7.10096 14.7985 7.03636C14.8299 6.64496 15.1766 6.37135 15.5652 6.3837C15.9576 6.416 16.2502 6.75896 16.2188 7.15131C16.2131 7.21591 15.6982 13.5915 15.4018 16.2657C15.2175 17.9254 14.1212 18.9353 12.4663 18.9657C11.1999 18.9875 9.97817 18.9999 8.784 18.9999" fill="currentColor"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M16.8229 4.73947H0.712511C0.319205 4.73947 0 4.42027 0 4.02696C0 3.63366 0.319205 3.31445 0.712511 3.31445H16.8229C17.2162 3.31445 17.5354 3.63366 17.5354 4.02696C17.5354 4.42027 17.2162 4.73947 16.8229 4.73947" fill="currentColor"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M13.719 4.73962C12.6379 4.73962 11.6993 3.96916 11.4865 2.90894L11.2556 1.75373C11.2072 1.57797 11.0067 1.42502 10.7787 1.42502H6.7573C6.52929 1.42502 6.32884 1.57797 6.27089 1.79743L6.04954 2.90894C5.83768 3.96916 4.89812 4.73962 3.817 4.73962C3.4237 4.73962 3.10449 4.42042 3.10449 4.02711C3.10449 3.6338 3.4237 3.3146 3.817 3.3146C4.22171 3.3146 4.57321 3.0258 4.65302 2.62869L4.88387 1.47347C5.11852 0.588059 5.88518 0 6.7573 0H10.7787C11.6508 0 12.4175 0.588059 12.6426 1.43072L12.8839 2.62869C12.9628 3.0258 13.3143 3.3146 13.719 3.3146C14.1123 3.3146 14.4315 3.6338 14.4315 4.02711C14.4315 4.42042 14.1123 4.73962 13.719 4.73962" fill="currentColor"/>
                                    </svg>                                                                             
                                    <p className="font-18 font-light">Delete</p>   
                            </Dropdown.Item>
                          </Dropdown>
                        </div>
                      </td>
                    </tr>
                    <tr className="table-row table-row-css *:border-transparent">
                      <td className="px-2 sm:px-5 py-3 2xl:px-7 2xl:py-6">
                        <div className="flex space-x-3 2xl:space-x-5">
                          <label className="flex group/check">
                           
                            <span className="mt-1 2xl:mt-0 sub-check cursor-pointer group-has-[input:checked]/check:bg-default-green group-has-[input:checked]/check:border-default-green flex justify-center items-center checkbox-size border border-gray-light rounded-[5px]">
                              <svg className="check-icon-size text-white group-has-[input:checked]/check:block hidden" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                              <input className="border-[1.5px] border-gray-dark hidden" id="" name="" type="checkbox" />
                            </span>
                          </label>
                            <div>
                              <p className="text-gray-dark font-20 group-[.active]:text-default-green name font-medium">Robert Dewayne</p>
                              <p className="text-gray-light font-16 mt-2.5 group-[.active]:text-default-green email opacity-70">raquibapk@gmail.com</p>
                            </div>
                        </div>
                      </td>
                      <td className="px-2 sm:px-5 py-3 2xl:px-7 2xl:py-6"></td>
                      <td className="px-2 sm:px-5 py-3 2xl:px-7 2xl:py-6"></td>
                      <td className="px-2 sm:px-5 py-3 2xl:px-7 2xl:py-6">
                      <div className="group/main flex items-center justify-end">
                          <Dropdown className="dropdown px-2 w-[130px] 2xl:w-[170px] z-[100]" dismissOnClick='false' renderTrigger={()=>{
                            return <button className="group-has-[.dropdown]/main:text-secondary text-gray-light focus:text-secondary hover:text-secondary flex items-center justify-center !size-[25px] 2xl:!size-[34px] p-1.5 2xl:p-2">
                                    <svg className="h-full" stroke="currentColor" fill="currentColor" viewBox="0 0 6 26" xmlns="http://www.w3.org/2000/svg">
                                      <circle cx="2.785" cy="2.785" r="2.785" fill="currentColor"/>
                                      <circle cx="2.785" cy="12.9964" r="2.785" fill="currentColor"/>
                                      <circle cx="2.785" cy="23.2083" r="2.785" fill="currentColor"/>
                                      </svg>
                                  </button>
                            }}>
                            <Dropdown.Item class="list-with-icon">
                              <svg className="w-3.5 2xl:w-4" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <mask id="mask0_105_3429" maskUnits="userSpaceOnUse" x="0" y="0">
                                  <path fillRule="evenodd" clipRule="evenodd" d="M0.000976562 0H17.1816V18.9395H0.000976562V0Z" fill="white"/>
                                  </mask>
                                  <g mask="url(#mask0_105_3429)">
                                  <path fillRule="evenodd" clipRule="evenodd" d="M11.1113 2.01664L1.69625 13.7916C1.52525 14.0056 1.46225 14.2816 1.52525 14.5466L2.20625 17.4316L5.24525 17.3936C5.53425 17.3906 5.80125 17.2616 5.97825 17.0416C9.19525 13.0166 15.3283 5.34264 15.5023 5.11764C15.6663 4.85164 15.7303 4.47564 15.6443 4.11364C15.5563 3.74264 15.3253 3.42764 14.9923 3.22664C14.9213 3.17764 13.2363 1.86964 13.1843 1.82864C12.5503 1.32064 11.6253 1.40864 11.1113 2.01664V2.01664ZM1.61425 18.9396C1.26725 18.9396 0.965251 18.7016 0.884251 18.3626L0.0652509 14.8916C-0.103749 14.1726 0.0642509 13.4306 0.525251 12.8546L9.94525 1.07264C9.94925 1.06864 9.95225 1.06364 9.95625 1.05964C10.9893 -0.175357 12.8573 -0.357357 14.1173 0.653643C14.1673 0.692643 15.8403 1.99264 15.8403 1.99264C16.4483 2.35464 16.9233 3.00164 17.1033 3.76764C17.2823 4.52564 17.1523 5.30764 16.7353 5.96864C16.7043 6.01764 16.6773 6.05964 7.14925 17.9796C6.69025 18.5516 6.00225 18.8846 5.26325 18.8936L1.62425 18.9396H1.61425Z" fill="currentColor"/>
                                  </g>
                                  <path fillRule="evenodd" clipRule="evenodd" d="M14.2244 8.68487C14.0644 8.68487 13.9044 8.63387 13.7674 8.52987L8.3154 4.34187C7.9874 4.08987 7.9254 3.61987 8.1774 3.28987C8.4304 2.96187 8.9004 2.90087 9.2294 3.15287L14.6824 7.33987C15.0104 7.59187 15.0724 8.06287 14.8194 8.39187C14.6724 8.58387 14.4494 8.68487 14.2244 8.68487" fill="currentColor"/>
                                </svg>
                                <p className="font-18 font-light">Edit</p>   
                            </Dropdown.Item>
                            <Dropdown.Item class="list-with-icon">
                                <svg className="w-4 2xl:w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="m9 13.5 3 3m0 0 3-3m-3 3v-6m1.06-4.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                                </svg>                                                                     
                                  <p className="font-18 font-light">Archive</p>   
                            </Dropdown.Item>
                            <Dropdown.Item class="list-with-icon">
                            <svg className="w-4 2xl:w-5" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M8.784 18.9999C7.49673 18.9999 6.24176 18.9856 5.00009 18.96C3.41167 18.9286 2.3125 17.8988 2.13295 16.2724C1.8337 13.5744 1.32164 7.21496 1.31689 7.15131C1.28459 6.75896 1.57719 6.41505 1.96955 6.3837C2.35621 6.37325 2.70581 6.64496 2.73716 7.03636C2.74191 7.10096 3.25302 13.4385 3.54942 16.1156C3.65107 17.04 4.14983 17.5169 5.02955 17.535C7.40458 17.5853 9.82807 17.5882 12.4406 17.5407C13.3754 17.5226 13.8808 17.0552 13.9853 16.109C14.2798 13.4547 14.7928 7.10096 14.7985 7.03636C14.8299 6.64496 15.1766 6.37135 15.5652 6.3837C15.9576 6.416 16.2502 6.75896 16.2188 7.15131C16.2131 7.21591 15.6982 13.5915 15.4018 16.2657C15.2175 17.9254 14.1212 18.9353 12.4663 18.9657C11.1999 18.9875 9.97817 18.9999 8.784 18.9999" fill="currentColor"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M16.8229 4.73947H0.712511C0.319205 4.73947 0 4.42027 0 4.02696C0 3.63366 0.319205 3.31445 0.712511 3.31445H16.8229C17.2162 3.31445 17.5354 3.63366 17.5354 4.02696C17.5354 4.42027 17.2162 4.73947 16.8229 4.73947" fill="currentColor"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M13.719 4.73962C12.6379 4.73962 11.6993 3.96916 11.4865 2.90894L11.2556 1.75373C11.2072 1.57797 11.0067 1.42502 10.7787 1.42502H6.7573C6.52929 1.42502 6.32884 1.57797 6.27089 1.79743L6.04954 2.90894C5.83768 3.96916 4.89812 4.73962 3.817 4.73962C3.4237 4.73962 3.10449 4.42042 3.10449 4.02711C3.10449 3.6338 3.4237 3.3146 3.817 3.3146C4.22171 3.3146 4.57321 3.0258 4.65302 2.62869L4.88387 1.47347C5.11852 0.588059 5.88518 0 6.7573 0H10.7787C11.6508 0 12.4175 0.588059 12.6426 1.43072L12.8839 2.62869C12.9628 3.0258 13.3143 3.3146 13.719 3.3146C14.1123 3.3146 14.4315 3.6338 14.4315 4.02711C14.4315 4.42042 14.1123 4.73962 13.719 4.73962" fill="currentColor"/>
                                    </svg>                                                                             
                                    <p className="font-18 font-light">Delete</p>   
                            </Dropdown.Item>
                          </Dropdown>
                        </div>
                      </td>
                    </tr>
                    <tr className="table-row table-row-css *:border-transparent">
                      <td className="px-2 sm:px-5 py-3 2xl:px-7 2xl:py-6">
                        <div className="flex space-x-3 2xl:space-x-5">
                          <label className="flex group/check">
                           
                            <span className="mt-1 2xl:mt-0 sub-check cursor-pointer group-has-[input:checked]/check:bg-default-green group-has-[input:checked]/check:border-default-green flex justify-center items-center checkbox-size border border-gray-light rounded-[5px]">
                              <svg className="check-icon-size text-white group-has-[input:checked]/check:block hidden" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                              <input className="border-[1.5px] border-gray-dark hidden" id="" name="" type="checkbox" />
                            </span>
                          </label>
                            <div>
                              <p className="text-gray-dark font-20 group-[.active]:text-default-green name font-medium">Robert Dewayne</p>
                              <p className="text-gray-light font-16 mt-2.5 group-[.active]:text-default-green email opacity-70">raquibapk@gmail.com</p>
                            </div>
                        </div>
                      </td>
                      <td className="px-2 sm:px-5 py-3 2xl:px-7 2xl:py-6"></td>
                      <td className="px-2 sm:px-5 py-3 2xl:px-7 2xl:py-6"></td>
                      <td className="px-2 sm:px-5 py-3 2xl:px-7 2xl:py-6">
                      <div className="group/main flex items-center justify-end">
                          <Dropdown className="dropdown px-2 w-[130px] 2xl:w-[170px] z-[100]" dismissOnClick='false' renderTrigger={()=>{
                            return <button className="group-has-[.dropdown]/main:text-secondary text-gray-light focus:text-secondary hover:text-secondary flex items-center justify-center !size-[25px] 2xl:!size-[34px] p-1.5 2xl:p-2">
                                    <svg className="h-full" stroke="currentColor" fill="currentColor" viewBox="0 0 6 26" xmlns="http://www.w3.org/2000/svg">
                                      <circle cx="2.785" cy="2.785" r="2.785" fill="currentColor"/>
                                      <circle cx="2.785" cy="12.9964" r="2.785" fill="currentColor"/>
                                      <circle cx="2.785" cy="23.2083" r="2.785" fill="currentColor"/>
                                      </svg>
                                  </button>
                            }}>
                            <Dropdown.Item class="list-with-icon">
                              <svg className="w-3.5 2xl:w-4" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <mask id="mask0_105_3429" maskUnits="userSpaceOnUse" x="0" y="0">
                                  <path fillRule="evenodd" clipRule="evenodd" d="M0.000976562 0H17.1816V18.9395H0.000976562V0Z" fill="white"/>
                                  </mask>
                                  <g mask="url(#mask0_105_3429)">
                                  <path fillRule="evenodd" clipRule="evenodd" d="M11.1113 2.01664L1.69625 13.7916C1.52525 14.0056 1.46225 14.2816 1.52525 14.5466L2.20625 17.4316L5.24525 17.3936C5.53425 17.3906 5.80125 17.2616 5.97825 17.0416C9.19525 13.0166 15.3283 5.34264 15.5023 5.11764C15.6663 4.85164 15.7303 4.47564 15.6443 4.11364C15.5563 3.74264 15.3253 3.42764 14.9923 3.22664C14.9213 3.17764 13.2363 1.86964 13.1843 1.82864C12.5503 1.32064 11.6253 1.40864 11.1113 2.01664V2.01664ZM1.61425 18.9396C1.26725 18.9396 0.965251 18.7016 0.884251 18.3626L0.0652509 14.8916C-0.103749 14.1726 0.0642509 13.4306 0.525251 12.8546L9.94525 1.07264C9.94925 1.06864 9.95225 1.06364 9.95625 1.05964C10.9893 -0.175357 12.8573 -0.357357 14.1173 0.653643C14.1673 0.692643 15.8403 1.99264 15.8403 1.99264C16.4483 2.35464 16.9233 3.00164 17.1033 3.76764C17.2823 4.52564 17.1523 5.30764 16.7353 5.96864C16.7043 6.01764 16.6773 6.05964 7.14925 17.9796C6.69025 18.5516 6.00225 18.8846 5.26325 18.8936L1.62425 18.9396H1.61425Z" fill="currentColor"/>
                                  </g>
                                  <path fillRule="evenodd" clipRule="evenodd" d="M14.2244 8.68487C14.0644 8.68487 13.9044 8.63387 13.7674 8.52987L8.3154 4.34187C7.9874 4.08987 7.9254 3.61987 8.1774 3.28987C8.4304 2.96187 8.9004 2.90087 9.2294 3.15287L14.6824 7.33987C15.0104 7.59187 15.0724 8.06287 14.8194 8.39187C14.6724 8.58387 14.4494 8.68487 14.2244 8.68487" fill="currentColor"/>
                                </svg>
                                <p className="font-18 font-light">Edit</p>   
                            </Dropdown.Item>
                            <Dropdown.Item class="list-with-icon">
                                <svg className="w-4 2xl:w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="m9 13.5 3 3m0 0 3-3m-3 3v-6m1.06-4.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                                </svg>                                                                     
                                  <p className="font-18 font-light">Archive</p>   
                            </Dropdown.Item>
                            <Dropdown.Item class="list-with-icon">
                            <svg className="w-4 2xl:w-5" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M8.784 18.9999C7.49673 18.9999 6.24176 18.9856 5.00009 18.96C3.41167 18.9286 2.3125 17.8988 2.13295 16.2724C1.8337 13.5744 1.32164 7.21496 1.31689 7.15131C1.28459 6.75896 1.57719 6.41505 1.96955 6.3837C2.35621 6.37325 2.70581 6.64496 2.73716 7.03636C2.74191 7.10096 3.25302 13.4385 3.54942 16.1156C3.65107 17.04 4.14983 17.5169 5.02955 17.535C7.40458 17.5853 9.82807 17.5882 12.4406 17.5407C13.3754 17.5226 13.8808 17.0552 13.9853 16.109C14.2798 13.4547 14.7928 7.10096 14.7985 7.03636C14.8299 6.64496 15.1766 6.37135 15.5652 6.3837C15.9576 6.416 16.2502 6.75896 16.2188 7.15131C16.2131 7.21591 15.6982 13.5915 15.4018 16.2657C15.2175 17.9254 14.1212 18.9353 12.4663 18.9657C11.1999 18.9875 9.97817 18.9999 8.784 18.9999" fill="currentColor"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M16.8229 4.73947H0.712511C0.319205 4.73947 0 4.42027 0 4.02696C0 3.63366 0.319205 3.31445 0.712511 3.31445H16.8229C17.2162 3.31445 17.5354 3.63366 17.5354 4.02696C17.5354 4.42027 17.2162 4.73947 16.8229 4.73947" fill="currentColor"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M13.719 4.73962C12.6379 4.73962 11.6993 3.96916 11.4865 2.90894L11.2556 1.75373C11.2072 1.57797 11.0067 1.42502 10.7787 1.42502H6.7573C6.52929 1.42502 6.32884 1.57797 6.27089 1.79743L6.04954 2.90894C5.83768 3.96916 4.89812 4.73962 3.817 4.73962C3.4237 4.73962 3.10449 4.42042 3.10449 4.02711C3.10449 3.6338 3.4237 3.3146 3.817 3.3146C4.22171 3.3146 4.57321 3.0258 4.65302 2.62869L4.88387 1.47347C5.11852 0.588059 5.88518 0 6.7573 0H10.7787C11.6508 0 12.4175 0.588059 12.6426 1.43072L12.8839 2.62869C12.9628 3.0258 13.3143 3.3146 13.719 3.3146C14.1123 3.3146 14.4315 3.6338 14.4315 4.02711C14.4315 4.42042 14.1123 4.73962 13.719 4.73962" fill="currentColor"/>
                                    </svg>                                                                             
                                    <p className="font-18 font-light">Delete</p>   
                            </Dropdown.Item>
                          </Dropdown>
                        </div>
                      </td>
                    </tr>
                    <tr className="table-row table-row-css *:border-transparent">
                      <td className="px-2 sm:px-5 py-3 2xl:px-7 2xl:py-6">
                        <div className="flex space-x-3 2xl:space-x-5">
                          <label className="flex group/check">
                           
                            <span className="mt-1 2xl:mt-0 sub-check cursor-pointer group-has-[input:checked]/check:bg-default-green group-has-[input:checked]/check:border-default-green flex justify-center items-center checkbox-size border border-gray-light rounded-[5px]">
                              <svg className="check-icon-size text-white group-has-[input:checked]/check:block hidden" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                              <input className="border-[1.5px] border-gray-dark hidden" id="" name="" type="checkbox" />
                            </span>
                          </label>
                            <div>
                              <p className="text-gray-dark font-20 group-[.active]:text-default-green name font-medium">Robert Dewayne</p>
                              <p className="text-gray-light font-16 mt-2.5 group-[.active]:text-default-green email opacity-70">raquibapk@gmail.com</p>
                            </div>
                        </div>
                      </td>
                      <td className="px-2 sm:px-5 py-3 2xl:px-7 2xl:py-6"></td>
                      <td className="px-2 sm:px-5 py-3 2xl:px-7 2xl:py-6"></td>
                      <td className="px-2 sm:px-5 py-3 2xl:px-7 2xl:py-6">
                      <div className="group/main flex items-center justify-end">
                          <Dropdown className="dropdown px-2 w-[130px] 2xl:w-[170px] z-[100]" dismissOnClick='false' renderTrigger={()=>{
                            return <button className="group-has-[.dropdown]/main:text-secondary text-gray-light focus:text-secondary hover:text-secondary flex items-center justify-center !size-[25px] 2xl:!size-[34px] p-1.5 2xl:p-2">
                                    <svg className="h-full" stroke="currentColor" fill="currentColor" viewBox="0 0 6 26" xmlns="http://www.w3.org/2000/svg">
                                      <circle cx="2.785" cy="2.785" r="2.785" fill="currentColor"/>
                                      <circle cx="2.785" cy="12.9964" r="2.785" fill="currentColor"/>
                                      <circle cx="2.785" cy="23.2083" r="2.785" fill="currentColor"/>
                                      </svg>
                                  </button>
                            }}>
                            <Dropdown.Item class="list-with-icon">
                              <svg className="w-3.5 2xl:w-4" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <mask id="mask0_105_3429" maskUnits="userSpaceOnUse" x="0" y="0">
                                  <path fillRule="evenodd" clipRule="evenodd" d="M0.000976562 0H17.1816V18.9395H0.000976562V0Z" fill="white"/>
                                  </mask>
                                  <g mask="url(#mask0_105_3429)">
                                  <path fillRule="evenodd" clipRule="evenodd" d="M11.1113 2.01664L1.69625 13.7916C1.52525 14.0056 1.46225 14.2816 1.52525 14.5466L2.20625 17.4316L5.24525 17.3936C5.53425 17.3906 5.80125 17.2616 5.97825 17.0416C9.19525 13.0166 15.3283 5.34264 15.5023 5.11764C15.6663 4.85164 15.7303 4.47564 15.6443 4.11364C15.5563 3.74264 15.3253 3.42764 14.9923 3.22664C14.9213 3.17764 13.2363 1.86964 13.1843 1.82864C12.5503 1.32064 11.6253 1.40864 11.1113 2.01664V2.01664ZM1.61425 18.9396C1.26725 18.9396 0.965251 18.7016 0.884251 18.3626L0.0652509 14.8916C-0.103749 14.1726 0.0642509 13.4306 0.525251 12.8546L9.94525 1.07264C9.94925 1.06864 9.95225 1.06364 9.95625 1.05964C10.9893 -0.175357 12.8573 -0.357357 14.1173 0.653643C14.1673 0.692643 15.8403 1.99264 15.8403 1.99264C16.4483 2.35464 16.9233 3.00164 17.1033 3.76764C17.2823 4.52564 17.1523 5.30764 16.7353 5.96864C16.7043 6.01764 16.6773 6.05964 7.14925 17.9796C6.69025 18.5516 6.00225 18.8846 5.26325 18.8936L1.62425 18.9396H1.61425Z" fill="currentColor"/>
                                  </g>
                                  <path fillRule="evenodd" clipRule="evenodd" d="M14.2244 8.68487C14.0644 8.68487 13.9044 8.63387 13.7674 8.52987L8.3154 4.34187C7.9874 4.08987 7.9254 3.61987 8.1774 3.28987C8.4304 2.96187 8.9004 2.90087 9.2294 3.15287L14.6824 7.33987C15.0104 7.59187 15.0724 8.06287 14.8194 8.39187C14.6724 8.58387 14.4494 8.68487 14.2244 8.68487" fill="currentColor"/>
                                </svg>
                                <p className="font-18 font-light">Edit</p>   
                            </Dropdown.Item>
                            <Dropdown.Item class="list-with-icon">
                                <svg className="w-4 2xl:w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="m9 13.5 3 3m0 0 3-3m-3 3v-6m1.06-4.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                                </svg>                                                                     
                                  <p className="font-18 font-light">Archive</p>   
                            </Dropdown.Item>
                            <Dropdown.Item class="list-with-icon">
                            <svg className="w-4 2xl:w-5" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M8.784 18.9999C7.49673 18.9999 6.24176 18.9856 5.00009 18.96C3.41167 18.9286 2.3125 17.8988 2.13295 16.2724C1.8337 13.5744 1.32164 7.21496 1.31689 7.15131C1.28459 6.75896 1.57719 6.41505 1.96955 6.3837C2.35621 6.37325 2.70581 6.64496 2.73716 7.03636C2.74191 7.10096 3.25302 13.4385 3.54942 16.1156C3.65107 17.04 4.14983 17.5169 5.02955 17.535C7.40458 17.5853 9.82807 17.5882 12.4406 17.5407C13.3754 17.5226 13.8808 17.0552 13.9853 16.109C14.2798 13.4547 14.7928 7.10096 14.7985 7.03636C14.8299 6.64496 15.1766 6.37135 15.5652 6.3837C15.9576 6.416 16.2502 6.75896 16.2188 7.15131C16.2131 7.21591 15.6982 13.5915 15.4018 16.2657C15.2175 17.9254 14.1212 18.9353 12.4663 18.9657C11.1999 18.9875 9.97817 18.9999 8.784 18.9999" fill="currentColor"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M16.8229 4.73947H0.712511C0.319205 4.73947 0 4.42027 0 4.02696C0 3.63366 0.319205 3.31445 0.712511 3.31445H16.8229C17.2162 3.31445 17.5354 3.63366 17.5354 4.02696C17.5354 4.42027 17.2162 4.73947 16.8229 4.73947" fill="currentColor"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M13.719 4.73962C12.6379 4.73962 11.6993 3.96916 11.4865 2.90894L11.2556 1.75373C11.2072 1.57797 11.0067 1.42502 10.7787 1.42502H6.7573C6.52929 1.42502 6.32884 1.57797 6.27089 1.79743L6.04954 2.90894C5.83768 3.96916 4.89812 4.73962 3.817 4.73962C3.4237 4.73962 3.10449 4.42042 3.10449 4.02711C3.10449 3.6338 3.4237 3.3146 3.817 3.3146C4.22171 3.3146 4.57321 3.0258 4.65302 2.62869L4.88387 1.47347C5.11852 0.588059 5.88518 0 6.7573 0H10.7787C11.6508 0 12.4175 0.588059 12.6426 1.43072L12.8839 2.62869C12.9628 3.0258 13.3143 3.3146 13.719 3.3146C14.1123 3.3146 14.4315 3.6338 14.4315 4.02711C14.4315 4.42042 14.1123 4.73962 13.719 4.73962" fill="currentColor"/>
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
    </>
  )
}
