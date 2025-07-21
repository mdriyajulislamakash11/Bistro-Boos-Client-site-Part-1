import { useState } from "react";
import Cover from "../../Shared/cover/Cover";

import orderCover from "../../assets/shop/banner2.jpg";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div>
      <Cover
        img={orderCover}
        title="Order Food"
        description="Authoritatively predominate client-centric products without adaptive ROI. Enthusiastically pursue user friendly alignments via excellent value. Quickly facilitate."
      ></Cover>


      {/* Tabs */}

      <div className="flex justify-center mt-16 mb-8">
        <div>
          <Tabs
            defaultIndex={tabIndex}
            onSelect={(index) => setTabIndex(index)}
          >
            <TabList>
              <Tab>Salad</Tab>
              <Tab>Pizza</Tab>
              <Tab>Soups</Tab>
              <Tab>Desserts</Tab>
              <Tab>Drinks</Tab>
            </TabList>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Order;
