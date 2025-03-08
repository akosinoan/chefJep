
import Image from "next/image"
import Link from "next/link"
import logo from "@/assets/images/chefjeplogo.jpg"

const NavBar = () => {
    return (
        <>
        <div className="bg-red-600">
            <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* <div className="flex items-center">
                        
                        
                        <a href="/">
                        <Image className="h-12 w-12" src={logo} alt="ChefJep" priority={true}/>
                        </a>

                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <a
                                href="/"
                                className="rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
                                >
                                Rooms
                                </a>
                                
                                // Logged In only 
                                <a
                                href="/bookings.html"
                                className="rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
                                >
                                Bookings
                                </a>
                                <a
                                href="/add-room.html"
                                className="rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
                                >
                                Add Room
                                </a>
                            </div>
                        </div>
                    </div> */}
            {/*  Right Side Menu  */}
            <div className="ml-auto">
                <div className="ml-4 flex items-center md:ml-6">
                {/*  Logged Out Only  */}
                
                <a
                    href="#menu"
                    className="mr-3 text-white  hover:text-gray-600"
                >
                    <i className="fa fa-sign-in"></i> Menu
                </a>
                <a
                    href="#about"
                    className="mr-3 text-white  hover:text-gray-600"
                >
                    <i className="fa fa-user"></i> About
                </a>
                <a href="#contact"
                    className="mr-3 text-white  hover:text-gray-600">
                    <i className="fa fa-building"></i> Contact
                </a>
               
                </div>
            </div>
            </div>
        </nav>

        {/* <!-- Mobile menu --> */}
        
        {/* <div className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            <a
                href="/"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
            >
                Rooms
            </a>
            {/* <!-- Logged In Only --> 
            <a
                href="/bookings.html"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
            >
                Bookings
            </a>
            <a
                href="/add-room.html"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
            >
                Add Room
            </a>
            </div>
        </div> */}
      </div>
      </>
    );   
}

export default NavBar;