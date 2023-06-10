import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useLocation } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(`${import.meta.env. VITE_PAYMENT_GATEWAY_PK}`);
const Payment = () => {
    const location = useLocation();

    const classData = location?.state
    console.log(classData);
    return (
        <>
        <div className="w-full p-10">
<Elements stripe={stripePromise}>
      <CheckoutForm classData ={classData} />
    </Elements>

        </div>
    
        </>
    );
};

export default Payment;