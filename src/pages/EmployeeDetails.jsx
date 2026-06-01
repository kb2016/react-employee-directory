import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function EmployeeDetails() {
  const { id } = useParams();

  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setEmployee(data));
  }, [id]);

  if (!employee) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="details">
      <h2>{employee.name}</h2>

      <p>Email: {employee.email}</p>

      <p>Phone: {employee.phone}</p>

      <p>Website: {employee.website}</p>

      <h3>Company</h3>

      <p>{employee.company.name}</p>

      <h3>Address</h3>

      <p>
        {employee.address.street},{employee.address.city}
      </p>
    </div>
  );
}

export default EmployeeDetails;
