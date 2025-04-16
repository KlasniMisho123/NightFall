import { useAuth } from "@/context/authcontext";


export default function Home() {
  [ authTest ] = useAuth();

  return (
    <div className="flex justify-center items-center h-[100vh] text-red-300 text-5xl font-bold animate-bounce"> Work In Process ...</div>
  );
}
