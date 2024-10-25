"use server";

import { signIn, signOut } from "@/auth";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function doSocialLogin(formData: any) {
  const action = formData.get("action");
  await signIn(action, { redirectTo: "/home" });
}

export async function doCredentialLogin(formData: any) {
  const { email, password } = formData;
  try {
    const response = await signIn("credentials", {
      email: email,
      password: password,
      redirect: false,
    });

    return response;
  } catch (error) {
    throw error;
  }
}
export async function doLogOut() {
  await signOut({ redirectTo: "/" });
}
