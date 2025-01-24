import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@heroui/react";
import ToggleApp from '../components/toggle';
import PopOverApp from '../components/popover';
export default function NavbarApp() {
  return (
    <div className="w-screen">
      <Navbar isBordered height="8rem">
        <NavbarBrand>
          <div className="flex items-center gap-3">
            <img
              src="/logo.svg"
              alt="FundAssist-AI"
              className="w-20 h-20 text-blue-500"
            />
            <p className="font-bold text-4xl">FundAssist-AI</p>
          </div>
        </NavbarBrand>
        <NavbarContent className="flex-1 flex justify-end items-center">
          <NavbarItem>
            <PopOverApp />
          </NavbarItem>
          <NavbarItem>
            <ToggleApp />
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  );
}
