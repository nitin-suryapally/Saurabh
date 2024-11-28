
import { LinkedIcon, TwitterIcon } from "@/utils";
import Image from "next/image";
import Link from "next/link";

const Icons = () => {
  const iconsList = [
    { Icon: LinkedIcon, href: "", title: "LinkedIn Icon" },
    { Icon: TwitterIcon, href: "", title: "Twitter Icon" },
  ];

  return (
    <div>
      <ul className="flex space-x-4 items-center justify-center">
        {iconsList.map((item, index) => (
          <li key={index}>
            <Link href={item.href}>
              <Image
                src={item.Icon}
                width={30}
                height={30}
                alt={`${item.title}`}
                className=""
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Icons;
