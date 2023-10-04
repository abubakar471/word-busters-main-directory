import {Link} from "react-router-dom"

const Navbar = () => {
    return(
        <nav className="w-[90%] md:w-[80] lg:w-[80%] mx-auto flex items-center justify-between py-4">
            <div>
                <Link to="/" className="text-3xl">Word Busters</Link>
            </div>

            <div className="flex items-starts gap-x-2">
                <Link to="/" className="border-green-500 hover:translate-r-2 hover:border-b-[2px] transition-all hover:mx-2 duration-300 ease-in">Home</Link>
                <Link to="/game" className="border-green-500 hover:translate-r-2 hover:border-b-[2px] transition-all hover:mx-2 duration-300 ease-in">Game</Link>
                <Link to="/" className="border-green-500 hover:translate-r-2 hover:border-b-[2px] transition-all hover:mx-2 duration-300 ease-in">About</Link>
                <Link to="/" className="border-green-500 hover:translate-r-2 hover:border-b-[2px] transition-all hover:mx-2 duration-300 ease-in">Contact</Link>
            </div>
        </nav>
    )
}

export default Navbar