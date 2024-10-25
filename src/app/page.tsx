import Link from "next/link";
import Login from "./components/login/Login";
import { users } from "@/userData/userData";

export default function Home() {
  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Hey, it&apos;s Time to Sign In 😊
        </h1>
        <Login />
        {/* <p className="mt-4 text-gray-600">Don&apos;t you have an account?</p> */}
        <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">
            MongoDB connection is not working, so I have provided static users.
            Please log in with the credentials below:
          </h2>

          {users.map((user, idx) => (
            <div
              key={idx}
              className="bg-gray-100 p-4 mb-4 rounded-md shadow-sm hover:bg-gray-200 transition-all"
            >
              <div className="font-medium text-gray-700">
                Email: {user.email}
              </div>
              <div className="text-gray-600">Password: {user.password}</div>
            </div>
          ))}
        </div>

        {/* <Link
          href="/register"
          className="text-blue-500 hover:text-blue-600 font-medium mt-2 inline-block"
        
        >
          Register
        </Link> */}
      </div>
    </div>
  );
}
