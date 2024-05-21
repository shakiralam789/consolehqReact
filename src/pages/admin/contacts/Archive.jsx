import Paggination from "../../../components/admin/Paggination";
import BreadCrumb from "../../../components/admin/BreadCrumb";
import { Dropdown } from "flowbite-react";

export default function Archive() {
  return (
    
    <>
        <BreadCrumb title='Archive' navigation={true}/>
        <div className="bg-white mt-5 2xl:mt-7">
            <div className="pt-5 px-5 2xl:px-8 2xl:pt-8">
                <div className="flex flex-wrap items-center justify-between -mx-2 gap-y-4">
                  <div className="px-2 flex-1 sm:w-fit max-w-[400px]">
                    <div className="relative group/main">
                    <Dropdown className="dropdown px-2 w-[160px] 2xl:w-[225px]" renderTrigger={()=>{
                      return <button className="w-full md:w-[160px] 2xl:w-[225px] flex items-center justify-between px-3 2xl:px-4 py-[11px] 2xl:py-5 rounded-md bg-white shadow-md text-gray-dark" type="button">
                        
                        <p className="font-20 font-medium mr-4 ">All</p>
                        <svg className="group-has-[.dropdown]/main:rotate-180 duration-300 size-3 2xl:size[20px] ml-4" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M15 1L8 8L1 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>   
                        </button>
                    }}>
                      <Dropdown.Item class='list'>
                            All
                      </Dropdown.Item>
                    </Dropdown> 
                    </div>
                  </div>
                  <div className="px-2">
                    <button>
                        <svg className="duration-300 mx-auto size-6 2xl:size-8 text-primary hover:text-secondary" width="100pt" height="100pt" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <g id="currentColorff">
                        <path fill="currentColor" opacity="1.00" d=" M 14.33 17.34 C 18.10 16.14 22.12 16.83 26.01 16.67 C 29.88 16.79 33.91 16.19 37.63 17.48 C 42.44 19.67 45.67 24.17 50.13 26.86 C 61.07 27.40 72.05 26.76 83.00 27.16 C 87.84 27.43 92.01 32.11 91.69 36.96 C 91.63 49.29 91.70 61.62 91.66 73.95 C 91.75 79.01 87.08 83.53 82.02 83.31 C 61.01 83.38 40.00 83.30 18.99 83.34 C 13.60 83.95 8.22 79.46 8.34 73.96 C 8.33 57.99 8.32 42.02 8.35 26.05 C 8.27 22.28 10.87 18.71 14.33 17.34 M 16.28 23.21 C 14.36 24.00 14.74 26.32 14.62 27.98 C 14.64 42.66 14.64 57.34 14.61 72.01 C 14.74 73.67 14.37 76.00 16.29 76.78 C 19.17 77.24 22.10 77.01 25.00 77.05 C 43.01 77.05 61.02 77.03 79.03 77.07 C 80.59 77.04 82.17 77.08 83.71 76.77 C 85.65 76.03 85.24 73.65 85.38 72.02 C 85.33 60.34 85.43 48.65 85.34 36.97 C 85.34 35.50 84.62 33.28 82.83 33.35 C 71.26 33.15 59.66 33.64 48.11 33.14 C 43.23 30.50 39.85 25.57 34.86 23.16 C 28.69 22.83 22.44 22.75 16.28 23.21 Z"></path>
                        <path fill="currentColor" opacity="1.00" d=" M 44.00 38.00 C 47.97 37.39 52.03 37.39 56.00 38.00 C 55.92 39.29 56.59 41.49 54.58 41.55 C 51.54 41.80 48.46 41.80 45.42 41.55 C 43.44 41.58 44.08 39.22 44.00 38.00 Z"></path>
                        <path fill="currentColor" opacity="1.00" d=" M 44.09 46.20 C 48.00 45.55 52.00 45.55 55.91 46.20 C 55.89 47.48 56.51 49.35 54.82 49.87 C 51.62 50.12 48.38 50.12 45.18 49.87 C 43.49 49.38 44.14 47.46 44.09 46.20 Z"></path>
                        <path fill="currentColor" opacity="1.00" d=" M 45.75 54.78 C 48.43 53.68 51.55 54.25 54.36 54.60 C 55.28 58.81 57.19 63.34 55.57 67.60 C 53.14 72.07 45.89 71.65 44.13 66.87 C 43.24 62.82 44.46 58.61 45.75 54.78 M 48.10 63.05 C 48.04 64.57 48.02 66.59 50.00 66.77 C 51.98 66.58 51.95 64.57 51.89 63.06 C 50.63 62.77 49.37 62.77 48.10 63.05 Z"></path>
                        </g>
                      </svg>
                  </button>
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
                              <svg className="check-icon-size text-white group-has-[input:checked]/check:block hidden" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                              <input className="border-[1.5px] border-gray-dark hidden" id="" name="" type="checkbox" />
                            </span>
                          </label>
                          <label htmlFor="contact" className="font-20 font-medium text-gray-dark">Type</label>
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
                      <th className="px-5 py-5 2xl:px-7 2xl:py-7">
                       
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="table-row table-row-css">
                      <td className="px-5 py-5 2xl:px-7 2xl:py-7">
                        <div className="group/check flex space-x-3 2xl:space-x-5">
                          <label className="flex">
                            <span className="sub-check cursor-pointer group-has-[input:checked]/check:bg-default-green group-has-[input:checked]/check:border-default-green flex justify-center items-center checkbox-size border border-gray-light rounded-[5px]">
                              <svg className="check-icon-size text-white group-has-[input:checked]/check:block hidden" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                              <input className="border-[1.5px] border-gray-dark hidden" id="" name="" type="checkbox" />
                            </span>
                          </label>
                          <div className="flex items-center space-x-2">
                            <svg className="group-has-[input:checked]/check:text-default-green size-[12px] 2xl:size-5 text-gray-light" viewBox="0 0 14 19" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                              <path d="M6.36328 9.28516C6.1875 8.72266 6.22266 7.63281 6.29297 7.63281C6.60938 7.63281 6.57422 8.93359 6.36328 9.28516ZM6.32812 10.9375C6.64453 11.5352 7.10156 12.0273 7.52344 12.3789C6.67969 12.5195 5.97656 12.8711 5.30859 13.1172C5.69531 12.4492 6.04688 11.6406 6.32812 10.9375ZM3.02344 15.332C3.19922 14.7695 4.00781 14.1367 4.25391 13.8906C3.48047 15.1211 3.02344 15.332 3.02344 15.332ZM8.71875 5.875H13.5V17.4062C13.5 17.8984 13.1133 18.25 12.6562 18.25H0.84375C0.351562 18.25 0 17.8984 0 17.4062V1.09375C0 0.636719 0.351562 0.25 0.84375 0.25H7.875V5.03125C7.875 5.52344 8.22656 5.875 8.71875 5.875ZM8.4375 11.9219C7.73438 11.5 7.24219 10.9023 6.92578 10.0234C7.06641 9.39062 7.3125 8.40625 7.13672 7.77344C6.96094 6.75391 5.66016 6.85938 5.44922 7.52734C5.27344 8.19531 5.44922 9.10938 5.73047 10.2344C5.34375 11.2188 4.74609 12.5195 4.32422 13.2578C4.28906 13.2578 4.28906 13.2578 4.28906 13.2578C3.33984 13.75 1.72266 14.8398 2.39062 15.6484C2.56641 15.8945 2.95312 16 3.12891 16C3.76172 16 4.39453 15.3672 5.27344 13.8555C6.1875 13.5391 7.20703 13.1523 8.05078 13.0117C8.82422 13.4336 9.73828 13.7148 10.3008 13.7148C11.3555 13.7148 11.4258 12.5898 11.0039 12.168C10.5117 11.7109 9.10547 11.8516 8.4375 11.9219ZM13.2539 3.94141C13.3945 4.11719 13.5 4.32812 13.5 4.53906V4.75H9V0.25H9.21094C9.42188 0.25 9.63281 0.355469 9.80859 0.496094L13.2539 3.94141ZM10.6172 12.9414C10.6172 12.9414 10.4414 13.1875 9.14062 12.625C10.5469 12.5195 10.793 12.8359 10.6172 12.9414Z" fill="currentColor"/>
                              </svg>
                            <p className="text-gray-light font-18 group-[.active]:text-default-green name">Invoice</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-5 2xl:px-7 2xl:py-7">
                        <p className="text-gray-light font-18 group-[.active]:text-default-green name">lw-000076543</p>
                      </td>
                      <td className="px-5 py-5 2xl:px-7 2xl:py-7">
                        <p className="text-gray-light font-18 group-[.active]:text-default-green name"></p>
                      </td>
                      <td className="px-5 py-5 2xl:px-7 2xl:py-7">
                        <p className="text-gray-light font-18 group-[.active]:text-default-green name">15 Jan 2023</p>
                      </td>
                      <td className="px-5 py-5 2xl:px-7 2xl:py-7">
                        <p className="text-gray-light font-18 group-[.active]:text-default-green name">15 Jan 2023</p>
                      </td>
                      <td className="px-5 py-5 2xl:px-7 2xl:py-7">
                        <p className="text-gray-light font-18 group-[.active]:text-default-green name">8,400.00</p>
                      </td>
                      <td className="px-5 py-5 2xl:px-7 2xl:py-7">
                        <p className="text-gray-light font-18 group-[.active]:text-default-green name">8,400.00</p>
                      </td>
                      <td className="px-5 py-5 2xl:px-7 2xl:py-7">
                        <p className="flex items-center space-x-2 font-18 text-default-green name">
                          <svg className="size-[15px] 2xl:size-[20px]" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <ellipse cx="10" cy="9.98611" rx="10" ry="9.98611" fill="#27AE60"/>
                            <path d="M6 10.359L8.374 12.7287L13.12 7.98926" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span className="capitalize">paid</span>                          
                        </p>
                      </td>
                      <td className="px-5 py-5 2xl:px-7 2xl:py-7">
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
                    <tr className="table-row table-row-css">
                      <td className="px-5 py-5 2xl:px-7 2xl:py-7">
                        <div className="group/check flex items-center space-x-3 2xl:space-x-5">
                          <label className="flex">
                           
                            <span className="sub-check cursor-pointer group-has-[input:checked]/check:bg-default-green group-has-[input:checked]/check:border-default-green flex justify-center items-center checkbox-size border border-gray-light rounded-[5px]">
                              <svg className="check-icon-size text-white group-has-[input:checked]/check:block hidden" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                              <input className="border-[1.5px] border-gray-dark hidden" id="" name="" type="checkbox" />
                            </span>
                          </label>
                          <div className="flex items-center space-x-2">
                            <svg className="group-has-[input:checked]/check:text-default-green size-[12px] 2xl:size-5 text-gray-light" viewBox="0 0 14 19" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                              <path d="M6.36328 9.28516C6.1875 8.72266 6.22266 7.63281 6.29297 7.63281C6.60938 7.63281 6.57422 8.93359 6.36328 9.28516ZM6.32812 10.9375C6.64453 11.5352 7.10156 12.0273 7.52344 12.3789C6.67969 12.5195 5.97656 12.8711 5.30859 13.1172C5.69531 12.4492 6.04688 11.6406 6.32812 10.9375ZM3.02344 15.332C3.19922 14.7695 4.00781 14.1367 4.25391 13.8906C3.48047 15.1211 3.02344 15.332 3.02344 15.332ZM8.71875 5.875H13.5V17.4062C13.5 17.8984 13.1133 18.25 12.6562 18.25H0.84375C0.351562 18.25 0 17.8984 0 17.4062V1.09375C0 0.636719 0.351562 0.25 0.84375 0.25H7.875V5.03125C7.875 5.52344 8.22656 5.875 8.71875 5.875ZM8.4375 11.9219C7.73438 11.5 7.24219 10.9023 6.92578 10.0234C7.06641 9.39062 7.3125 8.40625 7.13672 7.77344C6.96094 6.75391 5.66016 6.85938 5.44922 7.52734C5.27344 8.19531 5.44922 9.10938 5.73047 10.2344C5.34375 11.2188 4.74609 12.5195 4.32422 13.2578C4.28906 13.2578 4.28906 13.2578 4.28906 13.2578C3.33984 13.75 1.72266 14.8398 2.39062 15.6484C2.56641 15.8945 2.95312 16 3.12891 16C3.76172 16 4.39453 15.3672 5.27344 13.8555C6.1875 13.5391 7.20703 13.1523 8.05078 13.0117C8.82422 13.4336 9.73828 13.7148 10.3008 13.7148C11.3555 13.7148 11.4258 12.5898 11.0039 12.168C10.5117 11.7109 9.10547 11.8516 8.4375 11.9219ZM13.2539 3.94141C13.3945 4.11719 13.5 4.32812 13.5 4.53906V4.75H9V0.25H9.21094C9.42188 0.25 9.63281 0.355469 9.80859 0.496094L13.2539 3.94141ZM10.6172 12.9414C10.6172 12.9414 10.4414 13.1875 9.14062 12.625C10.5469 12.5195 10.793 12.8359 10.6172 12.9414Z" fill="currentColor"/>
                              </svg>
                            <p className="text-gray-light font-18 group-[.active]:text-default-green name">Invoice</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-5 2xl:px-7 2xl:py-7">
                        <p className="text-gray-light font-18 group-[.active]:text-default-green name">lw-000076543</p>
                      </td>
                      <td className="px-5 py-5 2xl:px-7 2xl:py-7">
                        <p className="text-gray-light font-18 group-[.active]:text-default-green name"></p>
                      </td>
                      <td className="px-5 py-5 2xl:px-7 2xl:py-7">
                        <p className="text-gray-light font-18 group-[.active]:text-default-green name">15 Jan 2023</p>
                      </td>
                      <td className="px-5 py-5 2xl:px-7 2xl:py-7">
                        <p className="text-gray-light font-18 group-[.active]:text-default-green name">15 Jan 2023</p>
                      </td>
                      <td className="px-5 py-5 2xl:px-7 2xl:py-7">
                        <p className="text-gray-light font-18 group-[.active]:text-default-green name">8,400.00</p>
                      </td>
                      <td className="px-5 py-5 2xl:px-7 2xl:py-7">
                        <p className="text-gray-light font-18 group-[.active]:text-default-green name">8,400.00</p>
                      </td>
                      <td className="px-5 py-5 2xl:px-7 2xl:py-7">
                        <p className="flex items-center space-x-2 font-18 text-default-green name">
                          <svg className="size-[15px] 2xl:size-[20px]" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <ellipse cx="10" cy="9.98611" rx="10" ry="9.98611" fill="#27AE60"/>
                            <path d="M6 10.359L8.374 12.7287L13.12 7.98926" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span className="capitalize">paid</span>                          
                        </p>
                      </td>
                      <td className="px-5 py-5 2xl:px-7 2xl:py-7">
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
                    <tr className="table-row table-row-css">
                      <td className="px-5 py-5 2xl:px-7 2xl:py-7">
                        <div className="group/check flex items-center space-x-3 2xl:space-x-5">
                          <label className="flex">
                           
                            <span className="sub-check cursor-pointer group-has-[input:checked]/check:bg-default-green group-has-[input:checked]/check:border-default-green flex justify-center items-center checkbox-size border border-gray-light rounded-[5px]">
                              <svg className="check-icon-size text-white group-has-[input:checked]/check:block hidden" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                              <input className="border-[1.5px] border-gray-dark hidden" id="" name="" type="checkbox" />
                            </span>
                          </label>
                          <div className="flex items-center space-x-2">
                            <svg className="group-has-[input:checked]/check:text-default-green size-[12px] 2xl:size-5 text-gray-light" viewBox="0 0 14 19" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                              <path d="M6.36328 9.28516C6.1875 8.72266 6.22266 7.63281 6.29297 7.63281C6.60938 7.63281 6.57422 8.93359 6.36328 9.28516ZM6.32812 10.9375C6.64453 11.5352 7.10156 12.0273 7.52344 12.3789C6.67969 12.5195 5.97656 12.8711 5.30859 13.1172C5.69531 12.4492 6.04688 11.6406 6.32812 10.9375ZM3.02344 15.332C3.19922 14.7695 4.00781 14.1367 4.25391 13.8906C3.48047 15.1211 3.02344 15.332 3.02344 15.332ZM8.71875 5.875H13.5V17.4062C13.5 17.8984 13.1133 18.25 12.6562 18.25H0.84375C0.351562 18.25 0 17.8984 0 17.4062V1.09375C0 0.636719 0.351562 0.25 0.84375 0.25H7.875V5.03125C7.875 5.52344 8.22656 5.875 8.71875 5.875ZM8.4375 11.9219C7.73438 11.5 7.24219 10.9023 6.92578 10.0234C7.06641 9.39062 7.3125 8.40625 7.13672 7.77344C6.96094 6.75391 5.66016 6.85938 5.44922 7.52734C5.27344 8.19531 5.44922 9.10938 5.73047 10.2344C5.34375 11.2188 4.74609 12.5195 4.32422 13.2578C4.28906 13.2578 4.28906 13.2578 4.28906 13.2578C3.33984 13.75 1.72266 14.8398 2.39062 15.6484C2.56641 15.8945 2.95312 16 3.12891 16C3.76172 16 4.39453 15.3672 5.27344 13.8555C6.1875 13.5391 7.20703 13.1523 8.05078 13.0117C8.82422 13.4336 9.73828 13.7148 10.3008 13.7148C11.3555 13.7148 11.4258 12.5898 11.0039 12.168C10.5117 11.7109 9.10547 11.8516 8.4375 11.9219ZM13.2539 3.94141C13.3945 4.11719 13.5 4.32812 13.5 4.53906V4.75H9V0.25H9.21094C9.42188 0.25 9.63281 0.355469 9.80859 0.496094L13.2539 3.94141ZM10.6172 12.9414C10.6172 12.9414 10.4414 13.1875 9.14062 12.625C10.5469 12.5195 10.793 12.8359 10.6172 12.9414Z" fill="currentColor"/>
                              </svg>
                            <p className="text-gray-light font-18 group-[.active]:text-default-green name">Invoice</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-5 2xl:px-7 2xl:py-7">
                        <p className="text-gray-light font-18 group-[.active]:text-default-green name">lw-000076543</p>
                      </td>
                      <td className="px-5 py-5 2xl:px-7 2xl:py-7">
                        <p className="text-gray-light font-18 group-[.active]:text-default-green name"></p>
                      </td>
                      <td className="px-5 py-5 2xl:px-7 2xl:py-7">
                        <p className="text-gray-light font-18 group-[.active]:text-default-green name">15 Jan 2023</p>
                      </td>
                      <td className="px-5 py-5 2xl:px-7 2xl:py-7">
                        <p className="text-gray-light font-18 group-[.active]:text-default-green name">15 Jan 2023</p>
                      </td>
                      <td className="px-5 py-5 2xl:px-7 2xl:py-7">
                        <p className="text-gray-light font-18 group-[.active]:text-default-green name">8,400.00</p>
                      </td>
                      <td className="px-5 py-5 2xl:px-7 2xl:py-7">
                        <p className="text-gray-light font-18 group-[.active]:text-default-green name">8,400.00</p>
                      </td>
                      <td className="px-5 py-5 2xl:px-7 2xl:py-7">
                        <p className="flex items-center space-x-2 font-18 text-default-green name">
                          <svg className="size-[15px] 2xl:size-[20px]" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <ellipse cx="10" cy="9.98611" rx="10" ry="9.98611" fill="#27AE60"/>
                            <path d="M6 10.359L8.374 12.7287L13.12 7.98926" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span className="capitalize">paid</span>                          
                        </p>
                      </td>
                      <td className="px-5 py-5 2xl:px-7 2xl:py-7">
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
                    <tr className="table-row table-row-css">
                      <td className="px-5 py-5 2xl:px-7 2xl:py-7">
                        <div className="group/check flex items-center space-x-3 2xl:space-x-5">
                          <label className="flex">
                           
                            <span className="sub-check cursor-pointer group-has-[input:checked]/check:bg-default-green group-has-[input:checked]/check:border-default-green flex justify-center items-center checkbox-size border border-gray-light rounded-[5px]">
                              <svg className="check-icon-size text-white group-has-[input:checked]/check:block hidden" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                              <input className="border-[1.5px] border-gray-dark hidden" id="" name="" type="checkbox" />
                            </span>
                          </label>
                          <div className="flex items-center space-x-2">
                            <svg className="group-has-[input:checked]/check:text-default-green size-[12px] 2xl:size-5 text-gray-light" viewBox="0 0 14 19" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                              <path d="M6.36328 9.28516C6.1875 8.72266 6.22266 7.63281 6.29297 7.63281C6.60938 7.63281 6.57422 8.93359 6.36328 9.28516ZM6.32812 10.9375C6.64453 11.5352 7.10156 12.0273 7.52344 12.3789C6.67969 12.5195 5.97656 12.8711 5.30859 13.1172C5.69531 12.4492 6.04688 11.6406 6.32812 10.9375ZM3.02344 15.332C3.19922 14.7695 4.00781 14.1367 4.25391 13.8906C3.48047 15.1211 3.02344 15.332 3.02344 15.332ZM8.71875 5.875H13.5V17.4062C13.5 17.8984 13.1133 18.25 12.6562 18.25H0.84375C0.351562 18.25 0 17.8984 0 17.4062V1.09375C0 0.636719 0.351562 0.25 0.84375 0.25H7.875V5.03125C7.875 5.52344 8.22656 5.875 8.71875 5.875ZM8.4375 11.9219C7.73438 11.5 7.24219 10.9023 6.92578 10.0234C7.06641 9.39062 7.3125 8.40625 7.13672 7.77344C6.96094 6.75391 5.66016 6.85938 5.44922 7.52734C5.27344 8.19531 5.44922 9.10938 5.73047 10.2344C5.34375 11.2188 4.74609 12.5195 4.32422 13.2578C4.28906 13.2578 4.28906 13.2578 4.28906 13.2578C3.33984 13.75 1.72266 14.8398 2.39062 15.6484C2.56641 15.8945 2.95312 16 3.12891 16C3.76172 16 4.39453 15.3672 5.27344 13.8555C6.1875 13.5391 7.20703 13.1523 8.05078 13.0117C8.82422 13.4336 9.73828 13.7148 10.3008 13.7148C11.3555 13.7148 11.4258 12.5898 11.0039 12.168C10.5117 11.7109 9.10547 11.8516 8.4375 11.9219ZM13.2539 3.94141C13.3945 4.11719 13.5 4.32812 13.5 4.53906V4.75H9V0.25H9.21094C9.42188 0.25 9.63281 0.355469 9.80859 0.496094L13.2539 3.94141ZM10.6172 12.9414C10.6172 12.9414 10.4414 13.1875 9.14062 12.625C10.5469 12.5195 10.793 12.8359 10.6172 12.9414Z" fill="currentColor"/>
                              </svg>
                            <p className="text-gray-light font-18 group-[.active]:text-default-green name">Invoice</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-5 2xl:px-7 2xl:py-7">
                        <p className="text-gray-light font-18 group-[.active]:text-default-green name">lw-000076543</p>
                      </td>
                      <td className="px-5 py-5 2xl:px-7 2xl:py-7">
                        <p className="text-gray-light font-18 group-[.active]:text-default-green name"></p>
                      </td>
                      <td className="px-5 py-5 2xl:px-7 2xl:py-7">
                        <p className="text-gray-light font-18 group-[.active]:text-default-green name">15 Jan 2023</p>
                      </td>
                      <td className="px-5 py-5 2xl:px-7 2xl:py-7">
                        <p className="text-gray-light font-18 group-[.active]:text-default-green name">15 Jan 2023</p>
                      </td>
                      <td className="px-5 py-5 2xl:px-7 2xl:py-7">
                        <p className="text-gray-light font-18 group-[.active]:text-default-green name">8,400.00</p>
                      </td>
                      <td className="px-5 py-5 2xl:px-7 2xl:py-7">
                        <p className="text-gray-light font-18 group-[.active]:text-default-green name">8,400.00</p>
                      </td>
                      <td className="px-5 py-5 2xl:px-7 2xl:py-7">
                        <p className="flex items-center space-x-2 font-18 !text-red1">
                           <svg className="size-[15px] 2xl:size-[20px]" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <ellipse cx="10" cy="9.98611" rx="10" ry="9.98611" fill="#EB5757"/>
                              <path d="M13 12.9819L7 6.99023" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M13 6.99027L7 12.9819" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            
                            <span className="capitalize">overdue</span>                          
                        </p>
                      </td>
                      <td className="px-5 py-5 2xl:px-7 2xl:py-7">
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
                    <tr className="table-row table-row-css">
                      <td className="px-5 py-5 2xl:px-7 2xl:py-7">
                        <div className="group/check flex items-center space-x-3 2xl:space-x-5">
                          <label className="flex">
                           
                            <span className="sub-check cursor-pointer group-has-[input:checked]/check:bg-default-green group-has-[input:checked]/check:border-default-green flex justify-center items-center checkbox-size border border-gray-light rounded-[5px]">
                              <svg className="check-icon-size text-white group-has-[input:checked]/check:block hidden" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                              <input className="border-[1.5px] border-gray-dark hidden" id="" name="" type="checkbox" />
                            </span>
                          </label>
                          <div className="flex items-center space-x-2">
                            <svg className="group-has-[input:checked]/check:text-default-green size-[12px] 2xl:size-5 text-gray-light" viewBox="0 0 14 19" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                              <path d="M6.36328 9.28516C6.1875 8.72266 6.22266 7.63281 6.29297 7.63281C6.60938 7.63281 6.57422 8.93359 6.36328 9.28516ZM6.32812 10.9375C6.64453 11.5352 7.10156 12.0273 7.52344 12.3789C6.67969 12.5195 5.97656 12.8711 5.30859 13.1172C5.69531 12.4492 6.04688 11.6406 6.32812 10.9375ZM3.02344 15.332C3.19922 14.7695 4.00781 14.1367 4.25391 13.8906C3.48047 15.1211 3.02344 15.332 3.02344 15.332ZM8.71875 5.875H13.5V17.4062C13.5 17.8984 13.1133 18.25 12.6562 18.25H0.84375C0.351562 18.25 0 17.8984 0 17.4062V1.09375C0 0.636719 0.351562 0.25 0.84375 0.25H7.875V5.03125C7.875 5.52344 8.22656 5.875 8.71875 5.875ZM8.4375 11.9219C7.73438 11.5 7.24219 10.9023 6.92578 10.0234C7.06641 9.39062 7.3125 8.40625 7.13672 7.77344C6.96094 6.75391 5.66016 6.85938 5.44922 7.52734C5.27344 8.19531 5.44922 9.10938 5.73047 10.2344C5.34375 11.2188 4.74609 12.5195 4.32422 13.2578C4.28906 13.2578 4.28906 13.2578 4.28906 13.2578C3.33984 13.75 1.72266 14.8398 2.39062 15.6484C2.56641 15.8945 2.95312 16 3.12891 16C3.76172 16 4.39453 15.3672 5.27344 13.8555C6.1875 13.5391 7.20703 13.1523 8.05078 13.0117C8.82422 13.4336 9.73828 13.7148 10.3008 13.7148C11.3555 13.7148 11.4258 12.5898 11.0039 12.168C10.5117 11.7109 9.10547 11.8516 8.4375 11.9219ZM13.2539 3.94141C13.3945 4.11719 13.5 4.32812 13.5 4.53906V4.75H9V0.25H9.21094C9.42188 0.25 9.63281 0.355469 9.80859 0.496094L13.2539 3.94141ZM10.6172 12.9414C10.6172 12.9414 10.4414 13.1875 9.14062 12.625C10.5469 12.5195 10.793 12.8359 10.6172 12.9414Z" fill="currentColor"/>
                              </svg>
                            <p className="text-gray-light font-18 group-[.active]:text-default-green name">Invoice</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-5 2xl:px-7 2xl:py-7">
                        <p className="text-gray-light font-18 group-[.active]:text-default-green name">lw-000076543</p>
                      </td>
                      <td className="px-5 py-5 2xl:px-7 2xl:py-7">
                        <p className="text-gray-light font-18 group-[.active]:text-default-green name"></p>
                      </td>
                      <td className="px-5 py-5 2xl:px-7 2xl:py-7">
                        <p className="text-gray-light font-18 group-[.active]:text-default-green name">15 Jan 2023</p>
                      </td>
                      <td className="px-5 py-5 2xl:px-7 2xl:py-7">
                        <p className="text-gray-light font-18 group-[.active]:text-default-green name">15 Jan 2023</p>
                      </td>
                      <td className="px-5 py-5 2xl:px-7 2xl:py-7">
                        <p className="text-gray-light font-18 group-[.active]:text-default-green name">8,400.00</p>
                      </td>
                      <td className="px-5 py-5 2xl:px-7 2xl:py-7">
                        <p className="text-gray-light font-18 group-[.active]:text-default-green name">8,400.00</p>
                      </td>
                      <td className="px-5 py-5 2xl:px-7 2xl:py-7">
                        <p className="flex items-center space-x-2 font-18 text-default-green name">
                          <svg className="size-[15px] 2xl:size-[20px]" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <ellipse cx="10" cy="9.98611" rx="10" ry="9.98611" fill="#27AE60"/>
                            <path d="M6 10.359L8.374 12.7287L13.12 7.98926" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span className="capitalize">paid</span>                          
                        </p>
                      </td>
                      <td className="px-5 py-5 2xl:px-7 2xl:py-7">
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
