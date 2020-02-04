interface IWeakness{
    weakness: string[]
}

interface IPokemon{
    name: string,
    type: string,
    number: string,
    weight: string,
    height: string,
    evolution: string,
    weaknesses: IWeakness,
    image: string,
}

export default IPokemon;