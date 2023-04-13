import { Card } from "./Card";
import { Spinner } from "./Spinner";
function App() {
  return (
    <div className="d-flex justify-content-center">
      <div>Hello</div>
      <Spinner />
      <Card>
        <Card.Header>Header</Card.Header>
        <Card.Title>Title</Card.Title>
        <Card.Body>Body</Card.Body>
      </Card>
    </div>
  );
}

export default App;
