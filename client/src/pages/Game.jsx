import GamePageHeader from "../components/header/GamePageHeader"
import Navbar from "../components/navbar/navbar"

const Game = () => {
    return (
        <>
            <Navbar active={2} />
            <div className="w-[90%] md:w-[80] lg:w-[80%] mx-auto py-4">
                <GamePageHeader />
            </div>
        </>
    )
}

export default Game