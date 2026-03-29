import Image from "next/image";

const Header = () => {
  return (
    <header>
      <Image
        className="dark:invert"
        src="/next.svg"
        alt="Next.js logo"
        width={100}
        height={20}
        priority
      />
    </header>
  );
};

export default Header;
