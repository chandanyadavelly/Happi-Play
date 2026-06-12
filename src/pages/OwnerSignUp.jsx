import { useState } from "react";
import "../styles/auth.css";

function OwnerSignUp() {
  const [type, setType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registration submitted successfully!");
  };

  return (
    <div className="auth-page">

      <div className="top-brand">
        Happy Play
      </div>

      <div className="auth-container">

        {/* Left Side */}
        <div
          className="auth-sidebar"
          style={{ backgroundColor: "#d1e2d3" }}
        >
          <div className="sidebar-inner-border"></div>

          <div className="sidebar-body">
            <h2>
              Join the Sports Arena.
            </h2>

            <p>
              Register your sports facility and manage
              bookings, players and operations efficiently.
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="auth-form-panel">

          <h2
            className="title"
            style={{
              textAlign: "center",
              marginBottom: "30px",
            }}
          >
            Owner Registration
          </h2>

          <form onSubmit={handleSubmit}>

            <div className="form-group">
              <label>Type</label>

              <select
                className="input"
                value={type}
                onChange={(e) => setType(e.target.value)}
                required
              >
                <option value="">
                  Select Registration Type
                </option>

                <option value="individual">
                  Individual
                </option>

                <option value="organization">
                  Organization
                </option>
              </select>
            </div>

            {type === "individual" && (
              <>
                <div className="form-group">
                  <label>Owner Name</label>

                  <input
                    className="input"
                    type="text"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Owner Mobile</label>

                  <input
                    className="input"
                    type="tel"
                    required
                  />
                </div>
              </>
            )}

            {type === "organization" && (
              <>
                <div className="form-group">
                  <label>Organization Type</label>

                  <select
                    className="input"
                    required
                  >
                    <option value="">
                      Select Type
                    </option>

                    <option>LLP</option>
                    <option>Pvt Ltd</option>
                    <option>Public Ltd</option>
                    <option>NPO</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Organization Name</label>

                  <input
                    className="input"
                    type="text"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Organization Mobile</label>

                  <input
                    className="input"
                    type="tel"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>PAN Number</label>

                  <input
                    className="input"
                    type="text"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>PAN Upload</label>

                  <input
                    className="input"
                    type="file"
                    required
                  />
                </div>
              </>
            )}

            <div className="form-group">
              <label>Manager Name</label>

              <input
                className="input"
                type="text"
                required
              />
            </div>

            <div className="form-group">
              <label>Manager Mobile Number</label>

              <input
                className="input"
                type="tel"
                required
              />
            </div>

            <div className="form-group">
              <label>GST Number</label>

              <input
                className="input"
                type="text"
                required
              />
            </div>

            <div className="form-group">
              <label>Club Name</label>

              <input
                className="input"
                type="text"
                required
              />
            </div>

            <div className="form-group">
              <label>Sports Type</label>

              <div
                style={{
                  display: "flex",
                  gap: "15px",
                  flexWrap: "wrap",
                  marginTop: "10px",
                }}
              >
                <label>
                  <input type="checkbox" />
                  {" "}Cricket
                </label>

                <label>
                  <input type="checkbox" />
                  {" "}Swimming
                </label>

                <label>
                  <input type="checkbox" />
                  {" "}Badminton
                </label>
              </div>
            </div>

            <div className="form-group">
              <label>Primary Email</label>

              <input
                className="input"
                type="email"
                required
              />
            </div>

            <div className="form-group">
              <label>Recovery Email</label>

              <input
                className="input"
                type="email"
                required
              />
            </div>

            <div className="form-group">
              <label>Username</label>

              <input
                className="input"
                type="text"
                required
              />
            </div>

            <div className="form-group">
              <label>Password</label>

              <input
                className="input"
                type="password"
                required
              />
            </div>

            <div className="form-group">
              <label>Confirm Password</label>

              <input
                className="input"
                type="password"
                required
              />
            </div>

            <div
              style={{
                marginBottom: "20px",
              }}
            >
              <label>
                <input
                  type="checkbox"
                  required
                />
                {" "}
                I agree to all Terms & Conditions
              </label>
            </div>

            <button
              className="btn"
              type="submit"
            >
              Sign Up
            </button>

          </form>
        </div>

      </div>
    </div>
  );
}

export default OwnerSignUp;
