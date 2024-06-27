import {capitalize} from "@/utils/str_utils";
import Link from "next/link";

export const PokeListCard = ({data}: {
    data: any;
}) => {
    return <div className="flex flex-col items-center bg-gray-100 border border-gray-100 rounded overflow-hidden">
        <div className="bg-white w-full flex justify-center align-center p-4">
            <img
                src={data.sprites.front_default}
                alt={data.name}
                className="w-48 h-48"
            />
        </div>
        <div className="flex flex-col items-center p-4 gap-4">
            <div className="mt-2 text-lg font-semibold text-gray-800">
                {capitalize(data.name)}
            </div>
            <div className="text-gray-500">
                {data.types.map((type: any) => capitalize(type.type.name)).join(", ")}
            </div>
            <Link
                href={`/pokemon/${data.id}`}
                className="text-[#23C8A6]"
            >
                View More Details
            </Link>
        </div>
    </div>
}