var API_BASE_URL = "https://api.github.com";
var USERNAME = "xarokk";
var PASSWORD = "f1j0k3p0t0t10s";

$.ajaxSetup({
    headers: { 'Authorization': "Basic "+ btoa(USERNAME+':'+PASSWORD) }
});


$("#button_delete").click(function(e) {
	e.preventDefault();
	deleteRepos($("#name_repository").val());
});

function deleteRepos(name_repository) {
	var url = API_BASE_URL + '/repos/' + USERNAME + '/'+ name_repository;
	$("#repos_result").text('');
	
	$.ajax({
		url : url,
		type : 'DELETE',
		crossDomain : true,
		dataType : 'json',
	}).done(function(data, status, jqxhr) {
				$('<div class="alert alert-success"> <strong>Ok!</strong> Repository deleted</div>').appendTo($("#delete_repo_result"));	
				
	
	
	}).fail(function() {
		$('<div class="alert alert-danger"> <strong>Oh!</strong> Error </div>').appendTo($("#update_result"));;
	});
	}
	