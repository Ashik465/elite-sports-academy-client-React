import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const usePaymentHistory = () => {
  const { user, loader } = useContext(AuthContext);
  const token = localStorage.getItem("access token");

  const { refetch, data: paymentHistory = [] } = useQuery({
    queryKey: ["paymentHistory", user?.email],
    enabled: !loader,
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/enrollClass/paymentHistory?email=${user?.email}`,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      return res.json();
    },
  });
  return [paymentHistory, refetch];
};

export default usePaymentHistory;
