function Portal () {

    return (
        <>
            <div className="flex flex-wrap justify-center bg-main-bg bg-cover h-screen">
            <h1 className="fixed top-40 text-white font-custom text-4xl"> Welcome ... </h1>
                <div className="grid grid-cols-2 gap-4 mt-80 w-4/5 h-2/5 rounded-lg text-white text-center font-custom text-lg">
                    <div className="grid mt-10 bg-gradient-to-tl from-slate-900 to-green-500 rounded-3xl transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:scale-105 shadow-xl">NEW GAME</div>
                    <div className="grid mt-10 bg-gradient-to-tl from-slate-900 to-green-500 rounded-3xl transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:scale-105 shadow-xl">STATS</div>
                    <div className="grid mb-10 bg-gradient-to-tl from-slate-900 to-green-500 rounded-3xl transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:scale-105 shadow-xl">LEADERBOARDS</div>
                    <div className="grid mb-10 bg-gradient-to-tl from-slate-900 to-green-500 rounded-3xl transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:scale-105 shadow-xl">SETTINGS</div>
                </div>
        
            </div>
        </>
    )
}

export default Portal