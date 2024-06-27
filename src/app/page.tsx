import {Suspense} from "react";
import axios from "axios";
import {PokeGrid} from "@/components/PokeGrid";
import {TypeSelect} from "@/components/TypeSelect";
import {PokeSearch} from "@/components/PokeSearch";
import {Loader} from "@/components/Loader";

const Page = async ({searchParams}: {
    searchParams: {
        search: string;
        type: string;
    };
}) => {
    const search = searchParams?.search || "";
    const type = searchParams?.type || "normal";

    const responseData = await fetchData(type);

    return (
        <>
            <section className="container flex flex-col gap-4">
                <TypeSelect/>
                <PokeSearch/>
            </section>
            <section className="container">
                <Suspense key={type} fallback={<Loader/>}>
                    <Suspense key={search} fallback={<Loader/>}>
                        <PokeGrid search={search} responseData={responseData}/>
                    </Suspense>
                </Suspense>
            </section>
        </>
    );
}

const fetchData = async (type: string) => {
    'use server'
    console.log('here');
    const response = await axios.get(`https://pokeapi.co/api/v2/type/${type}`)
    const urls = response.data.pokemon.map((slot: any) => slot.pokemon.url);
    const promises = urls.map((url: string) => axios.get(url));
    const responses = await Promise.all(promises);
    return responses.map((response) => response.data);
}

export default Page;
