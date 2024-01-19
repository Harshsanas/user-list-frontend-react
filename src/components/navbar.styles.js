import styled from "styled-components";
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px; 
  background-color: #333;
  color: white; 
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1); 

  .navbarTitle{
    font-size: 20px;
    font-weight: bold;
  }
  
  .githubIcon{
    font-size: 24px;
    cursor: pointer; 
    transition: color 0.3s ease; 

    &:hover {
        color: #4caf50;
    }
  }
`