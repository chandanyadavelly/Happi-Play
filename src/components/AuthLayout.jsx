import "../styles/auth.css";

function AuthLayout({
  sidebarColor,
  heading,
  description,
  children,
}) {
  return (
    <div className="auth-page">

      <div className="top-brand">
        Happy Play
      </div>

      <div className="auth-container">

        <div
          className="auth-sidebar"
          style={{ backgroundColor: sidebarColor }}
        >
          <div className="sidebar-inner-border"></div>

          <div className="sidebar-body">
            <h2>{heading}</h2>

            <p>{description}</p>
          </div>
        </div>

        <div className="auth-form-panel">
          {children}
        </div>

      </div>
    </div>
  );
}

export default AuthLayout;

