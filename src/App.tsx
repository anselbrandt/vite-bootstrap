import { Alert } from "./ui";

function App() {
  return (
    <div className="d-flex justify-content-center">
      <div className="alert alert-secondary" role="alert">
        <a href={"/"} className="alert-link">
          <i className="fas fa-calendar-plus mr-1" />
          Hello
        </a>
      </div>
      <Alert variant="secondary" icon="calendar-plus">
        <Alert.Link to="/">Hello</Alert.Link>
      </Alert>
    </div>
  );
}

export default App;
