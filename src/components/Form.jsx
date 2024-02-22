/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./Form.css";
import { useState } from "react";

const Form = ({ getData }) => {
  const [country, setCountry] = useState("");
  const [isError, setIsError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (country.trim() === "") {
      const error = "Please enter a country";
      setIsError(error);
    }

    setCountry("");
    getData(country, isError);
  };

  const handleInputChange = (e) => {
    const countryInput = e.target.value;
    setCountry(countryInput);
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form_inputs">
          <input
            className="input_country"
            type="text"
            name="country"
            id="country"
            value={country}
            placeholder="Search a Country"
            onChange={handleInputChange}
          />
          <button type="submit" className="search_btn">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="search_icon" />
          </button>
        </div>
      </form>
      <p style={{ color: "red", textAlign: "center" }}>{isError}</p>
    </>
  );
};

export default Form;
