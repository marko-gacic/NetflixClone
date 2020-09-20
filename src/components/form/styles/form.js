import styled from 'styled-components/macro'
import { Link as ReactRouterLink } from 'react-router-dom'


export const Container = styled.div`
display: block;
flex-direction: column;
min-height: 660px;
background-color: rgba(0,0,0,0.75);
border-radius: 4px;
padding: 60px 68px 40px;
box-sizing: border-box;
margin: auto;
width: 100%;
max-width: 450px;
margin-bottom: 90px;
`;

export const Base = styled.form`
display: flex;
flex-direction: column;
max-width: 100%;
padding-bottom: 24px;
position: relative;
margin: 0;
min-height: 515px
padding: 20px 0 30px;
font-size: 16px;
direction: 1tr;

`;

export const Title = styled.h1`
color: #fff;
font-size: 32px;
font-weight: 700;
margin-bottom: 28px;
margin: 0 0 10px 0;
padding: 0;
display: block;
`;

export const Error = styled.div`
background: #e87c03;
border-radius: 4px;
font-size 14px;
margin: 0 0 16px;
color: white;
padding: 15px 20px;
`;

export const Text = styled.p`
color: #737373;
font-size: 16px;
font-weight: 500;
margin-bottom: 28px;
margin: 
`;

export const TextSmall = styled.p`
margin-top: 10px;
font-size: 13px;
line-height: normal;
color: #8c8c8c;
`;

export const Link = styled(ReactRouterLink)`
color: white;
text-decoration: none;

&:hover {
    text-decoration: underline;
}
`;

export const Input = styled.input`

background: #333;
border-radius: 4px;
border: 0;
color: white;
height: 40px;
line-height: 50px;
padding: 5px 30px;
margin-bottom: 20px;

&:last-of-type {
    margin-bottom: 30px;
}
`;

export const Submit = styled.button`
background: #e50914;
border-radius: 4px;
font-size: 15px;
font-weight: bold;
margin: 24px 0 12px;
padding: 16px;
border: 0;
color: white;
cursor: pointer;

&:disabled {
    opacity: 0.5;
}
`;
