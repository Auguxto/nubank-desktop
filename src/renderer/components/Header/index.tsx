import React from "react";
import { Eye, EyeOff, Settings } from "lucide-react";

import * as S from "./styles";

const Header = () => {
  const [showInfos, toggleShowInfos] = React.useReducer((s) => !s, false);

  return (
    <S.Container>
      <S.Avatar draggable={false} />
      <S.Infos>
        <S.Name>Victor Augusto Ferreira</S.Name>
        <S.Fields>
          <S.Field>
            <S.Title>Agência:</S.Title>
            <S.Value>{showInfos ? "0000" : "XXXX"}</S.Value>
          </S.Field>
          <S.Field>
            <S.Title>Conta:</S.Title>
            <S.Value>{showInfos ? "00000000-0" : "XXXXXXXX-X"}</S.Value>
          </S.Field>
        </S.Fields>
        <S.Field>
          <S.Title>CPF:</S.Title>
          <S.Value>{showInfos ? "000.000.000-00" : "XXX.XXX.XXX-XX"}</S.Value>
        </S.Field>
      </S.Infos>
      <S.Buttons>
        <S.Button>
          <Settings size={30} color="#FFFFFF" />
        </S.Button>
        <S.Button onClick={toggleShowInfos}>
          {showInfos ? (
            <EyeOff size={30} color="#FFFFFF" />
          ) : (
            <Eye size={30} color="#FFFFFF" />
          )}
        </S.Button>
      </S.Buttons>
    </S.Container>
  );
};

export default Header;
