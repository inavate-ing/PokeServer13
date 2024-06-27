'use client';
import {capitalize} from '@/utils/str_utils'
import {useRouter, usePathname, useSearchParams} from "next/navigation";

type Props = {
    types: any[]
};


export const TypeSelectClient = (props: Props) => {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const {replace} = useRouter()

    function handleChange(type: string) {
        const params = new URLSearchParams(searchParams);
        if (type) {
            params.set("type", type);
            params.delete("search")
        } else {
            params.delete("type");
        }
        replace(`${pathname}?${params.toString()}`);
    }

    return (
        <div className="relative block w-48">
            <select
                defaultValue={searchParams.get("type")?.toString()}
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-500 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                onChange={(e) => handleChange(e.target.value)}
            >
                {props.types.map((type: any) => (
                    <option key={type.name} value={type.name}>
                        {capitalize(type.name)}
                    </option>
                ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                </svg>
            </div>
        </div>
    );
}