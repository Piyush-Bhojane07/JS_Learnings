import { View, Text, FlatList } from "react-native";
import { useForcast } from "@/hooks/api/useForcast";

export default function ForecastScreen() {
  const { data, isLoading } = useForcast();

  if (isLoading) return <Text>Loading...</Text>;
  if (!data) return <Text>No data</Text>;

  // combine hourly arrays into objects
  const hourlyData = data.hourly.time.map((time, index) => ({
    time,
    temperature: data.hourly.temperature_2m[index],
    humidity: data.hourly.relativehumidity_2m[index],
    apparentTemp: data.hourly.apparent_temperature[index],
    precipitation: data.hourly.precipitation_probability[index],
    wind: data.hourly.windspeed_10m[index],
  }));

  return (
    <View>
      <Text>Forecast</Text>
      <FlatList
        data={hourlyData}
        keyExtractor={(item) => item.time}
        renderItem={({ item }) => (
          <View
            style={{
              padding: 8,
              borderRadius: 10,
              borderWidth: 1,
              margin: 20,
                backgroundColor : 'white'
                }}
          >
            <Text>Time: {item.time}</Text>
            <Text>Temp: {item.temperature} °C</Text>
            <Text>Humidity: {item.humidity} %</Text>
            <Text>Feels like: {item.apparentTemp} °C</Text>
            <Text>Precipitation: {item.precipitation} %</Text>
            <Text>Wind: {item.wind} km/h</Text>
          </View>
        )}
      />
    </View>
  );
}
