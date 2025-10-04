// services/api.ts
import axios from "axios";

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export const apiService = {
  async getUsers(): Promise<User[]> {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    // console.log(res.data);
    return res.data;
  },
};

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export const apiServicePosts = {
  async getPost(): Promise<Post[]> {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    // console.log(res.data)
    return res.data;
  },
};

export interface Comments {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export const apiServiceComments = {
  async getComment(): Promise<Comments[]> {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/comments"
    );
    return response.data;
  },
};

export interface Photo {
  id: number;
  sol: number;
  camera: {
    id: number;
    name: string;
    rover_id: number;
    full_name: string;
  };
  img_src: string;
  earth_date: string;
  rover: {
    id: number;
    name: string;
    landing_date: string;
    launch_date: string;
    status: string;
  };
}

export interface NasaResponse {
  photos: Photo[];
}


export const apiServiceNasa = {
  async getNasa(): Promise<Photo[]> {
    try {
      const res = await axios.get(
        "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY"
      );
      console.log("NASA API Response:", res.data); // Debug log
      return res.data.photos;
    } catch (error) {
      console.error("NASA API Error:", error);
      throw error;
    }
  },
};



export interface Coins {
  id : string,
  image : string
  current_price : number
  market_cap : number
}


export const apiServiceCoins =  {
  async getCoins () : Promise<Coins[]> {
    const res = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
    );
    return res.data;
  }
}


export interface Forecast {
  latitude: number;
  longitude: number;
  hourly_units: {
    time: string;
    temperature_2m: string;
    relativehumidity_2m: string;
    apparent_temperature: string;
    precipitation_probability: string;
    windspeed_10m: string;
  };
  hourly: {
    time: string[];
    temperature_2m: number[];
    relativehumidity_2m: number[];
    apparent_temperature: number[];
    precipitation_probability: number[];
    windspeed_10m: number[];
  };
  daily_units: {
    time: string;
    temperature_2m_max: string;
    temperature_2m_min: string;
    sunrise: string;
    sunset: string;
  };
  daily: {
    time: string[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    sunrise: string[];
    sunset: string[];
  };
}


export const apiServiceForcast = {
  async getForcast(): Promise<Forecast> {
    const res = await axios.get(
      "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation_probability,windspeed_10m&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=auto"
    );
    return res.data as Forecast;
  },
};






