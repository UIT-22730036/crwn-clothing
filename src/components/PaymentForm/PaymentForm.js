import React, { useState } from "react";

import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import "./PaymentForm.scss";
import Button from "../Button/Button";
import { useSelector } from "react-redux";
const PaymentForm = () => {
  const { userInfo } = useSelector((state) => state.userReducer);
  const { cartTotal } = useSelector((state) => state.cartReducer);

  const stripe = useStripe();
  const elements = useElements();

  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const paymentHandler = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    setIsProcessingPayment(true);
    const response = await fetch("/.netlify/functions/createPaymentIntent", {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        amount: cartTotal * 100,
      }),
    }).then((res) => res.json());
    const {
      paymentIntent: { client_secret },
    } = response;

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: userInfo ? userInfo.email : "Guest",
        },
      },
    });
    setIsProcessingPayment(false);
    if (paymentResult.error) {
      alert(paymentResult.error);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Payment Successful");
      }
    }
  };
  return (
    <div className="payment-form-container">
      <form className="form-container" onSubmit={paymentHandler}>
        <h2>Credit Card Payment:</h2>
        <CardElement />
        <Button isLoading={isProcessingPayment} buttonType="inverted">
          Pay Now
        </Button>
      </form>
    </div>
  );
};

export default PaymentForm;
