import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import './CheckoutForm.css'
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from "sweetalert2";
const token = localStorage.getItem("access token");
const CheckoutForm = ({classData}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('')
   const {user} = useContext(AuthContext)
   const [clientSecret, setClientSecret] = useState('')


  console.log(classData);

   //   get clientSecret from backend
   useEffect(() => {
    if (classData?.price) {
        fetch('https://elite-sports-academy-server.vercel.app/create-payment-intent', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(classData)
        })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret));
    }
  }, [ classData])


 console.log(clientSecret); 
    const handleSubmit = async (event) => {
      // Block native form submission.
      event.preventDefault();
  
      if (!stripe || !elements) {
        // Stripe.js has not loaded yet. Make sure to disable
        // form submission until Stripe.js has loaded.
        return;
      }
  
      // Get a reference to a mounted CardElement. Elements knows how
      // to find your CardElement because there can only ever be one of
      // each type of element.
      const card = elements.getElement(CardElement);
  
      if (card == null) {
        return;
      }
  
      // Use your card Element with other Stripe.js APIs
      const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });
  
      if (error) {
        setCardError(error.message)
        console.log('[error]', error);
      } else {
        setCardError('')
        console.log('[PaymentMethod]', paymentMethod);
      }

       // confirm payment
       
       const { paymentIntent, error: confirmError } =
       await stripe.confirmCardPayment(clientSecret, {
         payment_method: {
           card: card,
           billing_details: {
             email: user?.email || 'unknown',
             name: user?.displayName || 'anonymous',
           },
         },
       })

       if (confirmError) {
        console.log(confirmError)
        setCardError(confirmError.message)
      } else {
        console.log(paymentIntent)
        setCardError('')
        if(paymentIntent.status === 'succeeded'){
        
  
        const paymentInfo = {
            ...classData,
            transactionId: paymentIntent.id,
            date: new Date(),
            email: user?.email,
            name: user?.displayName,
          }


          fetch("https://elite-sports-academy-server.vercel.app/paymentInfo", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify(paymentInfo),
          })
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
              if (data.enrollInsertResult.insertedId) {
               
                Swal.fire({
                    icon: 'success',
                    title: 'Payment Successful',
                    showConfirmButton: false,
                    timer: 1500
                  })


              }
            })
            .catch((error) => {
              console.error("Error:", error);
            });




       //end
        }
      }



    };
  
    return (

        <> <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className="btn  border-[#AC9C63] border-2  bg-black text-white hover:bg-[#AC9C63]  " type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
      {cardError && <p className='text-red-600 ml-8'>{cardError}</p>}
      </>
     
    );
  };

export default CheckoutForm;