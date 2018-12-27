import React from 'react';
import CustomerRow from './CustomerRow';
import { scroller, Element } from 'react-scroll';

const Customers = ({data}) => {
    const scrollType = {
        duration: 500,
        delay: 50,
        smooth: true, // linear "easeInQuint" "easeOutCubic" https://easings.net/es
        offset: -10,
    };

    const onClick = id => {
        scroller.scrollTo((id + 1).toString(), scrollType);
    }
    return (
        <div>
            {
                data.map(d => 
                    <Element key={d.id} name={d.id.toString()}>
                        <CustomerRow {...d} onClick={() => onClick(d.id)}></CustomerRow>
                    </Element>
                )
            }
        </div>
    );
};

export default Customers;