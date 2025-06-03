import Dropdown from "@/app/component/Header/Dropdown";

const Header = () => {
  return (
    <nav className="fixed top-8 left-0 right-0 max-w-7xl mx-auto rounded-full flex items-center justify-between gap-5 px-6 py-3 bg-[#E6E6D2] text-black">
      <h1 className="text-[1.5rem] font-semibold ">Kadai Inyiak</h1>
      <Dropdown />
    </nav>
  );
};

export default Header;
