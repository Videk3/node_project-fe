import Vote from "./Vote.tsx";
import UpdateLunchName from "./UpdateLunchName.tsx";
import DeleteLunch from "./DeleteLunch.tsx";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const Card = ({cardData}) => {
    return (
      <>
          <div className="col">
              <div className="card shadow-sm">
                  <svg className="bd-placeholder-img card-img-top" width="100%" height="225"
                       xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail"
                       preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
                      <rect width="100%" height="100%" fill="#55595c"/>
                      <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
                  </svg>
                  <div className="card-body">
                      <p className="card-text">{cardData.name}</p>
                      <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group">
                              <Vote  id={cardData.id}/>
                              <UpdateLunchName id={cardData.id}/>
                              <DeleteLunch id={cardData.id}/>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </>
  )
}
export default Card;