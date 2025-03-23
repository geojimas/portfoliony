import React from 'react'
import styled from 'styled-components'

export const Card = ({ children }) => {
  return (<StyledWrapper>
    <div className="card">
      <div className="content">
        <div className="back">
          <div className="back-content">
            {children}
          </div>
        </div>
      </div>
    </div>
  </StyledWrapper>)
}

const StyledWrapper = styled.div`
    .card {
        overflow: visible;
        width: 330px;
        height: 300px;
    }

    .content {
        width: 100%;
        height: 100%;
        transform-style: preserve-3d;
        transition: transform 300ms;
        box-shadow: 0 0 10px 1px #000000ee;
        border-radius: 5px;
    }

    .back {
        background-color: #151515;
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        -webkit-backface-visibility: hidden;
        border-radius: 5px;
        overflow: hidden;
    }

    .back {
        width: 100%;
        height: 100%;
        justify-content: center;
        display: flex;
        align-items: center;
        overflow: hidden;
    }

    .back::before {
        position: absolute;
        content: ' ';
        display: block;
        width: 160px;
        height: 160%;
        background: linear-gradient(90deg, transparent, #FACD15, #eff0e6, #eff0e6, #FACD15, transparent);
        animation: rotation_481 6000ms infinite linear;
    }

    .back-content {
        position: absolute;
        width: 99%;
        height: 99%;
        background-color: #111827;
        border-radius: 5px;
        color: #eff0e6;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 30px;
    }

    @keyframes rotation_481 {
        0% {
            transform: rotateZ(0deg);
        }

        0% {
            transform: rotateZ(360deg);
        }
    }

    @keyframes floating {
        0% {
            transform: translateY(0px);
        }

        50% {
            transform: translateY(10px);
        }

        100% {
            transform: translateY(0px);
        }
    }`
