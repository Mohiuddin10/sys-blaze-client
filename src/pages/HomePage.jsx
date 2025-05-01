import Hero from "../components/Hero";
import wave from "../assets/wave.svg";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-116px)] relative">
      <Hero />
      <img className="absolute bottom-0 w-full" src={wave} alt="" />
    </div>
  );
}
