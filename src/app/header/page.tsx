
import Link from "next/link";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"


export default Header
function Header(){
    return(<div>
      {/* Header Section */}

      <header className="">
        <nav className=" flex justify-between items-center px-4 py-4 max-w-screen-xl mx-auto ">
          {/* Logo */}
          <div className="text-sm md:text-lg lg:text-xl font-bold    ">CHEAMIND</div>
          <ul className="hidden md:block">
            <li className="space-x-6 text-xs md:text-lg lg:text-xl font-bold">
              <Link className="hover:text-blue-600" href="http://localhost:3000">Home</Link>
              <Link className="hover:text-blue-600" href="http://localhost:3000/about">About</Link>
              <Link className="hover:text-blue-600" href="http://localhost:3000/contact">Contact</Link>
            </li>
            </ul>
            <Sheet>
  <SheetTrigger className="block md:hidden">
    <Menu/>
  </SheetTrigger>
  <SheetContent>
  <li className="space-x-6 text-xs md:text-lg lg:text-xl font-bold">
              <Link className="hover:text-blue-600" href="http://localhost:3000">Home</Link>
              <Link className="hover:text-blue-600" href="http://localhost:3000/about">About</Link>
              <Link className="hover:text-blue-600" href="http://localhost:3000/contact">Contact</Link>
            </li>
    
  </SheetContent>
</Sheet>
        </nav>
      </header>

</div>
    );
}


