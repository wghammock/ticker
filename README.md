# ticker

Notes:

1) The View is optimized for a screen ratio of 16:9. 
There is some responsiveness within that ball-park range.

2) ECMAScript 6 support is required, if javascript is disabled an error will display.
When opened in IE, user will be prompted to upgrade browser.

3) A monospace web font is used to create a smoother consistent spacing
To reduce the size of the webfont used, I removed the following chars
ČĆĐŠŽćđšžАБВГҐДЂЕЄЖЗЅИІЙЈКЛЉМНЊОПРСТЋУЎФХЦЧЏШЩЪЫЬЭЮЯабвгґдђеєжзѕиійјклљмнњопрстћуўфхцчџшщъыьэюяΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩαβγδεζηθικλμνξοπρστυφχψωάΆέΈέΉΐΊΰϋΎΏĂÂÊÔƠƯăâêô

4) I've added some good hooks for future use like autoplay and direction, not everything is 100% is
fully flushed out because this is just a demo ; )

5) This was built for and tested on Chrome using Node Http-server
sudo npm install -g http-server

From then on just cd to the folder that has the files you want to serve and type
http-server

More time would be required for testing on all browsers : )


==========================================
==========================================

Original Guidelines:

High Performance Ticker Tape

Create a sportsbook ticker tape component which displays moneyline, spread and total odds for upcoming matches using plain vanilla JavaScript, HTML and CSS.

The ticker tape should have a method to load upcoming match data and then scroll from right to left.  Include buttons in the page which do the following: 

1) stop the ticker
2) start the ticker
3) reload the ticker 
4) block the main UI thread for a noticeable amount of time

When the main UI thread is blocked, the ticker tape should continue.

The deliverable will consist of the following:

1) an HTML page
2) a single Javascript file
3) a single CSS file

Feel free to use JQuery appropriately, but no other JavaScript frameworks should be used.

Here is some sample ticker tape JSON, which includes odds for MLB and NFL matches:

[{"id":5,"name":"MLB","provider_value":"sr:tournament:109","matches":[{"id":20599,"name":"Pittsburgh Pirates VS Philadelphia Phillies","schedule":"2019-08-27T23:05:00+00:00","home_abbreviation":"PHI","away_abbreviation":"PIT","odds":{"home_ml":-147,"favourite_team":"PHI","spread":"1.5","total":"10","away_ml":"+125"}},{"id":20610,"name":"Baltimore Orioles VS Washington Nationals","schedule":"2019-08-27T23:05:00+00:00","home_abbreviation":"WSH","away_abbreviation":"BAL","odds":{"total":"9.5","home_ml":-333,"favourite_team":"WSH","spread":"1.5","away_ml":"+265"}},{"id":20601,"name":"Chicago Cubs VS New York Mets","schedule":"2019-08-27T23:10:00+00:00","home_abbreviation":"NYM","away_abbreviation":"CHC","odds":{"total":"8","away_ml":-116,"favourite_team":"CHC","spread":"1.5","home_ml":-105}},{"id":20604,"name":"Cleveland Indians VS Detroit Tigers","schedule":"2019-08-27T23:10:00+00:00","home_abbreviation":"DET","away_abbreviation":"CLE","odds":{"favourite_team":"CLE","spread":"1.5","total":"9.5","home_ml":"+145","away_ml":-167}},{"id":20600,"name":"Cincinnati Reds VS Miami Marlins","schedule":"2019-08-27T23:10:00+00:00","home_abbreviation":"MIA","away_abbreviation":"CIN","odds":{"total":"7","away_ml":-161,"favourite_team":"CIN","spread":"1.5","home_ml":"+140"}}]},{"id":1,"name":"NFL","provider_value":"sr:tournament:233","matches":[{"id":20426,"name":"Pittsburgh Steelers VS Carolina Panthers","schedule":"2019-08-29T23:00:00+00:00","home_abbreviation":"CAR","away_abbreviation":"PIT","odds":{"total":"33","home_ml":"+155","away_ml":-175,"favourite_team":"PIT","spread":"3.5"}},{"id":20429,"name":"Philadelphia Eagles VS New York Jets","schedule":"2019-08-29T23:00:00+00:00","home_abbreviation":"NYJ","away_abbreviation":"PHI","odds":{"favourite_team":"NYJ","spread":"4","total":"35","home_ml":-200,"away_ml":"+170"}},{"id":20430,"name":"Atlanta Falcons VS Jacksonville Jaguars","schedule":"2019-08-29T23:00:00+00:00","home_abbreviation":"JAC","away_abbreviation":"ATL","odds":{"home_ml":-200,"total":"32","away_ml":"+170","favourite_team":"JAC","spread":"4"}},{"id":20428,"name":"Indianapolis Colts VS Cincinnati Bengals","schedule":"2019-08-29T23:00:00+00:00","home_abbreviation":"CIN","away_abbreviation":"IND","odds":{"favourite_team":"CIN","spread":"3","total":"33.5","home_ml":-156,"away_ml":"+135"}},{"id":20427,"name":"Minnesota Vikings VS Buffalo Bills","schedule":"2019-08-29T23:00:00+00:00","home_abbreviation":"BUF","away_abbreviation":"MIN","odds":{"home_ml":"+135","total":"35","away_ml":-156,"favourite_team":"MIN","spread":"3"}}]}]