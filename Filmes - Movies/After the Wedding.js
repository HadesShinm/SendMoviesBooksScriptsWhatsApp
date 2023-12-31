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

After the Wedding
Screenplay by
Bart Freundlich
Based on the film directed by Susanne Bier
Written by Anders Thomas Jensen and Suzanne Bier
1 EXT. CALCUTTA INDIA. FROM ABOVE - MORNING 1
We soar above the busy, dilapidated city, towards the
outskirts of town, where we close in on the remnants of
what looks like an ancient, abandoned temple.
2 INT./EXT. DILAPIDATED TEMPLE, OUTSKIRTS OF THE CITY 2
ISABEL (39), leads a meditation. She’s not native to this
part of the world, though her skin is deeply tanned and
her hair is streaked from the sun.
Her eyes are closed and she emits a subtle chanting
sound. Her lids flutter and her eyes open and look right
at us.
WHAT SHE SEES:
Sitting facing her, are a dozen Indian children
attempting to meditate. One lies on his back looking up
at his hands, pretending they are a bird, flying over
head. Isabel stands and walks to him.
She kneels next to him and looks at his bird-hands. After
a moment, she lies next to him. She whispers in
‘Bengali’.
ISABEL
(In Bengali)
What kind of bird is that?
The 7 year old boy, JAI, looks at her and shrugs his
shoulders. Isabel puts her hands up in the air and makes
a bird of her own. They fly together.
ISABEL (CONT’D)
(Bengali)
Why don’t you sit up and meditate with
the others and you can imagine as many
birds as you like.
JAI
(Bengali)
I don’t want to close my eyes today.
Isabel examines his precious face.
ISABEL
OK. But help me with the bell.
Jai smiles and excitedly scampers to his feet. He puts
his hands out to help Isabel up.
Jai goes to the front of the room and grabs a bell. He
looks to Isabel in anticipation, and she nods.
With all his might, he shakes the bell and a low ring
emanates, signaling the meditation is over.
The others open their eyes. Jai laughs at their surprised
expressions as they see it’s him with the bell.
3 EXT. DILAPIDATED TEMPLE - DAY 3
Like the pied piper, Isabel leads the children out of the
beautiful but broken down temple, back into the rundown
village streets.
TITLE: AFTER THE WEDDING
4 EXT. CALCUTTA STREET, IMPOVERISHED AREA - LATER THAT DAY 4
Isabel, Jai, and a few other children from the orphanage,
ride in the back of an open pick up truck down a dusty
street.
A group of hungry local children chase the truck as it
pulls up in an open square and stops.
The driver gets out and the local kids surround the
truck. Isabel and the orphans begin their routine of
serving a meal from giant pots; rice and lentils. The
hungry children wait with cups and get food ladled in.
5 INT. BACK OF TRUCK - LATE AFTERNOON 5
The exhausted group rides back toward the orphanage. The
sun has just set and the sky is a silvery blue. Jai is
glued to Isabel’s side as they all sing a song.
6 INT./ EXT. ORPHANAGE - EVENING 6
Isabel’s truck pull in.
A French aid worker, JAQUES (Late 40’s), is laying out
some supplies he has brought in a van. Isabel’s truck
pulls in and she hops out, anxiously.
ISABEL
(to Jaques)
What did you get?
She blows by him to check out the supplies.
Pink Rev. (05/28/18) BF7 2.
JAQUES
(sarcastically)
It’s nice to see you...
Isabel looks through what he’s brought. She picks up some
sheets.
ISABEL
Where are the beds? The food? And there
were supposed to be school supplies.
JAQUES
We can hang hammocks. Temporarily.
A beat as they look at each other.
JAQUES (CONT'D)
It’s all I could get. For the money.
She looks at him slightly confused, then shakes her head
and marches away.
7 INT. ORPHANAGE OFFICE - MOMENTS LATER 7
Isabel marches in.
ISABEL
Where’s the money we were promised? How
long are we supposed to wait?
The director of the orphanage, PREENA (60’s), sits at her
desk, going over some paperwork. She removes her glasses
and takes a deep breath.
PREENA
They want you to go meet with them.
ISABEL
What?
PREENA
In New York. To tell them why we are a
worthy cause.
Isabel is taken aback.
ISABEL
How many hoops are we supposed to jump
through?
Preena watches her.
Pink Rev. (05/28/18) BF7 3.
PREENA
Their money, their terms.
This infuriates Isabel.
ISABEL
Well, I’m not going to go teach
compassion when the kids need me here.
Tell them to go save the fucking whales.
Isabel heads out the door.
PREENA
They want to give us 2 million dollars.
Isabel is stopped by the number. She and Preena look at
each other.
8 EXT. COUNTRY ROAD, OYSTER BAY, LONG ISLAND - LATE 8
AFTERNOON
From above, we follow a luxury sedan as it wends it’s way
down a country road.
9 INT. THERESA’S CAR - CONTINUOUS 9
THERESA YOUNG (51), drives her car while the radio
blasts, Lady Gaga. She speeds around a turn, then down a *
narrow strip of road, bordered by a beautiful bay.
10 EXT. THERESA’S DRIVEWAY - SAME 10
A big beautiful estate, with gorgeous landscaping and a
few impressive sculptures scattered around the grounds.
Theresa’s car winds its way down the driveway.
11 INT. THERESA’S CAR - DAY 11
As the car approaches the house, Gaga is interrupted by *
the phone ringing.
The screen in the car reads: OFFICE.
Theresa picks up on speaker.
THERESA
Gwen, what is it? I’m just pulling in.
Pink Rev. (05/28/18) BF7 4.
The voice of GWEN, Theresa’s assistant comes through the
speaker.
GWEN
I have Simon and Tanya for you.
Theresa comes to a stop in front of the house.
THERESA
Ok, great. Put them on.
She turns the car off and takes the call on her phone as
she gets out.
12 EXT. THERESA’S DRIVEWAY/FRONT OF HOUSE - CONTINUOUS 12
Theresa steps out of the car and balances her bag and a
few files. We hear a voice leaking through the other end.
She stands looking out at her beautiful yard while she
listens to Tanya and Simon.
THERESA
(into the phone)
No, no, Tanya, it’s OK. You don’t need to
sell them, just guide them through it.
And give them all the information they
are asking for. What else?
Theresa opens her front door and walks inside.
13 INT. HOUSE, FOYER - CONTINUOUS 13
She walks through the beautiful entryway still on the
call.
THERESA
Hang on, we need Bill on this call.
She puts her files down and heads toward the kitchen as
she continues the call.
14 INT. LIVING ROOM - CONTINUOUS 14
Theresa walks through the gorgeous living room. Walls
lined with art. Mid-century modern furniture, a piano. A
fire is lit in the fire place.
THERESA
(phone)
Can you shoot him an email?
(MORE)
Pink Rev. (05/28/18) BF7 5.
I don’t want to go through this twice so
call me tomorrow and we can go over it
together.
15 INT. KITCHEN - CONTINUOUS 15
Theresa opens the door to the kitchen to find CIBELE,
housekeeper/baby-sitter, cleaning up dinner.
Theresa mouths “Where are the boys?”. Cibele points up
stairs.
THERESA
(phone)
Gwen can you stay on a minute?
She heads out of the kitchen.
16 INT. ESTATE HALLWAY/STAIRWAY 16
Theresa heads up the stairs.
THERESA
(phone)
Get Bill on first thing tomorrow, then
get me.
17 INT. HOUSE UPSTAIRS HALLWAY/LANDING 17
THERESA
(phone)
Is Cahill at home or in the office? Text
me his cell please. Thank you.
She hangs up. Let’s her gaze linger through a window
down onto the sprawling yard, where we see the beginnings
of a party set up. Theresa takes a breath then:
THERESA (CONT’D)
(yelling)
Chickens! I’m home!
18 INT. TWIN BOY’S ROOM - EVENING 18
Theresa walks in to find her 8 year old twin boys, OTTO
and THEO playing a video game.
THERESA
What’s going on here?
THERESA (CONT'D)
Pink Rev. (05/28/18) BF7 6.
TWINS
(distracted by the game)
Hi mom.
Theresa looks at the screen as the boys’ avatars fight
each other.
THERESA
You know I don’t like this game.
They groan a little.
TWINS
Dad said we could.
THERESA
Well, now mom’s home.
MINUTES LATER
All three sit together on the floor, the boys on either
side of Theresa as she reads them a book. “Meet my
staff”. She does all the voices. They lean on her.
19 INT. NEW YORK CITY ART GALLERY - EVENING 19
A sculpture exhibit is being installed. OSCAR CARLSON,
(early 40’s), somewhere between artist and construction
worker, meticulously measures, hoists, and tinkers with
the lighting. Some movers and gallery staff stand by to
help.
He climbs down off the ladder and approaches a tower
looking sculpture made of balanced rocks. He watches how
the lights that now slowly rotate above illuminate the
rock structure.
He takes a step back and looks. Everyone waits.
OSCAR
It’s catching at about 12 O’clock
He looks at the beams above where the lights hang.
OSCAR (CONT’D)
We may need to re-rig so the power cord
can run vertically.
The workers take a deep breath. Oscar takes a further
step back and we see now there is a translucent patterned
curtain with a hole in it through which the audience is
meant to view the sculpture through. As he looks:
Pink Rev. (05/28/18) BF7 7.
Oscar’s phone rings. “GRACIE” calling.
OSCAR (CONT’D)
(into the phone)
Hi Bunny. *
20 INT. GALLERY/ EXT. NEW YORK RESTAURANT TERRACE 20
GRACE (O.S.)
Hi daddy.
GRACE CARLSON is 21, pretty in a tender way. She’s
dressed for a night out. Oscar is happy to hear from her.
OSCAR
What’s going on?
GRACE
Nothing. Just getting married this
weekend.
OSCAR
Yeah, not that big a deal.
She hangs on the line. Looks behind her to a whole group
of friends all drinking and eating together. They are
rowdy and making a ton of noise. JONATHAN (26),
attractive in a conservative way, beckons her back over.
JONATHAN
C’mon Grace! Milly bought us a round of
shots.
OSCAR
Sounds like fun over there.
GRACE
Kind of...
She’s clearly not into it. Oscar can read her.
OSCAR
(comforting)
It’s going to be perfect. Mom has
everyone working at maximum efficiency.
He laughs and Grace smiles warmly. A quiet moment. The
group beckons Grace again.
GRACE
How’s the show looking?
Pink Rev. (05/28/18) BF7 8.
OSCAR
Work in progress. Thanks for asking.
GRACE
Thank you daddy. I just wanted to say hi.
OSCAR
I love you.
GRACE
Love you too.
She lets out a little excited-nervous sound. Oscar
laughs.
21 INT./EXT OSCAR’S TRUCK - GRAND CENTRAL PARKWAY - NIGHT 21
Oscar flies down the highway with the music blaring and
windows open. He sings.
22 EXT. CENTRE ISLAND ROAD, OYSTER BAY - HOUSE DRIVEWAY. 22
Oscar’s truck pulls in the driveway.
23 INT. THERESA/OSCAR’S BATHROOM - NIGHT 23
Theresa soaks in a bubble bath with her ipad propped up
on the side of the tub and a glass of wine in her hand.
Oscar walks in, a puzzled look on his face.
OSCAR
What’s wrong with the boys? Why are they
reading?
THERESA
(takes off her glasses)
Did you tell them they could play mortal
killing?
OSCAR
Mortal Combat. I may have.
He gives her a face. She rolls her eyes. He sits on the
edge of the tub and leans in for a kiss.
THERESA
(re: show)
So, how does it look?
Pink Rev. (05/28/18) BF7 9.
OSCAR
Never quite like I imagine.
She’s used to hearing this.
THERESA
(The work is beautiful), It’s going to be
great. Just try to relax and enjoy it.
He smiles at her and takes her foot out of the tub. He
rubs it.
OSCAR
Gracie, called. I think she wanted some
reassurance. She sounded nervous.
THERESA
I guess it runs in the family.
He smiles.
OSCAR
Are you nervous?
THERESA
Are you nervous?
OSCAR
Excuse me for a minute, I have to take
this...
He takes her foot and uses it like a telephone.
OSCAR (CONT’D)
Hello... sorry, she’s too nervous to
talk.
She laughs and tries to pull her foot away.
THERESA
That tickles... Seriously.
She starts to laugh and struggle. He holds it tighter and
bites up her leg.
She grabs his hands to stop him. He lets himself slide
into the tub, all his clothes on. She is shocked and lets
out a scream of surprise. He pulls her close and they
kiss passionately.
Pink Rev. (05/28/18) BF7 10.
24 INT. ISABEL’S BEDROOM, INDIA - MIDDLE OF THE NIGHT 24
A slight breeze blows, gently swaying her curtains.
Isabel lies in bed awake. Jaques sleeps next to her.
A SCREAM from the other room. Isabel sits bolt upright.
25 INT. BUNK ROOM, ORPHANAGE - MIDDLE OF THE NIGHT 25
About 20 beds, as well as some make shift beds on the
floor and some hammocks.
Jai is standing next to his bed crying.
Isabel rushes in, followed closely by Jaques.
Jai who looks at Isabel guiltily, then down to his
tattered shorts which are wet in the front. Some of the
other children sit up and look.
Isabel goes to him. She sees the mattress is soaked
through.
ISABEL
Jai, it’s okay...
She tries to calm him, then turns to Jaques.
ISABEL (CONT’D)
(to Jaques)
Get me some sheets, OK?
Jaques nods and exits.
ISABEL (CONT’D)
(to the others in Bengali)
Go back to sleep.
She hugs Jai.
ISABEL (CONT’D)
(comforting)
Shhh... shhh. I’m right here.
26 INT. ISABEL’S BEDROOM - 3AM 26
She sits on the edge of her bed, exhausted. Jaques lays a
hand on her back.
ISABEL
I’m not going to leave him.
Pink Rev. (05/28/18) BF7 11.
Jaques nods.
ISABEL (CONT’D)
(strongly)
Do you hear me?
JAQUES
I do...
Jaques thinks.
JAQUES (CONT’D)
Why don’t I go New York and meet with
them? You can fill me in and I’ll take
them through it.
She looks at him.
JAQUES (CONT'D)
It’s on my way to Argentina. Sort of.
27 INT. ORPHANAGE OFFICE- DAY 27
Isabel and Jaques sit opposite Preena, who is on the
phone with the money people in New York. Isabel is
anxious to hear what they will say.
PREENA
(into the phone)
Yes. I understand. Of course.
She hangs up and looks at Isabel.
PREENA (CONT’D)
It has to be you.
Isabel gets agitated.
ISABEL
Why? That’s ridiculous.
PREENA
Are we really in a position to ask why?
Isabel stands and walks out.
28 EXT. TRAIL THROUGH THE WOODS, NEAR THERESA AND OSCAR’S 28
HOUSE - MORNING
Theresa, is taking a morning walk through the woods while
she talks on her headphones.
Pink Rev. (05/28/18) BF7 12.
THERESA
(into phone)
What’s their response to the truncated
retention period?
She listens.
THERESA (CONT’D)
That’s not going to work. We can give on
the deferred compensation, but the
retention period is non-negotiable.
She listens. Wider. We see the beauty of the path.
Bill lays out the terms he’ll go back with. Theresa slows
as she sees something up ahead. A massive tree that has
fallen in last nights storm, split at the base of its
trunk.
THERESA (CONT’D)
OK, I’m on my walk. I’m going to call you
back from the car.
She hangs up and approaches the tree which blocks the
path.
AT THE TREE: Theresa is dwarfed by it. She examines it,
walking down the length until she gets to where it split.
It’s a violent but beautiful sight; Splintered wood,
roots with moss still attached pointing up to the sky,
tree sap hanging on the points of the razor sharp breaks
in the wood.
She touches it in fascination. A little sap on her
fingers. She lets them stick together.
Then, just over to the side, she spots something else. A
birds nest on the ground.
Theresa goes over to it and bends close. She clears away
some leaves to see the carefully made nest has shards of
broken blue eggs in it. She touches one gently, then
looks up in the sky.
A bird circles above.
A29 A PLANE CUTS THROUGH THE SKY A29
29 INT. AIR INDIA, FIRST CLASS - DAY 29
Isabel sits uncomfortably amongst mainly business people.
Pink Rev. (05/28/18) BF7 13.
She looks at their faces. So different from those of the
children she’s just left. She looks out the window and
flashes back to earlier in the day.
30 INT./ EXT. INDIA - EARLIER THAT DAY 30
Close on Isabel’s hand in Jai’s hand as they walk
together. We wander up to his face which looks tense and
sad.
JAI
Will you be back for my birthday?
She looks at him tenderly.
ISABEL
What did I tell you?
JAI
You don’t miss birthday’s.
She smiles.
ISABEL
That’s right.
31 INT. AIR INDIA 31
On Isabel looking out at the sky, thinking.
32 EXT. ORPHANAGE - EARLIER THAT DAY 32
The children all crowd around her as she takes her bag
and puts it in a cab.
Jaques stands on the other side of them, looking at her.
He gives her a wave. She offers a tense smile.
Isabel hugs Preena.
ISABEL
(to Preena)
Check on him. Every night.
PREENA
We were here long before God brought you
to us Isabel.
Isabel takes a deep breath.
Pink Rev. (05/28/18) BF7 14.
ISABEL
I’m coming back with a suit case full of
money.
33 INT. JFK AIRPORT, BAGGAGE CLAIM 33
Isabel exits with the throngs of people. Gets to the
other side of customs.
A chauffeur awaits, with a sign: “Isabel Andersen”. She
approaches. He takes her bag from her and leads the way.
34 EXT. ORPHANAGE - EARLIER THAT DAY 34
Isabel’s taxi pulls away. The children from the orphanage
run next to it, yelling their good-byes. She waves.
35 INT. TESLA/ EXT. NEW YORK CITY 35
Inside the car, is every conceivable New York news
publication. Isabel picks up “The New York Post”. Some
horrific political scandal on the back. She puts it down
and picks up “The Wall Street Journal: “Market Bullish
over tax plan”. Not her world. She rolls down her window.
From the “Kosciusko” Bridge. Manhattan in all it’s glory
off to the west.
36 EXT. BOWERY HOTEL - DAY 36
The car pulls up in front of this chic Bowery Hotel.
The MANAGER of the hotel waits to greet Isabel. A Bellman
at her side. As Isabel gets out, the manager approaches.
MANAGER
Miss Andersen.
The manager puts her hand out and leads her into the
hotel.
37 INT. BOWERY LOBBY - CONTINUOUS 37
They breeze through the chic lobby, not stopping at the
front desk.
Pink Rev. (05/28/18) BF7 15.
38 INT. BOWERY HOTEL, ELEVATOR 38
They ride up in the elevator.
MANAGER
Everything is prepared for your stay.
The reach “PH” and the door opens.
39 INT. BOWERY HOTEL, PENTHOUSE 39
The Manager leads Isabel inside.
MANAGER
It’s one of our penthouse suites. Living
room, bedroom, one and a half baths. Full
kitchen.
The place is stunning and fancy. The manager walks to the
fireplace.
MANAGER (CONT’D)
These are gas and operated with a switch.
She ignites one then continues the tour.
MANAGER (CONT’D)
Fully stocked refrigerator and kitchen.
She opens the doors to the fridge: it is packed.
MANAGER (CONT’D)
We couldn’t get an answer on what you
liked, so we had to do some guess work.
Anything that is missing, please let us
know.
Isabel is looking out the window at the city scape, only
hearing half of what the manager has said.
MANAGER (CONT’D)
The shades are all controlled by remote
control, from this ipad, here.
The manager hands her a cell phone.
MANAGER (CONT'D)
This is your cell phone. There is a car
at your disposal. My number and the
drivers are both programmed.
The manager smiles.
Pink Rev. (05/28/18) BF7 16.
MANAGER (CONT’D)
I’ll let you get your bearings. And,
Welcome.
The Manager heads out. Isabel is left alone.
She takes a deep breath, then walks over to the
refrigerator and opens it. There is a ridiculous amount
of food and drink. She shakes her head at the excess.
40 INT./EXT. OSCAR’S STUDIO - ON PROPERTY - DAY 40
A large shed like building with a little courtyard. We
can see the house in the background.
The courtyard and the studio are filled with sculptures
and tools. Some are large. Some made of wood, some stone.
There is also a kiln in the corner with blocks of clay
and pots in various stages of being glazed.
Oscar stains a wood piece, that stands about as tall as
him. We can’t quite see it in it’s entirety. His phone
rings: “Theresa”.
41 INT. OUTSIDE HORIZON CONFERENCE ROOM - SAME 41
Theresa has stepped out of a meeting to call Oscar.
42 INT. OSCAR’S STUDIO/ INT. OUTSIDE HORIZON CONFERENCE ROOM42
THERESA
I think I forgot to tell the caterer no
sesame or nuts.
OSCAR
I did it.
THERESA
Thank god. And I’m worried about the
lobster risotto. I think I pressured her
into it.
OSCAR
She needs to have something to resent us
about. Let it be the lobster risotto.
Oscar breathes a sigh of relief.
OSCAR (CONT’D)
Also, I got a call from the fire
Marshall.
Pink Rev. (05/28/18) BF7 17.
THERESA
Oh shit. What does he want?
OSCAR
He’s asking us to cut down the fireworks
by half.
THERESA
Oh c’mon. I’ll call him.
(Pause)
Did you get a car for your parents?
Silence.
THERESA (CONT’D)
Oscar?
OSCAR
I’m kidding, I did it.
He jots down “car for parents”.
THERESA
Ok. I gotta get back to work.
OSCAR
Wait.
THERESA
What?
OSCAR
Why is this happening?
THERESA
Cause it’s what she wants, baby.
OSCAR
Doesn’t mean it’s a good idea...
THERESA
Is this what you were thinking about when
you were up last night?
OSCAR
How do you know I was up last night?
THERESA
Well, it’s a big deal.
Pink Rev. (05/28/18) BF7 18.
43 INT. BOWERY HOTEL - DAY 43
The elevator opens and Isabel steps out. She has cleaned
up and wears a nicer outfit but still looks out of place.
She carries a folder and a DVD.
Jonathan, who we saw at the bar with Grace, approaches
Isabel.
JONATHAN
You must be Isabel.
She’s taken aback.
JONATHAN (CONT’D)
I’m Jonathan.
He extends his hand and she shakes it dubiously.
JONATHAN (CONT’D)
I’m here to take you to your meeting.
She looks at him.
ISABEL
OK.
They look at each other awkwardly for a moment. He smiles
and extends his arm as if to say, ‘after you’.
44 EXT. BOWERY HOTEL - CONTINUOUS 44
They emerge onto the busy street.
JONATHAN
How’s the hotel? Are you comfortable?
ISABEL
Yes.
He seems happy.
JONATHAN
Good. I chose it myself.
They arrive at the curb and Jonathan raises his hand,
beckoning the Tesla which waits at the corner.
Jonathan opens the door which swings upward, like a
spaceship. Isabel is startled.
Pink Rev. (05/28/18) BF7 19.
45 INT. TESLA - MINUTES LATER 45
Isabel tries to get her window down but can’t seem to
find the right button. Jonathan helps.
JONATHAN
Is it the french spelling?
She looks at him.
JONATHAN (CONT’D)
(with accent)
“Isabelle.”
ISABEL
I S A B E L.
JONATHAN
Ah, that’s not the french.
Another awkward moment. Isabel looks out at the city.
JONATHAN (CONT’D)
Have you ever met Theresa?
ISABEL
No.
JONATHAN
She’s very impressive. She built
‘Horizon’ from nothing 22 years ago, and
now it’s one of the biggest media buying
companies in the world.
ISABEL
Media buying?
JONATHAN
We connect brands to consumers and vice
versa, through an understanding of
demographics and Psycho-graphics.
Isabel looks at him blankly.
ISABEL
So, what do you sell?
JONATHAN
Whatever the client is selling.
She nods, half understanding.
Pink Rev. (05/28/18) BF7 20.
JONATHAN (CONT’D)
It’s Theresa’s brain child. Don’t be
intimidated by her. That’s a mistake.
ISABEL
Sounds like you know her well.
He smiles.
JONATHAN
I’ve worked at the company for 4 years.
(admitting)
And she’s my mother in-law... or will be
on Saturday. I’m marrying her daughter.
ISABEL
Oh. Congratulations.
JONATHAN
(happy)
Thanks.
46 INT. HORIZON WAITING AREA - DAY 46
Isabel sits, waiting. Modern and beautiful. Lots of
glass. Stunning view of the city. After a moment,
Theresa’s executive assistant, GWEN (30’s), approaches
Isabel.
GWEN
Isabel.
She stands.
GWEN (CONT’D)
Follow me.
47 INT. HORIZON OFFICE HALLS AND STAIRS - CONTINUOUS 47
Isabel follows Gwen down the labyrinth modern hallways -
up a staircase, past walls of glass and employees. And
finally:
48 INT. HALL JUST OUTSIDE THERESA’S PRIVATE CONFERENCE ROOM 48
Gwen and Isabel arrive and stop. Glass windows allow us
to see in.
Inside, Theresa is just finishing up a meeting with SIMON
(43), TANYA (55) and Bill (60), her lawyer. They have
someone on a conference call.
Pink Rev. (05/28/18) BF7 21.
GWEN
Sorry, they are almost finished. Can I
get you a water?
ISABEL
No, thank you.
A phone on Gwen’s desk rings from down the hall.
GWEN
Excuse me.
Gwen hustles to get it. Isabel waits awkwardly shifting
her gaze between the conference room and the view out the
window.
We can just hear Theresa and the others though they are
muted by the glass.
THERESA
(into the phone)
Christine...
(getting irritated)
Christine! Here is the important point.
The valuation potentially changes if this
leaks into next quarter. If getting it
done quickly means conceding a few of
these points, then do it. *
Theresa sees Isabel. *
THERESA (CONT’D)
I need to go.
SIMON *
(Into speaker phone) *
Tanya and I will call you back in a bit *
with some suggestions. *
He hangs up. Theresa looks at her team. *
THERESA
(to her team)
I’m not sure why we hired someone to
guide us through the process, who we now
need to guide through the process.
TANYA
She’s just not a great communicator. But
she’s been through this before with other
companies, which is valuable.
Theresa heads out of the conference room toward Isabel.
Pink Rev. (05/28/18) BF7 22.
THERESA
Okay. But can we think about
renegotiating her fee because we’re doing
most of the work here.
Pink Rev. (05/28/18) BF7 22A.
Tanya nods. Theresa stands and exits the conference.
49 INT. HALLWAY OUTSIDE CONFERENCE ROOM 49
Theresa approaches Isabel.
THERESA
You must be Isabel.
Isabel nods with a tense smile and Theresa extends her
hand.
THERESA (CONT’D)
Theresa.
Theresa takes her in for a moment, then looks out the
window.
THERESA (CONT’D)
On a clear day you can see New Jersey
from here. Don’t know why you’d want to.
Isabel doesn’t get it.
THERESA (CONT’D)
Let’s go to my office.
50 INT. HORIZON, THERESA’S OFFICE 50
Isabel and Theresa walk in. Beautiful furniture, a wall
of wood and a huge photograph of the ocean above her
seating area.
THERESA
You had a long trip.
Isabel nods.
THERESA (CONT’D)
Please sit.
Isabel sits.
THERESA (CONT’D)
Was it comfortable?
ISABEL
It was fine.
Theresa nods and takes a seat opposite Isabel. She gets
down to it.
Pink Rev. (05/28/18) BF7 23.
THERESA
So, I watched the video that my group
brought back from India.
ISABEL
What’s really going on there can’t be
understood though a video.
THERESA
It gives a sense.
ISABEL
There are over two hundred thousand child
prostitutes in the south alone. And five
times that amount suffer from
malnutrition. The numbers triple when you
go the bigger cities.
Isabel takes a paper out of the folder she is holding.
She hands it to Theresa. It has figures, numbers and
graphs. Theresa looks at it while Isabel continues.
ISABEL (CONT’D)
(bitter)
Hundreds of thousands die from minor
illnesses, infections. Completely
preventable, with very little money if
someone had the inclination.
Theresa studies her.
THERESA
It’s infuriating isn’t it.
Isabel taken back by the question.
THERESA (CONT’D)
Because it’s preventable.
Gwen pops in.
GWEN
Sorry to interrupt. I have the caterers
on the line. They want to know if they
can use mussels and shrimp for the
risotto. There’s a lobster shortage.
THERESA
Is there a lobster shortage, or can they
not get enough lobster?
She stands there.
Pink Rev. (05/28/18) BF7 24.
G
W
E
N
I
’
m
n
o
t
s
u
r
e
.
P
i
n
k
R
e
v
.
(
0
5
/
2
8
/
1
8
)
B
F
7
2
4
A
.
THERESA
Well, then let me know when you find out.
The assistant retreats to call the caterer.
THERESA (CONT’D)
You’ve caught me at a busy time. My
daughter is getting married this weekend.
ISABEL
Yes. I met your son-in-law.
THERESA
Jonathan.
Theresa stands and picks up a framed photo of Grace.
THERESA (CONT’D)
Grace is young. But she says she’s in *
love. I could fight her on this and tell
her she’s too young and have her hate me -
I’ve tried that. Or I could give her a
beautiful wedding.
Theresa hands Isabel the framed picture. Isabel looks
down at it. A beautiful picture of Grace stares back at
her.
THERESA (CONT’D)
Do you have kids?
Isabel shakes her head, ‘no’.
THERESA (CONT’D)
Partner? *
ISABEL
No. My work is all consuming.
THERESA
I understand. I really wanted a family.
I think a lot of women believe it’ll just
happen on its own.
Isabel isn’t sure if this is a criticism.
THERESA (CONT'D)
But personally, I think if you want it,
you have to make it happen. I have 2
little boys too. I worked hard for them. *
Theresa takes the picture back and replaces it on the
shelf.
Pink Rev. (05/28/18) BF7 25.
Isabel tries to refocus the conversation. She reaches
into her bag and pulls out another folder.
ISABEL
I have a list of priorities here.
Eventually we’d like to take in three
times the number of children.
Theresa glances at the folder then walks to her desk as
Isabel continues.
ISABEL (CONT’D)
Change our food program. Subsidize and
buy from local farmers. Vaccinate. Which
could be done for under 5 dollars per
child.
Theresa nods.
THERESA
What you’re doing is very impressive.
It’s important work.
Isabel gives a tense smile.
THERESA (CONT'D)
But there are a lot of good, deserving
organizations out there. I need some more *
time to think. *
Isabel is surprised and annoyed.
ISABEL
What? I... I was under the impression
that you had already decided to be
involved.
She grabs the graphs off of the table.
ISABEL (CONT’D)
(getting upset)
Look at the information. The need is
undeniable.
THERESA
I have a big weekend ahead of me and I
feel like I need the time. Leave the
folder. Monday we’ll have lunch and I’ll
let you know what I can do.
Isabel is fuming, but holds it in.
Pink Rev. (05/28/18) BF7 26.
THERESA (CONT’D)
In the meantime, come to the wedding. We
can get to know each other better.
ISABEL
I’m heading directly back to India.
THERESA
Staying the weekend won’t kill you. It’s
a big party. You won’t be uncomfortable,
I promise.
Isabel is stuck. The door opens and her assistant comes
in comes in.
THERESA (CONT’D)
Gwen, get Isabel an invitation to the
wedding.
GWEN
Right away. And Dr. Cahill is here for
the insurance work up.
ISABEL
I need a physical?
THERESA
Not you. Me. There are a lot of hoops to
jump through when you’re selling your
company. See you tomorrow.
Theresa smiles at her. The doctor is shown in. Isabel
walks out. We go with her.
51 INT. HORIZON, HALLWAYS 51
Isabel makes her way out. We stay close on her as she
makes her way through the maze like office toward the
front. Hard to read her.
52 INT. HORIZON, ELEVATOR BANK - CONTINUOUS 52
As Isabel approaches the elevator bank, she suddenly
bails out through the emergency exit and into the back
stair well.
53 INT. HORIZON, BACK STAIRWELL 53
Isabel takes off her shoes and begins running down.
Pink Rev. (05/28/18) BF7 27.
54 EXT. THERESA AND OSCAR’S HOUSE, DRIVEWAY AND LAWN - DAY 54
A lot of action on the lawn. Trucks in the driveway,
people setting up for the wedding.
Theresa's car wends down the long driveway toward the big
house. It stops and Theresa gets out.
She heads across the lawn toward Oscar, who is speaking
to the wedding planner, MELINDA. She looks slightly
frantic.
Before Theresa can get to them, the twins, Otto and Theo
ambush her.
Her face lights up as they run into her arms. She bends
to scoop them up and they almost all topple over.
She laughs.
THERESA
Hello my little cookies...
She covers them in kisses. They laugh and resist - and
love it.
THERESA (CONT’D)
Chocolate chip... and peanut butter...
TWINS
No! Not peanut butter!
THERESA
Oh that’s right, someone is allergic!
Sugar then...
She pretends to eat their cheeks.
They point to the sky where a a hi-tech drone with a
camera mounted soars above them.
TWINS
Mom, mom. Look. The man let us fly it. I
was making it go.
Theresa watches as the drone flies back to the young man
who is controlling it.
THERESA
Wow! Just don’t fly away.
TWINS
It’s not for people! It’s going to take
pictures of the wedding.
Pink Rev. (05/28/18) BF7 28.
Theresa looks over at Oscar who is engaged with the
wedding planner MELINDA.
THERESA
Ohhh I see. Have you seen your sister?
TWINS
She told us to stay away from her.
THERESA
Well, brides are crabby.
Theresa stands.
THERESA (CONT'D)
Go ask that man if you can fly it again.
They run off. Theresa walks to Oscar.
55 EXT. LAWN 55
Theresa walks up to Oscar. They smile at each other in
acknowledgement of how much is going on.
OSCAR
I nixed the ice sculptures. Melinda’s
having a fit.
They look over at some huge ice sculptures which are
being carried away around the side of the house.
Melinda is frantically point to the men where to put
them. Theresa and Oscar watch her.
THERESA
I guess this isn’t the time to tell her
we need one more chair.
Oscar looks at her, quizzically.
THERESA (CONT’D)
Somebody from work.
Oscar sighs.
OSCAR
I think I just won’t tell her and add it
when she’s not looking.
Another scream. The boys are buzzing Melinda with the
drone. She is ducking.
Pink Rev. (05/28/18) BF7 29.
THERESA
Where’s Gracie?
Oscar looks toward the epic tent. Another kiss.
56 EXT. WEDDING AREA, BACK OF HOUSE - MINUTES LATER 56
Lush and beautiful. Tables are being set, flowers placed.
Theresa sees Grace counting chairs, excitedly and
anxiously.
Theresa takes Grace in for a moment then approaches her.
Grace turns and sees Theresa and gives her a wide,
nervous smile.
Theresa smiles back. They go to each other and hug.
GRACE
Can you believe this is happening?
THERESA
No, I can’t. Are you okay? Any doubts?
GRACE
You wish.
Theresa holds her face and looks right at her.
THERESA
No. I wish what you wish.
Grace smiles and hugs her mom again.
GRACE
Thank you.
THERESA
I don’t see what would be so wrong with
just living together for a year...
Grace has heard this before.
GRACE
Really?
THERESA
And, he’s not as good looking as you.
She’s clearly used to this.
GRACE
Anything else?
Pink Rev. (05/28/18) BF7 30.
The look at each other deeply again.
THERESA
Yes. You’ll always be mine. Remember
that.
This clearly touches Grace, but she tries to slough it
off, but it makes her emotional.
GRACE
You are honestly the worst. And try, if
you can to get all of your crying done
before the wedding, because it sets me
off.
Theresa puts her hand up like she is taking an oath.
57 INT. HOUSE, STAIRWAY 57
Theresa walks up the stairs.
58 INT. THERESA AND OSCAR’S BEDROOM 58
Theresa enters the bedroom. She walks through the room
into her dressing room/closet.
59 INT. THERESA’ DRESSING ROOM/CLOSET 59
It’s big enough to be another bedroom. Meticulously
organized. Her dress for the wedding hangs on the far
side of the closet, ready for tomorrow.
She takes off her shoes.
AT HER BUREAU, she removes her earrings and other
jewelry. Places it on a tray.
Next to the tray we see the bird nest with the three
little cracked eggs in it, that she brought back from her
walk.
Theresa opens a drawer where she keeps a pill box with
pills/vitamins divided into daily doses. She grabs
“Friday”, puts the pills in her mouth, and swallows them
without water.
ON THE CLOSET WINDOW, we hang on an empty frame.
Theresa walks up to the window. Expression unreadable.
THERESA’S VIEW OUTSIDE
Pink Rev. (05/28/18) BF7 31.
She looks out at the big oak tree. Branches outstretched
like arms. She breathes in. Breathes out. Breathes in.
Breathes out.
Then out the window, what looks like a bird, flies over
the tree. She leans closer to discover it’s the drone. It
flies high above the tree, swooping this way and that. We
hear the children’s giggles from below.
Theresa closes her eyes and we see:
THE DRONE POV
Swooping, beautiful aerials of the tree, the house, the
people below. And it climbs, up, and up, and up.
BACK ON THERESA
She opens her eyes and her face breaks into a cry. She
covers her mouth to muffle it.
60 INT. AERIAL SHOT OF LOWER MANHATTAN 60
We close in on the Bowery Hotel penthouse.
61 EXT. BOWERY HOTEL - EVENING/ EXT. INDIA ORPHANAGE 61
Isabel is out on the balcony looking over the city, on
the phone with Jai.
ISABEL
Yes, it’s big. But also small. All the
buildings are squeezed together into a
small, small space.
JAI
Would I like it?
She seems to actually reflect on the question. Looks out.
ISABEL
One day maybe you will see it for
yourself.
JAI
Are there birds?
Isabel looks out at the pigeons.
ISABEL
Kind of. But not like we are used to.
Pink Rev. (05/28/18) BF7 32.
She stands and looks through the glass into the room
where two Housekeepers have let themselves in.
VIEW INSIDE THE ROOM
Housekeepers are followed by the Hotel Manager. They
carry 2 different dresses on hangers.
Isabel looks puzzled. The Manager waves and directs
Housekeeping to hang the dresses so they are on display.
JAI
When will you be back?
Isabel looks through the window at the dresses.
ISABEL
As soon as I can. But you need to set an
example for the others while I’m gone.
He nods, though of course she can’t see it.
ISABEL (CONT'D)
Can you hand the phone to Preena?
JAI
Okay, goodbye Ms. Isabel.
Jai hands the phone off.
PREENA
So, what do you think?
ISABEL
I think we could get 100 new beds for
what they are paying for this hotel
suite.
PREENA
I hope this wasn’t too good to be true.
ISABEL
I’m not coming back without...
PREENA
... A suitcase of money. I know.
ISABEL
Yes, I’ll call you soon.
Pink Rev. (05/28/18) BF7 33.
62 INT. BOWERY HOTEL PENTHOUSE - CONTINUOUS 62
Isabel enters.
ISABEL
What’s this?
The Manager stands in presentation.
MANAGER
Ms. Young thought you might need a dress
for the wedding.
Isabel takes them in.
63 EXT. THERESA AND OSCAR’S HOUSE - WEDDING DAY - AFTERNOON 63
The grounds look beautiful. Lanterns line the driveway.
Around back, the ceremony is about to start.
64 EXT. THERESA AND OSCAR’S BACK YARD - SAME 64
Theresa, Oscar, and Grace, all dressed in their wedding
attire. They stand on a little brick patio in front of a
small greenhouse; waiting. About 50 feet away, the guests
are seated, waiting.
Oscar and Theresa stand on either side of Grace. They
look across at her, and then anxiously to each other.
Grace looks straight ahead, avoiding their gaze. Theresa
reaches up to Grace to fix a stray hair. Grace pulls away
annoyed.
GRACE
Please...
Theresa nods. They settle back into waiting. After a
moment:
OSCAR
You look beautiful, sweetheart.
GRACE
You’ve told me that... A lot.
(Thank you)
THERESA
Well, it’s true.
Grace takes a deep breath.
Pink Rev. (05/28/18) BF7 34.
GRACE
(tense)
Thank you... Again.
Waiting. Then music begins. They jump, startled. Then
gather themselves, and begin walking.
65 EXT. HOUSE, BACK LAWN - CONTINUOUS 65
About 75 people. Everyone turns to see the bride and her
parents as they walk up the isle.
Jonathan smiles as he waits at the front, next to the
Buddhist monk who will be preforming the ceremony.
People take out their phones to take some pictures and
videos.
ON Grace, all smiles as she arrives next to Jonathan. Her
parents kiss her, then take their seats.
Looking between the Bride and Groom, we see the beautiful
stone sculpture Oscar was finishing earlier. It’s an
abstract depiction of 2 entwined bodies. Somewhere
between Picasso and Giacometti.
66 EXT. PARKWAY - SAME 66
The tesla sits on the Grand Central parkway in terrible
traffic.
67 INT. TESLA - CONTINUOUS 67
Isabel is dressed nicely but still in her own Indian
flavored outfit, having opted not to wear Theresa’s
dresses. She anxiously tries to look past the traffic.
DRIVER
We might be a little late, but I won’t
let you miss it.
Up ahead we see a State Patroller dealing with a stopped
vehicle.
68 EXT. PARKWAY 68
The Tesla drives up on the shoulder and scoots around the
mess, then takes off down the freeway.
Pink Rev. (05/28/18) BF7 35.
69 EXT. HOUSE DRIVEWAY - AFTERNOON 69
The Tesla pulls in. The door flips open and Isabel rushes
out. One of the wedding staff points her toward the
house.
She kicks off her shoes and runs up toward the wedding.
70 EXT. HOUSE, BACK YARD, WEDDING AREA 70
The monk delivers the vows.
MONK
Remember to be patient with yourselves
and others, knowing that change comes
slowly and gradually. Seek inspiration
from your family and friends.
Theresa and Oscar sit in the front, a mixture of nerves
and excitement.
An usher quietly shows Isabel to a seat in the back.
A few people turn to look at her. She smiles
uncomfortably and tries to focus on the ceremony.
MONK (CONT’D)
To make your relationship work will take
love. This is the core of your marriage
and why you are here, today.
IN FRONT: Theresa puts her hand on Oscar’s leg. Oscar
looks at Theresa and smiles.
IN BACK: Isabel takes it all in. Gradually, her eyes fall
on Oscar’s profile. She freezes.
MONK (CONT’D)
It will take trust, to know, that in your
hearts, you truly want what is best for
each other. It will take dedication, to
stay open to one another - and to learn
and grow together.
Heart beating out of her chest, Isabel leans in subtly
trying to see Oscar more clearly.
MONK (CONT’D)
It will take faith, to go forward
together, without knowing exactly what
the future brings. And it will take
commitment, to hold true to the journey
you both have pledged to today.
Pink Rev. (05/28/18) BF7 36.
Again on Oscar’s profile from Isabel’s perspective.
Quick cut.
FEET RUNNING ON THE BEACH
SWIMMING IN THE DARK OCEAN
TWO BODIES INTERTWINED ON A BEACH.
BACK TO PRESENT
Isabel quickly stands and heads in the back door of the
house.
71 INT. THERESA AND OSCAR’S HOUSE, FOYER/LIVING ROOM 71
Isabel paces nervously in the front foyer.
She catches herself in the reflection of the glass and
tries to gather herself. She looks back outside through
window where the bride is just kissing the groom. Guests
stand and cheer. She sees Oscar as he cranes his head to
look to where Isabel was sitting.
A72 INT. LIVING ROOM - CONTINUOUS A72
Isabel walks in and takes in her surroundings. Beautiful,
expensive art on the wall by the fireplace.
A grand piano. A small metal sculpture by the window that
looks like a man, looking out.
Art books are laid out on the table. She goes over to
one. It’s a catalogue from a show. She looks down at the
cover.
“Oscar Carlson, Sculpture 2003-2010”
She leafs through a couple pages. Arrives at his picture
in the front. He looks younger. She lingers on it for a
moment. A staff member startles her.
STAFF
Miss? Drinks are being served on the side
porch.
Pink Rev. (05/28/18) BF7 37.
72 EXT. SIDE PORCH AREA - MINUTES LATER 72
The guests mill about, celebrating. The twins chase each
other around through the chairs and guests. On the bar
are listed the specialty drinks “The Grace” and “The
Jonathan”
People congratulate the happy couple.
Isabel steps out onto the back porch, but keeps her
distance from the party. Everyone is in celebration mode.
The photographer gathers the bride and the groom’s
families together for a group shot.
Isabel continues to watch from a distance. As the picture
is being taken, Oscar’s gaze falls on Isabel standing in
the background. Time seems to stop as they look at each
other.
Close on each of them staring across a sea of people.
They seem to be the only two people there.
Oscar excuses himself from the group and approaches
Isabel.
As he steps in near her, the electricity is palpable. He
looks confused and isn’t sure what to say.
Pink Rev. (05/28/18) BF7 37A.
OSCAR
What are you doing here?
Isabel takes a deep breath.
ON THERESA, as she spots Isabel talking to Oscar. Theresa
excuses herself and heads over.
THERESA
Isabel, I’m so glad you could make it.
Isabel tries to mask her discomfort.
ISABEL
Congratulations. It was a beautiful
ceremony. What I saw, at least. There was
an accident. And I was stuck in traffic.
THERESA
Oh no. Well, you made it for the party.
She studies Isabel for a moment.
THERESA (CONT’D)
Did you meet my husband?
Isabel nods, awkwardly.
THERESA (CONT'D)
(to Oscar)
Isabel runs an orphanage in India I may
be funding.
Oscar is reeling. He nods. *
Grace appears, glowing with nervous energy.
GRACE
Mom, do you think I should change my
dress before dinner?
THERESA
Keep it on sweetheart. People love to see
the bride in her dress.
Grace is beaming. Her eyes fall on Isabel.
ISABEL
Congratulations.
Pink Rev. (05/28/18) BF7 38.
G
RA
C
E
T
h
a
n
k
y
o
u
.
P
i
n
k
R
e
v
.
(
0
5
/
2
8
/
1
8
)
B
F
7
3
8
A
.
THERESA
Gracie, this is Isabel.
The smile at each other
ISABEL
It’s a beautiful dress.
GRACE
Isn’t it? It’s my moms.
THERESA
Yours now.
Grace smiles. Oscar stands by in a stunned silence.
Isabel gives a tense smile. Jonathan appears.
JONATHAN
Baby, People are staring to sit down
already, let’s head over.
He sees Isabel.
JONATHAN (CONT’D)
Oh hi. Glad you could make it.
GRACE
You know each other?
JONATHAN
I drove her to the office the other day
to meet your mom.
Some awkward smiles. The photographer comes over and
pushes them all together.
PHOTOGRAPHER
Let’s get a picture.
Nothing to do but pose. Couldn’t be more awkward. The
camera snaps.
GRACE
Dad, come on.
OSCAR
Okay, sweetheart.
GRACE
(to Isabel)
You too?
Isabel nods uncomfortably.
Pink Rev. (05/28/18) BF7 39.
JONATHAN
We’re going to party like it’s 2019.
Pink Rev. (05/28/18) BF7 39A.
Some minor laughter. Grace pushed him playfully.
73 OMITTED 73
74 INT. TENT - LATE, LATE - AFTERNOON 74
Beautifully decorated with flowers. Filled with guests
and waiters buzzing about.
Everyone enjoys themselves. Young and old.
Close on the menu in the middle of a table: “Lobster
Risotto”.
Two long tables holding 40 each. Isabel is down in
Siberia with a few of the more peripheral guests. Mostly
older, except for one conservatively handsome man, FRANK
(late 40’s) who sits next to her. She glances at him.
Only a lone piece of meat sitting on his plate. At the
front, Jonathan calls everyone to attention.
Pink Rev. (05/28/18) BF7 40.
FRANK
I’m on this paleo thing. Training for a
Tri. In Hawaii, on the big island.
Isabel looks at him then back to the front where Jonathan
calls everyone to attention.
JONATHAN
Hi everyone. I want to welcome all of
you.
He takes a deep breath and looks at the big crowd.
JONATHAN (CONT’D)
Wow. I thought the saying ‘I do’ part
would be the hardest.
People laugh. Grace rolls her eyes. Jonathan rubs her
back. Theresa and Oscar smile at each other.
JONATHAN (CONT’D)
Thank you for coming to celebrate with
us.
He takes a speech out of his pocket.
JONATHAN (CONT'D)
When I started working for Theresa at
‘Horizon’, right out of school...
FRIEND
You can say Harvard!
They laugh. Grace shakes her head. Jonathan smiles and
continues.
JONATHAN
I thought I was just getting a great job
for one of the most forward-thinking,
entrepreneurs I had ever read about.
Theresa smiles, a little uncomfortable.
JONATHAN (CONT'D)
But very quickly I came to dread coming
into work. It wasn’t my boss’ fault.
Well, sort of it was. You see two years
ago, Grace started coming in with
Theresa. She was working in the design
department for the summer.
Grace shakes her head, embarrassed.
Pink Rev. (05/28/18) BF7 41.
JONATHAN (CONT’D)
She’s an amazing artist, for any of you
who don’t know. Anyway, I saw them
coming through the lobby; these two
beautiful, powerful women. And I froze.
(to Grace and Theresa)
In fact, there was room in your elevator,
but I couldn’t bring myself to get in.
People think it’s cute. An older women at Isabel’s table
makes an aside to her friend.
OLDER WOMAN
(to her friend)
Which one is he in love with?
JONATHAN
Well, I spent the next month trying to
find a way to be in the same place at the
same time with Grace. And finally, I
braved an elevator ride with her.
Grace blushes.
JONATHAN (CONT’D)
Do you remember my genius banter?
She nods.
GRACE
“What floor?”
Everyone laughs.
JONATHAN
I would plan things to say when I saw
her, but they never came out. Until one
day, I got lucky.
People hoot.
JONATHAN (CONT’D)
Not like that you perverts!
Roaring.
JONATHAN (CONT’D)
We were in the company pub, and she was
on line right in front of me. And she had
forgotten her wallet. So I paid. Best $14
I ever spent.
Some applause.
Pink Rev. (05/28/18) BF7 42.
JONATHAN (CONT’D)
Grace, I love you more than anything. And
I couldn’t be happier that you agreed to
marry me. Even if it was out of guilt
about owing me money.
Grace stands and they kiss. Everyone claps. It goes on
for a while and the crowd loves it.
Theresa smiles at them and Oscar tries to, but it’s going
on a while.
At Isabel’s table, Frank leans in.
FRANK
That’s going to be a fun honeymoon.
The bride and groom pull apart. Grace remains standing
and clinks her glass.
GRACE
Hi, Hi. You’re not quite free yet!
Grace’s hand shakes as she speaks. Oscar takes it.
GRACE (CONT’D)
Sorry. Those of you who know me, know how
much I love to speak in public.
Some laughter. Isabel watches her. Grace gathers herself,
fighting through her shyness.
GRACE (CONT’D)
Jonathan, I love you. And I am so happy
to be your wife.
(blushing)
I can’t believe I can say that!
(deep breath)
But this speech isn’t for you, it’s for
Mom and Dad.
She turns to her dad, whose hand she is still holding.
GRACE (CONT’D)
Dad, I don’t know a girl who is closer
with her father than I am with you. And I
am so grateful for that.
(pause)
Most of the time.
Oscar beams at her.
Pink Rev. (05/28/18) BF7 43.
GRACE (CONT’D)
I’ve gotten so much from you. My sulking,
my sense of humor... Unfortunately my
nose... And my love for art; my drawing.
We see the audience in rapt attention.
GRACE (CONT’D)
Not many fathers would have done what you
did at such a young age.
They clearly have a special connection. Isabel is
fascinated.
GRACE (CONT’D)
(to Oscar)
And thank you for your beautiful gift.
She motions to the carved statue which has now been moved
behind them in the tent. People oooh and ahh and clap.
Oscar smiles and kisses her hand. He beams.
JONATHAN
(joke to the room, re:
sculpture)
I’m not sure if it’s me and Grace, or
Grace and her dad!
Some laugh awkwardly, but the joke doesn’t go over well
with Oscar. Theresa makes eye contact with Oscar.
JONATHAN (CONT’D)
I’m kidding, of course. We absolutely
love it.
Grace turns her attention to Theresa.
GRACE
And mom.
Theresa looks at her wide-eyed, with tears brewing. Grace
looks like she might go over the edge as well.
GRACE (CONT’D)
I told you to get your crying out
yesterday!
Theresa laughs and pushes away a tear.
THERESA
I tried.
The room laughs. Grace composes herself and continues.
Pink Rev. (05/28/18) BF7 44.
GRACE
You have made this day so special. Thank
you for putting up with my pre-wedding
craziness.
Grace gathers.
GRACE (CONT’D)
You are the most caring, loving, strong,
best example of a woman I could have ever
had for a mother.
She looks down for a moment.
GRACE (CONT’D)
And for those of you who don’t know, I
had the rare experience of getting to
choose my own mother.
Isabel sits up. Tension building in her.
GRACE (CONT’D)
It was just me and dad for the first year
of my life.
Grace takes a moment.
GRACE (CONT'D)
... After my birth mother wasn’t well
enough to care for me.
On Isabel, frozen.
GRACE (CONT’D)
And dad and I went everywhere together;
me strapped to his chest.
On the crowd in rapt attention.
GRACE (CONT’D)
One day, we were walking down the street
in Soho. And this beautiful woman, with
shockingly red hair, had just moved to
the neighborhood and was looking for a
good place to have a coffee. I guess my
dad and I looked like locals, so she came
up, and asked if we knew of a place.
She turns to her dad.
GRACE (CONT’D)
And what did you say?
He smiles.
Pink Rev. (05/28/18) BF7 45.
OSCAR
I said; “I don’t drink coffee, so I
wouldn’t know”.
Some laughter. Theresa remembers. Isabel is spinning.
GRACE
And that would have been that, except, I
had grabbed hold of her hair, and I
wouldn’t let her go.
Tears roll. Theresa and Grace hold hands.
GRACE (CONT’D)
So my dad really had no choice but to
start drinking coffee.
People clap.
GRACE (CONT’D)
(a long beat)
I’m so happy I chose you.
Everyone is near tears. Grace takes a deep breath.
GRACE (CONT’D)
To my parents for giving me this
wonderful life, and this beautiful night.
And, oh yeah... to angelic brothers...
The boys smile and play and pretend to fart in her
direction.
GRACE (CONT’D)
I love you.
She raises a glass. The guests stand, clap, cheer. A
guest yells out.
GUEST
(Toasting)
To Grace and Jonathan!
We are with Isabel who is frozen in her seat. She stares
off into the middle distance for a few moments.
FRANK
(encouraging her to get up)
Hey, we’re toasting.
She stands and heads out of the tent. Most of the guests
are caught up in the toast and don’t notice, but Oscar
does.
Pink Rev. (05/28/18) BF7 46.
On Isabel as she walks out of the tent.
75 EXT. BOAT DOCK - DUSK 75
Isabel sits by herself on a bench on a dock jutting out
into the water, out of sight of the festivities.
She tries to gather herself and put all this together.
Suddenly up the dock walks Frank with two glasses and a
bottle of champagne. She sees him and shakes her head to
herself. He approaches.
FRANK
I couldn’t agree more. I’m not into
weddings.
He sits next to her with the glasses and the bottle.
ISABEL
I’d like to be alone.
FRANK
Tell me about it. Crowds are awful.
He pours her glass. She pushes it away. When he tries to
hand it to her.
FRANK (CONT’D)
I can take one for the team and drink
them both.
She can’t believe any of this is happening.
FRANK (CONT’D)
You know how at every wedding there are
always a few single people pretending not
to care that they’re single? Well, we’re
those people. Weird, huh? I’m divorced.
What’s your story?
ISABEL
My story is; I’d like to be alone.
FRANK
(trying to be charming)
You think you want to be alone...
ISABEL
Get the fuck away from me.
Pink Rev. (05/28/18) BF7 47.
She gets up and walks away.
FRANK
Okay...
76 EXT. TENT AREA - NIGHT 76
Isabel approaches the tent purposefully.
Inside, all the guests mill about, some dancing. Jonathan
spins Grace.
Theresa and Oscar watch happily.
Outside, Isabel hangs in the shadows, watching.
CLOSE ON GRACE as ISABEL WATCHES HER, STUDYING HER FACE.
Oscar’s vision is drawn to Isabel. She looks back at him.
Between the two of them, Grace and Jonathan dance.
Isabel steps closer, staring intently at Oscar.
After another moment, Oscar breaks away from the crowd
and heads toward Isabel.
77 EXT. BACK YARD - CONTINUOUS 77
Oscar walks by Isabel, who follows him away from the
entrance and the party guests inside.
They stand and face each other.
ISABEL
What did you do?
Oscar looks at her.
OSCAR
What are you talking about?
ISABEL
Don’t. Too much adds up.
Oscar looks behind him at the tent then back to Isabel.
ISABEL (CONT’D)
But then I think, you wouldn’t have done
that.
Pink Rev. (05/28/18) BF7 48.
He looks nervously behind him at the tent where people
are starting to head out onto the lawn. Oscar doesn’t
know what to say.
ISABEL (CONT’D)
I can see it.
All Oscar can do is look away and shake his head. We
don’t know if it means ‘no’, or ‘I can’t believe this’.
He looks right up at her.
OSCAR
Isabel. We can’t talk about this now.
A party worker opens the tent and makes an announcement.
PARTY WORKER
Fireworks are starting! Follow the
lanterns...
Party workers stand outside in a line ready to hand out
sparklers and drinks to people as they exit the tent. The
guests whoop it up on the way out of the tent to the
beach for the fireworks.
Oscar looks from them to Isabel.
OSCAR
I have to go. I’ll call you tomorrow.
Oscar backs away, then moves to join Theresa, Grace, and
the others who pour out of the tent.
Isabel watches, in shock.
78 EXT. DRIVEWAY OF HOUSE - MINUTES LATER 78
Isabel walks away from the party down the big lawn,
toward the driveway where the cars are lined.
Behind her, a huge bang, and the sky is lit up by the
first of the fireworks.
79 EXT. BACK LAWN, OVER LOOKING WATER - NIGHT 79
The crowd ooh’s and ahh’s at the fireworks display.
Pink Rev. (05/28/18) BF7 49.
We find Grace and Jonathan standing next to Theresa and
Oscar, their faces illuminated by the different color
fireworks.
80 EXT. GRAND CENTRAL PARKWAY - NIGHT 80
Isabel rides in the back, alternating between
illumination and darkness as the car passes through the
parkway lights.
81 EXT. WEDDING AREA, LATE NIGHT 81
Everyone is pretty loose. Theresa dances with Oscar.
Drunk and happy.
82 INT. THERESA AND OSCAR’S BATHROOM - 3AM 82
Theresa finishes washing her face, then takes a pill.
83 INT. THERESA’S AND OSCAR’S BEDROOM - CONTINUOUS 83
Theresa walks into the dark bedroom turning the light off
behind her. Oscar is in bed. She climbs in next to him.
THERESA
I think people seemed to have a good
time, don’t you think?
Oscar looks at her through the darkness. A long moment.
OSCAR
Why’d you do it?
Theresa gets close and lays on his chest.
THERESA
(quietly)
God, I didn’t know. I didn’t know it was
her.
Oscar looks back at her, dubiously.
84 INT./EXT. BOWERY HOTEL PENTHOUSE - MORNING 84
Isabel sits out on the balcony wrapped in a blanket,
phone in her lap. She hasn’t slept.
The phone rings and she runs in to pick it up.
Pink Rev. (05/28/18) BF7 50.
ISABEL
Hello...
Her face falls with disappointment. We can just hear the
voice leaking through the phone.
HOUSEKEEPING (O.C.)
Hi Ms. Andersen. We are calling to check
to see if you need more towels, or new
linens?
ISABEL
No.
She hangs up. Waits a moment thinking, then stands.
85 EXT. BOWERY HOTEL - DAY 85
Isabel waits while a bellman hails a taxi.
86 INT. TAXI, GRAND CENTRAL PARKWAY - DAY 86
Isabel sits in the back staring out the window.
Her Indian driver is on the phone with a headset in. He
speaks to the person on the line in Bengali.
DRIVER
(Sub-titled)
White girl. Very tan. Hot. Probably likes
to have sex all night. Late 30’s? Who
knows? I can’t tell the difference with
white girls.
On Isabel. He looks in the mirror.
DRIVER (CONT’D)
(In English)
You want to hear some music?
ISABEL
(in Bengali)
No, I prefer it quiet.
The driver’s eyes widen as he realizes she can speak his
language.
87 INT. THERESA AND OSCAR’S HOUSE, LIVING ROOM - DAY 87
Grace and Jonathan sift through a mountain of gifts with
Theresa and Oscar, while the twins play.
Pink Rev. (05/28/18) BF7 51.
Jonathan unwraps a present. It’s a table cloth. Has a
pattern.
He and Grace unfurl it.
JONATHAN
It’s a blanket...?
GRACE
No, I think it’s a table cloth.
JONATHAN
Maybe it’s a cape.
Oscar looks closely.
OSCAR
I think it might be the confederate flag.
They laugh. Theresa looks at the card.
THERESA
I think it’s one of our lawyers...
OSCAR
Who you should order a background check
on.
Theresa laughs. The doorbell rings.
88 INT. FRONT HALL 88
Theresa opens the door. It’s Isabel.
They look at each other for a long moment.
THERESA
Come in.
Isabel enters.
THERESA (CONT’D)
Wait here.
Theresa heads back into the living room where they are
opening another gift. She walks over to Oscar.
89 INT. LIVING ROOM 89
THERESA
(quietly)
We have a visitor.
Pink Rev. (05/28/18) BF7 52.
GRACE (O.S.)
Oh hi.
Isabel has stepped into the doorway of the living room.
Theresa and Oscar don’t quite know what to do.
GRACE (CONT'D)
Isabel, right?
Isabel uncomfortably nods.
GRACE (CONT’D)
Thanks for coming yesterday.
Isabel is taken with her.
ISABEL
(awkwardly)
Of course. Thank you for having me.
Oscar stands.
OSCAR
I was going to call you.
ISABEL
But you didn’t.
There’s obvious tension. Grace and Jonathan sense it.
THERESA
Would you like something to drink?
ISABEL
No.
Theresa and Oscar look at each other.
THERESA
Why don’t we show you around?
She nods and they begin to head out of the room. The air
is heavy.
JONATHAN
Is everything okay?
THERESA
It’s fine. But, keep opening. Otherwise
we will be here till next week.
She smiles at Grace to try and alleviate any tension.
Pink Rev. (05/28/18) BF7 53.
THERESA (CONT’D)
Boys, stay with your sister.
90 INT. KITCHEN 90
Oscar walks in followed by Isabel, then Theresa. Theresa
closes the door and makes sure it’s shut.
Isabel and Oscar look at each other. So much weight
between them.
OSCAR
What do you want?
She lets out a shocked laugh.
ISABEL
(choking up)
I want to know why my daughter is in the
other room.
He looks at her with a mixture of fear and contempt, then
turns away.
ISABEL (CONT’D)
How do you live with yourself?
He’s stunned into silence, then regains his footing.
OSCAR
A lot more easily than if I had left her
for someone else to raise!
ISABEL
How did it even happen? We decided we
couldn’t keep a baby.
OSCAR
No, you decided.
Theresa watches.
ISABEL
You agreed!
OSCAR
I was... a kid!
ISABEL
Exactly! We... WE gave her up for
adoption. Because we decided that was
best for her.
Pink Rev. (05/28/18) BF7 54.
A long moment where no one knows what to say. Theresa
tries to calm things.
THERESA
Isabel, we tried to find you.
ISABEL
You have all the money in the world, you
could have sent an army looking for me.
You didn’t want to find me. You liked
being the hero.
OCSAR
Don’t you talk to her like that! You
didn’t want to be found. You ran the
second they let you out of the hospital.
ISABEL
You’re god damn right I did! You know how
painful that decision was to make. You
were there.
OSCAR
I don’t remember it being hard for you at
all. And if it was, you didn’t tell me.
You just shut down. You were a fucking
zombie.
ISABEL
So that gave you the right to take her
and raise her behind my back... Because I
was conflicted about being a mother when
I was 18?
OSCAR
Conflicted? You were fucking crazy! One
second telling me we were going to have
some great life, the next that you were
going to kill yourself.
ISABEL
(screaming)
I never said that.
OSCAR
Yes you did! YOU DID!
They are screaming. Theresa steps in.
THERESA
Okay, okay, calm down.
Isabel tries to collect herself. She looks at Oscar.
Pink Rev. (05/28/18) BF7 55.
ISABEL
Why didn’t you just tell me you were
going to keep her?
Oscar takes a moment and composes himself.
OSCAR
I didn’t know until you left. And by then
I couldn’t find you.
He shakes his head.
OSCAR (CONT’D)
I’m not going to justify it to you. I
don’t owe you anything.
She can’t believe this.
ISABEL
Owe? Isn’t this your daughter we’re
talking about? Doesn’t she deserve to
know her mother?
Oscar is shaking his head.
OSCAR
You chose that. Not me.
Isabel looks at him nakedly.
ISABEL
Where did she think I was?
Oscar stares back.
OCSAR
You can’t suddenly just show up...
She takes a deep breath.
ISABEL
What do you expect me to do now? Turn my
back?
Oscar looks at her, as if to say ‘if the shoe fits’.
ISABEL (CONT’D)
(Screaming)
Do not fucking judge me!
Isabel gathers herself. She nods.
Pink Rev. (05/28/18) BF7 56.
ISABEL (CONT’D)
(calmly)
You tell her, or I will.
Isabel walks out of the kitchen past Oscar and Theresa.
91 INT. HALLWAY - CONTINUOUS 91
With Isabel who contains her emotions as she walks down
the long hallway toward the front door.
92 INT. LIVING ROOM - CONTINUOUS 92
Grace and Jonathan have been opening gifts with the
twins, and haven’t heard the yelling.
They watch as Isabel opens the front door and exits
without a look or a good-bye.
Jonathan and Grace look at each other, sensing
something’s off. Jonathan goes to the window and peers
out.
93 EXT. THERESA AND OSCAR’S HOUSE, DRIVEWAY 93
Isabel walks down the driveway toward her NYC taxi that
has been waiting for her this whole time.
94 INT. THERESA AND OSCAR’S HOUSE, LIVING ROOM 94
At the window, Jonathan watches Isabel go. Behind him
Grace looks confused.
95 INT. LIVING ROOM - MINUTES LATER 95
A tearful, shocked Grace, sits opposite her father who
tries to hold her hand. She pulls it away.
She looks to Theresa to see if it’s true. Theresa’s face
tells her it is.
On each of their faces. Theresa takes a deep breath.
Grace runs out.
Pink Rev. (05/28/18) BF7 57.
96 EXT./INT. OSCAR’S STUDIO - NIGHT 96
The doors are open.
Oscar sits alone smoking a cigarette, as he stares back
at the house. A few rooms illuminated.
On a work table sits a pile of old drawings. Seems to be
an series of charcoal lines intertwining. All the
sketches have the same theme, though the specifics and
materials used vary.
QUICK FLASH - NIGHT
Feet intertwined on a beach. Reflected flicker of a camp
fire.
BACK TO PRESENT
After another moment, Oscar puts out the cigarette,
reaches down and pulls the extension cord apart. The barn
goes dark.
97 INT. GRACE AND JONATHAN’S NYC APARTMENT - NEXT DAY 97
Oscar is in the middle of a fight with Grace.
OSCAR *
I considered everything and I did what I *
thought was best for you. It never *
occurred to me it wasn’t the right *
decision. *
Grace is angry. *
GRACE
How could what’s best for me be to not
know the woman who gave birth to me?
These are hard questions for Oscar to answer.
OSCAR
It wasn’t simple. *
GRACE
Seems like it would be simple. Like
you’ve always told me: “Tell the truth,
that way you don’t have to remember
anything”.
Oscar is on shaky ground.
Pink Rev. (05/28/18) BF7 58.
OSCAR
(half to himself)
I can’t believe this is happening. *
GRACE
Now that sounds like the truth. *
Grace puts a couple things in her bag.
GRACE (CONT’D)
What hotel is she staying in?
Oscar looks back at her.
OSCAR
Grace you don’t understand. At every
moment, I made the best decision I could.
But it was very complicated.
GRACE
You’re fucking right! I don’t understand.
OSCAR
Don’t curse at me!
(a deep breath)
I didn’t know what I was doing. I did my
best. The story just developed. You think
I did everything on purpose?
Grace looks at him, still angry.
OSCAR (CONT'D)
I didn’t want you to know that she gave
you up. So I told you she had died. Can
you not understand that? I didn’t want
you to have the hurt - that self doubt.
She looks at her father, emotionally.
GRACE
And you think I don’t feel that anyway?
You think I don’t feel... incomplete? *
He looks at her, trying to process. *
GRACE (CONT’D)
You had no right to do what you did. And
it’s not my job to make you feel better
about it. And I won’t. *
She zeros in on him.
Pink Rev. (05/28/18) BF7 59.
GRACE (CONT’D)
What hotel?
He doesn’t answer her. Jonathan walks in. He easily *
clocks the energy in the room.
JONATHAN
Hi.
She turns and runs out. After a moment, he follows.
98 INT./ EXT. BOWERY HOTEL - DAY 98
Jonathan and Grace pull up to the hotel in a taxi. The
Bellman opens the door and they get out.
On the street. Grace takes a deep breath.
JONATHAN
You sure you want to do this? I mean, you
already have a really great mother.
Grace looks at him in disbelief.
JONATHAN (CONT’D)
Grace, I just mean...
He changes course.
JONATHAN (CONT’D)
I’ll wait for you.
99 INT. BOWERY HOTEL - DAY 99
Grace walks through the lobby. Toward the elevators. We
watch the determination give way to nerves.
100 INT. BOWERY ELEVATOR - SAME 100
She rides up.
101 INT. BOWERY HOTEL PENTHOUSE - CONTINUOUS 101
Close on Isabel as she meditates.
A knock at the door. She opens her eyes.
Another knock.
Pink Rev. (05/28/18) BF7 60.
102 INT. BOWERY, OUTSIDE ISABEL’S ROOM/ INT. ROOM 102
Grace waits.
Inside, Isabel approaches the door. She looks through the
peep hole.
The distorted image of Grace, standing on the other side
of the door.
Isabel’s heart races. Grace’s begins to sink, thinking
there is no one there. Another moment and she turns to
leave.
Then suddenly the door opens. Grace turns. She and Isabel
stand face-to-face.
ISABEL
Hi.
GRACE
Hi.
Long moment.
ISABEL
Come in.
103 INT. BOWERY HOTEL, ISABEL’S ROOM 103
Grace walks in and Isabel shuts the door. Grace looks
around. *
GRACE
It’s a nice room.
ISABEL
It’s very big.
Grace smiles. Isabel doesn’t know what to say.
GRACE
I didn’t know you existed.
Isabel nods. Grace sees that she’s hurt.
GRACE (CONT’D)
I’m sorry.
ISABEL
You have nothing to be sorry about.
You’re the only one.
Pink Rev. (05/28/18) BF7 61.
Isabel looks at her, gently. Grace smiles nervously.
ISABEL (CONT’D)
Would you like something to drink? We
have... well, everything.
Isabel opens the fridge.
GRACE
Wow. Um. I’ll have, that.
She points to an orange can of “Pellegrino”. Isabel gets
it and hands it to her.
GRACE (CONT’D)
My dad said you were dead.
ISABEL
I’m not.
They smile.
ISABEL (CONT’D)
You want a glass?
GRACE
Sure.
Isabel gets a glass. Grace opens the can and pours.
Isabel looks at the bright orange soda.
ISABEL
What’s it taste like?
GRACE
Fancy orange soda, I guess.
Isabel smiles.
GRACE (CONT’D)
Have a sip.
She holds the glass out for Isabel who takes it, though
Grace doesn’t let go, so both their hands are on it,
fingers touching.
They bring it to Isabel’s mouth and she drinks.
She spills a little down her chin. Grace takes the glass.
ISABEL
Sweet.
Pink Rev. (05/28/18) BF7 62.
GRACE
You don’t have this in India?
ISABEL
We have ‘Artos’. Not so much at the
orphanage, though.
A long moment of silence together.
GRACE
I have so many questions.
Isabel nods.
ISABEL
I don’t know how good I’ll be at
answering them.
Grace gives her a little smile.
GRACE
How long are you staying? Do you have
time to meet?
ISABEL
Yes. I’d like that.
GRACE
I could call... Now, that I know you
exist.
They share a smile.
ISABEL
Or I could call you. If you want.
The interaction is awkward, but sweet.
GRACE
Okay, yes. Great. Let me give you my
number.
Isabel stands looking at her daughter.
GRACE (CONT’D)
Do you have a phone?
Isabel gets her cell phone and hands it to Grace. Grace
puts in her number. As she does, Isabel takes the
opportunity to really look at her.
She hands Isabel her cell phone. They stand, facing each
other.
Pink Rev. (05/28/18) BF7 63.
GRACE (CONT’D)
I should go. Jonathan is waiting for me.
Isabel nods. After another moment, they embrace.
Isabel walks Grace to the door. She opens it. Grace walks
out with a little wave. Isabel closes the door.
104 INT. BOWERY HOTEL HALLWAY, OUTSIDE ISABEL’S ROOM 104
Grace walks away from Isabel’s room, a growing sense of
wonder on her face.
105 EXT. BOWERY HOTEL, ISABEL’S BALCONY - EVENING 105
Isabel stands out on the balcony looking out.
106 EXT. ORPHANAGE - FLASHBACK 106
Isabel says a special good-bye to Jai. He kneels.
ISABEL
I want you to help teach the meditation
class while I’m away. You need to show
the others how it’s done.
He looks unsure. She takes him in.
ISABEL (CONT’D)
Close your eyes.
She waits. He doesn’t close them.
Isabel takes her hand and closes Jai’s eyes, then closes
her own.
ISABEL (CONT’D)
They are not closed. They are looking
inside you. And only you get to see that.
JAI
I see darkness.
ISABEL
No, really look. And you can see all the
people you love, everything your
imagination can create. And you hear
that?
He listens with his eyes closed.
Pink Rev. (05/28/18) BF7 64.
ISABEL (CONT’D)
The drum? Boom boom... boom boom. Boom
boom.
JAI
That is not a drum.
ISABEL
What is it then?
JAI
My heart.
They open their eyes and look at each other. She smiles.
107 INT. ROSE OF INDIA RESTAUTANT, 6TH ST - NIGHT 107
The place is entirely red, with Christmas lights lining
every square inch.
Loud Indian music plays. Four waiters are gathered around
a table in the back, singing an Indian version of happy
birthday as they clap.
Isabel and Grace sit at a table near the front, watching
the celebration. It finishes and the lights go back on.
GRACE
I thought it might remind you of home.
(embarrassed)
It was probably stupid.
ISABEL
No, it was thoughtful.
They smile at each other.
GRACE
Jonathan took me here on one of our first
dates. It seemed exotic then.
ISABEL
You two seem happy together.
Grace nods.
GRACE
(pause)
To tell you the truth, it’s kind of hard
to think straight about anything right
now.
Pink Rev. (05/28/18) BF7 65.
ISABEL
I get it.
The waiter refills their glasses.
GRACE
Do I have any brothers or sisters I don’t
know about?
Isabel is taken by surprise by the question.
ISABEL
No. I mean, not exactly.
Grace is unsure what she means.
ISABEL (CONT’D)
There is one boy at the orphanage who
I’ve pretty much raised. We found him on
the road when he was just 1. Abandoned.
GRACE
How old is he now?
ISABEL
8 next week. Jai.
GRACE
“Jai’.
Isabel nods.
ISABEL
He loves birds. And he wants to be a
professional football player.
GRACE
Soccer you mean?
Isabel smiles and nods. Grace looks at her for a long
moment, then reaches into her bag and pulls out a leather
bound picture album.
GRACE (CONT’D)
I brought some pictures. If you want to
see?
ISABEL
I would love that.
Grace opens the book, revealing a picture of her as a 5-
year-old in the bath.
Pink Rev. (05/28/18) BF7 66.
GRACE
That’s me... in the bath. I was 5 I
think...
Isabel looks closely. Studies it. Grace turns the page.
GRACE (CONT’D)
This was second grade.
ISABEL
And who’s that?
She points to a little boy.
GRACE
That’s Lyle.
ISABEL
Was he your boyfriend?
GRACE
For a minute. But he dumped me when I got
him out in dodgeball.
Isabel smiles.
ISABEL
Better off. No one likes a sore loser...
Grace laughs and turns the page.
A picture of Grace with Theresa. Looks like a first day
of school.
Another of Grace sitting behind Theresa’s desk,
pretending to be the boss. Isabel takes them in.
A family shot with Oscar.
Grace on the couch holding both her newborn brothers.
Grace and Oscar holding surf boards on a beach when she
was about 15. Snap shots of a whole life. Isabel takes it
all in.
GRACE
Dad said you were depressed.
Isabel moves her head back and forth, considering.
GRACE (CONT’D)
And that you both drank too much.
Pink Rev. (05/28/18) BF7 67.
ISABEL
Probably. We were really young.
Grace thinks.
GRACE
I don’t think I could give up a baby.
Isabel takes a deep breath.
ISABEL
Wasn’t in my plans either.
Isabel looks at her.
ISABEL (CONT’D)
But I knew I couldn’t take care of you.
Grace tries to understand.
ISABEL (CONT’D)
The best I could do was to bring you into
the world.
Isabel nods to herself.
ISABEL (CONT’D)
I’ve spent a long time living with that.
Grace nods.
108 EXT. TRIBECA STREET - LATER THAT NIGHT 108
Pretty desolate. Isabel and Grace have been walking for a
while. Grace is behind Isabel looking at a tattoo she has
on her shoulder. It’s the earth, a globe. Grace is
fascinated.
ISABEL
I drew it myself and had them copy it.
GRACE
Didn’t it hurt?
ISABEL
Fuck, yes.
They laugh and Grace cringes at the thought.
ISABEL (CONT’D)
But, it made me appreciate it more.
Pink Rev. (05/28/18) BF7 68.
GRACE
(resolved)
I’m getting one.
ISABEL
I’m sure that would make your mother
really happy.
The air gets thick for a second.
GRACE
Actually, Theresa has a tattoo.
Isabel looks curious.
ISABEL
Oh yeah?
GRACE
It’s for my dad. An ‘O’. Right here.
She touches her ribs. Grace looks at her face.
GRACE (CONT’D)
Does that make you feel weird?
ISABEL
Weird?
GRACE
Jealous?
She laughs.
ISABEL
No.
Grace smiles at her.
GRACE
Good.
They walk for another moment. Then Isabel stops.
ISABEL
I want you to have this.
Isabel takes off her necklace and hands it to Grace.
ISABEL (CONT’D)
Of course, you don’t have to wear it.
Grace stares at it for a moment, then hugs her.
Pink Rev. (05/28/18) BF7 69.
109 INT. THERESA’S BATHROOM - MORNING 109
She downs her morning vitamins.
110 INT. CLOSET - MOMENTS LATER 110
She puts on her jewelry. As she does, she looks over at
her shelf where she had put the birds nest and eggs she
found. It’s not there. She goes over and looks more
closely. No where to be found. She looks agitated.
111 INT. KITCHEN - CONTINUOUS 111
Cibele, their housekeeper, is cleaning. Theresa stomps
in.
THERESA
Cibele there was a nest in my closet. Did
you movie it?
Cibele looks puzzled.
THERESA (CONT’D)
(impatient)
A birds nest with blue eggs. Did you move
it?
CIBELE
No. I didn’t see it.
Theresa looks annoyed.
112 INT. BARN - MORNING - CONTINUOUS 112
Oscar is showing two men around his new studio. One wears
a suit and looks like he is a collector. The other is his
art advisor.
Theresa walks in. She immediately spots the nest on one
of Oscar’s work tables. Oscar and the men appear from
around the other side of the huge stone he’s working on.
OSCAR
Tess. This is Jamey and Andre. I’m
showing them the new pieces.
She barely acknowledges them.
THERESA
(to Oscar)
Did you take that from me?
Pink Rev. (05/28/18) BF7 70.
He’s trying to understand what’s going on. He steps away
from the others to try and speak privately with her.
OSCAR
I... I saw it in your closet.
THERESA
What were you doing in my closet?
OSCAR
I saw it when I was replacing a bulb for
you. It was starting to fall apart, so I
thought I’d repair it for you.
The two others hang awkwardly in the background.
THERESA
You don’t need to fix everything. You’re
not the fucking handyman!
She stares daggers at him then leaves without a goodbye.
He takes a deep breath, then turns back to the others,
who wait awkwardly.
OSCAR
(lightly)
Sorry about that. The down side of
working at home.
He forces a smile and leads them back to the work.
113 INT. ARETSKY’S PATROON - DAY 113
Theresa sits at her regular corner booth of this up
scale, business-oriented restaurant, drinking a martini.
The maître d’ shows Isabel to the table. Theresa smiles
at her.
THERESA
Oh good come sit down.
Isabel slides in the booth. Theresa finishes off her
martini.
THERESA (CONT’D)
I’m celebrating. I have officially sold
my company.
She raises her hand to the waiter for two more martinis.
Pink Rev. (05/28/18) BF7 71.
ISABEL
No, thank you.
THERESA
You don’t drink?
ISABEL
Not in the middle of the day.
THERESA
Not at the wedding either.
Isabel realizes Theresa was watching her.
THERESA (CONT’D)
Oscar said you guys partied a lot. Is it
cause of that?
Isabel doesn’t feel comfortable, and it shows on her
face. She shakes her head.
ISABEL
Why am I here?
Two men in suits approach the table and greet Theresa.
RICHARD
Just wanted to stop by to say
congratulations.
EDDIE
We heard you made out pretty well.
THERESA
Is that a surprise? Now, I’m just a very
rich employee.
They smile at her.
THERESA (CONT’D)
This is my friend, Isabel. Richard -
Eddie.
The men smile at Isabel.
THERESA (CONT'D)
I’m about to donate a small fortune to
the orphanage she runs in India.
Isabel is taken by surprise by this information.
RICHARD
Wow, now I feel bad about myself.
Pink Rev. (05/28/18) BF7 72.
THERESA
It’s about time.
They all laugh and the men leave. The martini arrives,
Theresa starts on it.
ISABEL
I assumed after the other night...
THERESA
Why? It makes more sense now. We’re
practically family.
Isabel looks at Theresa, trying to read her. The waiter
approaches.
THERESA (CONT’D)
(to the waiter)
The sole. For both of us.
He nods and scurries off.
THERESA (CONT’D)
You’ll love it.
Isabel narrows in on Theresa.
ISABEL
Why are you doing this?
Theresa smiles.
THERESA
Just be grateful and try not to ruin it. *
ISABEL
I just know when something sounds too *
good to be true. *
THERESA
The only thing you need to know is what
you can do with the money.
Isabel’s mind is spinning.
THERESA (CONT’D)
It’s a good day for both of us.
Pink Rev. (05/28/18) BF7 73.
Theresa finishes her second martini. She looks at Isabel.
THERESA (CONT’D)
It must have been strange seeing Oscar
again.
Isabel nods, tentatively.
THERESA (CONT’D)
Does he look different?
ISABEL
I don’t remember.
THERESA
Oh gimme a break. I mean, he is handsome
now, but back then...
ISABEL
You knew who I was when you invited me
here, didn’t you?
THERESA
No. I did not. All I knew was what my
people told me; That there was a good
charitable opportunity. The rest is fate.
ISABEL
I don’t believe you.
THERESA
Well, That doesn’t matter.
ISABEL
What do you want?
THERESA
The real answer?
ISABEL
Yes.
THERESA
I want to make money.
Theresa smiles. Isabel looks at her dubiously.
THERESA (CONT’D)
Grace said you two had dinner.
Isabel nods.
Pink Rev. (05/28/18) BF7 74.
THERESA (CONT’D)
Good. I’m glad you’re spending time
together.
Gwen, Theresa’s assistant, appears at the table.
GWEN
I’m sorry to interrupt...
THERESA
Then why are you?
Gwen swallows hard.
GWEN
You have a conference call. I was trying
to text you but you weren’t picking up.
THERESA
Who scheduled a call during lunch?
GWEN
You asked me to.
THERESA
Well, I’m not available to talk right
now, so push the call.
Gwen stands there.
GWEN
You specially asked me to schedule it
before London closed.
Theresa raises her voice.
THERESA
(loudly)
Jesus Christ! Do I work for you or do you
work for me?!
People turn and look. Gwen is frozen. Isabel sits
uncomfortably.
THERESA (CONT’D)
Which one is it?!
GWEN
I work for you.
THERESA
Very good. That’s using your brain. Now
go push the fucking call and if you can’t
then don’t come in tomorrow.
Pink Rev. (05/28/18) BF7 75.
The few people left in the restaurant watch the scene.
114 EXT. THERESA AND OSCAR’S HOUSE, BACK PORCH - EVENING 114
Theresa sits staring out into the darkness with a mostly
finished drink in front of her.
Oscar walks out carrying a few folders.
OSCAR
Hey.
She doesn’t move. He puts the folders down in front of
her.
OSCAR (CONT’D)
The office dropped these off.
She looks at him with a dark expression. He examines her.
OSCAR (CONT’D)
They also wanted to know if you were
okay.
THERESA
(drunk)
I decided to go ahead and finance
Isabel’s orphanage.
Oscar isn’t sure what to say.
THERESA (CONT’D)
Are you going to say anything?
OSCAR
I’m sure she’s happy about that.
She laughs.
THERESA
You two are perfect for each other.
He’s totally taken aback.
OSCAR
What the hell does that mean?
THERESA
It means she didn’t seem that grateful
either.
This hits him hard. He takes a beat.
Pink Rev. (05/28/18) BF7 76.
OSCAR
I’m going to assume that’s the vodka
talking.
THERESA
Good solution.
(finishes her drink)
No responsibility that way.
Oscar looks at her and shakes his head. She stands.
OSCAR
You think you’re the only one affected by
this?
He tries to make eye contact with her but she seems far
off. She moves to leave, and he grabs her arm. They look
at each other.
OSCAR (CONT’D)
Don’t go up to the boys room like this.
She blows up.
THERESA
Don’t tell me what to do. Don’t tell me
how to be a mother! It’s not like you’re
the better parent. And I’m getting pretty
sick of hearing that single dad story.
You didn’t do it all on your own.
She breaks free from his grasp and walks out.
115 INT. THERESA AND OSCAR’S BEDROOM - MIDDLE OF THE NIGHT 115
Theresa is dead asleep. Oscar lies awake. He looks over
at her.
116 INT. HORIZON, RECEPTION AREA - DAY 116
Isabel waits. After a moment, Gwen approaches.
GWEN
Follow me.
Isabel and Gwen look at each other. Isabel stands.
117 INT. HALLWAY OUTSIDE THERESA’S OFFICE 117
Gwen and Isabel walk toward Theresa’s office.
Pink Rev. (05/28/18) BF7 77.
118 INT. HORIZON, THERESA’ OFFICE 118
Gwen opens the door and shows Isabel in. Theresa stands.
THERESA
I want to apologize. I was awful. Hope I
didn’t scare you.
Theresa looks at Gwen and smiles gently.
THERESA (CONT’D)
Gwen, I need an extra fifteen minutes.
Could you please tell them I’m going to
be late?
Gwen nods and exits. Theresa motions for Isabel to sit.
She joins her.
THERESA (CONT’D)
I’ve decided to amend my offer.
I’d like to make it more generous.
Isabel is cautious.
THERESA (CONT'D)
It’s going to require you stay a few more
days while we get the details worked out.
Isabel stiffens.
ISABEL
I have to get home. I can’t stay.
THERESA
I know, I understand. But I the
circumstances have changed. You’ve
convinced me that this is too important
to just be a one off donation. And, it
means a lot to me that you're Grace’s
biological mother.
Isabel doesn’t understand.
THERESA (CONT’D)
So, I’ve talked to our lawyers about
establishing a fund.
Isabel tries to process this.
THERESA (CONT’D)
It would be in both your and Grace’s
names, and you would run it together.
Isabel doesn’t know what to say.
Pink Rev. (05/28/18) BF7 78.
THERESA (CONT’D)
I was thinking 20 million over six years.
ISABEL
What?
THERESA
From the research I have, it could cover
fifty thousand kids a year. Medication,
shelter, education. Anything you’d need.
Isabel is reeling.
THERESA (CONT’D)
Including your local farming project.
She looks at Theresa.
ISABEL
What are you getting out of this?
THERESA
(lightly)
Wow. *
Isabel looks uneasy. Theresa softens.
THERESA (CONT’D)
Stay. Stay a little. Get to know Grace
better. Talk to Oscar. Go out dinner with
them. Spend some time with them.
Isabel looks at her and shakes her head. Give a little
laugh.
THERESA (CONT’D)
I know, I don’t like it either. *
(pause) *
Look, I’m not going to be here this *
weekend. I’m taking the boys to my *
sister’s in DC for the weekend. Go see
them while I’m gone. I’m sure you have a
lot to talk about.
Isabel stands, so does Theresa.
THERESA (CONT’D)
Congratulations.
119 INT. DRIVEWAY OF HOUSE - MORNING 119
Oscar loads a couple bags in the back of Theresa's car.
The boys try and help.
Pink Rev. (05/28/18) BF7 79.
OSCAR
C’mon, you can do it!
They struggle. The other one comes and pushes from the
bottom. Oscar helps them.
Theresa appears with a to-go cup of coffee.
OSCAR (CONT’D)
(re: weight of bag)
My god, what are you bringing with you?!
They hoist the bags in.
THERESA
You need a lot of footwear choices when
you are going to so many museums.
TWINS
No!!
THERESA
I’m teasing. Maximum 3.
They groan again.
THERESA (CONT’D)
Now hop in, I don’t want to hit traffic.
Oscar ushers them in. Sticks his head in so Theresa can’t
hear.
OSCAR
(to the kids)
There are snacks in the back.
The twins get in. Oscar turns to Theresa.
OSCAR (CONT’D)
Why don’t you take the train, you won’t
have to worry about traffic... or
crashing.
THERESA
I’m a better driver than you. And I want
to drive. It’s just DC.
She kisses him, then climbs in the drivers seat.
THERESA (CONT'D)
Besides, ‘they talk to you in the car.’
He smiles.
Pink Rev. (05/28/18) BF7 80.
OSCAR
Sounds familiar.
THERESA
See, I’m listening; even when you think
I’m not.
OSCAR
Say hi to your sister. And please be
careful.
She waves to him and starts the car. She turns the radio
on and music blares.
OSCAR (CONT’D)
I could come...
She turns it up very loud and makes a motion like she
can’t hear him. He backs off. She pulls away.
120 INT. HOUSE, KITCHEN - LATER DAY 120
The news plays on the radio.
Oscar makes a sandwich.
The doorbell rings. He looks up, not expecting anyone.
121 EXT. FRONT DOOR OF HOUSE 121
Oscar opens the door to reveal Isabel. He’s surprised.
ISABEL
Can we talk?
OSCAR
About what?
She shakes her head about how contentious he’s being.
ISABEL
Your wife.
122 INT. LIVING ROOM - MOMENTS LATER 122
The tension is thick between them.
OSCAR
(reluctantly)
Do you want a glass of water?
Pink Rev. (05/28/18) BF7 81.
ISABEL
Did you know that Theresa asked me to
administer a fund?
OSCAR
Well, that’s what you came here for,
right?
ISABEL
With Grace. We’d run it together.
Oscar looks surprised.
ISABEL (CONT’D)
I don’t know if Grace even knows. Or if
any of it’s even real. Frankly, I don’t
really trust your wife.
OSCAR
You don’t trust her? She offers you money
to run a charity and you question her
integrity?
ISABEL
20 million dollars.
Oscar can’t hide his surprise.
ISABEL (CONT’D)
Is it real?
OSCAR
You don’t need to be poor to have good
intentions. There are people with money
and ideals.
ISABEL
Oh really? That’s not what I remember you
saying when I knew you.
OSCAR
Well, I was an idiotic idealist and I *
grew up. Did you?
ISABEL
You don’t know me so don’t pretend you
do.
They glare at each other. Oscar thinks.
OSCAR
(defensively)
Grace is not going to India with you.
Pink Rev. (05/28/18) BF7 82.
ISABEL
You think you’re in charge of her?
He stays still.
ISABEL (CONT’D)
I hate to tell you, but she’ll do
whatever she wants. We all do eventually.
The depth of the truth in that statement lies there
between them.
Oscar goes to the window and looks out. Isabel watches
him.
ISABEL (CONT’D)
Theresa doesn’t care about the orphanage.
She barely wanted to hear about it. She
cares about business. So what does she
want?
Oscar thinks.
OSCAR
Maybe to give Grace some direction?
He softens.
OSCAR (CONT’D)
(admitting)
I don’t know.
Oscar looks defeated. He sits.
OSCAR (CONT’D)
Seems to be a theme for me these days.
Isabel nods.
ISABEL
Join the club.
She sits opposite him. They aren’t sure where to go.
ISABEL (CONT’D)
I looked up some of your work online.
He looks at her.
OSCAR
Yeah?
ISABEL
It’s pretty terrible.
Pink Rev. (05/28/18) BF7 83.
He laughs.
OSCAR
I looked you up too.
ISABEL
(dubious)
Really?
OSCAR
Yeah. You sound very noble. At least on
the internet.
She nods.
ISABEL
The orphanage is my best side.
They smile at each other.
OSCAR
Can I make you a coffee?
123 INT. BARN - DUSK 123
We are close on Oscar’s art. The sketches, the older
sculptures, the new unfinished work.
Oscar and Isabel wander around the massive stone he is
getting ready to work on.
ISABEL
How do you choose it?
OSCAR
I can’t really describe it.
ISABEL
Can’t or don’t want to?
He smiles.
OSCAR *
Both? *
ISABEL *
Fair enough. *
He reconsiders and decides to let her in. *
OSCAR
(hesitantly)
Certain rocks kind of glow. To me.
Pink Rev. (05/28/18) BF7 84.
ISABEL
(little smile)
Like an ‘Aura’?
He shakes his head and smiles. *
Pink Rev. (05/28/18) BF7 84aA.
OSCAR
(slightly embarrassed)
Maybe. *
*
Pink Rev. (05/28/18) BF7 84A.
ISABEL
And those are the ones you take.
OSCAR
Not right away. I leave them, and then I
go back. And if they are still...
lighting up... then I take them.
(lightly)
I’ve got to be sure because they are
heavy. *
She smiles and touches the huge stone, amazed by it. *
After a moment:
ISABEL
Is that what happened with her?
Oscar looks puzzled.
ISABEL (CONT’D)
Grace. She was lighting up?
A long moment. Oscar isn’t sure what to say. Tentatively,
he touches the back of Isabel’s hand.
She looks at him tenderly.
ISABEL (CONT’D)
I thought you’d come looking for me.
He takes it in. Breathes.
OSCAR
I thought you’d come back.
124 INT. CAR - NIGHT 124 *
On Isabel riding home.
125 EXT. WORKSHOP - SAME 125
Oscar steps outside and breathes in the cold air. He
looks up at the night sky.
126 EXT. GRACE’S LOFT - NEXT DAY 126
Grace sits at the computer.
JONATHAN (O.C.)
Is it too ass kissy to wear a tie?
Pink Rev. (05/28/18) BF7 85.
She doesn’t take her eyes off the screen.
GRACE
For what?
Jonathan appears with a couple ties.
JONATHAN
My presentation. I’m pitching Pizza hut.
I’m the lead on it. Pretty sure I told
you.
GRACE
A tie is nice.
She looks up.
GRACE (CONT’D)
But not the Harvard one.
She goes back to the screen.
JONATHAN
Are you going to meet us at Nobu or wanna
come by the office?
GRACE
For what?
JONATHAN
For dinner. With Ben and Xandy?
She keeps scrolling through picture on the computer.
JONATHAN (CONT’D)
What are you doing?
He looks over her shoulder. Pictures of India.
JONATHAN (CONT’D)
Is that India?
GRACE
I thought we could go.
He clearly isn’t into the idea.
JONATHAN
When?
GRACE
Maybe for our honeymoon. There are
supposed to be great hotels.
Pink Rev. (05/28/18) BF7 86.
He looks at the screen, then stands and angrily starts
doing his tie.
JONATHAN
We’re going to Costa Rica. I want to
surf.
GRACE
Maybe we can do both.
JONATHAN
India is too far babe. And I can’t take
that much time off work. We were just
going to be gone for a week.
GRACE
Well, maybe you can just come for a week
I can stay longer.
JONATHAN
We just got married babe. I want to be
with you.
GRACE
I know. But maybe I want to see India.
JONATHAN
You want to be alone in India? You hate
being alone.
GRACE
I won’t be alone. I’ll see Isabel.
He shakes his head.
JONATHAN
Yeah. I get it. I’m not stupid.
She looks at him perplexed and hurt.
GRACE
Why are you being so shitty?
He looks at her, then shakes his head.
JONATHAN
Me? How do you think it feels to marry
someone and then a week later have them
turn into a different person.
GRACE
Well, a few things have happened.
Pink Rev. (05/28/18) BF7 87.
JONATHAN
And is that fair to me?
They look at each other for a long moment. She can’t
believe him.
GRACE
So, you thought I would stay the same
forever?
He is agitated. Finds his shirt.
JONATHAN
Jesus Christ, Grace. That’s not what I’m
saying.
GRACE
(angry)
Then what are you saying?
JONATHAN
(struggling)
You can’t change things now. She gave you
up.
It’s a thoughtless comment.
127 EXT. UNION SQUARE GREEN MARKET - DAY 127
Isabel walks amongst the locals and tourists who shop for
their fresh fruit, vegetables and flowers. She takes it
all in. She watches someone choosing a couple of muffins
and some bread from a stand.
FLASHBACK
128 EXT. INDIA, MARKET - DAY 128
We are walking through a busy street in Kerala and are IN
Isabel’s POV. Food and goods for sale on either side.
Isabel is holding Jai’s hand as they navigate the street.
Jai sees some sweets and he drags Isabel over to the
stall.
JAI
Isabel...! (Please)
Isabel smiles at him.
Pink Rev. (05/28/18) BF7 88.
ISABEL
Ok, but it’s our secret.
She orders a sweet from the vendor. Jai bounces in
anticipation.
129 OMITTED 129
130 INT. OSCAR’S STUDIO - LATE MORNING 130
Some workers are preparing the big stone for cutting.
Grace appears at the door.
GRACE
Is my father here?
WORKER
He took a break.
131 EXT. TRAIL THROUGH THE WOODS - DAY 131
Oscar walks through the woods, looking at the light as it
cuts through the trees. He checks a little compass app.
on his phone that tracks the sun.
Behind him, Grace calls.
GRACE
Dad!
He turns, she catches up to him.
GRACE (CONT'D)
What are you doing out here?
Oscar takes her in.
OSCAR
Gracie... I’m just... thinking.
He looks weighed upon.
Pink Rev. (05/28/18) BF7 89.
GRACE
I hate fighting with you.
OSCAR
You think you’ll forgive me?
She looks at him and shakes her head.
GRACE
What’s my other option?
He’s relieved.
GRACE (CONT’D)
But I want to know everything.
Oscar nods, takes her hand.
OSCAR
Of course, Bunny. *
GRACE
Don’t call me that.
OSCAR
OK. What should I call you?
GRACE
How about my name.
He nods slowly and looks at her. Takes a moment.
OSCAR
When you give a child up for adoption,
you have a period of time to change your
mind. 30 days. A “grace” period.
She listens intently. Thinks.
GRACE
So, how long did it take for you to
decide to come get me?
OSCAR
29 days. Visiting every day.
Grace listens intently.
OSCAR (CONT’D)
We had agreed once you were born we would
both leave. She kept up her end of the
bargain.
Oscar remembers.
Pink Rev. (05/28/18) BF7 90.
OSCAR (CONT’D)
And I meant to. But I thought; ‘I’ll just
go see her for an hour.’ Then I couldn’t
stop going. Staring at you, talking to
you.
Grace digests all this.
GRACE
And they don’t have to contact the mom?
OSCAR
A “Good faith effort”, they call it.
Just sending a letter to the last known
address. But she didn’t even have one and
I knew they wouldn’t find her.
She looks at her dad, pained and relived to be hearing
the real story.
GRACE
Did you marry mom for my sake? So I would
have a mother?
A moment before he answers.
OSCAR
I knew she’d be a great mother; but I
married her because I love her.
GRACE
Do you?
Oscar looks at her for a long moment.
OSCAR
Yes.
GRACE
So, Isabel was just a mistake?
She’s really grilling him.
OSCAR
No, not a mistake. We were just... young. *
He looks off.
GRACE
Then why didn’t you tell me about her?
Oscar thinks.
Pink Rev. (05/28/18) BF7 91.
OSCAR
I wanted to forget.
GRACE
Did you?
Oscar thinks.
OSCAR
No.
He looks off.
132 INT. HOUSE - AFTERNOON 132
Oscar walks up the stairs, holding the reconstructed
bird’s nest.
133 INT. THERESA AND OSCAR’S BEDROOM 133
Oscar walks through to her closet.
134 INT. THERESA’ CLOSET - MINUTES LATER 134
Oscar stands on a stool trying to rig the birds nest so
it can hang from the ceiling, suspended by an eye hook
and monofilament.
He gets it rigged. There is some excess monofilament at
from where he’s tied it off and he tries to break it with
his teeth. It won’t break.
He gets down off the step ladder and looks around for a
scissors. Opens a couple drawers.
Approaches Theresa’s make-up table.
He opens one drawer, then another. No scissors, but
something catches his eye:
A weekly pill sorter with unidentifiable pills in it,
sorted by day. He lifts it. Underneath is a locked box.
He rattles the top. It won’t open.
He opens the other drawers, looking more and more
urgently for the key. Finally, he takes the middle drawer
completely out and rifles through her things. There is a
small cup filled with coins. He dumps it out, and amongst
the coins finds a little key. He reaches for it.
Pink Rev. (05/28/18) BF7 92.
On Oscar as he slips the key in the lock box. It fits. He
turns it and the top opens. The box is filled with
prescription drug bottles. Oscar reads the prescriptions:
Kepra, Oxycodone, Prednisone. He is confused.
135 INT. THERESA’S CAR - AFTERNOON 135
Theresa pulls into the driveway with the kids. They all
are singing to the radio.
136 EXT. DRIVEWAY OF HOUSE - DAY 136
Theresa helps the boys out of the car. They each carry a
huge stuffed animal.
Oscar comes out to greet them.
THERESA
Go show daddy. And tell him we won them.
Otto and Theo run to Oscar.
THEO
Daddy, look what we won!
They hold out their animals.
OSCAR
Wow, those are huge! How did you win
them?
The boys don’t have an answer. The both look back to
their mom, who is taking her bag out of the car.
THERESA
We stopped at a lovely go-kart track off
the highway that had a few carnival
games.
OTTO
And mom said the games were a waste of
time so she bought them for us.
She’s caught. Gives Oscar a funny smile.
THERESA
It really smelled like feet and hot dogs
in there, and I wanted to beat the
traffic.
She gives him a kiss and hands him her suitcase.
Pink Rev. (05/28/18) BF7 93.
THERESA (CONT’D)
Do you mind taking this is for me? I have
to get to the office.
Oscar looks at her searchingly as he takes her bag. She
senses something but turns away.
THERESA (CONT’D)
Boys, go in with daddy and take a bath.
They run toward the house. Theresa heads back to the car.
OSCAR
Theresa...
She reluctantly turns.
THERESA
I should be back for dinner.
She’s about to get in.
OSCAR
I spoke to your doctor.
She freezes for a moment.
OSCAR (CONT’D)
You’ve known for 3 months?
She gets in the car. Oscar goes around the passenger side
and opens the door.
137 INT./ EXT. THERESA’S CAR 137
Theresa yells.
THERESA
What? He spoke to you? Our relationship
is confidential. He’s not allowed to tell
you anything. I could sue him!
OSCAR
He thought I knew. He said you promised
to tell me right after the wedding.
THERESA
I don’t have time for this right now, I
have to go.
OSCAR
Theresa! We need to talk about it.
Pink Rev. (05/28/18) BF7 94.
THERESA
There’s nothing to talk about.
He doesn’t move.
THERESA (CONT’D)
Get out, please.
He doesn’t budge.
THERESA (CONT’D)
Get out! Get out I have to go work!
He looks at her, emotionally.
OSCAR
No. I’m not getting out. I’m your
husband. I’m never getting out.
They look at each other. She fights off her emotion.
Takes a long moment.
THERESA
Don’t tell Grace and the boys.
Oscar looks at her, tenderly.
OSCAR
Baby...
THERESA
Don’t tell them. Please.
He looks at her, eyes welling. Oscar nods.
OSCAR
We will figure something out.
THERESA
I have figured it out.
OSCAR
There has got to be an experimental
treatment; Something they are testing.
THERESA
You think I haven’t looked into
everything? There’s nothing I can do.
Nothing that won’t just prolong it... and
make it worse... And make it worse. I
don’t want you all to see me that way I
don’t want you to see me that way.
Pink Rev. (05/28/18) BF7 95.
OSCAR
So you expect me to do nothing.
THERESA
We don’t get to choose!
He puts his hand on her arm. She gives into it for a
second then pushes him away.
THERESA (CONT’D)
Let me go.
She pushes him harder.
THERESA (CONT’D)
Let me go!
He pulls back from the car as she starts to drive with
the passenger side door open.
We stay in the car with her as she leans over to try and
pull the door shut. The car swerves and she almost goes
into a tree, before she rights herself.
138 EXT. INDIA, CROWDED STREET - FLASHBACK 138
Isabel stands in a little makeshift stall at the market
being fit for the dress she wore to Theresa’s office the
first day. A local “tailor” measures. Preena and a few of
the kids from the orphanage look on.
JAI
How long will you be away?
ISABEL
Just a week.
JAI
So you’ll be back for my birthday?
ISABEL
I don’t miss birthday parties, Jai.
There’s ice cream.
She winks at him. Jai smiles wide. The tailor drapes some
fabric over Isabel. The kids laugh.
ISABEL (CONT’D)
Keep laughing. Your dress is coming next.
A wide eyed Jai laughs and shakes his head.
Pink Rev. (05/28/18) BF7 96.
139 INT. BOWERY HOTEL/ EXT. ORPHANAGE - DAY 139
Isabel hangs on the phone. Her eyes are glassy with
emotion. Silence.
INDIA
On the other end, Preena holds the phone out the window
of her office toward the courtyard where Jai’s party is
going on. The group sings happy birthday.
On her end, Isabel listens intently, and mouths a few of
the words.
They finish and people cheer. Jai looks up to the window
and sees Preena with the phone.
She gives a wave. Jai shakes his head ‘no’, then returns
to the party.
PREENA
We’re going to do the ice cream now.
Isabel swallows, knowing this means he’s not coming to
the phone.
PREENA (CONT’D)
Isabel. You are doing something
important. Call me as soon as you sign
the contract.
Isabel nods.
ISABEL
(happy birthday)
Tell him, “Subha janmadina”
PREENA
(God bless you/good luck)
Allah tomara mangala karuka
140 INT. THERESA’S OFFICE - AFTERNOON 140
Isabel sits and reads contracts while Theresa watches
her. *
Pink Rev. (05/28/18) BF7 97.
ISABEL
There are a couple of points I don’t
understand.
Theresa looks over her shoulder.
THERESA
Oh, that just means if you and Grace
can’t agree on how the funds are
distributed, Oscar will be the tie
breaking vote. I thought it would be
better if it wasn’t me.
She smiles and sits.
ISABEL
Not that.
(pointing)
This.
Theresa reads.
ISABEL (CONT’D)
It says I have to ‘reside’ in New York?
Theresa nods.
THERESA
Yes. Your cost of living will be taken *
care of.
Isabel is baffled.
ISABEL
I can just come for board meetings, do
the rest over Skype.
Theresa looks at Isabel impassively.
THERESA
I’m afraid it’s a requirement.
This rubs Isabel the wrong way.
ISABEL
That makes no sense. Why?
Pink Rev. (05/28/18) BF7 98.
THERESA
(deep breath)
I know you are used to running things at
the Orphanage, but you aren’t familiar
with what it takes to manage millions of
dollars. So I would like you here. *
Isabel shakes her head and thinks.
ISABEL
6 months here and 6 there.
Theresa looks at her dead on.
THERESA
It’s non-negotiable.
Isabel struggles to understand.
THERESA (CONT’D)
And please don’t waste our time
pretending you aren’t going to do it. *
Isabel begins to let her anger out.
ISABEL
You think I give a shit about your money? *
THERESA *
I do. *
ISABEL *
You think I’m for sale? You can’t buy me. *
Isabel gets up. *
THERESA
I don’t want to buy you. This is an *
opportunity. *
Isabel becomes more and more agitated, like a caged
animal.
ISABEL
(yelling)
Bullshit! That’s what it says here.
Pink Rev. (05/28/18) BF7 99.
She pushes the contract off the table and some papers
fly. Theresa stays calm.
THERESA
Call it whatever you want. But think what
you could do with the money; how many
kids you could help.
She narrows in on Isabel.
THERESA (CONT'D)
I know you’d sell yourself for that.
ISABEL
Fuck you, you don’t know me.
Isabel turns to walk out.
THERESA
Actually I know all about you. 39 years
old. Born in Troy, New York; raised by
adoptive parents in Connecticut. Went to
boarding school upstate, then Syracuse
for a year before dropping out and
joining the Peace Corps - where you met
Oscar... You’re a good person; An *
idealist, well intentioned. You are... *
just like Grace.
Isabel is reeling. She shakes her head.
ISABEL
I have a life! *
THERESA
Your life will be good here.
ISABEL
You think because your rich I’m going to *
get down on my knees and lick your *
fucking asshole? *
Theresa loses her temper.
THERESA
You think that because you’re a do-gooder
it makes up for the fact that you
abandoned your child?
It’s a gut punch. The two women stand facing each other,
nakedly.
Then Isabel turns, and walks out.
Pink Rev. (05/28/18) BF7 100.
Theresa watches her go, then closes her eyes and breathes
in deeply.
141 INT. HORIZON STAIRWELL 141
Isabel runs down the stairs, feet flying.
142 EXT. HUDSON STREET - MINUTES LATER 142
Isabel walks away from the office building, clearly
upset.
Theresa appears and calls to her.
THERESA
Isabel!
Isabel doesn’t stop. Theresa runs to catch up.
THERESA (CONT’D)
Isabel. Stop. Come back. I’m sorry.
Isabel turns to her, furious and wounded.
ISABEL
You are cruel! You think you’re so *
important. You sell... nothing. And the *
world decided that’s worth a lot! *
Theresa takes a deep breath.
THERESA
Listen to me. Listen. She’s our daughter.
We share her. I’ve had her for the last
20 years, and now she needs you.
Theresa’s emotions begin to take over. Isabel is
confused.
THERESA (CONT’D)
And Oscar needs you...
Theresa starts to cry. Isabel can’t handle it all.
ISABEL
You’re crazy.
THERESA
No!
Theresa looks at Isabel.
Pink Rev. (05/28/18) BF7 101.
THERESA (CONT'D)
I’m sick. I’m sick.
(breath)
I’m dying.
Isabel is knocked back by the information, the emotion of
Theresa, and what it all means.
Isabel looks at her confused.
THERESA (CONT’D) *
Help me! My boys are 8 years old... *
Theresa is lost for a moment. Isabel is frozen. Theresa *
explodes with desperation.
ISABEL
What?
THERESA
Do I have to be half way across the world
to get your help! *
Not knowing what to do, Isabel backs up, then turns and
walks away from Theresa.
143 INT. BOWERY HOTEL - EVENING 143
Isabel stands looking out the window, trying to process
it all. Some images of India. Of Oscar. Of Grace.
The phone rings breaking her out of her reverie. She goes
to answer. As she moves, she reveals her packed bags
behind her.
A KNOCK.
ISABEL
I’ll be right down.
A knock again. Annoyed, she goes to the door and opens
it. Grace stands in front of her, looking vulnerable and
upset.
ISABEL (CONT’D)
Grace.
Pink Rev. (05/28/18) BF7 102.
G
RA
C
E
C
a
n
I
t
a
l
k
t
o
y
o
u
?
P
i
n
k
R
e
v
.
(
0
5
/
2
8
/
1
8
)
B
F
7
1
0
2
A
.
Isabel looks concerned.
ISABEL
Yes, Of course. What is it?
Grace walks in and looks at Isabel, face crumpling.
GRACE
I don’t think I want to be married
anymore...
She leans into Isabel’s arms.
144 INT. BOWERY HOTEL, ISABEL’S BEDROOM - LATER 144
They sit on the bed facing each other.
GRACE
He says I’ve changed. That I don’t talk
to him, or laugh at his jokes; or want to
go out with our friends.
(thinking)
His friends really.
Isabel listens patiently. Grace looks far off.
GRACE (CONT’D)
And he’s a good person, but I look at him
now... and... He doesn’t want to know
me... I mean “Me”.
ISABEL
Have you told your parents how you feel?
She shakes her head ‘no’.
GRACE
I can’t. They thought I was too young to
get married. And they were right.
(getting upset)
I wish I wasn’t married.
She leans on Isabel. Isabel holds her, unsure of what to
say.
GRACE (CONT’D)
Does everyone feel this way?
ISABEL
I wouldn’t know.
She comforts Grace for another moment.
Pink Rev. (05/28/18) BF7 103.
GRACE
Tell me what to do?
Grace looks up at Isabel searchingly.
ISABEL
Grace, I can’t do that.
GRACE
Please... Everyone will hate me if I get
divorced... But I don’t know if I can
stay married.
ISABEL
No one is going to hate you.
Grace shakes her head.
GRACE
Yes, they will. I’m stupid... I shouldn’t
have done it...
ISABEL
It’s your life. You decide.
Grace looks up.
GRACE
Like you did?
Isabel looks at Grace.
ISABEL
Like we all do.
They are entering tricky territory.
GRACE
When you gave me up, were you doing what
you wanted?
Isabel looks at her.
ISABEL
It was more complicated than that.
Grace’s anger and emotion rises.
GRACE
Not to me.
Isabel lets this land. She nods. Grace gets upset.
Pink Rev. (05/28/18) BF7 104.
GRACE (CONT’D)
Not to me! Did you think about what you
were doing to ME??!
Grace has shocked herself with her outburst. She gets
emotional.
GRACE (CONT’D)
I’m sorry... I’m sorry.
Grace starts to cry and Isabel hugs her.
ISABEL
I’m sorry.
145 INT. BOWERY HOTEL, ISABEL’S ROOM - DAWN 145
Over some room service trays and into the bedroom, where
Grace lies asleep in a hotel robe. Isabel sits up next to
her. The clock reads 530AM.
146 INT./ EXT. BOWERY HOTEL, BALCONY-ROOM 146
Isabel walks out with the phone into the morning air. She
dials.
Preena picks up.
PREENA
Hello?
ISABEL
It’s Isabel.
PREENA
Isabel, did we get the money?
She looks out at the city.
ISABEL
Yes.
We hear pure joy from Preena’s end.
PREENA
This is a miracle. It’s a miracle!! Let
me get Jai for you. We will celebrate!
Isabel is quiet.
ISABEL
No. No. Not now.
Pink Rev. (05/28/18) BF7 105.
PREENA
What’s the matter?
She isn’t sure how to say this.
ISABEL
I’m not coming back. I’m staying in New
York.
PREENA
What do you mean? For how long.
ISABEL
To live.
Preena is confused and concerned. This is hard for
Isabel, but she is clear.
147 INT. BOWERY HOTEL LOBBY, BREAKFAST ROOM - MORNING 147
Isabel sits with a cup of coffee, waiting. Oscar enters
and finds her. He walks to her table and sits. He looks
exhausted.
OSCAR
Is she okay?
Isabel nods.
ISABEL
She’s confused and upset. She thinks she
made a mistake.
Oscar isn’t clear.
ISABEL (CONT’D)
Apparently, she doesn’t love him.
He nods. Half satisfied half worried.
OSCAR
And she came to you?
Isabel nods with a little shrug.
OSCAR (CONT'D)
What did you tell her?
ISABEL
I told her... that it was her life.
Oscar takes this in. He takes a deep breath.
Pink Rev. (05/28/18) BF7 106.
OSCAR
Thank you for letting her stay.
Grace walks in, surprising them. Oscar stands.
OSCAR (CONT’D)
Hey, there you are.
She is sheepishly emotional when she sees her dad. They
look at each other at her for a moment, then he hugs her.
GRACE
Do you hate me?
OSCAR
Are you kidding?
Isabel watches the embrace. They part and sit. Isabel
smiles at her. Grace wipes a tear away. The three sit
together. Odd.
After a moment Grace reaches over and takes a sip of
Isabel’s coffee.
ISABEL
Sure, have some.
Grace laughs while drinking.
GRACE
I’ll get some more.
She stands up.
GRACE (CONT’D)
Do you want some, Dad?
He nods.
ISABEL
And see if they have any pastries.
Graces walks into the main lobby toward the restaurant.
OSCAR
She’s so sensitive.
ISABEL
Where could she have gotten it?
He smiles. Then uncomfortable with the situation, he rubs
his face.
Pink Rev. (05/28/18) BF7 107.
OSCAR
I didn’t get a lot of sleep last night.
Isabel takes his hand.
ISABEL
Oscar. You have to tell her about
Theresa.
This catches Oscar off guard, and he fights back some
emotion. A long moment.
OSCAR
She made me promise I wouldn’t.
ISABEL
It doesn’t matter. She has to know.
Oscar bows his head, trying to keep it together. Isabel
takes his hand.
OSCAR
(struggling)
I don’t want to hurt her.
ISABEL
Who?
Grace arrives balancing 3 cups of coffee.
GRACE
They said they’d bring the pastries over.
They all sit again. Grace starts to get upset.
GRACE (CONT’D)
Oh, I forgot the milk...
He face crumples.
OSCAR
It’s okay, baby.
Oscar reaches out for her and Isabel puts her hands on
Grace’s arm.
148 INT. HORIZON OFFICES/ THERESA’S CONFERENCE ROOM - DAY 148
Isabel sits around a table opposite Theresa, Bill and a
few other lawyers.
A lawyer prepares the proper page. He passes it to
Isabel.
Pink Rev. (05/28/18) BF7 108.
LAWYER
Sign here.
Isabel takes the paper and signs.
LAWYER (CONT’D)
Theresa. Your turn.
They pass the paper to Theresa who puts on her reading
glasses. She begins to sign but the pen doesn’t work.
Theresa shakes it, still doesn’t work. Immediately,
everyone else in the room offers her their pen.
She takes one and signs. Looks up with a smile.
THERESA
It’s official. I have a lot less money.
Everyone laughs.
ISABEL
You’re changing a lot of peoples lives.
Isabel looks at her with some hidden melancholy. There is
an unintended double-meaning.
THERESA
I hope you can do everything you want
with it.
Theresa’ assistant Gwen opens the door.
GWEN
Sorry to interrupt, but Grace is here.
Theresa looks confused and slightly flustered. Isabel
gets her stuff together.
THERESA
Oh.
(takes a moment)
I wasn’t expecting her.
Theresa’s gaze falls on Isabel.
THERESA (CONT’D)
Bring her in.
Isabel stands, ready to go.
ISABEL
(to the lawyers)
Thank you all for your time.
Pink Rev. (05/28/18) BF7 109.
She approaches Theresa, who looks at her curiously.
THERESA
Why don’t you stay?
ISABEL
I don’t think she came to see me.
Isabel looks deeply at Theresa. Isabel puts out her hand.
Slowly, Theresa shakes it. Isabel smiles, then is off.
Theresa takes a deep breath.
149 INT. HORIZON, HALLWAY OUTSIDE THERESA’S CONFERENCE ROOM -149
CONTINUOUS
Isabel walks away from the conference room as Grace is
walking in.
They stop briefly.
ISABEL
(quietly)
You okay?
Grace nods, subdued but determined. They grasp hands for
a moment before continuing by each other.
150 INT. CONFERENCE ROOM 150
Theresa stands as the Lawyers and Board Members are
exiting. Grace walks in.
THERESA
Gracie. I didn’t know you were coming in
today. I would have cleared myself for
lunch.
Grace looks at Theresa, tears already in her eyes. She
waits for the last person to leave and closes the door.
THERESA (CONT’D)
(trying to stay casual)
Did you see Isabel on the way out?
Grace ignores it. She turns and looks and looks at
Theresa, unwavering. Theresa can’t ignore what’s coming.
GRACE
(plainly)
Why didn’t you tell me?
Pink Rev. (05/28/18) BF7 110.
Grace seems intensely vulnerable, but clear. Theresa
doesn’t know what to say.
GRACE (CONT'D)
(hurt)
Why didn’t you tell me yourself?
She looks away.
GRACE (CONT’D)
You were lying; every minute you knew and
didn’t tell me.
Theresa looks away.
THERESA
I’m sorry.
Grace’s emotions are colliding.
GRACE
Everybody’s sorry!
Theresa looks at her, tenderly.
THERESA
I didn’t want to make you sad.
Grace tears up.
GRACE
And you didn’t think I’d be sad If you
just died one day?
THERESA
No. I...
Theresa struggles.
GRACE
What?
THERESA
I didn’t want anything to change. People
act differently sometimes.
GRACE
How would you know? You didn’t tell
anyone!
Theresa nods.
THERESA
Maybe I was wrong.
Pink Rev. (05/28/18) BF7 111.
They sit facing each other. Grace cries. Theresa stokes
her face. Grace looks lost.
GRACE
If I knew you were dying, I wouldn’t have
spent my time doing other stuff.
Grace starts to sob. Theresa holds her hands and kisses
them.
THERESA
Don’t cry sweet heart. Don’t. It’s okay,
you’ll be okay.
Grace is shaking her head.
GRACE
I don’t want to be okay!
THERESA
And Isabel will be with you...
Grace looks up at Theresa, feelings colliding.
GRACE
I don’t care about Isabel! You’re my mom.
I don’t want anyone but you. If you don’t
tell me, I can’t say all the things I
want to say...
Tears begin to run down Theresa’ cheeks.
GRACE (CONT’D)
I can’t tell you that... I love you...
and I don’t want you to die.
Theresa cries with her. They hold each other. Kiss each
other’s tears. Theresa looks at Grace, nose-to-nose. She
holds her face.
THERESA
I love you.
We find Grace’s hand, as she intertwines a lock of
Theresa’ hair tightly through her fingers, grasping. She
won’t let go. They cry.
151 INT./ EXT. THERESA AND OSCAR’S HOUSE 151
We see a series of shots around the grounds and inside
the house. Most of them are either nature: A deer
drinking out of the pool - or inanimate objects in the
house that having meaning to the make-up of their lives.
Pink Rev. (05/28/18) BF7 112.
A book on the table with the ring of a coffee cup on it.
In Oscar’s studio, the huge stone, waiting.
Pieces of the architecture of the house.
The boys clothes in the hamper.
152 INT. THERESA CLOSET - EVENING 152
Close on the birds nest with the broken eggs that have
been glued. We can see the cracks.
Past the nest, we focus on Theresa’s dressing table where
she sits, looking in the mirror. She wears a beautiful
dress and is made-up.
After a moment Oscar appears, dressed nicely, looking
handsome, holding a glass of water which he sets down for
Theresa. She takes a couple pills, not having to hide it
any more.
Oscar pulls reading glasses out of his pocket and kneels
down next to her, facing her profile and holds out his
hand. She hands him the earrings she’s having trouble
with.
THERESA
This pair always gives me trouble.
He puts on his reading glasses and focuses on getting the
post through her earring hole. It’s very intimate.
OSCAR
I love being needed. Makes me horny.
She can’t move but she rolls her eyes and smiles.
OSCAR (CONT’D)
Almost...
We see them in the mirror, she watches him in the
reflection, taking in the whole thing.
He smiles and finishes.
OSCAR (CONT’D)
One more second...
He takes Theresa’s phone off the table and holds it
behind them as they pose in the mirror for a selfie.
Pink Rev. (05/28/18) BF7 113.
153 INT. THERESA AND OSCAR’S HOUSE, HALLWAY 153
Theresa walks down the hall and we follow her. She comes
to the boys room and pushes the door open.
154 INT. BOYS ROOM 154
The boys are already in their PJ’s. They have a couple of
friends over. They are all playing “Dance, Dance
Revolution”, on X-Box; all dancing like maniacs.
She watches them for a moment then walks in front of the
TV blocking it, facing the boys.
THERESA
A dance party! Oh good! I love to dance!
She starts to dance. They yell and scream, trying to get
her to move. The twins try and push her out. She just
keeps dancing.
TWINS (OTTO AND THEO)
Mom, this is serious, get out of the way.
THERESA
I didn’t know it was serious! I’m sorry.
She hugs them, and they go right back to playing.
THERESA (CONT’D)
Be good for Bellie.
155 INT./ EXT. THERESA’S CAR PARKWAY - LATE EVENING 155
Oscar drives. Theresa looks out her window. Music plays.
After a moment, Oscar turns to her; sensing him, she
turns to him. Oscar opens his mouth, about to speak.
CUT TO:
156 INT. MINETTA TAVERN - NIGHT 156
Theresa, Oscar, and about 30 others, have taken over the
whole back room of this village bistro. A mixture of
Theresa’s work associates and friends.
Isabel sits with Grace midway down the long table.
Theresa and Oscar sit together at the end, surrounded
with friends. Someone is mid-toast.
Pink Rev. (05/28/18) BF7 114.
TANYA
There are not many people who have the *
power and tenacity to will their vision
into existence - And in the process to
change the way our industry works. Not to
mention employing over a thousand people,
raising a family and, oh yeah, making a
shit load of money.
They all laugh. We are with Isabel and Grace as they
listen.
TANYA (CONT’D)
I’ve known Theresa for 20 years now, so
when she told me she was thinking of
selling the company I said: ‘don’t I get
a vote?’
He looks at Theresa.
TANYA (CONT’D)
To which she replied: “no”.
Lots of laughter.
TANYA (CONT’D)
So why sell? When you’ve built this big, *
thriving, behemoth of a company. Why? *
SCATTERD GUEST *
Why? Why? *
Everyone laughs. *
TANYA *
That’s what I asked. Why? *
Theresa shakes her head at Tanya. *
TANYA (CONT’D) *
And she said because she likes beginnings *
- and a little bit of hardship. When *
things get to easy, she gets bored. We *
bored her! *
Some jeers and laughter. *
TANYA (CONT’D) *
Theresa, congratulations. We love you - *
We can’t wait to see what you do next. *
And we’re sorry we bored you! *
Big smiles and laughter. *
Pink Rev. (05/28/18) BF7 115.
Isabel touches Grace’s leg in support. Everyone raises a *
glass. *
TANYA (CONT’D)
To Theresa, for bringing us all together.
EVERYONE
To Theresa.
CUT TO:
157 OVERLAP ‘HAPPY BIRTHDAY’ BEING SUNG 157
Oscar carries out a cake that looks more like a
sculpture. Clearly his brainchild.
He sets it down as everyone finishes singing happy
birthday. Theresa looks embarrassed by the show of
affection. She looks at the crazy cake.
Pink Rev. (05/28/18) BF7 115A.
Takes a deep breath and blows out the candles. It takes a
couple tries. People clap. Theresa looks at Oscar and
shakes her head, as if to say, “I hate/love that you did
this”.
He takes some icing on his finger and offers it to her.
Theresa shakes her head but eats it. A deep breath and
she stands.
THERESA
Okay, okay...
Everyone claps.
THERESA (CONT’D)
Thank you, thank you very much.
Just to be clear, my birthday is not
until next month and 52 is not exactly a
landmark birthday, but thank you for
being here and for this cake which is
clearly a creation of my husbands fertile
imagination.
She gazes at him.
THERESA (CONT’D)
(to the crowd)
I think you all know that he’s a
brilliant artist. You see his work all
over our office.
(promoting)
But you may not know that he has a show
up - at Anita Rodgers on Greene... *
between Spring and Broome. So if you’re *
in the neighborhood stop by. Maybe buy a
piece?
People laugh. Theresa refocuses.
THERESA (CONT’D)
(a moment)
I had always thought of artists as flaky
and impractical. So you can imagine my
surprise when I fell in love with one. I
thought I was going to marry a nice
banker.
A big laugh.
THERESA (CONT’D)
But thank goodness there are no nice
bankers.
More laughter. Theresa looks down at Oscar. A long pause.
Pink Rev. (05/28/18) BF7 116.
THERESA (CONT’D)
Do you know what he said to me in the car
on the way here?
He takes a deep breath. She turns back to the crowd and
quotes him.
THERESA (CONT’D)
‘Is it us moving through the world, or
the world running past us?’
Some sounds of acknowledgement from the group. She’s very
emotional but pushes it back.
THERESA (CONT’D)
To which I replied, “Let’s not take the
Northern State, traffic is horrible this
time of day”
Lots of laughter. She looks at Oscar and mouths “I love
you”. He takes her hand and kisses it.
Theresa gathers and switches back to business mode.
THERESA (CONT’D)
But this is not about me, it’s not about
my family. This is about us and our
company and what we’ve accomplished.
Together. I know that many of you are
wondering what our company is going to
look like after the sale.
She makes brief eye contact with Grace who sits listening
next to Isabel. Theresa turns away and addresses the
other guests.
THERESA (CONT'D)
I’d be lying if I didn’t acknowledge that
there will be a period of transition.
But I must stress how important it was
for me to find a partner who would not
just continue our culture, but add to it.
Making it more dynamic, with more
resources, greater reach. So if you ask
yourself do I feel uncomfortable and the
answer is yes, then GOOD, cause that kind
of discomfort leads to growth. That kind
of discomfort makes you challenge
yourself, that kind of discomfort is
transformative...
Oscar looks down at Grace and Isabel.
MUSIC OVERLAPS - “Brick House”, by the Commodores.
Pink Rev. (05/28/18) BF7 117.
158 LATER IN THE EVENING 158
Tables and chairs have been moved and a dance party has
broken out.
Pure abandon, as everyone dances. Oscar and Theresa let
loose.
159 INT. THERESA AND OSCAR’S BEDROOM - 2AM 159
Theresa sits on the bed in her nightgown and robe, she
looks tired and pale. Oscar brushes his teeth in the
bathroom. Her back is turned to him.
OSCAR
I meant to tell you, the school called to
suggest that we split the boys into
separate classes after winter break. They
think it would be good for their
confidence.
Oscar finishes brushing and comes in.
OSCAR (CONT’D)
I just worry about that one teacher,
Janet... She seems a little melancholy
for 3rd grade.
She doesn’t answer. Looks to be really struggling.
THERESA
Why are you telling me this?
Oscar sees she doesn’t look good. He goes to her.
OSCAR
Are you okay? Let me get you a
painkiller.
He goes.
THERESA
I don’t want it.
Oscar stops. He sits with her.
THERESA (CONT’D)
I want to know why you are telling me
this? About the boys.
Oscar looks at her, confused.
Pink Rev. (05/28/18) BF7 118.
OSCAR
Because we have to decide...
Theresa looks at him.
THERESA
We don’t need to decide anything anymore.
Oscar swallows hard. She is exhausted and vulnerable.
THERESA (CONT’D)
You need to decide on your own because
I’m not going to be here.
Oscar is pained. Theresa can’t believe her own words.
THERESA (CONT’D)
I’m not going to be here.
She is baffled. Oscar puts his arms around her. She takes
him and makes her look at him.
THERESA (CONT’D)
Do you think you’ll be with Isabel when
I’m gone?
Oscar shakes his head.
OSCAR
Stop.
THERESA
I want to know...
OSCAR
Theresa, I love you.
She looks desperate.
THERESA
I don’t feel well.
Oscar holds her and she lets him. Suddenly, she looks
terrified.
THERESA (CONT’D)
Where will I go?
She’s like a child asking about death.
THERESA (CONT’D)
(adamantly)
Where will I go?
Pink Rev. (05/28/18) BF7 119.
He looks at her filled with compassion.
OSCAR
I don’t know.
She lets all her anger and fear out while he holds her.
THERESA
(screaming)
I don’t want to die!
(more)
I don’t want to die...
She crumples in his arms.
THERESA (CONT’D)
I’m not done! I’m not done!
She slides out of his arms and onto the floor, thrashing
and struggling. Oscar tries to contain her.
OSCAR
I know, baby, I know...
He holds her as she screams and sobs.
OSCAR (CONT’D)
I’m with you. I’m with you...
They sob together.
160 EXT. HOUSE - NIGHT 160
The wind blows in the trees.
A small animal listens for danger.
Rain begins.
TOLLING OF A BELL.
161 EXT. WOODS, NEAR HOUSE - DAY 161
On feet walking. Nature sounds.
Wider to see Oscar, Isabel, Grace, and the boys walk in
the woods together, holding a box of Theresa’s ashes.
They stop in a clearing and open the box. Oscar turns the
box over and the ashes blow. They all watch as the ashes
disappear into the air and the earth.
Pink Rev. (05/28/18) BF7 120.
Isabel leans down and helps one of the twins zip up his
sweatshirt. The camera moves past them to find Oscar’s
sculpture sitting in the woods. He has shaped and
intertwined the stone he was working on with part of the
fallen tree and it stands quietly amongst the forest. A
memorial.
FADE DOWN/FADE UP
162 EXT. INDIA, CROWDED STREET - DAY 162
A cab honks its way through traffic. Isabel is in the
back. She looks out.
163 EXT. ORPHANAGE - AFTERNOON 163
Isabel gets out of the cab in front of the orphanage.
She breathes deeply, taking it all in. A moment later
Preena appears. She and Isabel embrace. Preena takes
Isabel’s hand and excitedly leads her in.
They walk into the courtyard. Changes are already
noticeable.
Preena happily points things out.
- Boxes that contain medical supplies. Food.
- New soccer goals on the field.
- IN THE SLEEPING AREA: New mattress and bunks. Isabel
smiles.
164 INT. ISABEL’S OLD ROOM, INDIA - LATER 164
She goes through the few belongings she has. Not a lot.
Remnants from another life. She divides it in a ‘to keep’
pile, and a ‘throw away’.
She hears some voices of children who are returning from
their errands.
Footsteps, then Jai appears in the doorway.
JAI
Miss Isabel!
She smiles wide. Opens her arms. Jai runs into them.
Pink Rev. (05/28/18) BF7 121.
I
S
A
B
E
L
I
m
i
s
s
e
d
y
o
u
.
J
A
I
I
m
i
s
s
e
d
y
o
u
t
o
o
.
P
i
n
k
R
e
v
.
(
0
5
/
2
8
/
1
8
)
B
F
7
1
2
1
A
.
He remembers something and drags her outside.
165 EXT. ORPHANAGE COURTYARD - CONTINUOUS 165
He points to the corner of the roof where a bird has
built her nest.
JAI
Look.
Three baby birds. Isabel lights up.
ISABEL
Amazing.
JAI
(proudly)
I have been up there.
ISABEL
Really?
JAI
Yes. Miss Preena brought a ladder. I
watched the mother feed them.
Isabel looks at the 3 little birds, as they open and
close their little mouths, awaiting a feeding.
ISABEL
What does she feed them? Lentils?
He laughs.
ISABEL (CONT’D)
Vindaloo?
JAI
No, Miss Isabel! Worms!
ISABEL
Oh, yuck.
He smiles. Isabel looks at him.
ISABEL (CONT’D)
Jai, I want to ask you something.
He waits innocently. She bends so she is eye to eye with
him.
Pink Rev. (05/28/18) BF7 122.
ISABEL (CONT’D)
I was wondering if you might like to come
to New York with me?
Jai looks confused.
ISABEL (CONT’D)
(tenderly)
To live.
Jai’s little brow furrows.
ISABEL (CONT’D)
We could come back here and visit as much
as you want.
JAI
But this is my home. I want to stay here.
Isabel’s face falls for a moment. Not what she was
expecting.
JAI (CONT’D)
I would miss my friends.
Isabel nods. She wants to make sure he understands.
ISABEL
The thing is, I have to live there. So we
won’t see each other as much.
Jai thinks it over for a moment.
JAI
You can come and visit.
She thinks, then nods.
ISABEL
I can.
We hear the other kids beginning to play on the soccer
field. Jai’s attention is drawn there.
ISABEL (CONT’D)
You want to go play?
He nods enthusiastically.
ISABEL (CONT’D)
Okay, go.
He smiles. One more hug then he’s off.
Pink Rev. (05/28/18) BF7 123.
166 INT. ISABEL’S OLD ROOM, INDIA - CONTINUOUS 166
Isabel walks back in her room, alone. ON HER FACE as she
gathers herself emotionally.
Something across the room catches her eye. It’s a little
mirror she kept over her wash basin. She sees herself in
the reflection. Lets herself look. It’s one of those
naked moments, where you can really see yourself.
167 EXT. ORPHANAGE - A FEW MINUTES LATER 167
A game is being played on the soccer field. Jai runs
after the ball.
Isabel appears on the periphery of the field and watches.
As she does, we rise up and up; bird’s point of view.
SLOWLY FADE TO BLACK.
Pink Rev. (05/28/18) BF7 124.

`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
