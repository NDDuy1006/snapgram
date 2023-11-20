import {
  useMutation,
} from "@tanstack/react-query";
import { createUserAccount, signinAccount, signoutAccount } from "../appwrite/api";
import { INewUser } from "@/types";

export const useCreateUserAccount = () => {
  return useMutation({
    mutationFn: (user: INewUser) => createUserAccount(user),
  })
};

export const useSigninAccount = () => {
  return useMutation({
    mutationFn: (user: {
      email: string; password: string
    }) => signinAccount(user),
  })
};

export const useSignoutAccount = () => {
  return useMutation({
    mutationFn: signoutAccount
  })
};