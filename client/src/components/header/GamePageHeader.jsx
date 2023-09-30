import MainGameForm from "../form/MainGameForm";

const GamePageHeader = () => {
    return (
        <>
            <div style={{
                background: `url('/images/1.jpg')`,
                backgroundRepeat: "no-repeat",
                backgroundAttachment: 'fixed',
                backgroundSize: '100%'
            }} className="w-full h-[450px]">
                <div className="flex items-center justify-center h-full relative">
                    <MainGameForm />
                </div>
            </div>
        </>
    )
}

export default GamePageHeader