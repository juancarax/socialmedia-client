import styled, { css } from 'styled-components';
import { ReactComponent as Close } from '../../close.svg'

const PopUpStyles = css`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0, 0.7);
  z-index: 1;
  
`

export const PopUpContainer = styled.div`
 ${PopUpStyles};
 
`

export const Overlay = styled.div`
 ${PopUpStyles};
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  width: 450px;
  height: 200px;
  z-index: 2;
  text-aling: center;
  padding: 20px;
`

export const Title = styled.h1`
`

export const Body = styled.p`
color: #707070;
font-size: 15px;

`
export const CloseButton = styled(Close)`
 align-self: flex-end;
 cursor: pointer;
 fill:  #E53935;
 height: 2rem;
 width: 2rem;
`