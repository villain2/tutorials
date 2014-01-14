/*** START ***/
$(document).ready(function () 
{
	$.ajax({
		url: 'json/index.json'
	}).done(function (json) 
	{
		var dataJSON;
		if(typeof json == "string")
		{
			dataJSON 		= JSON.parse(json);
		}
		else 
		{
			dataJSON		= json;
		}

		//set the container
		var container 		= $('#mainContainer')[0];

		//parameters to start
		var params 			= {
			type: "default",
			container: container,
			partialsPath: "partials",
			dataJSON: dataJSON
		}

		//start EditorTest class
		EditorTest.init(params);
	})
});