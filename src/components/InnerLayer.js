import React from 'react';
import Styled from 'styled-components';

const Div = Styled.div`
    padding: 15px 75px 0 0;
    text-align:center;
    `;

const InnerLayer = ({ item }) => {
    return (
        <Div
            key={new Date()}
            className={item.class_name}
            style={{ height: 70 * item.volume }}>
            {item.name}
        </Div>
    );
}

export default InnerLayer;