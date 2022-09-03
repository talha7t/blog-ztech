import Link from "next/link";
import React from "react";

const categories = [
  { name: "react", slug: "react" },
  { name: "html", slug: "html" },
  { name: "web development", slug: "web-dev" },
];

function Header() {
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-blue-400 py-8">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl text-white">
              ZTech
            </span>
          </Link>
          {/* change to lg:contents if want to show links on large screens only */}
          <div className="hidden md:float-left md:contents">
            {categories.map((category) => (
              <Link key={category.slug} href={`/category/${category.slug}`}>
                <span className="md:float-right mt-2 align-middle text-black ml-4 font-semibold cursor-pointer">
                  {category.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
