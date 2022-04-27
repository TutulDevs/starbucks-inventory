import Image from "next/image";
import Link from "next/link";
import { navigationLinks } from "../../mock/navigationLinks";

export const Sidebar = () => {
  return (
    <aside className="hidden sm:block w-aside-md md:w-aside-lg border-r border-neutral-2">
      <ul className="px-[18px] py-4 flex flex-col gap-y-2">
        {navigationLinks.map((item, idx) => (
          <li key={item.id} className="h-10 w-10 md:w-auto">
            <Link href={"/" + item.path}>
              <a className={`link ${idx === 1 ? "linkActive" : ""}`}>
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={15}
                  height={20}
                />

                <span className="hidden md:block">{item.label}</span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};
