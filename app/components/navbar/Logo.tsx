'use client';
import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo=()=> {
    const router=useRouter();
    return (
        <div className="flex flex-row items-center justify-center">
            <Image onClick={()=> router.push('/')} alt="logo" className="hidden md:block cursor-pointer" height="50" width="50" src="/images/Renties.png" />
            <span className="font-bold">Renties</span>
        </div>
    )
}

export default Logo;