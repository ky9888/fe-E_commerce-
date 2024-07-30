import HederMain from "@/components/herderMain/HerderMain";
import HomePage from "@/components/home/Home";

export default async function home() {
  const res =await fetch ("http://localhost:5000/api/products/getAllProducts/?name=watch",{cache: "no-store"})
  const ress=await res.json();
  const data=ress.data
  console.log("check data",data);
  
  return (
    <div className="bg-slate-200 overflow-x-auto">
      <div><HederMain/></div>
      <div><HomePage data={data ? data :[]}/></div>
    </div>
  );
}