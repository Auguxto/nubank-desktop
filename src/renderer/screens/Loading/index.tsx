import React from "react";

import * as S from "./styles";

const LoadingScreen: React.FC = () => {
  return (
    <S.Container>
      <S.NU>
        <S.NIcon />
        <S.UIcon />
      </S.NU>
    </S.Container>
  );
};

export default LoadingScreen;
