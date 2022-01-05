import axios from "axios";
import classNames from "classnames";

// const url = "https://covid19.mathdro.id/api";

const url = "https://disease.sh/v3/covid-19/all";
const urlForCountries = "https://disease.sh/v3/covid-19/countries/";
const urlForDailyData =
    "https://disease.sh/v3/covid-19/historical/all?lastdays=all";
export const fetchData = async (country) => {
    let changeableUrl = url;

    if (country) {
        console.log(country);
        changeableUrl = `${urlForCountries}${country}`;
    }

    console.log(changeableUrl);

    try {
        const {
            data: { todayCases, todayRecovered, todayDeaths, updated },
        } = await axios.get(changeableUrl);
        //console.log(todayDeaths);
        return { todayCases, todayRecovered, todayDeaths, updated };
    } catch (error) {}
};

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(url);

        let today = new Date();
        const date =
            today.getMonth() +
            1 +
            "-" +
            today.getDate() +
            "-" +
            today.getFullYear();
        const modifiedData = [
            data.todayCases,
            data.todayRecovered,
            data.todayDeaths,
            date,
        ];

        console.log(modifiedData);

        return modifiedData;
    } catch (error) {
        console.log("Failed to print modifiedData");
        console.log(error);
    }
};

export const fetchCountries = async () => {
    try {
        const { data } = await axios.get(urlForCountries);
        return data.map((a) => a.country);
    } catch (error) {
        console.log(error);
    }
};
