'use client'
import Link from "next/link";
import RegistrationForm from "../components/RegistrationForm";

function RegistrationPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <RegistrationForm />

        <p className="mt-4 text-gray-600">Already have an account?</p>

        <Link
          href="/"
          className="text-blue-500 hover:text-blue-600 font-medium mt-2 inline-block"
        >
          Login
        </Link>
      </div>
    </div>
  );
}

export default RegistrationPage;
