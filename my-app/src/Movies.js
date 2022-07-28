import { useState } from "react";

function Movies ({name, price}) {
  
  return (
    <div>
      <h3>{name}</h3>
      <p>{price}</p>
    </div>
  );
}

export default Movies;
