import Link from "next/link";

export default function Signup() {
  return (
    <div className="mx-80 my-36">
      <div className="flex flex-col items-center space-y-5 w-full">
        <span className="text-2xl w-2/5 font-bold ">Sign Up</span>
        <input
          type="text"
          className="border border-gray-500 w-1/3 h-14 p-4"
          placeholder="Email"
        />
        <input
          type="text"
          className="h-14 p-4 border border-gray-500 w-1/3"
          placeholder="Phone Number"
        />
        <input
          type="password"
          className="h-14 p-4 border border-gray-500 w-1/3"
          placeholder="Password"
        />
        <Link
          href="#"
          className="w-1/3 h-14 bg-black font-semibold text-white text-center content-center "
        >
          Sign Up
        </Link>

        <div className="text-sm w-1/3 flex justify-between px-5">
          <span>Already have an account?</span>
          <a href="/login" className="underline hover:text-blue-600">
            Sign In
          </a>
        </div>
      </div>
    </div>
  );
}
