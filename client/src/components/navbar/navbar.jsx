import {Link} from "react-router-dom"

const Navbar = () => {
    return(
        <nav className="w-[90%] md:w-[80] lg:w-[80%] mx-auto flex items-center justify-between py-4">
            <div>
                <Link to="/" className="text-3xl">Word Busters</Link>
            </div>

            <div className="flex items-starts gap-x-2">
                <Link to="/">Home</Link>
                <Link to="/game">Game</Link>
                <Link to="/">About</Link>
                <Link to="/">Contact</Link>
            </div>
        </nav>
    )
}

export default Navbar