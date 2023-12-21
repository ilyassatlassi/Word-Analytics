import { ReactNode } from "react";

type H2Props = {
    children: ReactNode
}

export default function H2({ children }: H2Props) {
    return <h2 className="text-[15px] uppercase tracking-[2px] font-medium text-[#747a7c]">{children}</h2>;
}