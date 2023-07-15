import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const useAdmin = () => {
<<<<<<< HEAD
  // this is a test comment 
=======
>>>>>>> 5957b8c44a51f1b30ab1d07b29273f7d8c760448
  const { user,loader } = useContext(AuthContext);
  const token = localStorage.getItem("access token");

  const {  data:isAdmin ,isLoading:isAdminLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],
    enabled: !loader,
    queryFn: async () => {
      const res = await fetch(
        `https://elite-sports-academy-server.vercel.app/users/isAdmin?email=${user?.email}`,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      return res.json();
    },
  });
  return [isAdmin,isAdminLoading];
};

export default useAdmin;
