import React, { useContext } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect } from 'react';
import { useState } from 'react';
import useAxiosSecure from '../../../hook/useAxiosSecure';
import { AuthContext } from '../../../providers/AuthProvider';
import { useLocation } from 'react-router-dom';




const CheckOutFrom = () => {
  const location = useLocation();
  const  item  = location.state;

  const {price, _id} = item;

    const [cardError, setCardError] = useState();
    const stripe = useStripe();
    const elements = useElements();
    const [axiosSecure] = useAxiosSecure();
    const [clientSecret, setClientSecret] = useState('');
    const {user} = useContext(AuthContext)
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    useEffect(()=> {
        if(price>0){
          axiosSecure.post("/create-payment-intent", {price})
        .then(res => {
            console.log(res.data.clientSecret)
            setClientSecret(res.data.clientSecret)
        })
        }
    },[price, axiosSecure])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(!stripe || !elements){
            return
        }
    
        const card = elements.getElement(CardElement)
        if(card === null){
            return
        }
        
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });

          if (error) {
            console.log('[error]', error);
            setCardError(error.message)
          } else {
            setCardError('');
            console.log('PaymentMethod', paymentMethod);
          }

          setProcessing(true);

          const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
          );
          if(confirmError){
            console.log(confirmError)
          }
          console.log('payment intent', paymentIntent);

          setProcessing(false);
          if(paymentIntent.status === "succeeded"){
            setTransactionId(paymentIntent.id);
            const transactionId = paymentIntent.id

            //save payment information
            const payment = {
              email: user?.email,
              transactionId: paymentIntent.id,
              price,
              //quantity: classes.length,
              date: new Date(),
              //status: 'service pending',
              //orderItemId: classes.map(item => item.classId),
              //classesItems: classes.map(item => item._id),
              itemNames: item.className,
            }
            axiosSecure.post(`/payments/${item._id}`, payment)
            .then(res => {
              console.log('payment post', res.data)
              if(res.data.result.insertedId){
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'your payment history inserted successfully',
                  showConfirmButton: false,
                  timer: 1500
                })
              }
            })
          }
    }
    return (
       <>
         <form className='w-1/2 mx-auto mt-12 ' onSubmit={handleSubmit}>
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
        <button className='btn btn-sm bg-lime-500 mt-8' type="submit" disabled={!stripe || !clientSecret || processing}>
          Pay
        </button>
      </form>
      {
        cardError && <p className='text-red-500 font-bold text-center'>{cardError}</p>
      }
      {transactionId && <p className='text-lime-500 mt-4 font-bold text-center'>Trancsaction complete with transaction Id: <span className='text-orange-500'>{transactionId}</span></p>}
       </>
    );
};

export default CheckOutFrom;