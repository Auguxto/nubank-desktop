import styled from "styled-components";

import titleBarIcon from "../../../assets/titlebar-icon.svg";

export const Container = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 30px;

  background-color: rgba(0, 0, 0, 0.3);

  -webkit-user-select: none;
  user-select: none;
  -webkit-app-region: drag;
`;

export const Logo = styled.img.attrs({
  src: titleBarIcon,
})`
  width: 60px;

  margin-left: 10px;
`;

export const Buttons = styled.div`
  display: flex;

  align-items: center;

  -webkit-app-region: no-drag;
`;

export const Button = styled.button`
  display: flex;

  align-items: center;
  justify-content: center;

  width: 30px;
  height: 30px;

  background-color: transparent;
  border: none;

  cursor: pointer;

  :hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

export const MinimizeIcon = styled.div`
  width: 18px;
  height: 2px;

  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
`;
