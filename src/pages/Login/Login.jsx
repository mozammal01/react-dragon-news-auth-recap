import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {

  const { signIn } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  console.log('This is from login', location);

  const handleLogin = e => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const email = form.get('email')
    const password = form.get('password')
    
    signIn(email, password)
      .then(result => {

        // Navigate after login
        navigate(location?.state ? location.state : '/');

        console.log(result.user);
      })
      .catch(error => {
        console.error(error);
      })
    console.log(email, password);
  }

  return (
    <div>
      <Navbar></Navbar>
      <div className="text-center">
        <h2 className="text-3xl my-5 ">Login Your Account</h2>

        <form onSubmit={handleLogin} className="lg:w-1/2 md:w-3/4 mx-auto card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <p>Dont have an account ? <Link className="text-red-600 font-bold" to="/register">Register</Link></p>
      </div>

    </div>
  );
};

export default Login;