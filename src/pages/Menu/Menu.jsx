import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/cover/Cover';
import imgCover from'../../assets/menu/banner3.jpg'
import imgDessert from'../../assets/menu/dessert-bg.jpeg'
import imgPizza from'../../assets/menu/pizza-bg.jpg'
import imgSalad from'../../assets/menu/salad-bg.jpg'
import imgSoup from'../../assets/menu/soup-bg.jpg'
import useMenu from '../../hook/useMenu';
import SectionTitle from '../../components/SectionTitle';
import MenuCategory from './MenuCategory';


const Menu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');
    const desserts = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');
    const offered = menu.filter(item => item.category === 'offered');

    return (
        <div>
            <Helmet>
                <title>Bistro Boos | Our Menu</title>
            </Helmet>

            <Cover img={imgCover} title={"Our Menu"} description={"Would you like to try a dish?"} />

            <SectionTitle subHeading="Don't miss" heading="TODAY'S OFFER"  />

            {/* offered menu items */}
            <MenuCategory items={offered} />

            {/* desserts menu items */}
            <MenuCategory items={desserts} title="DESSERT" coverImg={imgDessert} />

            {/* Pizza menu items */}
            <MenuCategory items={pizza} title="PIZZA" coverImg={imgPizza} />

            {/* Pizza menu items */}
            <MenuCategory items={salad} title="SALADS" coverImg={imgSalad} />


            
        </div>
    );
};

export default Menu;