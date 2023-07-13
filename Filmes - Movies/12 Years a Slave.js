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

12 Years a Slave
 john ridley and Steve McQueen
 based on the book "12 Years a Slave"
 by
Solomon Northup
05.18.11
FADE IN:
EXT. ANIMAL PEN - DAY
We are outside of a smallish animal pen. It sits in back
of some wooden structures. The build and design is that
of early 19th century American. It would pass for urban
and commercial as opposed to agrarian. Within the pen we
see SEVERAL SHEEP grazing.
Into the pen walks a BUTCHER. He is a white man in his
mid-forties. Without any particular regard he takes up
one of the sheep, and wrestles it into a shack-like
structure.
INT. ABATTOIR - LATER
The shack is a smallish abattoir. We see the Butcher
sitting on a bench next to the sheep. With sheers in
hand, the Butcher clears the wool from the sheep.
Once the sheep is clean, in a very matter of fact manner,
the Butcher binds the sheep's rear legs, slits its
throat, then hangs it upside down allowing for the animal
to bleed out. The butcher then pulls the intestine from
the animal immediately after slaughter while the gut is
still hot. These bundles are put into large containers
and await collection by the DRESSER.
INT. DRESSER'S - DAY
We see now the DRESSER taking the casings from a pot of
cold water. He then removes all membranes except for the
muscle fibers. The casing is now ready for sorting; the
casing is checked for length, color and general
condition.
Selected casings are grouped together in HANKS.
INT. STRING MAKER'S - DAY
We see now a STRING MAKER working with the hanks, using a
BLADE to split them into RIBBONS. The next step is to
whiten the gut with sulphur fumes before they are combed
through straightening the ribbons.
Lastly, the String Maker takes some strings and WRAPS
THEM IN A VERY NEAT LITTLE PACKAGE.
EXT. STREET - AFTERNOON
The String Maker walks the package along the streets of
Saratoga, New York. It is best known as the location
that British General John Burgoyne surrendered to
American General Horatio Gates at the end of the Battles
of Saratoga on October 17, 1777, often cited as the
turning point for the United States during the American
Revolutionary War. The town line is formed by the Hudson
River and is the border of Washington County. Fish Creek,
a tributary of the Hudson River, is the outflow of
Saratoga Lake. It is a fairly modern township, but in
the middle 1800s it is far from pristine. THERE IS MUD
AND MANURE EVERYWHERE, AND IT IS NEARLY IMPOSSIBLE TO
KEEP ANYTHING CLEAN. This state, however, is the norm
for the era and goes uncommented upon.
The String Maker arrives to a TOWNHOUSE. Using a KNOCKER
that hangs at the door he raps, then calls to the
occupant:
STRING MAKER
Mr. Northup? Are you there Mr.
Northup?
INT. TOWNHOUSE/STUDY - LATER
We are close on a PAIR OF HANDS. BLACK HANDS. They
unwrap the package and display the strings.
WE CUT TO the hands stringing a violin. It's not a high
end piece, but it is quite nice.
WE CUT TO a wide shot of the study. Sitting in a chair
with violin in hand is SOLOMON NORTHUP; a man in his late
twenties. Everything about Solomon, his mein and manner,
is distinguished. But he, too, seems a hardy individual.
Someone who has known manual labor in his time.
Solomon begins to lightly play his violin, as if testing
the strings, their tuning. Satisfied, Solomon begins to
play vigorously. As he does, we make a HARD CUT TO:
INT. HOUSE/LIVING ROOM - EVENING
We come in on a lively affair. A dinner party is being
thrown with the confines of a fairly stately house. In
attendance are EIGHT COUPLES. All are WHITE and all are
FAIRLY YOUNG, in their early twenties. The men and women
are dressed in very fine attire. We should get the sense
that for the most part they are people of means.
The furniture has been set aside in the living room. At
the moment the couples are engaged in the dancing of a
REEL. Most likely they would be dancing "the reel of
three," in which, as the name implies, three dancers
weave in and out of one another, completing a figure 8
pattern on the floor, usually in six or eight bars of
music.
The music they are dancing too is being played by
Solomon, having cut directly from the tune he was
previously playing. He plays with a light determination,
and in no way seems possessed with empty servitude.
12 Years a Slave 05.18.11 2.
Solomon concludes the reel, and the dancers break into
enthusiastic applause, which is followed by thanks and
congratulations by the group. It should be clear that
despite their respective races there is much admiration
and appreciation for Solomon's abilities.
INT. NORTHUP HOUSE/BEDROOM - MORNING
It is a Saturday morning. Clad in her "finest attire" is
ANNE; Solomon's wife. A few years younger than Solomon.
She is lighter in color than Solomon as well. We see
also the Northup children: ELIZABETH, who is ten,
MARGARET, eight and ALONZO who is five. They are
handsome, and well groomed kids. Anne straightening up
the children. She finishes, she rises up and stands
behind them, almost as if preparing to pose for a
portrait.
They all wait a moment, then Solomon enters the foyer.
He stands, and looks admiringly at his family.
ADMIRINGLY stressed. It isn't that he doesn't have love
for them, he does as well. But in the moment, he truly
admires his greatest accomplishment: a family that is
healthy and well and provided for. He goes to his
children, and hands each a coin.
He moves, then, to Anne. Gives her a kiss on the cheek.
The children giggle at the sight.
EXT. STREET - DAY
Solomon and his family are now out walking along the
streets and groves of Saratoga.
The streets are well populated this morning with many
people out strolling. Most are WHITE, but there are
BLACKS as well. They are FREED BLACKS who mingle fairly
easily - though not always completely - with the whites.
We see, too, a few BLACK SLAVES who travel with their
WHITE MASTERS. These pairings are largely from the south
and - despite the fact the blacks are slaves - they are
not physically downtrodden, not field hands. They are
well dressed and "leading apparently an easy life" -
comparatively speaking - as they trail their masters.
Among the slaves, we see one in particular; JASPER. As
he trails his MASTER he can't help but note Solomon and
his family as they make their way INTO A STORE. His
intrigue of this most handsome and harmonious group
should be obvious.
With his Master occupied, Jasper moves slyly toward
Parker's store. Clearly his intent is to have dealings
with the Northups.
12 Years a Slave 05.18.11 3.
INT. STORE - LATER
We are inside the store of MR. CEPHAS PARKER, a supplier
of general goods. Solomon greets him with:
SOLOMON
Mr. Parker.
PARKER
Mr. Northup. Mrs. Northup.
Though little is stated, their is clearly familiarity
among them.
With money in hand the Northup children move quickly
about the store looking for items to purchase.
At the checkout counter sits a portrait of WILLIAM HENRY
HARRISON, the edges draped in black crepe. Before the
book sits a LEDGER. Mr. Parker asks of Solomon:
PARKER (CONT'D)
If you would, Mr. Northup, sign
our condolence book. My hope is
to find a way to forward it to the
Widow Harrison. Sad days for the
nation.
SOLOMON
But brighter times ahead.
As Anne looks over some silks and fabrics, Solomon eyes a
new violin. He asks of Parker:
SOLOMON (CONT'D)
May I?
PARKER
It would be my pleasure. Could I
trouble you for a waltz, sir?
Solomon does a quick tuning of the instrument, then into
a waltz; lively and well played. The Elizabeth and
Margaret clasp hands and dance. There is laughter and
smiles.
As Solomon plays, Jasper enters the store. He stands for
a moment, again in seeming admiration of Solomon. While
far from pathetic, Jasper is the definition of a
subservient man.
As Solomon concludes to the applause of Parker and the
children:
JASPER
Suh... A word, suh? I could not
help none but take note of yahself
and yah family as yah made yah
way. My congratulations to yah.
Yah Missus and chil'ren be very
12 Years a Slave 05.18.11 4.
(MORE)
handsome 'n must be'a great
regard. My name, suh, is Jasper.
I am travelin' to Saratoga with my
massa. Massa Fitzgerald. And I
will insist to yah, suh, that I am
well provided fo'. Yah can see
that jus by my adornments. And I
never want for no meal or 'fo
warmth at night. Massa Fitzgerald
is a fine man. Very fine
Jasper looks to Parker, then steps closer to Solomon and
speaks a bit conspiratorially. The following comes from
him as though it is a thought he has wrestled with for
some time:
JASPER (CONT'D)
But it is my desire I should not
spend my life in his servitude.
It is my quiet desire that I
should have a missus of my
choosin', raise up young'n and
provide 'fo 'em as I sees fit. It
is a desire I keep inside me, and
easily so, when I am south.
Freedom at best a fleetin' notion.
But on travels north, if I can be
true; I can hardly contain my
wantin' for liberty. I am anxious
for it. I am anxious to escape.
But I am anxious all the same of
the punishment that would attend
my recapture. My question to you,
suh, is of the best and surest
method of effecting my flight.
SOLOMON
The only answer I can give...
Watch your opportunities and
strike for freedom.
JASPER
What opportunities? And how shall
I take advantage of them?
Solomon isn't sure how to respond. It's easy to speak of
freedom, but not how it is gained.
WE HEAR THE BELL AT THE DOOR. It's Jasper's Master.
He's stern, clearly displeased.
FITZGERALD
Jasper! Jasper, come along.
(to Parker)
I apologize for any intrusion,
sir.
SOLOMON
No, intrusion.
12 Years a Slave 05.18.11 5.
JASPER (CONT'D)
Fitzgerald looks to Solomon. It is a cold glare as
though he wasn't speaking to, and has no interest in a
response from a black man. Looking back to Parker:
FITZGERALD
Good day, sir.
INT. NORTHUP HOUSE/DINING ROOM - EVENING
The family now sits around the dinner table, the meal
mostly finished. Solomon, the very definition of a man
in repose - sits at the head of the table reading from a
NEWSPAPER. He reads to the rest of the family solemn
news of the funeral arrangements for the recently
deceased President Harrison.
SOLOMON
"Thus has passed away from earth
our late President. His voice was
still fresh in the ears of his
countrymen when it was hushed in
death. The tongue of calumny had
not time to poison his fame. He
has passed from the praise of men
to receive the plaudit of his
heavenly Father. Let us in this
bereavement bow meekly to the
divine will, and hear the voice of
the Sovereign of the Sovereign
saying be still and be with God."
A long moment of quiet, the family continuing to eat.
Then, from Elizabeth:
ELIZABETH
Will you read it again?
Solomon starts from the top of the article.
SOLOMON
"During the morning, from sunrise,
the heavy bells had been pealing
forth their slow and solemn toll
while the minute guns announced
that soon the grave would receive
its trust. Our city as well as
our entire nation has been called
to weep over the fall of a great
and good man. One who was by the
wishes of a large majority of our
people raised to fill the highest
place of trust within their gift.
William Henry Harrison, the first
chief magistrate who has died
during his term of service."
12 Years a Slave 05.18.11 6.
INT. NORTHUP HOUSE/CHILDREN'S ROOM - NIGHT
The children are put to bed by both Solomon and Anne.
They are tucked in, and each given a kiss good night.
INT. NORTHUP HOUSE/BEDROOM - NIGHT
Solomon and Anne are now preparing for bed themselves.
Anne washing her face in a basin as Solomon changes into
his night clothes. The limited interaction of the two
should be very perfunctory. Like many married couples
they've just become very accustomed to one another.
EXT. NORTHUP HOUSE - MORNING
We are just outside the Northup house. A CARRIAGE waits
with a DRIVER. Anne and the children are dressed for
travel as the Driver loads bags into the carriage.
Anne gives her husband a kiss.
SOLOMON
Travel safely.
ANNE
Stay safely.
Anne and the children load up. The Driver chides the
horse, and the carriage heads off. Solomon waves a
hearty good bye to his wife and children.
EXT. STREET - DAY
Solomon is now out for a stroll. As he crosses near MR.
MOON'S TAVERN, he passes two men - two in particular -
who stand outside conversing with MR. MOON himself:
MERRILL BROWN and ABRAM HAMILTON. Brown is about 40,
with a countenance indicating shrewdness and
intelligence. Hamilton is closer to 25, a man of fair
complexion and light eyes. Both are finely, if perhaps a
bit garishly, dressed. Hamilton, as Solomon describes
him, slightly effeminate.
Moon, spotting Solomon:
MR. MOON
Call the Devil's name... There he
is now. Mr. Northup... I have
two gentlemen who should make your
acquaintance. Messrs. Brown and
Hamilton.
BROWN
Sir.
12 Years a Slave 05.18.11 7.
MR. MOON
Mr. Northup, these two gentlemen
were inquiring about distinguished
individuals, and I was just this
very moment telling them that
Solomon Northup is an expert
player on the violin.
HAMILTON
He was indeed.
SOLOMON
Mr. Moon is being overly gracious.
BROWN
Taking into consideration his
graciousness and your modesty, may
we trouble you for a moment of
your time to converse, sir?
INT. MR. MOON'S TAVERN - LATER
We make a jump cut into the tavern. Solomon, Brown and
Hamilton are sitting at a table. Brown and Hamilton
drink lightly. Solomon abstains.
SOLOMON
A circus?
HAMILTON
That is our usual employee. The
company currently in the city of
Washington.
BROWN
Circus too constricting a word to
describe the talented and merry
band with which we travel. It is
a spectacle unlike most have ever
witnessed. Creatures from the
darkest Africa as yet unseen by
civilized man. Acrobats from the
Orient able to contort themselves
in the most confounding manners.
Men of great strength...
HAMILTON
And Mr. Brown himself; an
internationally renowned
pantomimist.
BROWN
You are too kind.
HAMILTON
As your talents are too great.
12 Years a Slave 05.18.11 8.
BROWN
We are on our way thither to
rejoin the company having left for
a short time to make an excursion
northward for the purpose of
seeing the country, our expenses
paid by an occasional exhibition.
HAMILTON
The reason for our inquiry with
Mr. Moon...
BROWN
Yes. We had just a devil of a
time in procuring music for our
entertainments. Men of true
talent seemingly in short supply.
As we were discussing our
predicament, Mr. Moon suggested we
make acquaintance with you,
praising your skills at every
opportunity.
SOLOMON
Gentlemen...
BROWN
We offer this, desperate as we
are; If you could accompany us as
far as New York... We would give
you one dollar for each day's
service and three dollars for
every night played at our
performances. In addition we
would provide sufficient pay for
the expenses of your return from
New York here to Saratoga.
HAMILTON
An opportunity to see the country
with the occasional exhibition
from which to accrue expenses. If
there is any way in which you
would give consideration to the
offer...
SOLOMON
(enthusiastically)
I will give more than
consideration. I will agree.
Immediately. The payment offered
is enticement enough, as is my
desire to visit the metropolis.
Both Brown and Hamilton display broad smiles:
HAMILTON
We are delighted, sir. So
delighted. Though we would add
that our travel plans--
12 Years a Slave 05.18.11 9.
BROWN
We would like to depart with
haste. However, it is understood
if there are arrangements you need
to attend to.
SOLOMON
As luck would have it, my wife and
children are traveling. I will
write her of our plans, then we
may go.
INT. NORTHUP HOUSE/BEDROOM - LATER
Back in his house, we see Solomon packing: putting some
clothes in a travel case, and collecting his violin as
well.
INT. NORTHUP HOUSE/STUDY - LATER
Solomon sits down to write a letter; pen poised over
paper with already a few lines written. But Solomon
thinks better of it. WITH LITTLE THOUGHT HE TEARS THE
PAPER AND SETS IT ASIDE. WE SHOULD GET THE SENSE THAT
THE ABSOLUTE VALUE OF BEING ABLE TO COMMUNICATE BY LETTER
IS LOST ON SOLOMON. THIS FACT WILL HAVE GREAT WEIGHT IN
THE NEAR FUTURE.
EXT. NORTHUP HOUSE - LATER
Solomon is exiting. Brown and Hamilton are waiting.
They ride in a covered carriage led by a pair of "noble"
horses.
HAMILTON
No letter to post?
SOLOMON
No need. My return would be as
soon as my family's.
BROWN
We're off then.
INT. PUB - EVENING
We find ourselves in a roadside pub. It serves the
purpose of drinking and diversion, and little more. This
is the locale at which Brown and Hamilton are currently
engaged in putting on one of their "entertainments."
We see Hamilton at the door, collecting receipts. WHAT
LITTLE AUDIENCE THERE IS, IS ALREADY IN PLACE. There is
nothing more for Hamilton to collect. Brown is at the
head of the space entertaining a PARSE AUDIENCE AND NOT
12 Years a Slave 05.18.11 10.
OF "SELECT CHARACTER." Solomon provides the music on his
violin.
As Solomon plays, Brown goes through and act of
pantomiming the throwing of balls, dancing on a rope,
frying pancakes in a hat, causing invisible pigs to
squeal. Basically it's some pretty lame stuff. Not
nearly the calibre one would expect to find as part of a
great "carnival."
INT. BOARDING HOUSE - LATER
Solomon, Hamilton and Brown sit down to eat. Hamilton
and Brown drink, but again Solomon abstains. Though
Solomon remains cool, Hamilton and Brown put up a great
show of being disappointed as Hamilton counts out what
little money was collected.
HAMILTON
If it's not anything, it's next to
it.
BROWN
I have not seen an audience so
sparse...
HAMILTON
Not an additional tip from a one
of them. They expect to be
entertained for nothing.
BROWN
And not satisfied a bit despite
giving them more than what they
paid for.
SOLOMON
It's the national mood. There's
too much grief to make room for
frivolity.
BROWN
I think we won't see a true
audience until Washington. We
should make it our objective to
return with all due speed.
HAMILTON
My sincerest apologies, Solomon.
SOLOMON
No need.
HAMILTON
You were promised opportunity, and
you were given none.
12 Years a Slave 05.18.11 11.
BROWN
The opportunity is with the
circus. A two man show poorly
promoted, what were we to expect?
But the circus bills itself.
HAMILTON
True.
BROWN
It arrives to each town with a
hoopla and leaves with a flourish.
HAMILTON
Very true.
BROWN
And with the summer season
approaching its tour will be
vigorous. I have told you of the
circus with which we are
connected. Creatures from the
darkest of Africa. Acrobats from
the Orient who--
SOLOMON
You have described it, yes.
BROWN
Magical. It is simply magical. A
constant whirlwind of sights and
sounds. All witnessed by a crush
of humanity, excitement spilling
from their hearts. Yes. We need
to return immediately to
Washington. Solomon...I believe
us familiar enough now, but
forgive me if I am bold...would
you consider making the trip with
us?
Solomon gives a bit of a laugh at the idea.
BROWN (CONT'D)
I realize our promises have fallen
short to this point, but I can
guarantee high wages and an
enthusiastic audience.
HAMILTON
Entertaining at pubs and inns has
it's place, but a man of your
skills deserves better.
BROWN
Hear, hear.
HAMILTON
And more importantly you would
build your own name and following.
12 Years a Slave 05.18.11 12.
(MORE)
The circus tends to attract those
with the highest of reputations.
An introduction here and there
could amount to a lifetime of
reward. Now would be the time.
With your family away, an
opportunity presents itself.
BROWN
Said as fellow artists as well as
a businessmen. Well worth the
effort at least.
Solomon considers... Clearly their aggrandizing has an
effect on Solomon.
SOLOMON
You present a flattering
representation. How can I say no?
HAMILTON
Oh, very good, sir. Very good. I
cannot recall being so excited.
BROWN
There is a practical concern. If
you are to continue one with us
you should obtain your free
papers.
SOLOMON
Not necessary.
BROWN
Here in New York, no. But we will
be entering slave states and as a
matter of precaution... It's to
all our benefit we should not have
to come to account for your well
being.
HAMILTON
Six shillings worth of effort
could well save much trouble
later.
BROWN
We'll go to the Customs House in
the morning, then travel on. Good
business all around.
INT. CUSTOM HOUSE - MORNING
We are in a PORT-SIDE BUILDING housing the offices for
the government officials who process paperwork. Solomon
is filling out paperwork as Hamilton and Brown watch. A
CUSTOMS OFFICIAL transcribes the information into a
sizable ledger. He stamps the paper, then hands it back
to Solomon.
12 Years a Slave 05.18.11 13.
HAMILTON (CONT'D)
CUSTOMS OFFICIAL
Your free papers, Mr. Northup.
Finished, the Official walks the ledger back to a row of
shelves, and replaces the book among MANY, MANY others.
Though Solomon gives it no thought, it's a little
daunting to consider how precarious his freedom is once
consigned to this ledger.
EXT. WASHINGTON - DAY
Far from the bureaucratic seat of government it is now,
the Washington of the era is as much swampland as city.
Still, the elements that are urban are extraordinary.
The Capital Building, the White House... At this time
the Washington Monument would not yet have been
constructed.
At the moment the populace is displaying both sorrow and
anticipation. Sorrow for the loss of the President and
anticipation of his funeral. Many are dressed in black,
and black crepe hangs nearly everywhere. As well, there
are portraits of Harrison at varying locations.
Having arrived in Washington, Solomon, Hamilton and Brown
RIDE IN ON THEIR CARRIAGE.
INT. GADSBY HOTEL/DINNING ROOM - EVENING
It is a fairly nice hotel. Solomon, Hamilton and Brown
are among several parties eating a meal in the hotel's
dinning room. As with seemingly everywhere in the city
black crepes accessorize the background. Brown counts
out $43.00 on the tabletop. IN COIN. Solomon is
astonished by the amount.
BROWN
Forty-three dollars. All to you.
SOLOMON
That...it's far more than my wages
amount to.
BROWN
An advance from the circus. I
cannot tell you...I honestly wish
you had seen the expression of our
director when I described your
abilities. He was fairly overcome
with excitement.
HAMILTON
You should have invited him to sup
with us.
12 Years a Slave 05.18.11 14.
BROWN
I did. I did, but so many
preparations before the company is
to depart.
SOLOMON
Gentlemen--
BROWN
Of which I have other news, only
slightly distressing. Our
departure is delayed by a day--
HAMILTON
Oh, Dear...
SOLOMON
You have already been far to
generous.
BROWN
But only a day. All the confusion
with tomorrow's procession makes
departure difficult. Solomon, if
you can tolerate us a day more...
HAMILTON
Oh, yes, Solomon, you did want to
see the city. And how could we
make our way without seeing the
great man pass? One more day,
Solomon. Will you stay on?
Relenting, but happily so:
SOLOMON
What can I say but yes?
EXT. WASHINGTON AVENUE - DAY
It is the day of the funeral procession. Despite the
pall, there is, too, a great pageant on display.
Harrison is, after all, the first American Head of State
to die while in office. There is the roar of cannon and
the tolling of bells.
We see the FUNERAL PROCESSION: carriage after carriage in
long succession with thousands following on foot - all
moving to the sound of melancholy music. Though solemn,
it is very much parade like with the populace pushing and
shoving to get a better look at the procession as it
passes. Solomon, Hamilton and Brown among them.
INT. PUB - LATER
A decent though crowded, smoke-filled joint. Very
lively. Solomon is with Hamilton and Brown, who again
12 Years a Slave 05.18.11 15.
drink. Solomon seems far more interested in heading out
to take in the city. The pair must talk over the crowd:
SOLOMON
May we see the President's House?
HAMILTON
Eh?
SOLOMON
You said yesterday we might go and
visit--
HAMILTON
Far too crowded at the moment. We
have time for that, Solomon. All
day. A great man has passed.
Remember him with a drink.
Both Hamilton and Brown hold up their canters to drink.
Solomon, a bit reluctantly, does the same.
BROWN
Another. Our departed President
deserves all the salutation we can
imbibe.
Hamilton and Brown drink again, and Solomon does as well.
EXT. ALLEY - LATER
WE MAKE A HARD CUT to Solomon outside of the Pub, in an
alley, with Brown and Hamilton. He is violently ill,
hunched over and retching horribly.
HAMILTON
That's all right Solomon. No
shame in it. No shame at all.
SOLOMON
I'm not...uugh...not much of a
drinker.
HAMILTON
Just let those ill feelings out.
BROWN
Suppose we won't be going to the
Presidential Mansion. Shame.
HAMILTON
It is. Tis a damn shame. All the
more if Solomon can't summon
himself. We need to get you to
where you can rest.
12 Years a Slave 05.18.11 16.
INT. GADSBY HOTEL/SOLOMON'S ROOM - NIGHT
Hamilton is placing a spittoon near Solomon's bed, where
a prone and reeling Solomon lays. Hamilton sits on the
bed. As he strokes Solomon's sweaty face, Hamilton
speaks sweetly.
HAMILTON
I'm afraid that Brown and I
haven't brought you much luck.
But rough waters bring smooth
sailing. Eventually they do.
SOLOMON
....So...so sorry...
HAMILTON
Shhh. We won't hear it. We
won't.
BROWN
Let him sleep.
HAMILTON
Hmm. A good night's sleep. And
tomorrow...tomorrow you will feel
as well and refreshed as though
the earth were new again.
Hamilton lingers a bit too long and a bit too close to
Solomon for Brown's taste. With more than a bit of
signification:
BROWN
Hamilton! Nothing more we can do
for him.
Displaying an odd sort of disappointment, Hamilton slinks
away from the bed. He crosses to, and BLOWS OUT A
CANDLE. The room goes dark with a blackness more than
night. Brown and Hamilton exit. Solomon lays in the
dark and moans. His sounds becoming MORE AND MORE
DISTRESSED. It's a wonder if he can make it through the
night.
INT. GADSBY HOTEL/HALLWAY - LATER
The door to Solomon's room creeps open. Disheveled,
Solomon ekes out into the hallway. His clothes are
soaked with his own sweat and stained with vomit.
Gingerly, unsteadily, Solomon makes his way through the
space. The hotel seeming oddly - and creepily - empty at
the moment. Eventually, Solomon arrives to a KITCHEN
where he comes upon some "COLORED" SERVANTS. Solomon
does everything in his power to right himself. Despite
being sweaty and covered in his own bile, Solomon works -
actually struggles - to make himself seem presentable.
12 Years a Slave 05.18.11 17.
SOLOMON
Water, please. May I have water?
A FEMALE SERVANT pours a glass of water which Solomon
gulps down, spilling as much on himself as actually
taking in.
GADSBY SERVANT
More, sir?
Again working to be proper:
SOLOMON
It's sufficient.
As he came in, Solomon makes the same effort to propel
himself from the space.
INT. GADSBY HOTEL/SOLOMON'S ROOM - LATER
Solomon is back in bed. From his moans and cries it is
quite plain that a single glass of water was not
sufficient to ease his pain by any means. From the
noises he makes, Solomon sounds as though he's in a fever
dream.
As Solomon reels, THE DOOR TO HIS ROOM OPENS. THREE
FIGURES ENTER. Backlit as they are, we cannot discern
their features. We can tell only that they are men of
decent size. They take hold of Solomon and carry him
away, Solomon too weak and feverish to resist. THE DOOR
CLOSES RETURNING THE ROOM TO DARKNESS.
INT. BURCH'S DUNGEON - MORNING
Solomon stirs, then slowly awakes to his new
circumstances. He finds himself in a nearly lightless
room about twelve feet square with walls of solid
masonry. There is a thick and well-locked door, a small
window covered with iron bars and a shutter. The only
furniture is a wood stool and an old fashioned, dirty box
stove. As Solomon rises he sees that he is in chains,
his HANDS CUFFED - the chain running to a bolt in the
ground - and his LEGS IN IRONS. At first Solomon is
incredulous. But that emotion is replaced first by fury
and then panic. He begins to pull on the chains, fight
against them. He does so with increasing desperation.
Solomon flails about, the sounds of the steel chains
whipping and beating against the masonry. He grunts and
screams without regard as the cuffs and irons bite into
his flesh, but he cannot pull himself free.
After several minutes of intense effort, Solomon tires,
slows, then finally he collapses. And in this collapsed
state he remains.
12 Years a Slave 05.18.11 18.
INT. BURCH'S DUNGEON - LATER
Solomon again awakens. He hears sounds beyond the
door...footsteps. Eventually the door opens. Enter
JAMES BURCH - who runs the slave pen - and EBENEZER
RADBURN who works as a turnkey and overseer.
As the door opens, this is the first light to seep into
the otherwise near-black room. The shine is painful to
Solomon's eyes. With no salutation whatsoever, Burch
asks:
BURCH
Well, my boy, how yah feel now?
Solomon rises up as best he can. With all the resolve he
can put together he states what he considers to be fact:
SOLOMON
I am Solomon Northup. I am a free
man; a resident of Saratoga, New
York. The residence also of my
wife and children who are equally
free. I have papers. You have no
right whatsoever to detain me--
BURCH
Yah not any--
SOLOMON
And I promise you - I promise - upon my liberation I will have
satisfaction for this wrong.
BURCH
Yah no free man. And yah ain't
from Saratoga. Yah from Georgia.
A moment. Not a word spoken among the trio, but Solomon
and Burch do some serious eye fucking, neither man
yielding. Burch says again:
BURCH (CONT'D)
Yah ain't a free man. Yah nothin'
but a Georgia runaway.
Burch waits for Solomon to acquiesce. Solomon does not
in any way. Both men exchange a long and daring stare.
They are clearly at an intellectual stand off. Burch,
leans to Radburn, SAYS SOMETHING WHICH WE CANNOT
DISTINGUISH.
Radburn exits the room, his physical absence is a long
moment. But all the while WE CAN HEAR Radburn's footfall
and his rummaging in the next room. The unseen is
disquieting.
Finally Radburn returns with a pair of "instruments:" a
paddle - the flattened portion, which is about the size
in circumference of two open hands, and bored with a
12 Years a Slave 05.18.11 19.
small auger in numerous places. He also carries a whip.
A cat-o-nine tails; a large rope of many strands. The
strands unraveled and a knot tied at the extremity of
each. Burch says again:
BURCH (CONT'D)
Yah a runaway nigger from Georgia.
Solomon stands with a quiet stoicism. He will say
nothing of the kind.
As that is the case, Solomon is seized by both men, and
roughly divested of his clothing. He is pulled over the
bench, face downward. Radburn then STEPS ON HIS CHAINS
holding Solomon down in a bent position.
With no preamble, Burch begins to beat Solomon about the
back with the paddle. Burch strikes him wordlessly - no
taunting, no sneering. Solomon screaming against each
blow. His back immediately SWELLING WITH WELTS AND
BRUISES.
This beating continues on and on and on until quite
literally Burch WEARS HIMSELF OUT with the effort.
Dripping in sweat and panting:
BURCH (CONT'D)
Yah still insist yah a free man?
SOLOMON
...I...I insist...
Burch regrets hearing this. Not from sympathy, but
rather because he's nearly too tired to go back to
beating Solomon. Yet, as if returning to work, Burch
returns to pummeling Solomon. This time Burch punctuates
the blows with:
BURCH
Yah a slave. Yah a Georgia slave!
Burch continues to strike, and strike... This time until
the paddle SNAPS IN HALF. Burch then GRABS THE WHIP.
Hardly missing a stroke, he whips Solomon relentlessly,
the flails cutting into Solomon's back. Again, Burch's
arm tires before Solomon "breaks."
BURCH (CONT'D)
Are yah slave?
SOLOMON
...No...
BURCH
Are yah slave!
Nothing from Solomon. Burch goes back to whipping and
whipping, and whipping... SOLOMON'S BACK IS NOW TORN
OPEN WITH LACERATIONS AND OOZING WITH BLOOD. Finally
12 Years a Slave 05.18.11 20.
Burch can whip no more. As he pours sweat and sucks air
he chastises a limp Solomon:
BURCH (CONT'D)
I don't want to hear any more shit
about you bein' "entitled" to your
freedom, about being kidnapped or
anythin' whatever of the kind. I
swear what yah jus' got'll pale to
what ya'll receive.
Taking up their instruments Burch exits. Radburn lingers
for a moment. He takes the irons off Solomon's legs.
Opens the window some. As he makes these gestures, in a
patronizing and confidential manner, one wrought with
poor sincerity::
RADBURN
I seen a good many of the black
kind just where yah're; on the
floor face down and back bleedin'.
Sick. Make me sick. Often times
the situation was resolved, and I
think; what was all the beatin'
and abuse for? Things end as they
should, and the violence was for
naught. So why cause trouble when
they ain't no cause for it? Be of
a cooperative nature, and things
don't need be particularly
unpleasant.
(beat)
Or, yah can carry on like yah
been, and I fear yah won't live to
see Sunday next.
With that thought, Radburn exits. Solomon rests. But to
rest seems like giving in to defeat. He begins pulling
on his chains. But for all his struggling, the chain
loosens none. Solomon calls out:
SOLOMON
Help me! Someone help me!
If anyone at all hears him, they do not respond. Solomon
continues his plaintiff cry for assistance.
EXT. BURCH'S DUNGEON - CONTINUOUS
Beginning with a TIGHT SHOT on the shuttered, barred
window of Burch's dungeon - Solomon's cries barely eking
beyond the space - THE CAMERA PULLS BACK from the
building, onto the city until clearly visible is the
Nation's capital. It's icon's of freedom - the WHITE
HOUSE, the CAPITAL BUILDING - fairly mocking Solomon's
captivity.
12 Years a Slave 05.18.11 21.
INT. BURCH'S DUNGEON - DAY
IT IS DAY NOW. The door to the yard is thrown open. The
harsh white light floods all over Solomon. He steps out
into a YARD.
EXT. BURCH'S DUNGEON/YARD - CONTINUOUS
It is a yard just beyond Burch's. The yard is hemmed in
by a brick wall. In the yard are two men, and a boy.
The oldest is CLEMENS RAY a man of about 25 years of age.
He is well educated, but overwhelmed with fear by the
situation. JOHN WILLIAMS is about 20 years old. He is
born and bred a slave, and is lacking in education.
Finally there is a child about 10 years of age who
answers to the name of Randall. Randall is running
around the yard chasing a butterfly.
For a long moment the three men just stare at each other,
wary of one another. Though they are clearly in similar
circumstances, for the moment they choose to keep their
distance.
Radburn is ever present, though he remains off to one
side.
Randall runs up to Solomon, asks rather innocently:
RANDALL
Do you know when my mama will
come?
Solomon doesn't know what to say. Before he has a chance
to answer Radburn crosses over and shoos Randall away.
RADBURN
Get away from him.
RANDALL
When will my mama come?
RADBURN
Yah hear? Get.
Randall runs off. The three men maintain their distance.
INT. BURCH'S DUNGEON - EVENING
Radburn brings food into Solomon, the shriveled meat and
some water. Just barely enough to sustain Solomon. This
time Radburn also has a SHIRT.
RADBURN
Brought a shirt. That old thing
of yours is just rags and tatters.
Need something proper to wear.
Solomon doesn't move for the clothing.
12 Years a Slave 05.18.11 22.
RADBURN (CONT'D)
Go'won. Put it on.
With slow defiance, Solomon does as instructed. He
removes what remains of his old shirt - the one he was
wearing when first kidnapped - and puts on the one
Radburn brought him. The shirt's ill-fitting and dirty.
Despite that, Radburn says:
RADBURN (CONT'D)
There. Tha's fine. Tha's fine.
Got no gratitude?
SOLOMON
...Thank you...
RADBURN
Yah keep bein' proper, yah'll see
how things work out.
Radburn starts to take the old shirt.
SOLOMON
No! It was from my wife.
RADBURN
Rags and tatters. Rags and
tatters.
Taking the shirt, the "rags and tatters" as he calls
them, Radburn exits, locking the door behind him.
Solomon sits with the plate of food before him. He
pushes the plate away rather than eat.
EXT. BURCH'S DUNGEON/YARD - DAY
Solomon, Clemens Ray, John and Randall are in the yard.
ALL STAND NAKED. Though they try to cover their privates
a bit, they are all aware of the uselessness of modesty.
Radburn is present. He has before him A COUPLE OF
BUCKETS OF COLD WATER. He throws water on the naked men.
RADBURN
Go on. Warsh up.
The men, soaking in humility as well as water, begin to
scrub with A SINGLE HARSH BAR OF SOAP passed among them.
RADBURN (CONT'D)
The boy, too. Get him clean.
Solomon takes some soap and rubs it over Randall.
RADBURN (CONT'D)
Scrub now. Git 'em clean.
Solomon scrubs harder. Randall - clearly cold and
uncomfortable - begins to cry, becoming nearly
inconsolable.
12 Years a Slave 05.18.11 23.
RANDALL
Mama...! Mama! Is she going to
come?
RADBURN
Hush him up!
Doing all he can to spare the child from a certain
beating:
SOLOMON
Quiet, please.
RANDALL
Mama!
RADBURN
Shut him up!
Saying anything to keep the boy quiet:
SOLOMON
Your mother will come, I swear she
will, but you must be silent.
Please. Be silent!
On the seeming strength of Solomon's promise, Randall
goes silent. Solomon looks to Radburn, who just throws
water on the soapy men.
INT. BURCH'S DUNGEON - EVENING
Again Solomon sits alone in his dungeon. Again a plate
with a shriveled piece of meat is brought in by Radburn
and set before him. And yet again Solomon pushes the
plate away. A moment after Radburn leaves, then Solomon
PICKS UP THE PORK AND BEGINS TO FEED ON IT. It's as if
he's resigned himself to his circumstances. As he eats
on the meat we hear:
SOLOMON (V.O.)
This can't stand. It is a crime.
EXT. BURCH'S DUNGEON/YARD - DAY
Sitting together out in the yard are Clemens Ray, John
and Solomon. Over time they have drawn trustworthy
enough to speak with one another. At the moment Solomon
is still trying to apply reason to the situation.
Randall wanders about in the background. As usual, he
calls out for his "Mama." By now, however, his calls
should feel like little more than background noise.
SOLOMON
I believe now someone lay in wait
for me. My drink was altered...
12 Years a Slave 05.18.11 24.
(MORE)
We are free men. They have...they
have no right to hold us.
Solomon waits for a response from the others. They give
none.
SOLOMON (CONT'D)
We need a sympathetic ear. If we
have an opportunity to explain our
situation, it is impossible for me
to believe men could be so unjust
to detain us as slaves once the
truth of our case is known.
CLEMENS
Who in your estimation is that
sympathetic ear?
SOLOMON
The two men I journeyed with;
Brown and Hamilton. I'm certain
they're making inquires at this
very moment.
CLEMENS
I would be just as certain they
are counting the money paid for
delivering you to this place.
SOLOMON
They were not kidnappers. They
were artists. They were
performers.
CLEMENS
You know that?
SOLOMON
I...I have no reason to--
CLEMENS
You know for certain who they
were?
FLASHBACK
Very quickly, we get an MOS glimpse from Solomon's POV of
BROWN PERFORMING BACK AT THE TAVERN. His act is shit,
and with 20/20 hindsight perhaps it is even a bit
shittier than we recall. The man an artist? Hardly.
EXT. YARD - CONTINUOUS
Solomon's got to reconcile that recollection of his.
Brown sure wasn't a performer of any merit. More like a
charlatan. As Solomon considers that fact, Clemens
states very plainly:
12 Years a Slave 05.18.11 25.
SOLOMON (CONT'D)
CLEMENS
How I reckon the situation:
whatever past we had...well,
that's done now. The reality to
come is us being transported
southward. New Orleans if I were
to venture. After we arrive,
we'll be put to market.
Clemens Ray chokes a bit. The horrid fate waiting for
them becoming quite clear to him.
CLEMENS (CONT'D)
Beyond that... Well, once in a
slave state I suppose there's only
one outcome.
John's anxiety grows.
JOHN
No.
CLEMENS
I don't say that to give you empty
agitation...
JOHN
For y'all. For y'all they ain't
nothin' but that! But John was'n
kidnapped. John bein' hold as
debt, tha's all. Massa pay his
debt, and John be redeemed--
CLEMENS
Boy--
John is nearly beside himself with panic.
JOHN
Now John's...John's sorry for
y'all, but tha's how it be. Where
y'all goin', yah goin' witout
John. Massa take care of me.
Massa take care.
RANDALL
Mama!
All three men turn and look. At the moment Randall
doesn't call out emptily. At the door to the yard is
Burch along with two women. One in her late twenties;
ELIZA. She is "arrayed in silk, with rings upon her
fingers, and golden ornaments suspended from her ears."
Though a slave, Eliza was a mistress and has - to this
point - lived well. This is reflected in her airs and
her speech. The other is a little girl, light in skin
color, of about seven or eight. This is EMILY, Randall's
half sister.
12 Years a Slave 05.18.11 26.
As she enters the yard Eliza squeals with high delight,
then breaks into tears of both sorrow and joy. Clearly
this is mother and child being reunited.
As Burch locks the yard door, Eliza clutches both her
children. She is overcome with emotion.
ELIZA
My darlings. My sweet, sweet
babes.
INT. BURCH'S DUNGEON - EVENING
Later in the evening. Solomon now shares his space with
Eliza and her children. As the children rest, Eliza
drops into a lament as if pleading her case to Solomon
who lends a sympathetic ear.
ELIZA
Poor innocent things. They know
nothing of the misery they are
destined to endure. The years
previous will have been bliss by
comparison.
Both slyly, and with a bit of aggrandizement:
ELIZA (CONT'D)
I had my master's favor, do you
understand? Above even his own
wife, I had it. Do you know that
he built a house for me? Built it
only on the sole condition that I
reside there with him. The added
promise in time I would be
emancipated. And for nine years
he and I cohabited. And in that
nine years he blessed me with
every comfort and luxury in life.
Displaying the finery she still wears:
ELIZA (CONT'D)
Silks and jewels and even servants
to wait upon us. Such was our
life, and the life of this
beautiful girl I bore for him.
But Master Berry's daughter...she
always looked at me with an unkind
nature. She hated Emily no matter
she and Emily were flesh of flesh.
As Master Berry's health failed,
she gained power in the household.
Eventually, I was brought to the
city on the false pretense of our
free papers being executed. On
our arrival, instead of being
baptized into the family of the
free, we were delivered into
stricter bondage. If I had known
12 Years a Slave 05.18.11 27.
(MORE)
what waited I would not have been
brought here alive. I swear that.
Eliza looks to Solomon. But there is no response that
comes easily on the heels of all that's been said. All
they can do is share Eliza's lament. She turns to her
children, says again:
ELIZA (CONT'D)
My poor children. My poor, poor
babies.
BLACK
INT. BURCH'S DUNGEON - NIGHT
It's the deep of night, all are sleeping. A KEY TURNS IN
THE LOCK AND THE DOOR OPENS. Burch enters with Radburn
beside him. Both carry LANTERNS with them. Hardly
giving Solomon and Eliza a moment to rouse themselves,
Burch demands:
BURCH
Come on. Get yer blankets. Get
up.
Sensing that things will not end well:
ELIZA
No, please don't...
BURCH
I don't want to hear yer talk.
Get in the yard.
ELIZA
Please...
Radburn, stepping in, seeming reasonable:
RADBURN
Ain't no need for all that. Yah
frightenin' the chil'ren.
Putting hand to Randall's head.
RADBURN (CONT'D)
Jus takin' a li'l trip, tha's all.
Don't want to frighten the
chil'ren none over a li'l boat
ride, do yah?
Eliza gives a shake of her head to the negative.
RADBURN (CONT'D)
Alright then. Git yerselves up.
12 Years a Slave 05.18.11 28.
ELIZA (CONT'D)
EXT. BURCH'S DUNGEON/YARD - NIGHT
We now have Solomon, Clemens, John, Eliza and the
children. They are being cuffed together. As John is
cuffed, he pulls back. Scared. He beings in
desperation:
JOHN
John's massa gunna pay his debt.
John's massa gunna come for him.
Not wanting to hear any of this talk, Burch strikes John
several times in the head with a sap-like instruments.
Weakened, but again:
JOHN (CONT'D)
John's massa gunna--
Burch again strikes John until he's quiet. Curiously,
Emily and Randall don't even flinch. Why would they?
They are quite used to seeing this kind of violence.
BURCH
Not a word out of none a yah. Not
a word.
EXT. STREET - NIGHT
Quite literally in the manner of thieves in the night,
Burch and Radburn hustle along their stolen "property."
The streets are deserted. There is no one to help
Solomon and the others if they tried. The group is taken
down to a wharf and a waiting STEAMBOAT.
EXT. ORLEANS - CONTINUOUS
The slaves are taken quickly up a gangplank and onto the
boat as the CAPTAIN AND CREW WATCH, but do not interfere.
INT. ORLEANS/HOLD - NIGHT
The slaves are hustled down into a dark, dank hold among
barrels and boxes of freight...and RATS, where they are
chained to the hull of the ship. Burch comes around and
"checks" the chains; makes sure they are all secure and
locked. Satisfied, he heads up out of the hold. Radburn
follows. Alone in the dark in the hold, Clemens Ray
cries, as does Eliza.
EXT. ORLEANS - NIGHT
The crew casts off, and the steamboat launches, setting
off down the Potomac into the night.
12 Years a Slave 05.18.11 29.
EXT. RIVER - MORNING
By the first rays of the new morning sun, we see the
steamboat making its way down the river. THE SHORELINE
LINED WITH GREENERY.
INT. ORLEANS/HOLD - MORNING
Radburn removes the shackles from the slaves and they are
taken up to the deck.
I/E ORLEANS/DECK - CONTINUOUS
The slaves are brought over to a small table on deck.
They are seated, and are served food by a MULATTO WOMAN.
On occasion WHITE PASSENGERS make their presence known.
Burch comes around to the slaves, a bottle of liquor in
hand. He offers a drink to each of the men.
BURCH
Drink?
The men know better than to demur, and take what's
offered. Burch plays coy, then pours a healthy-sized
drink and offers it to Eliza. The salaciousness of the
act cannot be hidden.
BURCH (CONT'D)
It's good. Nothing harsh.
She drinks, and Burch pours her another. Clearly Burch
is trying to get her greased up.
ELIZA
No. No more, thank you.
Unhappy with the outcome of his efforts, Burch sulks
away. The Mulatto woman could not help but overhear.
Drawing close to Eliza, offering what she considers sage
advice on the sly:
MULATTO WOMAN
You should cheer up. Don't do to
be so down cast. Take what's
offered. Things needn't be no
harder than they are. And if
you're wise...and I can see by
your wares that you are... Well,
a wise woman makes her situation
as pleasant as she can. For
herself...
Stroking Emily's hair
MULATTO WOMAN (CONT'D)
For her child...
12 Years a Slave 05.18.11 30.
Eliza slaps the woman's hand away.
ELIZA
Don't touch her! She will not be
like you.
MULATTO WOMAN
Then she be a slave. Like you.
EXT. NORFOLK/PORT - DAY
The Orleans arrives to Norfolk and is docked. MORE
SLAVES - about 15 in all, of various genders and ages -
are brought on board. Chief among them is ARTHUR, who
fights viciously with his captors. His face swollen and
covered with wounds and bruises. One side of it is a
complete raw sore. "With all haste" is shoved down into
the hold.
Another among them is ROBERT, who is about 19 years of
age. He, like Solomon, is quiet. And like Solomon as
well we can tell there is much going on behind his eyes;
a good deal of silent plotting.
Having taken their cargo as far as they care or need to,
Burch and Radburn depart. They do so without a word
spoken to Solomon or the others.
With this new and sizable batch of slaves on board, the
crew again CASTS OFF, and the Orleans makes its way
again.
Solomon stares down Burch for as long as he can, as if
wishing bad things. As if wanting to exact some measure
of revenge. But the greater insult is that Burch and
Radburn, engaged in conversation, take no notice of
Solomon whatsoever. He is that insignificant to them.
That fact, that reality, makes Solomon boil with a rage
he cannot express in words.
I/E. ORLEANS - DAY
As the brig sails, the slaves are seated and huddle on
deck. The CAPTAIN, along with his first mate - BIDDEE -
move among them, looking them over for prospects to do
labor. He demands of one MALE SLAVE:
CAPTAIN
Stand up.
Immediately, and with much trepidation, the slave does as
told.
CAPTAIN (CONT'D)
What can you do with yourself?
REED
I can...I can clean.
12 Years a Slave 05.18.11 31.
CAPTAIN
You can clean? Mr. Biddee, get a
mop in this one's hands and get
him to swabbing.
BIDDEE
Sir.
The Captain continues to move among the slaves. Arriving
to another:
CAPTAIN
Get up.
Again, and quickly, the slave does as ordered.
CAPTAIN (CONT'D)
What can you do with yourself?
GEORGE
I'm a carpenter.
CAPTAIN
Got no need for that. Two weeks
to New Orleans, you will find a
way to make yourself useful.
GEORGE
I am able with a needle and
thread. Any mending that you
might--
CAPTAIN
Shovel coal is what you can do.
Get him below, Mr. Biddee
The Captain keeps on until he arrives to ROBERT:
CAPTAIN (CONT'D)
Stand up.
Unlike the others, Robert makes no move to stand right
away. With more assertion:
CAPTAIN (CONT'D)
Get up.
Robert stands, but does so with little alacrity.
CAPTAIN (CONT'D)
What can you do with yourself?
In quiet defiance Robert doesn't say a word.
CAPTAIN (CONT'D)
Answer me!
ROBERT
Know how to cook.
12 Years a Slave 05.18.11 32.
CAPTAIN
Let me see your hands.
Robert does as instructed and holds out his hands. The
Captain looks them over.
CAPTAIN (CONT'D)
Clean enough. Get on to the
galley and make yourself of use.
Robert moves away as the Captain continues on to Solomon.
CAPTAIN (CONT'D)
Get up.
Solomon doesn't move. The Captain is clearly getting
tired of the mounting disrespect. He announces to the
remaining slaves:
CAPTAIN (CONT'D)
The next one of you that refuses
me will be bound and thrown
overboard, I promise you that.
Get up!
Solomon rises.
CAPTAIN (CONT'D)
What can you do?
SOLOMON
I play the fiddle.
CAPTAIN
Got no need for that. What else?
SOLOMON
Some farm labor from my youth. As
I young man I worked a gang that
rebuilt a canal.
CAPTAIN
As useless to me as fiddling.
Jack of all trades and master of
none. You can carry a load, can't
you?
SOLOMON
Yes.
CAPTAIN
Then do it. You'll haul from the
hold to the galley, and clean it
when you're done. Mr. Biddee,
another for your charge.
12 Years a Slave 05.18.11 33.
INT. ORLEANS/GALLEY - LATER
As slaves cook, Solomon cleans. He he scurries around
gathering up scraps and places them in a box. As he
cleans, Solomon watches as Robert preps the food. Robert
obviously quite comfortable with a knife. He goes about
his work with both speed and skill.
I/E. ORLEANS - EVENING
Solomon is now up on deck emptying his box, throwing
waste over the side of the vessel.
INT. ORLEANS/HOLD - LATER
Down in the hold the slaves eat, pray. SOME ARE SEA SICK
AND THEY THROW UP. Among all this, Arthur sits and talks
with Solomon. They are removed from the others, as much
as they can be, and they are conspiratorial as Arthur
tells the tale of how he came to be a captive.
ARTHUR
They was a gang of 'em. A true
gang. My mistake: shortenin' my
way home on an unfamiliar street.
Well, they set right upon me. For
whatever reason, they seen me and
think I was low fruit. No, suh.
Was no such a thing. I commence
to swingin'. The resonance of
every blow again' 'em a reminder
of the family I would never again
see if'n they prevailed. I fought
'em. Fought those damned
kidnappers until all my strength
left me. Fought 'em right to they
beat me senseless. And here I was
drug, and here I was dumped. They
got no right to me. I'm free.
Free as them.
SOLOMON
Do you think we can make ourselves
free again? Do you think we can
escape?
Arthur says nothing. He just gives a look to Solomon as
if he's interested in listening to whatever Solomon has
to say.
SOLOMON (CONT'D)
The crew is fairly small. They
don't seem particularly game. Do
you think we can commandeer the
ship?
12 Years a Slave 05.18.11 34.
ARTHUR
I know we git where we travelin',
we'll wish we'd died tryin'. If
we did take her, where'd we sail?
SOLOMON
New York harbor.
ARTHUR
can you get us there?
SOLOMON
I can make every effort.
Arthur considers things for a moment.
ARTHUR
There's the Captain, the Mate...
I count six sailors. If we tried
for them one by one...
SOLOMON
What would we do? Once we've
seized the crew; what would we do
with them?
Very plainly:
ARTHUR
We kill 'em.
This sinks in for a moment, but clearly it is the only
way.
SOLOMON
How would we take them?
ARTHUR
First in the mornin'. We'd be on
them before they knew what; quick
and merciless. Captain and mate
first. Waylay 'em, the others
won't be given ta fight.
SOLOMON
They will if they know death waits
for them.
ARTHUR
They won't know. The ones we
don't kill right off, we tell 'em
they can have their lives if they
submit. Question of when.
SOLOMON
As soon as we can. As soon as
tomorrow.
12 Years a Slave 05.18.11 35.
ARTHUR
Their guard is high. Oughta wait
for when they're not suspecting.
It's two weeks sail to New
Orleans. In five days, six
days...
SOLOMON
All that much farther south.
ARTHUR
And they be all the more tired and
incautious. Make the chore
easier.
Solomon considers this. It makes some sense. There
remains, however, an issue in his mind:
SOLOMON
We need a third. Even with luck
on our side, two can't stand
against eight. We have to bring
another into the conspiracy.
Arthur looks around at the other slaves. He is
unimpressed by their nature.
ARTHUR
They's niggers. Born and bred
slaves. Cringe at so much as a
white man's look. Not one's got
stomach enough fo the fight. Not
a damn one.
SOLOMON
We need another. Two alone will
not succeed. With three we are
nearly guaranteed.
Solomon looks among the salves. There must be at least
one more who's capable of mutiny. Clemens Ray...?
John...? Doesn't seem that way.
INT. ORLEANS/GALLEY
Solomon is back cleaning in the galley. As he cleans, he
again watches Robert prep food. Robert's skill with a
knife is not lost on Solomon.
I/E. ORLEANS/DECK - LATER
It's now Solomon, Arthur and Robert talking, Robert
having evidently been brought into the conspiracy.
Robert seems a little sweaty. Not nervous. Literally a
light but constant sheen of sweat covers him.
12 Years a Slave 05.18.11 36.
SOLOMON
Captain and the mate sleep in the
same cabin. The cook always
sleeps in the galley, and crew's
in the forecastle.
ARTHUR
We two, steal into the captain's
cabin, be done with them.
(to Robert)
We get you a weapon. Sharp,
blunt...don't matter. Wait
outside the crew cabin. Comes to
it, you haveta hold 'em back 'til
we can come.
ROBERT
After the deed, who'ta pilot us?
ARTHUR
Solomon.
ROBERT
Ya'ever pilot a boat?
SOLOMON
We head north. That's all that's
required.
ARTHUR
Then we're agreed. No turning
away now.
ROBERT
When?
ARTHUR
Three days. The morning of the
Sabbath.
INT. ORLEANS/GALLEY - DAY
Again we see Robert and Solomon working in the galley.
Robert doesn't look well. He sweats more than when we
just previously saw him. Despite how he might feel - as
Solomon cleans around him - Robert is capable enough to
secret a knife into Solomon's garbage box.
EXT. ORLEANS/DECK - LATER
We see Solomon emptying the box overboard. As he does,
he collects the knife - looks it over for a moment as if
imagining killing with it - then quickly secrets it away.
12 Years a Slave 05.18.11 37.
INT. ORLEANS/HOLD - DAY
We see Robert down in the hold. Sweating profusely now,
he is also stained with vomit. The Captain is looking
Robert over as Biddee stands close by. THE CAPTAIN PULLS
BACK ROBERT'S SHIRT REVEALING A RASH, HIGHLIGHTED BY
RAISED PAPULES. The Captain knows exactly what he's
looking at. With fear:
CAPTAIN
Small pox.
This strikes all around like lightning. Like a curse
that has fallen. The Captain states again:
CAPTAIN (CONT'D)
It's smallpox.
(to Bidee:)
Get lime spread through the hold.
Keep them on deck, and for God's
sake keep them away from us.
BIDDEE
Sir.
EXT. ORLEANS/DECK - LATER
The slaves are mostly huddled. THEY ARE WATCHED OVER BY
THE CREW. As things are, there will be no chicanery.
INT. ORLEANS/HOLD - LATER
A couple of days on now. Robert lays on a blanket down
in the hold. He is a really, really pitiful sight, his
body covered with pustules.
Solomon keeps clear of Robert, but sits with him.
Between wheezing breathes, he says very weakly:
ROBERT
Solomon... Solomon...
SOLOMON
Yes?
ROBERT
I be right soon. I be right, then
we do as planned.
Solomon doesn't respond. He continues to maintain his
vigil with Robert.
EXT. ORLEANS/DECK - DAY
Days later now. We are back up on the deck of the ship.
ROBERT'S STILL BODY IS BEING SEWN INTO A BLANKET.
12 Years a Slave 05.18.11 38.
Clearly he didn't make it, the ravages of the pox having
done horrid work on his flesh.
Once sewn into the blanket. CREWMEN Then dump the body
over the side of the ship. Solomon watches as the body
churns for a moment in the wake of the vessel...then
sinks beneath the water. Arthur, with no sentimentality:
ARTHUR
Better off. Better than us.
Solomon continues to stare back at the spot where Robert
was dumped as it slips further and further away.
From his pocket he takes the knife. He holds it for a
moment, then lets it slip into the water. There is
nothing to be done with it.
BLACK
EXT. NEW ORLEANS/PORT - DAY
The Orleans arrives to the port of New Orleans and docks.
The port is one of the busiest in the young nation,
vessels of every shape and size, and flying a variety of
flags arrive here. On the dock itself there is a bustle
of activity as goods are loaded and unloaded. It's a bit
of controlled chaos as a VARIETY OF LANGUAGES are spoken
and shouted.
Two men - among many - are awaiting the arrival of the
Orleans. They are WILLIAMS - Arthur's master - and DAVIS
who is the solicitor of Mr. Williams. They both look
like they mean business. The moment the gangplank is
laid they bum rush the vessel, Williams yelling for
Arthur.
WILLIAMS
Arthur...! Arthur!
Arthur, seeing his master, is nearly crazy with delight.
He is, uncharacteristically beside himself. Ironically,
his master now represents "freedom."
ARTHUR
My master. Master Williams, sir!
Master Williams!
Arthur pulls on his chains for Williams, nearly pulling
the other slaves with him.
Davis is no nonsense about the situation.
DAVIS
Who is in charge of this vessel?
CAPTAIN
I am the Captain.
12 Years a Slave 05.18.11 39.
DAVIS
I am the solicitor of Mr. Jonus
Williams. I have documentation
verifying that the Negro named
Arthur is his property.
CAPTAIN
I know nothing of--
DAVIS
You are ordered by court to return
that property immediately, or face
charges of thievery.
CAPTAIN
My duty is to transport goods. I
am not responsible for their
origin.
ARTHUR
Sir...
WILLIAMS
It's all right, Arthur. Your
abductors have been arrested and
confined...
(to the Captain)
Remove these contraptions!
To his mate:
CAPTAIN
Free him!
Biddee does as ordered. Once free, Arthur hugs and sobs
over his master as would a lost and then found child.
WILLIAMS
It's all well, now, Arthur. You
will return home with me.
DAVIS
Consider this notice and warning.
Williams, Davis and Arthur head from the ship. Solomon
rushes to the rail of the ship. He seems both desperate
and hopeful of some aid from Arthur and Williams. But
there is none forthcoming. Williams and Arthur continue
on - Arthur not so much as even looking back in Solomon's
direction. Solomon stands and watches as they fade into
the environs and are gone from sight.
EXT. ORLEANS/DECK - LATER
Hours later. The slaves sit on the deck, baking in the
sun, awaiting their fate.
12 Years a Slave 05.18.11 40.
THEOPHILUS FREEMAN - a tall, thin-faced man with light
complexion and a little bent - moves along the deck
calling out names from a list.
FREEMAN
Platt... Platt! Platt!
None of the slaves respond to him. He begins calling
other names. The slaves STAND as they are called.
FREEMAN (CONT'D)
Lethe. Clemens Ray. Eliza.
Randall. Emily. John. Platt...
Platt!
Freeman looks around. He spots Solomon.
FREEMAN (CONT'D)
Captain, who shipped that nigger?
CAPTAIN
Burch.
Freeman steps to Solomon. He gives him a looking over.
FREEMAN
Stand up.
Solomon does as told.
FREEMAN (CONT'D)
Yah fit the description given.
Why didn't Yah answer when called?
SOLOMON
My name is not Platt. My name is--
Freeman strikes Solomon hard across the face.
FREEMAN
Yer name is Platt, and I will
learn yah yer name so that yah
don't forgin' it.
(to the Captain)
Shackle my niggers. Get 'em to my
cart.
I/E. CART - LATER
Solomon is carted off along with the rest of "Burch's
stock:" Eliza and her children, Clemens Ray, John and
Solomon.
As they travel for the first time Solomon sees true and
severe slavery. These are not the visiting servants,
such as Jasper was back in Saratoga. These are humans
held in strict bondage - herded like cattle, working in
"chain gangs." Slaves are evident not merely by the
color of their skin. The residue and accessories of
12 Years a Slave 05.18.11 41.
slavery are everywhere. Blacks almost universally
display scars - THICK AND HEAVY DEAD TISSUE FROM
LACERATIONS THAT WERE LEFT UNTREATED - brands and are
often missing limbs. Blacks are held in all kinds of
shackles, from simple chains to elaborate bindings, to
neck collars that are spiked. Some are muzzled or forced
to wear bits. THESE IMAGES SHOULD BE A CONSTANT AND
CONTINUAL CANVAS TO THE PIECE. EVER PRESENT, BUT NOT
REALLY COMMENTED ON AS THEY ARE THE NORM. They should be
a reminder that not only are people being oppressed, but
that there is an entire system of oppression in place.
EXT. FREEMAN'S SLAVE PEN - LATER
"Burch's stock:" arrive at Freeman's slave pen. They are
led in by Freeman and his "HOUSE SLAVE" BOB - a mulatto
slave. The yard is enclosed by plank, standing upright,
with ends sharpened instead of brick walls as with
Burch's. Including Burch's group there are about 30
SLAVES in the pen.
Solomon and the others look around and see nothing but
downtrodden and despondent faces who quietly stare back
at this new batch of arrivals.
EXT. FREEMAN'S SLAVE PEN - LATER
The slaves are in various states of undress, men and
women alike. They clean themselves, scrubbing with soap
and water. Women wash their hair. Men shave. Freeman
walks among them, inspecting them as they primp
themselves.
EXT. FREEMAN'S SLAVE PEN - LATER
The slaves are given new clothes. The men are given hat,
coat, shirt, pants and shoes. The women frocks of calico
and handkerchiefs to bind about their heads.
INT. FREEMAN'S/GREAT ROOM - LATER
It's an odd, ironic scene. The slaves are in a large and
fairly ornate room within Freeman's house. Bob plays a
tune on a fiddle - background music - as Freeman tries to
line up the slaves. It has the air of an etiquette
class, though what Freeman is trying to do is coach the
slaves into being more "sellable." He works with them in
groups of five or so.
FREEMAN
Tallest to smallest, understand?
Are yah taller than her?
TALL SLAVE
Yes, sir.
12 Years a Slave 05.18.11 42.
FREEMAN
Then yah'd go before her, wouldn't
yah?
TALL SLAVE
Yes, suh.
FREEMAN
Then do it. Move.
INT. FREEMAN'S/GREAT ROOM - LATER
Freeman continues to instruct. He talks with a slave, a
boy in his teens, with much condescension. As before,
Bob plays a tune. Solomon, moment by moment, become more
and more disgruntled by the playing.
FREEMAN
When yer called, do yah jus'
shuffle over? No. No, yah do
not. Yah move sprightly,
understand?
The slaves nod.
FREEMAN (CONT'D)
Lemme see yah do it. C'mon, boy.
The slave moves to Freeman quickly. Freeman smiles, rubs
the slave's head.
FREEMAN (CONT'D)
Tha's a boy.
(to all)
Yah see how this boy moves?
Sprightly. Now, g'won back over
there.
INT. FREEMAN'S/GREAT ROOM - LATER
The instruction from Freeman continues, as does the
fiddling by Bob.
FREEMAN
Keep your head up. A sense of
direction; that's how yah look
smart. None of those saucer eyes.
Rid yourself of that smile. Look
like a goddamn grinnin' monkey.
Put the least thought in yer head.
C'mon, now. Think of somethin'.
As weary as he can be of Bob's playing, Solomon moves to
Bob, he asks:
SOLOMON
Can you play a reel?
12 Years a Slave 05.18.11 43.
Bob, dismissive:
BOB
Nah. I don't know no reel.
SOLOMON
If I may...?
Bob, looks to Freeman:
FREEMAN
He sick a yah caterwauling. Let
him play, boy. Le's see what he
can do.
Bob reluctantly hands the fiddle over to Solomon.
Solomon tunes it a bit, then begins to play. His fingers
stiff at first, he takes a moment to warm up. But as he
warms up he is, despite the circumstances, masterful.
The slaves all clap along... Some dance along. All
admire his work. Freeman chief among them.
FREEMAN (CONT'D)
Keep on. Keep on.
Solomon continues to play.
FREEMAN (CONT'D)
Hella better than you, Bob. Hella
better.
Bob looks bitter as Solomon plays on.
EXT. FREEMAN'S/GREAT ROOM - DAY
An odd sort of sight, A JUMBLE OF ACTIVITY. CUSTOMERS
have come to see Freeman's lot - the room all gussied up
with flowers. Freeman moves among them, displaying them
as a rancher would prize chattel. Freeman makes the
slaves hold their heads up - "look smart" as he
previously admonished them. They are made to walk
briskly back and forth while customers feel their hands
and arms and bodies, turn them about and ask what skills
they possess. The Customers routinely make the slaves
open their mouths and show their teeth.
At times a man or woman are taken off to the side,
stripped and inspected more minutely.
Randall is made to run, and jump by a PROSPECTIVE BUYER.
Bob, as he's done previously, plays his fiddle.
As this occurs, as a BUYER looks over a MALE SLAVE - his
back lightly scared - Freeman gives the Buyer the soft
sell.
12 Years a Slave 05.18.11 44.
FREEMAN
Too few strokes is a sign they
ain't been broken. Too many tells
yah never will. This is a well
tenderized nigger here.
The Buyer is more curious in Randall.
BUYER
Your price for the boy?
FREEMAN
You see how fit he is. Like ripe
fruit. He will grow into a fine
nigger. Six hundred, and that's
fair and final. I take him
outside these gates I can name my
price.
BUYER
Will you accept a note?
Eliza is beside herself. She begs of the Buyer:
ELIZA
Please, sir, no. My baby boy,
he's my baby. Please don't divide
my family. Don't take my boy
unless you take myself and my baby
as well.
FREEMAN
Eliza, quiet!
ELIZA
You will have the most faithful
slave in me, sir. The most
faithful slave that has ever
lived. There is no way that I
will not serve, but I beg that you
not take my child.
BUYER
How much for the lot?
FREEMAN
The woman is a value in herself.
The child's a treasure. Three
thousand.
The Buyer considers, then demurs.
BUYER
I'll have the boy alone.
ELIZA
Noooo! Please, God, no!
As the Buyer writes out a note, Freeman pulls the crying
Eliza away Randall.
12 Years a Slave 05.18.11 45.
FREEMAN
I will beat the nonsense from you.
BUYER
Come on, lad.
They start away. Randall runs back, crying but
endeavoring to be strong:
RANDALL
Don't cry, mama. I will be a good
boy. Don't cry. I will keep my
head up, and I will look smart. I
will always look smart.
Freeman is wholly unmoved. He tears Randall away,
thrusts him to the Buyer who then pulls the crying
Randall from the room.
RANDALL (CONT'D)
Mama...! Mama!
ELIZA
Nooooo! Noooo!
All watch the price of slavery: the destruction of the
family.
EXT. FREEMAN'S SLAVE PEN - NIGHT
We are back in exterior slave pen of Freeman's estate.
The slaves are bedded down under the night sky. There is
little sleeping going on. Eliza cries to herself as
OTHER SLAVES MOAN LOUDLY AND CONTINUALLY. SOLOMON AMONG
THEM. It as though a pall has fallen over the group.
Eventually at the door to the yard appears Freeman with a
lantern in hand. Bob is at his side. With no concern
for its causation, Freeman is clearly displeased by the
racket.
FREEMAN
Quiet! Sleep, now! What's the
matter with y'all? Sleep!
He looks to Bob.
FREEMAN (CONT'D)
Make 'em sleep.
Bob now wades into the field of slaves. He shoves and
kicks at the offenders, telling them repeatedly:
BOB
Sleep now. C'mon, go on to sleep.
Yah hear Massa Freeman? Sleep.
12 Years a Slave 05.18.11 46.
The moaning continues. Bob's efforts do little. If
anything, the moaning grows louder. Solomon is
insistent:
SOLOMON
...We need a doctor...
EXT. FREEMAN'S SLAVE PEN - DAY
Freeman clearly having no choice but to give in and hire
a doctor; DOCTOR CARR looks over Clemens Ray.
CLEMENS
The pain in my neck and back is
violent. I'm hot and I cannot
stop with my shaking.
DOCTOR CARR
(to Freeman:)
Could be any number of things.
They seem otherwise in good
health. I wouldn't expect it to
be anything stronger than a
passing fever.
Solomon, hearing this, speaks plainly:
SOLOMON
Small pox. On the ship that
brought us down one of our number
died of the disease.
The doctor stares at Solomon for a moment. Clearly this
development isn't a good thing.
EXT. STREET - LATER
Solomon, Eliza, Clemens Ray, John and a few more sickly
slaves are being driven in a wagon by Dr. Carr.
EXT. CHARITY HOSPITAL - LATER
The group arrives to CHARITY HOSPITAL which is built just
outside of the city. It is a fairly large, three story
structure of white marble.
Around the back of the hospital the group sees COFFINS
BEING BUILT AND PREPARED BY CARPENTERS. Dozens and
dozens of them. Not exactly a comforting sight.
INT. CHARITY HOSPITAL - LATER
The group, led by Doctor Carr, enters. Though a
hospital, it doesn't really seems a place for healing.
More a place for dying; a place where the sick are
brought and kept until they can be delivered to the death
12 Years a Slave 05.18.11 47.
which waits for them. As if to underscore this, we CAN
HEAR THE MOANS OF PATIENTS drifting through the hallways.
INT. HOSPITAL/PATIENTS WARD - LATER
It is a large and not particularly sanitary room filled
with row after row of beds. Nearly all the beds are
filled with patients of both sexes and all ages. In this
ward, ALL THE PATIENTS ARE BLACK, and all are suffering
from smallpox. There is very little treatment going on.
Mostly the patients are being made "comfortable," though
even that is relative.
With a few WHITE NURSES - but mostly BLACK WARDS -
looking on the slaves are stripped of their clothing and
given hospital gowns to wear. As they dress, the group
hears THE TOLL OF A BELL.
INT. HOSPITAL/PATIENTS WARD - LATER
A couple of days have passed. Solomon lays in bed next
to Clemens Ray. We are at the height of Solomon's
illness. As with Robert, he is a hideous sight. There
are pustules all over is body, and Clemens as well.
Solomon is nearly blind with pain and suffering. His
cries are pitiable, and blend with the continual wail
that comes from the room.
INT. HOSPITAL/PATIENTS ROOM - LATER
Solomon is being given care by a BLACK WARD. His puss
sacks are being drained. ON OCCASION, IN THE BG, WE HEAR
THE SOUND OF THE BELL TOLLING. Solomon looks over to
Clemens who is in a more advanced state. In some ways
it's as though Solomon's looking at future projection of
himself. Is this what's waiting for him? And under the
circumstances would such an end be so bad?
INT. HOSPITAL/PATIENTS ROOM - LATER
Again, days on. A DOCTOR covers Clemens Ray with a
blanket. Clearly he is dead. The doctor sends off a
WARD. A few moments later, as the body is being taken
away, THE BELL TOLLS.
As he lays in bed, Solomon's head lolls to one side. He
looks toward the WINDOW. The light of the sun flares off
the pane. The glass, poorly made, refracts the sunlight
and casts off a slight spectrum of color. It dances
across Solomon's face. The light in his eyes offering
him more pain the solace, but he cannot help but look at
it. As he looks toward the light, as his eyes flutter
between life and lifelessness...
12 Years a Slave 05.18.11 48.
INT. NORTHUP HOUSE - FLASHBACK
It is years prior. The odyssey that awaits Solomon
cannot even begin to even enter his mind. Solomon is
with his family - Anne, Elizabeth, Margaret and Alonzo.
Solomon holds in his hand and up to the light of the
window a SMALL, STAINED GLASS MEDALLION. Nothing too
elaborate. Something a child would, and in fact has,
made; a simple, colored flower. Five pedals surrounding
a flower head. As light passes through the stained glass
the colors resemble those of the previous scene. Though,
at this moment, as he marvels at the gift from Elizabeth,
there is much joy in his heart.
SOLOMON
You made it? Yourself?
ELIZABETH
Nearly so.
ANNE
She had a little help around the
fire. Nothing more.
ALONZO
It's rather plain.
ANNE
Hush! It's beautiful.
SOLOMON
Precious. It is precious.
MARGARET
May I wear it?
ELIZABETH
It's for father!
ALONZO
I can play the drum.
SOLOMON
A brief exhibition around
Margaret's neck before I reclaim
it.
As Solomon fastens the medallion around Margaret's neck,
Alonzo takes up a small drum and begins to beat it
mercilessly as he runs around the room. Margaret strokes
the medallion and smiles.
ALONZO
Do you like my drumming?
ANNE
I believe we have raised a master
of fortissimo.
12 Years a Slave 05.18.11 49.
MARGARET
I adore it. Will you fashion one
for me?
ANNE
For me as well.
ELIZABETH
Come, Margaret. Into the light.
Elizabeth beckons Margaret closer to the window,
Elizabeth holding up the medallion to the light. Anne
remains close to Solomon as he stares at the light coming
from the pendant.
OVER THIS WE HEAR an emotional supplication from Solomon:
SOLOMON (V.O.)
Lord... Have I not always been
faithful? Did I not put you above
all else?
INT. HOSPITAL/PATIENTS ROOM - CONTINUOUS
We have returned from the flashback. Solomon remains in
bed, looking far worse than just previously. Though his
lips move barely if at all, we hear the payer coming from
him.
SOLOMON
Did I not believe my gifts were of
your grace and not my creation? I
have always been faithful, Lord.
I ask you reward my devotion. I
beg of you only one thing: I pray
you end the suffering. Death is
better than all that waits. Take
me, Lord... Take my life. Lord.
...Lord?
BLACK
INT. HOSPITAL/RECOVERY WARD - LATER
We are in a recovery ward in the hospital. Really, not
much different than the sick ward, other than the fact
that these PATIENTS have survived the illness and are
going to live. We see Solomon sitting up in bed. As
with all the other patients, his pustules have abated,
but they have left his face and body scarred. HE WILL
REMAIN THIS WAY FOR THE REST OF HIS LIFE. Yet one more
physical reminder of all that he's been through even at
this relatively short stage of his enslavement.
As he sits, the door of the ward opens. Eliza is walked
in and ushered over to a bed. She, too, has obviously
survived the ordeal. But also, as with Solomon, she is
12 Years a Slave 05.18.11 50.
now scared as well. Along with having lost a child, her
illness seems to have had a substantial negative effect
on not just her physical health, but Eliza's mental
health as well.
For a moment Solomon and Eliza just sit among the other
recovering patients, waiting for what is to come next.
BLACK
EXT. FREEMAN'S/GREAT ROOM - DAY
We are back in Freeman's great room. It is almost as if
the intervening never happened. The slaves are again on
display. Bob, again, playing the fiddle as the BUYERS
move among the prospective sales; a jumble of question
and conversations which Freeman fields.
Among the buys we see WILLIAM FORD; a good-looking man,
who has appeared to have reached the middle age of life.
There is something cheerful and attractive in his face
and tone of voice.
FORD
What is the price for the ones
Harry, Platt and Eliza?
FREEMAN
Nine Hundred for Harry, a thousand
for Platt; he is a nigger of
talent. Seven hundred for Eliza.
My fairest price, sir.
FORD
You will exchange a note?
FREEMAN
As always, from you, Mr. Ford.
Eliza, pulling Emily forward and putting her on urgent
display:
ELIZA
Sir... Sir, she is my baby.
Stepping in, attempting to explain things.
SOLOMON
Sir, she watched as her only boy
was sold off. If there is any way
in your heart--
FREEMAN
You will be quiet.
SOLOMON
To not separate them further, sir.
The Lord almost took her with
12 Years a Slave 05.18.11 51.
(MORE)
disease. If He would not separate
Mother and Child, are any of us to
do more?
FORD
What is her price?
FREEMAN
(spitefully)
I won't sell the girl.
FORD
And you have no need for her. One
so young will bring you no profit.
FREEMAN
Theys heaps 'n piles of money to
be made of her. She is a beauty.
One of the regular bloods, none of
your thick-lipped, bullet heated,
cotton picking niggers.
FORD
Her child, man. For God's sake,
are you not sentimental in the
least?
FREEMAN
My sentimentality stretches to the
length of a coin. Do you want the
lot, Mr. Ford, or do you pass on
'em all?
FORD
I will take them.
Eliza grips Emily tight.
ELIZA
I will not go without her. You
will not take her from me.
AS if to prove her wrong, Freeman puts a foot to Eliza
and harshly kicks her away from Eliza.
ELIZA (CONT'D)
Please, don't. No!
Freeman, to Bob:
FREEMAN
Take her out of here.
Bob begins to pull Eliza away toward the door of the
room, but her screaming and pleading do not abate. IT IS
CLEARLY UNSETTLING TO THE OTHER BUYERS.
FREEMAN (CONT'D)
Keep her quiet.
12 Years a Slave 05.18.11 52.
SOLOMON (CONT'D)
Bob tries to muzzle her with his hand, but Eliza
continues to scream for her child as Emily does for her
mother.
EMILY
Don't leave, mama. Mama, don't
leave me!
FREEMAN
(to Solomon)
Play something! Get the fiddle
and play.
As ordered, Solomon takes up Bob's fiddle and begins to
play lightly.
FREEMAN (CONT'D)
Play!
Solomon begins to play harder and louder. Still, it is
barely enough to drown out Eliza's cries. Freeman gets
the other slaves to clap along with Solomon's playing.
FREEMAN (CONT'D)
Goddamn it, Bob, yah keep her
quiet or it's yer damned hide I
will take it out of!
Bob pulls a rag, stuffs it in Eliza's mouth. Clamping
both hands over her mouth, he hauls Eliza from the room
by the head. It is an ugly, ugly scene.
EXT. FORD PLANTATION - LATER
Driven in a horse drawn wagon by Ford is the group of
Solomon, John and Eliza. Eliza is sullen to say the
least. With the loss of her two children she has dropped
into a depression she will not be able to pull out of.
They arrive to the FORD PLANTATION. The main house of
the plantation - the GREAT HOUSE as they are commonly
called - is sizable. Two stories high with a piazza in
front. In the rear are also a log kitchen, poultry
house, croncribs and several slave cabins. The
plantation is described as "a green spot in the
wilderness."
With the arrival of Master Ford there is a flurry of
activity - the "excitement" of a new delivery - as a
"yellow girl," ROSE announces his return. Present with
Rose is her husband, a slave named WALTON. Rose calls to
her Mistress - MISTRESS FORD.
ROSE
Mistress! Mistress, they arrivn'.
Mistress Ford EXITS the house and travels to her husband,
kisses him, then laughingly inquires:
12 Years a Slave 05.18.11 53.
MRS. FORD
Did you bring those niggers?
Three of them? You got three?
(calling off:)
Sally...!
FORD
Make me something to eat, dear.
The day has taken it from me.
MRS. FORD
Rose, fetch Sally.
ROSE
Yes, ma'am.
MRS. FORD
Tell her there are three new
niggers.
ROSE
Yes, ma'am.
(calling off)
Sally...!
MRS. FORD
Do not yell for her. Run fetch
her.
Rose runs off to fetch Sally. Mrs. Ford turns her
attention to the new arrivals.
MRS. FORD (CONT'D)
Let me get a look at them... Do
they have any skills? What do
they do?
Indicating to Solomon and John:
FORD
Walton, tomorrow you will take
these two up to the mill and start
them workin'.
WALTON
Yeh, suh.
MRS. FORD
(re: Eliza)
This one's cryin'. Why is this
one cryin'?
FORD
Separated from her child.
MRS. FORD
Oh, dear.
FORD
It couldn't be helped.
12 Years a Slave 05.18.11 54.
Moving with alacrity, Rose returns with SALLY; another
female slave.
SALLY
Suh...?
FORD
Sally, take these new niggers
around to your cabin. Fix them a
meal, and have them rest
themselves.
SALLY
Yeh, suh, Massa Ford.
(to the slaves:)
C'mon, now. C'mon. Don't dawdle.
EXT. FORD PLANTATION/SALLY'S CABIN - MOMENTS LATER
The group rounds the house to Sally's cabin. There are
TWO YOUNG CHILDREN - naked, having been in the middle of
getting washed - playing in the grass. As the group
arrives, the kids jump up and toddle toward them, look at
them "as though they were a brace of rabbits," then run
off.
INT. FORD PLANTATION/SALLY'S CABIN - CONTINUOUS
Sally conducts the group into her cabin. As they enter,
Sally instructs:
SALLY
Lay down your bundles. Seat
yourselves. Rest while yah can.
Tomorrow'll be work. Ya'll work
everyday 'cept fer the Sabbath.
Still, it's up in the mornin'.
Massa Ford read us the scripture
'fo we's left ta ourselves.
Just then JOHN, a young slave of about sixteen years of
age comes RUNNING IN. He looks steadily in the faces of
the newly arrived slaves, then turns and runs back out
without saying a word. He does however LAUGH LOUDLY as
if their arrival was a great joke.
EXT. WOODS - DAY
We are in a wooded area. There is A GANG OF SLAVES
chopping trees into timber. It is hard, laborious work
made no more easy by the sweltering heat. Solomon and
John are chief among them, but also present are two
slaves in particular; SAM and HARRY as well as Walton
who's basically in charge of the group.
12 Years a Slave 05.18.11 55.
EXT. WOODS - LATER
The slaves now load the timber onto a horse drawn wagon.
Again, hard work done under the ever present sun.
EXT. ROAD - LATER
As Walton drives the wagon, the other slaves trudge along
side by foot. We should get the sense the travel is long
and tedious.
EXT. FORD'S MILL - LATER
It is a sizable mill on the edge of Indian Creek. There
is much work being done, the slaves primarily employed in
piling the timber and chopping it into lumber. As
before, there is little doubt about the rigors of the job
at hand.
At the mill the slaves are overseen by ADAM TAYDEM.
Working as a carpenter at the mill is JOHN TIBEATS.
There are also various CUSTOMERS who move about placing
orders.
EXT. FORD PLANTATION - DAY
It's Sunday morning. All of Ford's slaves are dressed
with their "finest" clothes - brightly colored and as
free as possible of defect. The slaves are gathered on
the lawn just beyond the piazza. Mistress Ford is
present as well. As the slaves listen, Ford reads to
them Scripture. His tone is of a man trying to preach by
way of compassion.
FORD
"But as touching the resurrection
of the dead, have ye not read that
which was spoken unto you by God,
saying, I am the God of Abraham,
and the God of Isaac, and the God
of Jacob. God is not the God of
the dead, but of the living. And
when the multitude heard this,
they were astonished at his
doctrine. But when the Pharisees
had heard that he had put the
Sadducees to silence, they were
gathered together. Then one of
them, which was a lawyer, asked
him a question, tempting him, and
saying, Master, which is the
great commandment in the law?
Jesus said unto him, Thou shalt
love the Lord thy God with all thy
heart, and with all thy soul, and
with all thy mind. This is the
first and great commandment. And
12 Years a Slave 05.18.11 56.
(MORE)
the second is like unto it, thou
shalt love thy neighbor as
thyself. On these two
commandments hang all the law and
the prophets."
Despite the lightness with which Ford speaks and the hope
in his words, Eliza sits off to the side - self-secluded
a bit - weeping gently.
We should be able to see in Mistress Ford's eyes that
Eliza's constant crying is unsettling.
EXT. WOODS - DAY
Again we see Walton's gang of slaves working in the
woods, turning the trees into timber. As before, it is
hot and hard work.
EXT. ROAD - LATER
And once again we see the slaves make the tedious trek
from the woods to the mill.
EXT. FORD'S MILL - DAY
The slaves now work at unloading the timber. Though they
work hard, it is not nearly hard enough for Taydem.
TAYDEM
Move. Move damn it. Yah wastin'
daylight.
FORD
Mind your tone, Adam.
TAYDEM
...Suh...
EXT. FORD PLANTATION/SALLY'S CABIN - NIGHT
Solomon is grinding corn along with Sally. Sally's two
children are present. Rose knits Emily's hair. From
time to time, Solomon pops little bits of corn toward the
children and they attempt to catch it in their mouths.
When they do, they squeal with delight.
As the children laugh, a still clearly heartbroken Eliza
says wistfully:
ELIZA
I think Emily had a very good day
today. Very happy. I know
Randall is well; a stout boy.
12 Years a Slave 05.18.11 57.
FORD (CONT'D)
She begins to weep. Thoughts of her children too heavy
to bear. Giving her warning:
SALLY
Yah need to stop wit yer carryin;
on. Yah jus' upset the Mistress.
Yer chilr'n gone. Ain't no
otherwise. And ain't nuthin' ta
do but 'cept it.
Sally's frankness does nothing to easy Eliza's crying.
EXT. FORD'S MILL - DAY
The slaves have broken for lunch. They snack on smoked
meat and drink water from gourds. As they lunch Solomon
reads from Sam's Bible to the other slaves.
SOLOMON
But ye shall not be so: but he
that is greatest among you, let
him be as the younger; and he that
is chief, as he that doth serve.
For whether is greater, he that
sitteth at meat, or he that
serveth? Is not he that sitteth
at meat? But I am among you as he
that serveth.
A WHITE CUSTOMER, irate at the sight and sound of slaves
reading Scripture, crosses over. He grabs the Bible.
WHITE CUSTOMER
From where did you steal this?
SAM
Suh, the book is my property.
The White Customer has no interest in Sam's answer. With
flailing hands he STARTS BEATING ON SAM. Solomon tries
to stop him. That only makes the situation worse,
Solomon now the target of the man's ire.
WHITE CUSTOMER
Take your filthy hands from me!
Ford comes running over.
FORD
What is the commotion?
WHITE CUSTOMER
Your niggers are either brazen or
rebellious. This one was readin'
aloud. Scripture, no less. This
one claims it to be his.
FORD
It is. A gift from his Mistress.
12 Years a Slave 05.18.11 58.
WHITE CUSTOMER
You condone this?
FORD
I encourage it. As a Christian I
can do no less.
WHITE CUSTOMER
Any man who would allow his slaves
to have a Bible is not fit to own
a nigger. And any man who would
allow a slave to read is
dangerous.
The Customer huffs off. Handing the book back to Sam,
very matter of fact:
FORD
Pay him no mind. There will
always be men who don't understand
the nature of God, nor His
compassion. But the word of God
applies to all, whites and niggers
alike. In that you may take
comfort.
EXT. FORD PLANTATION - DAY
Eliza is being ridden off in a cart driven by Tibeats.
Watching her depart are Master and Mistress Ford, Rose,
Sally, Walton and Solomon.
Ford heads back into the house without a word. The
Mistress turns to the other slaves and states plainly:
MRS. FORD
It's for the best. She weeps
constantly, more occupied in
broodin' over her sorrows than in
attendin' to her business. I
cannot have that kind of
depression about. ...It's for the
best.
EXT. WOODS - DAY
Again, we see the gang of slaves working hard at cutting
down the wood.
EXT. ROAD - DAY
Walton is at the reigns of the wagon carrying the timber
to Ford's mill. Slaves trudge alongside, same as it ever
was. Only...it's not quite the same. Walton brings the
wagon to a halt. He, and the slaves look up the road
ahead of them.
12 Years a Slave 05.18.11 59.
Standing in the middle of the road is a group of
CHICKASAWS INDIANS. They are in their "usual" dress of
buckskin breeches and calico hunting shirts of fantastic
colors, buttoned from belt to chin. They have with them
DOGS and HORSES. They carry with them the carcass of a
deer.
The two groups stare at each other for a long moment.
EXT. FIELD - LATER
The groups of slaves and Chickasaws are now intermingled.
They "break bread" - actually they work on the carcass of
the deer which is now roasting over a large fire. As
well the group share a smoke on a pipe.
One of the Chickasaws is playing a tune on an "INDIAN
FIDDLE." The Chickasaws perform a customary dance;
trotting after each other, and giving utterance to a
guttural, sing-song noise.
The slaves enjoy the respite from work, Solomon
particularly taken by the music...if not entirely
enthralled by it.
After a bit, Solomon rights himself and heads from the
group.
EXT. RIVER BANK - CONTINUOUS
Solomon arrives to some tall grass at the edge of the
river. Lowering his trousers, SOLOMON SQUATS TO
DEFECATE. As he does, he stares out toward the flowing
waters of Indian Creek. After a few moments, as though a
thought far greater than relieving himself has come to
him, Solomon stands and replaces his pants. He goes out
to the water. Taking a reed he throws it into the creek
and watches it float upstream.
Then, as though he were a man possessed, Solomon wades
out into the water. Stands in the heart of it as it
flows around him.
EXT. FORD'S MILL - DAY
Just beyond the mill Solomon speaks with Ford as Taydem
listens. Solomon is drawing in the dirt, making rough
diagrams for Ford as he explains himself.
SOLOMON
The creek is plenty deep enough to
sail, even with a boat full of
load. The distance from the mill
to the point on the latter bayou
is several miles by water fewer
than land. It occurs to me that
12 Years a Slave 05.18.11 60.
(MORE)
the expense of the transportation
would be materially diminished--
TAYDEM
"Materially diminished?"
SOLOMON
If we use the waterway.
TAYDEM
It's a scheme, Ford. Visionary,
but a scheme. Plenty of engineers
have schemed similarly. The
passes are too narrow.
SOLOMON
I reckon them at more than twelve
feet at their most narrow. Wide
enough for a tub to traverse.
Appears narrower to the eye;
mostly obstructed by tree trunks.
A team of niggers can clear it
out.
TAYDEM
And you know what of transport and
terra formin'?
SOLOMON
I labored repairing the Champlain
canal, on the section over which
William Van Nortwick was
superintendent. With my earnings
I hired several efficient hands to
assist me, and I entered into
contracts for the transportation
of large rafts of timber from Lake
Champlain to Troy. During the
season I became perfectly familiar
with the art and mysteries of
rafting.
FORD
(drily witty)
Pity his qualifications exceed the
work at hand... But I supposes
it's worthy of a try.
TAYDEM
A waste of effort.
FORD
It's Platt's effort to waste.
(to Solomon)
Get a team. Let's see what you
can do.
12 Years a Slave 05.18.11 61.
SOLOMON (CONT'D)
EXT. CREEK - DAY
WE HAVE A SERIES OF SCENES in which we see Solomon and a
TEAM OF BLACKS working on the creek: CHOPPING TREES
ALONG THE BANKS, widening out the shore... It's all just
a trial for now. The work is diligent, but it is basic
to this point. Still, under Solomon's direction, the
slaves go at it like they've got something to prove. And
rightly they do.
Solomon also works on a narrow raft of twelve cribs with
which he will transport the timber.
Once this is constructed, HE PERSONALLY "SAILS" THEM UP
THE CREEK WITH A TEST LOAD.
EXT. FORD'S MILL - LATER
Ford and a group of slaves wait along the river banks
just beyond the mill. All are expectant in their manner.
A long moment passes with no sign of Solomon.
Then, from up river, we see Solomon's raft of lumber
winding its way. SLAVES CHEER, and Ford literally
applauds the effort. Taydem looks pissed. He has just
been shown up after all. TIBEATS IS THERE AS WELL. HE
SHARES TAYDEM'S BITTERNESS.
INT. FORD PLANTATION/GREAT HOUSE - DAY
As we come into the scene, Ford is presenting Solomon
with a fiddle. Not as grand as the one he previously
owned in New York, but a fine instrument none the less.
It is a gift of thanks for his hard work. Solomon's
gratitude is easily expressed.
SOLOMON
My great thanks, Master Ford.
FORD
My thanks to you, and it is the
least of it. My hope is that it
brings us both much joy over the
years.
Following the statement, Solomon's not sure how to react.
He remains grateful, but the thought of "over the years"
is just a reminder of the altered state in which he now
finds himself.
EXT. FORD PLANTATION - DAY
It's Sunday. The slaves are again gathered to hear the
word of the Lord as read by Master Ford.
12 Years a Slave 05.18.11 62.
FORD
At the same time came the
disciples unto Jesus, saying, Who
is the greatest in the kingdom of
heaven? And Jesus called a little
child unto him, and set him in the
midst of them, And said, Verily I
say unto you, Except ye be
converted, and become as little
children, ye shall not enter into
the kingdom of heaven. Whosoever
therefore shall humble himself as
this little child, the same is
greatest in the kingdom of heaven.
And whoso shall receive one such
little child in my name receiveth
me. But whoso shall offend one of
these little ones which believe in
me, it were better for him that a
millstone were hanged about his
neck, and that he were drowned in
the depth of the sea. Woe unto
the world because of offences!
For it must needs be that offences
come; but woe to that man by whom
the offence cometh!
BLACK
EXT. FORD PLANTATION - DAY
Seasons have passed. It is winter now, and very grey out
along the bayou. Ford and Tibeats - who we have seen
working around the mill - stand with Solomon, Tibeats
giving Solomon an inspection. Ford carries much lament.
FORD
He's a good carpenter and a smart
nigger.
TIBEATS
I'm familiar with his cleverness.
Turn around. Raise yer shirt.
Solomon does as instructed. Tibeats looks at Solomon's
back, at the scars from lashings he bears.
TIBEATS (CONT'D)
Troublesome.
FORD
Quite the opposite. Trustworthy
to the highest degree. A jack-ofall trades. No chore too menial
nor skill too complicated. Plays
the fiddle as well.
12 Years a Slave 05.18.11 63.
TIBEATS
Look like he got airs.
FORD
You won't find a nigger more
humble.
TIBEATS
Ain't found a nigger yet I cain't
humble.
Tibeats heads off. Solomon, highly curious over the
preceding. WHEN FORD RESPONDS, IT IS WITH GREAT
HUMILIATION.
SOLOMON
Sir, did I do something wrong?
FORD
Not your concern, Platt. I say
with much...shame I have compiled
debts. I have long preached
austerity, but find myself
hypocritical in that regard.
You'll be in the ownership of Mr.
Tibeats. You are his now. But he
himself is in the employ of my
sister and her husband, their
plantation is across the Bayou
from my own. There is much
building to be done, and you'll be
of great use to them. Serve him
as you'd serve me.
SOLOMON
Yes, sir.
FORD
And your faithfulness will not be
forgotten. If I can ever be of
aid, you need but send word.
SOLOMON
Yes, sir.
FORD
Pride and want have been my sin.
Loss of you is but one of my
punishments.
EXT. ROAD - DAY
In a wagon driven by Tibeats, Solomon rides along with
Sam and Harry. They travel up Bayou Boeuf.
12 Years a Slave 05.18.11 64.
EXT. TANNER PLANATION - LATER
The Solomon arrives on wagon with Tibeats to the Tanner
Plantation. As the wagon comes to a stop, Tibeats orders
the slaves:
TIBEATS
Gather up your wares, but don't
wander about until I make space
for you.
Tibeats retreats to do just that. He converses with
CHAPIN who is the overseer on the plantation.
As he waits, Solomon sees a figure in the near distances
pulling up dead plants from the yard. The person is just
far enough away Solomon can't clearly make out who it is.
Recognition gradually comes to him. He yells to the
person.
SOLOMON
Eliza...
The figure looks up. It is Eliza. She makes the LONG
TRAVEL over to Solomon, moving slowly at a somnambulistic
pace. As she nears, Solomon can see that Eliza looks
weary and gaunt. She has grown feeble and emaciated, and
is still in mourning for her children. There is no
awareness in her eyes.
SOLOMON (CONT'D)
It's Platt. It's Platt, Eliza.
A moment before Eliza, her faculties clearly slipping,
recognizes Solomon. A bit, just a bit, of life and light
return to her.
ELIZA
Platt...? You knew my babies.
SOLOMON
I did.
ELIZA
Do you recollect how handsome
little Emily was? And Randall...
Do you recall how he loved me more
than anything?
SOLOMON
He did.
ELIZA
I wonder if they are still living.
I think they are still alive. A
child would perish without their
mother, a lesser child. But mine
are too hearty. Would you say so?
12 Years a Slave 05.18.11 65.
SOLOMON
...I would...
ELIZA
You've seen what strong
constitutions they have.
SOLOMON
As vital and healthy as any
children I've ever seen. They
endure, and they would want the
same of their mother. They would
want her to--
ELIZA
Where are they? You say they
endure, you say that they--
SOLOMON
Eliza--
ELIZA
Then where are my children?
Having returned, Tibeats calls to Solomon. His
displeasure in having to do such obvious in his tone:
TIBEATS
Platt!
SOLOMON
I must go.
Solomon turns to head away. Eliza grabs him by the arm,
and holds him fast as she becomes a bit crazed.
ELIZA
You know where they are. Where?
SOLOMON
Eliza, unhand me.
TIBEATS
Damn it, Platt!
Tibeats moves toward Solomon and Eliza. His fist is
curled to do work.
ELIZA
You know, tell me. Tell me where
they are!
Arriving to the pair, Tibeats wastes no time in throwing
a quick but severe beating on Eliza. Done with that, he
strikes Solomon hard across the face. Chapin intervenes.
CHAPIN
Tibeats. Enough. Your meaning is
clear.
12 Years a Slave 05.18.11 66.
TIBEATS
Sweat, or stripes, nigger. You
will bear sweat or you will wear
stripes.
INT. TANNER PLANATION/SLAVE SHACK - NIGHT
Solomon talks with another of Tanner's slaves, LAWSON,
and his wife BRISTOL. They dine on bacon and corn cake.
Eliza, all the while and same as always, is continually
and gently weeping.
Bristol warns Solomon regarding Tibeats.
BRISTOL
Tibeats has got a streak to him.
Cain't say where it come from;.
Drinks no mo' than most, take to
da Bible... That don't matter
none to his disposition, and he
don't give no warnin' for his
moods neither.
LAWSON
Say this; massa hate a nigger that
think for hisself. Do as told -
yes, suh. No, suh - you'll do
fine.
BRISTOL
But you show a spark of reasonin'
behind yo eyes...steel yourself
for a lashin'.
SOLOMON
Ford wouldn't stand for him to
give me such a beating.
BRISTOL
Not Massa Ford's no more. Yo time
with him is o'er and done. And
the Tanner's hain't never about.
Put it out your head. Learn
yourself ta be a proper nigger.
BLACK
EXT. TANNER PLANATION - DAY
We see Solomon working as a carpenter. He is working to
help erect a Weaving House that stands off to the side of
the plantation's Great House.
At the moment Solomon is nailing on siding. Tibeats
comes around and is immediately dissatisfied with this
work.
12 Years a Slave 05.18.11 67.
TIBEATS
Make them boards flush.
SOLOMON
They are, sir.
TIBEATS
They is no such thing.
Solomon runs his hands over the boards.
SOLOMON
As smooth to the touch as a
yearling's coat.
TIBEATS
Callin' me a liar, boy?
Not caring for Solomon's tone, Epps's about ready to
physically correct him. But Solomon verbally dodges.
SOLOMON
Only a matter of perspective, sir.
From where you stand you may see
differently. But the hands are
not mistaken. I ask only that you
employ all your senses before
rendering judgement.
What's Tibeats to do when faced with fact? All he can do
is spew invectives.
TIBEATS
You are a brute. You are a dog,
and no better for followin'
instruction.
SOLOMON
I'll do as ordered, sir.
TIBEATS
Then you'll be up at daybreak.
You will procure a keg of nails
from Chapin and commence puttin'
on clapboards.
Tibeats wheels away.
EXT. TANNER PLANATION/SLAVE SHACK - EVENING
The slaves eat. All tired from a days work they conduct
themselves in silence. All except for Eliza who as
always weeps. The sound of her sobbing edging him up,
Solomon finally snaps:
SOLOMON
Eliza. Eliza, stop!
He goes to her, grabs her.
12 Years a Slave 05.18.11 68.
SOLOMON (CONT'D)
Stop your wailing. Your sorrow
will be the end of you.
She does not stop. As if to force the misery from her,
Solomon strikes Eliza twice.
SOLOMON (CONT'D)
Stop it! Stop!
Eliza does stop crying. But only just long enough to
enquire:
ELIZA
Have you stopped crying for your
children? You make no outward
sounds, but inside you; do you
still weep and wail? Before you
drift at night, do you not wonder
where they are and if they
prosper...Solomon? If you do not,
then you assuredly have been
reduced to the nigger they are
desirous of...Solomon.
This truth - AND THE USE OF HIS TRUE NAME BY PATSEY -
strikes Solomon very directly. They may mourn
differently, but he has not let go of his children.
EXT. TANNER PLANATION - DAYBREAK
It is early, early morning. The sun just barely making
its way over the horizon. Solomon is waiting on the
piazza for Chapin to arrive. He does, and in good
spirits.
CHAPIN
Platt...? Good early morning.
Solomon removes his hat as he addresses Chapin.
SOLOMON
Sir, Master Tibeats had directed
me to call upon you for a keg of
nails.
EXT. STORE HOUSE - MOMENTS LATER
Chapin is rolling out a a keg of nails for Solomon.
CHAPIN
If Tibeats prefers a different
size, I will endeavor to furnish
them, but you may use those until
further directed.
Chapin mounts a nearby horse. As he rides off into the
field where slaves are already at work:
12 Years a Slave 05.18.11 69.
CHAPIN (CONT'D)
Good morning to you, Platt.
Left alone, Solomon shoulders the keg and begins to carry
it off.
EXT. WEAVING HOUSE - LATER
IN A SERIES OF CUTS, we see Solomon breaking the head on
the keg, and begin going to work nailing the clapboards
onto the house. He is as diligent as ever.
EXT. WEAVING HOUSE - LATER
As the day gets on to mid-morning, the sun already baking
in the sky, Tibeats makes his way over to Solomon.
Before even arriving to Solomon, his mein is one of
belligerence; out of sorts and something less than sober.
TIBEATS
I thought I told yah to commence
puttin' on clapboards this morn'.
SOLOMON
Yes, master. I am about it. I
have begun on the other side of
the house.
Tibeats walks around to look over Solomon's work. He is
picayune, as if purposefully looking for fault.
TIBEATS
Didn't I tell yah last night to
get a keg of nails of Chapin?
SOLOMON
Yes, master, and so I did; and
Chapin said he would get another
size for you, if you wanted them
when he came back from the field.
Tibeats walks to the keg and kicks it. Moving toward
Solomon "with a great passion:"
TIBEATS
Goddamn yah! I thought yah knowed
something!
Solomon, perhaps inspired by his moment with Eliza, is in
no mood for Chapin.
SOLOMON
I did as instructed. If there's
something wrong, then its wrong
with your instructions.
12 Years a Slave 05.18.11 70.
TIBEATS
Yah black bastard! Yah goddman
black bastard!
In an inconsolable rage, Tibeats runs off to the piazza
to fetch a whip.
Solomon looks around. He is alone other than RACHEL the
cook and CHAPIN'S WIFE who, shocked by that which she
witnesses, runs out to the field to fetch Chapin.
Solomon's instinct is to run, but he stands his ground as
Tibeats marches back whip in hand.
TIBEATS (CONT'D)
Strip yer clothes!
Solomon does no such thing.
TIBEATS (CONT'D)
Strip!
SOLOMON
I will not.
With "concentrated vengeance," Tibeats springs for
Solomon, seizing him by the throat with one hand and
raising the whip with the other. Before he can strike
the blow, however, Solomon catches Tibeats by the collar
of his coat and pulls him in close. Reaching down,
Solomon grabs Tibeats by the ankle and pushes him back
with the other hand. Tibeats tumbles to the ground. A
violent struggle takes place as Solomon puts a foot to
Tibeats throat, and then in a frenzy of madness snatches
the whip from Tibeats and begins to strike him with the
handle again and again and again.
TIBEATS
Yew will not live ta see another
day nigger! This is yer last, I
swear it!
Solomon ignores the threats, continues to beat Tibeats.
Blow after blow falling fast and heavy on Tibeats's
wriggling form. The stiff stock of the whip wraps around
Tibeats's cringing body until Solomon's arm aches.
Tibeats's cries of vengeance turn to yelps for help and
then pleas for mercy:
TIBEATS (CONT'D)
Murder! It's murder! Lord, God,
help me. God be merciful!
Chapin comes riding in from the field fast and hard.
Solomon strikes Tibeats a blow or two more, then delivers
a well-directed kick that sends Tibeats rolling over the
ground.
CHAPIN
What is the matter?
12 Years a Slave 05.18.11 71.
Tibeats struggles up and tries to present an air of
dignity and control while he keeps a demonic eye on
Solomon:
SOLOMON
Master Tibeats wants to whip me
for using the nails you gave me.
CHAPIN
What's the matter with the nails?
TIBEATS
They're...they're too large.
CHAPIN
I am overseer here. I told Platt
to take them and use them, and if
they were not of the proper size I
would get others on returning from
the field. It is not his fault.
Besides, I shall furnish such
nails as I please. Do you
understand that, Mr. Tibeats?
Tibeats answer is in the grinding of his teeth and the
shaking of his fist.
TIBEATS
This ain't half over. I will have
my satisfaction.
Tibeats moves off toward the house. Chapin follows. A
long moment, Solomon stands alone. He looks around, not
sure what to do; to stay or to flee. Anxiety mounts on
his features.
A moment more, and Tibeats exits the house. He saddles
his horse and rides off to beat the devil. Or, worse, to
fetch him.
Chapin comes running back out of the house. He is
visibly excited, and when he speaks he is quite earnest.
Though he tries to project reasoned emotions he gives off
an air of impending trouble.
CHAPIN
Do not stir. Do not attempt to
leave the plantation on any
account whatever. Your master is
a rascal, and has left on no good
errand. But if you run there is
no protecting you.
SOLOMON
Sir--
CHAPIN
If you run, Platt, there is no
protecting you. Rachel...!
12 Years a Slave 05.18.11 72.
Chapin runs off to join Rachel. The two converse at a
distance from Solomon, then they head off for the log
kitchen.
Solomon is now very much alone, and he waits for what is
to come. AND WE WAIT WITH HIM. And we wait, and we
continue to wait... Moment by moment, the dread of the
unexpected mount.
Solomon's eyes begin to well. He has beaten a white man,
and he knows that death awaits him.
A SLIGHT PAYER TO THE HEAVENS BEGINS TO FORM IN HIS
THROAT, but he is too choked up to fully speak it.
Chapin has now returned to the piazza. He stands and
watches, but does not move to Solomon.
Solomon waits, and waits...
WE HEAR THE SOUND OF DISTANT HOOFS which grow louder and
louder in the manner of rolling thunder. It's Tibeats.
He returns with two accomplices; COOK and RAMSAY. They
carry with them large whips and a coil of rope.
Dismounting, they move with menace that is tinged with
perverse pleasure. Tibeats orders:
TIBEATS
Cross your hands.
SOLOMON
There is no need.
TIBEATS
You resist, I swear I will break
your head and cut your black
throat. Cross your hands!
Solomon does as ordered. He's tied by Cook and Ramsay -
his wrists, and then ankles bound in the same manner. In
the meantime the other two have slipped a cord within
Solomon's elbows, running it across his back and tying it
firmly. Solomon is then dragged toward a peach tree. A
lynching is in store. The naked horror of it intensely
palpable.
Solomon looks toward the piazza, but Chapin is now gone.
Tears of fear flow down Solomon's cheeks. He is on the
verge of panic; a man heading toward his own execution,
he begins to struggle and fight. Cook and Ramsay almost
relish this; an opportunity to inflict hurt on Solomon.
A rope goes around Solomon's neck, then is tossed over
the branch of the tree. The trio begin to hoist Solomon.
He gasps and gags as spittle flies from his mouth and the
life is choked from him.
With suddenness, Chapin comes from the house brandishing
a pistol in each hand - Colt Paterson .36 caliber
12 Years a Slave 05.18.11 73.
"Holster" pistols with 9" barrels. Chapin moves with
determination toward the lynch mob. He is sharp and
matter of fact. With the guns in hand, he really doesn't
need to be much more demonstrative.
CHAPIN
Gentlemen... Whoever moves that
slave another foot from where he
stands is a dead man. Tibeats,
you are a scoundrel, and I know
it. You richly deserved the
flogging you have received. I
have been overseer of this
plantation seven years, and in the
absence of William Ford, am master
here. My duty is to protect his
interests. Ford holds a mortgage
on Platt of four hundred dollars.
If you hang him, he loses his
debt. Until that is canceled you
have no right to take his life.
Directing his attention to Cook and Ramsay:
CHAPIN (CONT'D)
As for you two, begone. If you
have any regard for your own
safety...I say, begone!
Cook and Ramsay don't need to be told twice. The pistols
Chapin's gripping make the situation real clear. Without
further word, they mount their horses and ride away.
Tibeats remains, and his anger with him.
TIBEATS
Yah got no cause. Platt is mine,
and mine ta do with as I please.
Yah touch my property, I will 'ave
yah strung up as well.
Tibeats mounts up and departs. There is a surreal moment
as Chapin's not sure what to do about Solomon. He
chooses to do nothing. Solomon is left dangling by the
neck from the tree as Chapin calls to Rachel:
CHAPIN
Run to the field. Fetch Lawson,
hurry him here and bring the brown
mule with him.
Rachel runs off. A FEW MOMENTS, then LAWSON comes
running with the mule. Chapin, with much urgency:
CHAPIN (CONT'D)
You must ride to Master Ford.
Tell him to come here at once
without a single moment's delay.
Tell him they are trying to murder
Platt. Hurry, boy. Bring him
12 Years a Slave 05.18.11 74.
(MORE)
back if you must kill the mule to
do so!
Lawson mounts up and rides off, the mule demonstrating
much speed.
EXT. TANNER PLANATION - LATER
HOURS HAVE PASSED. The sun is now at its apex. Solomon
remains tied and dangling exactly where he was left.
Despite this odd and horrific sight, life on the
plantation continues. The OTHER SLAVES work in the
field. CHILDREN make their way playfully in the yard.
It should all underscore the fact that a black, hanging
even partially from a tree, is nothing unusual in this
time and space.
Chapin walks back and forth with the pistols in his
hands. Clearly he fears Tibeats returning with more and
better assistance. And yet, he does nothing to alleviate
Solomon's suffering. He heeds Tibeats words, and as
though caught up in the middle of nothing more than a
property dispute, he offers no further aid.
EXT. TANNER PLANATION - LATER
Solomon continues to hang. By now he is drenched in
sweat, and nearly delirious with dehydration. His lips
dry and parched. He may not die from hanging, but he may
very well expire before the day is over.
Eventually Rachel comes over - timidly, and as though she
were acting contrary to orders - and offers a drink of
water from a tin cup, pouring it in Solomon's mouth for
him. She then takes a small hand towel and dabs at the
water which clings to his lips.
She then retreats, and leaves Solomon to hang.
EXT. TANNER PLANATION - EVENING
The sun is just now arching for the horizon. Solomon
remains, as though his torture will not end. Ford,
trailed by the slave Lawson, finally comes riding up. He
dismounts, and moves swiftly over to Solomon. With great
heartache:
FORD
Platt... My poor Platt.
Ford produces a blade and cuts Solomon loose. Solomon
attempts to carry himself, but he cannot. He falls to
the ground and passes out.
12 Years a Slave 05.18.11 75.
CHAPIN (CONT'D)
INT. TANNER PLANATION/GREAT HOUSE - NIGHT
As we come into the scene, Solomon lays on a blanket on
the floor. Eventually, his eyes flutter, then open. He
is in the foyer of the Tanner house. As he gets his
bearings, he looks around the interior. THE SPACE IS
HANDSOME, AND WELL DECORATED. It is sharp contrast to
the bleak surroundings, shacks and dungeons Solomon has
largely been accustom to during his time of slavery. It
will be the "first and last time such a sumptuous resting
place was granted" during his twelve years of bondage.
Solomon doesn't have much chance to luxuriate in his
surroundings. He hears a DOG BARKING just outside, and
is unnerved. Has Tibeats returned to finish what he
started?
From a study, Master Ford appears with a gun in hand. He
goes to the door, opens it and looks outside. He can see
nothing. Satisfied, Ford crosses back over to Solomon.
He is frank with Solomon regarding the situation.
FORD
I believe Tibeats is skulkin'
about the premises somewhere, too
cowardly to show himself for a
proper confrontation. He will in
time. Tibeats wants you dead, and
he will attempt to have you so.
It's no longer safe for you here.
SOLOMON
Master Ford, I am willing to work.
I will proceed with all my labors
and more, but I beg that you take
me from this hateful place.
FORD
I cannot protect you.
SOLOMON
Master, please...
FORD
And I don't believe you will
remain passive if Tibeats attacks.
To strike him again is to warrant
your death from all corners. It
is best for you to go. I have
transferred my debt to Edwin Epps.
He will take charge of you. He is
a hard man. Prides himself on
being a "nigger breaker." But
truthfully I could find no others
who would have you. You've made a
reputation of yourself. A
notorious one as a slave of both
mind and will. You are an
exceptional nigger, Platt. I fear
no good will come of it.
12 Years a Slave 05.18.11 76.
BLACK
INT. MASTER EPPS'S PLANTATION/BARN - DAY
EDWIN EPPS is a large, portly, heavy-bodied man with
light hair, high cheek bones and a Roman nose of
extraordinary dimensions. He has blue eyes, a fair
complexion and is full six feet high. His manners are
repulsive and coarse, and his language gives speedy and
unequivocal evidence that he has never enjoyed the
advantages of an education.
He reads the Bible to his slaves, eight of them
altogether. ABRAM; a tall, older slave of about sixty
years. WILEY, who is forty eight. PHEBE, who is married
to Wiley. BOB and HENRY who are Phebe's children, EDWARD
and PATSEY. Patsey is young, just 23 years old...though
in the era, 23 not as young as in the present day. She
is the offspring of a "Guinea nigger," brought over to
Cuba in a slave ship. She nearly brims with unconversant
sexuality.
MISTRESS EPPS, Epps's wife, is also present.
Though Epps reads the word of the Lord, he lacks the tone
of compassion with which Ford read.
EPPS
"And that servant which knew his
Lord's will...WHICH KNEW HIS
LORD'S WILL and prepared not
himself...PREPARED NOT HIMSELF,
neither did according to his will,
shall be beaten with many
stripes..." D'ye hear that?
"Stripes." That nigger that don't
take care, that don't obey his
lord - that's his master - d'ye
see? - that 'ere nigger shall be
beaten with many stripes. Now,
"many" signifies a great many.
Forty, a hundred, a hundred and
fifty lashes... That's Scripter!
EXT. MASTER EPPS'S PLANTATION/SLAVE CABIN - MORNING
The cabin is constructed of logs, without floor or
window. The rude door hangs on great wooden hinges. In
one end is constructed an awkward fireplace.
The sun has not yet even broken the horizon as a HORN IS
BLOWN from the Great House. Slaves rise, clearly weary
from their "joyful" night of dancing.
EXT. MASTER EPPS'S PLANTATION/FIELD - DAY
It is August, "cotton picking" season.
12 Years a Slave 05.18.11 77.
We are looking out over a cotton field in full bloom. It
presents a visual purity, like an immaculate expanse of
light, new-fallen snow. The cotton grows from five to
seven feet high, each stalk having a great many branches
shooting out in all directions and lapping each other
above the water furrow.
There is a slave to each side of the row. They have a
sack around their necks that hangs to the ground, the
mouth of the sack about breast high. Baskets are placed
at the end of the furrows. Slaves dump their sacks of
cotton in the baskets, then pick until their sacks are
again filled.
Solomon, as with the other slaves, is picking cotton. It
is hard, harsh back breaking work. Clearly he's not
"skilled" at the chore - he moves along slowly and does
not pick with any particular dexterity.
Patsey, on the other hand, is the "queen of the field."
She moves through the rows at speed, expertly picking the
cotton.
THE SOUNDTRACK TO THE SCENE IS NOTHING MORE THAN THE
RUSTLE OF LABOR, THE MALE CICADAS BUGS "TYMBALS" IN THE
HEAT and a SPIRITUAL SUNG BY THE SLAVES.
Despite the heat, there is no stopping for water. The
slaves are "driven" by Edward, who is himself "driven" by
Treach.
TREACH
C'mon. Drive dem niggers.
Edward moves among the slaves, applying the whip to them
without regard.
EDWARD
Pick dat cotton. Move along now,
hear?
EXT. MASTER EPPS'S PLANTATION/GIN HOUSE - EVENING
The day's work is done. The slaves are now assembled in
the gin house with their baskets of cotton which are
being weighed by Treach. There is anxiety among the
slave, the reason for which soon becomes apparent.
TREACH
Two hundred forty pounds for Bob.
EPPS
What yah got for James?
TREACH
Two hundred ninety five pounds.
12 Years a Slave 05.18.11 78.
EPPS
Tha's real good, boy. Tha's real
good.
TREACH
One hundred eighty two pounds for
Platt.
Epps does not look happy. Treach says again:
TREACH (CONT'D)
One hundred eighty two.
EPPS
How much can even an average
nigger pick a day?
TREACH
Two hundred pounds.
EPPS
This nigger ain't even average.
Epps pulls Solomon aside.
TREACH
Five hundred twelve pounds for
Patsey.
EPPS
Five hundred twelve. Yah men folk
got no shame lettin' Patsey out
pick yah? The day ain't yet come
she swung lower than five hundred
pounds. Queen of the fields, she
is.
TREACH
Two hundred six pou--
EPPS
I ain't done, Treach. Ain't I
owed a minute to luxuriate on the
work Patsey done?
TREACH
...Sir...
EPPS
Damned Queen. Born and bred to
the field. A nigger among
niggers, and God give 'er to me.
A lesson in the rewards of
righteous livin'. All be
observant ta that. All!
(beat)
Now, Treach. Now speak.
12 Years a Slave 05.18.11 79.
TREACH
One hundred thirty eight pounds
for Phebe.
EPPS
Hit one forty five yesterday.
Pull her out.
TREACH
Two hundred six pounds for Abram.
EPPS
How much he pick yesterday?
TREACH
Two hundred twenty nine pounds.
Abram is pulled from the line, huddled with Solomon.
EXT. MASTER EPPS'S PLANTATION/YARD - EVENING
A flogging is going on. Solomon, Phebe, and Abram are
stripped and now being given a perfunctory whipping
delivered by Epps.
EXT. MASTER EPPS'S PLANTATION - EVENING
Evening, but the day is not yet done. Slaves attend
their various evening chores; feeding livestock, doing
laundry, cooking food. There is no respite from a
slave's charge.
INT. MASTER EPPS'S PLANTATION/SLAVE SHACK - NIGHT
A fire is kindled in the cabin. The slaves finally fix
their own dinner of corn meal. Corn is ground in a small
hand mill. The corn meal is mixed with a little water,
placed in the fire and baked. When it is "done brown"
the ashes are scraped off. Bacon is fried. The slaves
eat.
As they eat, Abram goes on in great length and with much
emotion about General Jackson.
UNCLE ABRAM
Hold my words: General Jackson
will forever be immortalized. His
bravery will be handed down to the
last posterity. If ever there be
a stain upon "raw militia," he
done wiped away on the eight of
January. I say da result a that
day's battle is of 'mo importance
to our grand nation than any
occurrence 'fo or since. Great
man. Great man in deed. We all
12 Years a Slave 05.18.11 80.
(MORE)
need pray to Heavenly Father da
General reign over us always.
INT. MASTER EPPS'S PLANTATION/SLAVE SHACK - NIGHT
The slaves are sleeping. There is a loud commotion.
Epps enters, drunkenly, forcing the slaves awake.
EPPS
Get up! Get up, we dance tonight!
We will not waste the evenin' with
yer laziness. Get up.
INT. MASTER EPPS'S PLANTATION/MAIN HOUSE - NIGHT
Despite the lateness of the hour, the slaves are up and
now fully dressed. They take up position in the middle
of the floor. They wait, poised like actors... Solomon
strikes up a tune and the slaves dance. They do so very
wearily. The whole of it certainly more torture than
pleasure.
Epps, whip in hand:
EPPS
Where's yah merriment? Move yer
feet.
As the slaves twirl about Epps keeps an attentive eye on
Patsey. It should be quite clear that his primary
motivation for holding dances is so that he may view
Patsey twirl about the floor.
This fact is not lost on the Mistress Epps. A few
moments of Epps's lust on display is all that the
Mistress can bear. Jealousy mounting, she snatches up a
CARAFE. With all her might she throws it at Patsey. It
hits Patsey square in the face. TOO THICK TO SHATTER, IT
LEAVES HER BLOODY AND WRITHING ON THE FLOOR. The
dancing, the music stop. The slaves, however, react as
though it is not the first time they've seen as much from
the Mistress.
Mistress Epps, screaming like a hellion:
MISTRESS EPPS
Sell her!
EPPS
C'mon, now. Wha's this?
MISTRESS EPPS
You will sell the negress!
EPPS
You're talkin' foolish. Sell
little Pats? She pick with more
12 Years a Slave 05.18.11 81.
UNCLE ABRAM (CONT'D)
(MORE)
vigor than any other nigger!
Choose another ta go.
MISTRESS EPPS
No other. Sell her!
EPPS
I will not!
MISTRESS EPPS
You will remove that black bitch
from this property, 'er I'll take
myself back to Cheneyville.
EPPS
Oh, the idleness of that yarn
washes over me. Do not set
yourself up against Patsey, my
dear. That's a wager you will
lose. Calm yerself. And settle
for my affection, 'cause my
affection you got. Or, go.
'Cause I will rid myself of yah
well before I do away with her!
Mistress Epps stands irate, lost in fury and unable to
even think of what to do. Eventually, optionless, she
storms away.
For a few beats there is only the sound of Patsey
sobbing.
EPPS (CONT'D)
That damned woman! I won't have
my mood spoiled. I will not.
Dance!
Epps sends the whip in Solomon's direction. Solomon
responds by playing.
Treach literally drags the prone Patsey from the floor,
blood still spilling from her face. The slaves, as
ordered, return to dancing.
EXT. MASTER EPPS'S PLANTATION - MORNING
The sun has only just risen above the horizon. FROM THE
GREAT HOUSE THE HORN IS BLOWN signaling the start of
another day.
EXT. MASTER EPPS'S PLANTATION/FIELD - DAY
Slaves are in the field picking cotton. They accompany
their work with a SPIRITUAL.
12 Years a Slave 05.18.11 82.
EPPS (CONT'D)
EXT. MASTER EPPS'S PLANTATION/GREAT HOUSE - LATER
As the slaves make their way in from the field, the
Mistress calls to Solomon. SHE HAS A PIECE OF PAPER IN
HAND.
MISTRESS EPPS
Platt...
SOLOMON
Yes, Mistress.
MISTRESS EPPS
Can you find your way to
Bartholomew's?
SOLOMON
I can, ma'am.
Handing Solomon a sheet of paper.
MISTRESS EPPS
This is a list of goods and
sundries. You will take it to be
filled and return immediately.
Tell Bartholomew to add it to our
debt.
SOLOMON
I will, Mistress.
Solomon looks at the list. In a careless moment, Solomon
reads quietly from it. He catches himself, but not
before the Mistress notes his action. With high
inquisitiveness:
MISTRESS EPPS
Where yah from, Platt?
SOLOMON
I have told you.
MISTRESS EPPS
Tell me again.
SOLOMON
Washington.
MISTRESS EPPS
Who were yah Master?
SOLOMON
Master name of Freeman.
MISTRESS EPPS
Was he a learned man?
SOLOMON
I suppose so.
12 Years a Slave 05.18.11 83.
MISTRESS EPPS
He learn yah ta read?
SOLOMON
A word here or there, but I have
no understanding of the written
text.
MISTRESS EPPS
Don't trouble yer self with it.
Same as the rest, Master bought
yah to work. Tha's all. And any
more'll earn yah a hun'red lashes.
Having delivered her cool advice, Mistress heads back
into the house.
INT. BARTHOLOMEW'S - LATER
A general store in the township of Holmesville. Solomon
stands at the counter as BARTHOLOMEW fills Mistress
Epps's order. Among the items set before Solomon is a
quantity of foolscrap.
The items are collected for Solomon and placed in a sack.
Solomon giving little thought to them other than getting
them back to the mistress.
EXT. MASTER EPPS'S PLANTATION/GREAT HOUSE - LATER
Solomon returns and delivers the items to the Mistress.
MISTRESS EPPS
Any trouble?
SOLOMON
No, ma'am. No trouble.
EXT. ROAD - DAY
Solomon is running flat out along the road. Running as
though his life depended on getting to his destination in
beyond a timely manner.
EXT. SHAW'S PLANTATION - LATER
Still running, slick with sweat, Solomon comes upon the
SHAW PLANTATION. It rivals that of Epps's in every way.
MASTER SHAW, A WHITE PLANTATION OWNER, IS ON THE LAWN
GROOMING A HORSE.
Sitting on the plantation's Piazza, Patsey is having tea
with MISTRESS HARRIET SHAW, WHO IS A BLACK WOMAN. Though
once a slave, she is now comparatively refined though not
wholly so. The table where they sit is adorned with
12 Years a Slave 05.18.11 84.
white linens, and they are attended by a HOUSE NIGGER.
It makes for a bit of a surreal scene.
As Solomon arrives:
MASTER SHAW
Platt Epps, good Sunday morning.
SOLOMON
Good morning, Master Shaw. I've
been sent by Master to retrieve
Patsey. May I approach?
MASTER SHAW
You may.
Solomon makes his way over to the piazza.
SOLOMON
Excuse me, Mistress Shaw.
MISTRESS SHAW
Nigger Platt.
SOLOMON
My apologies. Patsey, Master
wishes you to return.
PATSEY
Sabbath day. I's free ta roam.
Massa know where I be.
SOLOMON
Understood. But the Master sent
me running to fetch you, and said
no time should be wasted.
MISTRESS SHAW
Drink tea, Nigger Platt?
SOLOMON
Thank you, Mistress, but I don't
dare.
MISTRESS SHAW
Would you knowed Massa Epps's
consternation ta be any lessened
wit your timely return? Anger be
his constant condition. Sit,
Nigger Platt. Sit and drink the
tea that offered.
Solomon knows better, but he sits and the Mistress has
tea poured for him.
MISTRESS SHAW (CONT'D)
What'n was Epps's concern?
SOLOMON
...I'd rather not say...
12 Years a Slave 05.18.11 85.
MISTRESS SHAW
L'il gossip on the Sabbath be
fine. All things in moderation.
Solomon is not sure what to say. He struggles to be as
diplomatic as possible.
SOLOMON
As you are aware, Master Epps can
be a man of a hard countenance.
There are times when it is
impossible to account for his
logic. You know he has ill
feelings toward your husband.
MISTRESS SHAW
He do.
SOLOMON
Master Epps has somehow come to
believe, as incorrectly as it may
be, that Master Shaw is... That
he is something of a lothario and
an unprincipled man. A misguided
belief born out of their mutual
competition as planters, no doubt.
MISTRESS SHAW
No doubt...if not born outta truth
itself.
The Mistress waves to Shaw. Shaw, unsuspecting of the
conversation, waves back.
SOLOMON
I'm certain, with regard to
Patsey's well being, Master Epps
concern is only to mind what is
his.
MISTRESS SHAW
Nothin' Epps desire come outta
concern. It all outta jealously.
SOLOMON
I meant no disrespect.
MISTRESS SHAW
He ain't heard you.
SOLOMON
I meant no disrespect to you,
Mistress.
MISTRESS EPPS
Ha! You worry for me? Got no
cause to worry for my senses.
Nigger Epps, I ain't felt the end
of a lash in 'mo years than I cain
recall. Ain't worked a field,
12 Years a Slave 05.18.11 86.
(MORE)
neither. Where one time I served,
now I got others servin' me. The
cost to my current existence be
Massa Shaw broadcasting his
affections. 'N me enjoining his
pantomime of fidelity. If that
what keep me from the cotton
pickin' niggers, that what it be.
A small and reasonable price to be
paid 'fo sure.
Looking toward Patsey:
MISTRESS SHAW
I knowed what it like to be the
object of Massa's predilections
and peculiarities. And I knowed
they can get expressed with
kindness or wit violence. A lusty
visit in the night, or a
visitation from the whip. And wit
my experience, if'n I can give
comfort, then comfort I give. And
you take comfort, Patsey; the Good
Lord will manage Epps. In His own
time the Good Lord will manage dem
all. Yes, Lordy, there's a day
comin' that will burn as an oven.
May be sooner, or it may be later,
but it comin' as sure as the Lord
is just. When His will be
done...the curse on the Pharos is
a poor example of all that wait
'fo the plantation class.
As if to punctuate her thought, the Mistress takes a sip
of her tea.
EXT. EPPS'S PLANTATION - LATER
Solomon and Patsey are returning from Shaw's. Waiting on
the porch of the Great House, a drunk Epps beckons for
Patsey to go to him. Aware of his lewd intentions,
knowing what's waiting for her, Patsey begins to lightly
cry.
PATSEY
Platt... De old hog-jaw beckon.
SOLOMON
Do not look in his direction.
Continue on as though he's gone
unobserved by you.
Epps does not care to be ignored. He lifts himself and
moves toward the pair in a rage.
EPPS
Patsey...!
12 Years a Slave 05.18.11 87.
MISTRESS EPPS (CONT'D)
Solomon moves between Epps and Patsey, cutting Epps off
as Patsey continues on. Playing up his "ignorance" of
the situation:
SOLOMON
Found her, Master, and brought her
back just as instructed.
EPPS
What'd you tell her? What'd you
say to Pats?
SOLOMON
No words were spoken. None of
consequence.
EPPS
Lie! Damned liar! Saw you
talkin' with 'er jus now. Tell
me!
SOLOMON
I cannot speak of what did not
occur.
Epps grabs Solomon.
EPPS
I'll cut your black throat.
Solomon pulls away from Epps, ripping his shirt in the
process. Epps gives chase. Solomon begins to run around
the cotton field, easily keeping his distance. Epps,
however is undeterred. He moves after Solomon as
speedily as he can, which isn't very speedily at all.
And quickly he tires. He's forced to bend over and suck
air. Solomon maintains his distance, barely breathing
hard. His breath returned to him, Epps starts up the
chase again. Solomon runs on out of reach. Shortly,
Epps again stops, gets his breath... And now in what
should be quite comical, Epps again runs after Solomon.
Again, Epps vigor leaves him before he can even get close
to the slave.
Dropping down to the dirt, in a show of regret and piety:
EPPS (CONT'D)
Platt... Platt, liquor filled me.
I admit that it did, and I done
over reacted. It's the Lord's
day. Ain't nothin' Christian in
us carryin' on like this. Help me
ta my feet, and let us both pray
forgiveness.
Epps extends a hand to Solomon. Cautiously, Solomon
moves close, but not too close. As Solomon draws within
striking distance, Epps lunges for him. He chases
Solomon on until he is again out of breath and once more
drops down. And again offering a treaty:
12 Years a Slave 05.18.11 88.
EPPS (CONT'D)
Platt...Platt, I'm all done in. I
have met my limitations, and I
ain't equal to 'em. I concede to
yah, but in the name of valor,
help yer master to his feet.
Solomon cautiously moves closer to help. Again he is
attacked by Epps - this time by knife. Sort of. Epps is
too drunk and tired to fully open the blade - and chased
far around the field by Epps. ALL OF THE PRECEDING
SHOULD BE MORE FUNNY THAN SHOCKING. A CHANGE OF PACE
FROM THE OTHERWISE NECESSARY BLEAKNESS OF SLAVE LIFE.
At the house appears Mistress Epps.
MISTRESS EPPS
Platt... Platt!
Solomon goes to her.
MISTRESS EPPS (CONT'D)
Wha's the commotion?
SOLOMON
A misunderstanding is all. It
began when I was sent to retrieve
Patsey from where she'd taken
sabbatical at Master Shaw's. Upon
returning, Master Epps believed
Patsey and me to be in
conversation when we were not all.
I tried to explain, but it lead to
all this.
MISTRESS EPPS
Edwin! Edwin, bring yerself ta
me.
Sheepishly, he goes to the Mistress.
MISTRESS EPPS (CONT'D)
What is it? What is yer
fascination with Pats?
EPPS
I wouldn't say it--
MISTRESS EPPS
Ya cain't remain the Sabbath
without her under your eye? Ya
are a no-account bastard.
EPPS
Hold a moment...
MISTRESS EPPS
A filthy, godless heathen. My bed
is too holy for yah ta share.
12 Years a Slave 05.18.11 89.
EPPS
Wha's...wha's he been tellin' yah?
MISTRESS EPPS
Of yer misbegotten ways.
EPPS
And he would know what of
anythin'? I ain't even spoken
with him today. Platt, yah lyin'
nigger, have I? Have I?
Discretion being the better part and all, Solomon remains
silent.
EPPS (CONT'D)
There; there's all the truth he
got. Damned nigger. Damn yah.
Epps push back into the house. The Mistress follows.
EXT. MASTER EPPS'S PLANTATION/FIELD - DAY
With the sun yet again high in the sky the slaves are
working the field picking cotton. As before they sing a
spiritual, the only thing that distracts them from the
tedium at hand.
But there is no distracting from the heat. We see Henry
begin to falter before it... And eventually collapse
right in the dirt. Though the other slaves take note,
none move to help him. None dare.
From Treach rather matter of factly:
TREACH
Get him water.
Edward runs to fetch a gourd. He carries it to Henry,
DUMPS THE WATER ON HIM, BUT DOES NOT ACTUALLY GIVE HENRY
ANYTHING TO DRINK.
Roused, Henry rights himself.
EDWARD
Go'won. Git up.
Unsteadily, Henry lifts himself and heads back into the
field. He joins in again with the spiritual, as if the
song is all that can keep him going.
INT. MASTER EPPS'S PLANTATION/SLAVE SHACKS - NIGHT
The slaves are asleep. Epps arrives, again without
knocking, with his whip in hand. The slaves stir. Bob
asks:
12 Years a Slave 05.18.11 90.
BOB
We dance tonight, massa?
Epps remains quietly focused on Patsey. And it's clear
from her apprehensive expression just what it is he's
come looking for. This time there is no escaping it. As
if to acknowledge the badness to come, Phebe lightly
cries.
EXT. MASTER EPPS'S PLANTATION/FIELD - NIGHT
WE MAKE A HARD CUT TO THE FIELD. Lit by moonlight, the
cotton sets off an otherworldly glow. Into this space
Epps is dragging Patsey. Far out into the field, he
stops, stands as if gathering his manhood, then he's all
over Patsey. He is rough and clumsy. It looks like
something between an awkward rape and a virgin attempting
his first sexual encounter.
Patsey does not respond in any way other than to
continually turn her head from Epps, but otherwise remain
as still as possible. If there is such a thing, she is
vicious with her passive aggressiveness.
Epps's frustration mounts until - as the Mistress Shaw
had cautioned - he crosses the line from passion to
violence. He begins slapping Patsey to get a response
from her. When that fails, he punches her which only
leads to him taking up his whip and lashing Patsey
MERCILESSLY. Still, she gives him nothing. Beaten,
Patsey sits in the dirt among the cotton, Epps deep
breathing above her. The desire for sex now having left
him.
Epps heads from the field. Patsey is left where she is.
EXT. MASTER EPPS'S PLANTATION/GREAT HOUSE - DAY
As Solomon makes his way back from the field, Mistress
Epps calls to him. As previously, she has a list in hand
that she holds out to him.
MISTRESS EPPS
Platt...
INT. BARTHOLOMEW'S - LATER
As before, Solomon waits as Bartholomew fills Mistress
Epps order. Among the items set before Solomon is
another quantity of foolscrap.
EXT. ROAD - LATER
Solomon is making his way back to the Epps plantation.
He carries with him a sack filled with the goods from the
store. As he walks, SOLOMON LOOKS AROUND CASUALLY. When
12 Years a Slave 05.18.11 91.
he is certain he is alone, he sets down the sack, opens
it and appropriates A SINGLE SHEET OF THE PAPER which he
folds and places in his pocket. That done, he cinches up
the sack and continues on his way.
EXT. MASTER EPPS'S PLANTATION/GREAT HOUSE - LATER
Solomon returns and delivers the items to the Mistress.
MISTRESS EPPS
No issues, Platt?
SOLOMON
No issue, Mistress.
INT. EPPS'S PLANTATION/SLAVE SHACK - LATER
Solomon takes the slip of paper and hides it within his
fiddle. Perhaps the safest place he can think of. He
acts as though he's hiding away found gold. In reality
it's more than that. The paper for him is a first step
toward freedom.
INT. MASTER EPPS'S PLANTATION/MAIN HOUSE - EVENING
It's another night of Epps's forced revelry. Coming in
quick from the previous scene, we go from Solomon holding
his fiddle, to playing it as the slaves are again made to
dance.
Mistress Epps brings out a tray of freshly baked
pastries. She sets them down on a table.
MISTRESS EPPS
A moment from the dancing. Come
sample what I baked for y'all.
The slaves, thankful for the rest as much as the food,
file toward the tray reciting a chorus of "Thank you,
Mistress." As Patsey moves toward the pastries:
MISTRESS EPPS (CONT'D)
There'll be none for you, Patsey.
Patsey merely turns away. Her non responsiveness,
however, serves only to incite the Mistress. Screaming:
MISTRESS EPPS (CONT'D)
Yah see that? Did yah see the
look of insolence she give me?
EPPS
Seen nothin' but her turn away.
MISTRESS EPPS
It was hot, hateful scorn. It
filled that black face. Yah tell
12 Years a Slave 05.18.11 92.
(MORE)
me yah did'n see it, then yah
choose not to look, or yah sayin'
I lie.
EPPS
Whatever it was, it passed.
MISTRESS EPPS
Is that how you are with the
niggers? Let every ill thought
fester in 'em. Look at 'em. They
foul with it; foul with their
hate. You let it be, it'll come
back to us in the dark a night.
Yah want that? Yah want them
black animals to leave us gut like
pigs in our own sleep?
Epps isn't sure how to respond to the inchoate berating.
It's an invitation for the Mistress to continue.
MISTRESS EPPS (CONT'D)
You are manless. A damned eunuch
if ever there was. And if yah
won't stand for me, I'd pray you'd
at least be a credit to yer own
kind and beat every foul thought
from 'em.
Epps does nothing. The Mistress lets her anger loose.
She moves quickly to Patsey, DRIVES HER NAILS INTO THE
SLAVE'S FACE AND DRAWS THEM DOWN ACROSS HER FEATURES.
FIVE DEEP AND BLOODY GASHES ARE LEFT IN PATSEY'S SKIN,
the moment marked with appropriate screams. Patsey
collapses on the floor, covering her bleeding face.
Mistress Epps:
MISTRESS EPPS (CONT'D)
Beat it from 'em!
Thoroughly cuckolded by the Mistress's actions, Epps
takes his whip and pulls Patsey out of the house. His
intentions are plain.
All the slaves remain silent. The Mistress, however,
displaying high satisfaction, entreats the others:
MISTRESS EPPS (CONT'D)
Eat. Fill yourselves. ...And
then we dance.
They eat, but without a hint of levity.
INT. MASTER EPPS'S PLANTATION/SLAVE SHACK - NIGHT
We come up on the slaves who lay sleeping. All except
for Patsey. She rises from her bedding, goes to a corner
12 Years a Slave 05.18.11 93.
MISTRESS EPPS (CONT'D)
of the cabin and removes something from a secretive
location. She then moves over to Platt.
PATSEY
Platt... Platt, you awake?
SOLOMON
I am.
PATSEY
I have a request; an act of
kindness.
Patsey displays what she took from hiding. It is a
LADY'S FINGER RING.
PATSEY (CONT'D)
I secreted it from the Mistress.
SOLOMON
Return it!
PATSEY
It yours, Platt.
SOLOMON
...For what cause?
PATSEY
All I ask: end my life. Take my
body to the margin of the swamp--
Solomon looks at Patsey as though she were insane.
SOLOMON
No.
PATSEY
Take me by the throat. Hold me
low in the water until I's still
'n without life. Bury me in a
lonely place of dyin'.
SOLOMON
No! I will do no such thing.
The...the gory detail with which
you speak--
PATSEY
I thought on it long and hard.
SOLOMON
How does such despair even come to
you?
PATSEY
How can you not see it? I got no
comfort in this life; caught up
between Massa's lust 'n Mistress's
12 Years a Slave 05.18.11 94.
(MORE)
hate. If I cain't buy mercy from
yah, I'll beg it.
SOLOMON
There are others. Beg them. Why
do you consign me to eternal
damnation with such an un-Godly
request?
PATSEY
There is God here! God is
merciful, and He forgive merciful
acts. Won't be no hell for you,
Platt. But you leave me damned
with every breath I draw. Born
into this station, twenty-two year
I suffer. My body so rent it 'mo
scars than flesh. End my misery,
Platt. Do what I ain't got the
strength ta do myself. End it.
Solomon says nothing. Clearly he's not about to do the
deed. As if delivering a curse:
PATSEY (CONT'D)
One day I will look upon yah, 'n
you'll know yah shoulda freed me
when there was the chance.
BLACK
EXT. MASTER EPPS'S PLANTATION/FIELD - DAY
Hard times on the planation. Where previously the field
in bloom was a carpet of white, it is now patchy and
under grown.
The slaves move through the field picking not cotton, but
rather CATERPILLARS from the plants. The caterpillars
have dined on the cotton and nearly destroyed the crop.
Epps is beside himself as he looks out over his ruined
field.
EPPS
It is a plague.
TREACH
Caterpillars.
EPPS
A plague! It's damn Biblical.
Two season God done sent a plague
to smite me. I am near ruination.
Why Treach? What I done that God
hate me so? Do I not preach His
word?
12 Years a Slave 05.18.11 95.
PATSEY (CONT'D)
TREACH
The whole Bayou is suffering.
EPPS
I don't care nothin' fer the damn
Bayou. I'm sufferin'.
Epps looks among his slaves at work, his enmity growing.
EPPS (CONT'D)
It's that Godless lot. They
brought this on me. I bring 'em
God's word, and heathens they are,
they brung me God's scorn.
Crazed, Epps runs into the field, taking himself from
slave to slave delivering a whipping to all he can lay
his hands on.
EPPS (CONT'D)
Damn you! Damn you all! Damn
you!
EXT. ROAD - DAY
Henry, Bob, Edward and Solomon are being transported in a
cart driven by Epps. SOLOMON HAS HIS FIDDLE WITH HIM.
Along the way, on the side of the road, they see a SLAVE
BEING ATTACKED BY DOGS as PATROLLERS - BOTH WHITES AND A
FEW NATIVE AMERICANS - just stand and watch. The poor
slave lets out an AGONIZING SCREECH as he is ripped at by
the animals. A horrific sight, but a far too common end
for slaves that seek freedom by running.
EXT. JUDGE TURNER'S PLANTATION - EVENING
Epps delivers his slaves to JUDGE TURNER, a distinguished
man and extensive planter whose large estate is situated
on Bayou Salle within a few miles of the gulf. Epps and
Turner stand off to one side engaged in bargaining as
Henry, Bob, Edward and Solomon wait and watch.
As they wait, playing in the near background, another
group of SLAVES near a wagon are being divvied up. Among
them are a MALE SLAVE, and a FEMALE SLAVE. She is
perhaps his wife, or his sister... Some relation. For
whatever capricious reason, the Male Slave is herded back
to the wagon while the Female is forced to stay. Clearly
the pair are being split up, AS WE HAVE SEEN FAR TO OFTEN
WITH BLACK FAMILIES TO THIS POINT. This time, the Male
Slave will not remain idle as his relation is taken from
him. He tries to claw past the OVERSEERS screaming for
her.
The Overseers beat the man down, beat him back to wagon.
Despite this, the man continues to yell after the woman
as the wagon pulls away.
12 Years a Slave 05.18.11 96.
The woman is comforted by another female slave, ANNA, who
herself seems traumatized by both the physical and
psychological violence of the events..
Seemingly oblivious to what has just transpired, Epps
returns to his slaves and gives a parting salutation.
EPPS
Yer Judge Turner's for the season.
For more if need be, until my crop
return. It's my little fortune
he'll even have yah. Every
planter in the bayou is trying to
unload his niggers on 'em. So
yah'll bring no disrespect to me,
and yah'll bring no biblical
plagues to him. Be decent, ere I
will return to deliver an ungodly
whippin'.
INT. SLAVE SHACK - NIGHT
Slaves are crammed into the shack - LITERALLY ON TOP OF
EACH OTHER - as they try to sleep. Some lay, some sit
up. Packed in like cattle, there is barely room to move
let alone draw a deep, clean breath. There is a real
risk of suffocating in the mass. Among them some cough
and wheeze. A CHILD CRIES...
Among them is Solomon who must believe at this point that
his life has reached its very lowest point. The odds of
survival are slight, let alone the chance of actually
ever returning to his family. This clearly weighs on him
as he struggles to find anything like comfortable space
in the pen.
EXT. CANE FIELDS - DAY
An OVERSEER is explaining to the new slaves - SOLOMON
AMONG THEM - how to cultivate cane. WITH A KNIFE IN HAND
he demonstrates the process:
OVERSEER
Draw the cane from the rick, cut
the top and flags from the stalk,
understand? Leave only that part
which is sound and healthy. Cast
off the rest...
EXT. CANE FIELDS - DAY
ABOUT THIRTY SLAVES are working the field. They are
divided into THREE GANGS. The first which draw the cane,
the next lay the cane in the drill, the last then hoe the
rows after.
12 Years a Slave 05.18.11 97.
Solomon is among a gang that draws and cuts, and he moves
with speed and skill. Certainly more so than he
displayed picking cotton.
Standing with his overseer, Judge Turner watches.
INT. SLAVE SHACK - NIGHT
Again, the slaves have been herded into the shack and
pressed together.
As he tries to rest - sleep is nearly impossible -
Solomon finds himself face to face with a woman, ANNA -
the woman who we caught for a moment previously. She is
awake. For a few beats she avoids eye contact with
Solomon. If not in regard for what personal space he
has, then for a certain trepidation she seems to have and
desire to carry alone. She seem, like Solomon, to be
unaccustomed to her surroundings and horribly frightened
by them. Eventually her eyes meet Solomon's. She makes
no sound, but great apprehension spills from her eyes.
Whatever's next, whatever horror awaits, she can barely
stand to face. Fear, proximity... They drive her hand
to Solomon's. After a moment of seemingly reacquainting
herself with genuine human contact, the woman TAKES
SOLOMON'S HAND AND PRESSES IT TO HER BREAST. Solomon
tries to jerk his hand away, but ANNA HOLDS IT IN PLACE.
Manipulating Solomon's hand, she begins to massage her
breast. Solomon takes no real pleasure in the act -
really, neither does Anna. THERE SHOULD BE A TRUE SENSE
ANNA IS JUST SO VERY, VERY DESPERATE FOR HUMAN CONTACT,
FOR THE NEED TO FEEL ALIVE AND LIKE A PERSON RATHER THAN
AN ANIMAL THAT EMOTIONALLY SHE IS WILLING TO ENGAGE
SOLOMON.
The need quickly compounds. Anna presses her lips to
Solomon's. Eventually, SHE DIRECTS HIS HAND BENEATH HER
DRESS AND BETWEEN HER LEGS. Solomon, with slightly more
compassion than a guy making union wages, BEGINS TO
MANIPULATE ANNA WITH HIS HAND. The act remains more
perfunctory than passionate.
We can see Anna moving toward climax and eventual
release. But more - or substantially less - than joyous
sex, it is really just a drug-like inoculation against
reality. But the feeling quickly fades. All that
remains, as with most chance encounters, is regret.
And there is shame, too. This is put on display as Anna
turns away from Solomon. As quickly as it began, it is
as though the act had not happened at all.
EXT. TURNER PLANTATION - MORNING
Slaves are making their way out to the cane field. As
Solomon trudges off to labor, he notices a wagon being
LOADED UP WITH FEMALE SLAVES. Among them is ANNA, fear
quite thick on her face as she is about to be delivered
12 Years a Slave 05.18.11 98.
to some as of yet unknown fate. As little as he knows of
her, as awkward as it was, the pair shared a moment and
it is a moment not easily discarded. Solomon is almost
unconsciously propelled toward Anna.
Before Solomon can close the distance, the DRIVER chides
the horse team and the wagon departs.
Anna again looks back to Solomon, her eyes quietly
pleading for him to do...something. But there is nothing
for him to do. Nothing he can do. The wagon rolls
on...and then it and Anna are gone.
EXT. TURNER PLANTATION - EVENING
Segregated slightly from other salves, Solomon sits
before a small fire. A thought comes to Solomon.
Crossing to some fencing, he tears loose a bit of wire.
With the wire Solomon fashions a loop. Holding the wire
to the flame of the fire, Solomon heats it until it
glows, takes a moment...THEN PRESSES THE LOOP TO THE
FLESH OF HIS LEFT INNER-FOREARM. He winces greatly, and
his eyes well not merely from the pain of the burns, but
from other complexities as well. Solomon repeats the
process again and again, renting his flesh in near selfmutilation - as though doing penance - and circling the
burns until the marks resemble the STAIN GLASS FLOWER
ELIZABETH HAD MADE FOR HIM. Here, at nearly his lowest
point, Solomon literally burns the memory of his family
onto himself.
EXT. JUDGE TURNER'S PLANTATION/GREAT HOUSE - EVENING
Solomon waits outside the house on the porch. As he
waits he slides his finger tips over his still freshlyburned tattoo. A HOUSE NIGGER approaches and admonishes
Solomon.
HOUSE NIGGER
Off the porch. Get off.
Like a dog shooed away, Solomon steps down.
Eventually Judge Turner exits the house and crosses to
Solomon.
SOLOMON
...Sir...
JUDGE TURNER
Platt is it? Have you cultivated
cane previously?
SOLOMON
No, sir, I have not.
JUDGE TURNER
You take to it quite naturally.
12 Years a Slave 05.18.11 99.
SOLOMON
I surprise myself. I was poor for
cotton picking, and suffered the
lash on a schedule. For whatever
reason the Lord has chosen to give
me skills in the cane he has
withheld otherwise.
JUDGE TURNER
From where do you hail?
SOLOMON
Washington, sir.
JUDGE TURNER
And upon bill of sale, here you
came directly?
SOLOMON
Sir.
JUDGE TURNER
You play the fiddle?
SOLOMON
I do.
JUDGE TURNER
Where did you learn?
SOLOMON
Over time. Here and there.
JUDGE TURNER
Are you educated?
SOLOMON
Niggers are hired to work, not to
read and write.
JUDGE TURNER
Epps warned that I should mind you
above all. However, I cannot help
but take note of you. You don't
carry yourself like the other
niggers, and I sense that you have
seen more of the world than you
admit.
SOLOMON
I am just what is before you, sir.
Nothing more.
If anything Turner is impressed by Solomon's ability to
dodge.
JUDGE TURNER
What is before me is far too
clever to be relegated to the
field. You are to be elevated to
12 Years a Slave 05.18.11 100.
(MORE)
a driver in the sugar house.
We'll see if you take to the whip
as well as the cane. You'll board
with the other trustees.
SOLOMON
Sir.
JUDGE TURNER
And Platt, now and again I hear of
patrons in need of a good fiddler.
I will pass along your name. What
you earn is yours to keep.
INT. JUDGE TURNER'S PLANTATION/SUGAR HOUSE - DAY
The mill is an "immense brick building" where the cane is
refined. There is much machinery: boilers, an endless
carrier made of chain and wood... The sugar house is
worked by ADULT SLAVES AND CHILDREN ALIKE.
A BLACK DRIVER hands Solomon a lash. Though well
familiar with being on the receiving end of the whip,
Solomon is unsure of how to handle the business end.
SOLOMON
How do I use it?
DRIVER
It's a lash. Easy as usin' a door
knob. 'Cept wit a lash people pay
ya mind.
INT. JUDGE TURNER'S PLANTATION/SUGAR HOUSE - LATER
SLAVES working, toiling. Solomon watches over them, but
does little else. The OVERSEER, not satisfied with the
work being done, calls to Solomon.
SUGAR HOUSE OVERSEER
Drive them niggers!
SOLOMON USES THE LASH SPARINGLY AND POORLY, barely
touching the slaves before him. The Overseer does not
hesitate in using the lash on Solomon.
SUGAR HOUSE OVERSEER (CONT'D)
Drive them niggers.
Solomon uses the lash again, but this time with more
authority. What choice does he have?
EXT. TURNER PLANTATION - LATER
Work over, the slaves congregate to eat.
12 Years a Slave 05.18.11 101.
JUDGE TURNER (CONT'D)
As Solomon eats, he takes note of the JUICE FROM SOME
BERRIES ON HIS PLATE.
EXT. JUDGE TURNER'S PLANTATION - EVENING
We see a DUCK making its way along a water bank. Moving
quickly, Solomon LEAPS INTO FRAME and pounces on it. The
bird in grasp, Solomon pulls a feather loose.
EXT. TURNER PLANTATION - NIGHT
Secreted away out near the edge of the bayou and sitting
by a small fire, Solomon takes the slip of paper from his
fiddle. It is yellowed, showing age, but still usable.
Dipping the duck's feather - a quill - into the crushed
berries, Solomon attempts to write a bit on the paper.
The berry juice, too free-flowing, is unusable as ink.
Solomon returns the paper to the fiddle. He has some
scraps of food with him, which he snacks on.
INT. YARNEY'S HOUSE - EVENING
A party has commenced at the noble home of one MR.
YARNEY. A group of REVELERS have gathered and are on the
dance floor. As entertainment, SOLOMON PLAYS THE FIDDLE,
and does so with his usual liveliness. Clearly a good
time is being had by all.
INT. YARNEY'S HOUSE/STUDY - LATER
Gay voices filter from the main room as off in a study
stand Solomon and Yarney. A very pleased Mr. Yarney is
presenting Solomon with 17 dollars in coins.
YARNEY
I have never seen it before; merry
makers so pleased with a
performance they take up a
contribution. Seventeen dollars,
Platt. I'd say that'd make you a
millionaire among niggers.
Certainly the wealthiest on the
Bayou. And how will you spend it?
Furniture for your cabin, a pocket
knife, perhaps. A coat, hat?
Some smart new shoes.
SOLOMON
I cannot say. I am too amazed by
the amount.
YARNEY
Seventeen dollars. The world is
yours.
12 Years a Slave 05.18.11 102.
EXT. ROAD - EVENING
Solomon is returning to Judge Turner's on foot. There is
only the moonlight with which to light his way. As he
travels, Solomon hears steps behind him. He turns and
sees TWO BLACKS. Solomon relaxes. Fellow blacks; surely
they mean him no harm. As Solomon looks them over
carefully - their clothes tatters and they themselves
covered in dirt - it becomes quite clear they are not
just slaves. A fact confirmed when they step menacingly
toward Solomon, ONE WITH A SHIV IN HAND.
At first it seems they want his money. Worse, THEY GO
FOR HIS FIDDLE.
Solomon has but a moment to brace himself before he is
attacked, TAKING A CUT TO THE ARM. Solomon fights back,
picking up a pine knot and striking his attacker over the
head. That takes the fight out of him, and both men
retreat back the way they came leaving Solomon be.
INT. JUDGE TURNER'S PLANTATION/SUGAR HOUSE - DAY
Solomon is again driving slaves, using the whip to spur
them to work harder. He does so with perhaps a bit more
vigor; his displaced anger directed at the slaves before
him.
EXT. TURNER PLANTATION - NIGHT
Alone out on the edge of the Bayou, Solomon is playing a
low air on his violin WHILE SNACKING ON SCRAPS OF BACON.
As he plays, something appears in the distance. From the
edge of the bayou, coming forth like an apparition arisen
from the earth, is CELESTE. She is a young woman of
about 19 years of age and far whiter than most blacks.
"IT REQUIRED CLOSE INSPECTION TO DISTINGUISH IN HER
FEATURE THE SLIGHTEST TRACE OF AFRICAN BLOOD." Beyond
that, she is pale and haggard, but still lovely.
Celeste moves to Solomon without fear or hesitation. As
Solomon, startled, takes her in, Celeste says quite
plainly:
CELESTE
I am hungry. Give me food.
SOLOMON
Who are you?
CELESTE
I'm hungry.
SOLOMON
All I have are some scraps of
bacon.
12 Years a Slave 05.18.11 103.
Solomon gives her some of his food. Celeste, famished,
devours it.
SOLOMON (CONT'D)
What is your name?
CELESTE
My name is Celeste.
SOLOMON
What are your circumstances?
CELESTE
I belong ta Massa Carey, and 'ave
been two days among da palmettoes.
Celeste is sick and cain't work,
and would rather die in the swamp
than be whipped to death by the
overseer. So I took myself away.
Massa's dogs won't follow me. The
patrollers 'ave tried to set dem
on me. But dey a secret between
dem and Celeste, and dey won't
mind the devilish orders of the
overseer.
Celeste lifts her head from the food she gnaws on.
CELESTE (CONT'D)
Do you believe me?
SOLOMON
Yes.
CELESTE
Why?
SOLOMON
There are some whose tracks the
hounds will refuse to follow.
CELESTE
Give me more food. I'm starvin'.
SOLOMON
This is all my allowance for the
rest of--
CELESTE
Give it to me.
Almost as if compelled, Solomon does as ordered. As she
eats, Celeste aggrandizes herself:
CELESTE (CONT'D)
Most slaves escape at night. The
overseers are alert for such
chicanes. But Celeste tricked dem
'n alight in the middle of the day
wit the sun up at its highest.
12 Years a Slave 05.18.11 104.
(MORE)
The place of my concealment now
deep in the swamp, not half a mile
from Massa's plantation, and a
world apart. A world a tall
trees whose long arms make fo' a
canopy so dense dey keep away even
the beams of the sun. It twilight
always in Celeste's world, even in
the brightest day. I will live
there, and I will live freely.
The overseers are a cowardly lot.
Dey will not go where their dogs
show fear and where it always be
night. Others will join me, in
the twilight and we ain't gunna be
slaves no 'mo forever.
Solomon isn't sure what to say. Before he can say
anything:
CELESTE (CONT'D)
Celeste will come to you again in
the night. You will have food for
her.
Celeste departs the way she came; as though she were a
vision.
EXT. JUDGE TURNER'S PLANTATION/FOOD STORAGE - NIGHT
Solomon stealthfully makes his way into the storage shed.
Dried and smoked meats are hung, and milled corn is
about. Taking out a handkerchief, Solomon begins to load
it with food. Not too much. Not so much his thievery
will be readily noticed, but he does avail himself.
EXT. TURNER PLANTATION - NIGHT
Solomon plays his violin, but plays it with an anxious
nature as he waits.
Then, as before, a figure appears in the distance. It is
Celeste coming out of the night. She makes her way
directly to Solomon. With no greeting, she asks:
CELESTE
I am hungry.
Solomon gives Celeste the handkerchief he's filled. She
opens it, and begins to devour the food. As she eats,
she asks:
CELESTE (CONT'D)
I was rude, and didn't even ask yo
name.
12 Years a Slave 05.18.11 105.
CELESTE (CONT'D)
SOLOMON
Platt.
(beat)
Solomon. Solomon is my true name.
CELESTE
Was you free?
SOLOMON
I was. I am.
Solomon exposes his wrist, displays his tattoo as he
announces:
SOLOMON (CONT'D)
I remain free in my heart.
Giving a laugh as though it's the silliest thing she's
heard.
CELESTE
Free heart means nothin if'n yo
body gunna die a slave.
SOLOMON
I will not.
CELESTE
Celeste knows you ain't gunna run.
Celeste knows it ain't your
nature.
SOLOMON
I have other plans.
Celeste gives a look. She is curious to hear more.
Solomon, both conspiratorially and accentuating what he
considers to be his own cleverness:
SOLOMON (CONT'D)
I have secreted a piece of paper.
Just a slip of foolscrap. I have
kept it safe and dry for years on.
Nearly relinquished my life
protecting it. I am experimenting
with ways to create ink. When
that is accomplished I will write
a letter.
CELESTE
A letter to...?
SOLOMON
There are those in New York of
much substance who will spare no
energy to secure my liberty. Once
I have the letter to them, it is
only a matter of time before I am
free.
12 Years a Slave 05.18.11 106.
CELESTE
How'll ya mail da letter? Who
will trust to post it? A nigger
that can read and write is a
nigger that'll hang.
Solomon can't answer this question. It is the glaring
hole in his plan.
CELESTE (CONT'D)
No. Solomon will never again see
New York. Celeste's words is
harsh, I know, but dey true. I
entreat yah to come live wit me in
the constant twilight. I entreat
yah for your body to not die no
slave.
Having finished eating:
CELESTE (CONT'D)
Celeste will come again in de
night. You will bring her 'mo
food.
SOLOMON
I risk discovery to take more.
CELESTE
You will bring Celeste 'mo food.
And with that Celeste again moves back into the darkness.
INT. TURNER PLANTATION/SUGAR HOUSE - DAY
Solomon is at his station driving slaves. A WHITE FIELD
OVERSEER approaches, his countenance quite stern.
FIELD OVERSEER
Platt. Come along.
Solomon fears his thievery has been discovered. He
begins to remove his whip.
FIELD OVERSEER (CONT'D)
Naw. Bring yer whip.
Solomon follows the Overseer from the Sugar House.
EXT. TURNER PLANTATION - MOMENTS LATER
Solomon is walked out to the field. The two slaves who
previously attacked Solomon in the night are present.
Both are bound and muzzled strictly and look to have
already been thoroughly beaten. There, too, is Judge
Turner along with a couple of WHITE PATROLLERS and
several NATIVE AMERICANS who have captured the runaways.
There is one among the group who is of MIXED RACE, black
12 Years a Slave 05.18.11 107.
and Native American. Though his skin is fairer as would
be a Native American, HIS HAIR HAS THE KINK OF AN AFRO.
The Judge asks of Solomon:
JUDGE TURNER
Do you recognize them, Platt? Are
these the pair who accosted you?
Solomon stares, but does not dare answer.
JUDGE TURNER (CONT'D)
Runaways from a plantation in the
vicinity of Lamourie. Hidden away
for three weeks. The Bayou is
full with them. Look carefully.
Are they those who meant to take
your life?
SOLOMON
I don't know their intent.
JUDGE TURNER
What else could it be? Beyond
their hunger and desperation,
their heads are filled to the
point of lunacy with mythic idyll
of life in the north. Nothing
good will ever come of a nigger in
flight.
SOLOMON
I cannot say what plans they held
for me.
JUDGE TURNER
But these are the two, then?
SOLOMON
I am uncertain.
JUDGE TURNER
You may have your satisfaction
with them. You deserve as much
and they deserve no better.
SOLOMON
Master, I am uncertain.
JUDGE TURNER
Look. Look careful.
Solomon does, but does not reply.
JUDGE TURNER (CONT'D)
Even to you the features of your
own kind are indistinguishable.
The eyes. Subdued, and their eyes
still burn. Is their hate
familiar to you? Is it the hate
12 Years a Slave 05.18.11 108.
(MORE)
that came at you in the night?
Have your way with them, Platt.
Solomon does not move for his whip. He says as
convincingly as possible.
SOLOMON
They are not the ones.
Turner may not quite believe Solomon, but he does not
speak against him. The Judge to the Patrollers:
JUDGE TURNER
Return them to Lamourie, but strip
them bare and parade them in the
streets. Make a show of it. A
reminder to all the price of
flight is of no bad consequence.
Back to work, Platt.
Solomon watches at the slaves are stripped of the
remainder of their clothing and are dragged away.
JUDGE TURNER (CONT'D)
No worries, Platt. We'll have
your niggers soon enough.
BLACK
EXT. TURNER PLANTATION - EVENING
Solomon is picking at the bark of a white maple.
EXT. TURNER PLANTATION - EVENING
In a tin cup, over a fire, Solomon boils the white maple
bark in just a bit of water.
INT. JUDGE TURNER'S PLANTATION/SLAVES CABIN - NIGHT
As others sleep, by the light of dying coals, Solomon
uses the quill to test the boiled bark. The liquid holds
as a form of ink. It is not ideal, but it is legible on
the page. Armed with this, Solomon writes his letter.
EXT. TURNER PLANTATION - NIGHT
Solomon sits with Celeste. He relates his news to her.
SOLOMON
I have my letter. I succeeded in
making ink by boiling white maple
bark. When all were asleep in the
cabin, by the light of the coals,
lying upon my plank couch I
12 Years a Slave 05.18.11 109.
JUDGE TURNER (CONT'D)
(MORE)
managed to complete a somewhat
lengthy epistle. The letter is
directed to an old acquaintance at
Sandy Hill stating my condition
and urging him to take measures to
restore me to liberty.
CELESTE
Yah has your freedom then?
SOLOMON
All that remains is to contrive
measures by which the letter can
safely be deposited in the post
office.
When Celeste speaks she is quite melancholy.
CELESTE
I have resolved to return to my
Massa.
Solomon gives an unnerved look. This is not good news.
SOLOMON
Is it more food you need?
CELESTE
I live in fear.
SOLOMON
None will come after you in the
swamps.
CELESTE
It ain't the patrollers I scared
of... At all seasons the howling
of wild animals can be heard at
night along the border of the
swamps. At first their calls were
welcomin'. Dey too was free, 'n I
thought dey greeted me like a
sistah. Lately, dey cries have
turned horrifyin'.
SOLOMON
The solitude plays tricks. It's
your impression, nothing more.
CELESTE
Several times now they made me a
midnight call, awakening me from
what little sleep I take wit a
terrifyin' growl. They mean to
kill Celeste.
SOLOMON
If you go back to your master you
face the same.
12 Years a Slave 05.18.11 110.
SOLOMON (CONT'D)
CELESTE
My freedom been nothin' but a
daydream. So was Celeste's
thoughts of slaves conjoinin' in
the bayou. It is lonely dwellin'
waiting for others who won't never
come.
SOLOMON
Better the loneliness. You have
been free most of the summer.
Return now and your master will
make example of you. Celeste, go
north. Make your way by night...
CELESTE
It'll only be worse if'n Celeste
don't go back of her own will.
SOLOMON
You won't be caught. The dogs
won't track you. You are...you
are unique. Please, Celeste...
Celeste considers this. But her course of action is
clear:
CELESTE
You got alternatives, Solomon.
Celeste got no one to write a
letter to.
As if to punctuate her resolve, without a word more
Celeste departs toward the swamp.
SOLOMON
Celeste... Celeste!
She continues on and disappears into the night. Solomon
will never see her again.
BLACK
EXT. EPPS'S PLANTATION - DAY
We come up now outside of Master Epps's plantation. Epps
stands in the drive. He's in surprisingly good spirits
as Solomon - AGED SEVERAL YEARS NOW - Wiley and Bob
trudge their way toward Epps and his other slaves who are
gathered.
The cotton field is in full bloom, the crop fully
returned.
EPPS
A joyous day. A joyous day. Dark
times is behind us. Clean livin'
'n prayer done lifted the plague.
12 Years a Slave 05.18.11 111.
Indicating to the cotton:
EPPS (CONT'D)
As thick 'n white as New England
snow. 'N now my niggers is
returned to me.
(to Solomon)
Heard Judge Turner made you a
driver. A driver? Oh, did you
beguile him, Platt, with your
slick nigger ways? Well, yah
won't stand idle with a lash in
hand. Not on my land. Much work
to do. Days of old long since,
eh? Joyous indeed.
Throughout Epps's welcome, Solomon's focus is on Patsey
who is lined up with the other slaves. SHE IS NOW MORE
HAGGARD THAN WHEN WE LAST SAW HER. Her face and arms
display many new scars. It's clear that in the
intervening years she has quite literally been a whipping
boy for Epps and the Mistress.
EXT. EPPS'S PLANTATION/COTTON FIELD - DAY
The slaves are out working on the field. Among their
ranks is a white man, ARMSBY. He is wholly unskilled at
picking cotton, and he puts little effort into the job.
As we meet him he seems a decent sort if a little short
on self-motivation. In anachronistic terminology, he'd
be called a "slacker."
INT. MASTER EPPS'S PLANTATION/GIN HOUSE - EVENING
As Epps said, it is days of long since. The slaves are
back to having their cotton weighed in the Gin House
EPPS
Wiley...?
TREACH
Two hundred sixty pounds.
EPPS
Bob?
TREACH
Three hundred forty pounds for
Bob.
EPPS
Patsey?
TREACH
Five hundred twenty pounds.
EPPS
Platt?
12 Years a Slave 05.18.11 112.
TREACH
One hundred sixty pounds.
Before Treach is even done announcing the weight, Epps
has pulled Solomon aside to where Uncle Abram already
awaits his fate.
EPPS
Armsby?
TREACH
Sixty four pounds.
Epps speaks to Armsby sternly, but nothing of the manner
in which he would address the slaves.
EPPS
A good days labor would average
two hundred pounds.
ARMSBY
Yes, sir.
EPPS
I'm sure in time y'll develope as
a picker, but it takes effort,
boy. Put some damn effort into
it.
ARMSBY
Yes, sir.
To Treach, regarding Solomon and Abram:
EPPS
Take 'em out. Get to whippin'.
No force is needed. The slaves understand the situation.
They follow Treach out of the Gin house.
EXT. EPPS'S PLANTATION/SLAVE SHACK - NIGHT
We come in after the punishment has been dealt. Patsey
tends to Uncle Abram's back as Armsby applies liniments
to Solomon's. As he does, Armsby muses:
ARMSBY
It's a tragedy. How does such
come to pass? Working a field and
picking cotton like a lowly hand.
I'm of a damn sight better
station. And my desires never
lacked for imagination, though I
will admit they have at times been
short on ingenuity. But only at
times. I've worked as an
overseer, you know.
12 Years a Slave 05.18.11 113.
SOLOMON
I did not, sir.
ARMSBY
Not "sir." Just Armsby. Not owed
more than any other in the field.
I worked plantations from
Virginia, down into Alabama. I
could manage easy a hundred slaves
and have done so. But to toil in
the field? Never thought that
would come to pass. Never. But
times are desperate. Where once I
had said "no" to Epps and his
merger offerings, I returned cap
in hand. ...Look at what I've
become.
SOLOMON
How did you arrive at such a
place, if I may ask?
ARMSBY
Ask. It's just conversation.
From a pocket Armsby produces a flask.
ARMSBY (CONT'D)
I became a little too dependant on
the whisky, a little too
undependable on the job. Before
you say I'm just a sorry drunkard,
let me state my case: As reliable
employment as overseeing is, it's
no easy chore on the spirit. I
say no man of conscious can take
the lash to another human day in,
and day out without shredding at
his own self. Takes him to a
place where he either makes
excuses within his mind to be
unaffected... Or finds some way
to trample his guilty sensations.
Well, I trampled.
Armsby takes a drink.
ARMSBY (CONT'D)
And with frequency.
SOLOMON
Where is your place of birth?
ARMSBY
Maryland. Have you traveled
there?
SOLOMON
...I cannot say that I have.
12 Years a Slave 05.18.11 114.
ARMSBY
Fine country. More seasonal than
the bayou. A deal less humid.
SOLOMON
Why did you leave it?
ARMSBY
To make my fortune, of course. I
gave in to tales of wealth and
prosperity that were the lore of
the southern states: all that's
needed being a patch of land and a
few good growing seasons. Cotton,
or tobacco. And then locating a
proper bank to store your riches.
But such profitable outcomes are
reserved for the plantation
masters. It's the lot of the rest
of us to serve. So I settled to
be an overseer, and failed as well
at that. In the meantime my
dreams gave way to reality. Now,
I want nothing more than to earn a
decent wage. And get myself home.
Armsby takes another drink and leans back.
ARMSBY (CONT'D)
Oh, to be a nigger. Not a concern
in the world and every need taken
care off. Consider yourself
fortunate, Platt. It's the plight
of the white to worry.
INT. MASTER EPPS'S PLANTATION/SLAVE SHACKS - MORNING
We again hear the sound of the HORN BLOWING signaling the
start of the work day for the slave.
EXT. MASTER EPPS'S PLANTATION/FIELD - DAY
With the sun yet again high in the sky the slaves are
working the field picking cotton. As before they sing a
spiritual, the only thing that distracts them from the
tedium at hand.
But there is no distracting from the heat. We see Uncle
Abram begin to falter and finally drop down to the
ground.
Treach calls to Edward:
TREACH
Get him water.
Edward runs to fetch water which he carries to Abram and
DUMPS ON HIM...BUT ABRAM DOES NOT RISE. DOES NOT MOVE.
12 Years a Slave 05.18.11 115.
At this point, the sounds of the singing from the others
tapers off as they realize Abram isn't getting up.
EXT. MASTER EPPS'S PLANTATION/FIELD - LATER
We are beyond the main of the plantation, the cotton
field in the background. Solomon, Bob and Wiley are
digging a grave in the dirt. The uncovered body of Abram
lays near. Having dug down an appropriate distance, the
three men take the body and, very unceremoniously, place
it into the ground. That done, they begin to cover it
with dirt. It is all the more of a funeral that Abram
will receive.
INT. MASTER EPPS'S PLANTATION/GIN HOUSE - EVENING
As always, the day's pickings are again being weighed.
TREACH
One hundred sixty pounds for
Wiley.
Clearly displeased, Epps pulls Wiley from the line.
EPPS
Platt?
TREACH
Eighty eight pounds for Platt.
Epps moves to Solomon. As way of explanation but with
defiance:
SOLOMON
...We buried Abram today...
EXT. MASTER EPPS'S PLANTATION/GIN HOUSE - LATER
WE MAKE A QUICK CUT TO THE OUTSIDE OF THE GIN HOUSE. The
reason for their low totals obviously doesn't matter as
Solomon, Bob and Wiley receive a lashing for their lack
of productivity.
As the last lash falls on his back, Epps moves directly
to Solomon.
EPPS
You are a disgrace. Unfit ta
associate with a decent cottonpickin' nigger. The Lord don't
ignore even the lowest of his
animals. But the Almighty hold
you in such low regard He give you
no skills. None. How miserable
your shabbiness must be.
(beat)
12 Years a Slave 05.18.11 116.
(MORE)
Get yerself clean. We dance
tonight.
INT. EPPS'S PLANTATION/SLAVE SHACK - NIGHT
Solomon lays down, but can't rest. The harshness of this
life has mounted to the point he can take no more. He
gets up, he goes to RETRIEVE THE SMALL SACK IN WHICH HE
KEEPS HIS EARNINGS AS WELL AS HIS LETTER. But thinking
better of it, Solomon returns the letter to hiding. He
takes the money with him and cautiously moves from the
cabin.
EXT. MASTER EPPS'S PLANTATION - LATER
Solomon is heading through the darkness toward another
small cabin on the property. There is the light of the
lantern in the window. Solomon steels himself, knocks on
the door. From inside we hear:
ARMSBY (V.O.)
Enter.
INT. EPPS'S PLANTATION/ARMSBY'S SHACK - LATER
The door opens. Solomon enters. Armsby is surprised to
see him. So much so, he isn't sure what greeting to
give. Solomon gives a blunt introduction. Re: the
coins:
SOLOMON
The proceeds of my fiddling
performances. A few picayunes,
but all I have in the world. I
promise them to you if you will do
me the favor I require. But I beg
you not to expose me if you cannot
grant the request.
ARMSBY
What is it you ask?
SOLOMON
First, your word, sir.
ARMSBY
On my honor.
SOLOMON
It is a simple enough request. I
ask only that you deposit a letter
in the Marksville post office.
And that you keep the action an
inviolable secret forever. The
details of the letter are of no
consequence. Even at that, for me
to write it would be a self12 Years a Slave 05.18.11 117.
EPPS (CONT'D)
(MORE)
imposition of much pain and
suffering.
ARMSBY
Where's the letter now?
SOLOMON
It is not yet composed. I will
have it in a day. Two at most.
Armsby considers the request.
ARMSBY
I will do as you ask. And will
accept whatever payment is
offered.
Solomon hesitates. In the moment, he's not so sure he
can wholly give himself over to trust.
ARMSBY (CONT'D)
To assist you, I put my own self
at risk. I will do so, but not
without fair compensation.
Solomon hands over the money.
ARMSBY (CONT'D)
Compose your letter. We will meet
again. In two days?
SOLOMON
In two days. ...Thank you.
Solomon exits.
INT. EPPS'S PLANTATION/SLAVE SHACK - NIGHT
Solomon rests but does not sleep. He has set himself on
a course, one from which there is no departure.
EXT. EPPS'S PLANTATION/COTTON FIELD - DAY
Solomon and the slaves pick cotton. Armsby is
conspicuously NOT laboring in the field. As Solomon
works he is watched by Epps. Watched more than he
normally is. For a moment it seems it might just be a
matter of perspective; Solomon's unease over his actions.
But soon Epps is joined by Armsby. The two men stand and
talk, their looks locked toward Solomon.
Whatever it is that is occurring between them continues
for a long, long moment. But Epps makes no move toward
Solomon. Solomon continues with his work.
12 Years a Slave 05.18.11 118.
SOLOMON (CONT'D)
INT. EPPS'S PLANTATION/SLAVE SHACK - NIGHT
The slaves are at rests. Gripping his whip Epps enters,
without so much as a knock at the door. For a moment
there's curiosity; is he there for a dance, for
Patsey...?
Looking right to Solomon:
EPPS
Get up.
Solomon does. Epps heads back out into the dark. He
says nothing, but his directive is clear: Follow me.
EXT. MASTER EPPS'S PLANTATION/SLAVE SHACK - CONTINUOUS
Solomon comes out into the dark. Nearly hidden in the
shadows is a bitter Epps. Despite the lack of light,
Epps's malevolence is quite clear. His whip twisting in
his hand.
EPPS
Well, boy. I understand I've got
a larned nigger that writes
letters and tries to get white
fellows to mail 'em.
Solomon, hardly missing a beat, plays this off.
SOLOMON
Don't know nothing about it,
Master Epps. Don't know nothing
about it, sir.
EPPS
Yah wasn't over with Armsby night
before last?
SOLOMON
No, master.
EPPS
Hav'nt yah asked that fella to
mail a letter fer yah at
Marksville?
Without overplaying things, Solomon gets real slick.
SOLOMON
Why, Lord, master, I never spoke
but three words to him in all my
life. I don't know what you mean.
EPPS
Well, Armsby tol' me today the
devil was among my niggers. That
I had one that needed close
watchin' or he would run away.
12 Years a Slave 05.18.11 119.
(MORE)
When I axed him why, he said you
come over to him and waked him up
in the middle of the night and
wanted him to carry a letter to
Marksville. What have yah got to
say to that?
SOLOMON
All I have to say, master, is all
that need be said. There is no
truth in it. How could I write a
letter without ink or paper?
There is nobody I want to write to
'cause I hain't got no friends
living as I know of. That Armsby
is a lying drunken fellow, they
say, and nobody believes him
anyway. You know I always tell
the truth, and that I never go off
the plantation without your given
word. Now, master, I can see what
that Armsby is after, plain
enough. Didn't he want you to
hire him for an overseer?
EPPS
...Yes...
SOLOMON
That's it. He wants to make you
believe we're all going to run
away and then he thinks you'll
hire an overseer to watch us. He
just made that story out of whole
cloth, 'cause he wants to get a
situation. It's all a lie,
master, you may depend on't.
Epps shallow mind is so easily manipulated Solomon is
able to work it as though he were performing origami. We
can nearly see Epps's thoughts being folded.
EPPS
I'm damned, Platt, if I don't
believe you tell the truth. He
must take me for a soft, to think
he can come it over me with them
kind of yarns, musn't he? Maybe
he think he can fool me. Maybe he
thinks I don't know nothing...
Can't take care of my own niggers.
Soft soap old Epps. Damn Armsby!
Set the dogs on him, Platt. That
filthy unloved bastard. He will
not separate me from my niggers.
I will drive him from my land
before the sun comes over it.
Ohh, were he not free and white,
Platt. Were he not free and
white.
12 Years a Slave 05.18.11 120.
EPPS (CONT'D)
Epps heads off to do as promised.
EXT. MASTER EPPS'S PLANTATION - NIGHT
Having found a lonely spot, Solomon has struck a small
fire. He has in his hand his letter. With no ceremony,
he casts it upon the flames and watches it burn.
BLACK
EXT. MASTER EPPS'S PLANTATION - DAY
It's the Sabbath. The slaves are left to themselves to
do their own chores. At the moment they are down by the
river washing their clothes in the water. Missing from
the field of labor is Patsey, for whom Epps hollers.
EPPS
Patsey... Patsey!
Epps comes down to the bank and asks of the slaves:
EPPS (CONT'D)
Where is she? Where is Patsey?
No one answers.
EPPS (CONT'D)
Talk, Damn you!
PHEBE
We have no knowledge of her,
Massa.
EPPS
The hell you don't! You know
where she is! She run off, ain't
she? She's escaped, and you
miserable black dogs stand like
the deef and dumb. My best cotton
picking nigger! My best. I'd
give yah all up for her. Where
she gone?
Not a word spoken. Epps wades in and among the slaves
and begins to whip at them recklessly.
EPPS (CONT'D)
Speak! Speak!
The slaves say nothing. There is nothing for them to
say. They don't know where she is. Eventually Epps
slows, then stops. He drops down in great sorrow.
EPPS (CONT'D)
She run off... Pats run off.
12 Years a Slave 05.18.11 121.
EXT. EPPS'S PLANTATION - LATER
Epps sits on the piazza looking quite forlorn. He looks
up only to see Patsey returning to the plantation. Epps
steps up to greet her, with anger rather than relief.
As they hear his angry voice, the slaves step around from
where they are hanging their laundry to dry.
EPPS
Run off. Run off, did you?
PATSEY
Massa Epps--
EPPS
You miserable wench! Where you
been?
PATSEY
I been nowhere.
EPPS
Lies to your misdeeds!
PATSEY
The Sabbath day, Massa. I took me
a walk to commune wit da Lord.
EPPS
Bring the Lord into yer
deceptions? Yah Godless...
Shaw's. Comin' from Shaw's
plantation weren't yah?
PATSEY
...No...
EPPS
Yah didn't run, did yah? Yah took
yerself ta pleasure Shaw. Yah
gave baser passion to that
unblushin' libertine!
Solomon tries to intervene:
SOLOMON
Master Epps--
EPPS
Now yah speak? Now that yah want
to add to 'er lies yah find yer
tongue.
Epps goes to strike Solomon, but Patsey pulls his arm
back.
PATSEY
Do not strike him. I went to
Massa Shaw's plantation!
12 Years a Slave 05.18.11 122.
EPPS
Yah admit it.
PATSEY
Freely. And you know why.
Patsey takes soap from the pocket of her dress.
PATSEY (CONT'D)
I got this from Mistress Shaw.
Misstress Epps won't even grant me
no soap ta clean with. Stink so
much I make myself gag. Five
hundred pounds 'a cotton day in,
day out. More than any man here.
And 'fo that I will be clean; that
all I ax. Dis here what I went to
Shaw's 'fo.
EPPS
You lie...
PATSEY
The Lord knows that's all.
EPPS
You lie!
PATSEY
And you blind wit yer own
covetousness. I don't lie, Massa.
If you kill me, I'll stick ta
that.
EPPS
Oh, I'll fetch you down. I'll
learn you to go to Shaw's. Platt,
run get four stakes and straps a
leather.
At first Solomon does not move. Epps level all his rage
at him:
EPPS (CONT'D)
Get them stakes!
Solomon runs quickly to the tool shed. In short order he
returns with the stakes and a hammer.
EPPS (CONT'D)
Drive 'em into the ground.
As Solomon does so, Epps gives an order to Wiley and
Edward.
EPPS (CONT'D)
Strip her. Strike her bare 'n
lash her to the stakes.
12 Years a Slave 05.18.11 123.
Mistress Epps has now come from the Great House. She
gazes on the scene with an air of heartless satisfaction.
Now tied face down to the stakes, Epps stands over Patsey
with his whip.
EPPS (CONT'D)
Yah done this to yerself, Pats!
Epps hoists the whip to strike, holds it high...but no
matter his rage, Epps cannot bring himself to deliver the
blow. He looks to Mistress Epps who now stands gloating
and spurring him on.
MISTRESS EPPS
Do it! Strike the life from her.
Epps again hoists the whip. It trembles in his hand
ahead of the act... But he does not have it in him to
deliver such a beating. Turning to Solomon, thrusting
the whip at him:
EPPS
Beat her.
Solomon doesn't move. Epps shoves the whip into his
hand.
EPPS (CONT'D)
Give her the whip. Give it all to
her!
Patsey, begging to Solomon:
PATSEY
I'd rather it you, Platt.
EPPS
Strike her, or yah'll get the
same!
Solomon takes a step back. He unfurls the whip... He
begins to whip Patsey. Lash after lash, Patsey squirms
before it. Epps eyes fill with tears, he is nearly too
distraught to watch.
But the Mistress... She is not satisfied with Solomon's
half-hearted effort.
MISTRESS EPPS
He pantomimes. There ain't barely
a welt on her. That's what your
niggers make of yah; a fool fer
the takin'.
Epps's grief is replaced by fury. Directly to Solomon:
EPPS
Yah will strike her. Yah will
strike her until her flesh is rent
12 Years a Slave 05.18.11 124.
(MORE)
and meat and blood flow equal, or
every nigger in my sight will die!
Solomon can't do it, even if it means his life. But from
the ground, from Patsey:
PATSEY
Do it, Platt. Don't stop until I
am dead.
What else can he do? Solomon begins to whip, to truly
whip Patsey. Her back welts, then tears... Patsey
screams in agony. Solomon strikes again and again...
After a full thirty lashes Solomon looks to Epps, who is
not satisfied.
EPPS
Until I say no more! I ain't said
nothing!
Solomon strikes another ten to fifteen times. By now, as
promised, Patsey's back has been reduced to LITTLE MORE
THAN TORN MEAT AND BLOOD.
Finally, Solomon tosses down the whip he can and will do
no more.
EPPS (CONT'D)
Strike her! Strike her!
Solomon will not. Epps takes up the whip and whips
Patsey with "ten fold" greater force than he had. The
painfully loud and angry curses of Epps load the air.
Patsey by now is terribly lacerated - Solomon describes
without exaggeration literally flayed. The lash wet with
blood which flowed down her sides and dropped upon the
ground. At length Patsey ceases struggling. Her head
sinks listlessly on the ground. Her screams and
supplications gradually decrease and die away into a low
moan. It would seem that she was dying.
Solomon, screaming at Epps:
SOLOMON
Thou devil! Sooner or later,
somewhere in the course of eternal
justice thou shalt answer for this
sin.
EPPS
No sin. No more 'n if it'd kicked
a chair that wouldn't stand right,
or a stove that was no good for
holdin' fire. Things that give me
consternation. A man does how he
pleases with his property. At the
moment, Platt, I am of great
pleasure. You be goddamn careful
I don't come to wantin' to
lightenin' my mood no further.
12 Years a Slave 05.18.11 125.
EPPS (CONT'D)
By contrast to this horror, the field of cotton smiles in
the warm sunlight. The birds chirp merrily amidst the
foliage of the tress. Peace and happiness seems to reign
everywhere.
Everywhere else.
Epps leaves Patsey to herself. He says not a word to the
Mistress as he passes. The Mistress herself heads back
into the house.
Solomon unties Patsey, lifts her and takes her to the
cabin.
INT. CABIN - LATER
Patsey is laid on some boards where she remains for a
long time with eyes closed and groaning in agony. Phebe
applies melted tallow to her wounds, and all try to
assist and console her.
In time Patsey opens her eyes. She looks to Solomon.
She does not say a word. She just looks at him...and
then her eyes close again.
BLACK
EXT. MASTER EPPS'S PLANTATION/GREAT HOUSE - DAY
Planks of wood are being delivered and unloaded.
EXT. MASTER EPPS'S PLANTATION/GREAT HOUSE - DAY
The slaves are now employed working on an extension to
the Great House. Overseeing the project is MR. AVERY.
The slaves themselves work under the direction of MR.
BASS, a large man, between forty and fifty years old, of
light complexion and light hair. He is cool and selfpossessed, fond of argument, but always speaking with
extreme deliberation as well as a Canadian accent.
EXT. MASTER EPPS'S PLANTATION/GREAT HOUSE - DAY
As the slaves continue to work, there is a conversation
going on between Epps and Bass. Bass much skilled in the
art of sophistry, while Epps's arguments are fueled
mostly by emotion alone. Though at first Epps does
little more than joke his way around the facts.
Solomon, working still, can't help but overhear.
BASS
I tell you what it is, Epps. It's
all wrong. All wrong, sir.
There's no justice nor
12 Years a Slave 05.18.11 126.
(MORE)
righteousness in slavery. I
wouldn't own a slave if I was rich
as Croesus, which I am not, as is
perfectly well understood. More
particularly among my creditors.
There's another humbug: the credit
system. Humbug, sir. No credit,
no debt. Credit leads a man into
temptation. Cash down is the only
thing that will deliver him from
evil. But this question of
slavery; what right have you to
your niggers when you come down to
the point?
EPPS
What right? I bought 'em. I paid
for 'em.
BASS
Of course you did. The law says
you have the right to hold a
nigger, but begging the law's
pardon...it lies.
EPPS
You are daft.
BASS
Yes, Epps, when the law says that
it's a liar, and the truth is not
in it. Is everything right
because the law allows it?
Suppose they'd pass a law taking
away your liberty and making you a
slave?
EPPS
That ain't a supposable case.
Hope you don't compare me to a
nigger, Bass.
BASS
In the sight of God, what is the
difference, Epps, between a white
man and a black one?
EPPS
Yah might as well ask what the
difference is between a white man
and a baboon. Now, I seen one of
them critters in Orleans that
knowed just as much as any nigger
I got. Yah'd call them fellers
citizens, I s'pose?
BASS
Look here, Epps. You can't laugh
me down in that way.
(pointed)
Some men are witty, and some ain't
12 Years a Slave 05.18.11 127.
BASS (CONT'D)
(MORE)
so witty as they think they are.
But let that pass. These niggers
are human beings. If they don't
know as much as their masters,
whose fault is it? They are not
allowed to know anything. You
have books and papers, and can go
where you please, and gather
intelligence in a thousand ways.
But your slaves have no
privileges. You'd whip one of
them if caught reading a book.
They are held in bondage,
generation after generation,
deprived of mental improvement.
Who can expect them to posses much
knowledge If they are not brought
down to a level with the brute
creation, you slaveholders will
never be blamed for it. If they
are baboons, or stand no higher in
scale of intelligence than such
animals, you and men like you will
have to answer for it. There's a
sin, a fearful sin, resting on
this nation that will not go
unpunished forever. There will be
a reckoning yet.
The "funny" has completely gone out of the conversation
for Epps. Quite coldly:
EPPS
You like to hear yourself talk,
Bass, better than any man I know
of. Yah'd argue that black was
white, or white black if anybody
would contradict you. A fine
supposition if yah lived among
Yankees in New England. But yah
don't. You most assuredly do not.
INT. MASTER EPPS'S PLANTATION/GREAT HOUSE/ADDITION -
EVENING
Solomon and Bass are working together alone on the
extension. From the amount of work that's been done on
it, it should be obvious that days have now passed.
Solomon makes a cautious approach to Bass. As casually
as he can he inquires:
SOLOMON
Master Bass, I want to ask you
what part of the country you came
from?
BASS
What put that into your head?
12 Years a Slave 05.18.11 128.
BASS (CONT'D)
SOLOMON
You would know if I should tell
you.
BASS
I was born in Canada. Now guess
where that is.
SOLOMON
Oh, I know where Canada is. I
have been there myself.
BASS
Have you?
SOLOMON
Montreal and Kingston and
Queenston and a great many places.
And I have been in York state,
too. Buffalo and Rochester and
Albany, and can tell you the names
of the villages on the Erie canal
and the Champlain canal.
Bass gives Solomon a long and curious stare.
BASS
Well traveled for a slave. How
came you here?
SOLOMON
Master Bass, if justice had been
done I never would have been here.
BASS
How's this? Tell me all about it.
SOLOMON
I am afraid to tell you, though I
don't believe you would tell
Master Epps if I should.
BASS
Every word you speak is a profound
secret.
Solomon holds a moment. Hasn't he heard the same promise
before? Prior to Solomon stating his case, WE FADE TO:
BLACK
INT. MASTER EPPS'S PLANTATION/GREAT HOUSE/ADDITION -
NIGHT
The dark has fallen. Hours have passed. Bass reflects
on the story that Epps has told in the intervening.
12 Years a Slave 05.18.11 129.
BASS
How many years all told?
SOLOMON
Just nearly...just passed eleven.
BASS
Your story is...it is amazing, and
in no good way.
SOLOMON
Do you believe, sir, in justice as
you have said?
BASS
I do.
SOLOMON
That slavery is an evil that
should befall none?
BASS
I believe so.
SOLOMON
If you truly do, I would ask...I
would beg that you write my
friends in the north, acquainting
them with my situation and
beseeching them to forward free
papers, or take such steps as they
might consider proper to secure my
release.
Bass is somewhat overwhelmed by what Solomon has just
told him. It takes him a moment to reconcile its
magnitude.
BASS
You understand the danger of such
an act in case of detection. Your
story, true or not; what we
attempt is punishable in the
strictest way.
SOLOMON
I understand.
BASS
And you understand as well the
necessity of strict silence and
secrecy.
SOLOMON
Yes.
BASS
I need to take note; names and
addresses of those you think can
12 Years a Slave 05.18.11 130.
(MORE)
aide you. Not here, not now. Can
you sneak away in the night?
INT. MASTER EPPS'S PLANTATION/KITCHEN - DAY
From the kitchen, we see Solomon stealing a candle and
some matches.
EXT. MASTER EPPS'S PLANTATION - NIGHT
Solomon is alone in the dark at the riverbank. He lights
the candle. Waits... After a short while someone
approaches. Solomon nervously expects discovery, but it
is Bass.
EXT. MASTER EPPS'S PLANTATION - LATER
By the light of the candle Bass, armed with paper and a
writing instrument, writes as Solomon gives him names.
SOLOMON
...William Perry, Cephas Parker
and Judge Marvin, all of Saratoga
Springs, Saratoga county, New
York. I had been employed by the
later in the United States Hotel,
and had transacted business with
the former a considerable extent,
and trust that at least one of
them would be still living at that
place.
BASS
It is so many years since you left
Saratoga. All these men may be
dead, or may have removed. You
say you obtained papers at the
Custom House in New York.
Probably there is a record of them
there. And I think it would be
well to write and ascertain. I
will take the letters to
Marksville and post them from
there. After that, I must travel.
I will return to Marksville in ten
week's time. I will enquire then
about responses before returning
here.
They sit on the banks quietly for a time as they absorb
the enormity of their undertaking. Finally, from
Solomon, a hint of hopeful emotion creeps forth though it
is dispensed in a very matter-of-fact fashion.
SOLOMON
It would be unspeakable happiness
to clasp my wife and family again.
12 Years a Slave 05.18.11 131.
BASS (CONT'D)
BLACK
EXT. MASTER EPPS'S PLANTATION/GREAT HOUSE/ADDITION - DAY
The addition is well on its way to being finished.
Slaves continue to work on it, Solomon in particular. As
they work, Bass comes riding up on a horse. Solomon
tries to remain calm but we can see the anxiety building
in him.
Bass talks with Avery a bit, then makes his way casually
to Solomon. His news is not good.
BASS
No letter yet, Platt.
SOLOMON
You are certain?
This hits Solomon hard. Recovering, emphatic:
SOLOMON (CONT'D)
Write again.
BASS
No use.
SOLOMON
There is every use. My freedom.
BASS
No use. I have made up my mind to
that. I fear the Marksville post
master will mistrust something, I
have inquired so often at his
office. Too uncertain. Too
dangerous. I have talked too
openly of freedom for niggers. I
have concern for my own life now.
My beliefs have struck up against
my fears. I will be honest that
my fears preside.
Solomon just then begins to realize the finality of the
situation. The truth of that is clear, though Bass
cannot articulate it. Instead:
BASS (CONT'D)
I have a job or two on hand which
can be completed shortly. By that
time I shall have a considerable
sum of money, and then, Platt, I
am leaving. I have lived in this
region long enough. I am tired of
slavery as well as you. ...I go
with a heavy heart that I could do
no more for you.
12 Years a Slave 05.18.11 132.
With much regret for his own failure of effort and
spirit, Bass moves on.
INT. MARKSVILLE POST OFFICE - DAY
We are in the office of MR. WADDILL, the Post Master of
Marksville. At the moment he is seated across from Mr
HENRY NORTHUP. The careful eye will recognize him.
At the moment the conversation is regarding a book which
Waddill holds - Uncle Tom's Cabin.
WADDILL
It's liberal fantasy, of course.
Some call it literature. To my
way of thinking it's sedition.
Incredible that we have come this
far. Or sunk this low; there is a
true and genuine market for such
twaddle. Dangerous days, sir.
Dangerous. Far too much
politickin'. The Soft Shells, the
Hard Shells, the Hunkers and Barn
Burners and Woolly Heads and
Silver Grays... And the worst of
the lot; the Free Soilers and the
Abolitionists. They take root
like a malignant plant. The north
is lost to us. No offense.
Northup gives a noncommittal nod.
WADDILL (CONT'D)
It is the territories we must hang
on to, now. And by any measure.
NORTHUP
The Free Soilers, the
Abolitionists; you are liberated
of such kind yourself?
WADDILL
Delightfully. Never...but one
here in Marksville. An eccentric
creature who preaches abolitionism
as vehemently as any fanatic in
the North I would imagine. He is
otherwise a generous, inoffensive
man. But always maintaining the
wrong side of an argument. It
affords us a deal of amusement.
He is an excellent mechanic, and
almost indispensable in the
community. He is a carpenter.
Name a Bass.
NORTHUP
He has become familiar with me.
12 Years a Slave 05.18.11 133.
Waddill gives a look, but before he can respond, Northup
asks:
NORTHUP (CONT'D)
Where may I find this Mr. Bass?
EXT. STREET - EVENING
Bass is exiting his residence. Northup, who has been
waiting, calls to him.
NORTHUP
Mr. Bass?
Bass looks. He does not recognize Northup and is
cautious to say the least.
BASS
Are we acquainted?
NORTHUP
We are not. To the point: Allow
me to ask you if you were on Bayou
Boeuf last August.
BASS
Yes, sir. I was there in August.
NORTHUP
Did you write a letter for a
colored man at that place to some
gentlemen in Saratoga Springs?
BASS
Excuse me, sir, if I say that is
none of your business.
NORTHUP
Perhaps I'm rather hasty, Mr.
Bass. I beg your pardon. But I
have come from the state of New
York to accomplish the purpose of
the writer of a letter post marked
at Marksville. I am in search of
Solomon Northup. If you know him,
I beg you to inform me frankly
where he is, and I assure you the
source of any information you may
give me shall not be divulged if
you desire it not to be.
Bass considers his next words.
BASS
I have done nothing to be ashamed
of. I am the man who wrote the
letter. If you have come to
rescue Solomon Northup, I am glad
to see you.
12 Years a Slave 05.18.11 134.
EXT. MASTER EPPS'S PLANTATION/FIELD - DAY
The Slaves are working in the field. Solomon too focused
on picking cotton to note the arrival of two men by
carriage: Northup and the SHERIFF.
While the Sheriff makes his way to the field, Northup
remains with the carriage. The Sheriff calls:
SHERIFF
Platt...? Where is the boy called
Platt?
SOLOMON
...Sir...
The Sheriff crosses to him.
SHERIFF
Your name is Platt, is it?
SOLOMON
Yes, master.
Pointing off to the distance.
SHERIFF
Do you know that man?
Solomon looks toward the carriage. He has to shield his
eyes from the sun. Recognition is slow coming to him.
But when it does, it hits him as a rush.
SOLOMON
Henry Northup...?
Solomon starts for Northup, but he is pulled back by the
Sheriff who is keen to determine Solomon's true identity.
As he does, Epps makes his way over.
SHERIFF
Stop a moment. Have you any other
name than Platt?
SOLOMON
Solomon Northup is my name.
EPPS
Sheriff...
SHERIFF
Have you a family?
EPPS
What's all this?
SHERIFF
It is official business.
12 Years a Slave 05.18.11 135.
EPPS
My nigger, my business.
SHERIFF
Your business waits.
(to Solomon)
Tell me of your family.
SOLOMON
I have a wife and three children.
SHERIFF
What were their names?
SOLOMON
Elizabeth, Margaret and Alonzo.
SHERIFF
And your wife's name before her
marriage?
SOLOMON
Anne Hampton. I am who I say.
Solomon pushes past the sheriff. As Solomon moves toward
Northup, his pace quickens with each step until his
personal velocity has him nearly at a dead run. The two
old friends make contact with each other, wrap each other
in a long and emotional embrace. It if finally broken by
Epps, who has moved over with the Sheriff.
EPPS
Nah... You will unhand 'em.
Platt is my nigger!
NORTHUP
He is Solomon Northup.
EPPS
You say...
NORTHUP
He belongs to no man.
EPPS
You say! You come here,
unfamiliar to me, and make claims.
SHERIFF
Not claims. I have no doubts.
EPPS
To hell with that! My nigger, and
I'll fight you for 'em!
NORTHUP
As is your right. As it will be
my pleasure to bankrupt you in the
courts. Your decision.
12 Years a Slave 05.18.11 136.
Epps stews for a moment, then seethes toward Solomon:
EPPS
You damned me since you darkened
my eaves. Glad to be done with
yah.
(to Northup)
Take 'em!
SHERIFF
If you know what's wise...we'll
leave.
The trio starts for the carriage. Solomon is pulled back
by the call of Patsey's voice:
PATSEY
Platt...
NORTHUP
We need to make haste.
Disregarding Northup, Solomon crosses over to Patsey.
For a moment they just stand across from each other.
Under the circumstances, neither really knows how to
engage. Finally, suddenly, Patsey throws her arms around
Solomon and they embrace. With all the pain in his heart:
A moment longer they hold each other. They separate,
Solomon heading back to the carriage. He and Northup
alight, the Sheriff taking the reigns. The Sheriff
chides the horses and they start up. As they move on,
Patsey sinks down to the ground, where she remains in a
weary and half-reclining state, the other slaves around
her.
WE STAY WITH HIM as he travels further and further from
the slaves - who are diminished by distance. Solomon
waves a hand to them, but the carriage rounds a bend and
a thicket of trees hides them from his eyes forever more.
BLACK
INT. NORTHUP HOUSE - DAY
It is a scene reminiscent of the top of the show. The
Northup family gathered. Anne, again, in her finest
attire. We see, also, the Northup children: Elizabeth,
who is now twenty two, Margaret who is now twenty -SHE
CARRIES WITH HER A BUNDLE - and Alonzo who is seventeen.
Also present is MARGARET'S HUSBAND. The family waits
patiently, dutifully...but anxiously.
THE DOOR TO THE ROOM OPENS. It is Mr. Northup. He looks
from face to face, makes sure all are prepared for what's
to come. Northup steps from the room. ...A moment later
SOLOMON ENTERS. He is clean, well dressed, but he bears
the scares of his time away.
12 Years a Slave 05.18.11 137.
Anne rises to greet him, but holds back. All around, the
body language of the family is stiff and awkward. They
are, after all - after twelve years - little more than
familiar strangers.
In an effort to minimize the shock of the moment, Solomon
tries to remain emotionally detached. To Anne:
SOLOMON
I apologize for my appearance. I
have had a difficult time of
things these past many years.
Solomon looks among his family. Trying to recall them as
much as they look to see familiarity within him.
SOLOMON (CONT'D)
Elizabeth. Margaret. Alonzo.
You do not recognize me, do you?
How could you? When I was removed
you were but seven; a little
prattling girl playing with her
toys. Now...you've grown to
womanhood. And who is this?
MARGARET
He is my husband.
SOLOMON
Husband?
MARGARET'S HUSBAND
It is very good to meet you, sir.
Solomon almost breaks, but he keeps himself together.
SOLOMON
We have much acquainting to do.
 Margaret rises, she presents her bundle to her father.
MARGARET
And this is your grandson.
Solomon Northup Staunton.
SOLOMON
...Solomon...
MARGARET
We would have no other name for
him. No other.
As much as Solomon was trying to keep his emotions in
check, the sight of his grandson... The fact his
grandson carries his name, is overwhelming. Solomon
breaks down. Emotionally, physically... But ANNE IS
THERE TO CATCH HIM. To lift his body and his spirit.
But even at that their "embrace" remains a bit chaste,
slightly formal. But has she holds him, Anne's fingers
BRUSH THE BURNS ON SOLOMON'S LEFT FOREARM. She pushes up
12 Years a Slave 05.18.11 138.
Solomon's sleeve, she looks at the marks, the flower...
Anne know exactly what it means and why it is on his arm.
In that instant Solomon can no longer maintain his cool
facade. The moment so very overwhelming, Solomon seeks
solace in it. He says to Anne with all his heart:
SOLOMON
Forgive me.
ANNE
There is nothing to forgive.
The pair, joined now by the whole family, hold on to each
other for life...and one would think for all the rest of
their lives.
FADE TO:
BLACK
END
12 Years a Slave 05.18.11 139.

`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
