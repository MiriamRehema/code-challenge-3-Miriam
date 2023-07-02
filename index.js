fetch(' http://localhost:3000/films')
  .then(response => {
    // Check if the response was successful
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // Parse the response as JSON and return it as a Promise
    return response.json();
  })
  .then(data => {
    // Handle the data received in the response
    console.log(data);
  })
  .catch(error => {
    // Handle any errors that occurred during the request
    console.error('Request failed:', error);
  });

  fetch("http://localhost:3000/films")
  .then(response => response.json())
  .then(data => {
    // Call the function to populate the HTML with the data
    populateMovieList(data.films);
  })
  .catch(error => console.error('Error fetching data:', error));









  document.addEventListener('DOMContentLoaded', () => {
    const Container = document.getElementById('container');
  })

    // Function to populate the movie list in the HTML
    function populateMovieList(films) {
      const movieListDiv = document.getElementById('movieList');

      films.forEach(movie => {
        // Create elements for each movie
        const movieDiv = document.createElement('div');
        const title = document.createElement('h2');
        const runtime = document.createElement('p');
        const capacity = document.createElement('p');
        const showtime = document.createElement('p');
        const ticketsSold = document.createElement('p');
        const description = document.createElement('p');
        const poster = document.createElement('img');
        // Set the movie information
        title.textContent = movie.title;
        runtime.textContent = 'Runtime: ' + movie.runtime + ' minutes';
        capacity.textContent = 'Capacity: ' + movie.capacity;
        showtime.textContent = 'Showtime: ' + movie.showtime;
        ticketsSold.textContent = 'Tickets Sold: ' + movie.tickets_sold;
        description.textContent = movie.description;
        poster.src = movie.poster;
        poster.alt = movie.title + ' Poster';

        // Append elements to the movieDiv
        movieDiv.appendChild(title);
        movieDiv.appendChild(runtime);
        movieDiv.appendChild(capacity);
        movieDiv.appendChild(showtime);
        movieDiv.appendChild(ticketsSold);
        movieDiv.appendChild(description);
        movieDiv.appendChild(poster);

        
        // Append the movieDiv to the movieListDiv
        movieListDiv.appendChild(movieDiv);
      });
    }

    // Call the  function to start the process
    console.log();{
    populateMovieList();
    }