import styled from "styled-components";

import avatarImg from "../../../assets/avatar.png";

export const Container = styled.div`
  display: flex;

  padding: 25px;

  background-color: #8109d1;

  user-select: none;
`;

export const Avatar = styled.img.attrs({
  src: avatarImg,
})`
  width: 150px;
  height: 150px;

  border: 4px solid #ffffff;
  filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.3));
  border-radius: 150px;
`;

export const Infos = styled.div`
  display: flex;

  flex: 1;

  flex-direction: column;

  gap: 5;

  margin-left: 20px;
`;

export const Name = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 26px;

  color: #ffffff;
`;

export const Fields = styled.div`
  display: flex;

  gap: 10px;
`;

export const Field = styled.div`
  display: flex;

  gap: 5px;

  margin: 5px 0px;
`;

export const Title = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;

  color: #ffffff;
`;

export const Value = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;

  color: #ffffff;
`;

export const Buttons = styled.div`
  display: flex;

  height: 35px;

  gap: 20px;
`;

export const Button = styled.button`
  display: flex;

  align-items: center;
  justify-content: center;

  background-color: transparent;
  border: none;

  cursor: pointer;
`;
