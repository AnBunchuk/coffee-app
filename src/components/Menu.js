import React from 'react';
import DBRecepts from './DBRecepts';
import MenuItem from './MenuItem';


const Menu = ({ selectCurrentRecept, setStatusWindow, statusWindow }) => {

    return (
        <div>
            <MenuItem 
                recepts = {DBRecepts}
                selectCurrentRecept = {selectCurrentRecept}
                setStatusWindow={setStatusWindow}
                statusWindow = {statusWindow}
                />                
		</div>
    );
}

export default Menu;

