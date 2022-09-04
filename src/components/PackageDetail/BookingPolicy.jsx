import Stack from "react-bootstrap/Stack";
import { bankAccountDetails } from "../../assets/utilityData";

export const BookingPolicy = (props) => {
  const { data, color } = props;
  return (
    data && (
      <>
        <ul className="policy-list">
          {data.map((e) => {
            return <li key={e.label}>{e.label}</li>;
          })}
          <li>
            <div>
              <h6 style={{ color: color }} className="title">
                {"Bank Account details"}
              </h6>
              <p>
                <Stack direction="horizontal" gap={3}>
                  <div>
                    <div>Bank Name:</div>
                    <div>Account Name:</div>
                    <div>Account No:</div>
                    <div>IFS Code</div>
                  </div>
                  <div>
                    <div>{bankAccountDetails.bankName}</div>
                    <div>{bankAccountDetails.accountName}</div>
                    <div>{bankAccountDetails.accountNumber}</div>
                    <div>{bankAccountDetails.ifsc}</div>
                  </div>
                </Stack>
              </p>
            </div>
          </li>
        </ul>
      </>
    )
  );
};
