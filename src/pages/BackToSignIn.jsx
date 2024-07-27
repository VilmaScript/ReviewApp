import { useNavigate } from "react-router-dom"

function BackToSignIn(){
    const navigate = useNavigate()
    function loginAgain(){
     navigate('/sign-in')   
    }
    return <div className="h-screen bg-white flex flex-col items-center justify-center px-5 ">
        <h3 className="text-xl font-medium text-slate-800">Please kindly go back to sign in with your credentials so we can set up your Profile. </h3>
        <button  className="text-sm font-medium bg-violet-900 focus:outline-none text-white px-2.5 py-3 rounded mt-5 active:bg-violet-700" onClick={loginAgain}>Back to Sign In</button>
    </div>
}

export default BackToSignIn