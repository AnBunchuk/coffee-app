import React from 'react';
import Styled from 'styled-components';
import Img from '../images/pic.png';
import Inner from './Inner';
import {BtnModal} from './BtnModal';


const CupWrap = Styled.div`
    background-color: #eaeaea;
	position:relative;
	z-index:-10;
	height:611px;`;

const CupFront = Styled.div`
    position:absolute;	
	background-image: url(${Img});
	left:0;
	top:0;
	right:0;
	bottom:0;
`;

const Cup = ({ currentRecept, statusWindow, setStatusWindow }) => {


	return (
	<>
		<CupWrap>
			<Inner currentRecept={currentRecept} 
			key={new Date()}/>
			<CupFront />
		</CupWrap>
		<BtnModal 
		statusWindow = {statusWindow}
		currentRecept={currentRecept} 
		setStatusWindow= {setStatusWindow} >
		</BtnModal>
	</>
	);
}

export default Cup;