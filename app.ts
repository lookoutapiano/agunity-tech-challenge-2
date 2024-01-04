interface CountryData {
    name: string;
    population: {
        men: number;
        women: number;
        youth: number;
    };
}

const countriesData: { countries: CountryData[] } = {
    countries: [
        {
            name: "Australia",
            population: {
                men: 12840000,
                women: 12940000,
                youth: 5710000,
            },
        },
        {
            name: "Ghana",
            population: {
                men: 16460000,
                women: 16380000,
                youth: 14620000,
            },
        },
        {
            name: "Indonesia",
            population: {
                men: 139130000,
                women: 137230000,
                youth: 82960000,
            },
        },
        {
            name: "Kenya",
            population: {
                men: 27320000,
                women: 27660000,
                youth: 24420000,
            },
        },
    ],
};

const roundToMillion = (num: number): string => {
    const rounded = Math.round(num / 10000) / 100;
    return `${rounded.toFixed(2)}M`;
};

const totalMen = countriesData.countries.reduce((acc, country) => acc + country.population.men, 0);
const totalWomen = countriesData.countries.reduce((acc, country) => acc + country.population.women, 0);
const totalYouth = countriesData.countries.reduce((acc, country) => acc + country.population.youth, 0);

console.log(totalMen);

document.getElementById("totalMen")!.textContent = roundToMillion(totalMen);
document.getElementById("totalWomen")!.textContent = roundToMillion(totalWomen);
document.getElementById("totalYouth")!.textContent = roundToMillion(totalYouth);

const menByCountry = document.getElementById("menByCountry")!;
const womenByCountry = document.getElementById("womenByCountry")!;
const youthByCountry = document.getElementById("youthByCountry")!;

const createPopulationSection = (populationType: string, populationCount: number, countryName: string): HTMLDivElement => {
    const populationDiv = document.createElement("div");
    populationDiv.classList.add("flex-row", "flex-wrap", "col-gap-8", "px-4", "text-bold");

    const populationValue = document.createElement("p");
    populationValue.classList.add(`bg-${populationType}-light`, `px-8`, `py-4`, `text-white`);
    populationValue.textContent = `${roundToMillion(populationCount)}`;

    const populationCountryName = document.createElement("p");
    populationCountryName.classList.add(`px-8`, `py-4`, `text-${populationType}`);
    populationCountryName.textContent = countryName;

    populationDiv.appendChild(populationValue);
    populationDiv.appendChild(populationCountryName);

    return populationDiv;
};

countriesData.countries.forEach((country) => {
    menByCountry.appendChild(createPopulationSection("men", country.population.men, country.name));
    womenByCountry.appendChild(createPopulationSection("women", country.population.women, country.name));
    youthByCountry.appendChild(createPopulationSection("youth", country.population.youth, country.name));
});
