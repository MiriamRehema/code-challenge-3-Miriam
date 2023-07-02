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
    const Container = document.querySelector('container');
  })

   
        // Create elements for each movie
        const movieMenu = document.querSelector('menu');
        const title = document.querSelector('h2');
        const runtime = document.querSelector('p');
        const capacity = document.querSelector('p');
        const showtime = document.querSelector('p');
        const ticketsSold = document.querSelector('p');
        const description = document.querSelector('p');
        const poster = document.querySelector('img');
        // Set the movie information
        title.textContent = film.title;
        runtime.textContent = 'Runtime: ' + movie.runtime + ' minutes';
        capacity.textContent = 'Capacity: ' + movie.capacity;
        showtime.textContent = 'Showtime: ' + movie.showtime;
        availableTicketscount.textContent = 'availableTicketscount: ' + movie.availableTicketscount;
        description.textContent = movie.description;
        poster.src = movie.poster;
        poster.alt = movie.title + ' Poster';

       //fuction to update available ticket count when a ticket is purchased
       const updateavailabelTickets = ()=>{
        const currentCount=parseInt(availableTicketCount.textContent)
        if(currentCount > 0){
          availabeTickets ,count.textCount=current ,Count-1;
        } 
      };
          
        //function to  ticket handlePurchase

        const handleTicketPurchase= ()=>{
        const currentCount=parseInt(availableTicketsCount.textContent)
        if(currentCount  >0){}
          updateAvailabletTickets();
          //additional code to handle ticket  purchase.)
        elseif (
            alert ,('Sorry tickets are sold out'))
        }
         
        ;
       //add event listener to the buy ticket button
       Buy-Ticket.addEventListener("click",handelPurchase)
       //make a GET request

        

        
        // Append elements to the movieDiv
        container.appendChild(title);
        container.appendChild(runtime);
        container.appendChild(capacity);
        container.appendChild(showtime);
        container.appendChild(ticketsSold);
        container.appendChild(description);
        container.appendChild(poster);

        
        // Append the movieDiv to the movieListDiv
        movieListDiv.appendChild(movieDiv);
      ;
    

    // Call the  function to start the process
    console.log();{
    populateMovieList();
    }