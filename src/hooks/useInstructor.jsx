import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const useInstructor = () => {
  const { user,loader } = useContext(AuthContext);
  const token = localStorage.getItem("access token");

  const {  data:isInstructor ,isLoading:isInstructorLoading } = useQuery({
    queryKey: ["isInstructor", user?.email],
    enabled: !loader,
    queryFn: async () => {
      const res = await fetch(
        `https://elite-sports-academy-server.vercel.app/users/isInstructor?email=${user?.email}`,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      return res.json();
    },
  });
  return [isInstructor,isInstructorLoading];
};

export default useInstructor;
