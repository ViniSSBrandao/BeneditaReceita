import { BodySignin, StyledLink } from "./styled";
import { useForm } from "react-hook-form";
import api from "../../../services/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type Inputs = {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  image: string;
};

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const navigate = useNavigate();
  const [showError, setShowError] = useState("none");

  async function onSubmit(data: Inputs) {
    if (data.confirmPassword != data.password) {
      setShowError("");
      return 0;
    }
    try {
      await api.post("/user", data).then(() => navigate("/login"));
    } catch (err) {
      if (err.response.status === 409) {
        alert("email em uso, utilize outro.");
      }
      console.log(err.response.data);
    }
  }

  return (
    <BodySignin>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Nome</h2>
        <input
          style={{ background: "white" }}
          type="nome"
          placeholder="nome"
          {...register("name", { required: true })}
        />

        {errors.password && <span>Este campo é obrigatório</span>}

        <h2>Foto</h2>
        <input
          style={{ background: "white" }}
          type="url"
          placeholder="sua foto"
          {...register("image", { required: true })}
        />
        {errors.password && <span>Este campo é obrigatório</span>}

        <h2>Email</h2>
        <input
          style={{ background: "white" }}
          placeholder="email"
          type="email"
          {...register("email")}
        />

        <h2>senha</h2>
        <input
          style={{ background: "white" }}
          type="password"
          placeholder="senha"
          {...register("password", { required: true })}
        />
        {errors.password && <span>Este campo é obrigatório</span>}
        <h2>Confirmar senha</h2>
        <input
          style={{ background: "white" }}
          type="password"
          placeholder="confirme a senha"
          {...register("confirmPassword", { required: true })}
        />
        {errors.confirmPassword && <span>Campo obrigatório!</span>}
        <span style={{ display: showError, margin: "5px" }}>
          As senhas devem ser iguais
        </span>
        <input
          style={{ background: "#FF531C", color: "#ffffff", border: "none" }}
          type="submit"
        />
      </form>

      <StyledLink to="/login">Já possui uma conta? Efetue o login!</StyledLink>
    </BodySignin>
  );
}
