export const BookingPolicy = (props) => {
  const { data } = props;
  return (
    data && (
      <ul className="policy-list">
        {data.map((e) => {
          return <li key={e.label}>{e.label}</li>;
        })}
      </ul>
    )
  );
};
