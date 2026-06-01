import { useEffect, useState } from "react";
import { fetchEmployees } from "../services/employeeService";
import EmployeeCard from "../components/EmployeeCard";
import SearchBar from "../components/SearchBar";

function Home() {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getEmployees = async () => {
      try {
        const data = await fetchEmployees();
        setEmployees(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getEmployees();
  }, []);

  const filteredEmployees = employees.filter(
    (employee) =>
      employee.name.toLowerCase().includes(search.toLowerCase()) ||
      employee.email.toLowerCase().includes(search.toLowerCase()),
  );

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <SearchBar search={search} setSearch={setSearch} />

      <div className="grid">
        {filteredEmployees.map((employee) => (
          <EmployeeCard key={employee.id} employee={employee} />
        ))}
      </div>
    </>
  );
}

export default Home;
