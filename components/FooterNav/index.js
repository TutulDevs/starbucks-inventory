import Image from "next/image";
import Link from "next/link";
import { navigationLinks } from "../../mock/navigationLinks";

export const FooterNav = () => {
  return (
    <section className="sm:hidden fixed bottom-0 left-0 right-0 h-footer px-3 bg-white shadow-footerNav">
      <ul className="h-full flex items-center justify-between">
        {navigationLinks.map((item) => (
          <li key={item.id} className="h-10 w-10">
            <Link href={"/" + item.path}>
              <a className={`link`} aria-label={item.name}>
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={23}
                  height={20}
                />
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
