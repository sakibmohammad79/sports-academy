import Banner from "../Banner/Banner";
import ClientSay from "../ClientSay/ClientSay";
import PopulerClass from "../PopulerClass/PopulerClass";
import PopulerInstructor from "../PopulerInstructor/PopulerInstructor";
import UpcomingMatch from "../UpcomingMatch/UpcomingMatch";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopulerClass></PopulerClass>
            <PopulerInstructor></PopulerInstructor>
            <UpcomingMatch></UpcomingMatch>
            <ClientSay></ClientSay>
        </div>
    );
};

export default Home;