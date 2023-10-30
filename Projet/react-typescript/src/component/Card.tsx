type CardProps = {
  title: string
  content: string
}

function Card({title, content}: CardProps) {
  return (
      <div>
        <h1>{title}</h1>
        <h1>{content}</h1>
      </div>
  );
}

export default Card;