import LoginForm from "../features/authentications/LoginForm";


function Login() {
  return <div className="h-screen flex flex-col justify-center items-center bg-[#F9FAFB] gap-4">


  <img src="logo-light.png" alt="The wild oasis logo" className="w-40" />
  <h3 className="font-bold text-orange-950 text-3xl mb-2 ">Log in to your account</h3>

  <LoginForm/>

  </div>
}

export default Login;
