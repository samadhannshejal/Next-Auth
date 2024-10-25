import React from "react";
import { doLogOut } from "../actions";

const Logout = () => {
  return (
    <form action={doLogOut} className="flex justify-center mt-4">
      <button
        type="submit"
        className="px-6 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 focus:ring-4 focus:ring-red-300"
      >
        Log Out
      </button>
    </form>
  );
};

export default Logout;
