import { useState } from "react";
import { useParams } from "react-router-dom";
import Cover from "../../Shared/cover/Cover";
import orderCover from "../../assets/shop/banner2.jpg";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../hook/useMenu";
import OrderCard from "./OrderCard";

const Order = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();

  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);

  const [menu] = useMenu();
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const desserts = menu.filter((item) => item.category === "dessert");
  const drinks = menu.filter((item) => item.category === "drinks"); 

  return (
    <div>
      <Cover
        img={orderCover}
        title="Order Food"
        description="Authoritatively predominate client-centric products without adaptive ROI. Enthusiastically pursue user friendly alignments via excellent value. Quickly facilitate."
      />

      <div className="flex justify-center mt-16 mb-8">
        <div>
          <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
            <TabList>
              <Tab>Salad</Tab>
              <Tab>Pizza</Tab>
              <Tab>Soups</Tab>
              <Tab>Desserts</Tab>
              <Tab>Drinks</Tab>
            </TabList>

            <TabPanel>
              <OrderCard items={salad} />
            </TabPanel>
            <TabPanel>
              <OrderCard items={pizza} />
            </TabPanel>
            <TabPanel>
              <OrderCard items={soup} />
            </TabPanel>
            <TabPanel>
              <OrderCard items={desserts} />
            </TabPanel>
            <TabPanel>
              <OrderCard items={drinks} /> {/* ✅ fixed drinks */}
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Order;
