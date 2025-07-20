import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/cover/Cover';
import imgCover from'../../assets/menu/banner3.jpg'


const Menu = () => {


    return (
        <div>
            <Helmet>
                <title>Bistro Boos | Our Menu</title>
            </Helmet>

            <Cover img={imgCover} title={"Our Menu"} description={"Would you like to try a dish?"} />

            
        </div>
    );
};

export default Menu;