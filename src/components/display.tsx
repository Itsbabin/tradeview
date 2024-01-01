import "../css/display.css";
import Candel from "./candel";
import axios from "axios";

export default function Display() {
  var data = JSON.stringify({
    "clientcode":"babin",
    "password":"Babin&bubun2004",
	"totp":"TOTP_CODE"
});
  var config = {
    method: "post",
    url: "https://apiconnect.angelbroking.com/rest/secure/angelbroking/historical/v1/getCandleData",
    headers: {
      "X-PrivateKey": "b681vnNy",
      Accept: "application/json, application/json",
      "X-SourceID": "WEB, WEB",
      "X-ClientLocalIP": "192.168.53.34",
      "X-ClientPublicIP": "2409:40e1:8:5bde:7320:f818:e00e:69d",
      "X-MACAddress": "EB605414-5BA4-417D-83C3-FB6B483F25AB",
      "X-UserType": "USER",
      Authorization: "Bearer eyJhbGciOiJIUzUxMiJ9.eyJ1c2VybmFtZSI6IkQ4OD MiLCJyb2xlcyI6MCwidXNlcnR5cGUiOiJVU0VSIiwia WF0IjoxNTk5NzEyNjk4LCJleHAiOjE1OTk3MjE2OTh 9.qHZEkOMokMktybarQO3m4NMRVQlF0vvN7rh2lC Rkjd2sCYBq3JnOq0yWWOS5Ux_H0pvvt4-ibSmb5H JoKJHOUw",
      "Content-Type": "application/json",
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });

  return (
    <>
      <div className="container">
        <div className="chart">
          <Candel />
        </div>
      </div>
      <div className="show"></div>
    </>
  );
}
