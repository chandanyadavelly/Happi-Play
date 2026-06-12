import AuthLayout from "../components/AuthLayout";

function MasterSignIn() {
  return (
    <AuthLayout
      sidebarColor="#d1e2d3"
      heading="Master Administration"
      description="Manage owners, players, bookings and overall platform operations."
    >
      <h2
        className="title"
        style={{
          textAlign: "center",
          marginBottom: "25px",
        }}
      >
        Master Sign In
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
      </div>

      <button className="btn">
        Sign In
      </button>
    </AuthLayout>
  );
}

export default MasterSignIn;
