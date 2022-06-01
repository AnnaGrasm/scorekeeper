import "./Player.css"

export default function Player({data}) {
  return (
    <li className="Player">
        <div className="Player__container">
        <span className="Player__name">{data.name}</span>
        <div className="Player__container-score">
        <button>-</button>
        {data.score}
        <button>+</button>
        </div>
        </div>
        <img className="Player__image" src={data.image} alt="profilepicture"  height="100" width="100" />
    </li>
  )
}
