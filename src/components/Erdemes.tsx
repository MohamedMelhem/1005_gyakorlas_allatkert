interface ErdemesProps {
  cim: string;
  erdemes1: string;
  erdemes2: string;
  erdemes3: string;
  erdemes4: string;
  erdemes5: string;
}

export function Erdemes(props: ErdemesProps) {
  return (
    <div className="row">
      <div className="col-sm-12 kartya mb-3">
        <div className="card">
          <div className="card-header">{props.cim}</div>
          <div className="card-body">
            <ul>
              <li>{props.erdemes1}</li>
              <li>{props.erdemes2}</li>
              <li>{props.erdemes3}</li>
              <li>{props.erdemes4}</li>
              <li>{props.erdemes5}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
