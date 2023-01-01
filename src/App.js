import "./App.css";
import ServiceForm from "./components/ServiceForm";
import ServiceList from "./components/ServiceList";
import ServiceFormFilter from "./components/SeviceFormFiter";

function App() {
  return (
    <div className="container">
      <ServiceFormFilter />
      <ServiceForm />
      <ServiceList />
    </div>
  );
}

export default App;
