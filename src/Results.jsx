import Pet from "./Pet"


const Results = ({pets}) => {
  return(
    <div className="search">
      {!pets.length ? (
        <h1>No Pets Found</h1>
      ): (
        pets.map((pet) => {
          return (
            <Pet 
            animal={pet.animal}
            key={pet.div}
            name={pet.name}
            breed={pet.breed}
            images={pet.images}
            location={`${pet.city}, ${pet.state}`}
            id={pet.id}
            />
          );
        })
      )}
    </div>
  );
};

export default Results