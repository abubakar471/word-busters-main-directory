import MainGameForm from "../form/MainGameForm";

const GamePageHeader = () => {
    return (
        <div className="overflow-y-hidden">
            <div style={{
                background: `url('/images/1.jpg')`,
                backgroundRepeat: "no-repeat",
                backgroundAttachment: 'fixed',
                backgroundSize: '100%'
            }} className="w-full h-screen">
                <div className="flex items-center justify-center h-full relative">
                    <MainGameForm />
                </div>
            </div>
        </div>
    )
}

export default GamePageHeader