import React, { useState } from "react";
import "./app.css";
import {
  CitySelect,
  CountrySelect,
  StateSelect,
} from "@davzon/react-country-state-city";
import "@davzon/react-country-state-city/dist/react-country-state-city.css";
import "bootstrap/dist/css/bootstrap.min.css";
export default function App() {
  const [countryid, setCountryid] = useState(0);
  const [stateid, setstateid] = useState(0);
  return (
    <div className="col-lg-6 mx-auto">
      <h6 className="mt-3 mb-3">Country</h6>
      <CountrySelect
        containerClassName="form-group"
        inputClassName=""
        onChange={(e) => {
          setCountryid(e.id);
        }}
        onTextChange={(e) => {
          console.log(e);
        }}
        placeHolder="Select Country"
      />
      <h6 className="mt-3 mb-3">State</h6>
      <StateSelect
        countryid={countryid}
        containerClassName="form-group"
        inputClassName="form-control"
        onChange={(e) => {
          setstateid(e.id);
        }}
        onTextChange={(e) => {
          console.log(e);
        }}
        placeHolder="Select State"
      />
      <h6 className="mt-3 mb-3">City</h6>
      <CitySelect
        countryid={countryid}
        stateid={stateid}
        containerClassName="form-group"
        inputClassName="form-control"
        onChange={(e) => {
          console.log(e);
        }}
        onTextChange={(e) => {
          console.log(e);
        }}
        placeHolder="Select City"
      />
    </div>
  );
}
