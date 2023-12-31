import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const useAllSelectedClass = () => {
  const { user, loader } = useContext(AuthContext);
  const token = localStorage.getItem("access token");

  const { refetch, data: selectedClasses = [] } = useQuery({
    queryKey: ["selectedclass", user?.email],
    enabled: !loader,
    queryFn: async () => {
      const res = await fetch(
        `https://elite-sports-academy-server.vercel.app/selectedClass/all?email=${user?.email}`,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      return res.json();
    },
  });
  return [selectedClasses, refetch];
};

export default useAllSelectedClass;
