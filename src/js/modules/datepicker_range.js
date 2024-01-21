// JQuery decision
// console.log('jquery');
var dateIn;
$('#date_in').on('change', function() {
    dateIn = $(this).val();
    $('#date_out').prop('min', function() {
        return dateIn;
    });
});

var dateOut;
$('#date_out').on('change', function() {
    dateOut = $(this).val();
    $('#date_in').prop('max', function() {
        return dateOut;
    });
});