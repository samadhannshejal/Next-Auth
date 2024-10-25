import React, { FormEvent } from "react";
import SocialLogin from "./SocialLogin";
import { useRouter } from "next/navigation";
import { users } from "@/userData/userData";
const RegistrationForm = () => {
  const router = useRouter();
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);

      const email = formData.get("email");
      const password = formData.get("password");
      // const newUser = {
      //   email,
      //   password,
      // };
      // console.log(users);
      // users.push(newUser);
      router.push("/");
      // const response = await fetch("/api/register", {
      //   method: "POST",
      //   headers: {
      //     "content-type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     name,
      //     email,
      //     password,
      //   }),
      // });

      // if (response.status === 201) router.push("/");
    } catch (err: unknown) {
      console.log(err);
      console.log("Register form input failed");
    }
  };
  return (
    <>
      <form
        className="bg-white p-8 rounded-lg shadow-md max-w-md w-full space-y-6"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-semibold text-center text-gray-800">
          Register
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
          Register
        </button>

        <div className="text-center text-gray-500 my-4">or</div>
      </form>
      <SocialLogin />
    </>
  );
};

export default RegistrationForm;
