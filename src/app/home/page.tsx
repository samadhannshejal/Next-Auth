import { auth } from "@/auth";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";
import Logout from "../components/Logout";

const Home = async () => {
  const session = await auth();
  if (!session) redirect("/");

  return (
    <div className="flex flex-col items-center p-6  rounded-lg shadow-lg max-w-xs mx-auto">
      {session.user?.name && session.user.image ? (
        <>
          <Image
            src={session?.user?.image || ""}
            width={74}
            height={74}
            alt="Profile Image"
            className="rounded-full border-2 border-gray-200 shadow-md"
          />
          <div className="mt-4 text-lg font-semibold text-white-300">
            Welcome, {session?.user?.name || "Guest"}
          </div>
        </>
      ) : (
        <div className="mt-4 text-lg font-semibold text-white-300">
          Welcome, {session?.user?.name || "Guest"}
        </div>
      )}

      <Logout />
    </div>
  );
};

export default Home;
