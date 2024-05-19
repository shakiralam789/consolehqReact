import { NavLink } from 'react-router-dom';
import avatar from '../../../assets/images/avatar.jpg'
import logo from '../../../assets/images/consolhq-logo.png'
function Header() {
  return (
    <>
      <header className="fixed z-50 top-0 left-0 w-full h-[100px] 2xl:h-[140px] bg-white custom-drop-shadow flex items-center">
        <nav className="w-full px-6 2xl:px-7 flex justify-between">
          <div className="flex items-center space-x-4">
            <NavLink to="/dashboard" className="flex items-center space-x-3">
              <img
                className="w-[130px] 2xl:w-[185px]"
                src={logo}
                alt=""
              />
              <svg
                className="hidden lg:block size-4 2xl:size-7"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </NavLink>
            <button className="collapse-sidebar-button relative w-6 group lg:hidden">
              <svg
                className="absolute top-1/2 -translate-y-1/2 w-full opacity-100 group-[.active]:opacity-0 duration-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <svg
                className="absolute top-1/2 -translate-y-1/2 w-full opacity-0 group-[.active]:opacity-100 duration-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                />
              </svg>
            </button>
          </div>

          <div className="flex items-center">
            <div className="flex items-center px-2 sm:space-x-3 2xl:space-x-5">
              {/* search */}
              <div className="hidden sm:block">
                <button className="size-[30px] sm:size-[40px] 2xl:size-[50px] flex justify-center items-center text-primary">
                  <svg
                    className="size-5 2xl:size-7"
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
                    />
                  </svg>
                </button>
              </div>

              {/* question  */}
              <div>
                <button className="size-[30px] sm:size-[40px] 2xl:size-[50px] flex justify-center items-center text-primary">
                  <svg
                    className="size-5 2xl:size-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                    />
                  </svg>
                </button>
              </div>

              {/* notinfication */}
              <div className="sm:pr-[22px] 2xl:pr-8 sm:border-r-[2px] border-r-gray-100">
                <button className="relative size-[30px] sm:size-[40px] 2xl:size-[50px] flex justify-center items-center text-primary">
                  <svg
                    className="size-[34px] 2xl:size-10"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="50" height="50" rx="5" fill="white" />
                    <mask
                      id="mask0_155_293"
                    //   style={"mask-type:luminance"}
                      maskUnits="userSpaceOnUse"
                      x="12"
                      y="10"
                      width="27"
                      height="25"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 10H38.2398V34.6099H12V10Z"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask0_155_293)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M25.1179 12.1279C20.1599 12.1279 16.7041 16.012 16.7041 19.4975C16.7041 22.4468 15.8856 23.8101 15.1621 25.0131C14.5819 25.9791 14.1237 26.7423 14.1237 28.4007C14.3606 31.0762 16.1268 32.482 25.1179 32.482C34.0593 32.482 35.8808 31.0137 36.1163 28.3085C36.1121 26.7423 35.6538 25.9791 35.0736 25.0131C34.3501 23.8101 33.5316 22.4468 33.5316 19.4975C33.5316 16.012 30.0759 12.1279 25.1179 12.1279ZM25.1178 34.6099C18.4845 34.6099 12.4894 34.1418 12 28.4915C11.9958 26.1536 12.7093 24.9648 13.3392 23.9179C13.9761 22.8568 14.5762 21.8567 14.5762 19.4975C14.5762 14.9112 18.8121 10 25.1178 10C31.4235 10 35.6595 14.9112 35.6595 19.4975C35.6595 21.8567 36.2595 22.8568 36.8965 23.9179C37.5264 24.9648 38.2399 26.1536 38.2399 28.4007C37.7448 34.1418 31.7512 34.6099 25.1178 34.6099Z"
                        fill="#1E4D57"
                      />
                    </g>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M25.0488 40.5001H25.046C23.4557 40.4987 21.9506 39.7979 20.8086 38.5254C20.4157 38.0899 20.4511 37.4161 20.8881 37.0245C21.325 36.6302 21.9974 36.6656 22.3904 37.104C23.1252 37.9225 24.0686 38.3722 25.0474 38.3722H25.0488C26.0319 38.3722 26.9795 37.9225 27.7158 37.1025C28.1102 36.667 28.7826 36.6316 29.2181 37.0245C29.655 37.4175 29.6905 38.0913 29.2975 38.5268C28.1513 39.7993 26.6433 40.5001 25.0488 40.5001Z"
                      fill="#1E4D57"
                    />
                  </svg>
                  <span className="font-16 absolute top-[-15px] right-[-10px] 2xl:top-[-18px] 2xl:right-[-18px] text-white flex justify-center items-center checkbox-size rounded-full mt-2 mr-2 bg-secondary">
                    7
                  </span>
                </button>
              </div>
            </div>

            {/* porfile */}
            <div className="pl-3 2xl:pl-6">
              <div className="cursor-pointer flex items-center space-x-4">
                <img
                  className="size-10 2xl:size-14 rounded-full object-cover object-center"
                  src={avatar}
                  alt=""
                />
                <div className="hidden sm:flex items-center space-x-3">
                  <div>
                    <div className="font-24 font-semibold text-gray-dark">
                      Shakir alam
                    </div>
                    <p className="font-18 text-gray-light">Super Admin</p>
                  </div>
                  <svg
                    className="size-4 2xl:size-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
