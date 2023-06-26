export type Steps = { step: number; img: string; Description: string };

type prop = {
  Steps: Steps[];
};

export default function StepList(prop: prop) {
  const { Steps } = prop;

  return (
    <>
      {Steps.map((e) => (
        <>
          <h2>Passo {e.step}</h2>
          <img src={e.img} style={{ width: "100%" }} />
          <p>{e.Description}</p>
        </>
      ))}
    </>
  );
}
