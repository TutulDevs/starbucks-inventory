import Image from "next/image";

export const Pagination = () => {
  return (
    <div className="pt-6 pb-10 px-4 flex items-center justify-between">
      <div className="hidden sm:flex w-[200px] selectBox">
        <select
          className="appearance-none focus:outline-none h-full"
          aria-label="Default select example"
        >
          <option selected>10 Items per page</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>

        <Image
          src="/arrow-down-1.svg"
          alt="arrow-down"
          width={13.75}
          height={6.87}
        />
      </div>

      <div className="flex gap-x-4">
        <div className="w-[160px] selectBox">
          <select
            className="appearance-none focus:outline-none h-full"
            aria-label="Default select example"
          >
            <option selected>Page 1 of 5</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>

          <Image
            src="/arrow-down-1.svg"
            alt="arrow-down"
            width={13.75}
            height={6.87}
          />
        </div>

        <button className="nextPrev">
          <Image src="/left.svg" alt="previous" width={6.87} height={13.72} />
        </button>

        <button className="nextPrev">
          <Image src="/right.svg" alt="previous" width={6.87} height={13.72} />
        </button>
      </div>
    </div>
  );
};
