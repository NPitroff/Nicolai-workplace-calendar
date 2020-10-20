console.log(moment().hours());
var currentTime = moment().hours()
//# is for grabbing a dom element by id, "." is calling for class
$("#currentDay").text(moment().format("dddd, MMMM, Do"));

// function saveAppt(){
//     console.log("Save button Click", $(this));


// }






// USING JQUERY TO CALL A FUNCTION BY CLASS NAME
$("#calendar thead tr td").on("click", function(){
    console.log($(this).text());
    var hour= $(this).siblings(".select").text();
    var descr = $(this).siblings(".appt").find(".description").val();
    console.log(hour, descr);
    localStorage.setItem(hour, descr);

})
///////////////////////////////////////////////////
$("#calendar tr").each(function(){
    console.log($(this).children(".select").text())
    var hour = $(this).children(".select").text();
    $(this).children(".appt").find(".description").val(localStorage.getItem(hour));
    // if hour.splice() < currentTime $this.addClass("past")
    // else if hour.splice() = currentTime $this.addClass("present")
    // else hour.splice() > currentTime $this.addClass("future")
})
