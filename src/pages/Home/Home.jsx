import PopulerMenu from "../../Shared/PopulerMenu/PopulerMenu";
import AboutBistro from "./AboutBistro";
import Banner from "./Banner";
import Category from "./Category";


const Home = () => {
    return (
        <div>
            <Banner />

            <Category />

            <AboutBistro />

            <PopulerMenu />
        </div>
    );
};

export default Home;