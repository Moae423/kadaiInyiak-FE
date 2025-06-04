import { MdMenu } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IoLogIn } from "react-icons/io5";
import Link from "next/link";
const Dropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="cursor-pointer ">
        <MdMenu size={24} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48">
        <DropdownMenuLabel>
          <h1 className="text-[1.5rem] font-semibold  ">Menu</h1>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex gap-2">
          <IoLogIn size={30} />
          <Link href="">
            <p className="text-[1.2rem] font-medium ">Login</p>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <FaUserCircle size={30} />
          <Link href="">
            <p className="text-[1.2rem] font-medium ">Register</p>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Dropdown;
