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

THIRTEEN GHOSTS
by
Neal Marshall Stevens
based on the screenplay by
Robb White
previous revisions by
Todd Alcott
Todd Alcott and Neal Marshall Stevens
Richard D'Ovidio
Richard D'Ovidio and James Gunn
current revision by
Richard D'Ovidio
REVISED PRODUCTION DRAFT
November 4, 2000
THIRTEEN GHOSTS - Rev. 10/27/00
BLACKNESS. SUPERIMPOSE: "The most beautiful thing we
can experience is the mysterious." - Albert Einstein
Then: "I do believe in spooks. I do believe in spooks.
I do, I do, I do believe in spooks." - The Cowardly Lion
1 TITLES 1
Abstract images begin to form. They move beneath the
titles, brilliant against the darkness, the ghost-like
apparitions fighting a current as if caught in the
whirlwind of time.
Our IMAGE SHARPENS. The apparitions are no longer there.
Instead, police tape comes INTO FOCUS, the seemingly
miles of it entangled on stacks of derelict cars that
fill the void. The tape dances before us, undulating to
a macabre rhythm, floating on the nocturnal winds. We
PAN.
An auto wrecking yard at midnight. Empty, yet occupied.
Light slowly INVADES the FRAME, filling in the wrecking
yard's cavernous shadows. A distant ROAR announces
itself above the SOUNDTRACK, the earth POUNDING CLAMOR
AMPLIFYING in with every second.
As if searching for its source, CAMERA PIVOTS AROUND.
Instantly, we find ourselves caught in the glare of
headlights, and we've just enough time to make out the
semi truck before it plows through the yard's chain link
gate, shattering it like so much glass, the truck heading
directly AT CAMERA, running it over as if it weren't
there.
2 EXT. AUTO GRAVEYARD - NIGHT 2
BOOMING UP and OVER the fence, the yard is a veritable
maze of old, rusted cars, piled up helter skelter, frozen
in time. Broken glass, mangled engine parts, garbage and
litter... along with hundreds of spent shell casings, are
scattered in the dirt.
A caravan of UTILITY VEHICLES ROARS in behind the semi,
the convoy making a bead for the center of the yard.
Picking up the rear is a black Rolls-Royce Phantom II.
As they turn the last corner, the first thing we see are
"unearthly" flares. Dozens of them, bright as hell,
lighting up the middle of the graveyard.
The CARS come SKIDDING to a stop. Dust swirls.
2.
3 EXT. ROLLS-ROYCE 3
The rear door opens, and CYRUS KRITICOS, 50s, wealthy,
immaculately dressed, not a hair out of place, steps out.
His hand rests on a shiny, silver-headed cane. He
surveys the flares, shakes his head.
CYRUS
Their little crusade is wearing
thin.
RAFKIN (O.S.)
I'll give them this... they are
consistent.
Stepping out next is DENNIS RAFKIN, 20s, unshaven,
jittery. He holds his head in his hands, massaging his
temples, obviously in pain.
(NOTE: Whenever we cut to Rafkin we hear/sense a
piercing tone, underscoring the psychic waves he's
receiving.)
Cyrus produces a thin, brown designer cigarette from a
silver case. Taps it as he speaks.
CYRUS
As cancer...
(lights his cigarette)
Never bet against human nature,
Dennis. You'll always lose.
Behind him, Rafkin suddenly lurches forward, racked by
spasms. Cyrus turns, with slight concern --
CYRUS
Is it bad tonight?
RAFKIN
(coughing, shaking)
Bad is one way of describing it,
but somehow...
(wiping his sweaty
forehead)
... insane seems more appropriate.
Rafkin doubles over in pain. Dry heaves.
RAFKIN
(recovering)
It's my professional opinion that
we get the hell out of here. Now.
Two of Cyrus's team, dressed in assault gear, make their
way over.
(CONTINUED)
THIRTEEN GHOSTS - Rev. 10/27/00 3.
3 CONTINUED: 3
CYRUS
(ignoring Rafkin,
re: flares)
Noted. Clean this place up, and
locate our guests.
Cyrus snaps his fingers. An ASSISTANT steps forward
with a large photo.
When Cyrus turns around, he catches Rafkin gulping down
prescription drugs. Cyrus strikes the bottle out of
Rafkin's hand with his cane. Pink medicine runs down
Rafkin's face as he turns with rage.
RAFKIN
Come on, Cyrus, I gotta take the
edge off.
CYRUS
You know the routine. First
things first. Now where is he?
Cyrus holds it in the limo headlights; an aerial photo
of the graveyard. Rafkin, closing his eyes, reaches
out towards the photo with one hand, then touches the
earth with the other. A silent moment.
CYRUS
Where?
Then a huge spark arcs between the psychic and the
ground. Rafkin jolts back, as if shocked.
RAFKIN
Sweet Jesus, Cyrus, there's got to
be over forty victims here! I
thought you said this guy killed
twenty people.
CYRUS
Twenty when he was alive. He's
added a few more since then.
Now where's the Breaker, Dennis?
Rafkin ignores the photo, and points at a spot deep
inside the auto graveyard. Cyrus grabs a headset from
the Assistant.
CYRUS
(into microphone)
All teams go to alpha. I
repeat!--
THIRTEEN GHOSTS - Rev. 10/27/00 4.
4 EXT. AUTO GRAVEYARD - NIGHT 4
Teams of men pile out of the vehicles. The back of the
semi is opened, revealing racks of remote-operated
amplifiers.
Others unload inch-thick, eight-foot-square sheets of
glass, rimmed with aluminum pipe, and inscribed with
ancient text.
The glass sheets are assembled to form a large cube.
Arrays of flood lamps illuminate the canyons of the
wrecking yard in stark white.
One side of the cube remains open... allowing entry
and -- ready to come down in theory, and close the
improvised "mousetrap."
Rafkin walks up behind Cyrus, still massaging his
temples.
RAFKIN
Where'd he get a name like the Breaker
anyway? He a truck driver?
CYRUS
It's simply folklore at work.
The local color exorcising its
demons...
Just then, a hideous HOWL ECHOES through the night --
part human, part God-knows-what. Everyone stops.
Rafkin swallows hard. Tosses away the empty prescription
drugs bottle, then opens an extra-large jar of aspirin,
pops a few into his mouth, crunches them like mints.
CYRUS
... or maybe it's because he broke
his victims into as many pieces as
possible.
(exhaling smoke)
Who's to say...?
RAFKIN
Cute...
A shrill cacophony of METAL AND GLASS erupts from the
maze of the graveyard. A large, dense object flies out
of the darkness and crashes down in front of them in a
cloud of dust.
It's a crushed car. Cyrus sighs...
(CONTINUED)
THIRTEEN GHOSTS - Rev. 10/27/00 5.
4 CONTINUED: 4
CYRUS
I hate being rushed.
RAFKIN
Cyrus, this one ain't like the
others...
(off the teams)
Do they know what we're up
against?
CYRUS
These men are well paid. That's
all they need to know.
RAFKIN
But this is suicide...
CYRUS
Then I'll match their price... and
yours.
RAFKIN
You don't have that kind of money.
CYRUS
You'd be surprised... now get to
work.
This takes Rafkin by surprise. He turns, taking a step
towards Cyrus. Cyrus backs up, his cane instantly at
Rafkin's chest, keeping him distant. Rafkin becomes
suspicious.
RAFKIN
What are you hiding, old man?
CYRUS
Careful, Dennis, curiosity killed
the cat.
DAMON (O.S.)
Son-of-a-bitch!
They both turn to see four team members dragging an
attractive man and woman, DAMON QUINTEROS and KALINA
ORETZIA, over to Cyrus. Damon's a handsome chap with
a righteous fire in his eyes. Kalina, his lover, is
equally fiery, late 20s, tough and sexy. She cradles
in her arms an ancient book.
DAMON
How can you possibly justify what
you're doing, Cyrus? It's out and
out slavery.
(CONTINUED)
THIRTEEN GHOSTS - Rev. 10/27/00 6.
4 CONTINUED: (2) 4
RAFKIN
Aw, jeezus, here we go again.
CYRUS
Damon Quinteros and Kalina Oretzia.
Every time I hunt must I scrape
you off the bottom of my shoes?
KALINA
These aren't animals you're
trapping! They're human beings!
CYRUS
Why don't you guys go join
Greenpeace or throw blood on the
old ladies' fur coats, for Christ's
sake... we have business.
KALINA
(to Cyrus)
Bastard! Who are you to play
God?!
CYRUS
Playing's for children. I'm
going to be God.
DAMON
You'll never pull it off! Not
without the right spells. That
and the thirteenth ghost!
Rafkin turns, alarmed.
RAFKIN
Thirteenth?
CYRUS
Get them out of my sight. We've
wasted enough time as it is.
The team straps Damon and Kalina to some car wreckage.
ASSISTANT (V.O.)
(on headphones)
All teams in position, Mr.
Kriticos.
CYRUS
Excellent... set up the transmitters.
Cyrus turns away from them as he slips on a pair of
ghost glasses. The rest of the team around the
graveyard do so as well.
(CONTINUED)
THIRTEEN GHOSTS - Rev. 10/27/00 7.
4 CONTINUED: (3) 4
Cyrus starts to climb a wall of cars for a better view
of his battlefield.
RAFKIN
(calling after him)
Wait a minute! The Breaker's number
twelve! You said we needed twelve!
CYRUS
Yes, and then one more. I
thought you were psychic.
RAFKIN
You know it doesn't work like
that --
5 EXT. TOP OF CAR PILE 5
CYRUS
We haven't got the time to
argue...
(into microphone)
Now bring in the bait!
Nearby, a silver tanker rolls into the canyon of cars.
RAFKIN
(into mike)
We never needed bait before --
ON CYRUS
CYRUS
(into mike)
Insurance. I can't afford to lose
this one.
6 EXT. AUTO GRAVEYARD - NIGHT 6
A TEAM MEMBER opens the truck's valve: Huge streams
of blood gush out from both sides, via two nozzles,
flooding the area around the cube. Rafkin's jaw drops.
ON Cyrus, smiling.
CYRUS
Power up the cube!
Somewhere a switch is thrown and the cube lights up. The
symbols etched on its surfaces glow a brilliant green.
(CONTINUED)
THIRTEEN GHOSTS - Rev. 10/27/00 8.
6 CONTINUED: 6
CYRUS
(into mike)
Base. Start transmitting.
RAFKIN (V.O.)
(over headset)
But we haven't recalled the teams
yet. They'll be stuck out there
with --
CYRUS
(into mike)
Just start the transmission!
7 INT. SUBURBAN 7
TECH
You heard the man. Start
broadcasting the spells --
Another tech flips a switch, rolling a reel-to-reel deck.
We BOOM OUT the door TO the antenna, and hear a HIGHFREQUENCY WHINE, mixed with the sound of repetitive
CHANTING. Spells being read, over and over in Latin.
8 EXT. CENTER OF AUTO GRAVEYARD 8
Deep inside, at the sound of the CHANTING, there comes
another ungodly HOWL, angrier than before.
WITH TEAMS
Along the perimeter, placing the amplifiers, shock
instantly registers with the teams when they realize the
transmission has begun, leaving them exposed.
9 EXT. TOP OF CAR PILE 9
Somewhere near Cyrus there's an angry HOWL. Cyrus turns
and looks out over the auto graveyard, smiling.
CYRUS
(under his breath)
Come out, come out, wherever you
are...
(CONTINUED)
THIRTEEN GHOSTS - Rev. 10/27/00 9.
9 CONTINUED: 9
TEAM TWO LEADER (V.O.)
(on headset)
We've got movement, Cyrus, heading
south --
We hear a CRASH of METAL and, on the headset, a confusion
of SCREAMS.
WITH RAFKIN
The screams of the men fill the air.
RAFKIN
Christ, Cyrus... what have you
done?
Off to the side, Damon and Kalina strain against the
ropes.
DAMON
Dennis, listen! He's not telling
you the whole story! His spells
won't work with this one. They're
not strong enough. Trust me on
this... I know... Trust me.
KALINA
Listen to him, Dennis. He knows
what he's talking about.
RAFKIN
Sorry, guys... I'm just here for
the paycheck.
10 EXT. ANOTHER PART OF AUTO GRAVEYARD 10
We see another team race down an alley. They turn a
corner. One of them slips on something wet. He gets
up, realizes he's slipped in the unravelled remains of
one of Team Two.
TEAM MEMBER
Oh, shit...
TEAM MEMBER #2
(looks over partner's
shoulder)
Mother of...
His partner turns as a great shape looms...
(CONTINUED)
10.
10 CONTINUED: 10
Abruptly, something reaches down and snatches a team
member up and OUT OF FRAME. His partner glances back,
sees his friend yanked up a wall of cars, then into the
wreckage.
11 EXT. TOP OF CAR PILE - CONTINUOUS ACTION 11
An explosion of blood spatters from inside the broken
windshield. A hand struggles against the glass. A
friend dies a horrific death.
12 EXT. ACROSS FROM PILE OF CARS - CONTINUOUS ACTION 12
As HIDEOUS SCREAMS fill the air, the Team Member turns
and starts climbing the other side. Rafkin rounds a
turn, sees the Team Member climbing up the wall of cars.
The Team Member looks back as they approach.
TEAM MEMBER #3
Run! It's right behind me --
Suddenly, a SQUEAL of METAL as something invisible
reaches through the grill of the car and grabs the Team
Member by the waist. He screams as he is folded over,
backwards, and yanked into the grill of the car.
Rafkin rushes toward him.
We hear BONES BREAK as the Team Member screams.
The Breaker, unseen on the far side of the heap of cars,
yanks on his victim, over and over, smashing the Team
Member's chin against the grill, trying to pull him
through.
Rafkin does the best he can to pull the man free, but it
seems hopeless. The man screams and screams.
Abruptly, Rafkin's efforts seem, at last, to work. With
a mighty tug, he tumbles back and falls to the ground.
Looks down and sees that he holds only the man's foot.
The wall of cars begins to move before Rafkin. He leaps
just as the wall comes crashing down.
Rafkin scrambles and runs full bore back the way he came.
He looks back, speaks into his mike:
RAFKIN
Cyrus, the spells aren't working!
He's tearing this place apart!
(CONTINUED)
11.
12 CONTINUED: 12
CYRUS (V.O.)
(on headset)
Calm down.
RAFKIN
You calm down! The son-of-a-bitch
is throwing cars at me!
CYRUS (V.O.)
(on headset)
History has no time for cowards,
Mr. Rafkin.
RAFKIN
History's all we're gonna be in
about two seconds!
13 EXT. AUTO GRAVEYARD - WITH RAFKIN 13
Rafkin turns a corner and runs past two team members
heading in the opposite direction.
RAFKIN
Hey, goddamnit, you're running
the wrong way!
They don't slow down.
RAFKIN
(to himself)
Amateurs...
Rafkin turns a corner and realizes why the team members
were running this way. A car at the end of this alley is
tipped up on its bumper, its undercarriage facing them,
and is moving toward them, fast.
Rafkin and another team member, deeper in the alley, hear
the HOWL of the Breaker behind the floating car.
RAFKIN
Jesus H. Christ! Run!!
Rafkin runs, but the team member doesn't, stunned by the
sight, remains frozen. Suddenly the car stops -- and
lifts straight up into the air over him.
TEAM MEMBER'S POV - THROUGH GHOST VISION GLASSES
The Breaker comes INTO CLEAR VIEW for a fraction of a
second. He's huge, seven feet tall, acromegalic, the
bones beneath the skin swollen and distorted.
(CONTINUED)
12.
13 CONTINUED: 13
He stares with burning eyes above a huge distended jaw.
He wears, prosaically, a filthy tattered garage uniform,
his name stitched above the pocket. His face, chest
and arms are pockmarked with bullet holes dating from
his untimely death.
He takes the car that he holds overhead and slams it
down. The team member dodges out of the way, but the
Breaker picks up the car again and slams it down again,
squashing him. And then, again. And then, for good
measure, once again.
14 EXT. AUTO GRAVEYARD - WITH RAFKIN 14
Rafkin tears down the alleyway. He turns a corner just
as the wall behind him collapses.
He's looking down a passage filled with team members,
with the cube serving as its plug: a dead end. It seems
the Breaker has everyone trapped, instead of vice versa.
Everyone runs toward the cube, splashing through pools of
blood.
BREAKER'S POV
The team members and Rafkin scatter before us.
Men climb up the walls of wreckage as the invisible
Breaker plows through, sending men flying high into the
air. Rafkin slams hard against the wall, drops to the
ground.
15 EXT. GLASS CUBE 15
A team member runs, looks over his shoulder at the
pursuing Breaker. He doesn't see where he's going and
runs straight against a blood-splashed glass wall.
He's blundered into the glass cube. In an instant, the
Breaker's inside with him.
His entry trips an unseen switch. The final glass wall
slides down, sealing the cube. As it does, the howling,
and the team member's screams, drop to silence.
Inside the cube, something awful happens, but we can't
see through the smears of blood.
Rafkin regains his senses, scrambles towards the cube.
(CONTINUED)
13.
15 CONTINUED: 15
RAFKIN
No! Oh, Christ, no --
Inside the cube, the Breaker turns, realizes he's been
trapped, launches himself at the bloody sheet of glass,
presses his face to it, howls.
Rafkin recoils as the Breaker pounds at the glass. With
each ghostly blow, the symbol glows red, but the
glass seems to have the power to contain the force: it
holds.
RAFKIN
Oh, that piss you off, does it?
You know what pisses me off? A
dead guy throwing Buicks at me!
Rafkin eyes the horror, then tugs off his glasses. The
Breaker disappears.
Rafkin collapses in exhaustion.
RAFKIN
(into microphone)
I gotta hand it to you, Cyrus, the
bait worked. You got your dozen
now. Happy?
(beat)
Cyrus?
KALINA (O.S.)
(screaming, desperate)
Help! Somebody, please! Oh God!
16 EXT. AUTO GRAVEYARD - TANKER - MOMENTS LATER 16
Rafkin rounds a pile of cars, and sees...
Kalina, on the ground, holding a dying Damon in her arms.
His throat has been slit, and Kalina holds her hand over
the gash, trying to keep him from dying.
But it's no use... he dies. Kalina sobs. Rafkin's in
awe, perhaps ashamed.
Rafkin turns nervously away. And there, he sees Cyrus's
Assistant lying, dead, bloody and broken. And beyond him,
lies Cyrus himself.
Cyrus's neck has been pierced by a long, metal shard. His
eyes stare, cold and dead. Rafkin brings his hands to
his head, distraught, almost weepy.
(CONTINUED)
THIRTEEN GHOSTS - Rev. 10/27/00 14.
16 CONTINUED: 16
RAFKIN
Cyrus... oh, man... look at you...
There goes my bonus.
Suddenly, someone grabs his arm, and spins him around.
It's Kalina. She's sobbing and shaking Cyrus's glasses
in Rafkin's face.
KALINA
Was it worth it? Huh? Playing
God! Was it...?
OFF Rafkin's shell-shocked look, we PAN OVER to see the
ghost of one of the techs, ripped apart and bloody,
studying the scene.
DISSOLVE TO:
17 INT. LARGE BEDROOM - MORNING 17
A bright, sunny day...
THROUGH a glass window we see and hear two children out
playing in the yard. A Norman Rockwell, picture-perfect
setting...
A young boy and a teenage girl romp in the grass, then up
to the window steps a beautiful woman, fresh from the
garden. It's obvious she's the mother of these two.
Over the giggling of the kids she smiles at ARTHUR
KRITICOS, 50, sitting inside his bedroom, in a very
comfortable chair, taking in his family with pride.
We PAN TO Arthur as he smiles, content...
A sharp KNOCK on the bedroom door breaks the mood, and
Arthur turns. Our UNCUT CAMERA CONTINUES TO PAN TO the
door. As it does, it SWEEPS ACROSS a desk decorated with
family photos, one of which is the woman at the window.
CAMERA CONTINUES TO the door, where we notice the wall
and door around KATHY, Arthur's 21-year-old daughter, has
somehow aged from the pristine room we thought we were
in. Kathy sticks her head in. Pretty if she ever had
time to fix her hair, clad in a University of Calumny
sweatshirt. She stirs a pan of burnt scrambled eggs.
KATHY
Dad... it's almost eight-thirty...
shake a leg. You'll miss your
first class. And could you tell
Maggie to get the hell out of the
bathroom. She had her five
minutes twenty minutes ago.
(CONTINUED)
15.
17 CONTINUED: 17
The door slams shut again. Our UNCUT CAMERA CONTINUES TO
PAN AROUND the room. As it does, the walls begin to age
drastically, pictures disappearing, books vanishing from
their shelves. The room, and all its promise, simply slips
away. By the time we GET TO the bed, we notice only one
side is occupied. The other lies fallow.
Our UNCUT CAMERA RETURNS TO Arthur, who sits, unshaven,
in a decrepit chair, staring out at the brick wall lying
just outside the window, not ten feet from him. Gone is
the world he knew, the beauty of a home, the sounds of a
family laughing in the summertime heat. They are
replaced by the angry cacophony of the inner city
streets, its claustrophobic conditions, its hopeless
yoke.
Our CAMERA CONTINUES PAST Arthur, RETURNING TO the desk.
All are gone save one; the picture of his wife, which
sits charred and frameless, propped up against a stack of
bills.
18 INT. HALLWAY - MOMENTS LATER 18
Arthur comes out of the bathroom and beholds, in the
kitchenette of his small, cramped three-bedroom
apartment...
A blur of activity: Kathy cooks at the stove, his son
BOBBY, 7, eats a bowl of cereal at the kitchen table,
while scanning the obituary section of the newspaper. He
records the different, humorous deaths with a microphone
and a tape recorder.
In the b.g., on the TELEVISION, a black and white horror
movie drones on (the original Thirteen Ghosts).
The nanny, MAGGIE, 26, just gets in the way... wiping the
counter, pouring the OJ, setting the table. It's a very
disorganized way of doing things.
She's trying, sort of, but we can see from Kathy's body
language that she's at her wits' end with the woman.
BOBBY
Today on 'Death in Manhattan This
Morning,' we notice a small leap
in heart attacks in the city,
cancer deaths are down. And we
have a special treat for
everyone!-- a body was found this
morning decapitulated,
decapilated, de--
(CONTINUED)
16.
18 CONTINUED: 18
Maggie cracks up. Kathy turns toward him, nonplussed.
KATHY
Bobby. Find a healthier hobby.
Bobby shuts off the tape recorder, angry at the
interruption.
BOBBY
Kathy, I'm broadcasting!
Arthur enters, chipper.
ARTHUR
'Morning, everyone!
BOBBY
Dad, they found a guy without a
head in a dumpster behind Dunkin'
Donuts.
ARTHUR
That's nice.
Maggie ruffles Bobby's hair. Arthur pours himself a cup
of coffee, sidles up to Kathy.
ARTHUR
(sotto voce)
Kathy, why don't you let Maggie
make breakfast? That's why I
hired her.
KATHY
(also sotto)
Have you tasted her cooking?
Kathy makes a gagging response while scooping eggs onto
the first of three places on the counter. He looks at
the eggs burned in effigy but continues smiling.
BOBBY
Dad, will you tell Kathy that
keeping a record of deaths is
healthy because it's in the
interest of science?
ARTHUR
Kathy, it's healthy.
BOBBY
She's being a real slut about it.
(CONTINUED)
17.
18 CONTINUED: (2) 18
MAGGIE
Bobby, don't call your sister a
slut.
KATHY
Thank you, Maggie.
MAGGIE
A term like 'bitch' would be more
appropriate. 'Slut' is a term
reserved for those of loose sexual
morals, something, to be perfectly
frank, Kathy could use a bit more
of.
KATHY
Ha. Ha.
MAGGIE
Well, it's true, girl. When's the
last time you had a date?
Arthur pretends to not be disturbed by the conversation
around him, smiling and nodding.
KATHY
Why are you smiling?
ARTHUR
I'm pretending you're all
perfectly normal. It's working
pretty well, too...
Arthur turns toward the table, and holding a plate of
food and his coffee...
ARTHUR
Hey, Edgar Allan Poe, you finish
your homework? Mr. Petersen tells
me you aren't --
... trips on Bobby's scooter. The hot coffee spills all
over him. He falls back into the counter, knocking the
pan of eggs to the floor.
ARTHUR
Jesus Christ, that's the third
time I tripped on that thing,
Bobby. Get it off the floor
before it kills someone.
BOBBY
Sorry.
(CONTINUED)
18.
18 CONTINUED: (3) 18
KATHY
(to herself)
If we had a bigger place we
wouldn't have this problem!--
ARTHUR
(overhearing her)
Well, we don't have a bigger
place, so let's just keep our
stuff off the floor. Alright?
Arthur wipes off his pants, but it's just one big stain.
Suddenly, there's a BUZZ at the DOOR. Everyone goes
silent... Kathy looks to Arthur, who checks his watch.
ARTHUR
Shit... I forgot, the lawyer.
KATHY
What lawyer?
(beat)
I thought our credit was all cleaned
up?
ARTHUR
No, no. It's not that.
Arthur goes to the door, mopping his crotch.
BEN
Mr. Kriticos?
ARTHUR
Brad Moss?
BEN
(outstretches his
hand)
Ben, yes, how do you do?
Arthur shakes his hand. Ben can't help but notice the
stain in Arthur's trousers.
ARTHUR
Fine. Come in.
BEN
Now a good time?
ARTHUR
Couldn't be better.
19.
19 INT. KITCHENETTE - FEW MINUTES LATER 19
Everyone sits at the kitchen table. Bobby is dressed
for school, Arthur is changed. Ben sets up a laptop
computer.
BEN
As you know, I represent the
estate of your Uncle Cyrus
Kriticos.
KATHY
I didn't know you have an Uncle
Cyrus.
ARTHUR
Had. I met him a couple of times
as a kid. My dad always disliked
him. Said he squandered the
family fortune.
KATHY
We have a family fortune?
ARTHUR
Well, no. Cyrus squandered it.
Didn't I just say that?
MAGGIE
(to Bobby)
Isn't this exciting? You have a
late uncle!
BOBBY
What's he late for?
KATHY
His next birthday.
BOBBY
(the penny drops)
You mean he's dead?
KATHY
Now we get his attention.
BEN
This message was recorded by Cyrus
six months ago. He asked that it
be played for you in the event of
his death...
Ben inserts a DVD into the laptop. Cyrus's image appears
on the screen, distorted from the angle of the monitor.
(CONTINUED)
20.
19 CONTINUED: 19
CYRUS (V.O.)
(on computer)
Arthur. Good to talk to you.
Ben tilts the screen forward. Cyrus comes clearly into
view. He smokes one of his thin brown cigarettes.
CYRUS (V.O.)
(on computer)
Sadly, if you're watching me now,
that means I am no longer among
the living. Happily, that makes
you and your family my sole
beneficiaries.
The family members look at one another with anticipation.
CYRUS (V.O.)
(on computer)
I've instructed my lawyer, Mr.
Moss, to deliver to you the
essentials of my last will and
testament.
Ben produces a small box, lays it on the table, opens it.
Inside the silk-lined interior is a large, odd-looking
key.
KATHY
A key?
ARTHUR
A key to what?
CYRUS (V.O.)
(on computer)
A key to your new house.
A series of windows on the computer screen open to reveal
a series of photos of an astonishing modernist
masterpiece. We see the interiors. Living room,
bedrooms, kitchen, bathrooms. Everyone at the table
gasps.
KATHY
Bathrooms. Look, every bedroom has
a bathroom!
CYRUS (V.O.)
(on computer)
This house is the fruit of my
life's work. It's a one-of-a-kind
home.
(MORE)
(CONTINUED)
21.
19 CONTINUED: (2) 19
CYRUS (V.O.)(CONT'D)
(then)
I've led an interesting life, seen
many amazing things. The only
regret I have is that I never
really got to know my nephew
Arthur. This house is my attempt
to make up for that. Enjoy.
Perhaps we will meet again in
another life.
Cyrus smiles. The screen goes blank. Arthur can't
believe his eyes. Nor his good fortune.
BOBBY
Wow.
KATHY
When can we see it?
BEN
The house is yours. Whenever you
like.
KATHY
(to Arthur)
Can we go tonight?
BEN
(to Arthur)
I'm planning on heading out there
after work. The directions're a
little fuzzy. If you want to,
your wife and kids could follow me
out --
MAGGIE
I'm not his wife.
Kathy rolls her eyes.
ARTHUR
My wife, um, she um --
BOBBY
Our mom got burnt to death in a
fire.
KATHY
Bobby...
BOBBY
What? It's true.
(CONTINUED)
22.
19 CONTINUED: (3) 19
ARTHUR
Robert. That's enough.
(to Ben)
So where is this place?
BEN
A couple hours away.
KATHY
Great, we can stay the night,
and come back in the morning.
ARTHUR
We're not staying the night.
BOBBY
Why not?
ARTHUR
Because you have school in the
morning, and I have to teach.
We'll go look at it, but we're
coming home tonight.
(to Kathy)
Deal?
A smile creeps across Kathy's face giving her answer...
CUT TO:
20 EXT. DAMON'S RELIGIOUS ARTIFACTS STORE - DAY 20
PAN AROUND the cluttered closed office at newspaper
clippings hanging on the wall. Black and white photos of
newly dug up graves. Autopsy pictures of about a dozen
deceased individuals, articles underneath each picture
describing their deaths. It's a gruesome, graphic,
reportage of things we'd rather not think about.
The first is a suicide victim, found with her wrists
slashed in her bathtub. Another's an archery accident
involving a little boy. The list goes on and on,
ending with a serial killer, one Frank Mahoney, a.k.a.
the Breaker.
CONTINUE PANNING past books on the Occult, and Damon's
PHd degree in Parapsychology.
We LAND ON Kalina herself, stuffing her worn satchel. A
lamp illuminates an ancient book in front of her with
handwritten notes and drawings inside. She closes the
book and stuffs it in her satchel.
(CONTINUED)
23.
20 CONTINUED: 20
PULL IN TIGHT ON a short newspaper article, featuring a
photo of Cyrus:
"NOTED ADVENTURER DIES AT 57"
In the article, underlined in red pen, are the words,
"survived by one Arthur Kriticos..."
CUT TO:
21 EXT. BEN'S MERCEDES - NIGHT 21
Ben drives, he checks his rearview mirror for Arthur and
family, to see if they're keeping up.
22 INT. ARTHUR'S CAR - FOLLOWING 22
Arthur drives with Kathy beside him. Bobby and Maggie
are in the back seat, playing hangman. His microphone's
lying on the seat beside him.
MAGGIE
C'mon... you're taking too long.
BOBBY
S... U... F... suffocate! I got
it! I win!
KATHY
Come on, you guys, we're almost
there.
Arthur can tell his daughter's anxious.
ARTHUR
Excited?
KATHY
Yeah, Mom would've freaked over
this.
ARTHUR
(chuckles sadly)
You're right...
Kathy looks out the window. An awkward beat passes
between them...
ARTHUR
So you looking forward to going
back to school?
(CONTINUED)
24.
22 CONTINUED: 22
KATHY
Dad. I've been thinking...
ARTHUR
What?
KATHY
Maybe I shouldn't, you know, go
back. I could skip a year, be
with you guys --
ARTHUR
Kathy. C'mon, you can't do that...
remember how proud Mom was when
that acceptance letter showed up
in the mail.
KATHY
I know, I just don't know what
you guys are gonna do without me.
Kathy's face flushes with emotion.
ARTHUR
Baby. Bobby and I will manage.
Besides, things look like they
just got a little better.
KATHY
Yeah, but that's not the point.
It's just that... every smile you
have is --
ARTHUR
Honey --
KATHY
It's... not real, Dad.
Arthur's affected by her words.
KATHY
I loved her too. But sooner or
later you've got to stop blaming
yourself.
22A EXT. CAR 22A
Arthur pulls up behind Ben's car in the f.g.
THIRTEEN GHOSTS - Rev. 10/27/00 25.
22B INT. CAR 22B
Bobby looks through the front window, between Kathy and
his dad.
BOBBY
Cool!
Everyone reacts...
KATHY
Dad, it's beautiful.
ARTHUR
Oh my God.
EXT. HOUSE
An enormous and majestic house made of glass nestled
amongst pine trees. Stark against the evening sky, the
house is awe-inspiring.
Even for an English teacher, Arthur has a hard time
finding the words.
There's also a Power & Light truck parked in front.
23 EXT. HOUSE - FRONT PORCH - NIGHT 23
The group approaches the front door. It looks unusual,
yes, but it's also an undeniable architectural marvel.
BEN
That's strange.
A young man appears, waiting in the solitary light of the
porch, a clipboard in his hand and a tool belt slung over
his shoulder. He's dressed in a Power & Light uniform,
and ON CLOSER INSPECTION we see that it's Rafkin, in
disguise. He approaches the family.
RAFKIN
'Bout time someone got here. You
the owners?
BEN
Who're you?
RAFKIN
The power guy. I don't know if
you're aware of it, but this place
keeps knocking out the power in the
tri-quad area. So if you don't
mind, I need to check the breakers
inside.
(CONTINUED)
26.
23 CONTINUED: 23
BEN
Couldn't you come back tomorrow?
RAFKIN
Well, I could -- I mean, I could
-- but, man, they frown upon
that sort of thing, my bosses.
BEN
That's not our problem --
RAFKIN
Look, I've only been doing this job
for, like, three weeks. If you
could find it in your hearts --
ARTHUR
Sure.
Ben turns to Arthur. After all, it is Arthur's house
now.
RAFKIN
Thanks...
ARTHUR
Arthur, Arthur Kriticos.
Rafkin hides his reaction.
RAFKIN
Quite a place you got here.
KATHY
Yeah... we're movin' in.
ARTHUR
One step at a time...
24 EXT. HOUSE - ENTRYWAY - MOMENTS LATER 24
Outside the main structure is an entryway, with an inner
and outer door, almost like an airlock. Arthur produces
the odd key and slips it into the keyhole. The locking
mechanism, visible within the glass, beckons.
Arthur turns the key. As it turns, we hear the MECHANISM
CLICK and WHIR. Then, oddly, the key is sucked into the
keyhole, and vanishes.
Everyone looks at the now-empty keyhole, then at each
other, then back at the keyhole.
(CONTINUED)
27.
24 CONTINUED: 24
ARTHUR
Huh.
KATHY
That's... odd.
ARTHUR
Must've, um, slipped into the
mechanism. We'll have to get that
looked at.
RAFKIN
That didn't look like it slipped
to me. I got a cousin who could
fix that --
BOBBY
Dad, you broke it!
ARTHUR
Bobby, go to a station break,
will ya?
BOBBY
Huh?
ARTHUR
Give it a rest.
Bobby reluctantly clicks off the recorder.
25 INT. CLOCKWORK ROOM - CONTINUOUS ACTION 25
In the basement of the house, in a dark space we see a
tiny pendulum within a delicate, antique set of gears
come to life. AS we PULL AWAY, runes of odd description
come INTO VIEW, etched on ivory plates, the plates
attached to levers and meters standing poised, waiting...
The lights in the room suddenly flicker on.
We PULL AWAY FROM the odd bits of machinery, seeing it
for what it is: a control panel of some kind. Our
RETREATING CAMERA then becomes engulfed by what looks to
be a huge set of gears, made of brass and steel, standing
by. We PULL OUT the other side of the gears, viewing the
machinery's massive size, the gears works nearly fifteen
feet high, dominating a room filled with pulleys and
steel cable.
THIRTEEN GHOSTS - Rev. 10/27/00 28.
26 EXT. HOUSE - CONTINUOUS ACTION 26
Lights flicker on from within the house, allowing us to
see inside. The most striking thing about it is that the
house is entirely transparent. Even the interior walls
are made of glass, putting the furniture, fixtures and
all the expensive-looking antique decorations on stark
display. Everyone stares at the alarming edifice,
fascinated.
BOBBY
How. Weird.
ARTHUR
Apparently Cyrus wasn't too keen
on privacy.
KATHY
I hope the bathroom's in the
basement.
Arthur pushes the door open, and they enter...
27 INT. MAIN FLOOR - CONTINUOUS ACTION 27
The group comes into the entryway. Like an airlock, the
outer door closes before the inner one will open.
MAGGIE
I did mention I don't do windows,
didn't I?
The walls of the entryway are lined with rare ancient
documents in exquisite cases, archeological treasures,
recognizably priceless antiques. The group looks
around, amazed.
With fascination, Arthur studies the text on the walls.
ARTHUR
(under his breath)
Latin...
KATHY
Dad, this stuff must be worth
a fortune.
ARTHUR
Yeah. That occurred to me.
With a huge smile Bobby reaches for an ancient samurai
sword on display. Arthur catches him in mid act.
ARTHUR
In your dreams, kiddo.
(CONTINUED)
THIRTEEN GHOSTS - Rev. 10/27/00 29.
27 CONTINUED: 27
They come to a great hall, a soaring open space with a
large stained glass ceiling and, strangely, an equally
large brass and copper floor. With only one other door
at its opposite end, the room is a great glass cube.
RAFKIN
(under his breath)
Ohhh, Cyrus. What did you do...
ARTHUR
Okay. First rule. No throwing
stones.
BEN
It's marvelous, isn't it? A
living work of art.
A few chuckles. But Rafkin looks troubled. Sweat
beads on his forehead. His head is killing him, and
he's rubbing incessantly on his temples.
RAFKIN
(to Ben)
Excuse me, the sooner you show me
where you hid the basement the
sooner I'm outta here --
BEN
I believe it's down the hall,
second door on the right.
Rafkin walks off, holding his head, leaving the others
still examining the house.
Bobby's eye catches on the design in the floor made of a
series of concentric metal rings. There's a brass disk
in the center, two feet in diameter, with symbols etched
into its surface, spinning slowly.
Bobby goes to place his foot on it, when Arthur lifts him
up.
ARTHUR
Don't touch anything. At least
until we got some property
insurance.
He places Bobby down beside Kathy and Maggie.
BEN
Arthur, we have some papers to
sign in the library. After that,
I'll give you a tour of the place.
Arthur turns to the three of them.
(CONTINUED)
30.
27 CONTINUED: (2) 27
ARTHUR
I don't want you guys to move from
this spot. We'll be right back.
KATHY
Dad --
BOBBY
What happened to checking out our
new digs?
ARTHUR
You can see it all from here.
KATHY
Dad... you're being paranoid and
overprotective.
ARTHUR
Yeah... of all this stuff. I know
you guys too well.
(points to spot)
Stay. Right. Here. I mean it.
The three of them nod, appeasing him. Arthur and Ben
walk off.
After a beat, Kathy, Maggie and Bobby slip away...
28 INT. BASEMENT 28
Rafkin descends the stairs. Downstairs is a maze of
narrow glass corridors. Not much else. It's all very
clean and sterile. Not a spider web in the joint. In
fact, there's nothing alive down here.
Rafkin removes a pair of ghost glasses. Slips them on.
An AUDIO PIERCING GAINS in VOLUME with every step Rafkin
takes.
THROUGH GHOST GLASSES
RAFKIN
Alright, you sick bastard, where'd
you put my money?
As soon as Rafkin reaches the bottom step, he's assaulted
full force by the psychic waves around him.
RAFKIN
Aaahh!!
(CONTINUED)
31.
28 CONTINUED: 28
He keels over and vomits.
The assault becomes too much, he collapses against a wall.
When he doubles over in pain... we reveal a ghost behind
him in the glass. It's a teenager from the '50s, a highschooler in a letterman's coat, the victim of a horrific
auto crash. He holds a baseball bat menacingly over his
shoulder.
Rafkin, sensing its proximity, turns as the ghost swings
the bat with all his might. Instinctively Rafkin leaps
back, but the glass holding the ghost holds. With
exception of the red symbols that EXPLODE across its
surface, the barrier remains intact.
But the ghost within is suddenly gone...
Rafkin lands with fright a few feet back up the hallway.
RAFKIN
Sweet Jesus... not you.
As he turns about him, another ghost launches out of the
darkness at him, only to be stopped by the glass. It's
an older, Pilgrimess woman in stocks.
Rafkin's jolted by this vision. He's driven to the other
side of the hallway. Again, when he turns around, the
ghost is gone. He turns to face the Fat Man and the
Little Woman ghosts.
This sends him flying.
Rafkin races back down the corridor in shock. Soon he's
lost in the underground maze of glass, confused by all
the twists and turns.
He finally reaches the foot of the stairs.
And bolts up them...
CUT TO:
29 INT. CYRUS'S LIBRARY 29
Ancient weapons are displayed hanging on the walls.
Arthur and Ben take them in.
ARTHUR
Was Cyrus a hunter?
(CONTINUED)
THIRTEEN GHOSTS - Rev. 10/27/00 32.
29 CONTINUED: 29
BEN
You could say that.
Arthur's attention is now drawn to the rare collection
of books piled up against the walls. We PAN, FOLLOWING
Arthur, discovering a pair of ghost glasses on a shelf.
ARTHUR
This is incredible, Chaucer,
Dickens, Hemingway... these are all
first editions.
Arthur carefully handles the books.
BEN
Your uncle was quite a collector.
Of many things.
Ben removes a folder of papers from his briefcase. Lays
them across the desk. Hands Arthur a pen. Arthur
reluctantly pulls himself away from collection.
BEN
I've highlighted where you're
supposed to sign.
(indicating)
First here --
Arthur takes the pen from him, pauses.
ARTHUR
Look, I didn't want to bring this
up in front of the kids. This
place... it's amazing, and we're
extremely grateful, believe me,
but I don't know how we can
afford it... I'm just a teacher...
and the taxes on it must be...
well, to be honest...
(long beat, almost
to himself)
... a fire took away everything we
had...
BEN
Not to worry, Arthur, your uncle
was a genius with finances. He
took care of everything. Estate
taxes. Inheritance taxes, you name
it. You'll never have to worry
about money ever again.
Arthur takes this in. Scans the documents. Finds
the highlighted area, and is just about to sign, when...
(CONTINUED)
THIRTEEN GHOSTS - Rev. 10/27/00 33.
29 CONTINUED: (2) 29
RAFKIN (O.S.)
Arthur!!
Arthur looks up and sees -- Rafkin standing in the doorway,
looking horrible, out of breath, trying like hell to shed
the vomit-stained Power & Light jumpsuit he's been wearing.
RAFKIN
(panicked, rambling)
We gotta talk.
Arthur looks with panic at Ben.
ARTHUR
What the hell's wrong with the
breakers?
RAFKIN
My name's Dennis Rafkin, and I --
BEN
Shit, you're Dennis Rafkin?
(to Arthur)
My office warned me about this guy.
RAFKIN
(an urgency in
his voice)
You gotta listen to me... this
is gonna be hard to swallow...
but I used to hunt displaced
spiritual energy... with your
uncle.
ARTHUR
What?
RAFKIN
... P.K. agents, Revenants, Eidolons,
Umbras, wraiths... any of this ring a
bell?
Arthur looks back and forth from the lawyer to the vomitstained psychic, thoroughly confused. Rafkin takes a beat.
RAFKIN
Alright, let's do this the easy way.
Ghosts, Arthur. I used to hunt
ghosts with your uncle Cyrus and --
ARTHUR
Ghosts??
Ben starts laughing, more loudly than is appropriate.
(CONTINUED)
THIRTEEN GHOSTS - Rev. 10/27/00 34.
29 CONTINUED: (3) 29
RAFKIN
(rolling his eyes,
stating the obvious)
Disgruntled souls trapped on earth
because of unfinished business,
yes.
(to Arthur)
Listen, you gotta get your kids
and get the hell out of here, now.
BEN
This is one for the books. I
never met a real live lunatic
before.
RAFKIN
Hey, asshole, I'm not talking to
you. You can stay in here as long
as you want.
(to Arthur)
I know it sounds crazy, but this
is serious. The basement is filled
with containment cubes. If I were
you --
BEN
Arthur, this guy's been calling
my office since your uncle died.
I see it all the time. Some rich
guy passes away, and then all the
nuts come out. Next thing you
know, he'll be claiming Cyrus owed
him money.
RAFKIN
You're damn right he did. It's
bad enough I had to, um talk your
secretary into telling me where
you'd be so I could get paid --
oh, by the way, she genuinely
thinks you're a real bucket of
shit --
(to Arthur)
But I don't give a damn about that.
All I care about is getting my ass
outta here. I suggest you do the
same.
ARTHUR
Look, I don't know what's going
on, but --
Rafkin's headache starts in again, hard.
(CONTINUED)
THIRTEEN GHOSTS - Rev. 10/27/00 35.
29 CONTINUED: (4) 29
RAFKIN
Shit, either one of you got any
aspirin, ibuprofen, acetaminophen,
Midol? Anything, I --
ARTHUR
What's the matter? You alright?
He finds a bottle of pain relievers in his pocket, tries
to get it open, but his fingers are trembling in pain.
RAFKIN
Goddamn childproof caps...
Rafkin fumbles with the bottle. Arthur reaches out to
give him a hand. When he makes contact, Rafkin receives
a series of flashes:
29A FLASHBACK - ARTHUR'S PREVIOUS DREAM 29A
Jean's in front of the sliding glass doors, with the kids
outside playing. The images begin to BLUR and pound
forward with amazing speed, then --
END OF FLASHBACK.
BACK TO LIBRARY
ARTHUR
Hey, buddy. You okay?
Rafkin looks around, registering where he is. On the
floor.
RAFKIN
Yeah, shit, my head...
Arthur reaches out to help him up. Rafkin recoils.
RAFKIN
Don't. Touch me.
Rafkin sits up and looks around, can't see Ben.
RAFKIN
Where'd Alley McBeal go?
(cover 'where'd the suit go?")
CUT TO:
THIRTEEN GHOSTS - Rev. 10/27/00 35A.
30 INT. BASEMENT - CONTINUOUS ACTION 30
Ben's heading downstairs, the same way Rafkin just came.
When he gets to the bottom of the stairs he takes out a
pen light, and flicks it on. Starts to head down the
center corridor.
Now we're thinking to ourselves, what the hell's this guy
doing, and where the hell's he going? To make matters
worse, he removes a pair of those ghost glasses from his
pocket. Slips them on. Now we're even more curious...
BEN
(shaking his head)
Power guy... what an idiot...
THROUGH GHOST GLASSES
He passes by the first room. inside is the 1950s Ritchie
Cunningham look-alike. He shoulders his bat, watching
Moss's every move through dead eyes.
BEN
Hey, Babe Ruth, stop staring...
As Ben passes, the ghost suddenly disappears. He moves
on...
(CONTINUED)
36.
30 CONTINUED: 30
Inside the next is a boy, sevenish, holding a tomahawk,
dressed in a cowboy outfit with a hunting arrow through
his head.
BEN
Next time learn to duck...
He turns a corner, following the path known only to him.
It leads the lawyer to a dead end.
Ben feels along the edge of the panel. The glass door
snaps open, lightning fast. Ben grins, then carefully
steps in...
31 INT. CLOCKWORK ROOM - CONTINUOUS ACTION 31
Ben makes his way around the huge gear works, and
approaches the control panel. Smiling, the lawyer spots
a black briefcase sitting on a scale next to the
mechanism.
BEN
I gotta hand it to you, Cyrus
Kriticos, you're a man of your
word.
Ben picks up the briefcase; as he does, it sets off a
trigger beneath it.
The house begins to make noises. Behind him, GEARS
GRINDING, WHIRRING, CLICKING, CLUNKING. Something has
been turned on.
Ben hardly notices; he's intent on the briefcase. He
opens it. It's filled with bundles of cash. Ben smiles,
still nervous. He closes the briefcase, and leaves the
room with it.
32 EXT. HOUSE 32
From outside the house we witness the unbelievable.
Rooms shift, walls migrate, the whole of the house
reconfigures its architecture to accommodate some hidden
agenda within.
33 INT. STUDY - SAME TIME 33
Rafkin and Arthur also witness a change. From their
perspective, they can see from the inside what the
outside was doing. It's obvious by their shared looks
that maybe it's time to take their argument outside.
(CONTINUED)
THIRTEEN GHOSTS - Rev. 10/27/00 37.
33 CONTINUED: 33
RAFKIN
Look, I don't know what's going on
here, but if you care about that
family of yours, get them out of
this house.
Arthur doesn't need convincing.
ARTHUR
I'll take your word for it.
They quickly rush out of the study, and over to the
entryway. But the kids and Maggie are not there...
ARTHUR
Kathy... Maggie... Bobby!!
34 INT. CORRIDOR - CONTINUOUS ACTION 34
No one answers Arthur's cries.
ARTHUR
I told them not to leave this
spot.
RAFKIN
They're kids, what do you expect?
ARTHUR
Alright, fine, you check
downstairs, I'll check up.
Arthur takes off around the corner. Rafkin stares at
the basement door.
RAFKIN
(to himself)
There's no way in hell I'm going
back down there...
(beat)
Time for this psychic to leave...
He takes a few steps towards the front door, as Arthur's
VOICE ECHOES through the house, looking for his kids.
RAFKIN
(hesitating)
Shit, shit, shit...
Rafkin watches as a set of glass panels close across the
front door, sealing them in.
THIRTEEN GHOSTS - Rev. 10/27/00 38.
35 INT. STAIRCASE - WITH ARTHUR 35
He reaches the top of the stairs leading up to the second
level, when he hits glass. The stairs have been sealed
off from the shift in the house.
ARTHUR
Bobby. Kathy!
Arthur bangs like a madman on the glass.
ARTHUR
(begins yelling)
Bobby!! Kathy!!
Finally the house relents. The glass barrier slides open.
Arthur bolts down the hallway.
36 INT. BASEMENT - WITH BEN - SAME TIME 36
Ben heads back the way he came, wearing the glasses. He
walks past the rooms again. As he approaches one, a
naked female suicide victim with dead eyes, her wrists
slashed, her bloodstained hands wielding a knife, comes
up to the glass. Ben stops to check her out.
BEN
What's the matter? Life got you
down?
The Suicide stares at him now with hatred. Her entire
eyes are ink black, her face sallow, sucked in, her
runny mascara stains cascading down her bloodless cheeks.
She launches herself against the glass, clawing and
scratching to get to him. Ben shudders, thinking he
might've crossed a line, begins to back away.
As the basement around Ben Moss suddenly begins to shift.
The lawyer turns about, watching with unrest as the
mechanical gears all around him engage... shifting
rooms... rearranging walls...
37 INT. CLOCKWORK ROOM - CONTINUOUS ACTION 37
On the control panel, the first lever in the row of
symbols suddenly shifts forward.
38 INT. BASEMENT - CONTINUOUS ACTION 38
Opening doors...
(CONTINUED)
THIRTEEN GHOSTS - Rev. 10/27/00 39.
38 CONTINUED: 38
Ben turns to see the door that held the Suicide back
slides open.
BEN
Hey, I was only kidding...
The ghost steps into the hallway towards Ben, blocking
the route to the stairs. Ben back-pedals in horror.
Backing right into an open doorway...
As he steps over the threshold, there's a flicker of
light in the doorway, and a sharp SNICK.
Ben stands in the doorway, surprised, apparently
paralyzed. His glasses tumble off his face, stems sliced
through. The briefcase in his hand also seems to be
sliced. Half of it falls and halves of dollar bills
spill out onto the floor.
Ben slowly slides to the ground. Or at least his front
half does. The glass door has snapped shut like a razor
blade. Bisecting him laterally, slicing straight through
his body.
His front half slides down, revealing, for a second, a
cross sectional view of his back half on the far side of
the glass.
As Ben's remains collapse wetly to the floor, the Suicide
smiles and vanishes...
39 INT. CLOCKWORK ROOM - CONTINUOUS ACTION 39
Above the row of levers we see a series of 13 meters at
the base of the pendulum. All read. The needle on the
first meter suddenly dives deep into the red.
40 INT. GREAT HALL - CONTINUOUS ACTION 40
On the floor of the great hall, the RING stops spinning
with a CLICK. The symbol on the innermost ring (the same
as the one in the basement) has lined up with its mate on
the disk.
CUT TO:
41 INT. SECOND FLOOR - HALLWAY - NIGHT 41
Kathy, Bobby and Maggie are walking around, examining
everything... still excited, oblivious to what's going on
downstairs.
(CONTINUED)
40.
41 CONTINUED: 41
Kathy passes by one of the bedrooms, and breaks off from
the other two to check it out.
KATHY
I'll be in here.
Bobby and Maggie continue on. Bobby turns on his
microphone.
BOBBY
(recording)
We are now upstairs... and
there's... more glass.
Bobby clicks off the microphone. Then removes his
scooter from his bag.
BOBBY
Race you to the end of the
hall...?
MAGGIE
I really don't think you should be
riding that in --
And suddenly Maggie breaks out into a sprint. Bobby
quickly jumps on his scooter, but he's too far behind to
catch up.
BOBBY
Hey, you cheated!
They reach the end of the hall.
BOBBY
That wasn't fair, I didn't say
start.
MAGGIE
Gotta be on your toes, kid.
Maggie walks into one of the rooms. Bobby follows her.
42 INT. BOBBY'S BEDROOM 42
The room's filled with all types of cool, macabre, boy
stuff. A seven-year-old's dream, if you were a demented
seven-year-old.
BOBBY
This is definitely my room.
(CONTINUED)
41.
42 CONTINUED: 42
Maggie plops down on a bed made up with skull and
crossbones sheets. She finds a pair of ghost glasses
lying on the bedside table. Puts them on.
MAGGIE
So, do I look cool?
BOBBY
No, you look like a dork...
But the nanny isn't listening. She sits there, slackjawed.
MAGGIE
(looking through
glasses)
My God... this is... incredible...
MAGGIE'S POV THROUGH GHOST GLASSES
The etched glass symbols on the wall have been added to
with flowing red, glowing symbols. Not only do they
weave in and about the walls, but they create a path on
the floor that leads right out the door.
BACK TO SCENE
BOBBY
What? Lemme see.
MAGGIE
One second.
BOBBY
C'mon...
Bobby grabs at them. Maggie takes them off.
MAGGIE
Alright, alright... here...
Bobby puts them on, and reacts.
BOBBY
Cool!
Bobby grabs his scooter and mike, and takes off down the
hall. Maggie gives chase, but it's obvious she's not
going to catch him.
He zooms in and out of the bedrooms, up and down the
halls, following the glowing red path.
(CONTINUED)
THIRTEEN GHOSTS - Rev. 10/27/00 42.
42 CONTINUED: (2) 42
He takes a couple of turns when he realizes he may have
gone too far. The boy has become lost in all the glass.
Bobby is alone.
BOBBY
Maggie...?
Bobby starts scooting again, only this time with a bit
more urgency.
He passes an open door, which opens into a set of stairs
heading down. He stops, backs up, then glances down. At
the bottom of the nearest landing, he catches the glimpse
of a figure standing. The female figure is in
silhouette, and her head is tilted oddly to one side,
though from this distance, we can't see why.
BOBBY
Kathy??
The figure oddly shuffles off.
BOBBY
C'mon, Kath, stop playing games.
With his scooter under his arm, Bobby heads downstairs,
into the darkness of the house.
BOBBY
I'm gonna tell Dad...
CUT TO:
42A INT. CORRIDOR 42A
Maggie looking tired of searching for Bobby. Suddenly
something O.S. catches her eye.
MAGGIE
Whoa... what's going on.
43 INT. KATHY'S BEDROOM (SECOND FLOOR) 43
Kathy walks in, but not before she notices that, from the
hallway, the room appears to be empty. The glass door,
we now realize, is "trick" glass.
KATHY
This place is awesome.
Kathy walks over to the bed. Plops down, sinking into
all the silk. Her half-closed eyes tell us -- puurrfect.
(CONTINUED)
THIRTEEN GHOSTS - Rev. 10/27/00 42A.
43 CONTINUED: 43
Out of the corner of her eye, she spots a door ajar, with
the lights on inside.
KATHY
No way...
She slips off the bed, opening the door, revealing her
new bathroom. And if ever a room could be carved from a
single diamond, this is it.
KATHY
Now that's what I'm talkin' about!
43.
44 INT. BATHROOM 44
It's spectacular. Immaculate. And not only spacious,
but appointed. The shelves are stacked with jewel-like
bottles of perfume. Kathy's wet dream.
As we VIEW her FROM BENEATH the glass shelves, she begins
inspecting her own found treasure. Everything seems to
be unashamedly brand-new.
KATHY
We've struck gold.
ANOTHER ANGLE
What she also doesn't notice is a pair of ghost glasses
lying on the sink. The CAMERA ZOOMS IN THROUGH the
lenses, so that we're now looking at the scene...
THROUGH GHOST GLASSES
And a figure passes behind Kathy, jolting us. The figure
heads for the tub. The CAMERA TURNS TOWARDS the figure,
REVEALING a new level of hell. There's blood spattered
everywhere in the bathroom. We PAN. The gore is
overwhelming.
Still lost in her personal nirvana, Kathy nonchalantly
strolls over to the bathtub, drawing back its
bloodstained curtain. In a TIGHT SHOT, she runs the
water, which is blood-red. On the CUT, she brings it up
to her face where it's warm, clear and perfect.
When she leans back a bit, we see the naked female
suicide ghost lying in the bloody tub, wrists slashed,
eyes staring at Kathy, wickedly.
Kathy doesn't see her, because she's not wearing the
glasses.
Two words are written in blood on the glass walls
surrounding the tub:
I'M SORRY
Kathy's oblivious of the Suicide, lost in the
possibilities of her bathroom. Running her hand around
the bloody water. She turns the water off... and as soon
as she does, a knife pierces the surface of the water.
KATHY
It doesn't get any better than
this.
(CONTINUED)
THIRTEEN GHOSTS - Rev. 10/27/00 44.
44 CONTINUED: 44
Suddenly, the Suicide rises up with the rest of her
knife, reaching for Kathy, when --
There's BANGING on the bathroom door. Kathy bolts
upright.
BACK TO SCENE
We snap out of the ghost glasses, and the bathroom's back
to normal. All clean glass block. An empty tub.
Kathy opens the locked bathroom door... and Arthur's
standing there, pissed. He yanks her out of the
bathroom, into the hall.
ARTHUR
What the hell're you doin' up
here? Didn't I tell you to stay
downstairs?
KATHY
Yeah, but --
ARTHUR
Where's your brother?
KATHY
With Maggie...
MAGGIE (O.S.)
He was with me.
They turn to see Maggie walking up to them.
MAGGIE
But he scooted off. He's around
here somewhere.
ARTHUR
You're supposed to watch him,
that's what I pay you for!
MAGGIE
(starts yelling)
Bobby!
44A INT. STAIRCASE 44A
Arthur's heading downstairs with Kathy and Maggie.
ARTHUR
I'll find him. But I want you
both out of here...
(CONTINUED)
THIRTEEN GHOSTS - Rev. 10/27/00 45.
44A CONTINUED: 44A
KATHY
But --
ARTHUR
No buts. I want you guys to wait
in the car, I'll be out as soon as
I find Bobby.
KATHY
Why are you freaking out?
ARTHUR
Kathy, just this once, don't argue.
45 INT. MAIN LEVEL 45
They reach the bottom of the stairs, and head over to the
front door. But there's now a glass barrier in front of
it, barring anyone from exit.
KATHY
What happened to the door?
ARTHUR
Son of a bitch.
Arthur picks up a chair and hurls it at the glass. It
bounces off without a dent. He picks it up and starts
banging away. Nothing. Over the top of the noise a voice
bellows out.
ARTHUR
What a night I'm having!
RAFKIN (O.S.)
It's sealed shut.
They all turn to see Rafkin sitting on the couch.
ARTHUR
What do you mean it's sealed shut?
RAFKIN
I mean, it's sealed shut. What part
of that code are you having
trouble cracking?
KATHY
There must be another way out.
RAFKIN
I've looked.
(CONTINUED)
THIRTEEN GHOSTS - Rev. 10/27/00 46.
45 CONTINUED: 45
ARTHUR
Well, we're gonna look again...
right after we find my son. Now
get up...
RAFKIN
Thanks, but I'll wait here.
ARTHUR
Look, I don't know what the hell's
going on and I don't know who the
hell you are... but my son's
missing. So until those questions
are answered, you're not leaving
my sight. Now get up.
Rafkin is startled by Arthur's tone. He reluctantly gets
up to help.
RAFKIN
Oh. Now you listen to me. Before
it was the lawyer...
(beat, realizing)
... speaking of lawyers. He split?
CUT TO:
46 INT. CLOCKWORK ROOM 46
The gears kick in once again, and the house comes to
life. It's a quick shift. But we notice that the gears
are moving at an accelerated rate.
CUT TO:
46A INT. BASEMENT 46A
Two more doors open within the basement.
CUT TO:
INT. CLOCKWORK ROOM
At the base of the clockworks, two more needles from the
13 meters go out. Three ghosts are now loose...
CUT TO:
THIRTEEN GHOSTS - Rev. 10/27/00 46A.
47 INT. BASEMENT - WITH BOBBY 47
Bobby is zipping down the hallway on his scooter. He
takes the corners at high speed, following the spell
markings on the floor.
BOBBY
Kathy! Come on.
As he rounds the next turn too fast, his scooter shoots
out from under him, his glasses sail off his head...
BOBBY
Aahh!
... and he lands on his ass.
(CONTINUED)
47.
47 CONTINUED: 47
Bobby grabs his glasses again, and when he slips them
on!--
THROUGH GHOST GLASSES
He sees a decapitated head lying on the floor right
between his legs, wrapped in plastic. The head's eyes
snap open, and it begins to mouth words.
Bobby screams... then he hears a DRAGGING sound behind
him, like dead skin slapping on glass.
Bobby turns and sees a headless, legless human torso,
wrapped in sheets of filthy plastic, crab-walking towards
him...
BOBBY
Daaddd!!!!
Bobby jumps to his feet, turning. He runs down the hall.
Looks back, sees nothing, then when he turns back,
straight into the bound woman.
Pinned against the glass, the bound woman lets out a
muffled cry.
Strangled by a businessman's tie, which is still cinched
tight around her neck, her tongue sticks out like a thick
blue thumb. Her hair, skin, and prom dress are clotted
with dirt and worms -- the marks of a shallow grave. Her
hands and feet are bound by rope, but that's not the
worst. Her head sits askew on her shoulders, neck
obviously broken, a chunk of bone jutting out just
beneath the skin.
Panicked, she goes into violent convulsions.
It's too much for Bobby. He turns and bolts, racing
blindly through the basement's glass hallways. When
finally he feels safe, he slows enough to look over his
shoulder, and that's when he slams into a wall of glass.
The collision knocks his glasses from his head, his mike
from his shoulder. He reaches for his glasses when the
tiny sound of a SQUEAKING WHEEL issues FROM his MIKE
down the hall.
Bobby looks at the mike, then fearfully back at the
glasses in his hands. Ushering all his courage, Bobby
dons the glasses, and with his heart beating like a
hummingbird's, he turns around, and sees...
(CONTINUED)
48.
47 CONTINUED: (2) 47
Another WOMAN there, walking down the corridor towards
him. Dressed in only a hospital gown, she wheels a
portable IV stand along the floor. Yards of thin plastic
IV tubes tether her to the stand. Her arms, thin,
withered from long illness, bear nasty scars from
unnumbered operations. Her head is almost completely
covered in stained bandages, but a beauty mark decorates
that portion of her face we can see.
She gropes blindly down the passage, straight towards
Bobby.
He backs up, trips over his feet, almost falls.
The IV Woman stops. So does Bobby.
Bobby waits, frozen. He tries to call for help, but can
only manage a gasp.
BOBBY
D-Dad... Daddy...
(louder)
Dad! Dad!
The IV Woman seems to respond to the sound of his voice.
She cocks her head, as if listening. She moves, calling
out, but we hear it THROUGH the tiny amplifier of Bobby's
TOY MIKE.
JEAN (V.O.)
(on mike)
B-bb-bobby?
And now he recognizes her voice -- it's his mother, Jean.
That's it. Bobby turns and runs like hell. Around the
corner, and right into --
Cyrus. Or Cyrus's ghost. Pale white, with eyes rolled
back, and a big spike sticking out of his neck. Standing
behind a pane of glass. Bobby actually hit glass, and he
catches a glimpse of the dead Cyrus just before he's
knocked out from the impact.
As his glasses and microphone fall to the floor, we...
CUT TO:
48 INT. MAIN FLOOR - CORRIDOR 48
Arthur, Kathy, Maggie and Rafkin are searching the house,
looking for Bobby.
(CONTINUED)
THIRTEEN GHOSTS - Rev. 10/27/00 49.
48 CONTINUED: 48
MAGGIE
Bobby!!
ARTHUR
Come on out, pal!
KATHY
Robert!! Stop screwing around!
RAFKIN
Hey, Glass Family Robinson!
You're wasting your breath!
This stuff --
(taps glass)
This is Ectobar Glass, Cyrus invented
it. It's shatterproof and soundproof.
So your kid might have a hard time
hearing you.
Maggie touches the etchings on the glass.
MAGGIE
What are these?
RAFKIN
They're containment spells.
Ectoplasmic entities can't
cross them. The supernatural has
laws to obey just like we do. In
the case of ghosts, it's spells.
Written, spoken, it doesn't matter.
They have to obey what the spells
tell them.
KATHY
So what do these do?
RAFKIN
At the moment they're keeping us
alive
ARTHUR
Just ignore him. Bobby!
KATHY
Let's go back for a second to the
ecto-thing...
RAFKIN
You mean the poltergeists.
KATHY
Poltergeists?
(CONTINUED)
THIRTEEN GHOSTS - Rev. 10/27/00 50.
48 CONTINUED: (2) 48
RAFKIN
(sighs)
Alright, ghosts. And not Casper the
friendly kind either. Cyrus had a
thing for hunting the more powerful
of the species. Why, I got no idea.
ARTHUR
I thought you didn't want to go
through it again.
RAFKIN
You know, you're right. I've wasted
enough time on small minds tonight.
KATHY
Hey!
RAFKIN
I was talking about your father.
MAGGIE
Excuse me... did you say hunted?
RAFKIN
Yup, and his trophies are all
locked up in the basement.
MAGGIE
This basement?
RAFKIN
What's with you people? Are you
slow? Of course this basement.
If it was next door I wouldn't
give a shit. Here, I'll prove it...
Rafkin pulls out his glasses.
RAFKIN
You can see them with these.
They're spectral viewers.
MAGGIE
I gave Bobby a pair of those.
This gets Arthur's attention.
Maggie walks over and takes them out of Rafkin's hand.
Slips them on.
MAGGIE
(looking around)
I don't see any ghosts...
(CONTINUED)
THIRTEEN GHOSTS - Rev. 10/27/00 51.
48 CONTINUED: (3) 48
RAFKIN
(rolls his eyes)
That's because they're all
downstairs.
MAGGIE
... just more of that crazy Latin
shit all over the floor.
Rafkin takes the glasses back. Looks down. Impressed.
RAFKIN
Huh. Hidden barrier spells. Cyrus
must've needed more protective zones.
MAGGIE
Protection? You mean like oregano is
to a vampire?
RAFKIN
(sarcastic)
Yeah... something like that...
ARTHUR
(had enough)
Look, Raf-kin, is it? Do me a
favor, spare us the haunted house
ravings... at least 'til we get
outta here. Okay?
48A INT. BASEMENT DOOR - TOP OF STAIRS 48A
They come to a staircase, leading down into the basement.
Arthur starts down it.
RAFKIN
Whoa!
They stop and look at him.
RAFKIN
What did I just say? There's a
petting zoo in the basement? No,
Arthur, I succinctly said there
are ghosts in the basement.
ARTHUR
You also said they were locked up.
RAFKIN
Uh-uh. No way.
Rafkin won't budge. Arthur knows it.
(CONTINUED)
THIRTEEN GHOSTS - Rev. 10/27/00 52.
48A CONTINUED: 48A
ARTHUR
Listen, I'll make you a deal. I'll
pay you whatever Cyrus owed you.
Just... help... me... find my son.
Arthur extends his hand.
ARTHUR
Deal?
Arthur extends his hand. And for the first time Dennis
Rafkin isn't afraid of the gesture. Not that he takes it,
of course.
RAFKIN
Deal.
Rafkin pulls out a bottle of prescription drugs, swigs it
down, swigs it all down, then joins them down the staircase.
49 INT. BASEMENT 49
The group comes to the bottom of the stairs, then moves
into the glass-lined passage. Rafkin's head is beginning
to throb again. Arthur, taking note.
ARTHUR
You going to be okay?
RAFKIN
Yeah. Just keep an eye on me, okay?
The four search the empty basement hallways, finding
nothing but more glass and shadows. They come to an
intersection in the huge labyrinth.
Rafkin checks one of the containment cubes, finding its
door still locked.
ARTHUR
The place is too big. Kathy and
I'll go this way, you two head
down there.
RAFKIN
Sure. Ignore the professional...
Look, don't go too far. A straight
line then turn around. We'll meet
back in five -- alright?
Arthur nods. Takes Kathy by the arm, and they head off in
one direction, leaving Maggie and Rafkin to go the other way.
CUT TO:
THIRTEEN GHOSTS - Rev. 10/27/00 53.
50 INT. CLOCKWORK ROOM 50
On the hour the huge gears turn again. Faster than
before. We MOVE PAST them, IN ON the control panel.
Three levers shift, and the sign of the jackal, along with
others, slides forward, clicking into place.
CUT TO:
51 EXT. REAR OF HOUSE - CONTINUOUS ACTION 51
FROM the BACK of the house, we see the ARCHITECTURE
SHIFTING as if under orders, the huge EDIFICE GROANING
with Herculean effort.
CUT TO:
51A INT. BASEMENT GLASS CORRIDORS - VARIOUS SHOTS 51A
Behind Kathy and Arthur, and elsewhere near Rafkin and
Kalina three more doors slide open, unnoticed.
CUT TO:
52 INT. BASEMENT GLASS CORRIDOR - WITH RAFKIN AND MAGGIE 52
Which is exactly what Rafkin didn't want to hear...
especially in the basement. Maggie doesn't look too
worried about things. Taking things rather nonchalantly,
while Rafkin appears the frightened rabbit.
RAFKIN
Look, you don't believe me, do you?
See for yourself...
Rafkin puts the Ghost Glasses on Maggie, and pulls her
in front of the first glass cube.
MAGGIE
I thought we've been over this.
I can't see any ghosts.
RAFKIN
There.
Rafkin points into one of the cubes.
MAGGIE
Where?
Maggie looks around intently, but comes back confused.
Rafkin looks at her, wondering. He pulls the glasses
off her face and puts them on his own. He's shocked.
The first two cubes are empty.
(CONTINUED)
THIRTEEN GHOSTS - Rev. 10/27/00 54.
52 CONTINUED: 52
RAFKIN
(panicking)
Oh, no...
Rafkin paces in front of the cubes. He peers worriedly
into the next cube. At first he sees nothing, when
suddenly, a hammer slams against the glass. Rafkin
whoops and jumps backwards. He grabs his heart.
RAFKIN
Never fails... they always wait
for you to put your face right up
near the glass...
Maggie eyes him warily. Rafkin takes off the glasses
and puts them on Maggie. She looks into the cube. And
screams.
THROUGH GHOST GLASSES
A hugely-built middle-aged BLACK MAN appears, dressed in
layers of viciously torn leather, with a blacksmith apron
covering what remains. In addition, nails and spikes are
hammered into his body, from his head down to the sledgehammer that's been nailed to his handless arm.
MAGGIE
Oh my God... it's a... it's a...
RAFKIN
That's right, we're surrounded by
'em all the time. Most of 'em
can't hurt us. Most of 'em don't
want to hurt us... but there are
exceptions.
The apparition glares at Rafkin. He takes hold of a
spike embedded deep in his shoulder and pulls. All eight
inches of rusting metal comes out. He thrusts it at the
glass, and pulls it across the surface in a shower of
sparks, as if carving a hello from Hell.
MAGGIE
What's he doing?
RAFKIN
Just saying hi. I helped put him
here.
The ghost lowers his spike. Into the glass he has etched
the phrase "U MYN." Dennis takes a beat, then licks the
glass.
(CONTINUED)
THIRTEEN GHOSTS - Rev. 10/27/00 54A.
52 CONTINUED: (2) 52
RAFKIN
(acting tough to
ghost)
I love you too.
Lightning quick, the apparition lifts his hammer and
smashes it against the glass. Sparks explode across the
corridor. Maggie jumps back into Rafkin's arms.
MAGGIE
Okay, I wanna go now...
Maggie swallows hard. Rafkin, half smiling, gestures
down the corridor, and reluctantly, she follows.
At the last moment, Rafkin turns and flips the hammer the
bird. But the ghost is gone...
CUT TO:
53 OMITTED 53
54 INT. HOUSE - BASEMENT - TRAP ROOM 54
Bobby lies on the floor. He rises, shaky, turns -- and
realizes that he's trapped in a space perhaps twenty feet
wide by ten feet long, surrounded on all four sides by
glass walls. Other spaces are dimly visible through the
glass. He looks around. No way out.
Then, on the other side of the glass wall, he sees Arthur
moving down the passage on the other side.
BOBBY
Dad! Dad!
But Arthur cannot hear or see him. An instant later,
Kathy comes INTO VIEW...
BOBBY
Kathy! Kathy! Dad!
He bangs on the glass, but his fists hardly make a sound.
55.
55 INT. BASEMENT - CORRIDOR - WITH ARTHUR AND KATHY 55
Arthur hurries forward. Kathy behind him.
KATHY
Dad, slow down...
ARTHUR
Bobby!!
Arthur charges forward, searching. Kathy stays close.
KATHY
We're gonna get lost...
And on that note, Arthur turns the corner, and finds
Bobby's microphone and glasses lying in the middle of the
corridor floor. He stops in his tracks. Kathy notices
them too.
Both of them fear the worst. They slowly walk over to
the items. Arthur picks up Bobby's microphone, while
Kathy grabs his glasses.
Arthur presses PLAY on the RECORDER -- Bobby's last words
bellow out.
BOBBY (V.O.)
(screaming on recorder)
Dad! Dad!!
Arthur quickly clicks the RECORDER OFF. He tries to keep
it together, but we can see the pain on his face. Kathy
breaks down.
56 INT. TRAP ROOM - SAME TIME 56
ON Bobby's side of the wall, Bobby pounds on the glass as
he sees Arthur comfort Kathy with a hug.
BOBBY
Dad! Kath! Here! I'm in here!
The wall behind him begins to move -- pushing in. He
gasps, and scrambles back as it comes forward, the space
in which he's trapped in getting narrower.
And to make matters worse, Arthur and Kathy vanish from
his sight behind the "trick" glass. Bobby's about to
lose it...
57 INT. CORRIDOR - WITH ARTHUR AND KATHY 57
Arthur's comforting his daughter.
(CONTINUED)
THIRTEEN GHOSTS - Rev. 10/27/00 56.
57 CONTINUED: 57
ARTHUR
Don't worry, we'll find him.
Kathy pulls it together.
58 INT. OTHER SIDE OF BASEMENT - WITH RAFKIN AND MAGGIE 58
Rafkin and Maggie pass another empty cube. The symbol
on the open door gets Rafkin's attention.
RAFKIN
Oh shit...
KALINA
What?
RAFKIN
The Jackal's loose. We got to get
the hell out of here.
He turns back the way they came. Maggie follows.
59 INT. CORRIDOR - WITH ARTHUR AND KATHY - SAME TIME 59
Kathy holds up the glasses to her father.
KATHY
Dad, Bobby was wearing these.
Maybe Rafkin was right. Maybe
there really are --
ARTHUR
Kathy, think about what you're
saying...
Kathy raises the glasses to her face...
ARTHUR (O.S.)
... there's no such thing as --
... revealing a face from Hell before her -- the Jackal.
THROUGH GHOST GLASSES
With unnaturally long limbs and fingers with long, jagged
nails; its sloping head and bulging eyes contained in the
cage it wears on his head, the Jackal stands before Kathy
in a shredded straitjacket, half torn off, half burned
away.
(CONTINUED)
57.
59 CONTINUED: 59
He supplies a madman's grin, saliva dripping, baring
unnaturally large, crooked teeth, and then suddenly, when
a heartbeat can seem like an eternity, he leaps at Kathy
as if shot out of a shotgun.
BACK TO SCENE
Kathy screams as she's literally propelled down the hall.
ARTHUR'S POV
At the end of the corridor, Kathy is seen being dragged
invisibly across the floor, pinned to the wall, then
dragged up it to the ceiling.
KATHY
Daddy! Help me!! Oh God!!
Her clothes are shredded from her body.
BACK TO SCENE
Arthur, running --
ARTHUR
Kathy!?
KATHY
Daddy, help me!
Arthur, without glasses, can't see the Jackal, but he can
see the impossible spectacle of an invisible something
savagely tearing his daughter apart.
ARTHUR
Kathy! What is it? I can't see a
thing!
Arthur grabs Kathy, tries to drag her away. But the
Jackal won't let go. Kathy is hoisted in the air between
the two, a tug of war that's killing her. Arthur won't
let go of her hands and the invisible Jackal won't let go
of her feet. Bloody scratches rip open along her legs as
her clothes are ripped to shreds.
KATHY
Make it let go! Make it let go!
ARTHUR
Where is it?! Kathy, tell me
where it is --
(CONTINUED)
58.
59 CONTINUED: (2) 59
Arthur grabs all the material he can and pulls. It
tears. Kathy rebounds, almost falling.
The Jackal leaps on her like a hellish animal, scratching
her with both fingers and toes. She screams over and
over. Arthur sees bloody scratches appear on Kathy's
skin, deep, red, sharp.
ARTHUR
Jesus Christ, get off! Get off!
Hysterical, Arthur finally pulls Kathy up and drags her
down the passage. The Jackal leaps again, yanking her from
Arthur's grasp.
Arthur barely catches hold of Kathy's arm and pulls.
But the Jackal's too strong... and he's losing her...
Suddenly, the corridor lights up behind him, and a
phosphorous flare is tossed to the floor beside him.
The JACKAL SHRIEKS with unearthly horror!
A second set of hands grabs hold of Kathy and pulls
alongside Arthur. Arthur turns and comes face-to-face
with Kalina, knapsack slung over her shoulder, glasses on
her face. He does a double-take, then --
ARTHUR
Who the hell're you?
KALINA
Pull!!
Together, the two pull Kathy down the hall, away from the
Jackal.
The Jackal regains his wits and attacks. It's a race
now.
KALINA
Run, goddammit!!!
Arthur and Kalina drag Kathy down the hall, trying to
outrun the Jackal.
KATHY'S POV (UPSIDE DOWN GOING BACKWARDS)
The thing gives chase, closing the gap in the blink of an
eye.
(CONTINUED)
59.
59 CONTINUED: (3) 59
BACK TO SCENE
KATHY
Hurry, Daddy!!
At the last possible moment, the Jackal leaps.
Kathy screams again.
The Jackal suddenly slams into an invisible barrier.
Kathy reacts with astonishment as the ghost rips and
tears into the barrier like a wild animal trying to get
at meat... sparks fly.
The trio tries to regain themselves around the corner.
Kathy's in Arthur's arms, cut, bruised, crying. He
looks up with fire in his eyes at Kalina --
ARTHUR
Just who the hell are you, how the
hell did you get in here, and what
the hell was that!?
CUT TO:
60 INT. BASEMENT GLASS CORRIDOR - WITH RAFKIN AND MAGGIE 60
The duo weave their way through the basement's maze of
glass trying to locate Arthur and Kathy. Rafkin pulls
Maggie along, trying to find the way out, but it's no
use. The hallways all look the same.
Pulling her around a corner, they find themselves
trapped. A glass barrier cuts them off from the rest of
the corridor.
RAFKIN
Shit!! Gotta go back.
Rafkin grabs Maggie, turns, suddenly stops. He looks
down the hall. Maggie isn't sure why. Rafkin starts
backing up.
MAGGIE
What? What!?
RAFKIN
(whispering)
Don't talk. Don't move.
(CONTINUED)
THIRTEEN GHOSTS - Rev. 10/27/00 60.
60 CONTINUED: 60
MAGGIE
(whispering)
Why?
RAFKIN
(whispering)
Somehow we got behind enemy lines.
Hands her the glasses. Maggie can see a tiny boy carrying
a hatchet moving towards them in the dark. She turns back
towards Rafkin for affirmation. When she looks back --
MAGGIE
It's gone...
Rafkin takes the glasses back. Looks --
RAFKIN
No, it's not. It's hiding.
OFF Maggie's terrified reaction, we...
CUT TO:
61 INT. BASEMENT GLASS CORRIDOR - WITH ARTHUR, KATHY AND 61
KALINA
Kalina is helping Arthur tear up strips of cloth to bind
Kathy's wounds.
KALINA
Kalina Oretzia. I'm in the spirit
reclamation business.
ARTHUR
Spiritua-recla-what?
KALINA
I free trapped souls. Your Uncle --
ARTHUR
Forget my uncle, and trapped souls
for a second. What in the world
are you doing here?
KALINA
Looks like I'm saving your ass.
KATHY
(nervously)
Dad... it's still there...
(CONTINUED)
THIRTEEN GHOSTS - Rev. 10/27/00 61.
61 CONTINUED: 61
Kathy passes the glasses to her father. He holds them
for an instant, then puts them on.
The Jackal's some three feet away -- scratching insanely
at the glowing red spells that block his way.
ARTHUR
(studying the Jackal)
Unbelievable...
KALINA
Another one of your uncle's victims.
ARTHUR
(turns to Kalina)
Victims?
When Arthur looks back, the Jackal's gone...
KALINA
Yeah, your uncle had a nasty habit
of enslaving souls. That's why
I'm here. It doesn't matter
whether they're dead or not,
they're still people.
Kathy looks up, bloody, trembling, angry, like this
woman's crazy.
ARTHUR
How the hell did you get in here?
KALINA
I eased in through an opening when
the house shifted.
Kathy looks to her father with hope.
KALINA
Don't get your hopes up. It's
closed now, and it's not gonna
happen again.
ARTHUR
But if you got in --
KALINA
Here...
Kalina pulls out a huge ancient book from her satchel.
(CONTINUED)
THIRTEEN GHOSTS - Rev. 10/27/00 62.
61 CONTINUED: (2) 61
KALINA
The Arcanum. It belonged to my
fiance. He and your uncle had
the only two known copies in the
world.
Kalina flips through the book.
KALINA
It was penned in the fifteenth
century by an astrologer named
Basileus. In it he describes
the building of a certain device.
One that can see into the future,
As legend has it, it was described
to him while under demonic
possession.
(beat)
Needless to say, his book didn't
make the Best Seller's List.
After reading it, the church
burned him at the stake. His
writings, however, survived.
(looking around)
I just can't believe he built
it...
ARTHUR
What're you talking about?
KALINA
Basileus' device. The Eye of
Hell.
(beat)
You're standing in the middle of a
machine designed by the Devil...
CUT TO:
62 INT. BASEMENT GLASS CORRIDOR - WITH RAFKIN AND MAGGIE 62
Rafkin and Maggie continue down the dark corridor. A
figure moves in and out of shadows following them.
Rafkin notices the lurking ghost with the glasses.
RAFKIN
We got company...
He hurries Maggie down the corridor. Suddenly,
another figure, the Suicide, crosses the corridor in
front of them, slipping into the shadows.
(CONTINUED)
THIRTEEN GHOSTS - Rev. 10/27/00 63.
62 CONTINUED: 62
RAFKIN
Did you see that?
MAGGIE
See what? I don't have glasses,
you moron.
Rafkin backs down the hall, Maggie behind him.
He catches a quick glimpse of the first figure again.
This time it's closer.
He re-checks the other corridor, and the Suicide is there.
MAGGIE
(nervous)
What is it?
RAFKIN
If it's down here it's not a good
thing, trust me.
Rafkin spins around, and the '50s kid is on top of him.
He swings his bat madly at Rafkin, connecting on the
last swing. Rafkin, in an explosion of sparks, goes
sailing.
Maggie quickly scoops Rafkin up and starts hauling him
down the corridor with the Suicide in pursuit.
CUT TO:
63 INT. BASEMENT GLASS CORRIDOR - WITH ARTHUR, KATHY AND 63
KALINA
Arthur addresses Kalina as Kathy looks on.
ARTHUR
Look, I don't give a damn about
any machine, any devil, anybody
named Basileus anything except
getting my family the hell out of
here. Now if that book showed
you how to get in, can it show
us how to get out?
KALINA
Possibly --
(CONTINUED)
THIRTEEN GHOSTS - Rev. 10/27/00 64.
63 CONTINUED: 63
ARTHUR
Good. Good. Finally. We're on to
something here. We're communicating.
This is good. All we need is a
little cooperation from you and that
book, and we can all go home.
Correct?
KALINA
Alright, I'll help you get out but
you, in turn, have to help me. I
came here to free those trapped by
your uncle. Tonight. You want out?
You have to help me, too.
ARTHUR
Do I have a choice?
KALINA
Yeah. I could free us all. Here.
Now.
Kalina opens her bag, exposing sticks of dynamite.
Arthur swallows hard. This wasn't the option he had
in mind.
ARTHUR
Al-right... this is negotiable.
(beat)
Kathy, can you walk -- ?
Arthur turns around to see -- Kathy's gone.
ARTHUR
Kathy! Kathy!!!
Arthur searches everywhere, but it appears that Kathy's
just vanished.
ARTHUR
No!! This can't be happening!!
Kalina watches him lose it. She notices something move
above her.
KALINA
C'mon, we gotta get out of here.
ARTHUR
I'm not going anywhere without my
kids!
KALINA
Try telling him that.
(CONTINUED)
THIRTEEN GHOSTS - Rev. 10/27/00 65.
63 CONTINUED: (2) 63
Kalina gestures to a little boy ghost standing on the
ceiling. The ghost issues a hateful, unholy hiss. Arthur
notices him and quickly changes his mind.
They flee down the corridor, until they finally see the
stairs coming up. Freedom. One last corner to go,
when -- wham -- show's over.
A sheet of glass blocks their path to the stairs.
What's worse is that when they turn around -- the
ghost is gone.
ARTHUR
Shit... where'd he go...?
OFF their panicked looks, we...
CUT TO:
64 INT. CLOCKWORK ROOM 64
We MOVE IN ON the huge clockworks. They spin at a
tremendous speed now. We pull into the control panel
mechanism. The symbols shift, and the 9th meter, the
sign of the HAMMER slides forward... and CLICKS into place.
And the house begins to move again... releasing the
ghost.
64A OMITTED 64A
CUT TO:
65 INT. BASEMENT - WITH RAFKIN AND MAGGIE 65
Rafkin and Maggie rush forward. Maggie's on edge, her
eyes darting around, checking all the dark corners of the
corridors.
The HOUSE suddenly begins to MOVE again. At the end of
the HALLWAY a door opens, while walls around them start to
CLOSE IN and crush them.
RAFKIN
Look out! Move!
Rafkin shoves her out of the crushing hallway, as the
wall forces him into the open doorway.
The glass WALL SLAMS CLOSED between them, and the house
goes silent again. Stops moving.
(CONTINUED)
THIRTEEN GHOSTS - Rev. 10/27/00 66.
65 CONTINUED: 65
Rafkin and Maggie can see each other through the glass.
Rafkin notices the glasses in Maggie's hand.
RAFKIN
Great...
His head begins pounding. Something's not right. Then
he turns around, and realizes where he is...
INT. HAMMER'S ROOM
RAFKIN
Oh, shit... go around to the door
and toss me the glasses.
Maggie walks around the corner, and sees the Suicide
standing there. She quickly backpedals back to where
she was before.
MAGGIE
That idea ain't gonna work, you
gotta plan B?
She looks back THROUGH the glass for Rafkin, and spots --
The Hammer is standing right behind him, smiling.
Rafkin reacts to Maggie's panicked look.
RAFKIN
(mouthing)
What?
The Hammer raises his weapon, about to swing down on
Rafkin. Maggie quickly points to the side away from
the Hammer.
MAGGIE
Move!
Rafkin jumps over as the Hammer swings. The Hammer
strikes the floor where Rafkin just was. Sparks fly.
Rafkin nervously looks at Maggie.
RAFKIN
(mouthing)
The spells? Where... are...
the... spells?
Maggie checks the floor. She notices the glowing spells,
but Rafkin's not standing on them. The Hammer's now
gone...
(CONTINUED)
THIRTEEN GHOSTS - Rev. 10/27/00 66A.
65 CONTINUED: (1A) 65
Maggie pushes both of her hands forward.
MAGGIE
Back!!
Rafkin hops back, like a little frog, just as the Hammer
reappears and swings, missing Rafkin and hitting an
invisible wall. More sparks fly.
Rafkin's sweating profusely now. He doesn't move. He's
standing on the spells. One wrong step and he's dead.
He glances around knowing the Hammer's presence is very
close by.
(CONTINUED)
67.
65 CONTINUED: (2) 65
The exit door is about ten feet away. He'd never be able
to make a run for it.
RAFKIN
You have to... lead me... out.
Maggie looks down at the path of spells on the floor,
and it's a jagged path to the door.
Then she sees the Hammer standing over Rafkin like an
executioner, waiting to bring down his ax. One wrong
step, and...
MAGGIE
Oh, crap.
Rafkin looks at her hopefully. Maggie nods.
MAGGIE
Okay. Right foot. Step right.
RAFKIN
Right?
Maggie nods. Rafkin raises his right foot, hovering it
over the floor, looking for Maggie to okay the step.
She nods again. Rafkin takes the step.
Rafkin squints, ready to get hit. But the Hammer's gone.
RAFKIN
Whew...
MAGGIE
Left foot.
RAFKIN
Left foot?
MAGGIE
Right.
RAFKIN
Right foot?
Maggie waves and shakes her head.
MAGGIE
Left foot. Forward.
RAFKIN
It's like playing friggin' Twister
here.
(CONTINUED)
68.
65 CONTINUED: (3) 65
Rafkin sets his left foot forward. Again he's safe.
Maggie nods, motioning him straight, onward. Another safe
step. He might just make it out of here alive after all.
And that's when Maggie sees the Suicide turn the
corridor and she's coming right at her.
Maggie, scared out of her wits, wants to run, but she
still has to deal with Rafkin.
MAGGIE
Another right.
Rafkin goes to take a step with his right foot, and walk
right off the spells. Maggie's not watching, she's more
concerned with the Suicide heading in her direction.
Maggie turns back just in time and sees the Hammer right
in front of Rafkin --
MAGGIE
Shit! Just jump!
Rafkin takes a flying leap towards the door.
He makes it out safely, and rushes over to Maggie. Gives
her a big "thank you" kiss on the lips.
RAFKIN
I owe you big time.
MAGGIE
Fine. Just get me outta here.
66 INT. MAIN FLOOR 66
Rafkin, peeking out of the basement stairwell, surveys
the main floor with the glasses.
Everything looks clear. But it's all the dark areas of
the house. Your eyes can easily play tricks on you.
Seeing movements that may or may not be there.
MAGGIE
See anything?
RAFKIN
No... that's what makes me
nervous...
Rafkin and Maggie move slowly through the room. Maggie's
clamped onto Rafkin, petrified.
CUT TO:
69.
67 INT. TRAP ROOM - WITH BOBBY AND KATHY - SAME TIME 67
Kathy comes suddenly awake, rubbing her head.
Focusing!--
KATHY
Wha-what happ -- ?
She looks around the room. Bobby's sitting beside her.
Dried tear streaks run down his face.
BOBBY
Kath...
KATHY
Bobby... oh, my God... are you
alright? We've been looking all
over for you.
BOBBY
(near tears again)
I saw you and Dad before. I
yelled but you didn't see me.
She sits up, puts her arms around him.
KATHY
It's gonna be okay.
BOBBY
Mom's here.
KATHY
(looks around)
Where are we? What part of the
house?
BOBBY
I don't know. Mom's here, Kathy.
Kathy looks at him.
KATHY
What do you mean? Here?
BOBBY
She's one of them. She's like
in the hospital, with all those
bandages on her.
Kathy doesn't know what to say.
BOBBY
Do you believe me?
(CONTINUED)
THIRTEEN GHOSTS - Rev. 10/27/00 70.
67 CONTINUED: 67
KATHY
I'm not sure what to believe...
Kathy holds her brother close while they wait.
BOBBY
Kath?
KATHY
Yeah?
BOBBY
I hate this house. I just wanna
go home.
KATHY
I know, kiddo, so do I. We're
gonna get out of here soon. I'm
sure Dad's on his way right now.
OFF her hopeful look, we...
CUT TO:
68 INT. BASEMENT - WITH ARTHUR AND KALINA 68
Arthur and Kalina are in front of the blocked-off
staircase. Kalina's flipping through her book, studying
the map of the house.
Arthur keeps lookout for anything out of the ordinary.
ARTHUR
Find anything?
KALINA
Not yet.
Arthur turns back around... and now, at the end of the
hallway is -- the Jackal.
ARTHUR
Oh, damn... it's back... hurry
up!
KALINA
I'm hurrying.
But when he looks back, it's gone...
ARTHUR
Shit... I lost it!
(CONTINUED)
THIRTEEN GHOSTS - Rev. 10/27/00 71.
68 CONTINUED: 68
Arthur panics.
ARTHUR
Do something for Christ's sake!
Kalina gets in Arthur's face --
KALINA
Show. A little. Backbone. No
matter how much I hated your
uncle, he always managed some.
The words sting Arthur, and for the first time he knows
it's always been a problem.
Kalina's still rifling through her book.
KALINA
If I can just pinpoint where
things have moved to...
Arthur peers around the corner, and the Jackal's back.
Closer.
ARTHUR
You wanna read a little faster!
Our friend's back.
Kalina drops her knapsack to the floor. Removes a flare
from her bag. Hands it to Arthur.
KALINA
Light it. It's quicksilver.
Arthur IGNITES the FLARE.
KALINA
The burning metal disrupts its
spiritual energy and buys us time.
ARTHUR
How many of these do you have left?
KALINA
Three.
ARTHUR
Three? You couldn't have brought
a few more?
(CONTINUED)
THIRTEEN GHOSTS - Rev. 10/27/00 71A.
68 CONTINUED: (1A) 68
KALINA
I didn't plan on giving a tour of
the place.
(finds what she's
looking for in
book)
Here it is...
The book is opened to one of the layouts. A red square
is indicated in one of the "blocks."
(CONTINUED)
72.
68 CONTINUED: (2) 68
KALINA
We gotta get to the library. It
has spell protection all around
it.
ARTHUR
Where is it from here?
Kalina shifts the book around to see where they are.
KALINA
Above us, to the right.
Kalina notices the glass blocks above them in the
ceiling. Arthur sees where she's going with this, and
we...
CUT TO:
69 INT. MAIN FLOOR - CORRIDOR - WITH RAFKIN AND MAGGIE 69
Rafkin and Maggie have backed themselves into a corner.
Rafkin's looking at two figures, the Fat Man and the
Little Woman, making their way down the corridors to
them.
MAGGIE
(panicked)
Just tell me when I'm supposed to
scream, because I ain't gonna die
without screaming my goddamn head
off!
Rafkin's looking at the two ghosts, the Fat Man and
Little Woman, through the glasses. They quickly slip
back into the darkness. He notices the pilgrims on
the other end of the corridor. They're being cornered.
RAFKIN
Not yet, but take a deep breath.
Suddenly, a glass block in the floor behind them pops
open, and a flare is tossed through.
It lands on the floor, illuminating the corridor.
The ghostly figures quickly disperse...
A hand appears, and Kalina is shoved through the hole.
Maggie screams. Rafkin freaks --
RAFKIN
What the hell --
73.
70 INT. BASEMENT - WITH ARTHUR 70
Kalina's legs disappear through the ceiling. Arthur,
holding out the flare, scans the basement around him.
The figures still remain at bay. That's when the flare
burns out.
Arthur shakes it once, twice, then, knowing it's out for
good, stands alone, helpless in the single patch of light
coming from the ceiling.
He looks to his left and sees the crab-like creature
scurrying down the corridor. From the other direction
comes a large silhouette (which is the Hammer).
ARTHUR
Ms. Ortezia...
71 INT. MAIN FLOOR - CORRIDOR - WITH RAFKIN, MAGGIE AND 71
KALINA
Kalina notices the two of them. Rafkin recognizes her.
She recognizes him.
RAFKIN
What are you doing here?
KALINA
I should ask you the same
question. Heretic.
RAFKIN
Hack.
They both size each other up.
ARTHUR (O.S.)
(calling up from
below)
Hey! Remember me?!
Rafkin and Maggie peer into the hole and see Arthur
below.
KALINA
Oh, shit! Pull him up! Pull him
up!!
Rafkin reaches his hand into the hole, and Arthur grabs
it. They pull him up through the hole... just as the
Hammer swings. An EXPLOSION of SPARKS ERUPTS in the
basement.
(CONTINUED)
74.
71 CONTINUED: 71
ARTHUR
Thank for taking your time.
Really.
Kalina rechecks the book --
KALINA
Alright, at the end of the hall,
make a right... then another
right... then --
RAFKIN
Where we going?
KALINA
The library. It's the safest
place in the house, the walls are
surrounded entirely with spells.
RAFKIN
(re: her book)
How the hell would you know?
Kalina holds up the book. Rafkin ain't biting.
KALINA
Trust me.
RAFKIN
Arthur?
ARTHUR
Trust her.
Arthur notices the flare going out.
ARTHUR
Now could we please just save all
our questions for the library?
KALINA
Alright, let's move.
Kalina IGNITES another FLARE, and guides them down the
corridors.
RAFKIN
Where'd your daughter go?
ARTHUR
I don't know. She disappeared.
(CONTINUED)
THIRTEEN GHOSTS - Rev. 10/27/00 75.
71 CONTINUED: (2) 71
RAFKIN
How can you lose an entire family
in a glass house?
Arthur tosses Rafkin a look just as they turn a corner,
and the Jackal leaps out of the shadows and pounces on
Arthur's back.
The Jackal's tearing into Arthur, dragging him down the
hallway.
Kalina tosses her flare down the hall at them, and the
ghost jumps off Arthur, shrieking.
Rafkin quickly grabs Arthur and pulls him into the
library.
72 INT. MAIN FLOOR - LIBRARY 72
They stumble in.
ARTHUR
So much for quicksilver...
KALINA
We should be safe in here...
Arthur lands on the couch, in pain. Maggie's by his
side.
Rafkin bangs on the glass, pissed.
RAFKIN
Shit, you'd think I'd be used to
these things by now.
KALINA
They don't seem to like you
either...
Kalina takes a seat at the desk, begins reading through
her book.
KALINA
... I wonder why.
RAFKIN
Look, you got something to say,
spit it out.
(CONTINUED)
76.
72 CONTINUED: 72
KALINA
Alright... let's start with...
this is all your fault! If you
hadn't caught them, we wouldn't be
running from them now, would we?
RAFKIN
Hey, I didn't build this house.
Blame his crazy uncle for that
one.
KALINA
But you helped him. How could you
help him without knowing what he
was up to?
RAFKIN
I had my reasons.
KALINA
You stole people's souls for
money. How depraved is that?
RAFKIN
Before that I was working for a
psychic hotline. Try that for
depraved.
(beat)
Look, Cyrus took me in when no one
else would. In case you haven't
noticed... I... am... a... FREAK.
Dead people give me migraines. I
can't touch a single person
without suddenly seeing all their
problems.
(beat)
Do you know how lonely that is?
No one accepted me except him.
KALINA
He didn't accept you. He used
you.
Rafkin looks away, ashamed.
ARTHUR
(to Kalina)
Look, cut me some slack, what
difference does it make? These
things are all killers anyway,
so what do we care?
A beat passes, Kalina turns to Rafkin --
(CONTINUED)
77.
72 CONTINUED: (2) 72
KALINA
You didn't tell him, did you?
Rafkin lowers his head.
ARTHUR
Tell me what?
KALINA
About the fourth ghost?
RAFKIN
Don't do this.
KALINA
He has a right to know.
ARTHUR
(concerned)
What about the fourth ghost?
KALINA
Let me help you out... St. Luke's
Hospital, six months ago.
The realization hits Arthur hard. He turns to Rafkin.
ARTHUR
Jean's... here...?
RAFKIN
I had no idea she was your wife,
Arthur, I swear.
Arthur clocks Rafkin with a roundhouse punch, sending him
flying over the couch.
ARTHUR
Why? She never hurt anyone...
RAFKIN
I don't know... Cyrus handpicked
every one of 'em. Your wife
included. When I realized who
you were I tried to help --
ARTHUR
Tried to help?! We're trapped, my
kids are missing, my wife, who
should be resting in peace, is
being held hostage by the house
from hell, and you call this
HELP?! She's right. This is all
your goddamn fault.
(CONTINUED)
THIRTEEN GHOSTS - Rev. 10/27/00 78.
72 CONTINUED: (3) 72
Rafkin takes the scolding. Arthur paces the room.
ARTHUR
Son of a bitch!
KALINA
There is a way to save her,
Arthur. And your kids, too.
Arthur stops pacing. Turns to her --
KALINA
This house... it isn't a house,
it's a machine. It's a complete
recreation of Basileus' design.
(reading from the
book)
According to this, there should
only be twelve earthbound spirits
trapped inside here.
Arthur walks over and she shows him the book.
KALINA
(re: book)
You see these? They're the Black
Zodiac. They represent the
different ghosts that Cyrus needed
to catch.
(reading)
The Withered Lover, the First Born
Son, the Torn Prince. And here...
the Bound Lady, the Great Child
and the Dire Mother... the Suicide,
the Torso, and the Buried Maiden...
then there's the three death signs,
the sign of Hell's Winter... the
Hammer, the Hyena, and the
Juggernaut...
As Kalina counts through the ghosts of Arthur, forever
the math teacher, instinctively counts them off on his
fingers. Kalina flips through a few more pages.
KALINA
According to Basileus, this
machine requires the energy of
these specific spirits in order
to bring it to life. Once
engaged, the spirits are freed one
by one, each adding its energy to
the machine... powering it up.
(CONTINUED)
THIRTEEN GHOSTS - Rev. 10/27/00 79.
72 CONTINUED: (4) 72
ARTHUR
Powering it up for what?
KALINA
To open the Ocularis Infernum.
RAFKIN
The Ocularis? What's that?
ARTHUR
It's Latin. It means the Eye of
Hell.
MAGGIE
The Eye of Hell?
RAFKIN
Come on, Arthur. This is
bullshit.
MAGGIE
I saw a man carrying his own head.
The Eye of Hell isn't a stretch.
ARTHUR
Go on.
KALINA
In Hell, there's an eye that sees
the whole world. Past and future,
heaven and earth, the blessed and
the damned. If knowledge is
power, then the man who controls
the Ocularis would be the most
powerful man on earth. Your
uncle was planning to become God.
A beat passes...
ARTHUR
So how many ghosts have been set
free?
Kalina checks the book.
KALINA
Eleven.
ARTHUR
And it needs twelve ghosts to
power it up?
Rafkin shakes his head.
(CONTINUED)
THIRTEEN GHOSTS - Rev. 10/27/00 80.
72 CONTINUED: (5) 72
RAFKIN
Uh-uh. Uh-uh. What about this
thirteenth ghost? Even Damon
mentioned it.
KALINA
It's a fail safe. Yes. In order
to stop the process. The house
needs a sacrifice of life, instead
of death.
(beat)
A willing... human... sacrifice.
The sacrifice of the Broken Heart.
All eyes turn on Arthur.
RAFKIN
... the thirteenth ghost...?
KALINA
Exactly. The thirteenth spirit
stands before the eye as the final
configuration culminates. As the
eye opens, the spirit uses the
power of life to, essentially,
short circuit the system.
ARTHUR
Uses the 'power of life'...?
Kalina swallows hard.
KALINA
By leaping into the eye.
ARTHUR
Thanks for painting the picture.
RAFKIN
(scoffing)
Power of life...
(re: her book)
Let me see that...
Rafkin studies the book, looking at it from different
angles. It's obvious he doesn't know what he's looking
at.
A beat passes...
MAGGIE
Isn't there any other way?
(CONTINUED)
THIRTEEN GHOSTS - Rev. 10/27/00 81.
72 CONTINUED: (6) 72
KALINA
We can try it the old-fashioned
way... but nobody's going to be
able to brag about it later.
She opens her bag. Shows Maggie and Rafkin the dynamite.
A long beat passes...
KALINA
Whatever we decide, we have to
come up with a game plan soon.
Time's running out.
Rafkin takes a seat next to Arthur on the couch.
Kalina's out of earshot, working out their plan.
Arthur thinking, while fidgeting with Rafkin's Power and
Light tool belt, left there from before.
RAFKIN
Hey, I know why you feel you have
to do this...
ARTHUR
Get away from me.
RAFKIN
Psychics call it linking... we
linked earlier. I know everything.
About Jean. About you...
ARTHUR
Shut up.
RAFKIN
Believe me. You did the right
thing.
ARTHUR
I'm not gonna listen to this from
you.
RAFKIN
But Kalina's talking suicide,
Arthur.
ARTHUR
Yeah, and if it saves my kids --
RAFKIN
But how do you know she's right?
Think about it for a second. It
just doesn't add up.
(CONTINUED)
THIRTEEN GHOSTS - Rev. 10/27/00 82.
72 CONTINUED: (7) 72
ARTHUR
And what does? Huh, Dennis? How
much of this fucking equation
makes sense!? You got a better
idea because I'm fresh out of
sanity at the moment!?
RAFKIN
Just think about it for a minute,
that's all.
ARTHUR
In case you haven't been counting
I'm out of time here. There
aren't many options to consider,
Mr. Psychic.
RAFKIN
What happend to Kathy and Bobby's
options? You gonna give up on
those, too?
Arthur grabs Rafkin by the shirt and pins him to the
wall.
ARTHUR
You can go to hell!! You hear me,
you son of a bitch!! To hell.
All I can think about are my kids.
Goddammit, I don't even know if
they're alive...
Arthur is just about to lose it when Rafkin approaches.
RAFKIN
Then let's find out, Arthur. For
them. While there's still time.
So you'll know. So we'll all know.
After listening to Rafkin, Arthur recollects himself.
One last time.
ARTHUR
(to Kalina)
No matter what happens to me, to
us all, do you think you can stop
the machine?
KALINA
I got enough dynamite here to blow
this place back to the Fifteenth
Century if that's the question?
(CONTINUED)
THIRTEEN GHOSTS - Rev. 10/27/00 83.
72 CONTINUED: (8) 72
ARTHUR
Okay. How many flares do you have
left?
KALINA
One. Why?
ARTHUR
We're going out again.
MAGGIE
Arthur! That's crazy!! Those
things out there will kill you!
ARTHUR
Not if we take that.
Arthur points at one of the doors in the library. He and
Rafkin remove the hinges off the spell-etched glass door,
using the tools from the belt. Written inside are the
spells. He hands the door to Rafkin.
RAFKIN
Alright... we got ourselves a
Captain America shield baby.
KALINA
You have about ten minutes before
the last ghost is released and the
ectoplasmic shit hits the cosmic
fan.
Arthur nods. Maggie and Arthur share a last look, then
follow Rafkin out the door of the library.
73 INT. CORRIDOR - WITH ARTHUR AND RAFKIN 73
They're both holding opposite sides of the door. The
corridor's empty. Covered with dark patches. They
carefully inch their way down the corridor, passing
dark areas.
They reach a couple of dark patches, and slowly walk
past. Prepared for anything...
When suddenly, out of the shadows, the '50s Kid swings
his bat, and smacks the door -- sparks fly.
RAFKIN
Shit -- he's swinging for the
fence.
(CONTINUED)
THIRTEEN GHOSTS - Rev. 10/27/00 84.
73 CONTINUED: 73
ARTHUR
Ram him on three...
Rafkin and Arthur brace themselves. The '50s Kid
continues to whack away at the door.
RAFKIN
(fast count)
One-two-three!
They drive the '50s Kid into the wall. Pressing the door
against him. Sparks light up the corridor. The '50s Kid
is going crazy. There's a huge burst of ecto-plasmic
sparks, then he vanishes.
ARTHUR
That's more like it.
Arthur spots an opening behind them.
ARTHUR
This way...
Arthur guides them down another corridor.
74 OMITTED 74
74A INT. HALLWAY - BASEMENT 74A
After flashing a flare before them, Kalina and Maggie
drop through the ceiling, back into the basement.
They make their way through the glass hallway, coming to
a door. As Kalina approaches it, she stumbled across
Ben's sliced corpse.
Maggie gasps at the remains.
MAGGIE
Oh... God... Looks like we found
the lawyer.
KALINA
Hold the flare still. I'm almost
there.
Kalina reaches around the doorway, clicks the door open.
75 INT. BASEMENT - CLOCKWORKS ROOM 75
The GEARS are spinning and GRINDING at the highest speed.
(CONTINUED)
THIRTEEN GHOSTS - Rev. 10/27/00 85.
75 CONTINUED: 75
Kalina quickly rushes over to the base of the machine
with the Arcanum, trying to figure out how it works.
A shadow figures moves past the door outside the
clockworks room.
MAGGIE
Hurry up!
KALINA
I'm working on it!
Kalina's following the manual. She studies the different
levers and what each does.
Maggie turns and comes face-to-face with Cyrus's ghost.
She jumps, then quickly jabs the flare at him. But to
her surprise, he doesn't react...
Instead, he takes a step towards her. She tries to ward
him off again with the flare... but he takes another
step.
MAGGIE
Damn... Kalina... you better get
over here... this shit ain't
workin' anymore!
Maggie's panicking... and then her flare starts to go
out.
MAGGIE
Hurry your ass up!
Maggie backs up... and she's hit over the head from
behind. She lands on the floor and goes out like a
light.
Cyrus's ghost approaches the body. And so does Kalina...
The faint flare illuminates both of them.
In Kalina's hand, we see the Arcanum. It's obvious she
just struck Maggie with it.
Kalina removes her glasses, and looks over at Cyrus's
ghost. He's still there, hasn't vanished.
They embrace and kiss.
And then the flare completely goes out, plunging the room
into darkness, and we...
CUT TO:
THIRTEEN GHOSTS - Rev. 10/27/00 85A.
76 INT. HALLWAY 76
Arthur and Rafkin are still walking the halls, wearing
glasses. They're on edge, nervously looking in all
directions. At any moment, something could jump out
of the shadows at them.
RAFKIN
'There's no place like home,
there's no place like home...'
ARTHUR
Knock it off.
Rafkin spots the Hammer appear behind Arthur at the end
of the hall. The Hammer makes eye contact with Rafkin,
and charges.
RAFKIN
Oh, shit.
Before Arthur even has time to turn around, Rafkin
heroically shoves Arthur into the corner, pinning him
safely behind the shield.
Rafkin turns and faces the charging Hammer. He's leaning
back on the glass, preventing Arthur from getting out.
ARTHUR
(behind the door)
What're you doing?!
RAFKIN
Don't worry about it, Arthur...
I've been looking for a reason
to like myself for a long time
now.
The Hammer approaches, but Rafkin's not running. The
Hammer stops right in front of Rafkin. Rafkin gulps.
(CONTINUED)
86.
76 CONTINUED: 76
ARTHUR
(behind glass)
Dennis, no! Don't do this!
RAFKIN
(to the Hammer)
Hey, big guy, no hard feelings,
huh?
(stops himself)
Who am I kidding... look at you...
The Hammer prepares to strike, when --
A TERRIFYING HOWL comes from the belly of the house. It
gets everyone's attention, even the ghosts...
ARTHUR
What the hell was that?
RAFKIN
(checks his watch)
Christ...
(to Arthur)
We're out of time...
Rafkin turns back to the Hammer, who grins an evil grin.
Then strikes...
77 INT. BASEMENT - CLOCKWORKS ROOM 77
Another HOWL ECHOES through the room. Cyrus and Kalina
watch as the 12TH SIGN lines up and CLICKS into place...
releasing the Breaker.
Kalina turns to him pissed.
KALINA
You know, it's one thing for me to
have spent all that time with that
idiot Damon, kill him, and then
steal his spells -- now I gotta
babysit your stupid nephew so he
doesn't get himself killed before
you need him. Enough is enough,
Cyrus.
CYRUS
But you did bring me Damon's
spells, right?
Kalina removes the book from her bag. She tears the
leather covering off the back of the book, and inside
is a thin reel of audio tape.
(CONTINUED)
THIRTEEN GHOSTS - Rev. 10/27/00 87.
77 CONTINUED: 77
KALINA
I got your spells. But a deal's a
deal, remember, we share
everything... fifty-fifty.
Cyrus snatches it from her, holds it up to the light, and
examines it. Smiles when he realizes they're authentic.
CYRUS
Don't you worry, Kalina, you'll
get everything you deserve.
Cyrus places a reel-to-reel machine on the table.
78 INT. CORRIDOR - WITH RAFKIN AND ARTHUR 78
The Hammer swings on Rafkin, who dodges the attack. The
strike WHACKS the GLASS, sparks fly, Arthur reacts.
RAFKIN
(getting cocky)
That the best you can do? My
mother hits harder than that.
The Hammer's now enraged. He swings again... and again
Rafkin dodges the strikes, bobbing and weaving, like Ali
in the ring.
RAFKIN
You ain't got no speed, old man.
What's the matter, that hammer
weighing you down?
The Hammer's swinging wildly, but Rafkin, surprisingly,
has quicker reflexes, and it's pissing the Hammer off.
Rafkin evades another attack, and out of the corner of
his eye, he spots the Breaker turning the corner...
From his massive size, he realizes who it is.
RAFKIN
Mother of Christ...
Arthur sees the Breaker approaching. He grows larger
as he gets closer...
79 INT. BASEMENT - CLOCKWORKS ROOM 79
Cyrus is setting up a reel-to-reel machine. Kalina's
beside him.
(CONTINUED)
88.
79 CONTINUED: 79
KALINA
So, what're you gonna do now?
Your nephew believes the sacrifice
is gonna stop this thing, but
you'll never get him to jump into
the eye, not until he finds his
kids.
CYRUS
Then let's give them to him...
(tosses her some
rope)
Go tie them up.
KALINA
Cyrus, I can't...
CYRUS
Why not? You know as well as I do
that human lives are the price of
human achievement. How many lives
went into the construction of the
Pyramids? Or the Great Wall of
China? Or the space program?
It's Darwinism at its finest.
(beat)
Now step aside... I need to finish
setting this up. And you need to
do your job...
Kalina walks out of the room with the rope, and Cyrus
finishes threading the reel-to-reel machine with the
audio tape. Then he flips a switch...
80 INT. CORRIDOR - WITH RAFKIN AND ARTHUR 80
Arthur watches helplessly, as Rafkin is smacked by the
Hammer, right into the Breaker's arms.
ARTHUR
No!!
Arthur pushes the glass off him to get out, but the
Breaker slams Rafkin into the glass, which again pins
Arthur behind it.
Rafkin tries to crawl away, but the Hammer smashes him
over the back with his hammer.
Rafkin is bloody and bruised, on his last legs.
(CONTINUED)
THIRTEEN GHOSTS - Rev. 10/27/00 89.
80 CONTINUED: 80
Arthur once again tries to push the glass off him to get
out, but Rafkin slaps his bloody hand on the glass.
Makes eye contact with Arthur. Shakes his head, telling
Arthur not to come out.
RAFKIN
(slurring)
Save your kids...
The Breaker picks Rafkin up and smashes him against the
glass door. His broken body leaves a bloody smear as it
slides to the floor.
ARTHUR
Dennis!!
Arthur sinks to his knees, crushed. He looks up and the
ghosts are gone. He completely falls apart...
Then suddenly, another ghost appears on the other side of
the glass. Arthur looks up and sees --
Jean, as we saw her before, standing there, staring at
him.
Arthur looks at her, dumbstruck.
ARTHUR
Jean...?
She tilts her head in response, sadness and longing in
her face. Arthur can't hold it back anymore, a wave of
emotion rushes over him and he bursts into tears.
ARTHUR
I'm so sorry... please forgive me...
(sobbing)
I should've went back in after you...
I --
Jean looks at him, shakes her head, letting him know he
did the right thing.
ARTHUR
I miss you so much...
Arthur reaches out and places his hand against the glass
to touch her on the other side, when...
81 INT. BASEMENT - CLOCKWORKS ROOM 81
Cyrus finishes setting up the REEL-TO-REEL, then he
switches ON the MACHINE.
(CONTINUED)
THIRTEEN GHOSTS - Rev. 10/27/00 90.
81 CONTINUED: 81
A CHANTING sound (the spells being read over and over),
very similar to what was used to lure the Breaker in the
opening scene, comes OVER the SPEAKERS in the house, only
these are richer in tone and texture. Stronger.
Cyrus turns to Kalina --
CYRUS
Time to finish this...
CUT TO:
82 INT. HOUSE - VARIOUS SHOTS OF GHOSTS 82
reacting with revulsion as they're engulfed by the
CHANTING. They slowly begin to vanish one by one.
83 INT. CORRIDOR - WITH ARTHUR AND JEAN 83
Arthur has his hand on the glass. Jean's about to put
her hand against his, when the CHANTING sound hits her...
and her hand slowly fades out of sight.
Arthur watches her disappear in front of him... leaving
Arthur Kriticos completely alone.
A beat passes... then Arthur looks up and sees --
Kathy and Bobby rising out of the center island of the
Ocularis in the great hall. Tied back to back they are
helpless.
OFF Arthur's reaction, we...
84 OMITTED 84
85 INT. CLOCKWORKS ROOM 85
Cyrus steps over Maggie's body, heads to the door.
CYRUS
The final configuration's
starting... gather your things,
let's go...
Kalina picks up her knapsack. Then abruptly, she hears
a HISS, turns -- Cyrus has stepped through an open
doorway on the neighboring wall, and that DOOR has
just snapped shut.
(CONTINUED)
91.
85 CONTINUED: 85
KALINA
Cyrus?
Cyrus presses a stud. There's another HISS. Kalina
turns pale.
The door separating her from the fallen Maggie has just
slid aside. She turns to Cyrus --
KALINA
Cyrus! Stop screwing around!
Let me outta here!
CYRUS
Good-bye, my dear... thanks for
all your help. Maybe we'll see
each other again on the other
side.
He smiles, hits another switch.
The walls surrounding Kalina begin closing in on her.
KALINA
Motherfu --
She kicks the glass! Tries holding it back, no use. It
keeps coming.
Panic starts to set in.
The glass moves in closer. Finally pinning her.
KALINA
Oh, God... no... please...
Her face is pressed up against the glass, her breasts
flattened. Her eyes go wide. She starts to scream and
scream...
We start to hear the SNAPPING of RIBS. Her arms narrower
than her body, claw uselessly at the glass.
KALINA
Aaahh...
Her head, now turned sideways, is being pressed flatter
and flatter... abruptly there's a ghastly dull CLUNK as
her SKULL SPLITS and blood and brains splatter out.
The walls continue to close, crushing her body,
flattening, distending it, until there is nothing
recognizable.
(CONTINUED)
THIRTEEN GHOSTS - Rev. 10/27/00 92.
85 CONTINUED: (2) 85
And still the walls keep closing, until the entire inner
surface, from wall to wall and floor to ceiling is filled
with a microscopically thin red smear that was once
Kalina.
CUT TO:
86 INT. GREAT HALL 86
The CHANTING is ECHOING through the house. The Ocularis
has begun to spin with Kathy and Bobby still seated in
the center. One of the OUTER RINGS is slowly circling
around them, when it suddenly LIFTS UP, swirling around
them like a blade.
BOBBY
Kathy!
KATHY
Don't look!
BOBBY
I don't wanna look!
Then the SECOND OUTER RING FLAPS UP next, and begins
spinning in the opposite direction.
Arthur appears in the doorway to the great hall. The
kids spot him.
BOBBY
Dad!!
Arthur sees their predicament. Raises his glasses.
Along with them are the ghosts surrounding the kids,
each standing next to their symbols along the outermost
ring.
KATHY
Daddy... get us out of here...
ARTHUR
Just don't move.
Arthur approaches the outer ring, just as a THIRD INNER
RING FLAPS UP, spinning in yet another direction,
creating the combination of a meat grinder and a mixer.
The Ocularis is working its way closer to the kids --
The kids slouch down.
BOBBY
Make it stop, Dad! Make it stop!
THIRTEEN GHOSTS - Rev. 10/27/00 93.
86A INT. MAIN FLOOR CORRIDOR - CONTINUOUS ACTION 86A
Arthur notices Cyrus's ghost standing at the end of the
corridor, a spectator to the deadly game. He's taken
aback by the old man's presence, finally recognizing him.
ARTHUR
Cyrus...?
(losing it)
Damn you for building this place!
Cyrus doesn't respond.
ARTHUR
Do something! Help me save the
kids!
The ghost raises his hand, pointing into the Ocularis,
motioning for Arthur to jump in... and that will stop
everything.
A FOURTH INNER RING FLAPS UP, working its way closer to
the center. The kids are freaking out.
Arthur looks from his kids, to the spinning rings, and
back to Cyrus again. He wrestles with what he should
do...
Then his eyes land on Jean. She looks so sad, staring at
her hysterical kids, helpless.
Arthur's choice is made. He steps up to the Ocularis,
standing in front of the spinning gears. He prepares
himself for what he's about to do.
86B INT. GREAT HALL - CONTINUOUS ACTION 86B
Arthur starts forward into the hall, ready to take his
place amongst the ghosts.
ARTHUR
(to kids)
I want you guys to know... I love
you both more than anything.
The kids realize what he's doing.
KATHY
Dad! Don't!
BOBBY
Daddy!
It kills Arthur to see them like this. He can't let them
die and make the same mistake he made before.
(CONTINUED)
THIRTEEN GHOSTS - Rev. 10/27/00 94.
86B CONTINUED: 86B
He'd never be able to live with himself. This is his
chance to redeem himself for Jean.
ARTHUR
It's the only way. I'm sorry.
Take care of each other...
Arthur takes a long look around at the macabre scene
before him. First, to the ghosts that circle the Eye,
each still trapped in his or her own hell. Then Arthur
focuses on the blades that swirl around him, threatening
to dice his family, all that he loves. Then Arthur looks
down into the fiery mechanical purgatory that is the Eye
of Hell, its gigantic GEARS GRINDING away, the steel
bathed in crimson light, driving the house/machine toward
its fantastic culmination.
Finally to the symbols on the outer ring that flash by at
Arthur's feet.
The whole effect does something to Arthur. Especially the
mesmerizing symbols flying by. We suddenly INTERCUT WITH:
FLASHBACK - PAGES OF ARCANUM
flipping by in the library in FLASHBACK, as Kalina was
explaining the ghosts.
KALINA
(in FLASHBACK)
According to this, there should
only be twelve earthbound spirits
trapped inside here.
We --
CUT BACK TO:
ARTHUR'S HAND
doing something a math teacher does naturally -- counting
off with his fingers.
The symbols float by in Arthur's gaze in SLOW MOTION.
We --
CUT BACK TO:
(CONTINUED)
THIRTEEN GHOSTS - Rev. 11/1/00 95.
86B CONTINUED: (2) 86B
KALINA
Her explanation.
KALINA
The Withered Lover, the First Born
Son, the Torn Prince. And here...
the Bound Lady, the Great Child
and the Dire Mother... the
Suicide, the Torso, and the Buried
Maiden... then there's the three
death signs, the sign of Hell's
Winter... the Hammer, the Hyena,
and the Juggernaut...
Arthur takes in each of the ghosts, confirming Kalina's
description. We --
CUT BACK TO:
ARTHUR'S OTHER HAND
He's still tallying up the number of ghosts he's counting
off in his head. 9-10-11... 12.
Twelve.
ARTHUR
Twelve.
Arthur flashes back to the library one final time. This
time it's Rafkin doing the talking.
RAFKIN
(in FLASHBACK)
It just doesn't add up.
Arthur holds his hands before his eyes. 12. There are
twelve ghosts on the ring.
ARTHUR
If I'm the thirteenth...
86C INT. MAIN FLOOR CORRIDOR - CONTINUOUS ACTION 86C
Arthur looks back into the hallway. There still stands
Cyrus's ghost. Arthur slowly takes off his glasses.
Cyrus is still standing there.
ARTHUR
You... son-of-a-bitch...
(CONTINUED)
THIRTEEN GHOSTS - Rev. 11/1/00 96.
86C CONTINUED: 86C
Cyrus realizes he's been made. Arthur runs over and
grabs his uncle, throwing him into the wall. Arthur
throws a punch, landing a hard right on Cyrus.
ARTHUR
Stop the machine!
Arthur punches Cyrus again. And again. Cyrus stumbles
backwards, regains himself, smiles, then goes after
Arthur.
CYRUS
Well, well... it's nice to see
you have some of the family blood
in you after all.
The two men go at it.
Arthur's fighting for his life. He's like a wild man,
throwing everything he's got, hitting Cyrus everywhere.
In the face, the body...
ARTHUR
You took away everything I loved,
you monster. Everything!
(with every blow)
Now. I. Want. It. Back!
But Arthur has never been a warrior. Cyrus, spotting his
opportunity, retaliates. Cyrus connects with Arthur in
the face, knocking him down. Then he kicks Arthur in the
gut a few times, making sure he stays down.
CYRUS
How dare you stand in the way of
history, Arthur! You are nothing,
you hear me. Nothing! I
dedicated my entire life to this.
Every goddamn day. When have you
ever shown that kind of dedication?
Huh? To anything?!
He kicks Arthur repeatedly, like a sick mind kicking a
dog to death.
CYRUS
You make me sick.
87 INTERCUT - CLOCKWORKS ROOM 87
Maggie slowly comes to, awakened from the irritating
noise of the CHANTING. The huge gear works before her
are spinning madly now.
(CONTINUED)
THIRTEEN GHOSTS - Rev. 11/1/00 97.
87 CONTINUED: 87
She notices Kalina's bloody, squashed remains in the
glass beyond.
MAGGIE
(reacting to Kalina)
Jesus...
(rubbing her head)
Man, what is that noise?!
Then she notices the reel-to-reel machine on the table.
Maggie reaches the machine and looks for an off switch.
Can't find one. The CHANTING sound is unbearable.
She finally shoves the MACHINE off the table, and it goes
CRASHING to the floor.
88 INT. GREAT HALL 88
Arthur regains himself... when Cyrus appears over him.
CYRUS
(out of breath)
The world hasn't time for small
people, Arthur. People like you,
or Dennis. Or Kalina. It needs
those who are willing to do
anything, without question, for
what they believe in.
ARTHUR
You sonofabitch!
Arthur rises to attack, but Cyrus stops him with a steel
sword he pulls from his cane. He points the blade
beneath Arthur's chin. Arthur's eyes dart around,
searching for a last way out. Cyrus spots Arthur
thinking...
CYRUS
I'm sorry, Arthur. Unlike Jean,
you haven't got a choice this
time. Now make the sacrifice. Or
your. Children. Will. Die.
The CHANTING sound suddenly ENDS. Silence.
Cyrus looks around in shock and confusion. As does
Arthur.
That's when he sees Bobby's scooter come rolling behind
Cyrus from the other side of the corridor.
(CONTINUED)
THIRTEEN GHOSTS - Rev. 11/1/00 98.
88 CONTINUED: 88
Arthur quickly seizes the moment and kicks Cyrus's legs,
throwing him off balance and stumbling backward, right
into the path of the scooter.
Like a banana peel, Cyrus slips on it and lands on his
ass.
Arthur scoops up the cane, as Cyrus struggles to get
back to his feet.
When Cyrus turns back around, Arthur cracks him across
the chest with the cane... sending Cyrus sailing down
the hall. He lands at the opening of the Great Hall,
stunned by what just happened.
He glances back at the scooter, then over to where it
came. Nothing. He slips on his glasses for a moment,
and there standing casually in the corridor is the ghost
of Dennis Rafkin.
RAFKIN
... never bet against human
nature, Arthur. You'll always
lose.
Arthur smiles in thanks.
CUT TO:
CYRUS
just as he comes to on the floor. He looks up and
there's nothing there. Arthur puts on his glasses and
sees 12 very deadly ghosts standing around Cyrus. The
ghosts of the house reach down and grab Cyrus --
CYRUS
Get away!! No!!!!
Arthur watches as the ghosts tear into Cyrus. It's a
feeding frenzy. The last one in to tear in is the
Breaker. Cyrus suffers a horrible ending.
CYRUS
Let me go! Noo!!!
88A INT. GREAT HALL - GHOST POV 88A
Cyrus is borne into the hall on the shoulders of the
ghosts he enslaved.
(CONTINUED)
THIRTEEN GHOSTS - Rev. 11/1/00 A98A.
88A CONTINUED: 88A
FROM CHILDREN'S POV
He's floating in, kicking and screaming all by himself.
BACK TO SCENE
The children aren't sure what to think. They only know
they too will join their uncle unless something happens.
Their father rushes to the door --
ARTHUR
(to his kids)
Don't look...
GHOSTS' POV
The ghosts lift Cyrus above their heads, all bloody and
broken bones, bleeding and mangled... and throw him into
the spinning gears of the Ocularis.
(CONTINUED)
THIRTEEN GHOSTS - Rev. 10/27/00 98A.
88A CONTINUED: 88A
Blood and Bones and flesh go flying.
This, and the damage Maggie has caused down in the
basement causes the Ocularis to go haywire.
88B INT. CLOCKWORK ROOM - CONTINUOUS ACTION 88B
Maggie stands before the mad machine as it whirls out of
control.
MAGGIE
Oh, sweet Lord. What did I do?
Maggie backs toward the door. The clockworks are
breaking apart all around her. She tries the handle.
It's locked.
MAGGIE
Mutherfucka...!
The clockworks begin flying apart. Gears and bits of
machinery start bursting through the glass walls of the
clockworks room.
88C INT. GREAT HALL - CONTINUOUS ACTION 88C
The GREAT GLASS GROANS DEEPLY as the torquing of the
clockworks causes sheets of glass to fall from their
frames.
Two more rings have FLIPPED UP, the blades getting closer
to the center of the Ocularis and the kids.
GLASS begins to BREAK UP all around Arthur. Shards of
glass rain down. He knows he hasn't much time.
Kathy holds Bobby close, protecting him.
BOBBY
Daddy!!
Arthur doesn't know what to do, but he does know that he
can't leave them there the same way he did with Jean.
ARTHUR
Just hang on! I'm coming!
Arthur backs up, and takes a running jump through the
spinning blades, just barely landing on the center island
of the Ocularis, with Kathy and Bobby.
(CONTINUED)
THIRTEEN GHOSTS - Rev. 10/27/00 98B.
88C CONTINUED: 88C
He looks for a way off but between the glass and the
blades he knows there's no way they're getting out of
there.
Arthur holds them both tight, covering their eyes.
ARTHUR
Don't move! Keep your head down!
88D INT. CLOCKWORKS ROOM - BASEMENT 88D
As Maggie's eyes go wide.
88E INT. BASEMENT GLASS CORRIDORS - VARIOUS ANGLES - SAME 88E
TIME
Huge bits of the clockworks come flying out the walls of
the clockworks room, SHATTERING all the GLASS in the
basement.
88F INT. GREAT HALL 88F
The HOUSE starts to BLOW APART. Glass rains down.
Arthur holds his kids tight.
The HOUSE is CRUMBLING all around them. The only place
that's safe is where the three of them are standing.
The FURY builds to a CRESCENDO of destruction, and then
finally COLLAPSES!
Followed by silence...
Dust and smoke everywhere, blurring our vision. As it
begins to dissipate, three figures slowly come INTO
FRAME.
Arthur, Kathy and Bobby are standing on the only
remaining section of the house left... the center island
of the Ocularis.
All around them lies what's left of the house. A
veritable skeleton of steel.
The three of them open their eyes to survey the
destruction.
ARTHUR
You guys okay?
(CONTINUED)
THIRTEEN GHOSTS - Rev. 10/27/00 98C.
88F CONTINUED: 88F
Bobby nods.
KATHY
How did you know we'd be safe
here?
ARTHUR
I didn't. I just wasn't about to
leave you guys.
Kathy pulls her father into a tight hug, she's tearyeyed.
KATHY
I love you, Dad.
ARTHUR
I love you, too.
As they look up, they notice Jean, standing on the outer
ring, circling around them. She's back to looking like
her old healthy self, and she's smiling at her family.
As she passes around them again... she's gone.
Arthur pulls his kids close, and that's when they hear --
MAGGIE (O.S.)
That's it!
They all turn to see Maggie crawling out of the basement
stairwell. She's a mess, she turns to Arthur and the
kids --
MAGGIE
I'm through with this nanny shit.
This was not in the job
description. I'm sorry, you guys,
but I quit... I quit.
This puts a smile on Arthur, Kathy and Bobby's faces, as
we...
FADE OUT.
89 OMITTED 89
THE END

`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
