import config from './config';
import stipeNode from 'stripe';

let stripeSecretKey;

if (process.env.NODE_ENV === 'production') {
  stripeSecretKey = config.stripe.live.secretKey;
} else {
  stripeSecretKey = config.stripe.test.secretKey;
}

const stripe = stipeNode(stripeSecretKey);

export default stripe;
