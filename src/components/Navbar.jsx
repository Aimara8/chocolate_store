import logo from '../assets/chocolate-logo.png';

const Navbar = () => {
    return (
            <nav className="sticky top-0 z-50 py-3 backdrop-blur-3xl border-b border-neutral-700/80">
                <div className="container px-4 mx-auto relative text-sm">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center shrink-0">
                            <img className='h-10 w-10 mr-2' src={logo} alt="Chocolate Store Logo" />
                            <span className="text-xl tracking-tight">Chocolate Store</span>
                        </div>
                        <ul className='hidden md:flex ml-14 space-x-12'>
                            <li>
                                <a href="#" className="text-gray-200 hover:text-primary">Home</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-200 hover:text-primary">Products</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-200 hover:text-primary">About Us</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-200 hover:text-primary">Contact</a>
                            </li>
                        </ul>
                        <div className="hidden md:flex items-center space-x-12">
                            <a href="#" className="py-2 px-3 border rounded-md">
                                Sign In
                            </a>
                            <a href="#" className="bg-linear-to-r from-orange-500 to-orange-800 text-white py-2 px-3 rounded-md shadow-lg">
                                Sign Up
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
    )
}

export default Navbar;