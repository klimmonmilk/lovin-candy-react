import { Router, Route, Link } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { AiOutlineUnlock } from "react-icons/ai";
import Login from "./login";

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#AEEBFF]">
      <div className="w-[380px] bg-white/70 border border-white rounded-2xl p-8 shadow-xl backdrop-blur-md">
        <h1 className="text-4xl text-[#2B3A55] font-bold text-center mb-8">
          Register
        </h1>

        <form>
          <div className="relative my-6">
            <input
              type="email"
              className="block w-full py-2 px-0 text-sm text-[#2B3A55] bg-transparent border-0 border-b-2 border-[#FF9ECF] appearance-none focus:outline-none focus:border-[#6EDCFF] peer"
              placeholder=""
            />
            <label
              htmlFor=""
              className="absolute text-sm text-[#2B3A55] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Your Email
            </label>
            <BiUser className="absolute top-3 right-2 text-[#6EDCFF]" />
          </div>

          <div className="relative my-6">
            <input
              type="password"
              className="block w-full py-2 px-0 text-sm text-[#2B3A55] bg-transparent border-0 border-b-2 border-[#FFE97A] appearance-none focus:outline-none focus:border-[#6EDCFF] peer"
              placeholder=""
            />
            <label
              htmlFor=""
              className="absolute text-sm text-[#2B3A55] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Your Password
            </label>
            <AiOutlineUnlock className="absolute top-3 right-2 text-[#FF9ECF]" />
          </div>

          <div className="relative my-6">
            <input
              type="password"
              className="block w-full py-2 px-0 text-sm text-[#2B3A55] bg-transparent border-0 border-b-2 border-[#FFE97A] appearance-none focus:outline-none focus:border-[#6EDCFF] peer"
              placeholder=""
            />
            <label
              htmlFor=""
              className="absolute text-sm text-[#2B3A55] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Confirm Password
            </label>
            <AiOutlineUnlock className="absolute top-3 right-2 text-[#FF9ECF]" />
          </div>

          <button
            type="submit"
            className="w-full bg-[#FF9ECF] text-white font-semibold py-2 rounded-full mb-4 hover:bg-[#FF7FBF] transition"
          >
            Register
          </button>

          <div className="text-center text-sm text-[#2B3A55]">
            Have an Account?{" "}
            <Link to="/Login" className="text-[#6EDCFF] font-medium">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
