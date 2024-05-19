import { NavLink } from "react-router-dom";
import Paggination from "../../../components/admin/Paggination";

export default function Archive() {
  return (
    <>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between flex-wrap">
            <h3 className="text-gray-dark font-28 font-medium mb-4 sm:mb-0">Archive</h3>
            <div className="flex items-center gap-5 2xl:gap-6 sm:justify-end relative">
              <NavLink to="/contacts/form" className="flex-1 flex items-center justify-between px-3 2xl:px-4 py-[11px] 2xl:py-5 bg-white hover:bg-[#fcfcfc] text-gray-dark">
                <p className="font-20 font-medium mr-7">New Contact</p>
                <svg className="size-3 2xl:size[20px]" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 9.50129H1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9.50276 18V1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
              </NavLink>
              <div className="relative group/main">
                <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="relative size-[42px] 2xl:size-[59px] flex items-center justify-center text-gray-dark bg-white hover:text-red1 group-has-[.dropdown.block]/main:text-red1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 font-semibold">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                  </svg>                
                </button>
                <div id="dropdown" className="dropdown dropdown-default-position hidden w-[150px] bg-white border border-gray-dark/20">
                  <ul aria-labelledby="dropdownDefaultButton" className="px-3 py-1 text-gray-dark">
                    <li className="group/list border-b last:border-b-transparent duration-300 hover:border-secondary hover:text-secondary">
                      <NavLink className="flex items-center space-x-2 2xl:space-x-3 p-2 2xl:p-3" to="/contacts/upload">
                        <svg className="size-4 2xl:size[20px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_105_3071)">
                          <path d="M18.554 10.0327C18.4842 9.96318 18.4015 9.90808 18.3104 9.87055C18.2193 9.83302 18.1218 9.8138 18.0233 9.81398C17.9248 9.81417 17.8273 9.83376 17.7364 9.87163C17.6455 9.9095 17.5629 9.96492 17.4934 10.0347L12.7454 14.7988V3.58057C12.7454 3.38165 12.6664 3.19089 12.5258 3.05024C12.3851 2.90958 12.1943 2.83057 11.9954 2.83057C11.7965 2.83057 11.6058 2.90958 11.4651 3.05024C11.3244 3.19089 11.2454 3.38165 11.2454 3.58057V14.7976L6.50613 10.0347C6.43664 9.96483 6.35407 9.90936 6.26313 9.87145C6.1722 9.83353 6.07468 9.81391 5.97616 9.81369C5.87764 9.81348 5.78004 9.83268 5.68894 9.8702C5.59784 9.90772 5.51503 9.96282 5.44523 10.0324C5.37544 10.1019 5.32003 10.1845 5.28218 10.2755C5.24432 10.3664 5.22476 10.464 5.22461 10.5625C5.22446 10.661 5.24373 10.7586 5.28131 10.8497C5.31889 10.9407 5.37405 11.0235 5.44363 11.0933L11.4641 17.1431L11.4647 17.1434C11.5344 17.2132 11.6171 17.2685 11.7082 17.3062C11.7992 17.344 11.8968 17.3634 11.9954 17.3634C12.094 17.3634 12.1916 17.344 12.2826 17.3062C12.3737 17.2685 12.4564 17.2132 12.526 17.1434L12.5266 17.1431L18.5559 11.0933C18.6255 11.0235 18.6806 10.9407 18.7181 10.8497C18.7556 10.7586 18.7749 10.6611 18.7747 10.5626C18.7745 10.4641 18.7549 10.3666 18.717 10.2757C18.6792 10.1848 18.6238 10.1022 18.554 10.0327Z" fill="currentColor"/>
                          <path d="M18.0254 21.1694H5.97559C5.77667 21.1694 5.58591 21.0904 5.44526 20.9498C5.3046 20.8091 5.22559 20.6183 5.22559 20.4194C5.22559 20.2205 5.3046 20.0298 5.44526 19.8891C5.58591 19.7485 5.77667 19.6694 5.97559 19.6694H18.0254C18.2243 19.6694 18.4151 19.7485 18.5557 19.8891C18.6964 20.0298 18.7754 20.2205 18.7754 20.4194C18.7754 20.6183 18.6964 20.8091 18.5557 20.9498C18.4151 21.0904 18.2243 21.1694 18.0254 21.1694Z" fill="currentColor"/>
                          </g>
                          <defs>
                          <clipPath id="clip0_105_3071">
                          <rect width="24" height="24" fill="white"/>
                          </clipPath>
                          </defs>
                          </svg>
                          <p className="font-18 font-light">Import</p>   
                      </NavLink> 
                    </li>
                    <li className="group/list border-b last:border-b-transparent duration-300 hover:border-secondary hover:text-secondary">
                      <NavLink  className="flex items-center space-x-3 p-2 2xl:p-3">
                        <svg className="size-4 2xl:size[20px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_105_3076)">
                          <path d="M5.44548 10.142C5.51504 10.2118 5.59765 10.2671 5.6886 10.3049C5.77955 10.3427 5.87705 10.3622 5.97554 10.3623C6.07403 10.3624 6.17157 10.3431 6.26259 10.3055C6.35362 10.2679 6.43634 10.2127 6.50603 10.1431L11.2678 5.39281L11.2353 16.611C11.2347 16.8099 11.3132 17.0009 11.4534 17.142C11.5937 17.283 11.7842 17.3626 11.9831 17.3632C12.182 17.3637 12.373 17.2853 12.5141 17.145C12.6551 17.0048 12.7347 16.8143 12.7353 16.6154L12.7678 5.3984L17.4933 10.175C17.5626 10.2451 17.645 10.3008 17.7358 10.3389C17.8266 10.3771 17.9241 10.397 18.0226 10.3975C18.1211 10.398 18.2188 10.3791 18.31 10.3419C18.4012 10.3046 18.4842 10.2497 18.5542 10.1804C18.6242 10.1111 18.6798 10.0286 18.7179 9.93778C18.7561 9.84693 18.7759 9.74946 18.7763 9.65094C18.7768 9.55241 18.7578 9.45477 18.7205 9.36359C18.6832 9.27241 18.6282 9.18947 18.5589 9.11952L12.5559 3.05227L12.5553 3.05191C12.4859 2.98197 12.4033 2.92641 12.3124 2.8884C12.2214 2.85039 12.1239 2.83068 12.0253 2.83039C11.9267 2.83011 11.8291 2.84925 11.7379 2.88673C11.6468 2.92422 11.5639 2.9793 11.494 3.04883L11.4934 3.04919L5.44661 9.08149C5.37687 9.15104 5.32153 9.23364 5.28373 9.32459C5.24593 9.41554 5.22642 9.51304 5.22632 9.61153C5.22621 9.71002 5.24551 9.80756 5.28312 9.89859C5.32073 9.98962 5.3759 10.0723 5.44548 10.142Z" fill="currentColor"/>
                          <path d="M18.0254 21.1694H5.97559C5.77667 21.1694 5.58591 21.0904 5.44526 20.9498C5.3046 20.8091 5.22559 20.6183 5.22559 20.4194C5.22559 20.2205 5.3046 20.0298 5.44526 19.8891C5.58591 19.7485 5.77667 19.6694 5.97559 19.6694H18.0254C18.2243 19.6694 18.4151 19.7485 18.5557 19.8891C18.6964 20.0298 18.7754 20.2205 18.7754 20.4194C18.7754 20.6183 18.6964 20.8091 18.5557 20.9498C18.4151 21.0904 18.2243 21.1694 18.0254 21.1694Z" fill="currentColor"/>
                          </g>
                          <defs>
                          <clipPath id="clip0_105_3076">
                          <rect width="24" height="24" fill="white"/>
                          </clipPath>
                          </defs>
                          </svg>                                    
                          <p className="font-18 font-light">Export</p>   
                      </NavLink> 
                    </li>
                  </ul>
                </div> 
              </div>
            </div>
          </div>

        <div className="bg-white mt-5 2xl:mt-7">
            <div className="pt-5 px-5 2xl:px-8 2xl:pt-8">
                <div className="flex flex-wrap items-center justify-between -mx-2 gap-y-4">
                  <div className="px-2 flex-1 sm:w-fit max-w-[400px]">
                    <div className="relative group/main">
                      <button id="dropdownDividerButton" data-dropdown-toggle="dropdownDivider" className="w-full md:w-[160px] 2xl:w-[225px] flex items-center justify-between px-3 2xl:px-4 py-[11px] 2xl:py-5 rounded-md bg-white shadow-md text-gray-dark" type="button">
                        
                        <p className="font-20 font-medium mr-4 ">All</p>
                        <svg className="group-has-[.dropdown.block]/main:rotate-180 duration-300 size-3 2xl:size[20px] ml-4" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M15 1L8 8L1 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>   
                        </button>
                        <div id="dropdownDivider" className="dropdown dropdown-default-position-left hidden font-18 bg-white border border-gray-dark/20 w-[160px] 2xl:w-[225px]">
                          <ul className="px-3 py-1" aria-labelledby="dropdownDividerButton">
                            <li className="px-2 cursor-pointer capitalize duration-300 flex items-center space-x-3 py-2.5 2xl:py-3 border-b last:border-b-transparent hover:border-b-secondary/60 hover:text-secondary [&.active]:border-b-secondary/60 [&.active]:text-secondary">
                              <span>All</span>
                            </li>
                          </ul>
                        </div>
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
                        <div className="relative flex items-center justify-end">
                          <button className="text-gray-light focus:text-secondary hover:text-secondary flex items-center justify-center !size-[25px] 2xl:!size-[34px] p-1.5 2xl:p-2" id="table-dropdown2" data-dropdown-toggle="table-dropdowntabelAction2">
                            <svg className="h-full" stroke="currentColor" fill="currentColor" viewBox="0 0 6 26" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="2.785" cy="2.785" r="2.785" fill="currentColor"/>
                              <circle cx="2.785" cy="12.9964" r="2.785" fill="currentColor"/>
                              <circle cx="2.785" cy="23.2083" r="2.785" fill="currentColor"/>
                              </svg>
                          </button>
                          <div id="table-dropdowntabelAction2" className="hidden dropdown-default-position-middle w-[130px] 2xl:w-[170px] bg-white border border-gray-dark/20 px-3">
                            <ul className="py-1.5" aria-labelledby="table-dropdown2">
                             <li className="border-b hover:border-secondary last:border-b-transparent">
                                <NavLink className="duration-300 flex items-center hover:text-secondary space-x-3 px-3 py-2 2xl:p-3">
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
                                </NavLink> 
                              </li>
                              <li className="border-b hover:border-secondary last:border-b-transparent duration-300">
                                <NavLink  className="duration-300 flex items-center hover:text-secondary space-x-3 px-3 py-2 2xl:p-3">
                                  <svg className="w-4 2xl:w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m9 13.5 3 3m0 0 3-3m-3 3v-6m1.06-4.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                                  </svg>                                                                     
                                    <p className="font-18 font-light">Archive</p>   
                                </NavLink> 
                              </li>
                              <li className="border-b hover:border-secondary last:border-b-transparent duration-300">
                                <NavLink  className="duration-300 flex items-center hover:text-secondary space-x-3 px-3 py-2 2xl:p-3">
                                  <svg className="w-4 2xl:w-5" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M8.784 18.9999C7.49673 18.9999 6.24176 18.9856 5.00009 18.96C3.41167 18.9286 2.3125 17.8988 2.13295 16.2724C1.8337 13.5744 1.32164 7.21496 1.31689 7.15131C1.28459 6.75896 1.57719 6.41505 1.96955 6.3837C2.35621 6.37325 2.70581 6.64496 2.73716 7.03636C2.74191 7.10096 3.25302 13.4385 3.54942 16.1156C3.65107 17.04 4.14983 17.5169 5.02955 17.535C7.40458 17.5853 9.82807 17.5882 12.4406 17.5407C13.3754 17.5226 13.8808 17.0552 13.9853 16.109C14.2798 13.4547 14.7928 7.10096 14.7985 7.03636C14.8299 6.64496 15.1766 6.37135 15.5652 6.3837C15.9576 6.416 16.2502 6.75896 16.2188 7.15131C16.2131 7.21591 15.6982 13.5915 15.4018 16.2657C15.2175 17.9254 14.1212 18.9353 12.4663 18.9657C11.1999 18.9875 9.97817 18.9999 8.784 18.9999" fill="currentColor"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M16.8229 4.73947H0.712511C0.319205 4.73947 0 4.42027 0 4.02696C0 3.63366 0.319205 3.31445 0.712511 3.31445H16.8229C17.2162 3.31445 17.5354 3.63366 17.5354 4.02696C17.5354 4.42027 17.2162 4.73947 16.8229 4.73947" fill="currentColor"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M13.719 4.73962C12.6379 4.73962 11.6993 3.96916 11.4865 2.90894L11.2556 1.75373C11.2072 1.57797 11.0067 1.42502 10.7787 1.42502H6.7573C6.52929 1.42502 6.32884 1.57797 6.27089 1.79743L6.04954 2.90894C5.83768 3.96916 4.89812 4.73962 3.817 4.73962C3.4237 4.73962 3.10449 4.42042 3.10449 4.02711C3.10449 3.6338 3.4237 3.3146 3.817 3.3146C4.22171 3.3146 4.57321 3.0258 4.65302 2.62869L4.88387 1.47347C5.11852 0.588059 5.88518 0 6.7573 0H10.7787C11.6508 0 12.4175 0.588059 12.6426 1.43072L12.8839 2.62869C12.9628 3.0258 13.3143 3.3146 13.719 3.3146C14.1123 3.3146 14.4315 3.6338 14.4315 4.02711C14.4315 4.42042 14.1123 4.73962 13.719 4.73962" fill="currentColor"/>
                                    </svg>                                                                             
                                    <p className="font-18 font-light">Delete</p>   
                                </NavLink> 
                              </li>
                            </ul>
                          </div> 
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
                        <div className="relative flex items-center justify-end">
                          <button className="text-gray-light focus:text-secondary hover:text-secondary flex items-center justify-center !size-[25px] 2xl:!size-[34px] p-1.5 2xl:p-2" id="table-dropdown3" data-dropdown-toggle="table-dropdowntabelAction3">
                            <svg className="h-full" stroke="currentColor" fill="currentColor" viewBox="0 0 6 26" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="2.785" cy="2.785" r="2.785" fill="currentColor"/>
                              <circle cx="2.785" cy="12.9964" r="2.785" fill="currentColor"/>
                              <circle cx="2.785" cy="23.2083" r="2.785" fill="currentColor"/>
                              </svg>
                          </button>
                          <div id="table-dropdowntabelAction3" className="hidden dropdown-default-position-middle w-[130px] 2xl:w-[170px] bg-white border border-gray-dark/20 px-3">
                            <ul className="py-1.5" aria-labelledby="table-dropdown3">
                             <li className="border-b hover:border-secondary last:border-b-transparent">
                                <NavLink className="duration-300 flex items-center hover:text-secondary space-x-3 px-3 py-2 2xl:p-3">
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
                                </NavLink> 
                              </li>
                              <li className="border-b hover:border-secondary last:border-b-transparent duration-300">
                                <NavLink  className="duration-300 flex items-center hover:text-secondary space-x-3 px-3 py-2 2xl:p-3">
                                  <svg className="w-4 2xl:w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m9 13.5 3 3m0 0 3-3m-3 3v-6m1.06-4.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                                  </svg>                                                                     
                                    <p className="font-18 font-light">Archive</p>   
                                </NavLink> 
                              </li>
                              <li className="border-b hover:border-secondary last:border-b-transparent duration-300">
                                <NavLink  className="duration-300 flex items-center hover:text-secondary space-x-3 px-3 py-2 2xl:p-3">
                                  <svg className="w-4 2xl:w-5" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M8.784 18.9999C7.49673 18.9999 6.24176 18.9856 5.00009 18.96C3.41167 18.9286 2.3125 17.8988 2.13295 16.2724C1.8337 13.5744 1.32164 7.21496 1.31689 7.15131C1.28459 6.75896 1.57719 6.41505 1.96955 6.3837C2.35621 6.37325 2.70581 6.64496 2.73716 7.03636C2.74191 7.10096 3.25302 13.4385 3.54942 16.1156C3.65107 17.04 4.14983 17.5169 5.02955 17.535C7.40458 17.5853 9.82807 17.5882 12.4406 17.5407C13.3754 17.5226 13.8808 17.0552 13.9853 16.109C14.2798 13.4547 14.7928 7.10096 14.7985 7.03636C14.8299 6.64496 15.1766 6.37135 15.5652 6.3837C15.9576 6.416 16.2502 6.75896 16.2188 7.15131C16.2131 7.21591 15.6982 13.5915 15.4018 16.2657C15.2175 17.9254 14.1212 18.9353 12.4663 18.9657C11.1999 18.9875 9.97817 18.9999 8.784 18.9999" fill="currentColor"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M16.8229 4.73947H0.712511C0.319205 4.73947 0 4.42027 0 4.02696C0 3.63366 0.319205 3.31445 0.712511 3.31445H16.8229C17.2162 3.31445 17.5354 3.63366 17.5354 4.02696C17.5354 4.42027 17.2162 4.73947 16.8229 4.73947" fill="currentColor"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M13.719 4.73962C12.6379 4.73962 11.6993 3.96916 11.4865 2.90894L11.2556 1.75373C11.2072 1.57797 11.0067 1.42502 10.7787 1.42502H6.7573C6.52929 1.42502 6.32884 1.57797 6.27089 1.79743L6.04954 2.90894C5.83768 3.96916 4.89812 4.73962 3.817 4.73962C3.4237 4.73962 3.10449 4.42042 3.10449 4.02711C3.10449 3.6338 3.4237 3.3146 3.817 3.3146C4.22171 3.3146 4.57321 3.0258 4.65302 2.62869L4.88387 1.47347C5.11852 0.588059 5.88518 0 6.7573 0H10.7787C11.6508 0 12.4175 0.588059 12.6426 1.43072L12.8839 2.62869C12.9628 3.0258 13.3143 3.3146 13.719 3.3146C14.1123 3.3146 14.4315 3.6338 14.4315 4.02711C14.4315 4.42042 14.1123 4.73962 13.719 4.73962" fill="currentColor"/>
                                    </svg>                                                                             
                                    <p className="font-18 font-light">Delete</p>   
                                </NavLink> 
                              </li>
                            </ul>
                          </div> 
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
                        <div className="relative flex items-center justify-end">
                          <button className="text-gray-light focus:text-secondary hover:text-secondary flex items-center justify-center !size-[25px] 2xl:!size-[34px] p-1.5 2xl:p-2" id="table-dropdown4" data-dropdown-toggle="table-dropdowntabelAction4">
                            <svg className="h-full" stroke="currentColor" fill="currentColor" viewBox="0 0 6 26" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="2.785" cy="2.785" r="2.785" fill="currentColor"/>
                              <circle cx="2.785" cy="12.9964" r="2.785" fill="currentColor"/>
                              <circle cx="2.785" cy="23.2083" r="2.785" fill="currentColor"/>
                              </svg>
                          </button>
                          <div id="table-dropdowntabelAction4" className="hidden dropdown-default-position-middle w-[130px] 2xl:w-[170px] bg-white border border-gray-dark/20 px-3">
                            <ul className="py-1.5" aria-labelledby="table-dropdown4">
                             <li className="border-b hover:border-secondary last:border-b-transparent">
                                <NavLink className="duration-300 flex items-center hover:text-secondary space-x-3 px-3 py-2 2xl:p-3">
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
                                </NavLink> 
                              </li>
                              <li className="border-b hover:border-secondary last:border-b-transparent duration-300">
                                <NavLink  className="duration-300 flex items-center hover:text-secondary space-x-3 px-3 py-2 2xl:p-3">
                                  <svg className="w-4 2xl:w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m9 13.5 3 3m0 0 3-3m-3 3v-6m1.06-4.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                                  </svg>                                                                     
                                    <p className="font-18 font-light">Archive</p>   
                                </NavLink> 
                              </li>
                              <li className="border-b hover:border-secondary last:border-b-transparent duration-300">
                                <NavLink  className="duration-300 flex items-center hover:text-secondary space-x-3 px-3 py-2 2xl:p-3">
                                  <svg className="w-4 2xl:w-5" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M8.784 18.9999C7.49673 18.9999 6.24176 18.9856 5.00009 18.96C3.41167 18.9286 2.3125 17.8988 2.13295 16.2724C1.8337 13.5744 1.32164 7.21496 1.31689 7.15131C1.28459 6.75896 1.57719 6.41505 1.96955 6.3837C2.35621 6.37325 2.70581 6.64496 2.73716 7.03636C2.74191 7.10096 3.25302 13.4385 3.54942 16.1156C3.65107 17.04 4.14983 17.5169 5.02955 17.535C7.40458 17.5853 9.82807 17.5882 12.4406 17.5407C13.3754 17.5226 13.8808 17.0552 13.9853 16.109C14.2798 13.4547 14.7928 7.10096 14.7985 7.03636C14.8299 6.64496 15.1766 6.37135 15.5652 6.3837C15.9576 6.416 16.2502 6.75896 16.2188 7.15131C16.2131 7.21591 15.6982 13.5915 15.4018 16.2657C15.2175 17.9254 14.1212 18.9353 12.4663 18.9657C11.1999 18.9875 9.97817 18.9999 8.784 18.9999" fill="currentColor"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M16.8229 4.73947H0.712511C0.319205 4.73947 0 4.42027 0 4.02696C0 3.63366 0.319205 3.31445 0.712511 3.31445H16.8229C17.2162 3.31445 17.5354 3.63366 17.5354 4.02696C17.5354 4.42027 17.2162 4.73947 16.8229 4.73947" fill="currentColor"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M13.719 4.73962C12.6379 4.73962 11.6993 3.96916 11.4865 2.90894L11.2556 1.75373C11.2072 1.57797 11.0067 1.42502 10.7787 1.42502H6.7573C6.52929 1.42502 6.32884 1.57797 6.27089 1.79743L6.04954 2.90894C5.83768 3.96916 4.89812 4.73962 3.817 4.73962C3.4237 4.73962 3.10449 4.42042 3.10449 4.02711C3.10449 3.6338 3.4237 3.3146 3.817 3.3146C4.22171 3.3146 4.57321 3.0258 4.65302 2.62869L4.88387 1.47347C5.11852 0.588059 5.88518 0 6.7573 0H10.7787C11.6508 0 12.4175 0.588059 12.6426 1.43072L12.8839 2.62869C12.9628 3.0258 13.3143 3.3146 13.719 3.3146C14.1123 3.3146 14.4315 3.6338 14.4315 4.02711C14.4315 4.42042 14.1123 4.73962 13.719 4.73962" fill="currentColor"/>
                                    </svg>                                                                             
                                    <p className="font-18 font-light">Delete</p>   
                                </NavLink> 
                              </li>
                            </ul>
                          </div> 
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
                        <div className="relative flex items-center justify-end">
                          <button className="text-gray-light focus:text-secondary hover:text-secondary flex items-center justify-center !size-[25px] 2xl:!size-[34px] p-1.5 2xl:p-2" id="table-dropdown5" data-dropdown-toggle="table-dropdowntabelAction5">
                            <svg className="h-full" stroke="currentColor" fill="currentColor" viewBox="0 0 6 26" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="2.785" cy="2.785" r="2.785" fill="currentColor"/>
                              <circle cx="2.785" cy="12.9964" r="2.785" fill="currentColor"/>
                              <circle cx="2.785" cy="23.2083" r="2.785" fill="currentColor"/>
                              </svg>
                          </button>
                          <div id="table-dropdowntabelAction5" className="hidden dropdown-default-position-middle w-[130px] 2xl:w-[170px] bg-white border border-gray-dark/20 px-3">
                            <ul className="py-1.5" aria-labelledby="table-dropdown5">
                             <li className="border-b hover:border-secondary last:border-b-transparent">
                                <NavLink className="duration-300 flex items-center hover:text-secondary space-x-3 px-3 py-2 2xl:p-3">
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
                                </NavLink> 
                              </li>
                              <li className="border-b hover:border-secondary last:border-b-transparent duration-300">
                                <NavLink  className="duration-300 flex items-center hover:text-secondary space-x-3 px-3 py-2 2xl:p-3">
                                  <svg className="w-4 2xl:w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m9 13.5 3 3m0 0 3-3m-3 3v-6m1.06-4.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                                  </svg>                                                                     
                                    <p className="font-18 font-light">Archive</p>   
                                </NavLink> 
                              </li>
                              <li className="border-b hover:border-secondary last:border-b-transparent duration-300">
                                <NavLink  className="duration-300 flex items-center hover:text-secondary space-x-3 px-3 py-2 2xl:p-3">
                                  <svg className="w-4 2xl:w-5" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M8.784 18.9999C7.49673 18.9999 6.24176 18.9856 5.00009 18.96C3.41167 18.9286 2.3125 17.8988 2.13295 16.2724C1.8337 13.5744 1.32164 7.21496 1.31689 7.15131C1.28459 6.75896 1.57719 6.41505 1.96955 6.3837C2.35621 6.37325 2.70581 6.64496 2.73716 7.03636C2.74191 7.10096 3.25302 13.4385 3.54942 16.1156C3.65107 17.04 4.14983 17.5169 5.02955 17.535C7.40458 17.5853 9.82807 17.5882 12.4406 17.5407C13.3754 17.5226 13.8808 17.0552 13.9853 16.109C14.2798 13.4547 14.7928 7.10096 14.7985 7.03636C14.8299 6.64496 15.1766 6.37135 15.5652 6.3837C15.9576 6.416 16.2502 6.75896 16.2188 7.15131C16.2131 7.21591 15.6982 13.5915 15.4018 16.2657C15.2175 17.9254 14.1212 18.9353 12.4663 18.9657C11.1999 18.9875 9.97817 18.9999 8.784 18.9999" fill="currentColor"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M16.8229 4.73947H0.712511C0.319205 4.73947 0 4.42027 0 4.02696C0 3.63366 0.319205 3.31445 0.712511 3.31445H16.8229C17.2162 3.31445 17.5354 3.63366 17.5354 4.02696C17.5354 4.42027 17.2162 4.73947 16.8229 4.73947" fill="currentColor"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M13.719 4.73962C12.6379 4.73962 11.6993 3.96916 11.4865 2.90894L11.2556 1.75373C11.2072 1.57797 11.0067 1.42502 10.7787 1.42502H6.7573C6.52929 1.42502 6.32884 1.57797 6.27089 1.79743L6.04954 2.90894C5.83768 3.96916 4.89812 4.73962 3.817 4.73962C3.4237 4.73962 3.10449 4.42042 3.10449 4.02711C3.10449 3.6338 3.4237 3.3146 3.817 3.3146C4.22171 3.3146 4.57321 3.0258 4.65302 2.62869L4.88387 1.47347C5.11852 0.588059 5.88518 0 6.7573 0H10.7787C11.6508 0 12.4175 0.588059 12.6426 1.43072L12.8839 2.62869C12.9628 3.0258 13.3143 3.3146 13.719 3.3146C14.1123 3.3146 14.4315 3.6338 14.4315 4.02711C14.4315 4.42042 14.1123 4.73962 13.719 4.73962" fill="currentColor"/>
                                    </svg>                                                                             
                                    <p className="font-18 font-light">Delete</p>   
                                </NavLink> 
                              </li>
                            </ul>
                          </div> 
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
                        <div className="relative flex items-center justify-end">
                          <button className="text-gray-light focus:text-secondary hover:text-secondary flex items-center justify-center !size-[25px] 2xl:!size-[34px] p-1.5 2xl:p-2" id="table-dropdown6" data-dropdown-toggle="table-dropdowntabelAction6">
                            <svg className="h-full" stroke="currentColor" fill="currentColor" viewBox="0 0 6 26" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="2.785" cy="2.785" r="2.785" fill="currentColor"/>
                              <circle cx="2.785" cy="12.9964" r="2.785" fill="currentColor"/>
                              <circle cx="2.785" cy="23.2083" r="2.785" fill="currentColor"/>
                              </svg>
                          </button>
                          <div id="table-dropdowntabelAction6" className="hidden dropdown-default-position-middle w-[130px] 2xl:w-[170px] bg-white border border-gray-dark/20 px-3">
                            <ul className="py-1.5" aria-labelledby="table-dropdown6">
                             <li className="border-b hover:border-secondary last:border-b-transparent">
                                <NavLink className="duration-300 flex items-center hover:text-secondary space-x-3 px-3 py-2 2xl:p-3">
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
                                </NavLink> 
                              </li>
                              <li className="border-b hover:border-secondary last:border-b-transparent duration-300">
                                <NavLink  className="duration-300 flex items-center hover:text-secondary space-x-3 px-3 py-2 2xl:p-3">
                                  <svg className="w-4 2xl:w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m9 13.5 3 3m0 0 3-3m-3 3v-6m1.06-4.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                                  </svg>                                                                     
                                    <p className="font-18 font-light">Archive</p>   
                                </NavLink> 
                              </li>
                              <li className="border-b hover:border-secondary last:border-b-transparent duration-300">
                                <NavLink  className="duration-300 flex items-center hover:text-secondary space-x-3 px-3 py-2 2xl:p-3">
                                  <svg className="w-4 2xl:w-5" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M8.784 18.9999C7.49673 18.9999 6.24176 18.9856 5.00009 18.96C3.41167 18.9286 2.3125 17.8988 2.13295 16.2724C1.8337 13.5744 1.32164 7.21496 1.31689 7.15131C1.28459 6.75896 1.57719 6.41505 1.96955 6.3837C2.35621 6.37325 2.70581 6.64496 2.73716 7.03636C2.74191 7.10096 3.25302 13.4385 3.54942 16.1156C3.65107 17.04 4.14983 17.5169 5.02955 17.535C7.40458 17.5853 9.82807 17.5882 12.4406 17.5407C13.3754 17.5226 13.8808 17.0552 13.9853 16.109C14.2798 13.4547 14.7928 7.10096 14.7985 7.03636C14.8299 6.64496 15.1766 6.37135 15.5652 6.3837C15.9576 6.416 16.2502 6.75896 16.2188 7.15131C16.2131 7.21591 15.6982 13.5915 15.4018 16.2657C15.2175 17.9254 14.1212 18.9353 12.4663 18.9657C11.1999 18.9875 9.97817 18.9999 8.784 18.9999" fill="currentColor"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M16.8229 4.73947H0.712511C0.319205 4.73947 0 4.42027 0 4.02696C0 3.63366 0.319205 3.31445 0.712511 3.31445H16.8229C17.2162 3.31445 17.5354 3.63366 17.5354 4.02696C17.5354 4.42027 17.2162 4.73947 16.8229 4.73947" fill="currentColor"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M13.719 4.73962C12.6379 4.73962 11.6993 3.96916 11.4865 2.90894L11.2556 1.75373C11.2072 1.57797 11.0067 1.42502 10.7787 1.42502H6.7573C6.52929 1.42502 6.32884 1.57797 6.27089 1.79743L6.04954 2.90894C5.83768 3.96916 4.89812 4.73962 3.817 4.73962C3.4237 4.73962 3.10449 4.42042 3.10449 4.02711C3.10449 3.6338 3.4237 3.3146 3.817 3.3146C4.22171 3.3146 4.57321 3.0258 4.65302 2.62869L4.88387 1.47347C5.11852 0.588059 5.88518 0 6.7573 0H10.7787C11.6508 0 12.4175 0.588059 12.6426 1.43072L12.8839 2.62869C12.9628 3.0258 13.3143 3.3146 13.719 3.3146C14.1123 3.3146 14.4315 3.6338 14.4315 4.02711C14.4315 4.42042 14.1123 4.73962 13.719 4.73962" fill="currentColor"/>
                                    </svg>                                                                             
                                    <p className="font-18 font-light">Delete</p>   
                                </NavLink> 
                              </li>
                            </ul>
                          </div> 
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
