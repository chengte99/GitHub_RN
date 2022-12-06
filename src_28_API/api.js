export const getCityInfo = async (coords) => {
    const KEY = '0641f81b346e457887651fe63ffa31b5';
    const url = `https://geoapi.qweather.com/v2/city/lookup?key=${KEY}&location=${coords.longitude},${coords.latitude}`;

    try {
        const response = await (await fetch(url)).json();
        if(response.code === '200') {
            return response.location;
        }else {
            return [];
        }
    } catch (error) {
        console.log('Fetch Error: ', error);
    }

}

export const getWeatherInfo = async (coords) => {
    const KEY = '0641f81b346e457887651fe63ffa31b5';
    const type = '1,2'
    const url = `https://devapi.qweather.com/v7/indices/1d?key=${KEY}&type=${type}&location=${coords.longitude},${coords.latitude}`;

    try {
        const response = await (await fetch(url)).json();
        if(response.code === '200') {
            return response.daily;
        }else {
            return [];
        }
    } catch (error) {
        console.log('Fetch Error: ', error);
    }

}

export const getThreeDays = async (coords) => {
    const KEY = '0641f81b346e457887651fe63ffa31b5';
    const url = `https://devapi.qweather.com/v7/weather/3d?key=${KEY}&location=${coords.longitude},${coords.latitude}`;

    try {
        const response = await (await fetch(url)).json();
        if(response.code === '200') {
            return response.daily;
        }else {
            return []
        }
    } catch (error) {
        console.log('Fetch Error: ', error);
    }
}

