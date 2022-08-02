import React from "react"
// import Modal from './Modal'


// import Styled from "styled-components"

// export const TextModalStyle = Styled.div`{
// width: 200px;
// height:200px;
// position:absolute;	

// bottom:0;

// }`


export const BtnModal = ({ currentRecept, statusWindow, setStatusWindow }) => {
    let text = currentRecept?.textRecipe
    return (<div
        className='btn'
        onClick={() => {
            if (statusWindow === 0 || statusWindow === undefined || statusWindow === null) {
                setStatusWindow(text);
            }
            else {
                setStatusWindow(null);
            }
        }}

    > Подробицi </div >
    )
}

