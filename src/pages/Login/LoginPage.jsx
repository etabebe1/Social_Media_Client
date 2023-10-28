import LoginForm from "../../components/LoginFrom/LoginForm";
import SiteNavBar from "../../components/NavForSite/SiteNavBar";
import Footer from "../../components/Footer/Footer";

function LoginPage() {
  return (
    <div>
      <SiteNavBar></SiteNavBar>
      <LoginForm></LoginForm>
      <Footer></Footer>
    </div>
  );
}

export default LoginPage;
