import Globalstyles from "../../styles/globalStyles.tsx";
import Home from "./components/home.tsx";
import Signin from "./components/signin.tsx";

import { ContainerHome } from "./styled.tsx";

export default function Login() {
  return (
    <ContainerHome>
      <Home />
      <Signin />
      <Globalstyles />
    </ContainerHome>
  );
}
