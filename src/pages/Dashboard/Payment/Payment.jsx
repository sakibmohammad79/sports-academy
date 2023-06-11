
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import CheckOutFrom from './CheckOutFrom';
import useClass from '../../../hook/useClass';


const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATWAY_PK);
const Payment = () => {
        const [classes] = useClass();
        return (
            <div className="w-full">
                <SectionTitle heading={'Please Process'} subHeading={'Payment'}></SectionTitle>
                <Elements stripe={stripePromise}>
                    <CheckOutFrom classes={classes}></CheckOutFrom>
                </Elements>
            </div>
        );
    };

export default Payment;