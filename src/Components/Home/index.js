import '../../App.css'
import { Link } from 'react-router-dom';
import putterpal from '../../Assets/putterpal.png'

function Home () {
    return (
    <>
        <div className="flex flex-wrap justify-center bg-main-bg bg-cover h-screen">
            <h1 className="flex-row w-screen self-center mt-20">
                <img className="mx-auto" alt="" src={putterpal} width={320}/>
            </h1>
            <div className="mt-20">
                <Link to="login"><button className="flex-row w-24 h-16 bg-white mr-3 mt-20 rounded-2xl text-black font-semibold">Log In</button></Link>
                <Link to="signup"><button className="flex-row w-24 h-16 bg-white ml-3 mt-20 rounded-2xl text-black font-semibold">Sign Up</button></Link>
            </div>
        </div>
    </>
    )
}

export default Home