import PopulerMenu from "../../Shared/PopulerMenu/PopulerMenu";
import AboutBistro from "./AboutBistro";
import Banner from "./Banner";
import CallUs from "./CallUs/CallUs";
import Category from "./Category";


const Home = () => {
    return (
        <div>
            <Banner />

            <Category />

            <AboutBistro />

            <PopulerMenu />

            <CallUs />
        </div>
    );
};

export default Home;