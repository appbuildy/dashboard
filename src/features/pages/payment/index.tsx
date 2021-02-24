import React, { useEffect } from 'react';

const Payment = () => {
  useEffect(() => {
    // @ts-ignore
    window.Paddle.Setup({ vendor: 123399 });
    // @ts-ignore
    window.Paddle.Checkout.open({ product: 644734 });
  }, []);

  return <></>;
};

export default Payment;
