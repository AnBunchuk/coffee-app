import React from 'react';
import Styled from 'styled-components';
import InnerLayer from './InnerLayer';


const InnerWrap = Styled.div`
    height: 72%;
    display:flex;
    flex-direction:column-reverse;
`;


const Inner = ({ currentRecept }) => {
    let res = currentRecept?.recipe;


    if (!res) { return null };
    return (
        <InnerWrap>
            {res.map((item) => {
                return <InnerLayer
                    key={item.id}
                    item={item}
                    wrap={InnerWrap}
                />
            })

            }
        </InnerWrap>
    );
}

export default Inner;