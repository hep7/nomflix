import React from "react";
import {Link,withRouter} from "react-router-dom"
// import styles from "./Header.module.css";
import styled from "styled-components"

const SHeader = styled.header`
  color:white;
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:50px;
  display:flex;
  align-items:center;
  padding:0px 10px;
  background-color: rgba(20,20,20,0.8);
  z-index:10;
  box-shadow: 0px 1px 5px 2px rgba(0,0,0,0.8);
`;

const SUl = styled.ul`
  display:flex;  
`
const SLi = styled.li`
  width:80px;
  height:50px;
  text-align:center;  
  border-bottom: 3px solid 
    ${props=>(props.current? "#3498db" : "transparent")};
  
`;
const SLink = styled(Link)`
  height:50px;
  display:flex;
  align-items:center;
  justify-content:center;
`;



const header = (props) => {
  
  const {location:{pathname}} = props;
  
  return (        
    <SHeader>            
      <SUl>      
        <SLi current={pathname ==="/"}>
          <SLink to="/">Moves</SLink>        
        </SLi>
        <SLi current={pathname ==="/tv"}>
          <SLink to="/tv">TV</SLink>        
        </SLi>
        <SLi current={pathname ==="/search"}>
          <SLink to="/search">Search</SLink>
        </SLi>
      </SUl>
    </SHeader>
  );

} 

export default withRouter(header);
