'use client';
import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo=()=> {
    const router=useRouter();
    return (
        <div className="flex flex-row">
            <Image onClick={()=> router.push('/')} alt="logo" className="hidden md:block cursor-pointer" height="100" width="100" src="/images/Renties.png" />
            <h2>Renties</h2>
        </div>
    )
}

export default Logo;