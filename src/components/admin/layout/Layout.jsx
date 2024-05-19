import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Layout() {
  return (
    <>
      <Header />
      <div className="flex">
        <div
          id="overlay"
          className="z-10 lg:hidden [&.active]:opacity-50 opacity-0 [&.active]:pointer-events-auto pointer-events-none fixed h-screen w-screen bg-black duration-300"
        ></div>
        <Sidebar />
        <main
          id="main-section"
          className="min-h-screen h-screen flex flex-col w-full pt-[100px] 2xl:pt-[140px] overflow-y-auto"
        >
          <div className="p-5 2xl:p-7 w-full flex-1">
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
}
