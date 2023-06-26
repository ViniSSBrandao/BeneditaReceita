import { BodySignin, StyledLink } from "./styled";
import { useForm } from "react-hook-form";
import api from "../../../services/api";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

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

  async function onSubmit(data: Inputs) {
    try {
      await api.post("/user/signin", data).then(() => navigate("/"));
    } catch (err) {
      if (err.response.status === 401) {
        setShowError("");
      } else alert(err.message);
    }
  }

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
