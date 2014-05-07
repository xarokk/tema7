var API_BASE_URL = "https://api.github.com";


$("#button_get_repos").click(function(e) {
	e.preventDefault();
	getRepos();
});
function getRepos() {
	var url = API_BASE_URL + '/users/' + $("#username").val() + '/repos';

	$("#repos_result").text("");
	
	
	$.ajax({
		url : url,
		type : 'GET',
		crossDomain : true,
		dataType : 'json',
	}).done(function(data, status, jqxhr) {
				var repos = data;
				
				$.each(repos, function(i, v) {
					var repo = v;
					$('<h4> Name: ' + repo.name + '</h4>').appendTo($('#repos_result'));
					$('<p>').appendTo($('#repos_result'));	
					$('<strong> ID: </strong> ' + repo.id + '<br>').appendTo($('#repos_result'));
					$('<strong> URL: </strong> ' + repo.html_url + '<br>').appendTo($('#repos_result'));
					$('</p>').appendTo($('#repos_result'));
				});
				

	}).fail(function() {
		$("#repos_result").text("No repositories.");
	});

}