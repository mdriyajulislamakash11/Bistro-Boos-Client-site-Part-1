import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/cover/Cover';
import PopulerMenu from '../../Shared/PopulerMenu/PopulerMenu';
import imgCover from'../../assets/menu/banner3.jpg'
import imgDessertCover from'../../assets/menu/dessert-bg.jpeg'
import imgPizzaCover from'../../assets/menu/pizza-bg.jpg'
import imgSaladsCover from'../../assets/menu/salad-bg.jpg'
import imgSoupsCover from'../../assets/menu/soup-bg.jpg'

const Menu = () => {


    return (
        <div>
            <Helmet>
                <title>Bistro Boos | Our Menu</title>
            </Helmet>


            <Cover img={imgCover} title={"Our Menu"} description={"Would you like to try a dish?"} />
            <PopulerMenu />

            <Cover img={imgDessertCover} title={"DESSERTS"} description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} />
            <PopulerMenu />

            <Cover img={imgPizzaCover} title={"PIZZA"} description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} />
            <PopulerMenu />

            <Cover img={imgSaladsCover} title={"SALADS"} description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} />
            <PopulerMenu />

            <Cover img={imgSoupsCover} title={"SOUPS"} description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} />
            <PopulerMenu />
            
        </div>
    );
};

export default Menu;