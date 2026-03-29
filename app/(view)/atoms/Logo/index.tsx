import Image from "next/image";

const Logo = () => {
  return (
    <Image
      className="dark:invert"
      src="/next.svg"
      alt="Next.js logo"
      width={100}
      height={20}
      priority
    />
  );
};

export default Logo;
