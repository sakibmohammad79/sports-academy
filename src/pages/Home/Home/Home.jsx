import Banner from "../Banner/Banner";
import ClientSay from "../ClientSay/ClientSay";
import PopulerClass from "../PopulerClass/PopulerClass";

import PopulerInstructor from "../PopulerInstructor/PopulerInstructor";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopulerClass></PopulerClass>
            <PopulerInstructor></PopulerInstructor>
            <ClientSay></ClientSay>
        </div>
    );
};

export default Home;