import Link from "next/link";

export default function Signin() {
  return (
    <div className="flex flex-col items-center space-y-5 pt-32 pb-44 w-ful">
      <span className="text-2xl w-1/4 font-bold ">Sign In</span>
      <input
        type="text"
        className="border border-gray-500 w-1/4 h-14 p-4"
        placeholder="Email"
      />
      <input
        type="password"
        className="h-14 p-4 border border-gray-500 w-1/4"
        placeholder="Password"
      />
      <button className="w-1/4 h-14 bg-black font-semibold text-white">
        Sign In
      </button>

      <Link
        href="/signup"
        className="w-1/4 h-14 bg-black font-semibold text-white text-center content-center"
      >
        Create an Account
      </Link>
    </div>
  );
}
