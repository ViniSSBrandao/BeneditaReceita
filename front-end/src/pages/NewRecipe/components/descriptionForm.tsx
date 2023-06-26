import { BigInputs } from "../styled";
import { useForm, SubmitHandler } from "react-hook-form";

export type Receita = {
  name: string;
  Description: string;
  img: string;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Description(prop: any) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Receita>();
  const onSubmit: SubmitHandler<Receita> = (data) => {
    prop.receita(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Nome da sua Receita</h2>
        <input
          style={{ background: "white" }}
          placeholder="nome da receita"
          type="name"
          {...register("name", { required: true, maxLength: 100 })}
        />

        {errors.name && <span> maximo 100 caracteres</span>}
        <h2>Foto da receita pronta</h2>
        <input
          style={{ background: "white" }}
          type="url"
          placeholder="url da imagem"
          {...register("img", { required: true })}
        />
        {errors.img && <span>Adicione uma imagem para a receita</span>}
        <h2> História da receita</h2>
        <BigInputs>
          <input
            style={{ background: "white" }}
            placeholder="historia da receita"
            type="text"
            {...register("Description", { required: true })}
          />

          {errors.Description && (
            <span> Você precisa contar a história da sua receita! </span>
          )}
        </BigInputs>

        <input
          style={{ background: "#FF531C", color: "#ffffff", border: "none" }}
          type="submit"
          value={"Salvar descrição"}
        />
      </form>
    </>
  );
}
