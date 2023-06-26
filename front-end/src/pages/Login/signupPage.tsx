import Globalstyles from "../../styles/globalStyles.js";
import Home from "./components/home.js";

import Signup from "./components/signup.js";

import { ContainerHome } from "./styled.js";

export default function SignupPage() {
  return (
    <ContainerHome>
      <Home />
      <Signup />
      <Globalstyles />
    </ContainerHome>
  );
}
