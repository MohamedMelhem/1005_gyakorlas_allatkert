interface LablecProps {
  author: string;
  date: string;
}

export function Lablec(props: LablecProps) {
  return (
    <div className="col-sm-12 kartya mb-3">
      <p className="text-center">
        <strong>Az oldalt készítette: </strong>
        <i>{props.author}</i>
      </p>
      <p className="text-center">
        <strong>Készítés dátuma: </strong>
        <span className="dolt">{props.date}</span>
      </p>
    </div>
  );
}
