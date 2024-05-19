import { NavLink } from 'react-router-dom'
import avatar from '../../../assets/images/avatar.jpg'

export default function Message() {
  return (
    <>
        <div className="flex flex-col h-full">
            <div className="flex flex-col sm:flex-row sm:items-center justify-end flex-wrap">
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
                        <NavLink className="flex items-center space-x-2 2xl:space-x-3 p-2 2xl:p-3" to="upload.html">
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
            <div className="mt-6 md:flex-1">
                <div className="flex flex-wrap -mx-2.5 2xl:-mx-4 md:h-full">
                    <div className="px-2.5 2xl:px-4 w-full md:w-7/12 h-full">
                      <div id="message-content" className="flex flex-col bg-white h-full">
                        <div className="flex justify-between flex-wrap">
                          <div className="flex flex-wrap">
                            <div className="text-secondary bg-secondary/10 p-4 2xl:p-6">
                              <div className="font-50 font-semibold mb-1 2xl:mb-4">22</div>
                              <span className="font-18">Sat</span>
                            </div>
                            <div className="p-5 2xl:p-6">
                              <div className="font-24 text-primary font-medium mb-4 2xl:mb-6">Abdur Raquib</div>
                              <div className="font-18 text-gray-light flex items-center space-x-1 2xl:space-x-2">
                                <svg className="size-[18px] sm:size-[25px] 2xl:size-[35px]" width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path fillRule="evenodd" clipRule="evenodd" d="M34.1353 17.5941C34.1353 26.7594 26.738 34.1881 17.6116 34.1881C8.48515 34.1881 1.08789 26.7594 1.08789 17.5941C1.08789 8.42876 8.48515 1 17.6116 1C26.738 1 34.1353 8.42876 34.1353 17.5941Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                  <path d="M23.7404 22.8744L17.0059 18.8398V10.1445" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                  </svg>
                                  <span>10:20 AM - 12:30 AM</span>
                              </div>
                            </div>
                          </div>
                          <div className="p-5 2xl:p-6 pl-0">
                            <img className="size-[40px] xs:size-[50px] sm:size-[70px] 2xl:size-[115px]" src={avatar} alt="" />
                          </div>
                        </div>
                        <div className="flex-1 mt-6 2xl:mt-8 py-5 px-5 2xl:px-8 2xl:py-6">
                          <div className="h-full flex flex-wrap -mx-2">
                            <div className="w-full md:w-7/12 xl:w-8/12 px-2">
                              <label className="font-medium font-20 text-gray-dark">Client company assets</label>
                              <p className="font-18 text-gray-light mt-2">Your dedicated space to speed and manage assets for your company. Simplify collaboration, strende af  sharing and</p>
                            </div>
                            <div className="mt-5 md:mt-0 w-full xs:w-7/12 md:w-5/12 xl:w-4/12 px-2">
                             <div className="border">
                                <div className="w-full py-8 md:py-12 2xl:py-14 flex items-center justify-center">
                                  <svg className="w-[30%] max-w-[100px]" viewBox="0 0 116 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M103.863 32.0098C111.285 32.0098 115.777 40.2129 111.871 46.4629L96.2461 71.4629C94.4883 74.1973 91.5586 75.7598 88.4336 75.7598H10.3086C5.03516 75.7598 0.933594 71.6582 0.933594 66.3848V10.1348C0.933594 5.05664 5.03516 0.759766 10.3086 0.759766H41.5586L54.0586 13.2598H85.3086C90.3867 13.2598 94.6836 17.5566 94.6836 22.6348V32.0098H103.863ZM10.3086 11.3066V57.0098L22.418 36.6973C24.1758 33.7676 27.3008 32.0098 30.6211 32.0098H85.3086V23.8066C85.3086 23.2207 84.7227 22.6348 84.1367 22.6348H50.1523L37.6523 10.1348H11.4805C10.6992 10.1348 10.3086 10.7207 10.3086 11.3066ZM88.4336 66.3848L104.059 41.3848H30.0352L14.9961 66.3848H88.4336Z" fill="currentColor"/>
                                    </svg>
                                </div>
                                <div className="px-4 py-2 bg-sky-light font-16 text-gray-dark">Client company assets</div>
                             </div>
                            </div>
                            <div className="w-full px-2 mt-auto pt-6">
                              <div className="font-18 text-primary 2xl:mt-8 py-5 px-5 2xl:px-8 2xl:py-6 bg-sky-light flex flex-wrap gap-6 lg:gap-10">
                                <div className="flex items-center space-x-2 xl:space-x-4">
                                  <svg className="w-7 xl:w-[35px] 2xl:w-[48px]" viewBox="0 0 116 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M103.863 32.0098C111.285 32.0098 115.777 40.2129 111.871 46.4629L96.2461 71.4629C94.4883 74.1973 91.5586 75.7598 88.4336 75.7598H10.3086C5.03516 75.7598 0.933594 71.6582 0.933594 66.3848V10.1348C0.933594 5.05664 5.03516 0.759766 10.3086 0.759766H41.5586L54.0586 13.2598H85.3086C90.3867 13.2598 94.6836 17.5566 94.6836 22.6348V32.0098H103.863ZM10.3086 11.3066V57.0098L22.418 36.6973C24.1758 33.7676 27.3008 32.0098 30.6211 32.0098H85.3086V23.8066C85.3086 23.2207 84.7227 22.6348 84.1367 22.6348H50.1523L37.6523 10.1348H11.4805C10.6992 10.1348 10.3086 10.7207 10.3086 11.3066ZM88.4336 66.3848L104.059 41.3848H30.0352L14.9961 66.3848H88.4336Z" fill="currentColor"/>
                                    </svg>
                                    <span>Folder</span>
                                </div>
                                <div className="flex items-center space-x-2 xl:space-x-4">
                                    <svg className="w-[22px] xl:w-[28px] 2xl:w-[38px]" viewBox="0 0 38 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M36.6935 11.4459L25.9478 0.502365C25.7992 0.351355 25.6209 0.23119 25.4237 0.149052C25.2265 0.0669144 25.0144 0.0244882 24.8 0.0243102H24.3647C24.322 0.0208877 24.2853 0 24.2416 0C24.198 0 24.1614 0.0208877 24.1186 0.0243102H10.6544C8.12068 0.0386583 5.6921 1.01627 3.88259 2.75025C2.07307 4.48423 1.02461 6.83853 0.959074 9.31491V31.5028C0.906343 34.0193 1.8762 36.4536 3.65608 38.2722C5.43596 40.0908 7.88068 41.1453 10.4544 41.2046H10.6844L27.6986 41.2036C30.2502 41.1129 32.6648 40.0516 34.4278 38.2458C36.1909 36.44 37.1629 34.0325 37.1369 31.5362V12.5236C37.1372 12.1218 36.9783 11.7356 36.6935 11.4459ZM32.2121 11.375H29.6938C28.6694 11.3705 27.6885 10.97 26.9651 10.2609C26.2417 9.55174 25.8347 8.5916 25.8328 7.59008V4.87851L32.2121 11.375ZM27.6343 38.0932H10.5249C9.66537 38.0725 8.81846 37.8864 8.0325 37.5457C7.24654 37.2049 6.53693 36.7162 5.94417 36.1073C5.35142 35.4984 4.88713 34.7813 4.57782 33.997C4.26851 33.2127 4.12023 32.3765 4.14146 31.5362V9.35137C4.19099 7.69105 4.89858 6.11454 6.11479 4.95475C7.331 3.79497 8.96063 3.1427 10.6595 3.1357H22.6504V7.59008C22.6538 9.41562 23.3961 11.1656 24.715 12.4578C26.034 13.75 27.8224 14.4793 29.6896 14.4864H33.9545V31.5474C33.9771 33.2273 33.33 34.85 32.1504 36.0717C30.9707 37.2935 29.3511 38.0185 27.6343 38.0932Z" fill="currentColor"/>
                                      </svg>
                                    <span>Client files</span>
                                </div>
                                <div className="flex items-center space-x-2 xl:space-x-4">
                                    <svg className="w-[22px] xl:w-[28px] 2xl:w-[38px]" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M1.09277 8.78385H18.9167" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                      <path d="M14.442 12.6891H14.4512" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                      <path d="M10.0045 12.6891H10.0137" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                      <path d="M5.55818 12.6891H5.56744" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                      <path d="M14.442 16.5758H14.4512" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                      <path d="M10.0045 16.5758H10.0137" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                      <path d="M5.55818 16.5758H5.56744" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                      <path d="M14.0433 1.37939V4.67017" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                      <path d="M5.96515 1.37939V4.67017" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                      <path fillRule="evenodd" clipRule="evenodd" d="M14.2383 2.9585H5.77096C2.83427 2.9585 1 4.59443 1 7.60152V16.6512C1 19.7055 2.83427 21.3793 5.77096 21.3793H14.229C17.175 21.3793 19 19.7339 19 16.7268V7.60152C19.0092 4.59443 17.1842 2.9585 14.2383 2.9585Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                      </svg>
                                    <span>Calendar</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-5 md:mt-0 px-2.5 2xl:px-4  w-full md:w-5/12 md:h-full">
                      <div id="messenger-div" className="flex flex-col min-h-[480px]">
                        <div className="bg-white w-full px-4 2xl:px-5">
                          <div className="border-b py-4 space-y-3 2xl:space-y-4">
                            <h2 className="capitalize font-50 font-semibold text-primary">Robert Dewayne</h2>
                            <span className="flex items-center space-x-1 font-18 font-[300] text-default-green">
                              <span className="block size-2 2xl:size-2.5 rounded-full bg-default-green"></span>
                              <span>Active Now</span>
                            </span>
                          </div>
                        </div>
                        <div className="msg-space flex-1 bg-white py-4 px-4 2xl:px-6 overflow-y-scroll customScroll-none font-18 space-y-4 flex flex-col"></div>
                        <div className="w-full bg-white p-5 2xl:p-6 flex items-end text-gray-700">
                         <div className="w-full">
                          <form action="" method="" encType="multipart/form-data" id="my-form"></form>
                  
                            <div className="multiple-uploader pl-1 customScrollY flex flex-wrap items-end overflow-y-auto max-h-[244px] gap-4" id="multiple-uploader"></div>
                  
                            <div className="relative">
                              <input className="msg-input !px-4 w-full border outline-none h-12 pl-2 pr-8 font-18" type="text" placeholder="Type message" />
                              <button className="fileBtn absolute top-1/2 -translate-y-1/2 right-2 text-gray-500 hover:text-secondary">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13" />
                                </svg>
                              </button>
                            </div>
                         </div>
                  
                          <div>
                            <button className="msg-btn  ml-2 size-12 flex justify-center items-center bg-primary hover:bg-[#183c44]">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                              </svg>          
                            </button>
                          </div>
                        </div>
                      </div>
                  </div>
              </div>
            </div>
          </div>
    </>
  )
}
