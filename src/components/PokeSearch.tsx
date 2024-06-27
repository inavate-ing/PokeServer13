'use client';
import {useRouter, usePathname, useSearchParams} from "next/navigation";
import {useState} from "react";

export const PokeSearch = () => {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const {replace} = useRouter()

    const [search, setSearch] = useState(searchParams.get("search")?.toString() || "")

    function handleClick() {
        const params = new URLSearchParams(searchParams);
        if (search) {
            params.set("search", search);
        } else {
            params.delete("search");
        }
        replace(`${pathname}?${params.toString()}`);
    }

    return (
        <div className="flex items-center">
            <input
                type="search"
                className="block w-96 p-2 text-gray-500 bg-gray-200 border border-gray-200 rounded-l"
                placeholder="Search Pokemon"
                onChange={
                    (e) => setSearch(e.target.value)
                }
            />
            <button
                className="border border-transparent bg-[#004368] text-white py-2 px-3 rounded-r"
                onClick={handleClick}
            >
                Search
            </button>
        </div>
    );
}