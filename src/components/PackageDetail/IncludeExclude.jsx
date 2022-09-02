import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

export const IncludeExclude = (props) => {
  const { color, title, data } = props;
  return (
    data && (
      <Card
        className="right-card"
        style={{
          boxShadow: `5px 5px 10px 0px ${color}1a`,
        }}
      >
        <Card.Header style={{ backgroundColor: color }} className="title">
          {title}
        </Card.Header>
        <ListGroup variant="flush">
          {data.map((e) => {
            return <ListGroup.Item key={e.label}>{e.label}</ListGroup.Item>;
          })}
        </ListGroup>
      </Card>
    )
  );
};
