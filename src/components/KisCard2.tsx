interface ListaProps {
  cim: string;
  elemek: string[];
}

export function KisCard2(props: ListaProps) {
  return (
    <div className="col-sm-4 kartya mb-2">
      <h2>{props.cim}</h2>
      <ol className="list-group list-group-numbered">
        {props.elemek.map((elem) => (
          <li className="list-group-item" key={elem}>
            {elem}
          </li>
        ))}
      </ol>
    </div>
  );
}
