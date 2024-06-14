//template for renderig the wireframe info

export function WireframeTemp ({ title, imageUrl, description })  {
    return (
      <div className="Wireframe-Template">
        <h4>{title}</h4>
        <img src={imageUrl} alt={title} />
        <p>{description}</p>
      </div>
    );
  };
  