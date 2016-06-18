


var dataRef = new Firebase("https://chentrainschdule.firebaseio.com/");

  $("#addUser").on("click", function() {
       console.log('submit is clicked')

       var name = $('#nameInput').val().trim();
       var destination= $('#destinationInput').val().trim();
       var timeFirst = $('#timeInput').val().trim();
       var frequency = $('#frequencyInput').val().trim();
      // var dateDiffer =  moment().diff( moment(date), "months");

       //var nameRow = $(td).d

           // Output all of the new information into the relevant HTML sections
     
       dataRef.push({
          name: name,
          destination: destination,
          timeFirst: timeFirst,
          //dateDiffer: dateDiffer,
          frequency: frequency
        });

  return false;
});

   dataRef.on("child_added", function(childSnapshot) {

        console.log(childSnapshot);
    
        console.log(childSnapshot.val().name);
        console.log(childSnapshot.val().destination);
        console.log(childSnapshot.val().timeFirst);
        console.log(childSnapshot.val().frequency);


        $('#trainList').append(

                "<tr>" + '<td>' + childSnapshot.val().name+ "</td>" + '<td>' + childSnapshot.val().destination+"</td>"+
                '<td>' + childSnapshot.val().frequency+"</td>"+
                '<td>' + "</td>"+
                '<td>' + "</td>"+ "</tr>"
                 )



}, function (errorObject) {

    // In case of error this will print the error
      console.log("The read failed: " + errorObject.code);

  });


