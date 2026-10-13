interface AllatCardProps {
  faj: string;
  nev: string;
  kor: number;
  suly: string;
  veszelyeztetett: string;
  etelek: string;
}

export function AllatCard(props: AllatCardProps) {
  return (
    <div className="col-sm-3 col-md-6 col-lg-3 kartya mb-3">
      <h2>{props.faj}</h2>
      <div className="card h-100">
        <div className="card-body">
          <h3>{props.nev}</h3>
          <p>
            {props.nev} egy {props.kor} éves {props.faj.toLowerCase()}. Súlya
            körülbelül {props.suly}.
          </p>
          <p>
            <strong>Veszélyeztetett:</strong> {props.veszelyeztetett}
          </p>
          <p className="mb-0">
            <strong>Kedvenc ételei:</strong> {props.etelek}
          </p>
        </div>
      </div>
    </div>
  );
}
