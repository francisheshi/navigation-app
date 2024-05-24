import React, { useState, useEffect } from "react";
import axios from "axios";

import "./fetchingData.css";

// https://jsonplaceholder.typicode.com/posts/1/comments

const FetchingData = () => {
  const [data, setData] = useState([]);

  const getDataFromMockAPI = async () => {
    try {
      let res = await MockApi();
      console.log("res 2 ", res);
    } catch (e) {}
  };

  useEffect(() => {
    getDataFromMockAPI();
    console.log("i should fire only once");
    MockApi().then((res) => {
      console.log("response ", res);
    });
  }, []);

  const fetchData = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/1/comments"
    );
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, [data]);

  return (
    <div className="fetch-api">
      <hr style={{ width: "95%" }} />
      <h3>Fetching Posts - API and axios</h3>

      <ui
        className="ui_dummy-data"
        style={{ textAlign: "left", display: "flex" }}
      >
        {data.map((item) => {
          return (
            <div className="api-dummy_data">
              <p>Id: {item.id}</p>
              <p>Name: {item.name}</p>
              <p>Email: {item.email}</p>
              <hr style={{ width: "45%" }} />
            </div>
          );
        })}
      </ui>
    </div>
  );
};

const MockData = {
  name: "Franci",
};

const MockApi = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(MockData);
    }, 300);
  });
};

export default FetchingData;
