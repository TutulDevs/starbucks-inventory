import Link from "next/link";
import { navigationLinks } from "../../mock/navigationLinks";

export const Sidebar = () => {
  return (
    <aside className="w-aside-xl border-r border-neutral-2">
      <ul className="px-6 py-4 flex flex-col gap-y-2">
        {navigationLinks.map((item) => (
          <li key={item.id} className="h-10">
            <Link href={"/" + item.path}>
              <a className="h-full px-3 flex items-center text-sm font-medium leading-[17px] tracking-[0.02em] text-neutral-7 rounded hover:bg-white shadow-none hover:shadow-link transition-all duration-300">
                {item.label}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};
