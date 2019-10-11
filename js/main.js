// KonekTV Ticker Tape example
//
"use strict";

// Create a sample feed
let feed_example = '[{"id":5,"name":"MLB","provider_value":"sr:tournament:109","matches":[{"id":20599,"name":"Pittsburgh Pirates VS Philadelphia Phillies","schedule":"2019-08-27T23:05:00+00:00","home_abbreviation":"PHI","away_abbreviation":"PIT","odds":{"home_ml":-147,"favourite_team":"PHI","spread":"1.5","total":"10","away_ml":"+125"}},{"id":20610,"name":"Baltimore Orioles VS Washington Nationals","schedule":"2019-08-27T23:05:00+00:00","home_abbreviation":"WSH","away_abbreviation":"BAL","odds":{"total":"9.5","home_ml":-333,"favourite_team":"WSH","spread":"1.5","away_ml":"+265"}},{"id":20601,"name":"Chicago Cubs VS New York Mets","schedule":"2019-08-27T23:10:00+00:00","home_abbreviation":"NYM","away_abbreviation":"CHC","odds":{"total":"8","away_ml":-116,"favourite_team":"CHC","spread":"1.5","home_ml":-105}},{"id":20604,"name":"Cleveland Indians VS Detroit Tigers","schedule":"2019-08-27T23:10:00+00:00","home_abbreviation":"DET","away_abbreviation":"CLE","odds":{"favourite_team":"CLE","spread":"1.5","total":"9.5","home_ml":"+145","away_ml":-167}},{"id":20600,"name":"Cincinnati Reds VS Miami Marlins","schedule":"2019-08-27T23:10:00+00:00","home_abbreviation":"MIA","away_abbreviation":"CIN","odds":{"total":"7","away_ml":-161,"favourite_team":"CIN","spread":"1.5","home_ml":"+140"}}]},{"id":1,"name":"NFL","provider_value":"sr:tournament:233","matches":[{"id":20426,"name":"Pittsburgh Steelers VS Carolina Panthers","schedule":"2019-08-29T23:00:00+00:00","home_abbreviation":"CAR","away_abbreviation":"PIT","odds":{"total":"33","home_ml":"+155","away_ml":-175,"favourite_team":"PIT","spread":"3.5"}},{"id":20429,"name":"Philadelphia Eagles VS New York Jets","schedule":"2019-08-29T23:00:00+00:00","home_abbreviation":"NYJ","away_abbreviation":"PHI","odds":{"favourite_team":"NYJ","spread":"4","total":"35","home_ml":-200,"away_ml":"+170"}},{"id":20430,"name":"Atlanta Falcons VS Jacksonville Jaguars","schedule":"2019-08-29T23:00:00+00:00","home_abbreviation":"JAC","away_abbreviation":"ATL","odds":{"home_ml":-200,"total":"32","away_ml":"+170","favourite_team":"JAC","spread":"4"}},{"id":20428,"name":"Indianapolis Colts VS Cincinnati Bengals","schedule":"2019-08-29T23:00:00+00:00","home_abbreviation":"CIN","away_abbreviation":"IND","odds":{"favourite_team":"CIN","spread":"3","total":"33.5","home_ml":-156,"away_ml":"+135"}},{"id":20427,"name":"Minnesota Vikings VS Buffalo Bills","schedule":"2019-08-29T23:00:00+00:00","home_abbreviation":"BUF","away_abbreviation":"MIN","odds":{"home_ml":"+135","total":"35","away_ml":-156,"favourite_team":"MIN","spread":"3"}}]}]';

// Create TickerTape Class Object
// params notes: auto_start = 1 will play the ticker automatically
// params notes: direction = 1 will scroll the ticker left
class TickerTape {
    constructor(feed = null, auto_start = 1, direction = 1) {
        this.feed = JSON.parse(feed);
        this.play =  auto_start;
        this.direction = direction;

        // Kill the feature if the feed is blank or undefined
        if(!feed){
            this.error();
        } else {
            this.prepare();
        }
    }

    error() {
        console.log('The feed is down or blank');
    }

    // Static Feed Counts - Ensure the feed is not blank
    feed_category_count() {
        return Object.keys(this.feed).length;
    }
    static feed_match_count() {

    }


    start() {
        console.log("Starting...");
        console.log(this.feed);
    }
    stop() {
        console.log("Stoping...");
    }
    prepare() {
        let cat_count = this.feed_category_count();
        console.log(cat_count);

        // Start the feature if auto_play is on
        if( this.play === 1){
            this.start()
        }
    }
}
// End


let konekTicker = new TickerTape(feed_example, 1, 1);