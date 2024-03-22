// Write your code here
import React, {useState} from 'react'
import {
  MainContainer,
  StyledUnLockImage,
  StyledLockImage,
  StyledButton,
  StyledParagraph,
} from './styledComponents'

const Unlock = () => {
  const [isLocked, setIsLocked] = useState(true)

  const onClickToggle = () => {
    setIsLocked(!isLocked)
  }

  return (
    <MainContainer>
      {isLocked ? (
        <>
          <StyledLockImage
            src="https://assets.ccbp.in/frontend/hooks/lock-img.png"
            alt="lock"
          />
          <StyledParagraph>Your Device is Locked</StyledParagraph>
          <StyledButton onClick={onClickToggle}>Unlock</StyledButton>
        </>
      ) : (
        <>
          <StyledUnLockImage
            src="https://assets.ccbp.in/frontend/hooks/unlock-img.png"
            alt="unlock"
          />
          <StyledParagraph>Your Device is Unlocked</StyledParagraph>
          <StyledButton onClick={onClickToggle}>Lock</StyledButton>
        </>
      )}
    </MainContainer>
  )
}

export default Unlock
