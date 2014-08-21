(function() {
	var spritzController = null;

	var onSpritzifySuccess = function(spritzText) {
		spritzController.startSpritzing(spritzText);
	};
	
	var onSpritzifyError = function(error) {
		alert("Unable to Spritz: " + error.message);
	};
	
    // function clearTextClick() {
    //     $("#inputText").val("");
    // }
    
    // function fillTextClick() {
    // 	var testText = "Spritzing content from the web is also easy. All you need to do is publish content on the web, "
    // 		+ " and our platform can transform it into Spritz Text. The default configuration simply extracts all text " 
    // 		+ "from the HTML at the target URL, but advanced configuration allows finer control using CSS-like selectors.";    		
    // 	var text = $("#inputText").val();   	
    //     $("#inputText").val(text + (text != "" ? "\n" : "") + testText);
    // }

	function onStartSpritzClick(event) {
		var text =  "My favourite public-house, the Moon Under Water, is only two minutes from a bus stop, but it is on a side-street, and drunks and rowdies never seem to find their way there, even on Saturday nights. Its clientele, though fairly large, consists mostly of ‘regulars’ who occupy the same chair every evening and go there for conversation as much as for the beer. If you are asked why you favour a particular public-house, it would seem natural to put the beer first, but the thing that most appeals to me about the Moon Under Water is what people call its ‘atmosphere’. To begin with, its whole architecture and fittings are uncompromisingly Victorian. It has no glass-topped tables or other modern miseries, and, on the other hand, no sham roof-beams, ingle-nooks or plastic panels masquerading as oak. The grained woodwork, the ornamental mirrors behind the bar, the cast-iron fireplaces, the florid ceiling stained dark yellow by tobacco-smoke, the stuffed bull’s head over the mantelpiece — everything has the solid, comfortable ugliness of the nineteenth century. In winter there is generally a good fire burning in at least two of the bars, and the Victorian lay-out of the place gives one plenty of elbow-room. There are a public bar, a saloon bar, a ladies’ bar, a bottle-and-jug for those who are too bashful to buy their supper beer publicly, and, upstairs, a dining-room. Games are only played in the public, so that in the other bars you can walk about without constantly ducking to avoid flying dart In the Moon Under Water it is always quiet enough to talk. The house possesses neither a radio nor a piano, and even on Christmas Eve and such occasions the singing that happens is of a decorous kin The barmaids know most of their customers by name, and take a personal interest in everyone. They are all middle-aged women—two of them have their hair dyed in quite surprising shades—and they call everyone ‘dear,’ irrespective of age or sex. (‘Dear,’ not ‘Ducky’: pubs where the barmaid calls you ‘ducky’ always have a disagreeable raffish atmosphere Unlike most pubs, the Moon Under Water sells tobacco as well as cigarettes, and it also sells aspirins and stamps, and is obliging about letting you use the telephon You cannot get dinner at the Moon Under Water, but there is always the snack counter where you can get liver-sausage sandwiches, mussels (a speciality of the house), cheese, pickles and those large biscuits with caraway seeds in them which only seem to exist in public-house Upstairs, six days a week, you can get a good, solid lunch—for example, a cut off the joint, two vegetables and boiled jam roll—for about three shilling The special pleasure of this lunch is that you can have draught stout with it. I doubt whether as many as 10 per cent of London pubs serve draught stout, but the Moon Under Water is one of them. It is a soft, creamy sort of stout, and it goes better in a pewter po They are particular about their drinking vessels at the Moon Under Water, and never, for example, make the mistake of serving a pint of beer in a handleless glass. Apart from glass and pewter mugs, they have some of those pleasant strawberry-pink china ones which are now seldom seen in London. China mugs went out about 30 years ago, because most people like their drink to be transparent, but in my opinion beer tastes better out of chin The great surprise of the Moon Under Water is its garden. You go through a narrow passage leading out of the saloon, and find yourself in a fairly large garden with plane trees, under which there are little green tables with iron chairs round them. Up at one end of the garden there are swings and a chute for the childre On summer evenings there are family parties, and you sit under the plane trees having beer or draught cider to the tune of delighted squeals from children going down the chute. The prams with the younger children are parked near the gat Many as are the virtues of the Moon Under Water, I think that the garden is its best feature, because it allows whole families to go there instead of Mum having to stay at home and mind the baby while Dad goes out alon And though, strictly speaking, they are only allowed in the garden, the children tend to seep into the pub and even to fetch drinks for their parents. This, I believe, is against the law, but it is a law that deserves to be broken, for it is the puritanical nonsense of excluding children—and therefore, to some extent, women—from pubs that has turned these places into mere boozing-shops instead of the family gathering-places that they ought to b The Moon Under Water is my ideal of what a pub should be—at any rate, in the London area. (The qualities one expects of a country pub are slightly different But now is the time to reveal something which the discerning and disillusioned reader will probably have guessed already. There is no such place as the Moon Under Wate That is to say, there may well be a pub of that name, but I don’t know of it, nor do I know any pub with just that combination of qualitie I know pubs where the beer is good but you can’t get meals, others where you can get meals but which are noisy and crowded, and others which are quiet but where the beer is generally sour. As for gardens, offhand I can only think of three London pubs that possess the But, to be fair, I do know of a few pubs that almost come up to the Moon Under Water. I have mentioned above ten qualities that the perfect pub should have and I know one pub that has eight of them. Even there, however, there is no draught stout, and no china mug And if anyone knows of a pub that has draught stout, open fires, cheap meals, a garden, motherly barmaids and no radio, I should be glad to hear of it, even though its name were something as prosaic as the Red Lion or the Railway Arms."


		var locale = "en_us;";
		
		// Send to SpritzEngine to translate
		SpritzClient.spritzify(text, locale, onSpritzifySuccess, onSpritzifyError);
	};
	
	
	// Customized options
	var customOptions = {
            placeholderText:    { startText: '' },
			redicleWidth: 	    434,	// Specify Redicle width
			redicleHeight: 	    76		// Specify Redicle height
	};

	var init = function() {
		
		// $("#clear").on("click", clearTextClick);
		// $("#fill").on("click", fillTextClick);
		$("#startSpritz").on("click", onStartSpritzClick);			
		 
 		// Construct a SpritzController passing the customization options
 		spritzController = new SPRITZ.spritzinc.SpritzerController(customOptions);
 		
 		// Attach the controller's container to this page's "spritzer" container
 		spritzController.attach($("#spritzer"));
	};
	
	
	$(document).ready(function() {
		init();
	});

	
})();
