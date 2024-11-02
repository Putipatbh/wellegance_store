import { Flower } from "lucide-react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-white-cream">
        <Flower className="animate-spin h-12 w-12 text-[#D4A5A5]" />
      </div>
  );
}

export default Loader;