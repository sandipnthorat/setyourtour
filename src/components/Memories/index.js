import "./Memories.css";
import { memoriesData } from "../../assets/utilityData";

export const Memories = (props) => {
  const data = memoriesData;

  //   console.log(data);

  return (
    <div className="memories">
      <h4>Memories</h4>
      <article className="gallery">
        {data[0].images.map((obj) => {
          return (
            <a className="item" title="Lake">
              <img src={obj.img} alt="second image" />
            </a>
          );
        })}

        <a className="item" title="Lake">
          <img
            src={"http://setyourtour.com/api/contact/IMG_20200122_101447.jpg"}
            alt="second image"

            //https://drive.google.com/file/d/1id5EioUb_IQ58uVwPSUPyAC0d4ud3jsv/view?usp=sharing
          />
        </a>

        {/* <a className="item" title="Lake">
          <img
            src="https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="second image"
          />
        </a> */}
      </article>
    </div>
  );
};
