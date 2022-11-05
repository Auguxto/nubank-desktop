import React from "react";

import { X } from "lucide-react";

import * as S from "./styles";

const TitleBar: React.FC = () => {
  const handleCloseApp = () => {
    window.api.closeApp();
  };

  const handleMinimizeApp = () => {
    window.api.minimizeApp();
  };

  return (
    <S.Container>
      <S.Logo />
      <S.Buttons>
        <S.Button onClick={handleMinimizeApp}>
          <S.MinimizeIcon />
        </S.Button>
        <S.Button onClick={handleCloseApp}>
          <X size={24} color="rgba(255, 255, 255, 0.8)" strokeWidth={3} />
        </S.Button>
      </S.Buttons>
    </S.Container>
  );
};

export default TitleBar;
