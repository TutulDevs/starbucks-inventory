import Image from "next/image";
import { SearchBar } from "../SearchBar";

export const Header = () => {
  return (
    <header className="h-16 px-6 md:px-9 py-3 border-b border-neutral-2 flex gap-x-3 items-center bg-white">
      {/* button part */}
      <div className="md:w-aside-lg h-full">
        <button
          type="button"
          className="w-[110px] h-full flex items-center justify-center text-sm font-medium leading-5 text-neutral-9"
        >
          <span className="inline-block pr-2"> Starbucks</span>

          <Image
            src="/caret-down.svg"
            alt="caret image"
            width={10}
            height={8}
          />
        </button>
      </div>

      {/* Search part */}
      <div className="h-full hidden sm:block">
        <SearchBar />
      </div>

      {/* user part  */}
      <div className="w-user-xl h-8 ml-auto flex justify-between items-center">
        <button type="button" className="grid place-items-center">
          <Image
            src="/bell.svg"
            alt="notification bell icon"
            width={18}
            height={20}
          />
        </button>

        <Image
          src="/avatar.png"
          alt="avatar"
          width={32}
          height={32}
          className="border"
        />

        <button
          type="button"
          className="h-full px-1 text-sm font-medium leading-5 text-neutral-9"
        >
          <span className="inline-block pr-2">John Doe</span>

          <Image
            src="/caret-down.svg"
            alt="caret image"
            width={10}
            height={8}
          />
        </button>
      </div>
    </header>
  );
};
