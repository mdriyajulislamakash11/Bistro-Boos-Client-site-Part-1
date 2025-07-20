import PopulerMenu from "../../Shared/PopulerMenu/PopulerMenu";
import AboutBistro from "./AboutBistro";
import Banner from "./Banner";
import CallUs from "./CallUs/CallUs";
import Category from "./Category";
import Featured from "./Featured/Featured";
import ShuldTry from "./ShuldTry/ShuldTry";


const Home = () => {
    return (
        <div>
            <Banner />

            <Category />

            <AboutBistro />

            <PopulerMenu />

            <CallUs />

            <ShuldTry />

            <Featured />
        </div>
    );
};

export default Home;