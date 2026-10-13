interface FejlecProps {
  cim: string;
  alcim: string;
}

export function Fejlec(props: FejlecProps) {
  return (
    <>
      <h1 id="focim">{props.cim}</h1>
      <p className="mb-0">{props.alcim}</p>
    </>
  );
}
