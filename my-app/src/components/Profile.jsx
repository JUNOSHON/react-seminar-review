

export default function Profile({image, name, title}) {
  return (
    <div className="profile">
      <img src={image} alt="avatar" className="photo"/>
      <h1>{name}</h1>
      <p>{title}</p>
    </div>
)
}
