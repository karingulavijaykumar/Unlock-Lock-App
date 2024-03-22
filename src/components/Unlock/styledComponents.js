// Style your elements here
// styledComponents.js
import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  height: 100vh;
  background-size: cover;
  text-align: center;
`

export const StyledParagraph = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: #ffffff;
`

export const StyledLockImage = styled.img`
  height: 200px;
  width: 200px;
`
export const StyledUnLockImage = styled.img`
  height: 200px;
  width: 200px;
`
export const StyledButton = styled.button`
  background-color: #06b6d4;
  color: #ffffff;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  width: 150px;
  padding:5px;
`
