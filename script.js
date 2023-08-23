// If any of the filters change
$('select').change(function() {
    runAllFilters();
});

function runAllFilters() {
    var list = $(".news-list .news-item");
    $(list).fadeOut("fast");

    var filtered = $(".news-list article");

    // Get all filter values
    var campus = $('select#sort-campus').val();
    var domain = $('select#sort-domain').val();
    var level = $('select#sort-level').val();
    var admission = $('select#sort-admission').val();

    // Filter based on all of them 
    filtered = filtered.filter(function() {
        return RegExp(campus).test($(this).attr("data-category")) &&
            RegExp(domain).test($(this).attr("data-domain")) &&
            RegExp(level).test($(this).attr("data-level"))&&
            RegExp(admission).test($(this).attr("data-admission"));
    });

    // Show message if there are no results
    filtered.length === 0 
        ? $('.news-list').append("<p id='noresults'>No Results!</p>")
        : $('#noresults').remove()

    // Display Them
    filtered.each(function (i) {
            $(this).delay(100).slideDown("fast");
        });
};