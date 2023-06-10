import { Helmet } from "react-helmet-async";
import usePaymentHistory from "../../../hooks/usePaymentHistory";


const PaymentHistory = () => {
    const [paymentHistory] = usePaymentHistory();


    const formatDate = (dateString) => {
        const date = new Date(dateString);
    
        return new Intl.DateTimeFormat("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
        }).format(date);
      };

    return (
        <>
                          <Helmet>
        <title>EliteSports Academy | Payment History</title>
      </Helmet>
       {/* // table start  */}

       <div className="overflow-x-auto p-10 w-full">
        <table className="table w-full ">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Class image </th>
              <th>Class Name </th>
              <th>TransactionId</th>
              <th>Payment Date</th>
            
            </tr>
          </thead>
          <tbody>
            {/* row  */}
            {paymentHistory?.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={item?.
                          classImg
                          }
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>
                  {item?.className} 
                </td>
                <td>
                  {item?.transactionId} 
                </td>
                <td >{formatDate(item?.date)}</td>
                
                
               
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        </>
    );
};

export default PaymentHistory;