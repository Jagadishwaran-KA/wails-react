import { Sidebar } from "flowbite-react";
import { IoSettingsSharp } from "react-icons/io5";
import { FaShareSquare } from "react-icons/fa";
import { HiChartPie } from "react-icons/hi";
import { GrServices } from "react-icons/gr";
import { Link } from "react-router-dom";
function Sidebars() {
  return (
    <div className="border-2 py-1 h-full">
      <aside className="h-screen">
        <Sidebar
          aria-label="Default sidebar example"
          className="h-full w-full "
        >
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Link to="/">
                <Sidebar.Item
                  className="border-b-2   hover:bg-green-300 border border-gray-100 rounded-lg overflow-hidden shadow-md"
                  href="#"
                  icon={HiChartPie}
                >
                  Dashboard
                </Sidebar.Item>
              </Link>
              <Link to="upload">
                <Sidebar.Item
                  className="border-b-2  hover:bg-green-300 border border-gray-100 rounded-lg overflow-hidden shadow-md"
                  href="#"
                  icon={FaShareSquare}
                >
                  Upload
                </Sidebar.Item>
              </Link>
              <Link to="services">
                <Sidebar.Item
                  className="border-b-2 bg-green-300 border hover:bg-green-300 border-gray-100 rounded-lg overflow-hidden shadow-md"
                  href="#"
                  icon={GrServices}
                >
                  Services
                </Sidebar.Item>
              </Link>

              <Sidebar.Item
                className="border-b-2 hover:bg-green-300 border border-gray-100 rounded-lg overflow-hidden shadow-md"
                href="#"
                icon={IoSettingsSharp}
              >
                Settings
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </aside>
    </div>
  );
}

export default Sidebars;
