"use client";
import { FormEvent } from "react";
import SocialLogin from "../SocialLogin";
import { doCredentialLogin } from "@/app/actions";
import { useRouter } from "next/navigation";

function CredentialLoginForm() {
  const router = useRouter();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData);
      const response = await doCredentialLogin(data);
      if (response.error) {
        alert(response.error);
      } else {
        router.push("/home");
      }
    } catch (error: unknown) {
      console.log(error, "Check credential");
      alert("Please check credential");
    }
  };
  return (
    <div className="flex items-center justify-center flex-col  bg-gray-100">
      <form
        className="bg-white p-8 rounded-lg shadow-md max-w-md w-full space-y-6"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-semibold text-center text-gray-800">
          Login
        </h2>

        <div className="flex flex-col">
          <label htmlFor="email" className="text-gray-700 font-medium mb-1">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="px-4 py-2 border text-black-400 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="password" className="text-gray-700 font-medium mb-1">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 mt-4 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-300"
        >
          Credential Login
        </button>

        <div className="text-center text-gray-500 my-4">or</div>
      </form>
      <SocialLogin />
    </div>
  );
}

export default CredentialLoginForm;
