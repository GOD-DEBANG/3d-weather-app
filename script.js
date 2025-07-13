async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "d5866d8b4d73510211989f827f278d04";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");

    const data = await response.json();
    document.getElementById("cityName").textContent = data.name;
    document.getElementById("description").textContent = data.weather[0].description;
    document.getElementById("temp").textContent = `${data.main.temp} °C`;
    document.getElementById("humidity").textContent = data.main.humidity;
    document.getElementById("wind").textContent = data.wind.speed;

    const iconCode = data.weather[0].icon;
    document.getElementById("icon").src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    document.getElementById("weatherResult").classList.remove("hidden");
  } catch (error) {
    alert("❌ " + error.message);
    document.getElementById("weatherResult").classList.add("hidden");
  }
}
