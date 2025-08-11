import React from 'react';
import SectionTitle from '../../../components/SectionTitle';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

// TODO: add publushable key
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GETWAY_PK)

const Payment = () => {



    return (
        <div className='p-12'>
            <SectionTitle heading="Payment" subHeading="Please pay to eat"></SectionTitle>

            {/* kaj suru payment er */}
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            </div>


        </div>
    );
};

export default Payment;