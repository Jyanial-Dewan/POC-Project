import CustomBreadcrumb from "../Components/CustomBreadcrumb";
import { useGlobalContext } from "../Context/GlobalContext";
const HomePage = () => {
  const { persons } = useGlobalContext();

  return (
    <div>
      <CustomBreadcrumb />
      <div className="flex flex-col gap-2">
        {persons.map((person) => (
          <p key={person?.user_id}>{person?.first_name}</p>
        ))}
        test
      </div>
    </div>
  );
};

export default HomePage;
