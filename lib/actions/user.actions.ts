'use server';

import { ID } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../server/appwrite";
import { cookies } from "next/headers";
import { parseStringify } from "../utils";

export const signIn = async () => {
  try {
    // Mutation / Database / Make fetch
  } catch (error) {
    console.error('Error ', error)
  }
}

export const signUp = async (userData: SignUpParams) => {
  const { email, password, firstName, lastName } = userData;

  try {
    const { account } = await createAdminClient();

    const newUserAccount = await account.create(
      ID.unique(),
      email,
      password,
      `${firstName} ${lastName}`
    );
    const session = await account.createEmailPasswordSession(email, password);

    cookies().set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });

    return parseStringify(newUserAccount);
  } catch (error) {
    console.error('Error ', error)
  }
}

export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient();

    // correction for null user on sign-up. currently working without this inclusion
    // const user = await account.get();
    // return parseStringify(user);

    return await account.get();
  } catch (error) {
    return null;
  }
}
