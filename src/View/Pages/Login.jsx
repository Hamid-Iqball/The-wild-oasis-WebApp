import LoginForm from "../features/authentications/LoginForm";


function Login() {
  return <div className="h-screen flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('/hotel2.jpg')"}}>
 <div className="border-1 border-customOrange-100 flex flex-col justify-center p-4 rounded-xl items-center bg-transparent backdrop-blur-sm shadow-2xl"> 

 <div className="flex flex-col justify-center items-center gap-2  p-10 rounded-xl ">

  <img src="logo-dark.png" alt="The wild oasis logo" className="w-40" />
  <h3 className="font-bold  text-3xl mb-2 text-white">Log in to your account</h3>
 </div>

  <LoginForm/>

 </div>
  </div>
}

export default Login;
