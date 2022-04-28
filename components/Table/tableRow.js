import React from "react";
import { Status } from "../Status";

export const TableRow = ({ item }) => {
  return (
    <tr className="h-16">
      <td className="pl-[19px] pt-2 hidden sm:table-cell">
        <input className="checkbox" type="checkbox" name="" id="" />
      </td>
      <td className="hidden sm:table-cell">{item.date}</td>
      <td className="pl-4 sm:pl-0">{item.title}</td>
      <td className="hidden md:table-cell">{item.details}</td>

      <td>
        <Status status={item.status} />
      </td>

      <td className="text-right pr-2">
        <span className="font-bold">{item.quantity.collected}</span>/
        <span>{item.quantity.total}</span>
      </td>
      <td className="text-right pr-2 hidden md:table-cell">${item.price}</td>
      <td className="pr-3 text-right">
        ${(item.quantity.collected * item.price).toFixed(2)}
      </td>
    </tr>
  );
};
