import Image from "next/image";

export const TableHead = () => {
  return (
    <thead>
      <tr>
        <th className="pl-[19px] pt-3 hidden sm:inline-flex">
          <input className="checkbox" type="checkbox" name="" id="" />
        </th>

        <th className="clickable hidden sm:table-cell">
          <span className="mr-1">Date Updated</span>
          <Image src={"/arrow-down.svg"} alt="down" width={11} height={10} />
        </th>

        <th className="clickable pl-4 sm:pl-0">
          <span className="mr-1">title</span>

          <Image src={"/arrow-up-down.svg"} alt="down" width={11} height={10} />
        </th>
        <th className="hidden md:table-cell">details</th>
        <th>
          <span className="invisible sm:visible">status</span>
        </th>
        <th className="text-right pr-2">
          <span className="invisible md:visible">quantity</span>
        </th>
        <th className="text-right pr-2 hidden md:table-cell">unit price</th>
        <th className="pr-3 clickable text-right">
          <span className="mr-1">amount</span>
          <Image src={"/arrow-up-down.svg"} alt="down" width={11} height={10} />
        </th>
      </tr>
    </thead>
  );
};
