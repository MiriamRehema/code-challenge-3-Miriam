document.addEventListener("DOMContentLoaded", function () {
  // Retrieve the necessary DOM elements
  const movieTitleElement = document.querySelector(".Movie.title");
  const runTimeElement = document.querySelector(".run.time");
  const movieShowTimeElement = document.querySelector(".movie.show.time");
  const availableTicketsCountElement = document.getElementById("available-tickets-count");
  const buyTicketButton = document.getElementById("Buy-Ticket-btn");
  const filmsList = document.getElementById("films");

  // Function to populate the movie details with data
  function populateMovieDetails(movie) {
    movieTitleElement.textContent = movie.title;
    runTimeElement.textContent = `Run time: ${movie.runtime} minutes`;
    movieShowTimeElement.textContent = `Movie show time: ${movie.showtime}`;
    availableTicketsCountElement.textContent = movie.capacity - movie.tickets_sold;
    document.querySelector(".movieposter").src = film.poster;
  }

  // Function to handle the "Buy Ticket" button click event
  function buyTicket() {
    const currentAvailableTickets = parseInt(availableTicketsCountElement.textContent);
    if (currentAvailableTickets > 0) {
      availableTicketsCountElement.textContent = currentAvailableTickets - 1;
      alert("Ticket bought successfully!");
    } else {
      alert("Sorry, no more tickets available!");
    }
  }

  // Add event listener to the "Buy Ticket" button
  buyTicketButton.addEventListener("click", buyTicket);

  // Fetch films data from external JSON file
  fetch("db.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const films = data.films;

      // Populate the films list
      films.forEach(function (film) {
        const li = document.createElement("li");
        li.textContent = film.title;
        li.addEventListener("click", function () {
          populateMovieDetails(film)
          console.log(film.movie-poster)
          console.log(filmsList)
          filmmovieposter.src=filmMovieposter
          movieTitleElement.textContent = movie.title;
          runTimeElement.textContent = `Run time: ${movie.runtime} minutes`;
          movieShowTimeElement.textContent = `Movie show time: ${movie.showtime}`;
          availableTicketsCountElement.textContent = movie.capacity - movie.tickets_sold;
          document.querySelector(".movie-poster").src = film.poster;
          ;
        });
        filmsList.appendChild(li);
      });
      if(films.length>0){
        populateMovieDetails(films[0]);
      }
    })
    .catch(function (error) {
      console.log("Error fetching films data:", error);
    });
});
