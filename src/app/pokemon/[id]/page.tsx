'use client'
import Loader from "@/components/Loader";
import {capitalize} from "@/utils/str_utils";
import axios from "axios";
import {useEffect, useState} from "react";

export default function Page({params}: { params: { id: string } }) {
    const [data, setData] = useState<any>(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
            .then((response) => {
                setData(response.data)
                setIsLoading(false)
            })
    }, [params.id])

    return (
        <div className="container">
            {isLoading ? (
                <Loader/>
            ) : (
                <div className="flex justify-center items-center">
                    <div className="rounded overflow-hidden max-w-lg">
                        <div className="bg-[#60e2c9] w-full flex justify-center align-center p-4">
                            <img src={data.sprites.front_default} alt={data.name} className="w-80 h-80  "/>
                        </div>
                        <div className="bg-[#FCC666] p-4 flex flex-col gap-4">
                            <h1 className="text-3xl font-bold">{capitalize(data.name)}</h1>
                            <div className="flex flex-col gap-1">
                                {renderStat("Type", data.types.map((type: any) => capitalize(type.type.name)).join(", "), "")}
                                {renderStat("Stats", data.stats.map((stat: any) => `${capitalize(stat.stat.name)}: ${stat.base_stat}`).join(", "), "")}
                                {renderStat("Abilities", data.abilities.map((ability: any) => capitalize(ability.ability.name)).join(", "), "")}
                                {renderStat("Some Moves", data.moves.slice(0, 5).map((move: any) => capitalize(move.move.name)).join(", "), "...")}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

const renderStat = (label: string, value: string, suffix: string) => {
    return (
        <div key={label} className="flex justify-between">
            <p className="font-bold">{label}: <span className="font-normal">
                {value} {suffix}
            </span></p>
        </div>
    )
}