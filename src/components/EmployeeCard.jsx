import { Link } from "react-router-dom";

function EmployeeCard({ employee }) {
  return (
    <div className="card">
      <h3>{employee.name}</h3>

      <p>{employee.email}</p>

      <p>{employee.company.name}</p>

      <Link to={`/employee/${employee.id}`}>View Details</Link>
    </div>
  );
}

export default EmployeeCard;
