import { useEffect, useState } from "react";
import { getUsers } from "../service/action";

export default function useGetUsers() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = () => {
      setIsLoading(true);
      const users = getUsers();
      setData(users);
      setIsLoading(false);
    };

    fetchData();

    // Watch for changes in the data state
    const dataChangeHandler = () => {
      setIsLoading(true);
      const updatedUsers = getUsers();
      setData(updatedUsers);
      setIsLoading(false);
    };

    // Add event listener to watch for changes
    window.addEventListener("dataChange", dataChangeHandler);

    // Clean up the event listener
    return () => {
      window.removeEventListener("dataChange", dataChangeHandler);
    };
  }, []);

  return { data, isLoading };
}
