import Image from "next/image";

export const Status = ({ status }) => {
  return (
    <div className="flex gap-x-2">
      {status === 0 ? (
        <>
          <span className="hidden sm:block">Out of Stock</span>
          <Image src="/error.svg" alt="out of stock" width={8} height={8} />
        </>
      ) : status === 1 ? (
        <>
          <span className="hidden sm:block">In Progress</span>
          <Image src="/warning.svg" alt="in progress" width={8} height={8} />
        </>
      ) : status === 2 ? (
        <>
          <span className="hidden sm:block">Alright</span>
          <Image src="/success.svg" alt="alright" width={8} height={8} />
        </>
      ) : null}
    </div>
  );
};
