$(document).ready(function() {
	getAbout()
	initAbout()
	
	//event handling
	$(".thumb").click(function() {
		var panel1Offset = $(".panel1").offset()
		var panel2Offset = $(".panel2").offset()
		var panel3Offset = $(".panel3").offset()
		var profile0 = $(this).find(".profile");
		var profile1 = $(".profile.panel1")
		var profile2 = $(".profile.panel2")
		var profile3 = $(".profile.panel3")

		//if profile is showing don't do anything
		if(profile0.hasClass("panel1") || profile0.hasClass("panel2") || profile0.hasClass("panel3"))
			return

		//blow up clicked profile
		profile0.css({
 			"left":$(this).offset().left,
 			"top":$(this).offset().top
 		})
		profile0.animate(
		{ 	
			"left": panel1Offset.left,
			"top": panel1Offset.top,
		}, "slow" );
		profile0.removeClass();
		profile0.addClass("profile big panel1")

		//move panel1 profile over
		profile1.animate(
		{ 	
			"left": panel2Offset.left,
			"top": panel2Offset.top,
		}, "slow" );
		profile1.toggleClass("panel1 panel2")

		//move panel2 profile over
		profile2.animate(
		{ 	
			"left": panel3Offset.left,
			"top": panel3Offset.top,
		}, "slow" );
		profile2.toggleClass("panel2 panel3")

		//remove panel3 profile
		profile3.removeClass();
		profile3.addClass("profile")

	});

	function getAbout(){
		var html = ""
		//can externalize this to json file or service call
		var data = [
		{url:"http://goo.gl/zOgLJ5", desc:"Frank Dux is a nice guy he likes to code stuff, like javascript"},
		{url:"http://goo.gl/LhdHCp", desc:"Paul Jones is a nice guy he likes to code stuff, etc"},
		{url:"http://goo.gl/g7sfCz", desc:"Steve Smith is a nice guy he likes to code stuff"},
		{url:"http://goo.gl/zOgLJ5", desc:"Frank Jones is a nice guy he likes to code stuff"},
		{url:"http://goo.gl/LhdHCp", desc:"Paul Smith is a nice guy he likes to code stuff"},
		{url:"http://goo.gl/g7sfCz", desc:"Steve Jones is a nice guy he likes to code stuff"},
		{url:"http://goo.gl/zOgLJ5", desc:"Frank Smith is a nice guy he likes to code stuff"},
		{url:"http://goo.gl/LhdHCp", desc:"Paul Smith is a nice guy he likes to code stuff"},
		{url:"http://goo.gl/g7sfCz", desc:"Frank Dux is a nice guy he likes to code stuff"},
		{url:"http://goo.gl/zOgLJ5", desc:"Steve dux is a nice guy he likes to code stuff"},
		{url:"http://goo.gl/LhdHCp", desc:"Frank Smith is a nice guy he likes to code stuff"},
		{url:"http://goo.gl/g7sfCz", desc:"Steve Jones is a nice guy he likes to code stuff"},
		{url:"http://goo.gl/zOgLJ5", desc:"Frank Dux is a nice guy he likes to code stuff"},
		{url:"http://goo.gl/LhdHCp", desc:"Steve Smith is a nice guy he likes to code stuff"},
		{url:"http://goo.gl/g7sfCz", desc:"Frank Jones is a nice guy he likes to code stuff"},
		{url:"http://goo.gl/zOgLJ5", desc:"Steve Smith is a nice guy he likes to code stuff"},
		{url:"http://goo.gl/LhdHCp", desc:"Frank Jones is a nice guy he likes to code stuff"},
		{url:"http://goo.gl/g7sfCz", desc:"Frank Dux is a nice guy he likes to code stuff"},
		{url:"http://goo.gl/zOgLJ5", desc:"Steve Smith is a nice guy he likes to code stuff"},
		{url:"http://goo.gl/LhdHCp", desc:"Paul Dux is a nice guy he likes to code stuff"},
		{url:"http://goo.gl/zOgLJ5", desc:"Steve Smith is a nice guy he likes to code stuff"},
		{url:"http://goo.gl/zOgLJ5", desc:"Frank Jones is a nice guy he likes to code stuff"},
		{url:"http://goo.gl/g7sfCz", desc:"Frank Dux is a nice guy he likes to code stuff"},
		{url:"http://goo.gl/zOgLJ5", desc:"Steve Smith is a nice guy he likes to code stuff, and do css"},
		{url:"http://goo.gl/LhdHCp", desc:"Paul Dux is a nice guy he likes to code stuff!"},
		{url:"http://goo.gl/LhdHCp", desc:"Paul Dux is a nice guy he likes to code stuff!"},
		{url:"http://goo.gl/g7sfCz", desc:"Frank Smith is a nice guy he likes to code stuff Frank Smith"}]

		data.forEach(function(val) {
			html += '<div class="thumb">'
			html += '<img src="'+val.url+'"></img>'
			html += '<div class="profile">'
			html +=	'<img src="'+val.url+'"></img>'
			html +=	'<div class="desc">'+val.desc+'</div>'
			html += '</div>'
			html += '</div>'
		});
		$(".thumbs").append(html)		
	}

	function initAbout(){
		setTimeout(function(){
			$($(".thumb")[2]).trigger("click")
			$($(".thumb")[1]).trigger("click")
			$($(".thumb")[0]).trigger("click")
		}, 100)
	
	}
	
	console.log("about us is ready to go!")
});
