import { useState } from "react";
import DescriptionForm from "./components/descriptionForm";
import { Container, Globalstyles, Button } from "./styled";
import { useForm, SubmitHandler } from "react-hook-form";
import { Receita } from "./components/descriptionForm";

import api from "../../services/api";
import Steps from "./components/steps";

export default function AddRecipe() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const [receita, setreceita] = useState<Receita>({} as Receita);
  const [step, setstep] = useState<Steps>({} as Steps);
  const [ingredientArray, setingredientArray] = useState<DataType[]>(
    [] as DataType[]
  );

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const sendData = {
      quantity: parseInt(data.quantity),
      name: data.name,
      measureUnit: data.measureUnit,
    };

    array.push(sendData);
    setingredientArray(array);
  };

  async function post() {
    if (Object.keys(receita).length === 0 || !ingredientArray[0] || !step[0]) {
      alert("preencha todos os campos e clique em salvar");
      return 0;
    }
    await api.post("/recipes", {
      name: receita.name,
      Description: receita.Description,
      img: receita.img,
      Steps: step,
      Ingredients: ingredientArray,
    });
  }

  return (
    <Container>
      <h1>Compartilhe suas receitas favoritas!</h1>
      <DescriptionForm receita={setreceita} />

      <form onSubmit={handleSubmit(onSubmit)}>
        <span>
          <h2>adicionar ingredientes:</h2>
          <h3>Adicione o nome do ingrediente:</h3>
        </span>

        <input
          style={{ background: "white" }}
          placeholder="nome do ingrediente"
          type="name"
          {...register("name", { required: true, maxLength: 100 })}
        />
        {errors.name && <span> maximo 100 caracteres</span>}
        <h3>Adicione a unidade de medida:</h3>

        <input
          style={{ background: "white" }}
          placeholder="unidade de medida"
          type="text"
          {...register("measureUnit", { required: true })}
        />
        {errors.measureUnit && <span> Coloque unidade de medida!</span>}
        <h3>Adicione a quantidade de acordo com a medida:</h3>
        <input
          style={{ background: "white" }}
          placeholder="quantidade"
          type="number"
          {...register("quantity", {
            required: true,
            maxLength: 100,
            valueAsNumber: true,
          })}
        />
        {errors.quantity && <span> coloque a quantidade</span>}

        <input
          style={{ background: "#FF531C", color: "#ffffff", border: "none" }}
          type="submit"
          value={"Adicionar ingrediente"}
        />
      </form>
      <Steps step={setstep} />

      <Button onClick={() => post()}>Enviar receita</Button>
      <Globalstyles />
    </Container>
  );
}

type Inputs = {
  quantity: string;
  name: string;
  measureUnit: string;
};

type DataType = {
  quantity: number;
  name: string;
  measureUnit: string;
};

const array: DataType[] = [];

type Steps = [{ step: number; img: string; Description: string }];
