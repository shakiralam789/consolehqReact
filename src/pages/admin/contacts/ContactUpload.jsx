
import BreadCrumb from "../../../components/admin/BreadCrumb";

export default function ContactUpload() {
  return (
    <>
         <BreadCrumb title={'Upload contact'}/>
        
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
