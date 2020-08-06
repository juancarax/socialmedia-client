import styled from 'styled-components';
import { ReactComponent as Heart } from '../../heartlike.svg'
import { ReactComponent as FillHeart } from '../../heart.svg'


export const LikeContainer = styled.div`
  
`

export const FilledHeart = styled(FillHeart)`
 width: 2rem;
 height: 2rem;
 cursor: pointer;
 fill: #E53935;

`

export const NormalHeart = styled(Heart)`
 width: 2rem;
 height: 2rem;
 cursor: pointer;
 fill: #E53935;

`

export const SpanLike = styled.span`
   margin-left: 8px;
   margin-right: 4rem;
   color: #E53935;
   font-size: 15px;
`

export const RandomDiv = styled.div`
width: 2rem;
 height: 2rem;
 cursor: pointer;
 background-color: ${props => props.red ? '#E53935' : 'blue'};
`