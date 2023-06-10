import { useLocation } from "react-router-dom";


const Payment = () => {
    const location = useLocation();

    const classData = location?.state
    console.log(classData);
    return (
        <>
           this is payment page 
        </>
    );
};

export default Payment;