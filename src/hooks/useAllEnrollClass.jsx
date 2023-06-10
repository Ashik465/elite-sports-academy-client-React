import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const useAllEnrollClass = () => {
  const { user, loader } = useContext(AuthContext);
  const token = localStorage.getItem("access token");

  const { refetch, data: allEnrollClass = [] } = useQuery({
    queryKey: ["classes", user?.email],
    enabled: !loader,
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/enrollClass/all?email=${user?.email}`,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      return res.json();
    },
  });
  return [allEnrollClass, refetch];
};

export default useAllEnrollClass;
