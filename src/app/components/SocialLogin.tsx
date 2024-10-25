import React from "react";
import { doSocialLogin } from "../actions";

const SocialLogin = () => {
  return (
      <form
        className="bg-white  rounded-lg shadow-md max-w-md w-full"
        action={doSocialLogin}
      >
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          Sign in with
        </h2>
        <div className="flex flex-col gap-4">
          <button
            type="submit"
            name="action"
            value="Google"
            className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 focus:ring-4 focus:ring-red-300"
          >
            Google
          </button>
          <button
            type="submit"
            name="action"
            value="Github"
            className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-gray-800 text-white font-medium rounded-lg hover:bg-gray-900 focus:ring-4 focus:ring-gray-500"
          >
            Github
          </button>
        </div>
      </form>
  );
};

export default SocialLogin;
