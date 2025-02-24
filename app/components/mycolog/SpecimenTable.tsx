import React from "react";

type Update = {
  date: string;
  message: string;
};

type Specimen = {
  label: string;
  stage: string;
  lastUpdate: Update;
};

interface SpecimenTableProps {
  columns: Array<string>;
  data: Array<Specimen>;
}

const SpecimenTable = (props: SpecimenTableProps) => {
  return (
    <div className="rounded-lg border border-white bg-zinc-800 p-3">
      <table className="border-collapse rounded-lg">
        <thead className="bg-slate-600">
          <tr className="space-x-4">
            {props.columns.map((column) => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.data.map((specimen) => (
            <tr key={specimen.label} className="row-auto">
              <td className="col-auto">{specimen.label}</td>
              <td className="col-auto">{specimen.stage}</td>
              <td className="col-auto">
                <span>[{specimen.lastUpdate.date}]</span>:{" "}
                {specimen.lastUpdate.message}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SpecimenTable;
