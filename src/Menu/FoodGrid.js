import styled from 'styled-components'; 
import {Title} from '../Styles/Titles';

export const FoodGrid = styled.div`
 display: grid;
 grid-template-columns: 1fr 1fr ;
 gap:20px;  
` 
export const FoodLabel = styled.div`
position: absolute;
background-color: rgba(255, 255, 255, 0.6);
padding: 5px;
`
export const Food  = styled(Title)`
height: 150px;
padding: 10px;
font-size: 20px;
background-image: ${({img}) => `url(${img});` }
background-position: center;
background-size: cover;
filter: contrast(80%);
border-radius: 7px;
margin-top: 5px; 
transition-property: box-shadow margin-top filter;
transition-duration: .1s;
box-shadow:0px 0px 2px 0px grey;
&:hover {
    cursor: pointer;
    filter: contrast(100%);
    margin-top: 0px;
    margin-bottom: 5px;
   box-shadow: 0px 0px 10px 0px grey;
}
`