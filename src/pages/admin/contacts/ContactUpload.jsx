import { NavLink } from "react-router-dom";

export default function ContactUpload() {
  return (
    <>
         <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between flex-wrap">
            <h3 className="text-gray-dark font-28 font-medium mb-4 sm:mb-0">Upload Contacts</h3>
            <div className="flex items-center gap-5 2xl:gap-6 sm:justify-end relative">
              <NavLink to={'/contacts/form'} className="flex-1 flex items-center justify-between px-3 2xl:px-4 py-[11px] 2xl:py-5 bg-white hover:bg-[#fcfcfc] text-gray-dark">
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
                      <NavLink to={''} className="flex items-center space-x-2 2xl:space-x-3 p-2 2xl:p-3">
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
                      <NavLink to={''} className="flex items-center space-x-3 p-2 2xl:p-3">
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
        
        <div className="bg-white mt-5 sm:mt-6">
            <div className="py-4 sm:py-5 px-4 sm:px-5 2xl:px-8 2xl:py-6">
                <h2 className="font-24 font-medium text-gray-dark">Prepare file to import</h2>
                <div className="text-center flex flex-col justify-center items-center gap-5 2xl:gap-7 min-h-[300px] 2xl:min-h-[400px] mt-5 2xl:mt-6 p-4 sm:p-5 2xl:p-10 rounded-md border-dashed border-2 border-gray-dark/50">
                  <svg className="size-[80px] 2xl:size-[92px]" viewBox="0 0 93 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M46.4996 45.9997V80.4997M46.4996 45.9997L36.9163 53.6664M46.4996 45.9997L56.083 53.6664M19.7966 34.9482C16.1711 35.8605 13.0035 38.0654 10.889 41.1484C8.77439 44.2315 7.85843 47.9806 8.31316 51.6914C8.76789 55.4022 10.562 58.8192 13.3584 61.3005C16.1549 63.7818 19.7611 65.1565 23.4996 65.1664H27.333" stroke="#1E4D57" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M61.1812 27.3626C59.871 22.1744 56.6371 17.6786 52.135 14.7864C47.633 11.8942 42.1996 10.8221 36.9364 11.7874C31.6731 12.7526 26.9738 15.6831 23.7911 19.9847C20.6084 24.2863 19.1804 29.6371 19.7966 34.9526C19.7966 34.9526 20.3831 38.3336 21.5829 40.2502" stroke="#1E4D57" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M65.6654 65.1673C68.3718 65.1655 71.0473 64.5905 73.5155 63.4801C75.9837 62.3698 78.1888 60.7493 79.9856 58.7253C81.7825 56.7013 83.1303 54.3198 83.9403 51.7373C84.7504 49.1549 85.0044 46.4302 84.6855 43.7426C84.3666 41.055 83.4822 38.4653 82.0904 36.1442C80.6986 33.823 78.831 31.8229 76.6104 30.2755C74.3899 28.7281 71.8669 27.6686 69.2073 27.1666C66.5478 26.6646 63.8121 26.7315 61.1804 27.363L56.082 28.7506" stroke="#1E4D57" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <p className="font-18 text-gray-light">
                      Browse and choose the files you want to upload<br /> from your computer
                    </p>
                    <div className="flex flex-wrap">
                      <div className="flex flex-wrap">
                        {/* <div className="m-2 sm:m-2.5 2xl:m-3 rounded size-[40px] 2xl:size-[54px] border"></div> */}
                      </div>
                      <button className="m-2 sm:m-2.5 2xl:m-3 text-white rounded duration-300 hover:bg-green-600 size-[40px] 2xl:size-[54px] flex justify-center items-center bg-default-green">
                        <svg className="size-6 2xl:size-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>                        
                      </button>
                    </div>
                    <p className="text-red1 font-18">Upload any CSV, XLS or XLSX files with company, contact and email information</p>
                </div>
            </div>
        </div>
        <div className="mt-5 sm:mt-6">
          <button className="bg-white btn text-gray-dark hover:bg-[#fcfcfc] duration-300 px-12">
            Exit
          </button>
        </div>
    </>
  )
}
