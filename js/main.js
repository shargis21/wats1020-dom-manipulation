//////////////////////////////////////////////////
// WATS1020 Dom Manipulation
// Custom script goes here.
//////////////////////////////////////////////////

$( document ).ready(function() {
    var userInfo = {
        firstName: 'Jane',
        lastName: 'Doe'
    };
    var voteCounts = {
        great: 0,
        greatest: 0,
        total: 0
      };
    
    // TODO: Create a function to listen for clicks on the "login" button.
    //      1. When a user clicks the "login" button, hide the login
    //          form elements on the page.
    //      2. Fill the user's first and last name into `div.user-info`.
    //      (NOTE: You do not have to perform any validation on the data as
    //          a base requirement.)


$('.view-details').on('click', function(event){
    console.log(event);
    var targetElement = event.target;
    //      1. When user clicks a "view details" button, find the parent of that element.
    var container = targetElement.parentElement.parentElement;
    $(container).find('.details').each(function(index, el){
    //      2. Within that parent, find all the elements that have the class `details`.
         if ($(el).is(':visible')){
             $(el).fadeOut();
             targetElement.innerText = "View Details"
             //      3. Toggle visibility of all the elements within that parent with the class `details`
             
         } else {
             $(el).fadeIn();
             targetElement.innerText = "Hide Details"
             //      4. Change the text of the "view details" button to read "hide details" so the user
             //          understands they can hide the text again.
         }       
    });
  });    

    // TODO: Create a function that listens for clicks on the voting buttons and
    // looks at the `data-vote` attribute on each button to see what was voted for,
    // then determines the updated vote breakdown to adjust the progress bars.
    //      1. Set up an event listener on the buttons with the `vote` class.
    //      2. When a button is clicked, look at the `data-vote` attribute to determine
    //          what the user is voting for ("great" or "greatest").
    //      3. Increment the counter for whichever vote talley is affected.
    //      4. Determine the respective percentages (out of 100) for each progress bar.
    //      5. Modify the `width` attribute on each progress bar to set the updated percentage.

});
