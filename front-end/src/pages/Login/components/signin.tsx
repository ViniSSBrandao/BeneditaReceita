import { BodySignin, StyledLink } from "./styled";
import { useForm } from "react-hook-form";
import api from "../../../services/api";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useLocalStorage from "../../../hooks/useLocalStorage";

type Inputs = {
  email: string;
  password: string;
};

export default function Signin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const navigate = useNavigate();
  const [showError, setShowError] = useState("none");
  const [token, setToken] = useState({})
  const [loged, setLoged] = useState(false)
  
  async function onSubmit(data: Inputs) {
    
      await api.post("/user/signin", data).then((e) => {setToken(e); setLoged(true)}).catch((err)=>{if (err.response.status === 401) {
        setShowError("");
      } else alert(err.message); return 0});
      
    }
    useLocalStorage("userData", token)
    
    
  useEffect(() =>{if (loged ){
    setLoged(false)
    navigate('/')
  }}, [loged, navigate] )
  
  return (
    <BodySignin>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Email</h2>
        <input
          style={{ background: "white" }}
          placeholder="email"
          type="email"
          {...register("email", { required: true })}
        />
        {errors.email && <span>Preencha este campo</span>}
        <h2>senha</h2>
        <input
          style={{ background: "white" }}
          type="password"
          placeholder="senha"
          {...register("password", { required: true })}
        />
        {errors.password && <span>Preencha este campo</span>}
        <span style={{ display: showError }}>Senha incorreta!</span>
        <input
          style={{ background: "#FF531C", color: "#ffffff", border: "none" }}
          type="submit"
        />
      </form>

      <StyledLink to="/sign-up">
        Não se registrou ainda? Cadastre-se!
      </StyledLink>
    </BodySignin>
  );
}
