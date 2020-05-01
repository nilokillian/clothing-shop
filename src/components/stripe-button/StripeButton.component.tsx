import React from "react";
import StripeCheckout from "react-stripe-checkout";

export interface IStripeCheckoutButtonProps {
  price: number;
}

const StripeCheckoutButton: React.FC<IStripeCheckoutButtonProps> = ({
  price,
}): JSX.Element => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_PLcxohO17EbwQdvIvSTDU6S500meGXgChi";

  const handleToken = (token: any) => {
    console.log("token", token);
    alert("Payment successfull");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      currency="NZD"
      name="Nilo Shop LTD"
      billingAddress
      shippingAddress
      description={`Yout total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={handleToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
