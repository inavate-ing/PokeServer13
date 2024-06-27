import axios from "axios";
import {TypeSelectClient} from "@/components/TypSelect.client";

export const TypeSelect = async () => {
    const types = await axios.get("https://pokeapi.co/api/v2/type")
        .then((response) => response.data.results);

    return <TypeSelectClient types={types}/>
}