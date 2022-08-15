import { loadStripe } from '@stripe/stripe-js';

let stripePromise;

const getStripe = () => {
  if(!stripePromise) {
    // stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

    stripePromise = loadStripe("pk_test_51LWogMCNfai4sPRCPh49mmKJ81WQk6XDyt8sNlMrGsKF2RYH53SKIL99hlUemuWZn7JLSZfHDHDg4sJETaEqxfgp00uDIbr7fD");

  }

  return stripePromise;
}

export default getStripe;