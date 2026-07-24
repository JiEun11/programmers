function solution(genres, plays) {
    const genresMap = new Map();
    
    // key: genres' name, value: total plays, each index and plays
    /**
     * Map {
     *   "classic" => {
     *     totalPlays: 1450,
     *     songs: [
     *       { id: 0, play: 500 },
     *       { id: 2, play: 150 },
     *       { id: 3, play: 800 }
     *     ]
     *   }
     * }
    **/
    for (let id = 0; id < genres.length; id++) {
        const genre = genres[id];
        const play = plays[id];
        
        // The first make the map when genre comes with at first
        if (!genresMap.has(genre)) {
            genresMap.set(genre, { totalPlays: 0, songs: [ ]})
        }
        // The genre already was in the map
        const genreData = genresMap.get(genre);
        genreData.totalPlays += play;
        genreData.songs.push({ id, play });    
    }
    
    const sortedGenres = [...genresMap.values()].sort(
      (a, b) => b.totalPlays - a.totalPlays
    );
    
    const answer = [];

    for (const genreData of sortedGenres) {
      genreData.songs.sort((a, b) => {
        if (a.play !== b.play) {
          return b.play - a.play;
        }

        return a.id - b.id;
      });

      const selectedSongs = genreData.songs.slice(0, 2);

      for (const song of selectedSongs) {
        answer.push(song.id);
      }
    }

    return answer;
}