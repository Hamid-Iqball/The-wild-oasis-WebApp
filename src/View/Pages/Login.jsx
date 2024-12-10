import LoginForm from "../features/authentications/LoginForm";


function Login() {
  return <div className="h-screen flex flex-col justify-center items-center bg-slate-100 gap-3">


  <img src="logo-light.png" alt="The wild oasis logo" className="w-32" />
  <h3 className="font-semibold text-orange-950 text-3xl mb-2 ">Log in to your account</h3>

  <LoginForm/>

  </div>
}

export default Login;
