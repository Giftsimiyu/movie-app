import { useEffect, useState } from "react";

function Apipage() {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    try {
      const response = await fetch("https://api.tvmaze.com/shows");
      const data = await response.json();
      setMovies(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className=" p-20 ">
      <h1 className="mb-10 text-2xl text-white">My Movies World</h1>

      <div className="h-100 grid justify-center gap-10 grid-cols-5 mr-20 ">
        {movies.map((item, index) => (
          <div key={index}>
            <div>
              <img className="rounded-lg" src={item.image.medium} />
              <h1 className="text-white mt-5"> {item.name}</h1>
              <h1 className="text-white">{item.status}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Apipage;
