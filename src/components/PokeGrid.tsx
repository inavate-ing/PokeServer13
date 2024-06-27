import {PokeListCard} from "@/components/PokeListCard";

type Props = {
    search: string;
    responseData: any[];
};

export const PokeGrid = async (props: Props) => {
    const {search, responseData} = props;

    return <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {responseData
            .filter((data) => {
                if (!search) return true;
                return data.name.toLowerCase().includes(search.toLowerCase())
            })
            .map((data) => (
                <PokeListCard key={data.id} data={data}/>
            ))}
    </div>
}