import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const useStudent = () => {
  const { user,loader } = useContext(AuthContext);
  const token = localStorage.getItem("access token");

  const {  data:isStudent ,isLoading:isStudentLoading } = useQuery({
    queryKey: ["isStudent", user?.email],
    enabled: !loader,
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/users/isStudent?email=${user?.email}`,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      return res.json();
    },
  });
  return [isStudent,isStudentLoading];
};

export default useStudent;
