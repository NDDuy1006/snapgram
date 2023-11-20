import BottomBar from "@/components/shared/BottomBar";
import LeftSideBar from "@/components/shared/LeftSidebar";
import TopBar from "@/components/shared/TopBar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="w-full md:flex">
      <TopBar />
      <LeftSideBar />
      <section className="flex flex-1 h-full">
        <Outlet />
      </section>
      <BottomBar />
    </div>
  )
}

export default RootLayout