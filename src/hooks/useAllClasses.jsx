import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const useClasses = () => {
  const { user, loader } = useContext(AuthContext);
  const token = localStorage.getItem("access token");

  const { refetch, data: AllClasses = [] } = useQuery({
    queryKey: ["classes"],
    enabled: !loader,
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/classes/all?email=${user?.email}`,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      return res.json();
    },
  });
  return [AllClasses, refetch];
};

export default useClasses;
