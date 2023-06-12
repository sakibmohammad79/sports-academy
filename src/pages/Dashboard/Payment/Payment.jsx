
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import CheckOutFrom from './CheckOutFrom';
import useClass from '../../../hook/useClass';
import { useLocation} from "react-router-dom";


const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATWAY_PK);
const Payment = () => {
    const location = useLocation();
    const price = location.state;
    //console.log(price);
        const [classes] = useClass();
        return (
            <div className="w-full">
                <SectionTitle heading={'Please Process'} subHeading={'Payment'}></SectionTitle>
                <Elements stripe={stripePromise}>
                    <CheckOutFrom price={price} classes={classes}></CheckOutFrom>
                </Elements>
            </div>
        );
    };

export default Payment;