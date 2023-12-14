import { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";
import humidity from "../assets/humidity.svg"
import uv from "../assets/uv.svg"

function CurrentInfoCard(props) {
  console.log(props)
  const [data, setData] = useState(null);
  const [hourlyData, setHourlyData] = useState(null);
  const times = [9, 12, 15, 18, 21];

  useEffect(() => {
    const fetchData = async () => {
      await getData();
      await getHourData();
    };

    fetchData();
  }, []);

  const getData = async () => {
    const response = await axios.get(
      `https://api.weatherapi.com/v1/forecast.json?q=${props.query}%2Cin&days=1&hour=5&key=5cadec3d7211419eb0c64922231312`
    );
    setData(response.data);
    console.log(response.data);
  };

  const getHourData = async () => {
    let dateobj = new Date();
    let apidate = `${dateobj.getFullYear()}-${
      dateobj.getMonth() + 1
    }-${dateobj.getDate()}`;
    const response = await axios.get(
      `https://api.weatherapi.com/v1/history.json?q=${props.query}%2Cin&dt=${apidate}&key=5cadec3d7211419eb0c64922231312`
    );
    setHourlyData(response.data);
    console.log(response.data);
  };

  return (
    <div className="info-card">
      {data && (
        <>
          <section className="inner-current-card">
            <h3>Current Weather</h3>
            <br />
            <section
              style={{ display: "flex", justifyContent: "space-around" }}
            >
              <span style={{ display: "flex", flexDirection: "column",gap:"15px" }}>
                <span>
                  <strong>
                    {data.location.name},{data.location.country}
                  </strong>
                </span>
                <span>{data.location.localtime}</span>
              </span>

              <span style={{ display: "flex", flexDirection: "column",gap:"15px"  }}>
                <span>
                  <strong>
                    {data.current.feelslike_c} <sup>o</sup>C
                  </strong>
                </span>
                <span>{data.current.condition.text}</span>
              </span>

              <span>
                <img
                  src={data.current.condition.icon}
                  alt="Current Weather Icon"
                />
              </span>
            </section>
          </section>

          <section style={{margin:'20px 0px'}}className="inner-current-card">
            <h3>Air Conditions</h3>
            <br />
            <section
              style={{ display: "flex", justifyContent: "space-around" }}
            >
              <span className="air-condition-card">
                  <span style={{display:'flex',alignItems:"center"}}>
                  <svg style={{height:'20px'}} className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-8feus5" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ThermostatIcon"><path d="M15 13V5c0-1.66-1.34-3-3-3S9 3.34 9 5v8c-1.21.91-2 2.37-2 4 0 2.76 2.24 5 5 5s5-2.24 5-5c0-1.63-.79-3.09-2-4zm-4-2V5c0-.55.45-1 1-1s1 .45 1 1v1h-1v1h1v2h-1v1h1v1h-2z"></path></svg>
                  Real Feel
                  </span>
                <span>
                  <strong>
                    {data.current.feelslike_c} <sup>o</sup>c
                  </strong>
                </span>
              </span>

              <span className="air-condition-card">
                <span style={{display:'flex',alignItems:"center"}}>
                <svg style={{height:'20px'}}  className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-8feus5" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="AirIcon"><path d="M14.5 17c0 1.65-1.35 3-3 3s-3-1.35-3-3h2c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1H2v-2h9.5c1.65 0 3 1.35 3 3zM19 6.5C19 4.57 17.43 3 15.5 3S12 4.57 12 6.5h2c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S16.33 8 15.5 8H2v2h13.5c1.93 0 3.5-1.57 3.5-3.5zm-.5 4.5H2v2h16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5v2c1.93 0 3.5-1.57 3.5-3.5S20.43 11 18.5 11z"></path></svg>
                  Wind
                </span>
                <span>
                  <strong>{data.current.wind_mph} m/s</strong>
                </span>
              </span>

              <span className="air-condition-card">
                <span style={{display:'flex',alignItems:"center"}}>
                <img style={{height:"20px"}}src={uv}/>
                  UV
                </span>
                <span>
                  <strong>{data.current.uv} %</strong>
                </span>
              </span>

              <span className="air-condition-card">
                <span style={{display:'flex',alignItems:"center"}}>
                  <img style={{height:"20px"}}src={humidity}/>
                  Humidity
                </span>
                <span>
                  <strong>{data.current.humidity}%</strong>
                </span>
              </span>
            </section>
          </section>
          <br />

          <section className="inner-current-card">
            <h3>Todays Forecast</h3>
            <br />
            <section style={{ display: "flex", justifyContent: "center" }}>
              {times.map((time) => (
                <span key={time} className="today-forecast-card">
                  <span>{time}:00</span>
                  <span>
                    <img
                      src={
                        hourlyData?.forecast?.forecastday[0]?.hour[time]
                          ?.condition?.icon
                      }
                      alt={`Weather icon at ${time}:00`}
                    />
                  </span>
                  <span>
                    <strong>
                      {hourlyData?.forecast?.forecastday[0]?.hour[time]?.temp_c}
                      <sup>o</sup>C
                    </strong>
                  </span>
                </span>
              ))}
            </section>
          </section>
        </>
      )}
    </div>
  );
}

export default CurrentInfoCard;