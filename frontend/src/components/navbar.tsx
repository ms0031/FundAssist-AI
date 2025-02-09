import ToggleApp from "../components/toggle";
import PopOverApp from "../components/popover";
import { Divider } from "@heroui/react";
import DrawerApp from '../components/drawer';
export default function NavbarApp() {
  return (
    <div>
    <div className="w-screen p-4 flex items-center">
      <div className="flex items-center">
        <div>
          <img
            src="/logo.svg"
            alt="FundAssist-AI"
            className="w-16 h-16 text-blue-500"
          />
        </div>
        <div>
          <p className="font-sourGummy font-extrabold text-4xl ">FundAssist-AI</p>
        </div>
        </div>
      <div className="flex-1 flex justify-end items-center">
        <div>
          <PopOverApp />
          </div>
          
        <div>
          <ToggleApp />
          </div>
          <div>
            <DrawerApp />
          </div>
          
      </div>

    </div>
    <Divider/>
    </div>
  );
}
