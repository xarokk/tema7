var URL_DE_BASE = "http://gateway.marvel.com/v1/public/comics?ts=1";
var Publickey ="406e7de22254e734528eadabebfb5ef2";
var Hash = "3a71b0e86b7ca8b774de610ccf08ebdb";

$("#button_get_comic").click(function(e) {
	e.preventDefault();
	getComics();
});
function getComics() {
//var url = URL_DE_BASE + '&apikey=' + Publickey + '&hash=' + Hash;
var url = 'http://gateway.marvel.com:80/v1/public/comics?ts=1&apikey=406e7de22254e734528eadabebfb5ef2&hash=3a71b0e86b7ca8b774de610ccf08ebdb';
$("#comics_result").text("");

$.ajax({
		url : url,
		type : 'GET',
		crossDomain : true,
		dataType : 'json',
	}).done(function(data, status, jqxhr) {
				var repos = data;
				//var objeto = repos.data.results
				var objeto = repos.data.results
				var objeto2 = repos.data.results.series
					$.each(objeto, function(i, v) {
					var repo = v;
					//var repor =t;
					$('<h4> Copyride: ' + repos.copyright + '</h4>').appendTo($('#comics_result'));
					$('<h4> data: ' + repo.title + '</h4>').appendTo($('#comics_result'));
					$('<p>').appendTo($('#comics_result'));	
					$('<strong> ID: </strong> ' + repo.id + '<br>').appendTo($('#comics_result'));
					$('<strong> Descripcion: </strong> ' + repo.description+ '<br>').appendTo($('#comics_result'));
					//$('<strong> buuh: </strong> ' + repor.name + '<br>').appendTo($('#comics_result'));
					
					/*$.each(objeto2, function(j, t) {
					var repor = t
					$('<strong> url: </strong> ' + repor.name + '<br>').appendTo($('#comics_result'));
					}) */
					
					var objetor =  repo.series
					$('<strong> Nombre: </strong> ' + objetor.name + '<br>').appendTo($('#comics_result'));
					
					var objetore = repo.urls
					$.each(objetore, function(j, t) {
					var repor = t
					$('<strong> url: </strong> ' + t.url + '<br>').appendTo($('#comics_result'));
					}) 
					//$('<strong> urls : </strong> ' + objetore.url + '<br>').appendTo($('#comics_result'));
					
					
					//$('<strong> url: </strong> ' + repo.urls.url + '<br>').appendTo($('#comics_result'));
					$('</p>').appendTo($('#comics_result'));
				}); 
				/*
				$.each(objeto2, function(i, v) {
				var repo2 = v;
				$('<strong> texto: </strong> ' + repo2.name + '<br>').appendTo($('#comics_result'));
				$('</p>').appendTo($('#comics_result'));
				});
				*/

	}).done(function(data, status, jqxhr) {
		$('<div class="alert alert-success"> <strong>Ok!</strong> Lista sacada</div>').appendTo($("#comics_alert"));				
  	}).fail(function() {
		$("#comics_result").text("No hay comics.");
	});

}