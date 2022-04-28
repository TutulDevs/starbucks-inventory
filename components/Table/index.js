import { tableData } from "../../mock/tableData";
import { TableHead } from "./tableHead";
import { TableRow } from "./tableRow";

export const Table = () => {
  return (
    <table className="table-auto w-full">
      <TableHead />

      <tbody>
        {tableData.map((item) => (
          <TableRow key={item.id} item={item} />
        ))}
      </tbody>
    </table>
  );
};
