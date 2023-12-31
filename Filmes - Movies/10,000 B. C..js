async function enviarScript(scriptText){
	const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)
	
	if(!textarea) throw new Error("Não há uma conversa aberta")
	
	for(const line of lines){
		console.log(line)
	
		textarea.focus();
		document.execCommand('insertText', false, line);
		textarea.dispatchEvent(new Event('change', {bubbles: true}));
	
		setTimeout(() => {
			(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
		}, 100);
		
		if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
	}
	
	return lines.length;
}

enviarScript(`

10,000 B.C.
by
Roland Emmerich & Harald Kloser
Revisions by
Roland Emmerich & Harald Kloser & Matthew Sand
Revisions by
John Orloff
Current Revisions by
Robert Rodat
1/23/06
file: TT 1.23.06
A BLACK SCREEN
The sound of wind --
SLOW FADE UP:
EXT. HIGH VALLEY - DUSK *
We fly over softly swaying high grass. As far as the eye can
see. A NARRATOR speaks, his voice weathered and wise.
NARRATOR (V.O.)
It was already the last moon and on
many days the air smelled of the
white rain...
Huge black boulders. Fearsome mountain peaks covered by
eternal snow. The land is beautiful, primal.
NARRATOR (V.O.) (CONT’D)
But then the Mannak came later and
later, and we feared that one day
he would bring us his blessings no
longer...
Far in the distance we can make out a human settlement. A
dozen huts built from mammoth bones and hide.
The settlement seems deserted, but, as we move closer, we see
there’s a fire flickering inside the biggest of the huts.
NARRATOR (V.O.) (CONT’D)
It was the time when the world of
the Yagahl was coming to an end and
the Ancient Fathers spoke to Old
Mother, our dreamer, about the fate
of our people...
We hear CHANTING. Wild. Frenzied. The raspy voice of an old
woman getting answered, again and again, by the shrill chorus
of many other voices.
SMASH CUT TO:
EXT. OLD MOTHER’S HUT - NIGHT
Arms and hands--
Stretching out, shaking to the rhythm of the music, giving
strength to OLD MOTHER.
She is the shaman of the tribe. Her ancient face is painted
bright blue. She stands in a circle, formed by her people.
The whole tribe is taking part in the ceremony. They all
eagerly watch as their spiritual leader gets herself deeper
and deeper into her trance.
Between the moving tribe members, we make out a handsome boy,
about ten years old. He is YOUNG D’LEH. There is something
very special about him, perhaps the intelligence in his eyes.
Instead of watching Old Mother’s ritual, D'Leh stares at a
girl sitting across from him. She’s about his age, and even
more beautiful than he. She is YOUNG EVOLET. She looks at
D'Leh through the intervening people, revealing stunning
bright green eyes.
D'Leh smiles at her. Then he looks up to his FATHER, who has
the same features as his son. D'Leh’s father wears a
distinctive ivory bracelet.
TIC’TIC, about the same age as D'Leh’s Father, stands nearby,
listening intently to Old Mother. Tic'Tic is a hunter,
thoughtful, formidable, though slightly less so than D'Leh’s
father.
He also stares at Old Mother, whose shaking builds and builds
until...
Abruptly and from unknown forces, she is thrown backwards, at
least a dozen feet, collapsing into the open arms of her
people, where she starts to whisper in a child-like voice.
NARRATOR (V.O.)
In her dream she saw the Mannak
roam our valley in numbers beyond
counting. And then she saw him
wander to the Great Mountains
forever...
All the older people move forward and close in a tight circle
around her.
NARRATOR (V.O.) (CONT’D)
But we shall not fear. A great
hunter will arise, a warrior to
whom the daughter of her daughter
will bestow many children. And he
will lead our people to a land
where two suns rise with the
morning dawn. And there, the
Yagahl will hunger no more.
2.
We hold on D’Leh’s father and Tic’Tic, who look at each
other...
NARRATOR (V.O.) (CONT’D)
And Old Mother shared her dream
with the elders of our people.
CUT TO:
EXT. VALLEY - NIGHT
Long grass sways in a soft breeze. A full moon casts shadows.
A solitary figure, a young woman, hurries through the grass,
searching. She stops before a ridge. We see her green eyes,
and realize she is Evolet, the little girl from the ceremony,
now a beautiful young woman of seventeen.
SUPER and TITLE: 10,000 B.C.
She sees two figures sitting on a ridge, silhouetted by the
pale light of the moon. She moves quickly toward them.
EXT. LOW RIDGE LOOKING OVER VALLEY - NIGHT *
D'LEH (18) sits on a rock, carving a small piece of ivory
with a sharp-edged stone tool. We realize from his face that
he is the boy from the ceremony, now grown. He’s working on a
small, bead-sized mammoth, which is nearly finished.
BAKU, 12, bright, impatient, sits next to D'Leh, playing with
a stick, watching D’Leh.
BAKU
When will the Mannaks come?
D’Leh continues carving.
D’LEH
When they want.
BAKU
Why do they come later and later?
D’LEH
Why don’t you ask them when you see
them?
D'Leh finishes the carving. He pulls out a necklace made of a
string of similar small mammoths, and ties on the new piece,
completing the necklace.
3.
BAKU
When will Tic’Tic let me join the
hunt?
D’LEH
When you stop asking so many
questions.
They hear FOOTSTEPS. D’Leh hides the necklace, and turns to
see Evolet coming their way. D'Leh sees that she’s troubled.
She puts down a small food basket near Baku.
EVOLET
Hungry, little brother?
Baku digs in, MUMBLING his thanks through his stuffed mouth.
Evolet gives D'Leh a look, then walks off. D'Leh rises and
follows her, speaking back to Baku, as he goes.
D’LEH
Keep a good watch, eh?
Baku, MUMBLES, “yes,” through the food in his mouth.
EXT. BEHIND THE RIDGE - NIGHT *
Evolet walks through the tall grass with D'Leh following, a
few steps behind. He savors the moonlit view of her. She
feels his eyes, but has something else on her mind, something
urgent.
She stops at a spot, far enough from Baku to afford them some
privacy.
D’LEH
What’s wrong?
EVOLET
Old Mother spoke with Tic’Tic in
our hut today.
D’LEH
Tic’Tic came to your hut?
EVOLET
Old Mother told him he should not
be the one to slay the Mannak when
he comes.
D'Leh looks bewildered.
4.
EVOLET (CONT’D)
She wants Ka’ren to prove himself,
so he can claim me. She thinks him
the bravest of the young hunters,
and she wants me to be his.
D’LEH
(shocked)
Ka’ren? He doesn’t care for you,
he thinks only of the hunt.
EVOLET
He considers me a worthy woman for
a great hunter.
EXT. RIDGE - NIGHT *
Baku is still wolfing down the food from Evolet’s basket. He
doesn’t realize that behind him a giant shadow has appeared,
blotting out the stars.
The shadow grows into a silhouette, and we slowly realize it
has the shape of a mammoth.
We hear a DEEP and RASPY BREATHING. Baku turns and nearly
chokes on his food.
The mammoth startles and lifts up his tusk. An ear shattering
ROAR...
IN THE TALL GRASS
D'Leh and Evolet turn at the ROAR. D'Leh runs back toward the
ridge, Evolet following.
ON THE RIDGE
Baku stands frozen in fear, before the great mammoth. D'Leh
runs past, to the edge of the ridge. By the moonlight, he
sees:
A MASSIVE HERD OF MAMMOTHS
More than a hundred animals. The Mannaks have arrived!
D'Leh looks at Evolet and Baku. They all turn and start to
run down the slope toward the village.
EXT. GRASSLAND - NIGHT *
D'Leh, Evolet, and Baku run. D'Leh shouts at Baku:
5.
D’LEH
Go tell Tic’Tic!
BAKU
Why me?
D’LEH
Because I say it!
Evolet looks at her little brother sharply. Baku splits off
and runs up a rocky ridge.
EXT. TIC'TIC’S HUT - HIGH RIDGE - EARLY DAWN *
The sky is turning a dark blue. Baku reaches Tic'Tic’s hut,
which is high above the village. Mammoth tusks line the
entrance, a forbidding sight for Baku, who slows, and
reluctantly enters the hut.
INT. TIC'TIC’S HUT - EARLY DAWN *
Darkness. Baku doesn’t dare breathe.
The boy looks around, trying to make out things. It seems the
hut is empty. Baku sees something that captures his attention
-- a distinctive, ivory-handled WHITE SPEAR.
Baku is drawn to the spear, unable to keep himself from
looking at it more closely. He starts to reach out, to touch
it, when a SOUND behind him makes him spin.
Tic'Tic appears right behind Baku. The old man’s face is
stern, his wiry body already painted for the hunt.
BAKU
The...the Mannaks are here.
Tic'Tic knows -- he’s already painted and prepared.
BAKU (CONT’D)
The whole valley is full of them.
There are so many.
This has a profound impact on Tic'Tic. He passes the boy, and
grabs the White Spear.
EXT. MAMMOTH HUNTER’S CAMP - DAWN *
The rising sun is still below the mountains. The hunters
prepare. Checking their weapons; gathering their gear;
6.
putting on body paint; practicing throwing their spears at a
target made of mammoth bones and hide.
There are a dozen hunters. D'Leh is somewhat separate from
the others. Among the young hunters are:
KA’REN, about D'Leh’s age, very imposing-looking, athletic.
MOHA, somewhat smaller, cocky.
LU’KIBU, same age, a follower.
All are focused and intent -- this is serious business.
Ka'ren grabs some spears and steps over to the target. He
waits as two other hunters throw. Their throws are good, but
not great.
Ka'ren steps up and prepares to throw. Most of the hunters
turn to watch. D'Leh pointedly does not.
Ka'ren lets loose with a stunning throw -- the spearhead
slams into the dead center of the target, sinking much deeper
than any of the other throws.
D'Leh glances over. Moha and Lu'Kibu look at D'Leh, and
exchange a look.
MOHA
I can see it in his eyes.
LU’KIBU
So can I, it’s fear.
They laugh lightly, coolly derisive.
LU’KIBU (CONT’D)
He’s afraid Ka’ren will win his
woman today.
MOHA
Perhaps he’ll run away, like his
father.
D'Leh bristles. Ka'ren looks over, and speaks sharply, with
authority.
KA’REN
Moha, Lu’Kibu, quiet. Your spears.
Chastised, but still sharing a smile, they turn their
attention to their spears, checking the bindings that hold
the heads to the shafts.
7.
Old Mother and Evolet arrive. Evolet hangs back with some of
the other young women.
D'Leh and Evolet see each other. On opposite sides of the
gathered tribe, they lock eyes through the intervening
people.
Old Mother steps among the hunters. She stops in front of
Ka'ren, who is tying a SMALL WOODEN BOWL to his waist. Old
Mother MURMURS A BLESSING, which she finishes off by SPITTING
on Ka'ren.
Ka'ren expected it, but it’s still a bit off-putting. He
keeps himself from wiping off her spittle, and goes back to
preparing his weapons.
Old Mother moves on, blessing each of the hunters in turn,
with the murmuring, and the spitting. One after another they
submit, all somewhat reluctantly, to her ministrations.
Tic'Tic walks into the camp, followed by Baku. Tic'Tic blows
into a carved ivory hunting whistle, hanging from his neck.
Old Mother stops chanting.
Tic'Tic walks into the middle of the circle holding the White
Spear. All eyes are on Tic'Tic.
TIC’TIC
The Mannak is great, and we are
small, but yet, we kill him. We
kill him because we hunt together,
as one.
His eyes wander across the faces of the hunters. He stops at
D'Leh’s.
Tic'Tic holds the White Spear.
TIC’TIC (CONT’D)
Today, I will not pierce the heart
of the Mannak. One of you will
drive the final blow...
Tic'Tic looks at all the hunters, and then, again, at D'Leh.
TIC’TIC (CONT’D)
One of you will claim the White
Spear...
Several of the young hunters glance at Evolet. She looks back
only at D'Leh. Ka’ren is not among the hunters who glance at
Evolet.
8.
TIC’TIC (CONT’D)
May the Ancient Fathers, and the
spirit of the Mannak, choose the
best of you.
He rams the White Spear in the middle of their circle.
Tic'Tic turns and strides off, with the hunters close behind.
The other members of the tribe follow, to see them off.
D'Leh LAGS WITH Evolet. D'Leh takes out the necklace he
carved, and hands it to her.
D’LEH
I worked on this for many, many
nights...
She looks at the necklace, deeply moved.
D’LEH (CONT’D)
You are here...
(he touches his chest)
No matter who kills the Mannak, you
will always be here.
She’s overwhelmed. He gives her a last smile, then turns, and
hurries after the hunting party. Evolet looks after him,
holding the necklace tightly.
EXT. GRASSLAND BY RIM - DAY *
The sun peeks over the mountains. Shapes appear between the
high grass, which gently sways in the wind.
Tic'Tic is in the lead. The other hunters follow, crawling up
the incline, hidden in the grass by their body paint.
The CAMERA lifts over the rim and reveals a stunning image--
A HERD OF MAMMOTHS, GRAZING ON AN OPEN PLAIN
More than a hundred of them. The hunters share anxious looks.
None of them has ever seen a herd this big.
We pan over the herd, passing a giant female nursing her
baby.
After sizing up the situation, Tic'Tic turns to the others
and gives a hand signal. All of the other hunters follow his
lead, as he moves towards the herd.
D'Leh immediately starts to move faster than the others,
getting a bit ahead of the group.
9.
Tic'Tic makes a CLICKING INSECT SOUND, getting D'Leh’s
attention. Tic'Tic motions for D'Leh to ease back, to stay
tighter with the advancing group.
D’Leh reluctantly slows, waiting for the others, joining with
them, then pacing himself to stay with them.
The hunters advance on the herd. Tic'Tic leads. The animals
pick up their scent and begin to stir.
Tic'Tic signals the hunters. They stop in a long, curving
row.
Tic'Tic continues, alone, moving deeper and deeper into the
herd. He passes the female mammoth and her baby, very close.
The baby eyes him curiously.
Tic'Tic zeros in on a giant mammoth, the LEAD BULL. Tic'Tic
carefully approaches. Sensing movement, the lead bull turns
menacingly towards the approaching Tic'Tic.
The other mammoths in the herd react to the lead bull’s
movement, and they turn as well. A pause, then they begin
grazing again.
Tic'Tic creeps closer still.
The lead bull stops eating. His trunk sniffs the air and the
animal makes a RUMBLING sound. The lead bull looks down
towards Tic'Tic, trying to spot him with near-sighted eyes.
D’Leh eases forward a bit. Ka’ren, and some of the other
hunters, note D'Leh’s movement. They’re not pleased.
Suddenly, directly in front of the lead bull, Tic'Tic leaps
to his feet, waving his arms, SHOUTING wildly.
The lead bull’s feet tear up the ground. His massive head
whips back and forth.
Tic'Tic stands his ground. He goes closer to the lead bull,
and thrusts his spear at the animal’s face.
THE MAMMOTH CHARGES. Tic'Tic ROLLS out of the way, barely
avoiding being trampled.
Tic'Tic BLOWS HIS HUNTING WHISTLE.
At that signal, D'Leh and the other hunters leap to their
feet, waving their arms and SHOUTING.
The rest of the herd, spooked and furious, SNORTS, TRUMPETS,
some rearing up on their hind legs.
10.
The herd charges after the lead bull with a sound like
rolling thunder.
Their stampede leads them into a valley. Far in the distance
we make out a rock formation, a wide opening, which we later
learn will lead into an increasingly narrow canyon.
Tic'Tic joins the other hunters, running, giving them hand
signals, deploying them. The hunters form themselves into a
crescent, behind and to the sides of the running mammoths,
herding them, directing the big animals towards the canyon
opening.
D'Leh runs alongside the herd, point man of one side of the
crescent. D'Leh, focused only on the mammoths, and not on the
other hunters, runs faster, putting distance between himself
and the others.
Tic'Tic sees D'Leh and CALLS OUT angrily to him, motioning
him back with the group, but the thunderous sounds of the
mammoths’ stampede drowns out Tic'Tic’s voice.
Ka'ren looks angrily ahead at D’Leh. Moha and Lu'Kibu see
D'Leh ahead of the group, and exchange an angry look.
Picking up speed, D’Leh gets further ahead of the other
hunters.
D'Leh is now running ahead of some of the trailing mammoths,
and some of those animals veer to the outside of D’Leh,
driving him in among the main herd.
Tic'Tic sees this happen. His anger grows, but there’s
nothing he can do about it.
We see big boulders looming ahead.
With D'Leh running among them, two of the mammoths in the
center of the herd are spooked and start to veer off, away
from the mouth of the canyon.
Other mammoths in the herd respond, and start to veer away
from the canyon mouth as well.
Tic'Tic sees the herd starting to change direction because of
D'Leh. Tic'Tic motions to Ka'ren, Moha, and Lu’Kibu, who
tighten up on their side of the herd, yelling, driving the
herd back toward the canyon mouth.
The lead bull has passed the boulders, and now every animal
has to choose its route.
11.
D'Leh runs between two massive animals who want to squeeze
between two of the giant stone boulders. They scrape the rock
and their bodies crash together.
D'Leh’s only chance is to duck down and dive under the body
of one of the stampeding mammoths. For a couple of endless
seconds he runs under the animal.
But when the mammoth jumps over a smaller rock, which is too
high for D'Leh, he has no choice other than to jump aside,
tumbling to the ground, where he’s nearly crushed by the feet
of the other mammoths.
Ka'ren, Moha, and Lu'Kibu shoot him harsh looks as they pass.
D'Leh scrambles up, but he has lost his lead.
Tic'Tic looks over, angry, but relieved that D'Leh is alive.
They run on, now with D'Leh behind the other hunters.
EXT. CANYON - DAY *
Several elder hunters pull on two ropes. The ropes are
attached to two heavy stones which are dragged up to the top
of finger-like rocks which form a bottleneck in the canyon..
Baku, nearby, watches. He HEARS THE HERD APPROACHING, and he
scrambles up the sloping side of the canyon, and sees the
stampeding animals approaching.
BAKU
They are coming! They are coming!
The old men double their effort.
EXT. MOUTH OF THE CANYON
The lead bull has reached the mouth of the canyon, which is
wide at the opening but narrows more and more towards the
other end.
The mammoths’s bodies start to scrape along the jutting walls
of the narrowing canyon.
Further ahead, the old hunters await the herd with growing
anticipation. They crouch on top of the two stone fingers.
They look down on the lead bull, which thunders past. Then
group after group of animals does the same, raising huge
clouds of dust.
12.
Baku stands on his lookout point, and watches the spectacle
of the thundering herd and the hunters driving them into the
canyon.
The clouds of dust make it difficult for him to see and he
strains to make out the end of the herd. When he is finally
able to see that the last mammoth has passed, he starts to
wave his arms furiously.
This signals the old hunters that their prey is approaching
the trap.
We see the LAST BULL racing towards the bottleneck. The last
bull is massive, nearly as formidable as the lead bull.
At Baku’s signal, the old hunters push down the two massive
rocks on each side of the stone fingers.
A heavy net, which was buried in the ground, pulls up in
front of the bull and catches him in full stride. The animal
screams out.
The ropes stretch as the net barely contains the speed of the
raging animal. For extra reinforcement the net is secured by
other ropes which are also attached to heavy stones; they too
now get dragged over the ground.
The bull slows down.
We now discover two other old hunters hidden behind a rock,
yanking another rope up off the ground. It catches the legs
of the bull, and he finally goes down with a terrifying roar.
The hunters run in, with Ka'ren in the lead. But D’Leh is
still far behind. The mammoth struggles, on its side,
entangled in the net.
KA’REN GOES IN FIRST, ready to take the day’s glory. His
spear raised, ready to throw, Ka'ren moves in, boldly, but
patiently, waiting for the perfect moment...
Ka'ren climbs onto a boulder to have a better line-of-sight.
The struggling mammoth is not an easy target. His flailing
legs are in the way of his heart.
But then Ka'ren THROWS...
His SPEAR hits the chest of the thrashing animal. A good
throw, but because of the flailing legs it was deflected. The
wound angers the beast more than debilitating it.
All the other young hunters now move in. It is their chance
to throw their spears.
13.
When D'Leh finally arrives, he sees Lu’Kibu and Moha throw
their spears, but their throws don’t do much harm.
Now D'Leh moves in. It is his chance.
But, as D'Leh prepares to throw, Baku screams a warning.
BAKU
Watch out!
D'Leh turns and sees Baku waving his arms in panic. Then
everybody sees what Baku has seen:
The giant FEMALE MAMMOTH with her BABY is stampeding towards
them!
D'Leh and the other hunters quickly jump aside to avoid being
trampled.
Storming through the bottleneck of the canyon, the mother
animal crashes into the ropes and the net that is holding
down the bull.
The ropes rip away from the rocks!
The baby mammoth follows and nearly gets caught in the torn
ropes. As the baby SQUEALS, the mother lets out a terrifying
ROAR and the mother and baby run after the herd until they
are out of sight.
The bull struggles to get back on its feet.
D’Leh moves in on the madly thrashing mammoth, grabs a piece
of the net, and pulls down. It’s a mad, nearly suicidal move,
but one that inspires the other hunters.
Everybody grabs whatever end of the net they can reach. They
delay the mammoth for a moment, but they are no match for the
gigantic animal which manages to get back on its feet and
starts to charge away, dragging all the hunters along as they
cling to the net.
The mammoth runs faster and faster, and one by one the
hunters let go of the net.
After a few hundred yards, only two hunters remain -- D'Leh
and Ka'ren.
Ka'ren and D'Leh look at one another. The mammoth turns, the
net swings behind, and Ka'ren is smashed against the side of
the canyon. He loses his grip on the net, and tumbles to a
stop.
14.
D'Leh hangs on for another moment, then realizes that he,
too, must let go. He lets go of his grip, then sees:
His hand is tightly tangled in the net.
He tries to free his hand, but can’t.
Tic'Tic runs behind, stopping, watching as D'Leh and the
mammoth disappear behind a bend in the canyon.
Moha and Lu'Kibu appear by Tic'Tic’s side.
MOHA
He will get himself killed!
TIC’TIC
Go back, help the others.
Moha and Lu'Kibu run back toward the other hunters. Tic'Tic
runs after D'Leh and the mammoth.
EXT. HIGH PLATEAU - DAY *
The other side of the canyon opens onto a wide expanse of
savannah. The high grass cushions the rough ride as D'Leh is
dragged by the bull.
In the background we see the giant female and her baby join
the rest of the herd, which is still agitated, but has slowed
down.
As the CAMERA MOVES UP, we see that the animal is racing
towards a steep cliff.
D'Leh still struggles to free his hand from the net.
The mammoth passes a rock, the net gets caught in it and
comes loose. D'Leh rolls to a stop.
The mammoth comes to an abrupt halt at the cliff’s edge.
D'Leh is barely conscious. Dazed and hurt, he struggles to
get up.
The bull turns toward him. It REARS and BELLOWS in anger and
pain!
D'Leh continues to try to free himself from the net.
The bull charges, thundering down on him. Unable to free his
hand, D'Leh can only jump out of the way. The bull, unable to
change direction as quickly as D'Leh, barely misses him.
15.
D’Leh rolls to his knees, still struggling. The bull turns
and charges again.
D'Leh finally manages to free his hand. He jumps out of the
way, again narrowly avoiding being killed.
As D'Leh scrambles to his feet, he sees three spears sticking
out of the net. They’re the spears thrown by Ka’ren, Moha,
and Lu'Kibu. D'Leh pulls the spears out as the bull turns
toward him again.
This time, the bull does not charge immediately. D'Leh and
the mammoth stand opposite one another, neither moving. One
man against a mammoth, impossible odds.
ON A HILL IN THE DISTANCE, Tic'Tic runs up to the crest from
the other direction. He sees D'Leh and the mammoth.
THE MAMMOTH ADVANCES SLOWLY, preparing to charge. D'Leh backs
up, holding the three spears, looking around for cover.
Nothing, other than a few flat rocks.
THE MAMMOTH CHARGES...
D'Leh throws the first spear. It is a good throw, but it
misses.
THE MAMMOTH KEEPS COMING...
He throws the second spear, but it hits the mammoth in the
upper leg.
THE MAMMOTH KEEPS COMING...
He backs away, holding the last spear pointed at the mammoth.
Without looking, he backs into a rock outcropping, and the
butt of the spear becomes wedged between two rocks.
THE MAMMOTH IS NEARLY UPON HIM...
D'Leh tries to free the spear, but there is no more time.
At a full run, the mammoth hits the spear, which sinks deep
into its chest, but does not slow the momentum of the heavy
beast.
D'Leh scrambles over some low rocks and dives between two of
them.
The BULL CRASHES DOWN on top of the two rocks, and on D’Leh
who lies between them. There is a strange rush of air, then
SILENCE.
16.
Tic'Tic stands on the hilltop, watching, astonished. He sees
the other hunters run in, getting to the collapsed animal.
Moha and Lu'Kibu are the first to arrive. There is no sign of
life. They cautiously walk around the giant animal.
They hear a strange MOANING. Moha discovers a bloody hand,
sticking out from under the mammoth. He and Lu'Kibu grab it
and pull out D'Leh.
D'Leh is dazed. Other hunters run in, YELLING madly,
celebrating the kill. They surround D'Leh, jostling him in
congratulations.
Baku comes running. He stops and looks at D'Leh with awed
respect.
BAKU
You killed a Mannak alone...
D'Leh looks at the massive animal. It’s still sinking in.
BAKU (CONT’D)
No one has ever done that.
D'Leh looks up to Tic'Tic, who still stands on his ridge,
watching...
Ka'ren observes the scene wordlessly, in silent anguish. Then
Ka’ren draws his knife, steps over to the mammoth, and slices
into the neck of the animal. He catches the still warm blood
in his small wooden bowl. Then he stands and presents it
silently to D'Leh.
D'Leh stares into the bowl for a moment. He looks again up to
Tic'Tic. But Tic'Tic is gone...
Then he drinks down the bowl in one gulp and smiles
exultantly, with teeth red from the mammoth’s blood.
EXT. GRASSLAND - LATER *
D'Leh and Baku carry one of the mammoth’s tusks back toward
the village. D'Leh has regained his composure.
BAKU
One day I will carry the White
Spear.
D'LEH
I am sure you will.
17.
BAKU
And with it, I will choose my own
woman, instead of having Old Mother
choose one for me. She would give
me an ugly one.
D'Leh has to smile at the boy.
EXT. CAMP OF THE MAMMOTH HUNTERS - AFTERNOON *
Evolet stares at the hillside with great anticipation. Her
fingers nervously play with the necklace D'Leh gave her. She
sees two figures appear, but can’t make out who they are.
The other members of the tribe, including Old Mother, step
up, looking with her.
Then, they can see that it’s D'Leh, and that he’s carrying a
mammoth tusk. Evolet starts running towards D’Leh and Baku.
The other tribe members exchange looks of surprise, which
turns quickly into joy at the killing of a mammoth. They race
after Evolet.
Old Mother hangs back, watching thoughtfully, knowingly,
troubled. She sees Evolet and the rest of the tribe surround
D'Leh, celebrating, escorting him toward the village.
EXT. MOUNTAIN PASS - DUSK *
High in the mountains. Patches of snow glow in the fading
light. A white mountain antelope is grazing peacefully.
Suddenly we hear a sharp SWOOSH and we see the animal
falling, an arrow having pierced its neck. The snow slowly
turns red.
EXT. CAMP OF THE MAMMOTH HUNTERS - DUSK *
Old Mother sits alone on a rock outside the mammoth hunter’s
camp. The SOUNDS OF CELEBRATION are heard from the village.
We CLOSE in on her stoic face as she’s staring towards the
mountains with her eyes wide open, when we see--
A trickle of blood starts to run from her nose.
TIC’TIC (O.S.)
Your dream is coming true.
18.
Old Mother doesn’t turn around. She nods. We don’t know if
he’s seen the blood on her face.
OLD MOTHER
I know.
(beat)
It should have been Ka’ren.
TIC’TIC
The Ancient Fathers have spoken.
Neither one of them is happy about it. They hear the SOUNDS
OF CELEBRATION increasing.
EXT. CAMP OF THE MAMMOTH HUNTERS - DUSK
The tribe celebrates. Massive slabs of meat roast over the
fire. Women and children work, happily stripping thin pieces
of mammoth flesh, putting them on drying racks that surround
the fires.
A fermented brew is handed out. Many of the men are drunk,
especially the hunters.
D'Leh sits in the middle of the celebration with Evolet at
his side. She’s overjoyed.
D'Leh takes a drink, then he sees, in the distance, Tic'Tic,
standing on the ridge, near his hut... watching. Evolet
notices.
EVOLET
Why does Tic’Tic not celebrate with
us?
D'Leh looks at Tic'Tic. The solitary, distant figure makes
D'Leh uncomfortable. He takes a drink, and tries to shake off
his uneasiness.
D’LEH
Do not think of Tic’Tic.
She laughs, forgetting Tic'Tic, and hugs D’Leh, who sees
Tic'Tic turn his back on the celebration, and enter his hut.
NEARBY, Baku regales some of the younger children with the
tale of D'Leh’s bravery.
BAKU
...and then, one after another,
they all let go of the net, and
only D’Leh held on...
19.
Evolet hears, and tightens her hold on D’Leh’s arm. D'Leh has
another moment of discomfort as he listens to Baku’s tale.
ON THE OTHER SIDE OF THE GATHERING
Ka'ren sits, drinking, watching. Moha and Lu'Kibu sit down
next to him. They’re drunk. Together they watch D'Leh.
LU’KIBU
Look at him, he nearly drove the
Mannaks away from the nets. He
thinks of none but himself...
MOHA
It’s his blood. The father abandons
us, and the son risks the hunt for
a kill of his own.
LU’KIBU
It should have been one of us...
Ka'ren turns and looks at Lu'Kibu coldly. Lu'Kibu backs down.
LU’KIBU (CONT’D)
It should have been Ka’ren.
Moha and Lu'Kibu wait for Ka'ren to agree. Instead, Ka'ren
snaps at them, speaking quietly but harshly:
KA’REN
He has proven himself as none of us
ever will.
Lu'Kibu and Moha retreat, seeing that Ka'ren is not angry at
D'Leh, but at himself and his fate.
KA’REN (CONT’D)
Do not speak against him again.
Ka'ren takes the bowl of brew from Moha, and drinks it down.
Then he takes Lu'Kibu’s bowl, stands and walks off into the
darkness, unsteadily, to drink alone.
AT THE CENTER OF THE GATHERING
Old Mother steps into the light of the fire.
D'Leh shares a look with Evolet, then he rises and walks over
to Old Mother.
D’LEH
Old Mother, today I killed a
Mannak.
20.
(MORE)
I drove the final blow, piercing
his heart. I claim the White
Spear.
Old Mother looks at him closely.
D’LEH (CONT’D)
And with the White Spear I will
claim Evolet as my woman.
A moment. Old Mother hesitates, not pleased.
She steps over to the White Spear, pulls it from the ground,
and hands it to D'Leh.
She does this in a way, that the whole tribe realizes that
Old Mother is not pleased with the outcome of the hunt.
D'Leh takes the spear and endures the muted congratulations
of the tribe.
But his eyes are on Old Mother, who walks away and sits down
in the shadows by her hut.
A BOWL
Is filled and raised shakily to a mouth--
CUT TO:
EXT. CAMP OF THE MAMMOTH HUNTERS - LATER
Evolet sits beside D’LEH and has to watch how D'Leh gets more
and more drunk. She instinctively feels there is something
wrong with him.
EVOLET
Don’t have too much.
D’LEH
Why not? We have to celebrate.
He takes another deep gulp.
EVOLET
D’leh, what is wrong?
D’LEH
(angry)
Nothing is wrong!
He immediately regrets the aggressive tone of his voice. But
it is already too late.
21.
D’LEH (CONT'D)
EVOLET
Then why do you sound so angry?
He doesn’t know how to answer. He gets up, takes his White
Spear and walks away. Worried and confused, Evolet looks
after him.
EXT. GRASSLAND - NIGHT
D’Leh walks away from the encampment. He stops, and looks
back toward the glow of the fire. Alone, and feeling it, he
looks up at the stars -- the Big Dipper, the North Star.
A moment. Then he turns, and heads toward the ridge on which
we can see Tic'Tic’s hut, separate from the others.
INT. TIC'TIC’S HUT - NIGHT *
Moonlight passes through the gaps of the hut and makes jagged
patterns on the walls and the floor. Tic'Tic is sitting at
the rear of the hut.
He hears footsteps. D'Leh enters his hut, carrying the White
Spear. Tic'Tic waits for him to speak.
D’LEH
I did not drive the spear into the
heart of the Mannak.
TIC’TIC
I know. The Ancient Fathers
played with us today.
(beat)
Why are you here?
Tic'Tic looks at D'Leh closely. D'Leh looks at the White
Spear.
D’LEH
It matters to me what you think.
TIC’TIC
It matters more what you think.
D’LEH
When my father left, no one looked
at me the same, no one treated me
the same, no one trusted me. No
one but you.
22.
TIC’TIC
Your father was impatient, like
you.
D’LEH
And he betrayed our people by
leaving.
TIC’TIC
And you? Would you betray our
people?
D’LEH
Never.
Tic'Tic waits.
D’LEH (CONT’D)
If I give up the White Spear, I
give up Evolet. How can I do that?
She is everything to me.
Tic'Tic considers that.
TIC’TIC
And have you earned her? Have you
made yourself worthy of her?
A long moment. Then D'Leh holds the White Spear out to
Tic'Tic.
D’LEH
Here. Take it back...
Tic'Tic takes the spear.
D’LEH (CONT’D)
...until I have earned it.
D’Leh turns and walks out. Tic'Tic, guardedly pleased,
watches him go.
EXT. D'LEH’S ROCK - NIGHT *
D'Leh walks up to a rock and sits down next to it. The rock
is covered with paintings of animals and human figures.
There are also the silhouettes of two hands, a bigger one and
a smaller one at its side.
D'Leh stares at the smaller hand for a moment, then he puts
his hand over it.
23.
D’LEH
(whispering)
Evolet--
CUT TO:
EXT. HIGH PLATEAU - NIGHT *
Thick fog drifts. Vultures tear at the carcass of the
slaughtered mammoth.
At a SOUND, the vultures startle and pull away from their
meal. Sensing danger, they fly off. CAMERA follows their
flight, coming to an extreme CLOSE UP of a dark, grim-looking
WARRIOR, his black eyes scanning the horizon, in the
direction of the mammoth hunters’ camp.
CUT TO:
EXT. D’LEH’S ROCK - NIGHT
D'Leh sits alone, looking out at the night sky. He turns at a
SOUND, and sees Evolet.
Evolet walks up to him.
EVOLET
What is it?
He doesn’t answer.
EVOLET (CONT’D)
There is something wrong, D’Leh, I
feel it.
D’LEH
I have given the White Spear back
to Tic’Tic.
EVOLET
What?
D’LEH
I cannot claim you as mine...
EVOLET
Why would you do such a thing?
D’LEH
I did not kill the Mannak...
24.
EVOLET
Of course you did. You held onto
the net, you killed it alone...
D’LEH
My hand was caught in the net, I
tried to let go, and the Mannak ran
into my spear. I did nothing...
She starts to cry.
EVOLET
You gave away the White Spear, you
gave away me...
He reaches out to touch her. She tries to pull away, but he
holds her.
D’LEH
I cannot carry the White Spear
unless I earn it, and I cannot have
you unless I am worthy...
EVOLET
We should be one, together...
D’LEH
We will be. When it is right.
She tries to understand, but she can’t. She cries. D’Leh
looks to the starry sky.
D’LEH (CONT’D)
Do you see that light? That one.
He points at the NORTH STAR. She looks through her tears.
D’LEH (CONT’D)
It doesn’t move across the sky like
all the others do. It stays there.
All the other lights go behind the
mountains. But not that one. It
is always in the same place.
EVOLET
How do you know?
D’LEH
Because I’ve watched it-- many
times.
(beat)
That light is-- like me.
25.
She doesn’t quite understand what he means. D'Leh stands up
and looks at her with sad eyes.
D’LEH (CONT'D)
It will always be there, Evolet--
She turns to him.
EVOLET
And yet, you gave me up.
D’LEH
I gave you up, because of what I
feel.
She looks at him with sad eyes, then she turns and leaves.
For a moment we think that D'Leh will stop her, but he lets
her go--
EXT. CAMP OF THE MAMMOTH HUNTERS - DAWN
Everyone except Old Mother is asleep. She sits beside what
remains of the fire. She takes a last sip from her bowl, then
gets to her feet, and heads for her hut, swaying a bit.
INT./EXT. OLD MOTHER’S HUT - DAWN *
Old Mother enters her hut. She looks at the beds in front of
her -- Baku, his mother, and an empty bed.
She hears a SOUND, steps out of her hut and sees something
very strange, something she has seen in a dream. A shape
appears out of the fog. She sinks to her knees, and starts to
chant.
Other members of the tribe startle awake. Stare in disbelief
at:
A DEMON...
To us, it is a man on horseback, but to these people it is
something the likes of which they have never seen. It wears a
strange mask to terrifying effect, and its coverings seem to
meld into the horse’s body, making them one...
This is the WARLORD of the Slave Raiders.
Next to him, more horsemen appear out of the fog. Darkskinned men riding on black horses.
They are the Slave Raiders.
26.
To the tribe, they are a vision out of their most fevered
nightmares.
Moha wakes. He grabs his spear. As he jumps up, a HARD BLOW
from the butt end of the Warlord’s spear drops him...
Lu'Kibu is the next to go for his spear, but he is hit
savagely before he can reach his weapon. A net is thrown over
him.
INSIDE OLD MOTHER’S HUT
Baku’S MOTHER wakes. She looks outside, and sees what is
happening. She ducks back in, and pushes Baku under a stack
of animal skins.
BAKU’S MOTHER
Do not breathe!
He is in darkness for a moment, then he looks out and sees
his mother, a strained look on her face...
Baku watches in disbelief as she gasps and slowly slides to
the ground, blood trickling down her neck.
Behind her he sees a gruesome-looking man with a face
disfigured by scars. He is ONE-EYE, the Warlord’s second in
command.
Baku ducks back under the skins, and watches through a tiny
gap. Trembling with fear, he sees One-Eye search the hut by
torch light. One-Eye comes within inches of Baku’s hiding
place, then he turns and leaves, throwing his burning torch
back into the hut as he goes.
Baku stares at the fire for a few long seconds, transfixed by
the terror of the moment. Then, in a sudden move, he grabs
one of the animal skins and throws it over the torch trying
to suffocate the flames.
CUT TO:
EXT. HILL SIDE PATH - DAWN *
Evolet walks slowly away from D’Leh’s rock, toward the
village. She hears SCREAMING. She runs to a ridge.
Evolet’s face freezes in horror. She sees the mammoth
hunter’s camp in flames! She starts to run toward the camp.
CUT TO:
27.
EXT. CLIFF - DAWN
D'Leh hears the NOISES OF THE ATTACK. He’s much further from
the camp than Evolet was. He steps to the edge of a cliff,
and looks in the direction of the camp.
He sees the glimmer of fire in the fog. He races down the
hill.
EXT. CAMP OF THE MAMMOTH HUNTERS - DAWN *
Evolet runs into the camp. She sees that the slave raiders
have already herded up about a dozen and a half young men and
women.
The slave raiders are binding the captives, tying them
together in pairs, with yokes fashioned out of lashedtogether wooden staffs. The pairs of captives are then roped
in a line to the raiders’ horses.
Evolet can’t believe what she’s seeing. Trying to stay out of
sight, behind the burning huts, Evolet runs toward her
mother’s blazing hut.
THE WARLORD SEES EVOLET
She stares up at this apparition in horror as he gallops
toward her.
Old Mother throws herself between Evolet and the Warlord.
OLD MOTHER
Please! Spare her, great demon--
With a grimace, the Warlord brutally kicks Old Mother in the
face, and the old woman drops to the ground.
CUT TO:
EXT. PATH TO THE CAMP OF THE MAMMOTH HUNTERS - DAWN *
D'Leh rushes downhill. He is now closer to the violence and
sees the first burning hut.
EXT. CAMP OF THE MAMMOTH HUNTERS - DAWN *
D'Leh approaches the perimeter of the camp, and sees the
burning huts, dead bodies, and the slave raiders starting to
move out, their roped captives stumbling behind the raiders’
horses.
28.
D'Leh doesn’t even slow down. He pulls out his stone hand
blade, and, as he passes one of outlying huts, he grabs a
spear from the side of a dead hunter, lying on the ground.
Then, suddenly, just before D'Leh reaches the main camp, he
is TACKLED and brought to the ground.
He raises his blade, about to kill his attacker, then stops
as he realizes that it’s Tic'Tic, who speaks to D’Leh in a
sharp whisper:
TIC'TIC
Stay down!
D’Leh will have none of that. He struggles to free himself
from Tic'Tic, but the old man is surprisingly fast, and
surprisingly strong.
Tic'Tic gets his hands around D’Leh’s throat, holding him
down and keeping him from making any loud noises.
TIC’TIC
Quiet! We can’t help them...not
now...
D’Leh sees Evolet among those being led off. Tic'Tic tightens
his grip on D’Leh.
TIC’TIC (CONT’D)
Not now! Not now!
In utter agony, D'Leh watches as the captives are led off.
THE WAR PARTY
The Warlord rides at the head of his raiders. He looks back
at the captives, satisfied.
As the Warlord scans the prisoners, he notices Evolet,
looking back in anguish at the burning huts of the village.
She sees the Warlord looking at her, and glares at him
furiously. The Warlord smiles -- she is beautiful in her
fury, perhaps because of it.
The Warlord kicks his horse, and they ride on. The captives,
hurrying, stumbling, pulled along by their ropes.
IN THE VILLAGE
29.
As the War Party and captives disappear into the jagged rocks
at the base of the Great Mountains, the survivors of the raid
gather: children, old men, old women, a few young women who
were able to get away. The slave raiders took only the ablebodied.
D'Leh and Tic'Tic walk into the encampment. They see Baku
crying, kneeling next to his mother’s body. Tic'Tic gently
lifts the boy to his feet.
TIC’TIC (CONT’D)
Go, find any that were not taken.
All that matters to Baku is his mother, lying on the ground.
TIC’TIC (CONT’D)
Go. There is nothing you can do
for her now.
Baku’s tears slow a bit. He looks out into the grasslands.
Knowing every hiding place, he heads out.
EXT. PATH TO THE MOUNTAINS - DAWN *
The Warlord leads the Slave Raiders up into the mountains.
Evolet and the other prisoners stumble over the rocks, trying
to keep up with the horses.
Evolet looks back towards the camp, and sees small figures,
one of whom she can just barely make out as D'Leh. She reels,
then her view of D’Leh is interrupted by a rock outcropping,
and she’s dragged on with the other prisoners.
EXT. GRASSLAND - DAWN
Ka’ren lies in the tall grass. At first it appears that he’s
dead, then we see the empty bowls of brew around him, and we
realize that he is sleeping, drunk from the night before.
Baku, still weeping, finds him, and rouses him.
EXT. CAMP OF THE MAMMOTH HUNTERS - DAY
The women of the tribe are laying out the bodies of the dead,
giving voice to their sorrow - a high pitched WAILING. Others
sprinkle ash over their bodies and faces. Old Mother CHANTS,
her voice guttural, haunting. Above, vultures circle.
Ka'ren and Baku enter the village. Ka'ren goes up to Old
Mother, and speaks shamefully.
KA’REN
Forgive me, Old Mother, for not
being here...
30.
OLD MOTHER
There was nothing you could have
done.
They hear a sound, turn and see D'Leh grabbing weapons,
clothing, spare flints and other supplies from the charred
remains of his hut.
BAKU
D’Leh?
D'Leh doesn’t answer, as he packs weapons and supplies.
KA’REN
What are you doing?
D’LEH
I’m going after Evolet.
BAKU
Over the great Mountains?
KA’REN
It is not possible.
D’LEH
They came over the Great Mountains,
did they not?
KA’REN
They are demons, four-legged
demons. Old Mother said so.
Perhaps they flew over the
mountains.
D’LEH
I did not see wings on them.
KA’REN
They are many, and you are all
alone.
TIC’TIC (O.S.)
No, he is not alone.
Everyone turns and sees Tic'Tic, fully packed, the White
Spear in his hand.
TIC’TIC (CONT’D)
I am going with him.
Everybody stares at him.
31.
TIC’TIC (CONT’D)
Without the other hunters our
people will not survive. There is
no choice. We must free our
brothers and sisters.
Old Mother steps up.
OLD MOTHER
What Tic’Tic says is true.
The entire tribe, what is left of it, realizes the
seriousness of the situation.
Little Baku steps forward.
BAKU
I will go too!
OLD MOTHER
No, Baku, you have not lived enough
years.
BAKU
(protesting)
But I have to!
Old Mother gives him a sharp look.
OLD MOTHER
You will stay here...
(turning to Ka'ren)
But you, Ka’ren, will go with them.
Ka'ren doesn’t dare to contradict her; he runs to get his
things--
D'Leh and Tic'Tic exchange a look.
EXT. EDGE OF CAMP - DAY *
D'Leh, Tic'Tic, and Ka'ren finish strapping on their packs,
and gather up their weapons -- spears and knives. Tic'Tic
carries the White Spear.
Old Mother CHANTS the same blessing she gave before the
mammoth hunt. She steps in front of D'Leh, GATHERING HER
SALIVA.
D’LEH
Do not bless us as hunters. We are
hunters no longer. Bless us,
instead, as warriors.
32.
Old Mother nods. She starts MURMURING A DIFFERENT CHANT, one
that is lower, more guttural, forbidding.
D'Leh, Tic'Tic, and Ka'ren move out. Behind them, those who
remain watch them go. Baku steps to the front of the group.
Old Mother steps up next to the boy, puts her hand on his
shoulder, and watches with him.
EXT. MOUNTAINS, EAST FACE - DAY *
The Slave Raiders and their captives climb up steep, broken
ground, ascending in switchbacks. The captives struggle to
keep up, their wrists and necks bloodied by the ropes and
yokes that bind them. The Warlord stops and drinks from his
water bag.
Moha and Lu'Kibu are yoked together. Moha, injured in the
attack, stumbles and falls to his knees. One-Eye rides over
and whips him, YELLING at him to get up.
Evolet steps between One-Eye and Moha.
EVOLET
Stop! Please!
One-Eye raises his whip, about to swing it. Evolet winces,
waiting for the blow, but standing her ground.
The Warlord blocks the lash of the whip. He BARKS something
to One-Eye in their guttural language. One-Eye lowers his
arm, resentfully.
The Warlord looks at Evolet, who coldly holds his look. He
tosses her his water bag. She drinks. The Warlord holds out
his hand for her to give it back to him.
Instead, Evolet gives the water bag to Moha and Lu'Kibu. Then
she turns to the Warlord and waits for her punishment.
For a tense moment, the Warlord looks at her. Then he smiles,
and turns and speaks to one of his men.
The slave raider laughs lightly. The Warlord kicks his horse,
and takes his place at the head of the War Party.
EXT. MOUNTAINS, EAST FACE - SUNSET
Tic'Tic and Ka'ren walk up the broken flanks of the mountain.
D'Leh is walking ahead of them.
The sun has passed behind the mountains and it is getting
harder and harder for them to see their footing on the
treacherous rocks.
33.
Tic'Tic stops.
TIC’TIC
We stop here for the night.
D’LEH
No, we go on, we are getting
closer!
TIC’TIC
If we find them, we will be tired
and hungry.
(decisive)
We eat and we sleep here. Be
patient.
D’LEH
How can I be patient?
TIC’TIC
If they were going to kill them,
they would be dead already.
KA’REN
And if they are going to do other
things...?
D'Leh feels a wave of anguish.
Tic'Tic touches him sympathetically.
TIC’TIC
We’ll pick up their trail at first
light.
EXT. MOUNTAINS, BOULDER - NIGHT (LATER) *
The hunters have eaten. They settle down to sleep, Ka'ren
next to D'Leh, speaking quietly to him.
KA’REN
You do not carry the White Spear.
Tic’Tic does.
D'Leh turns away.
KA’REN (CONT’D)
Why?
TIC’TIC
Ka’ren, go to sleep.
34.
Ka'ren looks over to Tic'Tic, who hasn’t even opened his
eyes. Ka'ren turns over and tries to get to sleep.
For a long moment we hear only the whistling sound of the
WIND, blowing down the mountain.
D’LEH
I do not think they are demons.
D’Leh stares up at the stars.
D’LEH (CONT’D)
They are men...sitting on animals.
Any of us could do that.
KA’REN
Any of us?
TIC’TIC
(again without opening his
eyes)
Sleep, both of you!
EXT. MOUNTAIN, HIGH PASS - NIGHT *
The Slave Raiders have finished eating, and are settling down
to sleep. Evolet sits among the captives. She touches her
wrists. We see the dried blood on her wounds left by the
coarse ropes. She turns and sees One-Eye staring at her with
malevolent desire.
The Warlord sees One-Eye looking at Evolet. He walks over and
puts himself between the two of them, looking down at One-Eye
with cool authority.
The Warlord waits, as if challenging One-Eye. One-Eye is
almost up to it, but not quite. One-Eye nods deferentially to
the Warlord, and backs off.
The Warlord turns to Evolet, and says something to her, as
gently as he can in his coarse language. Then he walks away.
Evolet exchanges a look with Moha. Neither one knows what the
Warlord just said, but they can imagine.
EXT. MOUNTAINS, SCREE FIELD - PRE-DAWN
The mammoth hunters are still asleep as the sky turns a pale
blue. Tic'Tic opens his eyes, and finds himself staring at
Baku, sleeping next to him. Tic'Tic jumps to his feet.
35.
TIC’TIC
Baku!
He grabs the boy and pulls him to his feet.
TIC’TIC (CONT’D)
Go back to Old Mother!
BAKU
I can help you. I can carry your
pack.
Baku picks up Tic'Tic’s pack. Tic'Tic grabs it from him.
TIC’TIC
You will slow us down! Go home!
Baku turns to D'Leh, who gives the boy a little shrug -- not
my decision, sorry. Baku’s shoulders slump as he watches the
men gather up their weapons and packs, and move out.
EXT. MOUNTAIN, HIGH PASS - DAWN
The Warlord mounts his horse, and shouts commands to his men
who finish tying the prisoner to the horses, and mount up.
Evolet makes sure that no one is watching, then she yanks a
BEAD from the necklace D'Leh gave her. As they move out, she
DROPS it on the ground, where it lands on a grey stone.
EXT. MOUNTAINS, EVEN HIGHER - DAY *
The mammoth hunters follow the path of the Slave Raiders,
their eyes noting everything about the trail -- scraped
stones, broken stems of mountain grass, drops of blood.
A flash of movement behind them. Baku is still following.
D'Leh spots him, smiles surreptitiously, and says nothing to
Tic'Tic.
EXT. MOUNTAIN, EAST FACE - DAY *
Tic'Tic scans the steep and rocky slope above them. The ghost
of a smile crosses his lips as his eyes track the switchbacks
taken by the slave raiders.
TIC’TIC
Two legs may go where four cannot.
(to D'Leh)
The hunter gains on the hunted.
36.
Tic'Tic starts straight up the slope.
D’LEH
And Baku?
Tic'Tic turns, questioningly. D'Leh nods to a rock, about
twenty meters away, where Baku is hiding, not very well.
TIC’TIC
Baku! I told you to go home!
BAKU
Evolet is my blood, she is all that
I have left.
D'Leh nods to Tic'Tic, who shakes his head.
TIC’TIC
He is not strong enough. Go home!
Tic'Tic starts to climb. D'Leh silently motions to the boy --
let’s go.
EXT. MOUNTAIN, CLIFF - DAY *
Up the steep slope. Tic'Tic climbs steadily and deliberately.
D'Leh and Ka'ren follow. Tic'Tic glares as they see Baku
scrambling up the broken face like a mountain goat, easily
passing them.
As Baku reaches an outcropping, several meters above Tic'Tic,
his foot DISLODGES A ROCK, which CAREENS down the slope, just
missing Tic'Tic’s head.
Baku cringes, as Tic'Tic looks up at him angrily.
EXT. TOP OF THE CLIFF - DAY *
Baku stands on top of the cliff and looks over the edge,
seeing Tic'Tic just below, struggling.
BAKU
There’s a foothold, right there!
Tic'Tic ignores him, gets one hand on the edge, and starts to
pull himself up.
Baku leans forward to help, and, as he does so, Baku’s water
bag tips, and pours its contents onto Tic'Tic’s head.
37.
Tic'Tic waits for the drenching to finish, then gives Baku an
endless look. The old man then pulls himself onto the top of
the cliff.
Tic’Tic walks towards him, and Baku cowers, closing his eyes,
expecting a beating. Instead:
TIC’TIC
You may come with us on one
condition.
Baku gives him a disbelieving look...
TIC’TIC (CONT’D)
Stop helping me.
D'Leh hears, and smiles slightly, as we see the first SNOW
FLAKES drift past his face.
EXT. MOUNTAIN, HIGH PASS - DAY *
It is snowing harder now. The flakes are bigger and begin to
stick. The mammoth hunters arrive at the pass where the Slave
Raiders spent the night. D'Leh touches the fire pit.
D’LEH
The fire still lives in these
stones.
BAKU (O.S.)
D'Leh.
Baku points at the bead Evolet dropped. D'Leh picks it up.
D’LEH
Evolet’s.
BAKU
For us to track her.
Tic'Tic, D'Leh, and Ka'ren exchange looks, and smile at
Baku’s comment.
KA’REN
She didn’t leave that to help us
track her.
D'Leh grips the tiny piece of ivory tightly in his hand.
D’LEH
She left it to tell me she is still
alive...
38.
The snow falls more heavily.
They move out. As they go, they reach into their packs, and
pull out skins and furs, which they wrap around themselves.
CUT TO:
EXT. MOUNTAINS - DAY *
The hunters, four tiny specs, trek across an endless snow
field, dwarfed by the majestic crests looming over them.
The hunters pass the massive walls of a glacier.
CUT TO:
EXT. HIGH VALLEY - DAY
Fog hangs low on a high valley that takes them down from the
mountains.
Suddenly, they see huge skeletons appear out of the fog. The
further they walk, the more skeletons they see.
As the fog clears, the mammoth hunters stop in their tracks
and stare at:
Skeletons of mammoths as far as their eyes can see.
Baku has spotted something.
BAKU
Look!
He points at a small herd of mammoths, resting between
patches of dirty snow.
But something is wrong.
Some of the mammoths are lying on the ground, emitting
strange moans, while other mammoths stand close together,
over them.
BAKU (CONT’D)
What is wrong with the Mannak?
TIC’TIC
He is tired and laying down to
rest. He is dying.
39.
EXT. ICE FALL - NIGHT
The hunters camp, huddled together within the confines of a
hastily built snow structure that shields them from the
biting wind.
EXT. MOUNTAIN CLIFFS - DAY
They walk downhill, D'Leh in the lead, the others strung out
behind him. D'Leh raises his eyes, and looks at something on
one of the cliffs above. HE SEES:
A MAN MADE STRUCTURE. A long abandoned stone building,
constructed in front of a cave dwelling, with carvings around
the cave opening. It’s a striking-looking structure. Ancient.
Mysterious. Perhaps a hundred years old, perhaps a thousand.
None of the hunters has ever seen anything like it. But,
exhausted by their trek, they trudge on past, even as they
stare at it in astonishment.
EXT. LOWER ALTITUDE SNOW FIELD - DAY
D'Leh and Tic'Tic kneel before a swath of human and horse
tracks in the snow.
Tic'Tic checks the crystals formed on the inside of one of
the tracks, rubbing them gently between his thumb and
forefinger. D’Leh does the same, as Ka'ren scans the horizon.
TIC’TIC
Less than a day.
D'Leh and Ka'ren nod in agreement. They move on.
EXT. MOUNTAIN DOWNSLOPE - DAY
The hunters walk downhill. The snow cover is thinner, with
patches of grass amid the ice.
The grass grows thicker as the hunters enter a narrow valley
which leads down out of the mountains.
EXT. MOUNTAIN, WEST FACE - DAY *
The hunters climb down a steep field of broken rocks beside a
raging river choked with snow melt. D'Leh steps to the edge
of a sheer cliff face, near a waterfall that drops to the
valley below.
40.
A river snakes through the center of the valley. On either
side of the river, thick, tall reeds. And further out from
the reeds, fern meadows giving way to thick jungle.
On the valley floor, D’Leh can just make out the tiny figures
of people, some on foot, some on horseback. D'Leh motions to
the other hunters, then points.
D’LEH
There.
They exchange looks, then move on.
EXT. LOST VALLEY / EDGE OF THE REEDS - DAY *
Enormous dragonflies dodge around the reeds that grow eight
feet tall.
The War Party approaches the reeds. The Warlord signals stop.
The slave raiders and their captives all stop.
The Warlord looks out uneasily into the reeds. The height and
thickness of the reeds prevents him from seeing very far, and
he clearly is concerned about proceeding.
No other alternative. He barks an order to his men, who
tighten up their ranks, and become more wary. They push
forward into the reeds.
Evolet, Moha, and Lu'Kibu walk with the other prisoners,
their progress through the high, thick reeds made very
difficult by their yokes.
The Warlord is riding next to her. He stares at her.
LU’KIBU
I think he wants to claim you.
Evolet shudders, repulsed by the idea.
EXT. LOST VALLEY / DEEP IN THE REEDS - DAY
The War Party moves through the reeds.
POV SOMETHING MOVING, stalking, tracking the slave raiders
and captives.
SOMETHING MOVES suddenly through the frame. Very quick,
barely seen. Human? Animal?
A SOUND causes Moha, Lu’Kibu, and the other captive hunters
to jerk their heads in the same direction...
41.
AT THE BACK OF THE WAR PARTY, a wiry slave raider, lagging a
bit, kicks his horse to catch up...
SUDDENLY, SOMETHING BIG, and very fast, seen only fleetingly,
streaks past the camera, slamming into the trailing slave
raider...
TWO SCREAMS, ONE ANIMAL, the other, the DEATH SCREAM of the
slave raider...
Everyone turns, catching only the barest glimpse of a large
creature, just as it reenters the reeds, carrying the slave
raider, who SCREAMS IN AGONY...
The Warlord, his spear drawn, rides back, and reins his horse
to a stop, but there’s nothing to fight...
He grabs the reins of the terrified, riderless horse. He
looks at the reeds, but they are too thick for him to see
anything...
He BARKS A COMMAND to his men. They tighten up their ranks
even more, and they move on, the fear hanging over them.
The captives move closer to the heavily armed slave raiders.
EXT. LOST VALLEY / UNDER THE TREES - AFTERNOON *
The hunters move through the jungle, approaching the reeds.
Tic'Tic notices a mark among the tracks. He points it out to
D'Leh and Ka'ren.
A PARTIAL FOOTPRINT, not human, not horse. Large, three-toed,
clawed.
The hunters exchange looks. They’ve never seen anything like
it before. They move on.
EXT. LOST VALLEY / REEDS - LATE AFTERNOON
The hunters move silently through the reeds. Baku walks
point. He stops, looking at the ground. D'Leh, Tic'Tic, and
Ka'ren step up.
They look at the ground before them, seeing the marks of the
attack on the slave raider -- blood, bits of flesh, horse and
human tracks, and the tracks of whatever killed the slave
raider.
D'Leh sees some torn cloth. He picks it up, and rubs it
between his fingers.
42.
D’LEH
Someone was killed here...then
dragged off into the reeds...
POV SOMETHING MOVING, through the reeds, watching, stalking
these four humans...
THE HUNTERS sense something in the reeds near them. They grip
their spears...
A SHADOW MOVES...then a QUICK FLURRY OF SHADOWS in the reeds
nearby...
Then nothing...
BAKU
(whispers)
What is it?
TIC’TIC
Whatever killed here...is not just
one... they are many...
They move on, weapons ready, carefully scanning the reeds as
they go.
EXT. LOST VALLEY / CAMPSITE OF THE SLAVE RAIDERS - NIGHT
The slave raiders have set up camp at one end of a fern
meadow. One side of the meadow is bordered by jungle, the
other side is bordered by the reeds. Beyond the reeds is the
river.
A large campfire. The horses and the captives are tied up,
near each other, on the fringe of the encampment, barely
within the light of the campfire.
The slave raiders eat. As they finish their food, they throw
their scraps to the captives.
The Warlord eats, his eyes on Evolet. He sees her pick up and
eat one of the scraps. He rises and walks over to her. He
SPEAKS to her, miming drinking water, then shaking his head.
It is clear that he’s telling her not to do with his food
what she did with his water. She looks at him, unblinking.
He gives her his piece of meat. She immediately tears it into
several pieces, and gives them all to other captives. Then
she scuffs through the dirt, finding the most unappetizing of
the scraps and eats it, while glaring at the Warlord.
The Warlord stares at her, then he grabs some more meat from
a spit and sits down at the fire to eat with his men.
43.
EXT. LOST VALLEY / HUNTERS’ WATCH POST - NIGHT
D'Leh, Tic'Tic, Ka'ren, and Baku watch the War Party
encampment from the far side of the fern meadow.
D’LEH
Tonight. We must free them
tonight.
TIC’TIC
No, not here, not tonight.
D’LEH
Why wait?
TIC’TIC
This is not a good place.
D’LEH
But...
TIC’TIC
No. Be patient.
D’Leh reluctantly nods.
EXT. LOST VALLEY / HUNTERS’ CAMP - NIGHT (LATER)
D'Leh, Ka'ren, and Baku sleep. A short distance away, on the
edge of the meadow, Tic'Tic sits on watch, looking down the
length of the meadow at the slave raider’s camp.
Tic'Tic rises, walks back to D'Leh, and prods him awake.
D'Leh rises. Tic'Tic gives him the hunting whistle, then lies
down, and goes immediately to sleep.
D'Leh walks over to the watch post. He sits, staring intently
at the glow of the slave raiders’ fire.
EXT. LOST VALLEY / CAMPSITE OF THE SLAVE RAIDERS - NIGHT
Evolet lies among the captives, looking out into the
darkness, listening to the SOUNDS OF THE NIGHT. She closes
her eyes, trying to sleep, but sleep will not come. She looks
up at the NORTH STAR, fingering the necklace D'Leh gave her.
EXT. LOST VALLEY / HUNTERS’ WATCH POST - NIGHT
D'Leh looks at the NORTH STAR. Then he looks at the glow of
the fire in the slave raiders’ camp. He stands, feeling
himself drawn to the slave raiders’ camp, toward Evolet.
44.
D’Leh looks back at Tic'Tic, Ka'ren, and Baku, and sees that
they’re all asleep. He makes his decision.
D'Leh heads off, moving low through the ferns, heading toward
the slave raiders’ camp.
EXT. LOST VALLEY / FERN MEADOWN - PRE DAWN
D'Leh stealthily approaches the slave raiders’ camp. He sees
the sentries, who are tired, not alert. The one sentry near
the captives is sound asleep. The fire is lower, the captives
are in the shadows.
D'Leh crawls closer and closer, stopping just outside the
light of the fire.
He rises slightly and, for the first time, he sees Evolet.
His breath comes hard. He decides that it is time...
D'Leh gently blows Tic'Tic’s HUNTING WHISTLE, emitting a
BIRDLIKE TRILL...
EXT. LOST VALLEY / CAMPSITE OF THE SLAVE RAIDERS - PRE DAWN
Evolet’S EYES SNAP OPEN. She hears the whistle in the night,
and knows exactly what it is. She scans the darkness, trying
to pinpoint where it’s coming from...
D'Leh blows the WHISTLE again...
Evolet sees the dark figure of D'Leh approaching. As thrilled
as she is by his attempt to come for her and free her, she is
also very nervous that he will be captured.
She looks around and discovers, about a hundred feet away,
two guards with their horses standing post.
D'Leh has reached her. Silently they embrace, desperately.
They don’t want to let go - until one of the guard’s horses
neighs.
D'Leh quickly comes back to his senses. He cuts Evolet’s
hands free and then they both crawl over to the other
captives.
They shake the first two captives awake, neither of whom can
believe what is happening. D'Leh has to signal them to stay
quiet as he starts to work on their wooden yokes.
45.
EXT. LOST VALLEY / EDGE OF THE CAMPSITE - PRE DAWN
Whatever is stalking the campsite has moved closer to the
guards and their horses. It keeps hidden in the high ferns.
Suddenly, one of the horses picks up a scent and spooks - it
WHINNIES and rears up on its hind legs. The guard is about to
lose control of the panicked horse. In an instant, the other
horses start to panic as well!
EXT. LOST VALLEY / CAMPSITE OF THE SLAVE RAIDERS - PRE DAWN
D’LEH, who has just started to cut through the thick ropes of
the first two captive’s wooden yokes, turns in surprise. He
has no idea what is causing the commotion.
EXT. LOST VALLEY / CAMP OF THE MAMMOTH HUNTERS - PRE DAWN
Tic'Tic comes awake with a start. He looks around and
realizes immediately that D'Leh is gone.
EXT. LOST VALLEY / CAMPSITE OF THE SLAVE RAIDERS - PRE DAWN
The din wakes the Warlord and his men.
Just as D'Leh finishes cutting them free, the two mammoth
hunters start to panic. D'Leh and Evolet can only watch as
they jump up and run away. Immediately, D'Leh rushes over and
starts working on the ropes of Moha and Lu'Kibu.
The Warlord discovers them. He SHOUTS orders in all
directions. Then he runs to his horse, leaps onto it and
tears after them.
D'Leh cuts the rope he was working on and frees Moha and
Lu'Kibu. But Evolet makes him aware that One-Eye is rushing
over to check on the captives.
D'Leh realizes that it is impossible to free any more of his
people and signals Moha and Lu'Kibu to slip away.
EXT. LOST VALLEY / FERN MEADOW - PRE DAWN
They all try to use the high ferns as cover. But when D'Leh
turns he realizes that the Warlord and his men have already
captured the other two freed slaves.
At this moment One-Eye discovers him. He shouts a warning.
46.
The Warlord turns his horse and looks in his direction and
the two men’s eyes meet! For a split second time stands
still...
Then D'Leh turns to Evolet, Moha and Lu'Kibu and screams as
if his life is in the balance--
D’LEH
Run!
Everybody starts to run, and the Warlord orders his men to
follow him as he goes after D'Leh and Evolet.
One-Eye jumps on a horse.
When they have crossed half of the fern meadow, D'Leh sees
Tic'Tic, Ka'ren and Baku up ahead in the shadow of the trees.
Even from this distance, he can see that Tic'Tic is furious.
He starts towards him as the Warlord and his men close in.
EXT. LOST VALLEY / EDGE OF FERN MEADOW - PRE DAWN
D’Leh, Evolet, Moha and Lu'Kibu reunite with Tic'Tic. Then
they all start to run.
The trees give them a slight advantage. They gain ground -
but then Lu'Kibu stumbles and falls.
The Warlord’s men are on him almost immediately.
EXT. LOST VALLEY / SECOND FERN MEADOW - PRE DAWN
Tic’Tic and the others burst out of the trees onto another
fern meadow.
In the next moment, the Warlord and his men appear behind
them. Riding through the ferns, they quickly close the gap.
Tic'Tic realizes that the reeds to their left are their only
hope.
TIC’TIC
This way.
Everybody sees him heading for the reeds. D'Leh, Evolet and
the others follow him.
When Tic'Tic and Baku reach the reeds, they turn and see that
One-Eye has caught up with KA’REN.
47.
One-Eye throws a net and catches Ka'ren in full stride. The
young hunter goes down. The Warlord and his men close in on
Lu'Kibu.
D'Leh and Evolet stop for a moment, only to see first Ka'ren
and then Lu'Kibu get captured.
Then they have to run again, because the Warlord is coming
for them. There is fury in his eyes.
D'Leh and Evolet make it into the reeds just in time before
the Warlord can catch him.
EXT. LOST VALLEY / REEDS - PRE DAWN
Now united with Tic'Tic and Baku, they scramble into the
reeds.
The Warlord and his men follow. But their horses are too big
and heavy. Their hooves sink deep into the ground.
With his slim body, Baku can move through the reeds faster
than Tic'Tic, D'Leh and Evolet.
But suddenly the boy stops stock still. Ahead of him, he
makes out an unhuman movement.
Tic'Tic appears by his side. Sensing the same kind of
movement to the left, he spins.
When D'Leh and Evolet stop next to them, we make out
movements everywhere in the reeds. But we gets only glimpses
of something big - and fast.
Baku clutches D'Leh.
BAKU
(whispering)
There!
D'Leh, Evolet and Tic'Tic turn. Now they can see more of what
is stalking them.
We make out huge beaks, ugly black bodies with pale feathers
and savagely taloned three-toed feet--
A flock of TERROR BIRDS!
One of the most relentless predators of the era. Enormous
beaks serve as deadly scythes. Unable to fly, they pack-hunt
their prey with merciless speed.
48.
When D'Leh and the others turn to run back, they see the
Warlord and his men ride up.
But the Warlord also stops in shock, his face an expression
of utter disbelief.
An OVERHEAD SHOT reveals--
The mammoth hunters and their pursuers alike are surrounded
by more than twenty Terror Birds!
Nobody dares to move. A deadly moment stills the reeds.
Then the first bird attacks!
A GIANT BEAK knocks one of the slave raiders off his horse!
They all stare in horror as the creature rears its head.
WHAM! WHAM!-- The bloody beak hammers into the helpless slave
raider.
D'Leh and Evolet are attacked. They duck as a BEAK three feet
long slices through the air where their heads were an instant
earlier. The reeds behind them are cut in half, as if by a
razor.
D'Leh pulls Evolet backwards. Baku stares with an open mouth!
The boy is too shocked to move when the bird turns on him.
Tic'Tic rushes to his rescue. He kills the bird with a mighty
thrust of his spear.
D'Leh, Evolet and Baku look on in horror.
TIC'TIC
Run!
They look at him with big eyes. Tic'Tic fends off the next
bird.
TIC’TIC
(more urgent)
RUN!
D’LEH and Evolet grab Baku and pull him along. They dive into
the reeds.
Tic'Tic stabs the bird - he doesn’t kill it but buys some
time to run after them.
He gets a last glimpse of the Warlord and his men as they
also fight off the vicious attacks of these predators.
49.
Tic'Tic runs through the reeds, trying to follow D'Leh and
Evolet. Suddenly he stops in his tracks.
A Terror Bird stands in front of him. He raises his spear.
D'Leh has stopped to wait for Tic'Tic. He can’t make him out.
But then he sees movement in the reeds. First one, then two
and then a third Terror Bird has discovered them.
D'Leh, Evolet and Baku have no choice but to run.
EXT. LOST VALLEY / EDGE OF REEDS WITH TREE - PRE DAWN
Baku storms out of the reeds. He sees a tree ahead. He runs
towards it and climbs it as fast as he can.
When he looks down he discovers that the three birds have
nearly caught up with D'Leh and Evolet.
BAKU
(shouting)
EVOLET! Here!
But they have no time to climb the tree - the birds are too
close. They have no other choice than to keep running.
Baku watches in panic as D'Leh and his sister disappear into
the jungle with two birds on their heels.
He hasn’t noticed that the third bird has discovered him!
In the next moment a beak rips the base of the branch on
which Baku is standing.
The boy leaps for another branch, grabs it and pulls himself
higher. But again a beak smashes into it.
He has to leap for the next higher one, just as the beak
slices through the air beneath his feet.
The bird jumps again and again trying to reach him when,
finally, Baku pulls himself up to safety.
EXT. LOST VALLEY / REEDS - PRE DAWN
Tic'Tic is still battling his bird. With a swift move, he
buries his spear into the flank of the animal.
The bird goes down, but is still able to rip his beak into
TIC’TIC’s side. The Old Hunter goes down, seriously hurt. The
world goes silent.
50.
The wounded Terror Bird still manages to rise again and
appears above Tic'Tic.
Laying on his back, with incredible effort, he raises his
spear.
Tic'Tic stares into the cold and unblinking eyes of the
predator and for a moment--
Time stands still. Then--
WHAM!!! TIC’TIC rams his White Spear into the neck of the
Terror Bird.
EXT. LOST VALLEY, GIGANTIC TREE - PRE DAWN
D'Leh and Evolet run for their lives. They manage to duck
under the root system of one of the gigantic trees.
A mistake. They are cornered. Wherever they turn, one of the
birds is slashing at them. D'Leh tries to stab them with his
spear.
The birds get frustrated and start to dig with their claws.
The dirt flies.
D'Leh realizes that they are in a trap. He turns to Evolet.
D’LEH
I must lead them away.
EVOLET
No.
D’LEH
This is the only way.
And before she can protest, he crawls out from under the
tree’s roots and starts to run. The birds pause at the
unexpected move. D'Leh attracts them with a shout.
The birds give chase. Evolet sees D'Leh and the birds
disappear between the trees.
EXT. LOST VALLEY / REEDS - PRE DAWN
The Slave Raiders are still battling the Terror Birds all
around them. The Warlord has to fend them off from all sides.
Suddenly one of the birds grabs his horse by the head and it
goes down.
51.
In the last moment, the Warlord manages to get off the
falling animal. But on the ground he has lost the advantage
of height - it is dire.
He looks around and sees one of his men fighting nearby.
The Warlord makes a gruesome, calculating decision. He throws
his spear at one of his own men, hitting him deep in the
chest.
The wounded Raider SCREAMS out at the betrayal as he tumbles
to the ground.
All the birds immediately hack into him and the Warlord’s
horse. The Warlord grabs the dead raider’s horse and mounts
it.
Realizing that the birds are distracted, he shouts for his
remaining men to retreat.
EXT. JUNGLE, BAMBOO FOREST - PRE DAWN
D'Leh dodges through the trunks of the bamboo, heading to
where the bamboo grows thickest.
The Terror Bird closest to him slams its beak into a bamboo
trunk just behind him with a hollow BOOMING SOUND. D'Leh
ducks and squeezes between two trunks in the last moment.
The birds following him are too big to fit. D'Leh squeezes
into a still narrower gap and the birds now CAW in
frustration. The plants are too dense for them to follow.
When they hear the feeding calls of their fellow birds, they
move on.
D'Leh sees them disappear and slumps against the bamboo
barrier that saved his life, panting for breath.
EXT. LOST VALLEY - GIGANTIC TREE - DAWN
The sky has turned a pale blue. Silence.
Evolet listens to the now far-off calls of the Terror Birds.
She crawls from under the roots and starts to look for D'Leh.
EXT. LOST VALLEY, MOUNT WITH TREE - DAWN
Baku cautiously climbs down his tree and takes one fearful
step on the ground. Eyes flitting left and right--
52.
A twig breaks with a SNAP. Baku spins and sees-- Evolet!
Evolet rushes to her brother.
EVOLET
Baku! You should not be here.
BAKU
We came to-- save you--
BUT in the next moment his face goes pale. Evolet turns and
sees the Warlord standing there. When she looks to run in the
other direction, One-Eye appears before them.
The Warlord dismounts and walks to Evolet. She puts her arm
protectively around Baku. The Warlord looks at the boy, and
guesses their relationship.
The Warlord reaches out, and grabs Evolet roughly by a hank
of hair at the back of her head. He pulls her face toward
his, and raises his fist to beat her...
Then, he stops...
He looks at her closely and lowers his fist. He relaxes his
tight grip on her hair, but doesn’t remove his hand from her
hair. Instead, he strokes it once, gently...
He ASKS HER A QUESTION IN HIS LANGUAGE, motioning to the
jungle and the reeds.
BAKU (CONT’D)
(to Evolet)
He’s asking about D’Leh.
The Warlord looks at Baku with surprising tolerance. He likes
audacity.
The Warlord waits. He gets nothing from them. He didn’t
really expect to. He turns and strides to his horse, BARKING
an order to two of his men who quickly bind Evolet and Baku.
EXT. LOST VALLEY, JUNGLE AND GROUP OF TREES - DAWN
D'Leh turns. He has heard voices, he hears the neighing of
horses. With a worried face, he rushes through the jungle.
Hidden, he looks through the foliage and spots the Warlord’s
men who are just finished roping Evolet’s and Baku’s hands.
The Warlord mounts his own horse and, with a last look
around, rides off.
53.
D'Leh watches in pain, as Evolet and Baku disappear into the
jungle. There is nothing he can do.
CUT TO:
EXT. LOST VALLEY / REEDS - SUNRISE
D’LEH is looking for Tic'Tic. Suddenly he hears loud noises
and sees movement in the reeds.
The whole flock of Terror Birds are fighting over the remains
of the Warlord’s horse. D'Leh discovers the body of the slave
raider the Warlord killed.
He can’t make it out clearly, but sees enough to realize it
is not Tic'Tic’s body and backs away.
CUT TO:
EXT. LOST VALLEY / EDGE OF THE REEDS - DAY
D'Leh finally discovers Tic'Tic.
He has obviously dragged himself to the edge of the reeds but
lays now half covered in water, unconscious.
D'Leh rushes over to him and discovers that he is still
alive. But the side of his leg is ripped open and he is
bleeding heavily.
D'Leh picks him up and carries him out of the reeds.
CUT TO:
EXT. TOP OF BOULDER - SUNSET
The sun is turning red.
D'Leh has made a stretcher out of bamboo sticks, on which he
now drags Tic’Tic, barely conscious.
We see the lost valley recede in the distance.
When D'Leh reaches the top of the boulder he sees A SAVANNAH
stretching out endlessly to the horizon in all directions.
A few more steps ahead, he lays the stretcher with Tic'Tic
down on the ground and catches his breath. On instinct he
looks up...
54.
D'Leh can now see the caravan of the Slave Raiders! The
Warlord and his troops are only a few miles ahead of them.
CUT TO:
EXT. SAVANNAH - SUNSET
Evolet is walking at the end of the slave caravan.
She turns and looks at the big boulders which separate the
Lost Valley from the savannah.
She looks in vain for a sign of D'Leh...
CUT TO:
EXT. ON TOP OF BOULDER / BY THE POND - DUSK
Tic'Tic lies, unconscious, next to a small fire. D'Leh adds
wood to the fire, then he takes from the flames a POINTED
STICK, its end burning and glowing.
D'Leh pulls off Tic'Tic’s bandage, puts the burning stick on
the wound, then firmly shoves it in along the deep gash...
Tic'Tic’s flesh HISSES AND BURNS. Even unconscious, Tic'Tic
writhes and moans with pain...
D’Leh holds to the task, carefully cauterizing the length of
the open wound....
SMASH CUT:
EXT. ON TOP OF BOULDER / BY THE POND - NIGHT
A star filled sky.
Tic'Tic twists in his sleep, feverish and sweaty. D'Leh comes
from the pond with a wet piece of leather and wipes the face
of the Old Hunter.
D’LEH
Do not die, Tic'Tic, please, do not
die. You said, be patient, but I
would not listen. Please live, and
if you do, I will listen, and I
will learn...
D'Leh stands, and looks down at the nearly unconscious
Tic'Tic.
55.
D’LEH (CONT’D)
First we sleep, then we eat, eh?
...We’ll need food.
D'Leh looks at the White Spear on the ground next to Tic'Tic.
D’Leh pointedly picks up his own, more modest spear, instead
of the White Spear. Then he heads off into the darkness.
CUT TO:
EXT. SAVANNAH - NIGHT
D'Leh is stalking a herd of ANTELOPE. The moonlight shows us
their sand-hued backs and long and twisted horns.
He creeps closer to them with his spear ready. Fifty feet.
Forty. Thirty. Twenty. Finally, D'Leh hurls the spear--
It hits one of the animals and it falls to the ground, dead.
D’Leh can’t believe his success. He hurries over to the
fallen antelope to pull out the spear.
A LOUD AND ANGRY GRUNT! He looks up and sees--
A BLACK RHINO, seven feet tall at the shoulder, five tons of
armored muscle. It blinks at him and lets out an ANGRY,
ROARING HISS! D'Leh is paralyzed!
Slowly, he begins to back away. He manages to retreat a
couple of steps. But then--
The rhino CHARGES at him in a fury!
He turns and runs as fast as he can with the rhino barreling
after him. D'Leh tries to find refuge in the thicket. He rips
his side as he runs between two thorny bushes.
At full speed he dives under a fallen tree. But the raging
rhino smashes right through the brittle wood.
In a frenzy, D'Leh changes his direction. But only moments
later, the rhino is at his heels again!
The animal is now so close that its ROARS are deafening.
D'Leh can sense the POUNDING of its feet right behind him.
There is no more room for escape. The rhino is upon him!
D'Leh SCREAMS in horror as he sees its horn aiming for his
legs. He jumps to the side, when suddenly--
56.
The ground drops out from under him and he plunges out of
sight!
INT. PIT TRAP - NIGHT
His spear goes flying as he falls--
Into a PIT TRAP!
D'Leh hits hard, scant inches from one of the thick wooden
spikes protruding from the ground. They are sharpened to a
needle-point.
D'Leh is out cold.
He doesn’t see the two yellow eyes glowing in the dark!
SMASH CUT TO:
INT. OLD MOTHER’S HUT - NIGHT
Old Mother startles awake with a loud scream! Again blood
runs from her nose.
She is breathing heavily. She hears the voices of her people
whom she has awakened with her scream. She looks towards the
entrance of her hut.
Snow flurries dance in the ice cold wind.
From all sides, the remaining members of the tribe appear at
the entrance to her hut, watching Old Mother with worried
eyes.
CUT TO:
EXT. PIT TRAP - NIGHT
LIGHTNING and THUNDER rages.
The first raindrops hit D'Leh’s face.
D'Leh wakes up. He licks the rainwater off his dried lips. He
looks around, disoriented, shocked to still be alive.
VULTURES are feasting on the body of an antelope, dead on a
spike as rain begins to POUR into the pit. As the pit is
situated on a slight incline, the water rushes in over the
side of the pit as well.
57.
In the eerie moonlight, he can just make out the dimensions
of the pit-- fifteen feet deep, with overhanging walls of
packed earth.
His spear gleams in the shadows on the far end of the pit.
D'Leh gets to his feet and walks between the spikes to
retrieve it.
He reaches out to grab his spear and out of the darkness--
A huge SABER TOOTH TIGER lunges at him! Six inch teeth snap
at D'Leh! The animal lets out a terrifying ROAR!
And D'Leh jumps backwards and screams!
Lightning flashes again, and we see the Tiger is STUCK,
pinned beneath one of the logs that once covered the trap.
Blood trickles from a wound on his side. The Tiger struggles
to free itself, but its movements are futile.
The animal finally lets out a FRUSTRATED and TERRIFYING ROAR
which makes the VULTURES tear into flight in a frenzy.
D'Leh realizes with concern that the water is rising faster
and faster. This is a desperate situation.
He decides to try to climb the walls, but they are too
slippery from the rain and he falls back into the pit, nearly
getting impaled on one of the spikes - again. He has now
cheated death a second time in this pit.
He slowly gets to his feet and assesses the situation. It is
clear that this is a place of death. There is no clear way of
scaling the wall - nothing long enough to reach the rim.
Until he notices the log which pins down the tiger. It’s
broken branches could make for a ladder.
The Tiger struggles. Unfamiliar territory for the predator.
D'Leh makes a decision. Very carefully, he begins to move
towards the Tiger.
He looks the Tiger in the eye.
D’LEH
Ssshh...I understand your anger,
brother hunter, but I did not make
this trap.
The tiger GROWLS, RUMBLING, glaring at D'Leh, who continues
to speak very softly.
58.
D’LEH (CONT’D)
Perhaps we can make a bargain. I
need this piece of tree and I will
set you free...
The water keeps rising...
D'Leh reaches the log that has the Tiger pinned. The Tiger
struggles more and more with the desperate situation. He
watches D'Leh, who continues coming closer and closer.
D’LEH (CONT’D)
It is not just me, brother hunter.
There are others. If I die here,
it is bad for them. Better if we
both live..
The Tiger does not move. D'Leh takes another step closer, his
heart in his throat.
D’LEH (CONT’D)
Sssh-- Do not eat me when I set
you free.
D'Leh touches the log.
The Tiger struggles as the water rises. D'Leh makes his
decision. He pushes hard on the log. Trying to roll it free
of the Tiger.
The animal GROWLS again with its chin dragging in the muddy
water. D'Leh pushes harder on the log. It starts to shift.
He strains and pushes with all his might.
D'LEH
(pushing)
Aaaahhhh!
The log pulls free--
And with his last strength, the Saber Tooth Tiger comes to
its feet and sends the heavy log flying.
The Tiger turns to look D'Leh in the eye and ROARS, teeth
long as daggers.
Then the huge cat leaps over D'Leh. Its talons carve into the
muddy wall and the Tiger goes up with a burst of speed--
And the Tiger is gone.
D'Leh doesn’t lose any time. He grabs the heavy log and
manages to lean it against the wall of the pit.
59.
Then he dives down and, after a long moment, comes bursting
out of the water again, clutching his spear in his hand.
Holding it tightly, D'Leh starts to climb up the log.
EXT. EDGE OF PIT TRAP - NIGHT
D’LEH’s hand appears and then with one last effort he pulls
himself out of the pit.
Then he lays on the rim of the pit for a while, panting and
catching his breath.
When he looks around, he sees the Tiger standing there, as if
watching to see if D'Leh made it out. The Tiger then turns
and disappears.
D'Leh breathes a sigh of relief.
CUT TO:
EXT. SAVANNAH - DAWN
The night is over and the sky has turned pale again.
D'Leh is back at the spot where he killed the Antelope. But a
flock of Vultures is already feasting on the carcass.
CUT TO:
EXT. ON TOP OF BOULDER / BY THE POND - SUNRISE
D’Leh walks back into the campsite where he left Tic'Tic. The
fire is out.
Tic'Tic is nowhere to be seen.
D'Leh, worried, looks around. He sees some tracks and follows
them to a lookout point on the ridge, where he finds Tic'Tic
looking at something in the distance. D'Leh is relieved.
D’LEH
I feared you were dead.
Tic'Tic says nothing.
D’LEH (CONT’D)
Tic’Tic, I am sorry.
Tic'Tic brushes off the apology with a motion, and points in
the distance, where columns of dark smoke rise.
60.
Tic'Tic gestures to him to stay down. D'Leh crawls next to
him and looks also over the rim.
Far in the distance he sees a village. Plumes of dark smoke
rise from the burned huts.
D'Leh looks puzzled. He has never seen such an advanced
settlement.
We realize that the settlement is surrounded by green fields.
CUT TO:
EXT. FIELDS NEAR NAKUDU’S VILLAGE - DAY
Tic'Tic and D'Leh approach the village. D’Leh has to support
Tic'Tic as they walk.
Smoke rises. No one is visible.
The two hunters reach the tilled fields. D'Leh kneels to run
his hands over the new green shoots of barley poking out of
the ground.
Then he discovers one of the WOODEN HOES the villagers have
left behind. He picks it up and shows it to Tic'Tic.
D'LEH
This is not a spear.
They look at it, then toss it down, and move on.
EXT. NAKUDU’S VILLAGE, SQUARE - DAY
Entering the destroyed village, very cautiously, they come by
a ring of mud-walled huts.
D'Leh scratches the wall with his fingernail, revealing the
brown and porous mud beneath it.
D'LEH
(surprised)
These stones have a skin around
them!
They venture deeper into the village and reach the center
square. The doors to the huts stand wide open, broken pottery
scattered everywhere, but--
No sign of life.
61.
They come by a huge earthen pot filled with grain. D'Leh
smells it. He realizes it’s food, but it’s not particularly
appetizing.
Their hungry eyes spot a bowl of dried meat. They hurry over.
D'Leh lowers Tic'Tic to the ground and they both start
stuffing their mouths eagerly.
THEY STOP AT APPROACHING SOUNDS. A shadow falls over them.
D'Leh and Tic’Tic now stare up at a fierce looking warrior--
This is NAKUDU.
He is from the tribe of the NAKU.
He wears a headdress with two SABRE TEETH hanging down on
each side of his face and his body is painted for war.
When Tic'Tic reaches for his spear, he is brutally kicked in
the face by Nakudu.
As the Old Hunter goes down, D'Leh jumps to his feet and
steps in front of Tic'Tic to protect him.
Nakudu yells an order and a group of fierce looking warriors
appear from behind the destroyed buildings.
The Naku Warriors slowly begin to surround D'Leh. They form a
tighter and tighter circle with their spears pointed at him.
With quick moves, D'Leh turns to all sides, holding on
tightly to the White Spear. But there is no chance for
escape, when suddenly--
D'Leh stumbles backwards over the fire pit, landing in the
ashes.
Nakudu quickly moves in. He raises his spear ready to slay
him--
But then Nakudu freezes!
He slowly retreats with a look of terror on his face. The
Naku Warriors backup.
We hear a mighty ROAR!
D'Leh turns. He sees a SABER TOOTH TIGER moving slowly,
threateningly into the village square...
The Tiger starts at Nakudu and his men! They all shy back,
startled and scared. But then the Tiger turns and advances
towards D'Leh.
62.
Tic’Tic has regained his bearings. He looks on in fear as the
big cat reaches the young hunter.
The animal paces around him and then moves over him and
lowers its head.
D'Leh stares paralyzed at its HUGE SABER TEETH, only inches
from his face and discovers the wound in its neck--
THIS IS THE TIGER FROM THE PIT.
D’LEH
Brother hunter... you must remember
me.
To the silent amazement of everyone, D'Leh talks to the
tiger...
D'LEH
I set you free-- I am your friend.
The tiger looks up at D'Leh, then turns, and, for a long
moment, stares right at Nakudu and his men.
Then the TIGER lets out a GROUND-SHAKING ROAR, then turns and
walks away.
Everyone watches in awe. The Naku Warriors turn to each
other, and speak amongst themselves, with Nakudu speaking
with the most urgency...
Nakudu steps from the group, to D'Leh.
NAKUDU
You speak to the Spear Tooth.
D'Leh and Tic'Tic exchange a surprised look. D'Leh turns to
Nakudu.
D'LEH
How do you come to speak our words?
Nakudu turns to his men. They are having a heated argument.
They chatter all at the same time, it seems, in their strange
language, scattered with many clicks and hisses.
D'Leh and Tic'Tic exchange looks.
After a while the Naku men seem to have come to a conclusion.
Nakudu steps up to D'Leh and Tic'Tic.
NAKUDU
Come.
63.
Nakudu and his men stride off. D'Leh and Tic'Tic have no
other choice but to follow.
EXT. NAKU BOULDERS - DAY
Towering sandstone monoliths. Within sight of the village.
D’Leh and Tic'Tic follow the Naku Warriors to the base of the
sandstone monoliths.
Nakudu stops and CALLS UP.
One by one, women and children appear, looking over the edge
of the platform.
D’Leh and Tic'Tic exchange a look. D'Leh turns to Nakudu.
D’LEH
Is this where your people go when
attacked?
Nakudu doesn’t answer. His attention is on the platform,
where three chairs, attached to ropes, are let down over the
edge. Each chair holds a very old man, the tribal WISE MEN.
As the old men are gently lowered to the ground, more ropes
and rope ladders are dropped, and other members of the tribe
climb down.
The three old men reach the ground and are helped from their
chairs. They speak for a moment with Nakudu, and are amazed
at what he tells them.
D’LEH (CONT’D)
What did he say?
NAKUDU
You are hungry. We will eat.
CUT TO:
INT. COMMUNAL HUT - NAKU VILLAGE - NIGHT
D'Leh and Tic'Tic have not eaten a real meal in days. They
wolf down the food, scarcely pausing to chew.
With them, on the opposite side of the room, sit the Wise
Men, Nakudu and his men. Several other older men, women and
children are crowded in the background, watching, listening.
64.
We notice that the walls of the hut have the pelts of Saber
Tooth Tigers hanging from them-- clearly the animal is much
revered here.
D'Leh picks up a piece of flat bread. He looks at it
curiously then bites in to it.
D’LEH
(to Tic'Tic)
The food is different-- but good.
He immediately gets cut off by the Wise Men. Nakudu
translates.
NAKUDU
Not speak. Eat.
Tic'Tic looks around and realizes he has to finish eating
before he can ask a question. He looks over to D'Leh and lets
out a loud BURP. Nakudu’s tribe reacts - everybody beats on
the ground with their hands.
After that they all stare at D’LEH. It is an unusual moment.
D’LEH
(whispering to Tic'Tic)
What do they want?
NAKUDU
You not like Naku food?
It takes D'Leh a few moments to understand what they expect
from him... He finally swallows and lets out a mighty BELCH.
This time the Naku people beat even louder and one of the
Wise Men speaks. Nakudu translates.
NAKUDU (CONT’D)
Now you speak.
Tic’Tic clears his throat.
TIC’TIC
We came over the mountains. We are
looking for our stolen brothers.
NAKUDU
We know where you come from.
Tic'Tic is stunned. D'Leh cuts in.
D’LEH
How do you know? And how do you
know our words?
65.
Nakudu translates to the Wise Men. They motion Nakudu to
answer him. Nakudu moves closer to D'Leh.
NAKUDU
A man came from the mountains
before... He was looking for the
land with two suns.... The Wise Men
told me to learn his words.
These words have great impact on D'Leh and Tic'Tic.
NAKUDU (CONT’D)
He taught us to build traps to kill
the Spear Tooth, our enemy.
Nakudu pauses. Then he points to D'Leh.
NAKUDU (CONT’D)
You have his face.
Amazed, D'Leh turns to Tic'Tic.
D’LEH
He speaks of my father.
Tic'Tic nods quietly. D'Leh turns back to Nakudu.
D’LEH (CONT’D)
(trying to hide the
emotion in his voice)
What happened to him?
Nakudu looks back and translates what was said to the Wise
Men.
They argue a while under themselves, then the oldest of them
speaks to Nakudu, who turns to D'Leh and Tic'Tic.
NAKUDU
The Wise Men of the Naku want you
to come.
CUT TO:
EXT. NAKU CAVES - NIGHT
The three Wise Men, Nakudu, and the Naku Warriors lead D'Leh
and Tic'Tic to the mouth of some caves. The scene is lit by
torches.
66.
INT. NAKU CAVES - NIGHT
The torches move into the caves, casting shifting light.
Throwing shadows. The cave entrance is narrow, then opens up
into a large, vaulted cavern, eerie, stunningly beautiful.
The walls of the cavern are covered with cave paintings.
Hundreds of them, depicting hundreds of years of tribal
history, dreams, and myths.
D’LEH
Who made these pictures?
NAKUDU
They were here long before our
people came to the Water of Naku.
The Wise Men lead the group to one of the faces of the wall,
the light of their combined torches illuminating what’s
before them...
The oldest of the Wise Men narrates the tale, and Nakudu does
a simultaneous translation for D'Leh and Tic'Tic.
NAKUDU (CONT’D)
For as long as we remember...these
men have come from the sunrise...
They take our people...and not only
our people...our neighbors....All
have suffered...
The old man points to a series of cave paintings, images,
showing war, and raiders on horseback...
D'LEH
Where do they take them?.
NAKUDU
Four days walk to the river. There
they put them on their big birds...
who can fly into the desert.
Nakudu points to another painting depicting strange
rectangular, birdlike images.
D'Leh goes ahead. He’s seen something else. He points at one
of the images, showing structures with ramps, surrounded by
many human figures.
D’LEH
What is this?
Nakudu translates and the WISE MAN answers in a somber tone.
67.
NAKUDU
This is where our people die.
(pauses)
The mountains the gods build...to
live forever.
Again the Wise Man speaks.
NAKUDU (CONT’D)
The Wise Men says, you will lead us
there...
D'Leh is stunned.
D’LEH
Me?
NAKUDU
Yes. There is an old telling. One
day a man will appear, who can talk
to the Spear Tooth, a man who will
lead us in war, to free our
people...
Nakudu walks over to the last painting, where we see an army
lead by one single man..
NAKUDU (CONT’D)
You are that man...
This all has a powerful emotional effect on D’Leh.
EXT. NAKUDU’S VILLAGE - NIGHT (LATER)
The village lies quietly in the darkness by the lake.
INT. NAKUDU’S VILLAGE, HUT - NIGHT
D’Leh watches as one of the Naku women puts salve on
Tic'Tic’s wound, then adeptly bandages it with a broad leaf.
She quietly exits the hut when she is finished. D'Leh lies
down near Tic'Tic.
TIC’TIC
The Ancient Fathers continue to
play with you.
D'Leh is too troubled to smile.
D’LEH
What should we do?
68.
TIC’TIC
They believe you to be their
leader. If it is true, so be it.
D’LEH
I am no leader of men, no mighty
warrior.
TIC’TIC
Perhaps you are more than you
think. Our people have their own
telling, different, but not so
different.
Tic'Tic pauses for a moment. Then he decides to tell D'Leh
about their prophecy...
TIC’TIC (CONT’D)
The Ancient Fathers told us that a
hunter would arise from the last
great Mannak hunt, a warrior who
would lead our people away from our
valley to a land of two suns.
This is new to D'Leh. He looks at Tic'Tic with big eyes.
D’LEH
Do you think that warrior is me?
TIC’TIC
I don’t know. Your father thought
it might be him. That’s why he
left. He was searching for the land
of the two suns. He wanted to save
our people.
D'Leh tries to make sense of all this. He shakes his head.
D’LEH
Why didn’t you tell me? Why did you
let me believe all these years that
my father was a coward?
TIC’TIC
Old Mother did not want our people
to know that his journey had
failed. She thought...
D'Leh interrupts.
D’LEH
I only want to find Evolet and
bring her home, and maybe find my
father if he is still alive.
69.
D’Leh sits quietly with this.
TIC’TIC
Perhaps the Ancient Fathers have
chosen you to finish what your
father started.
Tic’Tic looks closely at D'Leh.
TIC’TIC (CONT'D)
A good man draws a circle around
himself, and cares for those within
-- his woman, his children. Other
men draw a larger circle, and bring
within their brothers and
sisters...
(beat)
And some men have an even bigger
destiny, and feel they must draw a
circle around themselves that
includes many, many more.
(beat)
Your father was one of those men.
You must decide for yourself,
whether you are, as well.
Tic'Tic looks at D'Leh, then turns over to go to sleep.
D’Leh’s mind whirls. He lies in the dark, staring. Another
night in which sleep will not come easily.
EXT. NAKUDU’S VILLAGE - DAY
The water of the lake reflects the first rays of the sun. The
Naku people are gathered. NINE NAKU WARRIORS, including
Nakudu, prepare to leave with D'Leh and Tic’Tic.
The Naku warriors finish packing, then start hitting their
spears against the handles of their knives, jumping in
unison. Their women and children join them.
Then they stop. The warriors go to their families for final
good-byes, which end with them gently touching their
foreheads together. The tenderness within the families is
moving.
D'Leh and Tic'Tic watch Nakudu say goodbye to his wife. She
CRIES as they touch foreheads together. Then Nakudu leaves
her, joining D'Leh and Tic'Tic.
D’LEH
Your woman’s tears show her fear
that you won’t return.
70.
NAKUDU
Her tears are for our son, who was
taken yesterday.
D'Leh looks at Nakudu, then touches him on the arm, firmly,
sympathetically. Tic'Tic notices the touch. Nakudu thanks
D'Leh with a nod, then motions to his men, and they move out.
The Naku tribe, including the three old men, watches them go.
CLOSE SHOT: Nakudu’s wife, weeping.
CUT TO:
EXT. SAVANNAH - DAY
CLOSE SHOT: Tudu, a boy about Baku’s age, weeps. CAMERA
PULLS BACK to reveal that:
Tudu and Baku, are yoked together. Tudu is one of a handful
of new dark skinned prisoners who have been added to the
slave raiders’ captives.
They trudge through the blazing hot sun, across an expansive
savannah. Evolet walks near them, roped but not yoked to
another prisoner.
We see KA’REN who is weighted down by the yoke he carries
alone. He steps up to Evolet.
KA’REN
(nodding toward the
Warlord)
Lu'Kibu told me that he would claim
you.
She gives him a look.
KA’REN (CONT’D)
We all need water.
Evolet looks around. The captives all look weak from thirst,
their lips dry and blistered.
Evolet walks up to the Warlord, pointing at her dry lips,
bold beyond her situation.
The Warlord looks at her, fixing on her audacity. He throws
her his water bag. Before she drinks, she points at all the
other prisoners.
The Warlord lets out a short exhale. He thinks for a moment,
then YELLS AN ORDER.
71.
A couple of the slave raiders dig into their packs and pull
out sponges, onto which they pour water from their skin
canteens.
They throw the sponges to the captives, who suck from them
greedily. One of the slave raiders hands a sponge to Baku,
who refuses with a proud look.
One-Eye sees and steps up. He grabs the sponge, and sticks it
in Baku’S face. Baku realizes that he is face-to-face with
the man who killed his mother.
Baku’s eyes go cold, and he SPITS IN One-Eye’S FACE.
Enraged, One-Eye grabs Baku by the hair, and hits his head
against the yoke around his neck, again and again...
EVOLET
Stop! You must stop!
Tudu goes to Baku’s defense, KICKING One-Eye FURIOUSLY. That
angers One-Eye even more, and he starts whipping both boys.
Ka'ren, nearby, bravely throws his body at the Slave Raider.
One-Eye gets even more furious. In his anger, he lets go of
the two boys and starts to hit Ka'ren with his whip until he
goes down.
The Warlord watches, expressionless. When One-Eye is finished
with Ka'ren, he walks on. Baku, his face bloodied, watches in
cold hatred...
CUT TO:
EXT. SAVANNAH - DAY
Swaying grassland. Scattered stands of trees. Herds of
grazing animals in the distance. Zebra, giraffes, springboks.
Tic'Tic and D'Leh kneel, looking at the tracks of the War
Party. Tic'Tic and D'Leh exchange a look. Nakudu looks
questioningly at them.
TIC’TIC
One day and a night ahead of us.
D’Leh looks in the direction of the tracks, which head toward
some steep mountains. He turns to Nakudu.
D’LEH
What is the fastest way through
those mountains?
72.
Nakudu points to the mouth of a gorge, several kilometers
away. They head off in that direction.
EXT. GORGE - DAY
D'Leh, Tic'Tic, Nakudu, and the Naku warriors approach the
mouth of the gorge.
Nakudu hisses, and raises his hand. All stop. Nakudu points
into the gorge, where they see:
A PRIDE OF SABER TOOTH TIGERS. A dozen of them, males,
females, young. They are laying about, being warmed by the
rays of the late day sun.
The gorge is narrow, and to pass would mean walking very
close to the tigers. Two of the big males see the humans;
they begin emitting low, rumbling GROWLS...
Nakudu and his men speak among themselves. Then Nakudu speaks
to D'Leh.
NAKUDU
(matter-of-factly)
To go around would take a day... or
more. Speak to them. Tell them to
let us pass.
D'Leh stands there, with Tic'Tic at his side, looking at the
narrow gorge and the tigers.
Tic'Tic scans them also.
TIC’TIC
I don’t see your friend among them.
D’LEH
Neither do I.
TIC’TIC
Perhaps he told them about you.
Gallows humor. D'Leh sighs. Nakudu and his men watching,
waiting for him to do his thing.
D’LEH
(whispering to Tic'Tic)
They will eat us.
D'Leh sees some vultures circling over the carcasses of some
antelopes, near the tigers.
73.
He looks at the vultures, then at the tigers, noting that two
of them are still eating, gnawing on carcasses, and two
others have blood on their faces and paws.
The Naku Warriors are getting agitated. Nakudu demandingly
motions for D'Leh to lead the way.
TIC’TIC
Make up your mind or they will get
angry--
D'Leh bows his head and makes a decision. Without looking
back at Tic'Tic or Nakudu--
HE WALKS INTO THE GORGE...
The others watch as D'Leh walks on a path that takes him
right between the tigers. He walks steadily, to all
appearances, calmly.
D'Leh’s eyes show a different story. He half-expects to be
ripped to pieces at any moment, but, with his back to the
others, he doesn’t show it. Nor does he breathe.
Soon everybody follows him at a safe distance with Tic'Tic
bringing up the rear of the group.
The huge cats, lurking in the grass, circle the men as they
pass. The tension rises even higher as a few of the tigers
creep in close. They are now only a few feet away.
But D'Leh stays the course and continues to lead the men
through the center of the pack. Beads of sweat form on his
brow.
When they finally reach safe ground, he exhales and smiles at
Tic'Tic with great relief. Nakudu and his men stare at him in
awe.
Tic'Tic steps up next to D'Leh, and they speak quietly,
unheard by the others.
TIC’TIC (CONT’D)
I hope the Ancient Fathers don’t
tire of their games.
D’LEH
It wasn’t the Ancient Fathers...
D’Leh nods toward the vultures circling the antelope carcass.
Then he motions to the blood on the tigers’ paws and faces.
D’LEH (CONT’D)
My friends were simply not hungry.
74.
Tic'Tic smiles. They start to move out, then stop as they
see, on a rise ahead of them:
WARRIORS. A dozen men, very threatening looking. Armed. They
are the men of HODA tribe. Tall, dark, imposing. Their leader
is QUINA, very formidable.
D’Leh and Tic'Tic are not sure if they’re about to do battle.
They grip their spears.
Nakudu steps forward, and speaks to Quina. From their
gestures, it’s clear that D'Leh is their main topic of
conversation.
Nakudu rejoins D’Leh and Tic'Tic.
NAKUDU
They lost some of their people too.
They wish to join us.
TIC’TIC
Good.
Quina has come over and takes a closer look at D'Leh, who
looks nervously to Nakudu.
D’LEH
What does he want?
NAKUDU
I told them how you spoke to the
Spear Tooth.
Quina walks around D'Leh slowly, carefully studying him. Then
he stops with his face only inches away from D'Leh’s face.
After a long look in D'Leh’s eyes Quina takes a step back and
makes a deep bow.
Seeing this, the Hoda warriors POUND their spears against
their shields and it becomes clear that they are honoring
D'Leh.
D’LEH exchanges looks with Nakudu and Tic'Tic.
The POUNDING of the spears becomes louder and louder.
AS WE CUT TO:
EXT. SAVANNAH - DAY
United with the Hoda Warriors our men march across the
savannah.
75.
They approach another village that has been attacked by the
Slave Raiders and are joined by its surviving men.
We hear the POUNDING of the spears getting louder.
AS WE CUT TO:
EXT. SAVANNAH, HILL - DAY
D'Leh, Tic'Tic, Nakudu and Quina are marching side by side as
their men make their way down a gentle hillside.
A different tribe, with a strange skin color and even
stranger body markings, joins them.
They speak with Nakudu excitedly. This gets translated to
Nakudu by Quina.
The pounding of spears grows into a MASSIVE and THUNDERING
BEAT!
SMASH TO:
EXT. SAVANNAH - BEFORE SUNRISE
Total silence.
The sky begins to pale. D'Leh lies beside a smouldering fire.
Tic'Tic shakes him awake.
As D'Leh gets up he slowly realizes that--
THE ENTIRE FIELD IS NOW FILLED WITH WARRIORS, all rising one
by one or in whole groups to get ready and march with him.
D'Leh stares in wonder. There must be hundreds who have come
to join them during the night.
He turns to Tic'Tic--
D'LEH
I did not know the earth could hold
so many spears.
In the next moment a new group of warriors appears. By their
demeanor we immediately know that they are bearing bad news.
They clearly speak in a tongue different from that of Nakudu,
as the whole process takes a lot of time, with many people
trying to help with the translation...
76.
D’LEH
(impatient)
What are they saying?
Finally Nakudu turns to D'Leh. His face betrays worry.
NAKUDU
They come from the river. The birds
have arrived.
D’LEH
How far is it to the river?
NAKUDU
Not far. But we must hurry.
D'Leh and Tic’Tic exchange a look. Nakudu lets out a war cry.
NAKUDU (CONT’D)
Yahalah!
Hundreds of warriors follow his example and raise their
spears and SHOUT in response.
Then they start to move.
CUT TO:
EXT. SAND DUNE BY THE RIVER - DAY
They are on the march - at a fast pace.
They have entered a dune landscape with big black boulders
and rocks.
D'Leh starts to enjoy leading his own army. With a proud
smile he looks over to Tic'Tic.
As they climb the crest of a dune, D'Leh’s smile fades--
EXT. ON TOP OF A SAND DUNE BY THE RIVER - DAY
There are many huge ships made out of reeds with large, bloodred sails. But they have all launched, some just minutes
earlier.
They are sailing away from a loading area which is now
deserted. The last ship sailing away catches the wind.
D'Leh can make out the horses and slaves on the boats.
77.
The river snakes its way through sand dunes to the horizon--
CUT TO:
EXT. SHIP - DAY
The slaves are roped to the reed boat. Baku sits next to
Evolet. His face is still beaten up. With big eyes he looks
around and then up to the huge, straining sails.
He watches the wind catching them. Frightened by what he
sees, he turns to his sister.
BAKU
(whispers)
Where do they bring us?
EVOLET
I don’t know, little brother.
Her voice belies her brave front. She looks over to where the
Warlord sits and realizes that he is watching them with a
bemused smile.
CUT TO:
EXT. ON TOP OF THE SAND DUNE BY THE RIVER - DAY
D'Leh looks around. He sees the devastated faces of his
warriors.
NAKUDU
We came too late. The big birds
have flown away.
D’Leh and Tic'Tic exchange a look. Pause.
D’LEH
We have to follow them.
NAKUDU
The river takes them far.
D'LEH
(stubborn)
Then we will walk farther--
NAKUDU
It has never been done. No one has
ever tried to cross the big sea of
sand.
78.
D'Leh contemplates this.
The first of the warriors have already turned to leave.
Tic'Tic looks at D'Leh, who thinks for a moment and then
yells the same battle cry he has heard from Nakudu.
D’LEH
Yahalah
And with this battle cry he starts to march in the direction
the ships are going.
For a moment everybody is too stunned to contemplate the
boldness of this move... but then Tic'Tic begins to follow
him.
Nakudu gathers himself and joins the march. One by one, and
then group by group, the warriors start to march again.
When D'Leh reaches the first of the sand dunes he turns and
looks back.
His pride at the courage of the men behind him - and his
relief - is evident. The whole army is on the move again.
CUT TO:
EXT. EDGE OF DESERT - LATER
D'Leh’s army marches up a steep, mountainous sand dune. They
stop at its crest. It is obvious that they have been walking
for many days.
The warriors are streaked with sweat and dried-on sand, and
many have makeshift turbans wrapped around their heads.
In front of them stretches a daunting sea of sand. It is aweinspiring - and endless.
The only feature in this barren desert is the blue river
snaking out to the horizon. There is no sign of the ships of
the Slave Raiders.
Tic'Tic appears next to D'Leh. He looks worried.
TIC’TIC
(whispers)
I do not like what I see.
D'Leh knows he is right, but they have no other choice.
79.
D’LEH
All we can do is follow the river.
And with that he walks again.
CUT TO:
EXT. DESERT, DEEPER - DAY
The army moves on through the relentless heat. The sun fills
the sky. Uncovered skin is blistered, lips are raw. Water is
greedily emptied from skin-canteens.
D'Leh looks up at the sun.
CUT TO:
EXT. DESERT, EVEN DEEPER - DAY
Days later, and the army looks even more parched and sunblasted than before. A strong wind is blowing.
Again D'Leh leads the men. But he too is clearly at the very
limits of his endurance.
Tic'Tic sees one of Nakudu’s men collapse. D'Leh doesn’t even
notice.
Tic'Tic angrily catches up to him.
TIC’TIC
D’Leh. We have to rest.
D'Leh looks at him, numb. They stare at each other.
D’LEH
No, we have to go on--
He starts walking again. Now Tic'Tic grabs him by the throat
and pulls him close to his face.
TIC’TIC
We have to rest!
D’Leh stares at him...
CUT TO:
80.
EXT. RIVER - NIGHT
The ships of the Slave Raiders sail through the calm waters,
lit by the full moon. The prisoners are all tied together on
deck. Everybody is sleeping. Except for--
One-Eye. When he sees that the Warlord is soundly asleep, he
gets up and slowly starts searching the ship.
It takes him a while to find what he is looking for. When he
sees Evolet sleeping next to Baku and Tudu he crouches.
In the next moment, One-Eye clasps one hand on Evolet’s mouth
to muffle her and then presses the other between her legs!
Evolet struggles to push him away but she is no match for
him.
Baku startles awake. Before he can scream, One-Eye knocks him
out cold.
This brings PANIC into Evolet’s eyes. But in the next moment--
WHAM!
The Warlord rips One-Eye off Evolet. He kicks him viciously,
first in his face and then between his legs until he goes
unconscious.
Trembling, Evolet looks up at the Warlord who breathes
heavily.
He reaches out, wanting to cover up her shoulder, when
suddenly his eyes widen.
He inches back, staring at her naked shoulder.
One-Eye regains his senses. He looks over and also notices
what the Warlord is staring at. A birthmark.
When he notices One-Eye, the Warlord quickly pulls Evolet’s
clothes back over her shoulder.
Evolet gives both men a fearful and puzzled look.
CUT TO:
A STAR FILLED SKY--
We see the North Star again and the belt of Orion. The three
stars have the same configuration as Evolet’s birthmark...
81.
EXT. DESERT - NIGHT
D'Leh is sitting on the crest of a dune. Fires are burning in
the BACKGROUND. His exhausted men are sleeping.
D'Leh stares at the beads from Evolet’s necklace in his hand.
Then he looks up at the sky and makes out the North Star.
Suddenly he jumps to his feet, runs down the dune and shakes
Tic'Tic awake.
D’LEH
(excited)
You were right-- We must rest--
A groggy Tic'Tic looks at him like the desert sun has finally
made him crazy....
D’LEH (CONT’D)
-- During the day and march at
night.
TIC’TIC
How will we find our way with the
moon resting under the earth.
D’LEH
See that light in the sky?
(pointing)
That one--
Tic'Tic looks up.
D’LEH (CONT’D)
It will guide us.
CUT TO:
EXT. DESERT - NIGHT
The army is now marching at night, and looks much more
energized.
D'Leh is taking the lead again. Following his star--
CUT TO:
EXT. DEEPER IN THE DESERT - DAY
The whole army is sleeping during the day.
82.
Tic'Tic reclines against his pack, the only man awake. He
studies D’LEH, who is deep asleep.
CUT TO:
EXT. CANYON - SUNSET
The reed boats of the Slave Raiders float through a deep
canyon.
Evolet is awakened by a strange noise which reflects off the
stone walls of the canyon.
When she looks around she notices that everybody is staring
at something.
Her brother’s mouth is agape. Evolet follows his look and
discovers--
A gigantic stone quarry in which thousands of workers slave
away. They are cutting huge rectangular pieces of stone out
of the mountain.
A horrifying and breath-taking image.
In the foreground we see the stone blocks being loaded onto
ships.
Evolet, Ka'ren and Baku look at each other. Is this the place
of their enslavement?
CUT TO:
EXT. ENORMOUS SAND DUNES - NIGHT
The army is on their night march again. They are now crossing
sand dunes that are three or four hundred feet high.
The wind is getting stronger by the minute. Tic'Tic walks
next to D'Leh. They look at each other with worry. Up ahead
at the summit of the highest dune, the wind kicks up the sand
and starts to blot out the stars.
A sandstorm is blasting D'Leh’s army. They can’t even talk
over the screaming winds. D'Leh tries to signal everyone to
drop down to the ground. He does so himself, trying to cover
his body and face. Tic'Tic drops next to him.
CUT TO:
83.
EXT. BIG DUNE - MORNING
A gigantic sand dune, covered with strange bulges. One of the
bulges moves, then breaks open, as an arm appears...
D'Leh EMERGES FROM THE SAND
The bulge next to him opens up, and Tic'Tic crawls out. One
after another, the other bulges open and reveal D'Leh’s
warriors.
D'Leh and Tic'Tic HEAR SOMETHING...voices? D’Leh climbs the
steep dune, with Tic'Tic following. As they reach the crest,
they look out, astonished, unable to believe what they see:
AN ENORMOUS CONSTRUCTION SITE
On a scale beyond imagination. Two massive buildings, one
nearly completed, the other, half-finished, their gigantic
size almost obscuring their simple geometry...
They are PYRAMIDS
Thousands of workers cover the flanks of the pyramids, and
the surrounding plain. Slaves, twenty thousand souls, toiling
under the brutal sun.
Beyond the pyramids, on a broad plateau overlooking the Nile,
stands a PALACE, the only completed building.
AN ENORMOUS WOODEN SHIP sticks out of the back of the palace,
as if the building has been constructed around it.
D'Leh and Tic'Tic look at the site, trying to comprehend what
they see. Nakudu steps up next to them, amazed.
NAKUDU
The mountains of the gods.
D’Leh looks at the enormous number of slaves, knowing that
somewhere, among all those thousands, must be Evolet.
EXT. NEARLY FINISHED PYRAMID - LATE AFTERNOON
We fly over the enormous construction site, toward the
pyramid that is nearly completed. In the light of the
afternoon sun, we see thousands of slaves working.
Teams of men pull massive stone blocks up huge ramps, which
are nearly as big as the pyramids themselves.
84.
At the top of the pyramid is a smaller pyramid, about ten
feet high, sheathed in gold. This will be the capstone of the
pyramid when it is finished.
RAMP, NEAR THE TOP
Ka'ren, Lu'Kibu, and Moha pull ropes, part of a gang of two
hundred men, pulling a multi-ton cut stone. Hard, backbreaking work.
Lu'Kibu loses his footing and falls. One of the overseers
WHIPS him mercilessly, until he gets to his feet and resumes
his place, pulling.
Baku AND Tudu dump water in front of the stone to lubricate
its movement.
Evolet trudges up the ramp, in a long line of women, who
carry water buckets on yokes.
The work crew nears the small golden pyramid. Baku, running
to refill his bucket, pauses for a second to look at it.
Mesmerized, he reaches out to touch its golden surface...we
hear a WHIP LASHING...
BAKU
Arrgh--
Baku turns in pain and looks into the angry face of a Slave
Guard, who continues whipping him mercilessly until,
suddenly...
A STRANGE HORN SOUNDS
The guard stops whipping Baku, and starts yelling at the
slaves who immediately prostrate themselves, eyes to the
ground.
Baku, Tudu, Evolet, Ka'ren, and the other new captives see
what is happening. The guards YELL at them, and they follow
suit, lying down.
After all of the slaves lie down, the guards lie down as
well. As the dust settles, an eerie stillness falls over the
entire site.
Baku, Tudu, and Evolet lie near each other. Very carefully,
they raise their eyes slightly, and look over the edge of the
ramp, where in the distance, they see:
THE PALACE
A crowd of bald men, of all ages, all wearing purple clothes.
They are the PRIESTS. They converge at the palace steps.
85.
The huge stone door of the palace opens and a tall
rectangular box gets carried out. It is a GIGANTIC LITTER,
carried by a dozen men on either side.
A procession forms and heads down the avenue from the palace
to the pyramids. The litter is in front, with priests and
guards following in file.
ON THE PYRAMID CONSTRUCTION RAMP
Everyone lies on the ground, all eyes lowered. Ka’ren,
Lu'Kibu, and Moha together.
Moha raises his eyes slightly, taking a glance, seeing the
approach of the procession.
MOHA
(whispering)
What do they carry?
Ka'ren does not look up. He presses his head to the ground.
RAMP NEAR THE TOP
Baku, Tudu, and Evolet lie near each other, peeking, they see
the litter. They whisper:
BAKU
They carry a god in that.
EVOLET
A god? Who told you that?
BAKU
Tudu. One of the old men told him.
EVOLET
You learned Tudu’s words?
BAKU
Yes. Some.
VIEWING PLATFORM
The procession reaches the edge of the construction site. The
litter is set down on an elaborate platform.
The HIGH PRIEST steps up to the litter, and parts the
curtains slightly. We realize his fingers have extremely long
fingernails which are painted gold.
We get no view of the being within, save a glimpse of:
86.
Long golden fingers, more articulated, more refined than
those of the High Priest - but not really human.
Then we see--
Cold eyes, strangely distorted.. We can hardly see them in
the darkness of the litter. They are hidden behind a thick
veil...
For a long moment, the God observes the progress of his tomb.
Then, a flick of his hand, like the recoil of an insect.
The High Priest closes the litter’s curtains. The bearers
pick up the litter, and the procession turns and heads back,
toward the palace, moving through the construction site.
ON THE RAMP
Moha raises his eyes slightly for another look. Ka'ren snaps
a warning:
KA’REN
Moha! Do not look.
Too late. One of the slave guards sees Moha looking. The
slave guard waits, then, as soon as the procession is out of
sight, he rises, calling to several other slave guards.
The slave guards GRAB Moha, AND THROW HIM OFF THE RAMP.
Ka'ren and Lu’Kibu look on in shock as...
Moha FALLS, seventy feet to his death, landing with a
sickening thud.
One of the slave guards whips Ka'ren and the others, yelling
at them to get back to work.
As Ka'ren goes back to the ropes, he and Lu'Kibu see Moha’s
body dragged off, and thrown onto a sledge that has several
other bodies on it -- the day’s toll of the dead.
CUT TO:
EXT. DUNES BY CONSTRUCTION SITE - SUNSET
A large flock of vultures circles overhead.
Three small figures creep through the sand -- D'Leh, Tic'Tic
and Nakudu doing reconnaissance.
D'Leh sees the vultures landing, one after another,
disappearing behind the next dune.
87.
D’Leh climbs the dune and looks out to see a gruesome
sight...
The corpses of the day have been dumped into the desert.
Vultures feast on them.
Tic'Tic and Nakudu join D'Leh. They look out in horror. D'Leh
SEES Moha, among the dead.
D’LEH
Moha...
D'Leh runs to him. The vultures fly off. D'Leh sinks to his
knees, looking at Moha’s dead eyes.
EXT. SLAVE CHECK POINT - AFTER SUNSET
The sky darkens. Endless lines of slaves make their way back
towards their sleeping quarters.
They all have to pass by a checkpoint where they get counted
and-- separated.
The male slaves march on, while the females veer off to their
own quarters, located on the opposite side of the slave
encampment.
As Evolet nears the point at which the male and female slaves
are separated, she sees a LARGE, ELABORATELY DECORATED
SUNSHADE sticking out of the crowd, coming her way. It is
carried by a group of young slave boys.
Beneath it walks a heavyset man, accompanied by the Warlord.
The heavyset man is the CHIEF OF THE GUARDS.
They stop at a short distance from Evolet. She realizes with
dread that the two men are talking about her.
The Warlord and the Chief of the Guards come to agreement on
something. They shake hands, and the Warlord smiles at
Evolet.
Evolet watches the Warlord walk back to his men, who hold his
horse.
One-Eye is among them, having watched all this very
carefully.
EXT. RIM OF A SAND DUNE - EVENING
D'Leh, Tic'Tic and Nakudu appear behind a sand dune.
88.
In the fading light they watch the long line of male slaves
as they’re herded into their miserable barracks.
Suddenly Nakudu’S eyes widen. He has spotted Tudu, his son.
NAKUDU
(whispering)
Tudu.
Nakudu can barely hold himself back.
D'Leh and Tic'Tic spot their own people -- Baku, Ka'ren,
LU’KIBU and the others--
D’LEH’S eyes search for Evolet, but cannot find her.
EXT. OUTER WALLS - SLAVE QUARTERS - NIGHT (LATER)
Outside the walls. D'Leh, Tic'Tic, and Nakudu move into the
shadows at the base of the wall. D'Leh carries a rope, at the
end of which is a GRAPPLING HOOK fashioned from the points of
spears.
They check for guards on the top of the wall -- none are
visible. D'Leh throws the hook and rope up. It doesn’t catch.
Another throw, it catches on the top. D'Leh starts climbing.
The others wait their turns.
EXT. SLAVE QUARTERS - NIGHT
Slave guards patrol the buildings. One of the guards hears a
NOISE, too late. Nakudu impales him on his spear.
D'Leh and Tic'Tic move in quickly. Tic'Tic points to one of
the buildings. D'Leh nods and signals. They head in that
direction.
INT./EXT. ROOF OF SLAVE QUARTERS - NIGHT (LATER)
D'Leh, Tic'Tic, and Nakudu crawl over the wooden grid of the
ceiling and look down, into the horribly crowded slave
barracks.
Nakudu touches D'Leh’s arm and points to the middle of the
room--
He has found the two boys.
They crawl closer, and D'Leh peels a piece of bark off one of
the poles making up the grid on which they’re crawling.
89.
He throws it at the boys. Baku stirs then wakes up. He sees
the three figures silhouetted against the deep blue sky.
D’LEH
(loud whisper)
Baku!
Baku realizes who it is, and he’s overjoyed. Baku wakes Tudu
and points. Tudu sees his father, and can barely restrain
himself.
They watch as D’Leh, Nakudu and Tic'Tic climb down into the
crowded barracks. Other slaves begin to stir.
Nakudu tenderly presses his forehead against his son’s.
BAKU
D’Leh...
D’LEH
Baku, where is your sister?
D'Leh fears the worst.
BAKU
The women are in different huts,
but she is alive, I was with her
today on the mountain.
D'Leh sighs with relief. He sees Tic'Tic among Ka'ren and the
other Mammoth Hunters. D’Leh joins them, embracing Ka'ren.
D’LEH
I thank the Ancient Fathers to find
you alive.
(beat)
I need your forgiveness, Ka’ren.
Ka'ren looks D’Leh in the eyes.
KA’REN
You have it.
By now almost all of the captives are awake. They gather
around. D'Leh speaks, Nakudu translating.
D’LEH
We came to free you. We have many
spears with us. They wait behind
the sand.
The faces of the captured mammoth hunters light up.
90.
Behind them, there is a sudden commotion. A giant of a slave,
NOEH, steps up to D'Leh, speaking to him in a loud and
aggressive tone.
D’LEH (CONT'D)
(to Nakudu)
What do his words mean?
NAKUDU
He asks you, why you think you can
do what no one has ever done
before.
D'Leh looks at Nakudu.
D’LEH
Tell him how far we have come.
Nakudu speaks to Noeh and the others. The slaves become more
and more interested in Nakudu’s words, and Noeh’s face slowly
softens as he hears the story.
Nakudu steps up to Noeh and speaks to him in an urgent tone,
pointing at D'Leh, and at the giant Sabre Tooth he’s wearing
around his neck. This has a profound impact on the crowd.
Noeh speaks, Nakudu translates.
NAKUDU
He asks if you want to go against
the Gods...
Tic'Tic answers, Nakudu translates:
TIC’TIC
Yes. We are here to learn about
them, so we know how.
Noeh thinks for a moment.
NOEH
Akka le!
NAKUDU
We will walk with him.
D'Leh, Tic'Tic and Nakudu follow Noeh.
EXT. OUTSIDE THE SLAVE QUARTERS - NIGHT
Outside, two SENTRIES make their rounds, checking on the
slave barracks. Everything seems quiet.
91.
INT. SLAVE QUARTERS - NIGHT
Noeh leads D’LEH, Tic'Tic and Nakudu to the back of the slave
quarters, where the old and infirm have been placed.
They come to a corner where the ground is covered with hides.
Noeh gives a signal.
Two of the other slaves roll back the hides, revealing a lid
of wooden sticks that cover a deep hole in the ground.
The two slaves reach into the hole, and lift out a roughlymade stretcher, on which lies an OLD MAN. When we see his
milky eyes, we realize that he was blinded.
Noeh speaks to him, and then to Nakudu.
NAKUDU
He knows about the gods. He was
once their servant.
D'Leh and Tic'Tic look at each other.
TIC’TIC
(to Nakudu)
Ask him what he knows.
The BLIND MAN speaks in a weak, whispering voice. Nakudu
translates.
NAKUDU
He believes these Gods came across
the big water...and many say that
they travelled from the stars...
The BLIND MAN’S voice can hardly be heard.
NAKUDU (CONT'D)
First there were three, but now
only one of them is left. He
builds the mountains so they can
travel back to the stars.
D’LEH
(to Nakudu)
There is only one God left... Is he
sure?
Nakudu translates again and the BLIND MAN nods.
D’LEH (CONT’D)
Can we defeat him?
92.
Nakudu asks the BLIND MAN. His voice, when he finally
answers, is barely audible.
NAKUDU
He says, no man can conquer the
God.
D'Leh looks at the BLIND MAN with pleading eyes.
D’LEH
There must be a way. There must be
something we can do...
The BLIND MAN remains silent. D’Leh sees that this is all the
information they’re going to get. He turns to Tic'Tic who
shrugs. Then the BLIND MAN speaks again.
NAKUDU
He says once, only once, he heard
the God speak of the one he fears.
D'Leh listens up.
NAKUDU (CONT'D)
He says, there is a telling of a
strong one, who will bring
bloodshed to the house of the Gods.
And that one, he says, bears the
mark of the stars.
(beat)
He says, the God trembles when he
speaks of the strong one.
The BLIND MAN raises his head from the stretcher, looking up
with milky eyes.
NAKUDU (CONT'D)
He asks, if you wear the mark of
the stars?
D'Leh silently shakes his head, and the BLIND MAN sinks back
on his bed.
EXT. OUTSIDE THE SLAVE QUARTERS - NIGHT
The two SENTRIES have found the dead guard. They rush off.
INT. SLAVE QUARTERS - NIGHT
Noeh signals the two slaves to take the BLIND MAN back to his
hiding place.
93.
Suddenly D’LEH notices something -- the BLIND MAN is wearing
D’LEH’S FATHER’S IVORY BRACELET.
D’LEH
Who gave you this?
The Old Man speaks, Nakudu translates.
NAKUDU
The man who saved his life, when he
ran away from the God.
D'Leh tries to make sense of that, then suddenly hears the
SOUNDS OF GUARDS RUNNING, calling out.
TIC’TIC
We have to leave!
D’Leh speaks urgently to the Blind Man.
D’LEH
Where is this man?
They hear the gates of the Slave Quarters being opened.
Nakudu hesitates to tell D'Leh what the Blind Man said.
D’LEH (CONT’D)
Tell me!
NAKUDU
They killed him, years ago. His
bones are in the sand with the
others.
GUARDS enter the quarters with torches, YELLING at the
slaves.
No more time. D'Leh, Nakudu and Tic'Tic hurry off, the same
way they came in.
EXT. OUTSIDE THE SLAVE QUARTERS - NIGHT
D'Leh, Nakudu and TIC’TIC slide down the walls of the Slave
Quarters and disappear into the dark. Unseen--
ALMOST! At the last moment, one of the GUARDS senses
movement by the sand dunes.
EXT. EDGE OF THE DESERT - NIGHT
The full moon hangs low over the desert. We see three dark
shadows rushing up the incline of a sand dune.
94.
D'Leh, Tic'Tic and Nakudu, make their way back to their
army’s camp. They disappear over the rim of a sand
dune...but...
FOUR GUARDS STEP INTO FRAME, tracking them.
EXT. BETWEEN SAND DUNES - NIGHT
D'Leh, Tic'Tic and Nakudu move through a steep valley between
two towering dunes. We hear a CRACKING sound, like the
breaking of fire wood.
D'Leh slows, then stops. Tic'Tic and Nakudu do the same. They
look to the ground -- that’s where the CRACKING came from.
HORRIFIED, they realize they are standing on an endless field
of human bones and skulls.
SWOOSH!! An arrow flies, barely missing Nakudu.
They turn and see THE FOUR GUARDS who followed them,
ATTACKING...
Nakudu throws his spear, killing one of the GUARDS.
D’Leh, Tic'Tic and Nakudu start running toward the crest of
the sand dune. The guards chase...
We see pain on Tic'Tic’s face as he holds his hand on his
wounded leg. D'Leh and Nakudu run ahead.
Another round of arrows barely misses them...
At the crest of the dune, Tic'Tic sees that they’re close to
their army’s camp...they are about to lead the guards right
into discovering their entire army!
Tic'Tic stops, turning back to face the GUARDS. He STABS one
of them with the White Spear, then kills another, then pulls
it out, and, with a mighty thrust, throws it and kills yet
another.
D'Leh turns, seeing what Tic'Tic is doing. D’Leh races back
to help him.
Too late! The LAST GUARD SHOOTS AN ARROW which PIERCES
Tic'Tic’S CHEST, sending him tumbling down to the bottom of
the dune.
D'Leh sees. Enraged, D’Leh THROWS HIS SPEAR, powerfully,
hitting the guard in the chest, killing him instantly.
95.
Nakudu rushes back, and stops. He sees D'Leh run to Tic'Tic’s
side, with tears welling.
D'Leh throws himself to the ground, kneeling next to Tic'Tic,
staring at the wound in his chest in horror. D'Leh cradles
Tic'Tic’s head. Tic’Tic speaks weakly.
TIC'TIC
I am full with days...
D’LEH
No, do not say that.
D'Leh looks at him with pleading eyes.
D’LEH (CONT'D)
Please do not die, Great Hunter.
We need you...
Nakudu looks on in silence from the top of the sand dune, as
Tic'Tic gets weaker.
D’LEH (CONT'D)
(desperate)
What should I do?!
Tears run down D'Leh’s face.
TIC’TIC
You never heard the end of Old
Mother’s dream...
D'Leh leans closer because Tic'Tic’s voice is only a breath
now.
TIC’TIC (CONT’D)
In her dream Old Mother saw...that
Evolet will have your children...
D’LEH
My children?
TIC’TIC
Yes...many of them...
TIC’TIC smiles weakly and puts his hunting whistle in D’LEH’S
hands.
TIC’TIC (CONT’D)
I always want you to have this.
And with these words, he breathes his last breath.
96.
D'Leh is devastated. He stares into the darkness, at the
bones of the thousands of nameless dead.
SMASH CUT TO:
INT. WOMEN’S SLAVE QUARTERS - NIGHT
As hellish and cramped as the men’s quarters. Hundreds of
women crowded together.
THE DOORS BURST OPEN. A GROUP OF PRIESTS enter, accompanied
by slave guards carrying torches. They begin searching,
looking among the women for someone.
Behind the priests, One-Eye.
Evolet startles awake. She looks around and sees them coming
towards her. One-Eye spots her, and points her out to the
priests and guards.
As the priests approach Evolet, all the other slaves move
away from her.
The priests pull her to her feet, and drag her out of the
quarter.
In the background, we see One-Eye receiving the rewards for
his betrayal.
CUT TO:
EXT. CAMP IN THE DESERT - NIGHT
THE WHITE SPEAR is stuck in the ground, silhouetted against
the setting moon on the horizon.
D'Leh’s army is gathered, honoring the death of the great
hunter.
D'Leh stands at a mound of rocks, Tic'Tic’s resting-place.
D'Leh is silent, apparently drained of emotion.
His army watches as Nakudu steps up to him.
Nakudu pulls the White Spear from the ground and holds it out
to D'Leh.
The whole army looks on in anticipation.
D’Leh looks at the White Spear. After a long moment he takes
it from Nakudu.
97.
Then slowly, silently, D'Leh RAISES HIS ARM, HOLDING THE
WHITE SPEAR OVER HIS HEAD, presenting it to the
warriors...his warriors.
Silence...then...
AS ONE, ALL FOUR HUNDRED WARRIORS RAISE THEIR SPEARS OVER
THEIR HEADS IN SILENT SALUTE.
EXT. PROCESSIONAL ROAD/NEAR QUARRY - NIGHT
Evolet is led by the priests toward the palace which is lit
by torches.
When she comes closer to the imposing building, she sees
another group of priests ahead, standing next to the litter
of the God.
Evolet slows. As she approaches the God, she realizes that
all the priests are looking down into the stone quarry
adjacent to the processional road.
IN THE QUARRY
A gigantic hole cut out of the bedrock. We see THE God for
the first time, full figure. He is covered in purple and
golden fabric which flows in the wind. His hands have
unnatural long fingers, covered in gold. He is extremely
tall. On his head sits a strange crown.
The God stands behind some sort of astronomical sighting
device like a cross-staff. He is measuring a huge figure
which has been cut out of the bedrock. The figure has the
HEAD OF A LION.
Precisely lined up with the body of the carving, exactly
overhead, is the star constellation, LEO.
AS Evolet AND THE PRIESTS PASS, she stares in wonder at the
statue in the pit. With her, we see what THE SPHINX looked
like when it still had the head of a lion.
CUT TO:
EXT. PALACE / ENTRANCE - NIGHT
The priests lead Evolet up the stairs. She sees the door at
the top of the stairs opening. They enter the palace.
98.
INT. PALACE / GREAT HALL - NIGHT
Evolet finds herself in a vast, dark space. She hears the
sound of water. The priests lead her through a great hall.
She looks up, seeing an ENORMOUS SHIP, floating in a canal of
water which connects the palace with the river.
The ship is tied with thick ropes to heavy square pillars.
The wood of the ship is very old and dry, ancient.
INT. PALACE / HOLDING CHAMBER - NIGHT
Evolet is pushed into a dark chamber. She looks around,
frightened. She listens...silence. She walks to the wall,
and sits down.
EXT. CAMP IN THE DESERT - NIGHT
D’Leh sits on a ridge, alone. The pyramids are visible in the
distance. D'Leh’s men, a good distance away, look at him,
watching, waiting in silence.
Some of the warriors begin to whisper among themselves, their
faces reflecting their uncertainty. Nakudu SHUSHES them,
pointing at D'Leh, as if to say: “Quiet, he’s thinking.”
D’Leh looks at the hunting whistle. He weighs it in his hand,
then...an idea.
D'Leh gets up and walks to a spot from which he can address
his men, all of whom get to their feet.
D’Leh speaks to them, with Nakudu translating, and other
warriors translating, in turn, from Nakudu into their
languages.
D’LEH
Hear me! You have followed me from
the valley of the spear tooth.
Together we crossed the sea of
sand. Together we are strong.
He draws the White Spear over them, encompassing them all.
D’LEH (CONT’D)
My people, the people of the
Yagahl, bring down the mightiest of
beasts, the Mannak. The Mannak is
great, and we are small, and yet,
we kill him. We kill him because
we hunt together, as one.
99.
The men listen carefully.
D’LEH (CONT’D)
Those who have taken our brothers
and sisters are many. Many more
than we are here. But, together,
we can defeat them. For though we
are few, with our brothers and
sisters who are held there, we
become the many.
(beat)
When the sun rises, we will hunt
our enemy, and when the sun sets
tomorrow, he will be dead.
The men MURMUR among themselves with cold resolution. D'Leh
raises the White Spear, then thrusts it into the earth.
D’LEH (CONT’D)
But..we go on this hunt without our
spears.
Nakudu, translating, isn’t sure he heard correctly.
NAKUDU
(to D'Leh)
Without spears? With empty hands?
D’LEH
(to Nakudu)
We make them believe we come with
empty hands.
SMASH CUT TO:
EXT. SAND DUNES/EDGE OF CONSTRUCTION SITE - PRE DAWN
CLOSE SHOT: D’LEH’S FACE. Covered with dust, like the faces
of the slaves who work on the pyramids.
CAMERA PULLS BACK to reveal that D'Leh is crawling up a sand
dune. The shot looks very much like the one at the beginning
of the film when D'Leh and his tribe were moving in on the
mammoth herd.
CAMERA WIDENS further and we see Nakudu and Quina beside
D’Leh, their faces also covered with dust.
And behind them, the four hundred warriors, all camouflaged
with dust, all looking like slaves, except for the spears
they carry.
In the distance, we see the construction site, barely visible
in the pre-dawn light.
100.
In the foreground, we see about three dozen slave guards on
watch, along the perimeter of the construction site.
CLOSE ON THE SLAVE GUARDS
D’Leh’s army appears behind them on the crest of a dune. On
D'Leh’s signal, they silently run down the dune, and
overwhelm the guards. Within seconds, all the guards here are
dead.
This time, D'Leh doesn’t make the same mistake. His men start
burying the dead guards in the sand.
EXT. CONSTRUCTION SITE - DAWN
CLOSE SHOT: D’LEH APPEARS BEHIND A STONE BLOCK
He watches as his warriors scatter throughout the deserted
construction site.
Then D'Leh and Nakudu hurry to the base of one of the ramps.
They hide between some stone blocks, go to their knees and,
with their hands, dig long, shallow holes in the sand, a few
inches deep. Then they bury their spears, carefully obscuring
any sign of the weapons.
The rest of D'Leh’s men do the same throughout the
construction site. Then they secret themselves among the
massive cut stones as well as in other hiding places.
When D'Leh and Nakudu see the first Slave Guards approaching,
they go deeper into hiding.
A HORN SOUNDS...
EXT. SLAVE QUARTERS - DAWN
The gates of the slave barracks are opened, and the slaves
are herded toward the construction site.
We follow Baku and Tudu. They look around and see Ka'ren and
Lu'Kibu walking nearby.
EXT. RAMP TO THE NEARLY FINISHED PYRAMID - SUNRISE
D’Leh watches from his hiding place. Small groups of his army
leave their hiding places, joining the long lines of slaves
who are walking to work.
D'Leh scans the slaves moving past him, searching.
101.
When he sees Baku, Tudu and Ka'ren approaching, he gives
Nakudu a sign. Both men, in a daring move, slip into the
passing line of slaves, unseen by the guards.
He walks near Baku and Ka'ren. Ka’ren gives D'Leh a nod. Baku
is very excited to see D'Leh.
D’LEH
(whispers)
Where is Evolet?
BAKU
I don’t know.
Baku looks around, and sees some women lining up for their
work.
BAKU (CONT’D)
She was with them yesterday...
A WHIP LASHES across Baku’s back. A slave guard yells at the
boy. They walk on. D'Leh struggles to contain his anger,
glaring at the slave guard who whipped Baku.
CUT TO:
INT. PALACE / HOLDING CHAMBER - PRE DAWN
Evolet looks up, hearing the door open. Two priests stand at
the doors. Guards enter, pull her to her feet, and walk her
out.
INT. PALACE / GREAT CHAMBER - PRE DAWN
Evolet is led by the two priests into the cavernous chamber.
Early morning light filters in through openings in the
ceiling.
When they leave her alone, she looks around. She sees a big
black stone block with parchments laying on top of it...
She inches closer, stares in wonder...
A MAP - an ancient map, but we can clearly see the outline of
the distinctive continental shores of Africa and South
America and North America and a detailed Mediterranean
coastline....
Next to that, is a STAR MAP...
And next to that are CONSTRUCTION DRAWINGS OF THE PYRAMIDS.
102.
A noise makes her turn...
The High Priest has entered the chamber. He looks at her with
curious eyes. He slowly comes closer and closer....
He starts to speak. Asks her questions. Evolet does not
understand his language.
The High Priest motions for her to turn around.
Evolet hesitates, then turns her back toward him.
The High Priest comes up to her and reaches out with one of
his long painted fingernails and carefully inspects Evolet’s
shoulder.
When he sees what he was searching for, his face turns to
stone.
EXT. NEARLY FINISHED PYRAMID / BASE OF THE RAMP - DAY
A GUARD WHIPS THE BARE BACK OF ONE OF THE SLAVES.
CAMERA PULLS BACK to reveal more than a hundred slaves
dragging one of the big stones up the steep ramp. D'Leh is
among them. Next to him, we see Ka'ren and Nakudu.
Baku and Tudu lubricate the smooth clay of the ramp, pouring
water between it and the stone.
They are at the base of the ramp.
The Slave Guard who supervises their work is the same one
who was responsible for Moha’s death. He snaps his whip,
lashing the slaves’ backs, again and again.
As D'Leh pulls on the rope, he scans the construction site,
checking on the placement of his warriors among the slaves --
on the ramps; along the processional road; among the cut
stones; in position everywhere, ready to strike.
Suddenly D’Leh spots the Warlord. Unbeknownst to D’Leh, the
Warlord is searching for Evolet.
He starts to speak heatedly with the Chief of the Slave
Guards, who keeps shaking his head.
Frustrated, the Warlord looks around and discovers Baku
working on the ramp.
103.
When he starts to walks towards Baku, D’Leh gives an alarmed
look to Nakudu and Ka’ren.
The Warlord comes up to Baku and asks him about Evolet. Baku
shakes his head, but looks nervous.
Then Baku sees a group of Palace Guards coming towards them.
They are led by the same group of priests who picked up his
sister Evolet.
The Warlord doesn’t see them coming. But he has seen Ka’ren,
who is working next to Nakudu.
The Warlord speaks to the Slave Guard, who nods and then
yells for them to stop their work. Then he walks up to Ka’ren
and asks him the same question that he asked Baku.
D’Leh stands right next to the Warlord.
He turns away, trying not to be discovered. He sees the
Palace Guards coming towards them. One of the Priests point
at him.
Have they discovered him? Should he run?
Before he can react, the Palace Guards grab the Warlord and
drag him down the ramp.
D’Leh watches the Warlord being take away. The Warlord
protests as they bind him and march with him towards the
Palace. The priests follow.
D’Leh exchanges a look of relief with Nakudu and Ka’ren. A
whip cracks over them....
They take up their ropes and start pulling again...
CUT TO:
INT. PALACE / HALLWAY - DAY
The High Priest rushes towards a door, at which two palace
guards stand in attendance. The priest motions curtly to
them, they open the door, and he enters.
INT. PALACE / GOD’S CHAMBER - DAY
The High Priest enters the ante chamber. Gossamer curtains
obscure his view.
We catch glimpses of a group of young servants as they
silently work around the tall figure of the God.
104.
As we see the servants more clearly, we see that they have
all been BLINDED.
The young, blinded slaves undress the God. The God himself
pulls the long, golden fingers off, one-by-one, handing them
to the slaves, who lay them on a table.
A closer view reveals that they are not fingers, but merely
jewelry.
The High Priest comes closer, afraid to intrude...
Two of the blind servants lift the voluminous outer robe off
the God, revealing that his body is much smaller than it
appeared, and revealing that his arms and legs are covered
with bandages.
The young servants start unwrapping the bandages. We catch
glimpses of white, wrinkled skin, with the signs of an
abnormal skin condition. The God’s skin is literally flaking
off.
Suddenly all the blind servants turn at a sound. The High
Priest quickly prostrates himself, totally flat to the floor.
The God turns his head, and again we see his cold eyes
through the veil which still covers his upper body. The veil
distorts our view of his face. Who is he? What is he?
The God listens to the Priest, who speaks quickly, his face
pressed to the floor.
The God is stunned when he hears what the High Priest has to
say.
CUT TO:
EXT. RAMP TO THE NEARLY FINISHED PYRAMID - DAY
D'Leh looks around the construction site, checking his men
again, waiting for the right moment.
The slave guard sees Baku and Tudu pausing in their work. He
yells at the two boys, then whips them. The boys cower as the
whip lashes their backs.
D'Leh decides. He nods to Nakudu and Ka'ren, then...
D'Leh BLOWS Tic'Tic’S HUNTING WHISTLE
Its high pitched sound carries over the whole of the
construction site.
105.
The slave guard whipping Baku and Tudu stops, and turns to
the sound.
To his surprise, D'Leh, Nakudu, and Ka'ren are right in front
of him. They grab the slave guard.
He struggles in panic, as they THROW HIM OFF THE RAMP...
He falls with a stunned expression on his face, hitting the
ground, far below, with a THUD...
Everyone heard the whistle, everyone saw the slave guard
thrown from the ramp...
Time stands still...
THEN ALL HELL BREAKS LOOSE
What started with D'Leh’s little group, spreads like fire
over the entire construction site. Everywhere, guards and
overseers are attacked...
In each area, it begins with warriors from D'Leh’s army, who
throw themselves to the sand, dig, and then RISE UP WITH
SPEARS IN HAND, and attack the guards...
Other warriors, and some slaves, use work tools as weapons,
attacking the guards...
One of the slaves swings a huge, stone-cutting hammer,
smashing a slave guard in the face. As the guard sinks to his
knees, another slave finishes him off with a second hammer
blow...
Quina, digging in the sand, finally finds his spear, rises,
and throws, killing a guard...
Baku and Tudu together, attack one of the slave guards, with
Baku going for his legs, as Tudu slams him in the face with
his water bucket...
The rebellion spreads. More and more slaves join with D'Leh’s
warriors, using their work tools as weapons...
Other slaves attack with their bare hands...
Everywhere slaves turn against their masters...
D'Leh, Nakudu and Ka'ren fight their way down the ramp, then
find their way blocked by the huge stone they were pulling up
the ramp.
A small group of slave guards uses the narrow spot between
the stone and the edge of the ramp as their last bastion.
106.
D'Leh puts his shoulder to the stone block, motioning to
Nakudu and Ka'ren to do the same.
Other slaves around them realize what they’re doing. They
rush over and, with the unified effort of a score of them,
they push the stone sideways...
Which pushes the guards off the edge of the ramp...
D’Leh and others continue pushing the stone, which goes over
the edge, tumbles down the side of the ramp, and CRASHES onto
the guards...
Other groups of slaves who have seen this follow suit.
We see a stunning tableau, as GIANT STONE BLOCKS are shoved
over the edges of the ramps, FALLING AND CRASHING down
everywhere. Their THUNDEROUS SOUND fills the air...
SMASH CUT:
INT. PALACE / GREAT CHAMBER - DAY
SILENCE.
The thick walls of the palace keep all sounds from outside
out.
Evolet and the Warlord lay flat on the ground. The tall
figure of the God enters the room.
The High Priest cowers in the background, watching as the God
walks up to Evolet on the ground, and studies her in silence.
The God hovers over Evolet.
Evolet sees only his high platform shoes.
Bursting with anger, he rips the clothes off Evolet’s
shoulders.
For the first time we see...
Evolet has a birthmark that resembles the stars of Orion’s
belt.
The God realizes that his worst nightmare is coming true...
THE ONE WITH THE MARK OF THE STARS HAS ARRIVED!
His cold eyes stare down at Evolet and her birthmark, when...
107.
Suddenly a group of young priests storms into the Great
Chamber in utter PANIC!
They throw themselves in front of the God, who has turned in
surprise at the intruders.
For the first time we hear the VOICE OF THE God, which is
harsh and very foreign-sounding, other-worldly.
The young priest answers with fear in his voice. The news he
brings has a huge impact on those people in the room who can
understand him.
Evolet sees the Warlord, lying next to her, look up in shock
at the Young Priest’s words. She looks over at the High
Priest, and sees utter disbelief on his face.
The God shrieks an order, his voice shrill from anger.
Palace guards grab Evolet and the Warlord, and drag them out
of the chamber.
CUT TO:
EXT. CONSTRUCTION SITE - DAY
MASSES OF SLAVES spill down the ramps of both pyramids, and
converge in the flat part of the construction site.
D'Leh reaches the bottom of his ramp. He runs toward the spot
among some cut stones where he buried the White Spear, but a
slave guard intercepts him, attacking D’Leh with a spear.
D'Leh feints, throwing the guard off-balance, then moves in,
pulls the guard’s dagger from his belt, and stabs him,
grabbing his spear as he falls.
He sees the high-walled palace in the distance, about a
kilometer away, at the end of the processional avenue.
D'Leh sees Nakudu, nearby.
D’LEH
Nakudu, to the palace!
As D'Leh starts to run toward the palace, Nakudu shouts to
the slaves around him. They all follow D'Leh who storms
ahead.
WE CUT WIDE and see hundreds, then thousands of slaves doing
the same, following D'Leh, running down the processional road
toward the high walls of the palace.
108.
Most of D’Leh’s warriors carry their spears. Some of the
slaves carry weapons, taken from the guards. Others carry
tools as weapons. And still others, have only their bare
hands and their fury.
EXT. PALACE - DAY
The God stands in the shadow of the palace’s main door frame.
His cold eyes watch the solitary figure of D’Leh, who is
running towards the palace followed by thousands of slaves.
In the foreground, there’s hectic activity. Horses are led
into the courtyard, and heavily-armed soldiers and palace
guards rush to their positions.
D'Leh RUNS, now only a couple of hundred meters away from the
palace walls.
CLOSE SHOT: Heavy ropes are tied to a woman’s hands.
THE MASSIVE GATES of the courtyard open...
D’Leh slows, confused by the opening of the gates before him.
The onrushing slaves behind D’Leh slow as well.
Then, D'Leh sees something within the gates that makes his
blood freeze...
Evolet, in the middle of the courtyard, her arms
outstretched, her hands TIED TO HORSES on either side of her,
READY TO RIP HER APART...
One-Eye stands near her, a whip in his hand, ready to lash
the horses, clearly her executioner.
In front of her, a sea of HEAVILY-ARMED SOLDIERS and PALACE
GUARDS...
Behind her, the Warlord, his hands roped together, next in
line to be executed.
D'Leh stops. Nakudu and Ka'ren ease up next to him...
All of the slaves behind come to a stop, confused that their
leader has stopped.
The High Priest turns to the palace entrance...
THE God APPEARS FROM OUT OF THE SHADOWS, backlit by the giant
sun disc which forms the entrance to the palace.
109.
THE SLAVES ARE STUNNED BY THE SIGHT of him. Some back up.
Others start to prostrate themselves, but are held up, on
their feet by their comrades...
The High Priest SPEAKS TO THE SLAVES, his voice firm,
ringing, castigating...
As the High Priest addresses the slaves, Baku and Tudu
squeeze through the crowd, and join D'Leh, Ka'ren and Nakudu.
Baku sees Evolet ready to be ripped apart, and he turns to
D'Leh in terror.
D'Leh starts to move toward Evolet, but One-Eye raises his
whip toward the horses, warning D'Leh not to advance.
D'Leh sees the horses about to bolt. He stops dead, in
anguish and fear for Evolet’s life...
The High Priest finishes addressing the slaves, and turns to
D'Leh. He speaks, Nakudu translates.
NAKUDU
He says, the God is angry, and if
we do not leave, we will all be
slain...
Everyone looks to D'Leh, wanting him to make a decision.
Evolet strains against the ropes.
D'Leh grips his spear and decides. He gauges the distance
between himself and the God...
An impossible throw.
D'Leh takes a couple steps forward, and throws...
The spear flies through the air, misses Evolet by a hair,
heading for the tall figure of the God...
The God stumbles backwards, trying to evade the spear...
THE SPEAR MISSES THE God, piercing only his veils...
The spear CLATTERS TO THE STONE FLOOR of the entrance hall...
For a moment, everyone is too stunned to react...
Then the palace guards and soldiers prepare to attack...
The slaves shy back, and then...
A RED SPOT OF BLOOD FORMS ON THE God’S VEIL. D'Leh’s spear
has drawn blood...
110.
The God has been injured...
Everyone is stunned -- slaves, D'Leh’s warriors, palace
guards, and priest...
The spot of blood grows and grows...
The God clutches his throat, but can’t stop the flow of
blood. Everyone sees that he is mortal.
D'Leh sees that One-Eye, like everyone else, is frozen by the
sight of the God’s blood...
D'Leh steps forward, screaming his battle cry...
D’LEH
Yahalah!!!
He draws his dagger, rushing forward, wading into the palace
guards, trying to make his way to Evolet.
A split second later, Ka'ren, Nakudu, and the thousands of
slaves surge forward, engaging the palace guards, rolling
over them...
The High Priest and the God stumble backwards into the shadow
of the palace entrance.
Suddenly One-Eye is SLAMMED by the bound arms of the Warlord.
He goes down, and a foot to the face by the Warlord knocks
him unconscious.
Evolet sees the Warlord stepping over One-Eye’s body, and an
instant later, she sees that the Warlord’s hands are free,
and that he holds One-Eye’s dagger in his hands.
The Warlord grabs Evolet and cuts her hands free.
D’Leh sees the Warlord drag Evolet off.
D’LEH (CONT’D)
Evolet!
D'Leh doubles his effort to get to her, as the palace guards
retreat into the palace courtyard, and the sea of slaves
follows...
Other slaves have scaled the high palace walls with ladders,
and now jump down on the retreating guards.
D’Leh finally reaches the platform, where Evolet was standing
and sees the Warlord trying to get the struggling Evolet onto
the back of one of the freed horses. Evolet fights the
Warlord like a wild tiger.
111.
D'Leh, armed with the dagger, streaks toward the Warlord, who
sees him coming...
The Warlord PUNCHES Evolet hard, knocking her out. He heaves
her up onto the back of one of the horses, swings himself up,
and rides off through the crowd, heading for the gates to the
processional avenue...
D'Leh sees the Warlord ride off with Evolet. Desperate, he
looks around, and sees the other horse.
D’Leh runs to the horse, and swings himself up onto its back.
The horse rears. D'Leh barely stays on the horse, but he
quickly gets the hang of it, and rides off after the Warlord
and Evolet...
Behind D'Leh, THE SLAVES STORM UP THE PALACE STAIRS, led by
Nakudu and Ka'ren. Following close behind them is the Giant
Slave from the slave barracks.
ON THE PROCESSIONAL AVENUE, the Warlord rides fast, heading
from the palace, down the long avenue toward the pyramids...
Slaves, racing toward the palace, leap out of the way of the
Warlord’s galloping horse...
D’Leh rides hard, a hundred meters behind...
INT. ENTRANCE HALL OF PALACE - DAY
The God, followed by a group of his priests, including the
High Priest, retreats into the palace.
The priests watch as the hurrying God rips his veils and
accoutrements from his body, furiously getting rid of
everything that made him so tall and mysterious...
Turning himself into nothing more than a...
FRAIL WHITE OLD MAN
The God holds his bleeding throat, screaming orders to his
High Priest and the other priests around him.
He runs deeper into the palace, with his priests following...
THE SLAVES, led by Ka'ren, Nakudu, and the Giant Slave reach
the entrance hall.
For a moment they stop in wonder, awestruck...then they storm
deeper into the palace.
112.
EXT. PALACE COURTYARD - DAY
ANOTHER WAVE OF SLAVES, arriving at the palace from the
construction site, races up the stairs.
One-Eye, lying at one side of the stairs, regains
consciousness, and stands.
Suddenly Tudu stands in front of him. One-Eye sneers at the
boy and moves to draw his dagger, and realizes he doesn’t
have it anymore.
Tudu motions to someone behind One-Eye. It’s Baku, who has
climbed the stairs behind One-Eye, and now towers over him...
Baku holds a spear in his hands, and before One-Eye can
react, Baku rams it, with all his might, into One-Eye’s
throat.
One-Eye falls dead. Baku and Tudu share a look of triumph and
satisfaction.
INT. BIG HALL - DAY
The WHITE OLD MAN has reached the bow of the ship. He
SCREECHES COMMANDS to the priests, ordering them to cut the
many ropes that tie the ship to the building.
The priests start doing so, but before they can finish, they
turn, along with the God, and see:
THE SLAVES, POURING INTO THE BIG HALL.
The slaves slow at the shocking sight of what was once the
God...
But they slow only for a moment, then they surge forward,
like a giant wave...
THE OLD WHITE MAN, the High Priest, and all the OTHER PRIESTS
disappear in the sea of slaves...
We see the OLD WHITE MAN crest the mass of slaves one last
time, as he’s lifted over their heads, screaming in terror.
Then he’s pulled down and he’s gone again...
FOREVER.
113.
EXT. PYRAMIDS / PROCESSIONAL AVENUE - DAY
The Warlord rides down the processional avenue, approaching
the pyramids. The construction site is deserted, with all the
slaves having raced to the palace.
Evolet is draped across the horse in front of the Warlord.
D'Leh rides after them.
The Warlord turns and sees D'Leh coming...
Evolet comes to, and realizes where she is. She immediately
begins to struggle, fighting desperately with the Warlord,
who tries to control his horse, while fending her off.
As she struggles, Evolet falls from the horse. The Warlord
rides on just a bit, then sees D'Leh coming in fast.
The Warlord dismounts, racing over to the body of a slave
guard, where a bow and quiver of arrows are on the ground.
D’Leh rides in before the Warlord can get them. Pulling his
dagger from his belt, D'Leh dismounts, and...
D'Leh and the Warlord square off, both armed with daggers.
Among the massive cut stones, at the foot of the nearly
completed pyramid, with the palace in the distance, D’Leh and
the Warlord fight with their daggers...
Circling around each other, feinting, looking for an
opening...
Both are adept fighters...both are fast...
The Warlord moves in...cutting D'Leh, who backs up...
The Warlord doesn’t let up, slashing again, and again...
D'Leh’s backs up, further, and further retreating into the
jumble of cut stones...
The Warlord moves in for the kill...D'Leh falls to the
ground, crawling...
The Warlord raises his hand with the dagger...Ready to
strike.
Suddenly--
D'Leh’s hand grabs in the sand and RISES UP WITH THE WHITE
SPEAR...
The Warlord recoils, surprised, but it is too late...
114.
D’Leh THRUSTS it into the Warlord’s chest...D’Leh’s entire
retreat was simply a way to get to the buried White Spear...
The face of the Warlord shows utter disbelief. The Warlord
falls.
D'Leh runs to Evolet, who lies on the ground. He throws
himself onto the ground next to her...
Her injuries are not severe. D'Leh AND Evolet EMBRACE...then
suddenly...
AN ARROW THUDS INTO Evolet’s BACK...
CUT TO:
INT. OLD MOTHER’S HUT - DAY
Old Mother, sitting at her fire, startles, as if the arrow
had hit her...
Worried looks from the tribe’s people, all around her.
Blood pours again from her nose, stronger than ever. Her
breath comes hard...
CUT TO:
BACK TO PYRAMIDS
Evolet is stunned...D'Leh is horrified...she falls against
D'Leh, who sees, behind her, the Warlord, holding the bow,
trying to notch another arrow...
D'Leh looks at Evolet, seeing the life leave her body...
D'Leh rises, strides to the Warlord, picks up a rock from the
quarry debris, raises it over his head, and SLAMS it down,
killing the Warlord...
As if in a dream, D’Leh walks back to Evolet’s body, as
Nakudu and Ka'ren arrive at the scene.
Behind them are thousands of cheering slaves, ready to
celebrate their hero.
When they see what has happened, they all fall silent...
Baku pushes through the crowd. When he sees Evolet’s body, he
starts sobbing...
115.
D'Leh kneels down next to her...tears streaming down his face
as...
Evolet DIES IN HIS ARMS!
D’Leh looks up at the crowd. It seems like the whole world is
collapsing around him...
With no emotion left, D'Leh rises and walks off, alone,
toward the open desert...
CUT TO:
INT. OLD MOTHER’S HUT - DAY
Dark. Old Mother lies on a bed of animal skins, bleeding,
panting, dying...
She chants...softer...softer...softer...
OLD MOTHER DIES, EXHALING HER LAST BREATH...
But this is not a breath of this earth...it is a WIND...
OLD MOTHER’S BREATH blows through the mammoth hides at the
entrance of her hut...and through the Valley of the Yagahl...
BACK TO THE PYRAMIDS
Baku is clinging to Evolet’s body with tearful eyes.
He hears the sound of a gentle BREEZE.
There’s a sudden WIND coming from the desert, becoming
stronger and stronger.
It blows over the sand dunes and reaches the base of the
pyramids.
The mourning crowd looks on amazed as the wind catches
Evolet’s and Baku’s hair.
EXT. DUNES - DAY
D'Leh walks alone. A sound. He turns and sees Baku running to
him.
BAKU
D’LEH! D’LEH! COME!
D’Leh starts running back toward Evolet...picking up speed,
running...
116.
EXT. BASE OF THE PYRAMIDS - DAY
D'Leh runs through the gathered warriors and slaves, who part
to let him through, finally revealing:
The WIND has picked up in strength, and whirls around
Evolet...
Filling her lungs, giving her life again...
Old Mother’s breath enters Evolet’s body. No one moves. All
are astonished as...
Evolet’S EYES OPEN...she is weak, but alive!
D'Leh rushes to her side, and embraces her like he will never
let go of her again.
Nakudu, his son Tudu, and all the mammoth hunters look on
with great joy.
We close in on Baku, who wipes his tears from his face,
revealing a great smile and...
We hear the voice of the OLD MAN who started to tell this
story.
NARRATOR (V.O.)
And this is why Old Mother had to
stay alive to that day.
FADE TO:
EXT. VILLAGE SQUARE - NIGHT
NARRATOR (V.O.)
She gave her last breath to my
sister. And then...
An ancient man sits by a campfire, surrounded by a group of
children. Mesmerized, they follow his tale, and we realize
that...
This story has been told by Baku, who is now a very old man.
The hunting WHISTLE hangs from around his neck.
OLD BAKU
(smiling at his children)
Our journey took many moons and was
full of hardship.
CUT TO:
117.
EXT. MOUNTAIN, HIGH PASS - DAY
D'Leh, Evolet, Ka'ren and young Baku walk at the head of
their freed brothers as they cross the snows on the
mountain’s crest.
They are on their way home.
EXT. MAMMOTH HUNTERS’ CAMP - DAY
The camp of the Mammoth Hunters looks desolate. The remaining
tribe members are all huddled together.
The faces of the children betray hunger and despair.
Suddenly a little girl jumps to her feet. She has spotted
something. She starts running toward the mountains.
The CAMERA follows her, and we see:
The return of our heros!
There is great joy and celebration as everybody gets to their
feet and starts running toward them.
Tears of joy as women unite with their men and children with
their fathers.
CLOSE: A hand picks up a stone and puts it on a mound of
rocks.
EXT. EDGE OF CAMP - SUNSET
It is young Baku. He and his sister Evolet place stones on a
mound of rocks. They have tears in their eyes as they bid
their last farewell to their mother.
Evolet looks over and sees...
D'Leh, standing before another mound of rocks. This is Old
Mother’s final resting place.
CUT TO:
EXT. MOUNTAIN, HIGH PASS - DAY
D'Leh, Evolet, Ka'ren and young Baku walk at the head of
their tribe as all the Mammoth Hunters cross the mountain.
They are all wrapped in mammoth furs as snow flurries dance
around them.
118.
EXT. NAKUDU’S VILLAGE - DUSK
Nakudu and his tribe work the fields.
Young Tudu is the first one who sees the trek of the Mammoth
Hunters as they approach the village.
Tudu’s face lights up, as he sees Baku running toward him.
Nakudu looks on and smiles, as he sees that D'Leh and his
people have come to join them.
OLD BAKU (V.O.)
All this was a long, long time
ago...
EXT. VILLAGE SQUARE - NIGHT
OLD Baku looks over to another old man.
OLD BAKU
But I still remember it, as if it
was only a heartbeat ago...
The two old men smile at each other, and we realize that
Baku’s old friend is Tudu. He looks as ancient as Baku, but
he still has the same sparkle in his eyes.
CUT TO:
EXT. LAKE - SUNSET
D'Leh and Evolet have arrived on the shore of the Naku Lake.
OLD BAKU (V.O.)
And the Ancient Fathers had
wandered with us and guided our
path to our new land where the sky
holds two suns...
D'Leh smiles at Evolet and, together they look out at the
horizon, where they watch in awe as...
The setting sun mirrors itself in the still waters of the
lake.
OLD BAKU (V.O.) (CONT’D)
And so it came to pass that the
dream of Old Mother was fulfilled
and what was written in the stars
came true.
119.
D'Leh takes his WHITE SPEAR and drives it into the ground.
This is the land they will call their home.
And as the CAMERA widens, on a boulder in the distance, we
see the majestic silhouette of a SABER TOOTH TIGER.
He lets out a MIGHTY ROAR!
EXT. VILLAGE SQUARE
Old Baku is finished with his story. There’s a long moment of
silence.
A boy of perhaps thirteen, who looks very much like Baku,
when he was a boy, raises his voice.
BOY
Baku, what happened to the
mountains you and Tudu helped
build?
Old Baku looks over at Old Tudu. They both shrug.
OLD BAKU
Everyone returned to their homes.
No one wanted to stay in such a
place. Too much sorrow, too many
dark memories. So, no one really
knows...
Everyone is silent, contemplating Old Baku’s words...
And we hear the sound of wind, as in the beginning of the
film.
It takes us to...
EXT. DESERT - SUNSET
We fly over endless sand dunes...and then, in the distance,
we see them...
THE PYRAMIDS
They rise out of a sea of sand, but the desert is slowly
reclaiming them. Behind the pyramids we see the red glowing
ball of a dying sun.
- The End -
120.

`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
