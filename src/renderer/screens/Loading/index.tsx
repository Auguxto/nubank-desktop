import React from "react";
import { useNavigate } from "react-router-dom";

import * as S from "./styles";

const LoadingScreen: React.FC = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    setInterval(() => {
      navigate("/home");
    }, 4000);
  }, []);

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
