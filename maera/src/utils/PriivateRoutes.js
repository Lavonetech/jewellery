import { Outlet, useNavigate } from "react-router-dom";

const PrivateRoutes = () => {
  const navigate = useNavigate();

  try {
    const cookie = document.cookie;
    const tokenCookie = cookie.split(",").find((cookie) => cookie.trim().startsWith("jwt"));

    if (!tokenCookie) {
      // Redirect to login if token cookie is not present
      setTimeout(()=>{
        navigate("/login");
      },500)
      
     
    }

    const tokenValue = tokenCookie.split("=")[1];
    const jwtToken = JSON.parse(atob(tokenValue.split(".")[1])); // Decode the token
    const isAdmin = jwtToken.user.isAdmin;

    if (!isAdmin) {
      console.log("You are not an admin");
      setTimeout(()=>{
        navigate("/login");
      },500)
      
    } else {
      console.log("You are an admin");
      return <Outlet />;
    }
  } catch (error) {
    console.error("Error decoding JWT token", error);
    setTimeout(()=>{
        navigate("/login");
      },500)
    return null; // or a loading spinner, etc.
  }
};

export default PrivateRoutes;
