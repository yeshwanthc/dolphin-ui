import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";

export default function HomeComponent() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
