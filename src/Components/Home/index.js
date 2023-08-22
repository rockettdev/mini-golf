import '../../App.css'
import '../../index.css'
import putterpal from '../../Assets/putterpal.png'

function Home () {
    return (
    <>
        <div className="flex flex-wrap justify-center bg-teal-600 h-screen">
            <h1 className="flex-row w-screen self-center">
                <img className="" alt="" src={putterpal} width={650}/>
                 </h1>
            <button className="flex-row w-24 h-16 bg-cyan-800 mr-3 mt-20 rounded-2xl text-white">Log In</button>
            <button className="flex-row w-24 h-16 bg-cyan-800 ml-3 mt-20 rounded-2xl text-white">Sign Up</button>
        </div>
    </>
    )
}

export default Home