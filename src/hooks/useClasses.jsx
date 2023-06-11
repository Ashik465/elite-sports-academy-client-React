import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const useClasses = () => {
  const { user,loader } = useContext(AuthContext);
  const token = localStorage.getItem("access token");

  const { refetch, data: classes = [] } = useQuery({
    queryKey: ["classes", user?.email],
    enabled: !loader,
    queryFn: async () => {
      const res = await fetch(
        `https://elite-sports-academy-server.vercel.app/classes?email=${user?.email}`,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      return res.json();
    },
  });
  return [classes, refetch];
};

export default useClasses;
