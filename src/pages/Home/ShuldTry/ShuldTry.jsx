import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle';
import ShuoldTryCard from './ShuoldTryCard';

const ShuldTry = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const filterByData = data.filter((item) => item.category === 'popular')
                setItems(filterByData)
            })
    }, [])

    return (
        <div className="my-10">
            <SectionTitle subHeading={"Should Try"} heading={'CHEF RECOMMENDS'} />
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
                {
                    items.slice(0, 2).map(item => <ShuoldTryCard key={item._id} item={item} />)
                }
            </div>
        </div>
    );
};

export default ShuldTry;
