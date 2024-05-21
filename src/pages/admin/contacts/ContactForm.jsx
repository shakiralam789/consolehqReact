import { Dropdown } from "flowbite-react";
import BreadCrumb from "../../../components/admin/BreadCrumb";

export default function ContactForm() {
  return (
    <>
          <BreadCrumb title={'add new contact'}/>
        <form action="">   
            <div className="bg-white mt-5 2xl:mt-6">
                <div className="p-5 2xl:p-8 border-b">
                    <h5 className="mb-4 2xl:mb-7 text-gray-dark font-medium font-24 capitalize">Contacts details</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-7">
                        <div>
                        <label className="default-label required-style" htmlFor="">Contact name</label>
                        <input className="default-input" type="text" placeholder="Enter contact name" />
                        </div>
                        <div>
                        <label className="default-label" htmlFor="">Account number <span className="italic font-light">( Unique ID to help identity this contact )</span></label>
                        <input className="default-input" type="text" placeholder="Enter a uniq id" />
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-x-9 mt-5 2xl:mt-8">
                    <label className="flex group/check space-x-3.5 cursor-pointer">
                        <span className="all-check cursor-pointer group-has-[input:checked]/check:bg-default-green group-has-[input:checked]/check:border-default-green flex justify-center items-center checkbox-size border border-gray-light rounded-[5px]">
                        <svg className="check-icon-size text-white group-has-[input:checked]/check:block hidden" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg>
                        <input className="border-[1.5px] border-gray-dark hidden" id="" name="" type="checkbox" />
                        </span>
                        <span className="default-label mb-0">customer</span>
                    </label>
                    <label className="flex group/check space-x-3.5 cursor-pointer">
                        <span className="all-check cursor-pointer group-has-[input:checked]/check:bg-default-green group-has-[input:checked]/check:border-default-green flex justify-center items-center checkbox-size border border-gray-light rounded-[5px]">
                        <svg className="check-icon-size text-white group-has-[input:checked]/check:block hidden" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg>
                        <input className="border-[1.5px] border-gray-dark hidden" id="" name="" type="checkbox" />
                        </span>
                        <span className="default-label mb-0">vendor</span>
                    </label>
                    </div>
                </div>
            </div>
            <div className="bg-white mt-5 2xl:mt-6">
                <div className="p-5 2xl:p-8 border-b">
                    <h5 className="mb-4 2xl:mb-7 text-gray-dark font-medium font-24 capitalize">Main person</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-7">
                    <div>
                        <label className="default-label" htmlFor="">First name</label>
                        <input className="default-input" type="text" placeholder="Enter first name" />
                    </div>
                    <div>
                        <label className="default-label" htmlFor="">Last name</label>
                        <input className="default-input" type="text" placeholder="Enter last name" />
                    </div>
                    <div>
                        <label className="default-label" htmlFor="">Email</label>
                        <input className="default-input" type="text" placeholder="Enter your email" />
                    </div>
                </div>

                <h5 className="mt-5 2xl:mt-8 mb-2 2xl:mb-7 text-gray-dark font-medium font-24 capitalize">Addition people</h5>
                <button className="font-18 text-blue2">+ Add additional person</button>
                </div>
            </div>
            <div className="bg-white mt-5 2xl:mt-6">
                <div className="p-5 2xl:p-8 border-b">
                    <h5 className="mb-4 2xl:mb-7 text-gray-dark font-medium font-24 capitalize">Business information</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-7">
                    <div>
                        <label htmlFor="phone-input" className="default-label">Phone number</label>
                        <div className="relative flex items-center">

                          <Dropdown className="px-2" renderTrigger={()=>{
                            return <button id="dropdown-phone-button" data-dropdown-toggle="dropdown-phone" className="flex-shrink-0 z-10 inline-flex items-center default-input w-auto border-r-0" type="button">
                                <svg fill="none" aria-hidden="true" className="w-7 2xl:w-10 me-2" viewBox="0 0 20 15"><rect width="19.6" height="14" y=".5" fill="#fff" rx="2"/><mask id="a" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse"><rect width="19.6" height="14" y=".5" fill="#fff" rx="2"/></mask><g mask="url(#a)"><path fill="#D02F44" fillRule="evenodd" d="M19.6.5H0v.933h19.6V.5zm0 1.867H0V3.3h19.6v-.933zM0 4.233h19.6v.934H0v-.934zM19.6 6.1H0v.933h19.6V6.1zM0 7.967h19.6V8.9H0v-.933zm19.6 1.866H0v.934h19.6v-.934zM0 11.7h19.6v.933H0V11.7zm19.6 1.867H0v.933h19.6v-.933z" clipRule="evenodd"/><path fill="#46467F" d="M0 .5h8.4v6.533H0z"/><g filter="url(#filter0_d_343_121520)"><path fill="url(#paint0_linear_343_121520)" fillRule="evenodd" d="M1.867 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.866 0a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM7.467 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zM2.333 3.3a.467.467 0 100-.933.467.467 0 000 .933zm2.334-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.4.467a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm-2.334.466a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.466a.467.467 0 11-.933 0 .467.467 0 01.933 0zM1.4 4.233a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM6.533 4.7a.467.467 0 11-.933 0 .467.467 0 01.933 0zM7 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zM3.267 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0z" clipRule="evenodd"/></g></g><defs><linearGradient id="paint0_linear_343_121520" x1=".933" x2=".933" y1="1.433" y2="6.1" gradientUnits="userSpaceOnUse"><stop stopColor="#fff"/><stop offset="1" stopColor="#F0F0F0"/></linearGradient><filter id="filter0_d_343_121520" width="6.533" height="5.667" x=".933" y="1.433" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse"><feFlood floodOpacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_343_121520"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_343_121520" result="shape"/></filter></defs></svg>
                                <svg className="w-2.5 h-2.5 2xl:w-6 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m1 1 4 4 4-4"/></svg>
                            </button>
                          }}>
                              <Dropdown.Item class="list">
                                  <span className="inline-flex items-center">
                                      <svg fill="none" aria-hidden="true" className="h-4 w-4 me-2" viewBox="0 0 20 15"><rect width="19.6" height="14" y=".5" fill="#fff" rx="2"/><mask id="a" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse"><rect width="19.6" height="14" y=".5" fill="#fff" rx="2"/></mask><g mask="url(#a)"><path fill="#D02F44" fillRule="evenodd" d="M19.6.5H0v.933h19.6V.5zm0 1.867H0V3.3h19.6v-.933zM0 4.233h19.6v.934H0v-.934zM19.6 6.1H0v.933h19.6V6.1zM0 7.967h19.6V8.9H0v-.933zm19.6 1.866H0v.934h19.6v-.934zM0 11.7h19.6v.933H0V11.7zm19.6 1.867H0v.933h19.6v-.933z" clipRule="evenodd"/><path fill="#46467F" d="M0 .5h8.4v6.533H0z"/><g filter="url(#filter0_d_343_121520)"><path fill="url(#paint0_linear_343_121520)" fillRule="evenodd" d="M1.867 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.866 0a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM7.467 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zM2.333 3.3a.467.467 0 100-.933.467.467 0 000 .933zm2.334-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.4.467a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm-2.334.466a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.466a.467.467 0 11-.933 0 .467.467 0 01.933 0zM1.4 4.233a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM6.533 4.7a.467.467 0 11-.933 0 .467.467 0 01.933 0zM7 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zM3.267 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0z" clipRule="evenodd"/></g></g><defs><linearGradient id="paint0_linear_343_121520" x1=".933" x2=".933" y1="1.433" y2="6.1" gradientUnits="userSpaceOnUse"><stop stopColor="#fff"/><stop offset="1" stopColor="#F0F0F0"/></linearGradient><filter id="filter0_d_343_121520" width="6.533" height="5.667" x=".933" y="1.433" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse"><feFlood floodOpacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_343_121520"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_343_121520" result="shape"/></filter></defs></svg>
                                      United States (+1)
                                  </span>
                              </Dropdown.Item>
                              <Dropdown.Item class="list">
                                  <span className="inline-flex items-center">
                                  <svg className="h-4 w-4 me-2" fill="none" viewBox="0 0 20 15"><rect width="19.6" height="14" y=".5" fill="#fff" rx="2"/><mask id="a" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse"><rect width="19.6" height="14" y=".5" fill="#fff" rx="2"/></mask><g mask="url(#a)"><path fill="#0A17A7" d="M0 .5h19.6v14H0z"/><path fill="#fff" fillRule="evenodd" d="M-.898-.842L7.467 4.8V-.433h4.667V4.8l8.364-5.642L21.542.706l-6.614 4.46H19.6v4.667h-4.672l6.614 4.46-1.044 1.549-8.365-5.642v5.233H7.467V10.2l-8.365 5.642-1.043-1.548 6.613-4.46H0V5.166h4.672L-1.941.706-.898-.842z" clipRule="evenodd"/><path stroke="#DB1F35" strokeLinecap="round" strokeWidth=".667" d="M13.067 4.933L21.933-.9M14.009 10.088l7.947 5.357M5.604 4.917L-2.686-.67M6.503 10.024l-9.189 6.093"/><path fill="#E6273E" fillRule="evenodd" d="M0 8.9h8.4v5.6h2.8V8.9h8.4V6.1h-8.4V.5H8.4v5.6H0v2.8z" clipRule="evenodd"/></g></svg>
                                      United Kingdom (+44)
                                  </span>
                              </Dropdown.Item>
                              <Dropdown.Item class="list">
                                  <span className="inline-flex items-center">
                                      <svg className="h-4 w-4 me-2" fill="none" viewBox="0 0 20 15" xmlns="http://www.w3.org/2000/svg"><rect width="19.6" height="14" y=".5" fill="#fff" rx="2"/><mask id="a" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse"><rect width="19.6" height="14" y=".5" fill="#fff" rx="2"/></mask><g mask="url(#a)"><path fill="#0A17A7" d="M0 .5h19.6v14H0z"/><path fill="#fff" stroke="#fff" strokeWidth=".667" d="M0 .167h-.901l.684.586 3.15 2.7v.609L-.194 6.295l-.14.1v1.24l.51-.319L3.83 5.033h.73L7.7 7.276a.488.488 0 00.601-.767L5.467 4.08v-.608l2.987-2.134a.667.667 0 00.28-.543V-.1l-.51.318L4.57 2.5h-.73L.66.229.572.167H0z"/><path fill="url(#paint0_linear_374_135177)" fillRule="evenodd" d="M0 2.833V4.7h3.267v2.133c0 .369.298.667.666.667h.534a.667.667 0 00.666-.667V4.7H8.2a.667.667 0 00.667-.667V3.5a.667.667 0 00-.667-.667H5.133V.5H3.267v2.333H0z" clipRule="evenodd"/><path fill="url(#paint1_linear_374_135177)" fillRule="evenodd" d="M0 3.3h3.733V.5h.934v2.8H8.4v.933H4.667v2.8h-.934v-2.8H0V3.3z" clipRule="evenodd"/><path fill="#fff" fillRule="evenodd" d="M4.2 11.933l-.823.433.157-.916-.666-.65.92-.133.412-.834.411.834.92.134-.665.649.157.916-.823-.433zm9.8.7l-.66.194.194-.66-.194-.66.66.193.66-.193-.193.66.193.66-.66-.194zm0-8.866l-.66.193.194-.66-.194-.66.66.193.66-.193-.193.66.193.66-.66-.193zm2.8 2.8l-.66.193.193-.66-.193-.66.66.193.66-.193-.193.66.193.66-.66-.193zm-5.6.933l-.66.193.193-.66-.193-.66.66.194.66-.194-.193.66.193.66-.66-.193zm4.2 1.167l-.33.096.096-.33-.096-.33.33.097.33-.097-.097.33.097.33-.33-.096z" clipRule="evenodd"/></g><defs><linearGradient id="paint0_linear_374_135177" x1="0" x2="0" y1=".5" y2="7.5" gradientUnits="userSpaceOnUse"><stop stopColor="#fff"/><stop offset="1" stopColor="#F0F0F0"/></linearGradient><linearGradient id="paint1_linear_374_135177" x1="0" x2="0" y1=".5" y2="7.033" gradientUnits="userSpaceOnUse"><stop stopColor="#FF2E3B"/><stop offset="1" stopColor="#FC0D1B"/></linearGradient></defs></svg>
                                      Australia (+61)
                                  </span>
                              </Dropdown.Item>
                              <Dropdown.Item class="list">
                                  <span className="inline-flex items-center">
                                  <svg className="w-4 h-4 me-2" fill="none" viewBox="0 0 20 15"><rect width="19.6" height="14" y=".5" fill="#fff" rx="2"/><mask id="a" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse"><rect width="19.6" height="14" y=".5" fill="#fff" rx="2"/></mask><g mask="url(#a)"><path fill="#262626" fillRule="evenodd" d="M0 5.167h19.6V.5H0v4.667z" clipRule="evenodd"/><g filter="url(#filter0_d_374_135180)"><path fill="#F01515" fillRule="evenodd" d="M0 9.833h19.6V5.167H0v4.666z" clipRule="evenodd"/></g><g filter="url(#filter1_d_374_135180)"><path fill="#FFD521" fillRule="evenodd" d="M0 14.5h19.6V9.833H0V14.5z" clipRule="evenodd"/></g></g><defs><filter id="filter0_d_374_135180" width="19.6" height="4.667" x="0" y="5.167" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse"><feFlood floodOpacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_374_135180"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_374_135180" result="shape"/></filter><filter id="filter1_d_374_135180" width="19.6" height="4.667" x="0" y="9.833" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse"><feFlood floodOpacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_374_135180"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_374_135180" result="shape"/></filter></defs></svg>
                                      Germany (+49)
                                  </span>
                              </Dropdown.Item>
                              <Dropdown.Item class="list">
                                  <span className="inline-flex items-center">
                                  <svg className="w-4 h-4 me-2" fill="none" viewBox="0 0 20 15"><rect width="19.1" height="13.5" x=".25" y=".75" fill="#fff" stroke="#F5F5F5" strokeWidth=".5" rx="1.75"/><mask id="a" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse"><rect width="19.1" height="13.5" x=".25" y=".75" fill="#fff" stroke="#fff" strokeWidth=".5" rx="1.75"/></mask><g mask="url(#a)"><path fill="#F44653" d="M13.067.5H19.6v14h-6.533z"/><path fill="#1035BB" fillRule="evenodd" d="M0 14.5h6.533V.5H0v14z" clipRule="evenodd"/></g></svg>
                                      France (+33)
                                  </span>
                              </Dropdown.Item>
                          </Dropdown>
                        <div className="relative w-full">
                            <span className="absolute top-2 bottom-2 left-0 border"></span>
                            <input type="text" id="phone-input" className="default-input border-l-0" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="Enter your phone number" />
                        </div>
                    </div>
                        <button className="font-18 mt-2 2xl:mt-4 text-blue2">+ Add Phone Number</button>
                    </div>
                    <div>
                        <label className="default-label" htmlFor="">website</label>
                        <input className="default-input" type="text" placeholder="Enter company name" />
                    </div>
                    <div>
                        <label className="default-label" htmlFor="">company registration number</label>
                        <input className="default-input" type="text" placeholder="Enter registration number" />
                    </div>
                </div>

                <h5 className="mt-5 2xl:mt-8 mb-2 2xl:mb-7 text-gray-dark font-medium font-24 capitalize">Business address</h5>
                <button type="button" data-modal-target="default-modal" data-modal-toggle="default-modal" className="font-18 text-blue2">+ Add Business address</button>
                </div>
            </div>
            <div className="mt-5 2xl:mt-6">
                <div className="flex justify-end gap-5">
                <button type="button" className="flex-1 sm:flex-none min-w-[140px] 2xl:min-w-[200px] btn-white">Cancel</button>
                <button type="button" className="flex-1 sm:flex-none min-w-[140px] 2xl:min-w-[200px] btn-primary">Save & close</button>
                </div>
            </div>

            {/* business modal */}
        <div id="default-modal" tabIndex="-1" aria-hidden="true" className="px-4 sm:px-6 bg-[#082020]/70 hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[99] justify-center items-center w-full md:inset-0 h-screen max-h-full">
          <div className="relative w-full md:w-10/12 max-h-full">
              {/* Modal content */}
              <div className="relative bg-white shadow my-4 sm:my-6">
                  <div className="p-5 2xl:p-8">
                    {/* Modal header */}
                    
                    <h5 className="mb-4 2xl:mb-8 text-gray-dark font-medium font-24 capitalize">Add Business Address Manually</h5>

                    {/* Modal body  */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-6 2xl:gap-y-10">
                      <div className="md:col-span-2">
                        <label className="default-label" htmlFor="">Address</label>
                        <input className="default-input" type="text" placeholder="Enter Address name" />
                      </div>
                      <div>
                        <label className="default-label" htmlFor="">City</label>
                        <input className="default-input" type="text" placeholder="Input city name" />
                      </div>
                      <div>
                        <label className="default-label" htmlFor="">State</label>
                        <input className="default-input" type="text" placeholder="Input state name" />
                      </div>
                      <div>
                        <label className="default-label" htmlFor="">Zip code</label>
                        <input className="default-input" type="text" placeholder="Input zip code number" />
                      </div>
                      <div>
                        <label className="default-label" htmlFor="">Country</label>
                        <input className="default-input" type="text" placeholder="Input country number" />
                      </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-x-9 mt-8 2xl:mt-10">
                    <label className="flex group/check space-x-3.5 cursor-pointer">
                      <span className="all-check cursor-pointer group-has-[input:checked]/check:bg-default-green group-has-[input:checked]/check:border-default-green flex justify-center items-center checkbox-size border border-gray-light rounded-[5px]">
                        <svg className="check-icon-size text-white group-has-[input:checked]/check:block hidden" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg>
                        <input className="border-[1.5px] border-gray-dark hidden" id="" name="" type="checkbox" />
                      </span>
                      <span className="default-label mb-0">Use as delivery address</span>
                    </label>
                  </div>

                  <button type="button" data-modal-hide="default-modal" data-modal-target="default-modal2" data-modal-toggle="default-modal2" className="font-18 text-blue2 mt-5 2xl:mt-6">+ Add different delivery address</button>
                </div>
                  {/* Modal footer  */}
                  <div className="p-5 2xl:p-6 pt-0">
                    <div className="flex justify-end gap-5">
                      <button data-modal-hide="default-modal" type="button" className="flex-1 sm:flex-none min-w-[140px] 2xl:min-w-[200px] btn-white">Cancel</button>
                      <button data-modal-hide="default-modal" className="flex-1 sm:flex-none min-w-[140px] 2xl:min-w-[200px] btn-primary">Save & close</button>
                    </div>
                  </div>
              </div>
          </div>
        </div>

        {/* delivery modal */}

        <div id="default-modal2" tabIndex="-1" aria-hidden="true" className="px-4 sm:px-6 bg-[#082020]/70 hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[99] justify-center items-center w-full md:inset-0 h-screen max-h-full">
          <div className="relative w-full md:w-10/12 max-h-full">
              {/* Modal content */}
              <div className="relative bg-white shadow my-4 sm:my-6">
                  <div className="p-5 2xl:p-8">

                    {/* Modal header */}
                    
                    <h5 className="mb-4 2xl:mb-8 text-gray-dark font-medium font-24 capitalize">Add delivery Address Manually</h5>

                    {/* Modal body */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-6 2xl:gap-y-10">
                      <div className="md:col-span-2">
                        <label className="default-label" htmlFor="">Address</label>
                        <input className="default-input" type="text" placeholder="Enter Address name" />
                      </div>
                      <div>
                        <label className="default-label" htmlFor="">City</label>
                        <input className="default-input" type="text" placeholder="Input city name" />
                      </div>
                      <div>
                        <label className="default-label" htmlFor="">State</label>
                        <input className="default-input" type="text" placeholder="Input state name" />
                      </div>
                      <div>
                        <label className="default-label" htmlFor="">Zip code</label>
                        <input className="default-input" type="text" placeholder="Input zip code number" />
                      </div>
                      <div>
                        <label className="default-label" htmlFor="">Country</label>
                        <input className="default-input" type="text" placeholder="Input country number" />
                      </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-x-9 mt-8 2xl:mt-10">
                    <label className="flex group/check space-x-3.5 cursor-pointer">
                      <span className="all-check cursor-pointer group-has-[input:checked]/check:bg-default-green group-has-[input:checked]/check:border-default-green flex justify-center items-center checkbox-size border border-gray-light rounded-[5px]">
                        <svg className="check-icon-size text-white group-has-[input:checked]/check:block hidden" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg>
                        <input className="border-[1.5px] border-gray-dark hidden" id="" name="" type="checkbox" />
                      </span>
                      <span className="default-label mb-0">Use as delivery address</span>
                    </label>
                  </div>

                  <button type="button" data-modal-hide="default-modal2" data-modal-target="default-modal" data-modal-toggle="default-modal" className="font-18 text-blue2 mt-5 2xl:mt-6">+ Add different delivery address</button>
                </div>

                  {/* Modal footer */}
                  <div className="p-5 2xl:p-6 pt-0">
                    <div className="flex justify-end gap-5">
                      <button data-modal-hide="default-modal2" type="button" className="flex-1 sm:flex-none min-w-[140px] 2xl:min-w-[200px] btn-white">Cancel</button>
                      <button data-modal-hide="default-modal2" className="flex-1 sm:flex-none min-w-[140px] 2xl:min-w-[200px] btn-primary">Save & close</button>
                    </div>
                  </div>
              </div>
          </div>
        </div>
        </form>
    </>
  )
}
