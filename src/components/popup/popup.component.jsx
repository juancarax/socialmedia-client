import React from 'react';
import { PopUpContainer, Overlay, Content, Title, CloseButton, Body } from './popup.styles'
import CustomButton from '../custom-button/custom-button.component'
import { useHistory } from 'react-router-dom'


const PopUp = ({handlePopUp, children}) => {
  const history = useHistory()
   return(
   <PopUpContainer>
      <Overlay />
      <Content>
        <CloseButton onClick={handlePopUp}>&times;</CloseButton>
        <Title>SIGN UP</Title>
        <Body>{children}</Body>
        <CustomButton NormalButton onClick={() => history.push('/register')} >SIGN UP</CustomButton>
      </Content>
        
   </PopUpContainer>
)}

export default PopUp;