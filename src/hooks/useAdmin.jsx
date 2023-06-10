import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const useAdmin = () => {
  const { user,loader } = useContext(AuthContext);
  const token = localStorage.getItem("access token");

  const {  data:isAdmin ,isLoading:isAdminLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],
    enabled: !loader,
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/users/isAdmin?email=${user?.email}`,
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
