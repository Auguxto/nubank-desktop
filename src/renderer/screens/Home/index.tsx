import { Eye, Settings } from "lucide-react";
import React from "react";

import * as S from "./styles";

const HomeScreen: React.FC = () => {
  return (
    <S.Container>
      <S.Header>
        <S.Avatar />
        <S.Infos>
          <S.Name>Victor Augusto Ferreira</S.Name>
          <S.Fields>
            <S.Field>
              <S.Title>Agência:</S.Title>
              <S.Value>0000</S.Value>
            </S.Field>
            <S.Field>
              <S.Title>Conta:</S.Title>
              <S.Value>00000000-0</S.Value>
            </S.Field>
          </S.Fields>
          <S.Field>
            <S.Title>CPF:</S.Title>
            <S.Value>000.000.000-00</S.Value>
          </S.Field>
        </S.Infos>
        <S.Buttons>
          <S.Button>
            <Settings size={30} color="#FFFFFF" />
          </S.Button>
          <S.Button>
            <Eye size={30} color="#FFFFFF" />
          </S.Button>
        </S.Buttons>
      </S.Header>
    </S.Container>
  );
};

export default HomeScreen;
