import { useEffect } from 'react';

function Filter({ setActiveGenre, activeGenre, setFiltered, popular }) {
  useEffect(() => {
    if (activeGenre === 0) {
      setFiltered(popular);
      return;
    }
    const filtered = popular.filter((movie) => (
      movie.genre_ids.includes(activeGenre)
    ));
    setFiltered(filtered);
  }, [activeGenre]);

  return (
    <div className="filter-container">
      <button
        onClick={() => setActiveGenre(0)}
        className={activeGenre === 0 ? "active" : ''}
      >
        All
      </button>
      <button
        onClick={() => setActiveGenre(28)}
        className={activeGenre === 28 ? "active" : ''}
      >
        Action
      </button>
      <button
        onClick={() => setActiveGenre(12)}
        className={activeGenre === 12 ? "active" : ''}
      >
        Adventure
      </button>
      <button
        onClick={() => setActiveGenre(35)}
        className={activeGenre === 35 ? "active" : ''}
      >
        Comedy
      </button>
      <button
        onClick={() => setActiveGenre(80)}
        className={activeGenre === 80 ? "active" : ''}
      >
        Crime
      </button>
      <button
        onClick={() => setActiveGenre(27)}
        className={activeGenre === 27 ? "active" : ''}
      >
        Horror
      </button>
      <button
        onClick={() => setActiveGenre(36)}
        className={activeGenre === 36 ? "active" : ''}
      >
        History
      </button>
      <button
        onClick={() => setActiveGenre(878)}
        className={activeGenre === 878 ? "active" : ''}
      >
        ScienceFiction
      </button>
    </div>
  );
}

export default Filter;
