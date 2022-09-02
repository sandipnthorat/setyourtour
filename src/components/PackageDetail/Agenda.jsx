import Accordion from "react-bootstrap/Accordion";

export const Agenda = (props) => {
  const { data } = props;
  return (
    data && (
      <Accordion className="day-by-day-list" style={{ marginTop: "1em" }}>
        {data.map((item, i) => {
          return (
            <Accordion.Item key={item.label} eventKey={i}>
              <Accordion.Header className="title">
                <h6>{item.label}</h6>
              </Accordion.Header>
              <Accordion.Body>
                <h6 style={{ marginBottom: "1em" }}>{item.location}</h6>
                {item.description.length > 0 && (
                  <ul>
                    {item.description.map((e) => {
                      return <li key={e.label}>{e.label}</li>;
                    })}
                  </ul>
                )}
              </Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion>
    )
  );
};
