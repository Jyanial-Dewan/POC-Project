import { useEffect, useState } from "react";
import CustomBreadcrumb from "../Components/CustomBreadcrumb";
import axios from "axios";
// import { useGlobalContext } from "../Context/GlobalContext";

interface Persons {
  user_id?: number;
  first_name?: string;
  middle_name?: string;
  last_name?: string;
  job_title?: string;
}
[];

const HomePage = () => {
  // const { persons } = useGlobalContext();
  const [persons, setPersons] = useState<Persons[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/v2/def-persons");
        setPersons(response.data);
        // setPersons(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  console.log("homepage: ", persons);
  return (
    <div>
      <CustomBreadcrumb />
      <div className="flex flex-col gap-2">
        {persons.map((person) => (
          <p key={person?.user_id}>{person?.first_name}</p>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
