import '../../css/registerCss.css'
import RegisterForm from '../auth/RegisterForm';
import logo from '../../assets/logo.svg'
import { Link } from "react-router";


export default function Register() {
    return (
    <>
      <div className="min-h-screen flex flex-col justify-center py-8 sm:px-6 lg:px-8">
        <div className="signup-container">
          {/* <!-- PhotoBooth Logo --> */}
          <div className="flex justify-center mb-4">
            <img src={logo} alt="PhotoBooth" className="h-[51px]" />
          </div>

          {/* <!-- Sign Up Form --> */}
         <RegisterForm/>

          {/* <!-- Login Box --> */}
          <div className="bg-white p-6 border border-gray-300 text-center mb-4 rounded-md">
            <p className="text-sm">
              Have an account?{" "}
              <Link to="/login" className="text-blue-500 font-semibold">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
