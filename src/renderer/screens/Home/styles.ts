import styled from "styled-components";
import avatarImg from "../../../assets/avatar.png";

export const Container = styled.div`
  display: flex;

  padding: 25px;
`;

export const Avatar = styled.img.attrs({
  src: avatarImg,
})`
  width: 150px;
  height: 150px;

  border-radius: 150px;

  border: 3px solid #ffffff;
`;
