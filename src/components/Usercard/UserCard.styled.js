import { Link } from 'react-router-dom';
import styled from 'styled-components'

  export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
      max-width: calc(380px * 3 + 30px * 2); 
padding-bottom: 20px;
  margin-top: 80px;
  min-height: calc(100vh - 100px);
  `;

export const Header = styled.div`
height: 80px;
text-align: center;
  position: fixed;
  top: 0;
  z-index: 100;
   background-color: #46ABD9;
   width: 100vw;
   display: flex;
   align-items: center;
   justify-content: center;
   border-bottom: 1px dashed #6216A0;
`
export const TextSelect = styled.p`
font-size: 22px;
color: #3D890D;
font-weight: 500;
margin-right: 20px;
`

export const StyledLink = styled(Link)`
  color: green;
  text-decoration: none;
  font-size: 24px;
  margin-left: 50px;
  &:hover{
    scale: 1.3;
    color: blue;
}
`;

export const UserCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  width: 100%;
  max-width: calc(380px * 3 + 20px * 2); 
  margin-left: auto;
  margin-right: auto;
padding-bottom: 20px;
margin-top: 20px;
`;

export const UserBox = styled.div`
position: relative;
width: 380px;
height: 460px;
background: linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
border-radius: 20px;

`

export const Logo = styled.div`
width: 76px;
height: 22px;
opacity: 0.3;
position: absolute;
top: 20px;
left: 20px;
`

export const Picture = styled.div`
width: 308px;
height: 168px;
position: absolute;
top: 28px;
left: 36px;
`
export const Img = styled.img`
`

export const Line = styled.div`
width: 380px;
height: 8px;
background: #EBD8FF;
box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), 
inset 0px -1.71846px 3.43693px #AE7BE3, inset 0px 3.43693px 2.5777px #FBF8FF;
position: absolute;
top: 214px;
`
export const AvatarBox = styled.div`
position: absolute;
width: 80px;
height: 80px;
left: 150px;
top: 178px;
border-radius: 85.9232px;
background: #EBD8FF;
box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06), 
inset 0px -2.19582px 4.39163px #AE7BE3, inset 0px 4.39163px 3.29372px #FBF8FF;
display: flex;
align-items: center;
justify-content: center;
`
export const Tweets = styled.p`
margin: 0;
position: absolute;
width: 380px;
height: 24px;
top: 284px;
text-align: center;
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 24px;
text-transform: uppercase;
color: #EBD8FF;
`
export const Followers = styled.p`
margin: 0;
position: absolute;
width: 380px;
height: 24px;
top: 324px;
text-align: center;
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 24px;
text-transform: uppercase;
color: #EBD8FF;
`
export const ButtonFollow = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 14px 28px;
gap: 6px;
position: absolute;
width: 196px;
height: 50px;
left: 92px;
top: 374px;
background: ${props => props.following  ? '#5CD3A8' : '#EBD8FF'};
box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
border-radius: 10px;
cursor: pointer;
&:hover {
  scale: 1.1;
  opacity: 0.8;
}
`
export const TextButton = styled.p`
height: 22px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 22px;
text-transform: uppercase;
color: #373737;
flex: none;
order: 0;
flex-grow: 0;
`
export const ButtonContainer = styled.div`
display: flex;
justify-content: center;
margin-top: 10px;
gap: 20px;
`

export const ButtonScrollTop = styled.button`
height: 30px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 10px;
box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 22px;
text-transform: uppercase;
color: #373737;
cursor: pointer;
&:hover{
    background-color: aquamarine;
        scale: 1.1;

}
`

export const ButtonLoadMore = styled.button`
height: 30px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 10px;
box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 22px;
text-transform: uppercase;
color: #373737;
cursor: pointer;
&:hover{
    background-color: aquamarine;
    scale: 1.1;
}
`
