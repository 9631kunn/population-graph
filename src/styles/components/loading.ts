import styled from 'styled-components'

export const Wrap = styled.div`
  align-items: center;
  background: rgba(255, 255, 255, 0.4);
  color: #555;
  display: flex;
  font-size: 20px;
  justify-content: center;
  height: 100vh;
  position: absolute;
  width: 100vw;
  z-index: 99999;

  &::before {
    animation: loadingRotate 0.5s infinite;
    border: 2px solid #555;
    border-right-color: transparent;
    border-radius: 100%;
    content: '';
    height: 20px;
    mnargin-right: 10px;
    width: 20px;
  }

  @keyframes loadingRotate {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  &.hidden {
    opacity: 0;
    visibility: hidden;
  }
  &.shown {
    opacity: 1;
    visibility: visible;
  }
`
