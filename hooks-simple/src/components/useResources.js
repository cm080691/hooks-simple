import { useState, useEffect } from "react";
import axios from "axios";

const useResources = (resource) => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    (async (resource) => {
      const response = await axios.get(
        `http://jsonplaceholder.typicode.com/${resource}`
      );
      setResources(response.data);
      // ^ equivalent this.setState({ resources: response.data });
      // setState makes component re render
    })(resource);
  }, [resource]);
  // [resource] second argument to useEffect [], we can use on our use ca
  // no 2nd arg > compDidMount and continuous calling
  // 2nd arg [], wont call /update state
  // 2nd are [value] will change state if it is DIFFERNT
  return resources;
};

export default useResources;
