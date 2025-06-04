import { Button } from "@/components/ui/button";
import { FaShoppingBag } from "react-icons/fa";

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col gap-5">
        <div className="w-[60rem] h-[10rem] bg-[#E6E6D2] mx-auto flex items-center justify-center rounded-[8px]">
          <div className="flex items-center gap-3">
            <FaShoppingBag size={50} />
            <h1 className="text-center text-[3rem] font-bold">Kadai Inyiak</h1>
          </div>
        </div>
        <h2 className="text-2xl text-white max-w-5xl text-center mx-auto">
          Selamat datang di pusat kendali kadai inyiak, tempat dimana semua data
          barang dikelola dengan mudah dan cepat
        </h2>
        <div className="flex items-center justify-center gap-5 w-full">
          <Button
            variant={"default"}
            className="w-[15rem] py-6 rounded-full bg-[#E6E6D2] text-black text-xl
            hover:scale-105 hover:bg-[#F7F7F7 transition duration-300 cursor-pointer font-semibold"
          >
            Input Data
          </Button>
          <Button
            variant={"default"}
            className="w-[15rem] py-6 rounded-full text-xl cursor-pointer hover:text-black
            hover:scale-105 hover:bg-[#E6E6D2] transition duration-300 font-semibold"
          >
            Data Karyawan
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
