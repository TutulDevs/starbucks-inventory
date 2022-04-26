import Image from "next/image";

export const SearchBar = () => {
  return <div className="w-search-xl h-full rounded-[8px] pl-3 flex items-center bg-neutral-2">
  <Image src="/search.svg" alt="search icon" width={16} height={16} />

  <input
    type="text"
    name="text"
    id="text"
    placeholder="Search"
    className="flex-1 h-full px-3 rounded-[8px] bg-neutral-2 placeholder:font-inter placeholder:font-normal placeholder:text-base placeholder:leading-6 placeholder:text-neutral-8"
  />
</div>
}
