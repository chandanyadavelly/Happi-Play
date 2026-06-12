import { Link } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";

function OwnerSignIn() {
  return (
    <AuthLayout
      sidebarColor="#d1e2d3"
      heading="Welcome back to the Pavilion."
      description="Sign in to review today's booking ledgers."
    >
      <h2
        className="title"
        style={{
          textAlign: "center",
          marginBottom: "25px",
        }}
      >
        Owner Sign In
      </h2>

      <div className="form-group">
        <label>Username</label>

        <input
          className="input"
          type="text"
          placeholder="Enter Username"
        />
      </div>

      <div className="form-group">
        <label>Password</label>

        <input
          className="input"
          type="password"
          placeholder="Enter Password"
        />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "10px",
          marginBottom: "20px",
          fontSize: "14px",
        }}
      >
        <label
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <input type="checkbox" />
          Remember Credentials
        </label>

        <a
          href="#"
          style={{
            color: "#4a634e",
            textDecoration: "none",
          }}
        >
          Forgot Password?
        </a>
      </div>

      <button className="btn">
        Sign In
      </button>

      <p
        style={{
          textAlign: "center",
          marginTop: "20px",
          color: "#6e7571",
        }}
      >
        Want to Register?{" "}
        <Link
          to="/owner-signup"
          style={{
            color: "#4a634e",
            fontWeight: "600",
            textDecoration: "none",
          }}
        >
          Sign Up
        </Link>
      </p>
    </AuthLayout>
  );
}
export default OwnerSignIn;
