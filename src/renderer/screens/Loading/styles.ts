import styled, { keyframes } from "styled-components";

import nIcon from "../../../assets/n.svg";
import uIcon from "../../../assets/u.svg";

export const Container = styled.div`
  display: flex;

  flex-direction: column;

  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: calc(100vh - 30px);
`;

const floatUp = keyframes`
  0% {
		transform: translatey(0px);
	}
  25%{
    transform: translatey(-10px);
  }
	50% {
		transform: translatey(0px);
	}
  75% {
    transform: translatey(10px);
  }
	100% {
		transform: translatey(0px);
	}
`;

const floatDown = keyframes`
  0% {
		transform: translatey(0px);
	}
  25%{
    transform: translatey(10px);
  }
	50% {
		transform: translatey(0px);
	}
  75% {
    transform: translatey(-10px);
  }
	100% {
		transform: translatey(0px);
	}
`;

export const NIcon = styled.img.attrs({
  src: nIcon,
})`
  width: 68.99px;
  height: 77.61px;

  animation-name: ${floatUp};
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-out;
`;

export const UIcon = styled.img.attrs({
  src: uIcon,
})`
  width: 68.99px;
  height: 77.61px;

  animation-name: ${floatDown};
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-out;
`;

export const NU = styled.div`
  display: flex;

  gap: 5px;
`;
