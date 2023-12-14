import { useEffect, useState } from "react";
import axios from "axios";
import humidity from "../assets/humidity.svg"
import uv from "../assets/uv.svg"

function getPrevDates(days) {
  var date = new Date();
  var last = new Date(date.getTime() - days * 24 * 60 * 60 * 1000);
  var day = last.getDate();
  var month = last.getMonth() + 1;
  var year = last.getFullYear();
  return `${year}-${month}-${day}`;
}

function WeeklyInfoCard() {
  return (
    <section className="info-card">
      <h3>Weekly Weather</h3>
      <WeekCard />
    </section>
  );
}

function WeekCard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://api.weatherapi.com/v1/history.json?q=Ahmednagar%2Cin&dt=${getPrevDates(
            6
          )}&end_dt=${getPrevDates(1)}&key=5cadec3d7211419eb0c64922231312`
        );
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  const weekdata = data?.forecast?.forecastday || [];

  return (
    <>
      {weekdata.map((day) => (
        <section key={day.date_epoch} className="week-card">

          <section className="inner-week-card">
            <span>
              <strong>
                {new Date(day.date).toLocaleDateString(undefined, {
                  weekday: "long",
                })}
              </strong>
            </span>

            <span style={{ display: "flex", alignItems: "center" }}>
              <img
                style={{ height: "60%" }}
                src={day.day.condition.icon}
                alt={`Weather icon for ${day.date}`}
              />
              <span>{day.day.condition.text}</span>
            </span>
          </section>

          <section className="inner-week-card">
            <span style={{display:'flex',alignItems:'center'}}>
            <svg style={{height:'20px'}} focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ThermostatIcon"><path d="M15 13V5c0-1.66-1.34-3-3-3S9 3.34 9 5v8c-1.21.91-2 2.37-2 4 0 2.76 2.24 5 5 5s5-2.24 5-5c0-1.63-.79-3.09-2-4zm-4-2V5c0-.55.45-1 1-1s1 .45 1 1v1h-1v1h1v2h-1v1h1v1h-2z"></path></svg>
              <strong>
                {day.day.avgtemp_c}
                <sup>o</sup>C
              </strong>
            </span>
            <span style={{ marginTop: "40%",display:'flex',alignItems:'center' }}>
              <img style={{height:"20px"}}src={uv}/>
              <strong>{day.day.uv}%</strong>
            </span>
          </section>

          <section className="inner-week-card">
            <span>
            <svg style={{height:'20px'}} className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-143b2d6" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="AirIcon"><path d="M14.5 17c0 1.65-1.35 3-3 3s-3-1.35-3-3h2c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1H2v-2h9.5c1.65 0 3 1.35 3 3zM19 6.5C19 4.57 17.43 3 15.5 3S12 4.57 12 6.5h2c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S16.33 8 15.5 8H2v2h13.5c1.93 0 3.5-1.57 3.5-3.5zm-.5 4.5H2v2h16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5v2c1.93 0 3.5-1.57 3.5-3.5S20.43 11 18.5 11z"></path></svg>
              <strong>{day.day.maxwind_mph} m/s</strong>
            </span>
            <span style={{ marginTop: "40%",display:'flex',alignItems:'center'}}>

            <img style={{height:"20px"}}src={humidity}/>
            <strong>{day.day.avghumidity}%</strong>
            </span>
          </section>
        </section>
      ))}
    </>
  );
}

export default WeeklyInfoCard;