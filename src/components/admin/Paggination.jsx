import { NavLink } from "react-router-dom";

export default function Paggination() {
  return (
    <div className="mt-6">
        <div className="flex flex-wrap justify-end -mx-4">
            <div className="w-1/3 px-4">
                <div>
                    <ul className="flex items-center justify-end space-x-2.5 2xl:space-x-3">
                        <li>
                            <NavLink className="size-8 font-16 2xl:size-11 flex items-center text-gray-dark justify-center rounded-md bg-white hover:bg-primary hover:text-white duration-300" to={''}>
                                <svg className="w-[8px] 2xl:w-[11px]" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.60099 12.748L0.160992 6.392L6.60099 0.036H10.633L4.16499 6.392L10.633 12.748H6.60099Z" fill="#E0E0E0"/>
                                </svg>                                            
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="size-8 font-16 2xl:size-11 flex items-center text-white justify-center rounded-md bg-primary hover:bg-primary hover:text-white duration-300" to={''}>
                                1 
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="size-8 font-16 2xl:size-11 flex items-center text-gray-dark justify-center rounded-md bg-white hover:bg-primary hover:text-white duration-300" to={''}>
                                2 
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="size-8 font-16 2xl:size-11 flex items-center text-gray-dark justify-center rounded-md bg-white hover:bg-primary hover:text-white duration-300" to={''}>
                                3 
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="size-8 font-16 2xl:size-11 flex items-center text-gray-dark justify-center rounded-md bg-white hover:bg-primary hover:text-white duration-300" to={''}>
                                4 
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className=" text-gray-dark rounded-md bg-white hover:bg-primary hover:text-white" to={''}>
                            <svg className="w-[8px] 2xl:w-[11px]" viewBox="0 0 13 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.743652 1.94531C0.743652 1.61719 0.85498 1.3418 1.07764 1.11914C1.30029 0.890625 1.60205 0.776367 1.98291 0.776367C2.36963 0.776367 2.67139 0.890625 2.88818 1.11914C3.11084 1.3418 3.22217 1.61719 3.22217 1.94531C3.22217 2.27344 3.11084 2.54883 2.88818 2.77148C2.67139 2.99414 2.36963 3.10547 1.98291 3.10547C1.60205 3.10547 1.30029 2.99414 1.07764 2.77148C0.85498 2.54883 0.743652 2.27344 0.743652 1.94531ZM5.57342 1.94531C5.57342 1.61719 5.68475 1.3418 5.9074 1.11914C6.13006 0.890625 6.43182 0.776367 6.81268 0.776367C7.19939 0.776367 7.50115 0.890625 7.71795 1.11914C7.94061 1.3418 8.05193 1.61719 8.05193 1.94531C8.05193 2.27344 7.94061 2.54883 7.71795 2.77148C7.50115 2.99414 7.19939 3.10547 6.81268 3.10547C6.43182 3.10547 6.13006 2.99414 5.9074 2.77148C5.68475 2.54883 5.57342 2.27344 5.57342 1.94531ZM10.4032 1.94531C10.4032 1.61719 10.5145 1.3418 10.7372 1.11914C10.9598 0.890625 11.2616 0.776367 11.6424 0.776367C12.0292 0.776367 12.3309 0.890625 12.5477 1.11914C12.7704 1.3418 12.8817 1.61719 12.8817 1.94531C12.8817 2.27344 12.7704 2.54883 12.5477 2.77148C12.3309 2.99414 12.0292 3.10547 11.6424 3.10547C11.2616 3.10547 10.9598 2.99414 10.7372 2.77148C10.5145 2.54883 10.4032 2.27344 10.4032 1.94531Z" fill="currentColor"/>
                                </svg>                                          
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="size-8 font-16 2xl:size-11 flex items-center text-gray-dark justify-center rounded-md bg-white hover:bg-primary hover:text-white duration-300" to={''}>
                                40 
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="size-8 font-16 2xl:size-11 flex items-center text-gray-dark justify-center rounded-md bg-white hover:bg-primary hover:text-white duration-300" to={''}>
                            <svg className="w-[8px] 2xl:w-[11px]" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.344008 0.036H4.37601L10.816 6.392L4.37601 12.748H0.344008L6.81201 6.392L0.344008 0.036Z" fill="#FF6C3E"/>
                                </svg>                                          
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
