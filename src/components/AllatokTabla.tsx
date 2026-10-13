interface AllatokTablaProps {
  cim: string;
  fejlec: string[];
  allatok: string[][];
}

export function AllatokTabla(props: AllatokTablaProps) {
  return (
    <div className="row mb-1" id="allatok">
      <div className="col-sm-12 kartya mb-3">
        <h2>{props.cim}</h2>
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                {props.fejlec.map((oszlop) => (
                  <th key={oszlop} scope="col">
                    {oszlop}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {props.allatok.map((allat) => (
                <tr key={allat[0]}>
                  {allat.map((adat, index) => (
                    <td key={`${allat[0]}-${index}`}>{adat}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
