interface ListaProps {
  cim: string;
  elemek: string[];
}

export function KisCard1(props: ListaProps) {
  return (
    <div className="col-sm-4 kartya mb-2">
      <h2>{props.cim}</h2>
      <ul className="list-group">
        {props.elemek.map((elem) => (
          <li className="list-group-item" key={elem}>
            {elem}
          </li>
        ))}
      </ul>
    </div>
  );
}
