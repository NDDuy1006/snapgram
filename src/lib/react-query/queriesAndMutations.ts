import {
  useInfiniteQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { createPost, createUserAccount, signinAccount, signoutAccount } from "../appwrite/api";
import { INewPost, INewUser } from "@/types";
import { QUERY_KEYS } from "./queryKeys";

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

export const useCreatePost = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (post: INewPost) => createPost(post),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_RECENT_POSTS],
      });
    },
  });
};