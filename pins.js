l('logButton').innerHTML=l('logButton').innerHTML.replace('Info','Pins');
let oldLog = Game.updateLog;
Game.updateLog=`
<div class="selectable">
	<div class="section">
		<div class="title">The Pins™</div>
	</div>
	<div class="subsection">
		<div class="listing">
			This is a collection of the best resources and guides created by members of this community. There is also the <a target="blank" href="https://cookieclicker.wiki.gg/">cookie clicker wiki</a> which has some other information which may be useful.
		</div><br>
		<div class="listing">
			When people tell you to check pins, or check pin x, this is what they mean.
		</div><br>
		<div class="listing">
			Original pins are by _nyan.cat_, contact her for any changes to the pins<br>
			Ingame pin version by twoslimes, contact me for any changes to the ingame pins
		</div><br>
		<div class="listing">
			All discord links are from the <a target="blank" href="https://discord.com/invite/cookie">Dashnet Forums discord</a>.
		</div>
	</div>
	<div class="subsection">
		<div class="title">Section 1: Beginner Guides</div>
		<div class="listing">
			1 - Ascension Guide<br>
			<a target="blank" href="https://pastebin.com/8W6i6PFr">https://pastebin.com/8W6i6PFr</a>
		</div><br>
		<div class="listing">
			2 - Sugar Lump Spending Guide<br>
			<a target="blank" href="https://discord.com/channels/412363381891137536/412371320232345624/704397331038076958">https://discord.com/channels/412363381891137536/412371320232345624/704397331038076958</a>
		</div><br>
		<div class="listing">
			3 - Combo Guide<br>
			<a target="blank" href="https://tinyurl.com/CookieCombos">https://tinyurl.com/CookieCombos</a>
		</div><br>
		<div class="listing">
			4 - Pantheon <small>(temple minigame)</small> Guide<br>
			<a target="blank" href="https://pastebin.com/j0fnK78B">https://pastebin.com/j0fnK78B</a>
		</div><br>
		<div class="listing">
			5 - Garden <small>(farm minigame)</small> Guide<br>
			<a target="blank" href="https://tinyurl.com/CookieGarden">https://tinyurl.com/CookieGarden</a>
		</div><br>
		<div class="listing">
			6 - Stock Market <small>(bank minigame)</small> Guide<br>
			<a target="blank" href="https://pastebin.com/FLTYJjWB">https://pastebin.com/FLTYJjWB</a>
		</div><br>
		<div class="listing">
			7 - Grandmapocalypse Guide<br>
			<a target="blank" href="https://pastebin.com/2Rv9Pdv3">https://pastebin.com/2Rv9Pdv3</a>
		</div><br>
		<div class="listing">
			8 - Dragon/Krumblor/Aura Guide<br>
			<a target="blank" href="https://pastebin.com/LySAwFKz">https://pastebin.com/LySAwFKz</a>
		</div><br>
		<div class="listing">
			9 - Season Switcher Guide<br>
			<a target="blank" href="https://pastebin.com/cqnYhcmt">https://pastebin.com/cqnYhcmt</a>
		</div>
	</div>
	<div class="subsection">
		<div class="title">Section 2: General Info</div>
		<div class="listing">
			10 - Community Terms<br>
			<a target="blank" href="https://tinyurl.com/CookieDict">https://tinyurl.com/CookieDict</a>
		</div><br>
		<div class="listing">
			11 - What Heavenly Upgrades Do<br>
			<a target="blank" href="https://pastebin.com/anF78Jmy">https://pastebin.com/anF78Jmy</a>
		</div><br>
		<div class="listing">
			12 - Permaslots Guide<br>
			<a target="blank" href="https://pastebin.com/qgT3GepD">https://pastebin.com/qgT3GepD</a>
		</div><br>
		<div class="listing">
			13 - Easy/Miscellaneous Achievements<br>
			<a target="blank" href="https://tinyurl.com/CookieMiscCheevos">https://tinyurl.com/CookieMiscCheevos</a>
		</div><br>
		<div class="listing">
			14 - Early to Endgame Definition<br>
			<a target="blank" href="https://discord.com/channels/412363381891137536/412371320232345624/1107546121372438578">https://discord.com/channels/412363381891137536/412371320232345624/1107546121372438578</a>
		</div><br>
		<div class="listing">
			15 - Leaderboards and Leaderboard Rules<br>
			<a target="blank" href="https://discord.com/channels/412363381891137536/412371320232345624/1295463511052386374">https://discord.com/channels/412363381891137536/412371320232345624/1295463511052386374</a>
		</div><br>
		<div class="listing">
			16 - Sugar Lump Info<br>
			<a target="blank" href="https://discord.com/channels/412363381891137536/412371320232345624/1063867888563404920">https://discord.com/channels/412363381891137536/412371320232345624/1063867888563404920</a>
		</div><br>
		<div class="listing">
			17 - Sugar Lump Farming Guide<br>
			<a target="blank" href="https://discord.com/channels/412363381891137536/412371320232345624/1263580128647053323">https://discord.com/channels/412363381891137536/412371320232345624/1263580128647053323</a>
		</div><br>
		<div class="listing">
			18 - Natural Golden Cookie Odds Calculator<br>
			<a target="blank" href="https://lookas123.github.io/Golden-Cookie-calculator/">https://lookas123.github.io/Golden-Cookie-calculator/</a>
		</div><br>
		<div class="listing">
			19 - Old Versions<br>
			<a target="blank" href="https://tinyurl.com/CookieOldVersions">https://tinyurl.com/CookieOldVersions</a>
		</div><br>
		<div class="listing">
			20 - Building/Upgrade Calculator<br>
			<a target="blank" href="https://coderpatsy.bitbucket.io/cookies/cookies.html">https://coderpatsy.bitbucket.io/cookies/cookies.html</a>
		</div><br>
		<div class="listing">
			21 - Save Editor<br>
			<a target="blank" href="https://coderpatsy.bitbucket.io/cookies/editor.html">https://coderpatsy.bitbucket.io/cookies/editor.html</a>
		</div><br>
		<div class="listing">
			22 - RNG Manipulation Guide<br>
			<a target="blank" href="https://tinyurl.com/CookieRNGManipulation">https://tinyurl.com/CookieRNGManipulation</a>
		</div><br>
	</div>
	<div class="subsection">
		<div class="title">Section 3: Advanced Guides and Info</div>
		
		<div class="subsection update small">
		<div class="title">Combos</div>
		
		<div class="listing">
			23 - Advanced Combo Guide<br>
			<a target="blank" href="https://pastebin.com/dbVyTDCi">https://pastebin.com/dbVyTDCi</a>
		</div><br>
		<div class="listing">
			24 - Endgame Combo Guide<br>
			<a target="blank" href="https://tinyurl.com/CookieEndgameCombo">https://tinyurl.com/CookieEndgameCombo</a>
		</div><br>
		<div class="listing">
			25 - Scum Combo Guide<br>
			<a target="blank" href="https://tinyurl.com/CookieScumCombo">https://tinyurl.com/CookieScumCombo</a>
		</div><br>
		<div class="listing">
			26 - Combo Practice Mod<br>
			<a target="blank" href="https://discord.com/channels/412363381891137536/1110041095196397618/1196557490737905705">https://discord.com/channels/412363381891137536/1110041095196397618/1196557490737905705</a>
		</div>
		
		</div>
		<div class="subsection update small">
		<div class="title">Grimoire</div>
		
		<div class="listing">
			27 - Dualcasting/Doublecasting Guide<br>
			<a target="blank" href="https://discord.com/channels/412363381891137536/412371320232345624/737314638072512526">https://discord.com/channels/412363381891137536/412371320232345624/737314638072512526</a>
		</div><br>
		<div class="listing">
			28 - Scrying Guide<br>
			<a target="blank" href="https://tinyurl.com/CookieScrying">https://tinyurl.com/CookieScrying</a>
		</div><br>
		<div class="listing">
			29 - GFD Skip Skip Guide<br>
			<a target="blank" href="https://tinyurl.com/CookieGFDSpellSkip">https://tinyurl.com/CookieGFDSpellSkip</a>
		</div><br>
		<div class="listing">
			30 - Finnless Grimoire Guide<br>
			<a target="blank" href="https://tinyurl.com/CookieFinnlessGrimoire">https://tinyurl.com/CookieFinnlessGrimoire</a>
		</div><br>
		<div class="listing">
			31 - Grimoire Calc<br>
			<a target="blank" href="https://lookas123.github.io/CCGrimoireCalculator/">https://lookas123.github.io/CCGrimoireCalculator/</a>
		</div><br>
		<div class="listing">
			32 - FtHoF Planner<br>
			<a target="blank" href="https://joseph3079.github.io/FtHoF-Planner-v5/">https://joseph3079.github.io/FtHoF-Planner-v5/</a>
		</div><br>
		<div class="listing">
			33 - FtHoF Odds<br>
			<a target="blank" href="https://discord.com/channels/412363381891137536/412371320232345624/643552383313510410">https://discord.com/channels/412363381891137536/412371320232345624/643552383313510410</a>
		</div>
		
		</div>
		<div class="subsection update small">
		<div class="title">Garden</div>
		
		<div class="listing">
			34 - Garden Calculator<br>
			<a target="blank" href="https://cursedsliver.github.io/Garden-calc-infinite-expansion/">https://cursedsliver.github.io/Garden-calc-infinite-expansion/</a>
		</div><br>
		<div class="listing">
			35 - Garden Scumming Guide<br>
			<a target="blank" href="https://imgur.com/a/YZTL2ll">https://imgur.com/a/YZTL2ll</a>
		</div>
		
		</div>
		<div class="subsection update small">
		<div class="title">Achievements</div>
		
		<div class="listing">
			36 - Speed Baking 3 Guide<br>
			<a target="blank" href="https://tinyurl.com/CookieSB3">https://tinyurl.com/CookieSB3</a>
		</div><br>
		<div class="listing">
			37 - Golden Cookie Click Farming Info<br>
			<a target="blank" href="https://discord.com/channels/412363381891137536/412371320232345624/1284950757652693055">https://discord.com/channels/412363381891137536/412371320232345624/1284950757652693055</a>
		</div><br>
		<div class="listing">
			38 - Endless Cycle Guide<br>
			<a target="blank" href="https://pastebin.com/rmPgwu4Y">https://pastebin.com/rmPgwu4Y</a>
		</div>
		</div><br>
		<div class="listing">
			Pins are up to date as of 10/03/2025 <small>somehow managed to update the mod after exactly a month</small>
		</div>
	</div>
</div>
`+oldLog;
