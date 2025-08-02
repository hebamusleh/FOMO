import { QUERIES } from "@/enum";
import { ILoginBody } from "@/models";
// import { loginAPI } from "@/services";
import { useMutation, useQueryClient } from "@tanstack/react-query";

// TODO: Implement the AUTH API'S & PROTECT ROUTES

// export const useLogin = () => {
//   const queryClient = useQueryClient();

//   return useMutation({
//     mutationFn: (body: ILoginBody) => loginAPI(body),
//     onSuccess: (data) => {
//       queryClient.setQueryData([QUERIES.USERS], data);
//     },
//     onError: (error) => {
//       console.error("Login failed:", error);
//     },
//   });
// };

export const useLogout = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => {
      // Assuming there's a logout API endpoint
      return Promise.resolve();
    },
    onSuccess: () => {
      queryClient.removeQueries({ queryKey: [QUERIES.USERS] });
    },
    onError: (error) => {
      console.error("Logout failed:", error);
    },
  });
};

export const useGetCurrentUser = () => {
  return useQueryClient().getQueryData([QUERIES.USERS]);
};

// export const useIsAuthenticated = () => {
//   const user = useGetCurrentUser();
//   return !!user;
// };
// export const useSignUp = () => {
//   const queryClient = useQueryClient();

//   return useMutation({
//     mutationFn: (body: ILoginBody) => loginAPI(body),
//     onSuccess: (data) => {
//       queryClient.setQueryData([QUERIES.USERS], data);
//     },
//     onError: (error) => {
//       console.error("Sign-up failed:", error);
//     },
//   });
// };
