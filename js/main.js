// KonekTV Ticker Tape example
//
"use strict";

// Create a sample feed
// var feed_example = '[{"id":5,"name":"MLB","provider_value":"sr:tournament:109","matches":[{"id":20599,"name":"Pittsburgh Pirates VS Philadelphia Phillies","schedule":"2019-08-27T23:05:00+00:00","home_abbreviation":"PHI","away_abbreviation":"PIT","odds":{"home_ml":-147,"favourite_team":"PHI","spread":"1.5","total":"10","away_ml":"+125"}},{"id":20610,"name":"Baltimore Orioles VS Washington Nationals","schedule":"2019-08-27T23:05:00+00:00","home_abbreviation":"WSH","away_abbreviation":"BAL","odds":{"total":"9.5","home_ml":-333,"favourite_team":"WSH","spread":"1.5","away_ml":"+265"}},{"id":20601,"name":"Chicago Cubs VS New York Mets","schedule":"2019-08-27T23:10:00+00:00","home_abbreviation":"NYM","away_abbreviation":"CHC","odds":{"total":"8","away_ml":-116,"favourite_team":"CHC","spread":"1.5","home_ml":-105}},{"id":20604,"name":"Cleveland Indians VS Detroit Tigers","schedule":"2019-08-27T23:10:00+00:00","home_abbreviation":"DET","away_abbreviation":"CLE","odds":{"favourite_team":"CLE","spread":"1.5","total":"9.5","home_ml":"+145","away_ml":-167}},{"id":20600,"name":"Cincinnati Reds VS Miami Marlins","schedule":"2019-08-27T23:10:00+00:00","home_abbreviation":"MIA","away_abbreviation":"CIN","odds":{"total":"7","away_ml":-161,"favourite_team":"CIN","spread":"1.5","home_ml":"+140"}}]},{"id":1,"name":"NFL","provider_value":"sr:tournament:233","matches":[{"id":20426,"name":"Pittsburgh Steelers VS Carolina Panthers","schedule":"2019-08-29T23:00:00+00:00","home_abbreviation":"CAR","away_abbreviation":"PIT","odds":{"total":"33","home_ml":"+155","away_ml":-175,"favourite_team":"PIT","spread":"3.5"}},{"id":20429,"name":"Philadelphia Eagles VS New York Jets","schedule":"2019-08-29T23:00:00+00:00","home_abbreviation":"NYJ","away_abbreviation":"PHI","odds":{"favourite_team":"NYJ","spread":"4","total":"35","home_ml":-200,"away_ml":"+170"}},{"id":20430,"name":"Atlanta Falcons VS Jacksonville Jaguars","schedule":"2019-08-29T23:00:00+00:00","home_abbreviation":"JAC","away_abbreviation":"ATL","odds":{"home_ml":-200,"total":"32","away_ml":"+170","favourite_team":"JAC","spread":"4"}},{"id":20428,"name":"Indianapolis Colts VS Cincinnati Bengals","schedule":"2019-08-29T23:00:00+00:00","home_abbreviation":"CIN","away_abbreviation":"IND","odds":{"favourite_team":"CIN","spread":"3","total":"33.5","home_ml":-156,"away_ml":"+135"}},{"id":20427,"name":"Minnesota Vikings VS Buffalo Bills","schedule":"2019-08-29T23:00:00+00:00","home_abbreviation":"BUF","away_abbreviation":"MIN","odds":{"home_ml":"+135","total":"35","away_ml":-156,"favourite_team":"MIN","spread":"3"}}]}]';
// var feed_example = '[{"id":1,"name":"NFL","provider_value":"sr:tournament:233","matches":[{"id":20426,"name":"Pittsburgh Steelers VS Carolina Panthers","schedule":"2019-08-29T23:00:00+00:00","home_abbreviation":"CAR","away_abbreviation":"PIT","odds":{"total":"33","home_ml":"+155","away_ml":-175,"favourite_team":"PIT","spread":"3.5"}},{"id":20429,"name":"Philadelphia Eagles VS New York Jets","schedule":"2019-08-29T23:00:00+00:00","home_abbreviation":"NYJ","away_abbreviation":"PHI","odds":{"favourite_team":"NYJ","spread":"4","total":"35","home_ml":-200,"away_ml":"+170"}},{"id":20430,"name":"Atlanta Falcons VS Jacksonville Jaguars","schedule":"2019-08-29T23:00:00+00:00","home_abbreviation":"JAC","away_abbreviation":"ATL","odds":{"home_ml":-200,"total":"32","away_ml":"+170","favourite_team":"JAC","spread":"4"}},{"id":20428,"name":"Indianapolis Colts VS Cincinnati Bengals","schedule":"2019-08-29T23:00:00+00:00","home_abbreviation":"CIN","away_abbreviation":"IND","odds":{"favourite_team":"CIN","spread":"3","total":"33.5","home_ml":-156,"away_ml":"+135"}},{"id":20427,"name":"Minnesota Vikings VS Buffalo Bills","schedule":"2019-08-29T23:00:00+00:00","home_abbreviation":"BUF","away_abbreviation":"MIN","odds":{"home_ml":"+135","total":"35","away_ml":-156,"favourite_team":"MIN","spread":"3"}}]}]';
var feed_example = '[{"id":5,"name":"MLB","provider_value":"sr:tournament:109","matches":[{"id":20599,"name":"Pittsburgh Pirates VS Philadelphia Phillies","schedule":"2019-08-27T23:05:00+00:00","home_abbreviation":"PHI","away_abbreviation":"PIT","odds":{"home_ml":-147,"favourite_team":"PHI","spread":"1.5","total":"10","away_ml":"+125"}},{"id":20610,"name":"Baltimore Orioles VS Washington Nationals","schedule":"2019-08-27T23:05:00+00:00","home_abbreviation":"WSH","away_abbreviation":"BAL","odds":{"total":"9.5","home_ml":-333,"favourite_team":"WSH","spread":"1.5","away_ml":"+265"}},{"id":20601,"name":"Chicago Cubs VS New York Mets","schedule":"2019-08-27T23:10:00+00:00","home_abbreviation":"NYM","away_abbreviation":"CHC","odds":{"total":"8","away_ml":-116,"favourite_team":"CHC","spread":"1.5","home_ml":-105}},{"id":20604,"name":"Cleveland Indians VS Detroit Tigers","schedule":"2019-08-27T23:10:00+00:00","home_abbreviation":"DET","away_abbreviation":"CLE","odds":{"favourite_team":"CLE","spread":"1.5","total":"9.5","home_ml":"+145","away_ml":-167}},{"id":20600,"name":"Cincinnati Reds VS Miami Marlins","schedule":"2019-08-27T23:10:00+00:00","home_abbreviation":"MIA","away_abbreviation":"CIN","odds":{"total":"7","away_ml":-161,"favourite_team":"CIN","spread":"1.5","home_ml":"+140"}},{"id":20599,"name":"New York Yankees VS Los Angeles Dodgers","schedule":"2019-08-27T23:05:00+00:00","home_abbreviation":"NYY","away_abbreviation":"LAD","odds":{"home_ml":-147,"favourite_team":"LAD","spread":"2.5","total":"10","away_ml":"+125"}},{"id":20610,"name":"Oakland Athletics VS Minnesota Twins","schedule":"2019-08-27T23:05:00+00:00","home_abbreviation":"MIN","away_abbreviation":"OAK","odds":{"total":"9.5","home_ml":-333,"favourite_team":"MIN","spread":"3.5","away_ml":"+265"}},{"id":20601,"name":"Houston Astros VS Colorado Rockies","schedule":"2019-08-27T23:10:00+00:00","home_abbreviation":"HOU","away_abbreviation":"COL","odds":{"total":"8","away_ml":-116,"favourite_team":"COL","spread":"1.5","home_ml":-105}}]},{"id":1,"name":"NFL","provider_value":"sr:tournament:233","matches":[{"id":20426,"name":"Pittsburgh Steelers VS Carolina Panthers","schedule":"2019-08-29T23:00:00+00:00","home_abbreviation":"CAR","away_abbreviation":"PIT","odds":{"total":"33","home_ml":"+155","away_ml":-175,"favourite_team":"PIT","spread":"3.5"}},{"id":20429,"name":"Philadelphia Eagles VS New York Jets","schedule":"2019-08-29T23:00:00+00:00","home_abbreviation":"NYJ","away_abbreviation":"PHI","odds":{"favourite_team":"NYJ","spread":"4","total":"35","home_ml":-200,"away_ml":"+170"}},{"id":20430,"name":"Atlanta Falcons VS Jacksonville Jaguars","schedule":"2019-08-29T23:00:00+00:00","home_abbreviation":"JAC","away_abbreviation":"ATL","odds":{"home_ml":-200,"total":"32","away_ml":"+170","favourite_team":"JAC","spread":"4"}},{"id":20428,"name":"Indianapolis Colts VS Cincinnati Bengals","schedule":"2019-08-29T23:00:00+00:00","home_abbreviation":"CIN","away_abbreviation":"IND","odds":{"favourite_team":"CIN","spread":"3","total":"33.5","home_ml":-156,"away_ml":"+135"}},{"id":20427,"name":"Minnesota Vikings VS Buffalo Bills","schedule":"2019-08-29T23:00:00+00:00","home_abbreviation":"BUF","away_abbreviation":"MIN","odds":{"home_ml":"+135","total":"35","away_ml":-156,"favourite_team":"MIN","spread":"3"}}]}]';

//
// NOTE: These are only here to provide sample images, in real life we would have our own images
var CAT_LOGO = {
    MLB:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAEZ0FNQQAAsY58+1GTAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAAOxAAADsQBlSsOGwAABFhJREFUeNrtWG9MW1UU/73X15Z2tK4Oug661cEYuEUF+kEQ3CZmUdBpGLBgUImEkWzJzFyyzWjiv8C2ZMNE0WjI1DhjjF8oTJgSyRSjYyIbRqvQIo4VActcEcZY19I+73stbN2WvbK+1n14v+T2/unJu79z7znnnnsBCRIkSJAgQYKEWwY112BZVk2qjaSYSKFvU75+Us6Q0k5RlGdeAUI+i1RHe+xjywZGXD42igxkNIXS/AwfV/OMnC7Ke8Ia1oJRDM3K1qYwstTkIdItIkrYKUJeSTq2bQ1fGd9vPS2LxTK+VP4AaivXBToeLyYLdsD352iYNkNBvbvCq9pVbiU9M6d5fp/j/PJokFcr5ViiVZE5qZDxA593oa17MNBRyKGurQn/oyyLmfrP5OzEhXtJL50hP8ljrmkvqZViEd+UswqvPf0gMlOWcguGqZnL+Lp3CA3NPfjOOgw/IfHsoS/Q8/ZzWGm4A/IN2VAU5cJzrCu8CXw++EfP0TKdxkDzDktBNLOvKFiL5ldKkZUaIM9Bq1aiJC8d3x6swIGqDfzYxAU3tuyzwO2dDezW69WgVAtYwyBjUaMNI6NxsLoA11hMCPaU5eDJ3DS+fWrgb+x8ryNAJDkRcc+XLXhOURW4L0UPg26RoFz1o5nz7cYvf8aRDivfVm0rhmxl0v+jAE2WvSQ/PSxZzryuxvZ32vHLmfGgQ2+NvQLGRA3a95XjxS25YclrFylC+jOXvSirs2CSOLv8ITMUhTmxVSDVoMO7R09h8xtNONk/Iijf9L3turGBkQlU1bdxUXJBDi2KAp2/OtDcZUfbT38gaYlGUP5k/40PLcsJO+qbfgRt1Ift0IyYTlySn4EViVpBOe6MmItEwbMJjnNT/M6cJpFpzqFB07i0/0jsFGghK5i36xP88OYzN5XTL1bjEXPKdeM1hZmYdnvnT+i4mifg6z8Lj6UzNmH0kmcWfcPnI/pGfJz8StqjVED9ciWYrNWx2QGSZeLwC4Wi5lN0UgKJTNmY7bVHVwFzmgGf7t0EOSN+Qhu3oxTsRTfcH7YCwdTjpgqY9Foc2vowfzjt+eA4Bsf+FZyktnJ9VMjPm9KrVZDdbcLFnW8J+wBHnjtVi/NW87mNEJbdGY+N2XdF/R6hLF4PcplZmBPTNCX44XX3LOd3K+qQM4hv3CtsQrsPHwfPmzMh0hbCmhUJsbsU/zUesikMn1mzCFm+IeckSmotYX90aRgZqBhgSa40U/dxyNWGU8BJUuCIotFvZ/9BS9cAH4mMCRpxyLqm4O3uuzJAoo/7o1b47MO8ZVB6HfdC4eSId64xJThrirISG4/1ym9lsoaWHr4UZJrQsf8pURTw2RyYrqq74X+q7Ztnab3ud9K0zj2rcHlwc7dtdPHg6ERE3vj4/av8GpUi4iuqf9xFeb+59qGBgizNCMac4Qg+q9iuftjisrDHOJO+zR/jiA2hjZB3Q4IECRIkSJAgITL8B2AoUA+q4lOxAAAAAElFTkSuQmCC',
    NFL:'data:image/png;base64,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',
    NHL:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAEZ0FNQQAAsY58+1GTAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAEJxJREFUeNrVWnlcjlvXvp7m8YiiSCRTgwZFJVQ0KCLT+Q4H4U3JeD5SREmGlw4HJ5ShJCrqfYtkLB2iDOfI0azJFGUoDaI0+dbe4bzS6Hj/+Pbvd/+ePM/e973W3mtd67rWDejEeP/+vTZdwp2YL+jk/UXoGt6ZNZ0xRi0sLCxLSkrKyM/P76yPj09NO/OlsrKyYlesWDGL5kfT/Pp25nfNzc2NuXjx4paoqKgjNL+iI3YJddSB+vr62VHRp4S8vLxsEhMTb9ADB7ZhjPS9e/fO/bRy1bi169bZMMPYd23MV798+fLN5SvdLaOiTwo1NjbO+KYnwELhzJkzgQJRiW6LlyxBcFCQQmlpyeyTJ0/eoZ2633wns7OzT69Ytdps1LgpWOo8D+vWre2vo6Mzcu/evTHNT47m2wQHB58/HBqpbP/DbCh0kUZlRUWP8PDw/R2xTdBBB0woFJKnzpiD58XFGGGoj+PHw1Hy8mWDm5vbIXl5+eM0rY52zvz48ePLj4ZHKJlYTUJZyXOMNdLB4MHq2OizAfb29sXTp0/3ExISukrzRV+9evXjz9u3L3hSUiWkoTccchICjDYywJHDgdi5c6euQCBIa882kY44QA+a9+5dLURERODh7gpzM1NQaODBgwfC7qtXu4iKiLiQkyirqIKMvBLMJkxHYUEuQg/54TCtDwjYj5+378Dp0zE9HRcs2CopIUFbJ8CLkjIM0BkODeXBuHI2CsWFD2B58hTevq1GeXm5Ay1d9bdPgAzT8PX1vTPc0FCi+HkpHGb9AElJSaioqGCdpxfMzc35vLLKKjx48hy376bh8vnTuHE1AQ4ODqiuqUFkRARmzJyJZcuW83WNje9RUl6JB4XPkJBwCWeiwlFWWoKqqirExJ6BqIgwMjMyXru6uurQKTz8KgfI8F70YU/I452Vla240MUF06dNg7SMDFatXoOtmzfienIylJV7Y+jQoXxHKVmRl5sDVdV+8FrvBSsra34vyh/8c8tmPHnyBEOGDMGAAQNQRbuckZ6G4qIiWFhYYq3XenisdoewkAAnIiKxZ48fjAwNC6dNm+ZDtzhNjrxs1wEyWoXQ5h8JCQkTk5KS9J+/eCEw0DeAnZ0dNm7ciCNHghESdgKampqQkhBHfl4u4uPjUJCfz9aib19VjBo9CiYmI2mXG3E4KAhiYmKY4+DA75+UdI2cvo7CwscQEhbGQHJknI0t1PoPQA2FaMqdO5g3eyYcHRfA08sLMTGnkJmZCSVFxUZTU9Pf6TpD+RNMzhS1mAM1NTWLzMaM9RhtbomZ/zOdFvbAs2fPsHDhQpw7dxZrPL2h2q8/tvtuRVe5LpgxYyZWrnRtni8ICw1FYOAh5JNjbISEHIGTszNsbcfD1NTsi12sq29ARUU51DW04OrugZ+3bsbToqfw2eCDyZOnoKysTCguLt7YZ+Mm44RL8WK0xLtFByQkJI6NHmmyRk6pjyAtOw/rPdfit99+42HjuXErTM3McSr6Xwg9GsLn7/Hz4zGtrKzMD/PFi+d4+PAh3/3/HCy03Fatwmp3d/Tr1w89evSApZUVnJycQTuKi+fPw919Ff7X1R3jJ02BmIQU9u7aTic5AmMtLDDDwRGVjWIYPWpkI80/2modIIwuIaw2Dg0LG9BFUQX/Dg+Blo4ePHx8Ka5VER15HP5+u3m4fByVlZU8ttlFO/XZby3kFU/UufPmwdl5ISuOtMve2LRpI969e4drV69QyInC3MoGY63tCOUKkJ2ZBW3jMUhOuMAQMIYgO6BNGNXX198tLythQ3GGYSZmSP3jOoQJPi+cicHhgwH4O6N3797wJ0ilZ+Dx40dwIWBIS0399Ds7uQP79kBMXAomZhZ4WJAHS5sJUJCThVpvRZb8uztSB+Im2k3IjU1IHjRk6HDExUbh2ZPHUNfS/lvGM0TatXs35OTkcJ5CxnXlCr7rLQ0tbR08up+P0pKXPG+yMv6kXLDPoE1NbJcL0aT3EyZMiCwpegx5xV7o2q0bHWMa+qqqcfzv7GDFjyHK4eBgSEtLw9t7PZydFmDSpEnYts33i/ldunSBskofMjoNSkpK0NPVxnOyxcLC4kSHKzElc2IvJQVPWWlJupkqip4U8mTr3acv8nLuddh4ltz+AQEwMBhG0FmIRS4LkZuXh71798F+8mSqzKe/WKPSR5XgQIDHjx5AW1sbcrIykCHHP9CPDlOJHElxcVosjZ69lFH0tJB/2b17jw47YGlpxUOma9euuHCBhcxKygGqwg0NRBXetrpOoXt3/llCiDbCyBANDXX8HjTudYZOv2KxKiUuyiEUH5ClIyH0MWSCjxyBDK1lIeO0YAEmTLDD6dhYXtjS0tNaDB02pKSbWHdDQz1kaPerXld9dOBVZxwQraurg6yMFOclAsFfKNFeyERFRxO6LOKwOmWyPYICAzl8Llm6FOJ0qi0NRkXi4uObnkEnxA0TCJETDRwBGdy2Fi2thZByWVk5j7/a6iqCNQn+JTHEVo2nJMPuX/34bl28eAErV6zgIcMS982bN62uY/WAMVt2ck3PKGvaQTFx1FRXQ1ZWlrMBhsJ0FXTUgWH19XWQkpQgsvUUffr251++eF7cYsgQpcaiRYubChPx/sBDhzB7zhxsICowetSoVh0YP96WoxHLCbdVrhwo9IYa8N9U+6khjxJemDjTB7gd1mEHSMtO7CYvD0nKgbt3UzHacgLeVL2mZH762bxevXphn38Ahg8fTiHDUGYR/vzzDlEEJ3hv8Pk0jzmnotK7BedFkZuTw7kW41B7Aw5CS1cfr6veQm3gYOz3iyWnBJQ34igqKppISyLazQGKVwWSinb2k+yReOUK/05DWxd379z+jCaMGTMW5y5c5MaTEIfNuHFEBqt54SGJSLvWpBz3799PusGTDPlSvZJ6o+QeD6IHiI6JhaGxCe6m/IHM9FQM0dMHy8Mrly9j4sSJiI6OnkLP79KuA5Soc/Ly88X7qanRoigYGI2gRBLFjaTETyGzcpUb9h8KpCSXIZrtgwWO/8BQogexZ85i4MCBPJTqauuaqImBAa8B/5k/lRWV+Gn5ciJ3bnCm3Q8NPw55BXkEHvDHimWLEHf+DCQkpaA/3BgRJIYUevbG9Zu/S9HSme06EBcX96Oerh6RtApe8g1HmuPtmyrcvnUDiopKCDgYhLnzHfGsuAjfT5+GgwcO8JPR1dFlBfCLXWY1YJy1FdHlv7okjOcnJl5BWFg43NzcKXxK4TR/Hvb77+VIxzarlpSc4ShzLoZI5ENcpitu3bo1q00HyJDuJGQMGNWNj4vDd4TN/dW1cCv5KvT0hyEgKARDiJ1evXIZ9hPtePJp6+i0Ca3rSWkxxspDJjycs1FjY2MKuziMNjUlkZOECbY2uHHj+qc17L63rl+Dps5QSEpJI+X3Gzykrl69OqJ5GDVPYn1KJkF3qobsxoM0tHkN60eKadLkaYRK4tjntwthx0K4mNm0eTOKi4thZWnBEaStwVDm5s2bWLp0GVxJGzC2u/OXHdhN1bql+pJy6zp0ho/EIM0huHXzBuxmzEdSXApLJD26EltzoG81Ya+YqCgKCgrQo8+AJkjrP4iOuQTevltIx6aSpNTCRuLwLGSYQFnp6kqY3WajDjmENsdCw2BmZkbC5wWWLV2CZNLUrY2CvJwm+kKEkim772SkUVbBT1K1LQdka2trOfaWlpZCfagx/zIz9Q4O/LqD50UTzGYi6VoSrKybRDurvJdJuTUfoceOcZXGQmafvz/PIXayzPiXL1+26XBpaQkLakhTIbufXc41+Js31eyn79oKobqPf7CyX08wJsSO+p8beFn/rNX44d93796Fnp4eLCwtP/t98eJFuEIw3NGQ+aJlKCzM19SR2BeliGCtGBERDsXv2kKhUkbAmLGKioooo7BppCRQVOrZ6oMCAvxZ4ftMVbGRSkqLhQyr0qxIzZwxg3XbOmQ8G0o9e/H8q6l5CwUFBd6Gke8qx4lqWw7kMq9raecNCL+LHjf1lAZTIrXR9OXqijl94sQJBAUFwsjIiJMzFu+sd8RgNDk5qVNCSGNIE7o9JmXGbKmofA0ZKQ7TOW2FUKq6uvqbzIwMaSuCUiY86qiimlmMw+X4C60+LD09HdZWlpy7sOavm5sbHb8Qdu3aid27dn0Rfh0ZY63Ho/ptFfJzsjBqy2bcybwHXV3d8ua6QKiZnKy1tra+cDr2NExMTEjSKeLm1QSoDhiEUabmrbQamj5KSkpw9OgxrFnjQSFThlk/zsQvO3Z8lfGm5haEfAORlHABffr0QV9CwYy7t0G2nSUbG9qsxJqamoFvqNiUlVfAw8MD52Oi8LqiHE5LV6AX7//8NSIjI6i4JPKQYYXJfMyYTyFz7dq1r+tckB5e9JMrygmFzsdGw819NfIKHkFFSQE9e/YMavf9wIYNGwpIjdlFRkT2cl7ojEuX4pGUeBnWtnYYQ5w/5dZNTgsozMiBSLCeKUMWGRlZ+tzFG1is2n7NYPxr554AiJL+2OLtgf5q/eC85CeEHQ3GYhenZHJgfbsO+Pj4MDaZQRxmvozsd4I5c2YjwH8fcrIzYTPeDlOmTUcFiY683FzsP3AQc+Y48JrhtMCRJ3Fbja1WO8wEHFPpvtt27CKoFMNGrzV48awIIaHhuEN0Xlyosf7777+fTrYVd7g7XVZWtsnFxcXTa703J1P29pNIcPfA5q2+vLssKiwEGWkppKSkYKGzE6+unR1MB9vY2mLu3Pmcrty7l4M17q58g05E/Au1hLhhIUGMMHpQXdrWqVdM27ZtSyT40iRRrmVpZY2ZlJTnzp7FAcL92tp3GDJEm8JGmvduRpLqYm1zVjsYJ2LUuXnyMtrB2iSsW/HjrFm8uK333gAbG1uOA/v2+MFr3RqoqvbF8RMRVH8EOOC/Bzu2bw8mR91ZZHT6BQeFg+ijR49CPD09Z85xmEsJrkEiPQh+fr9ymTh2rAV/wTGMRM2gQYN4KPByTnUkPS2Nd6VFxcQwa9ZsbvxH3cvCjHGj27f/4NX6t4QErn2ZUw70HKYCo6P/jS2bNx+mDXJujjydfUMjeP36tYevr6/Pu9paESbC2Th16hTn6ilkBKO/rOXCToHRax1tHX4q7HTYIDlI3OkaMijx09PT+GcN8X1W9Y2IJzEVx1QXw+RAEkpdunxX5+rqupbC5hfWKfzbL/k+OGJAdHhvUFCQMes8sKST66aAF6VlSLnzJ385cT8/F08fPUDx00IeQkxtMWV2+HAQ330NDU0qRjp0GjrQJf5ERZNznsLHj5lkRHX1Wzg6OiYRt1pKhqd+s7eUzd682xKBWxobG2t1//4DkXoiWYrKfSAj151UUxfOnerrapF2+wZiToTwnNi0aTOmTJ3KWywsfPKpYqdnpCObOFR9fQP691erpxM4TzVoDxke3ykE+9puMxkiz5rOVBNGE683pJjWzsrOFi96RjRZVAImY22RTk4Y6apjKhnvT1D84vlznswaGhrvaPfTqdrfpDBiPc9LZHjZ19jx1Q604BB79cMYmHF8fPyybb/8Oshi0g9wsLf42F7MIl2wj36/SRdrldd+i+d+MweaOdObkjwpIOho3/4qSqAiVDBmzJjRZHTxt36W8H/DAcLsSqrK5wSNdT9oaWlV2NjYjCXjC/H/bbD/4UJX3//mM/4PePh9biOlFCkAAAAASUVORK5CYII=',
    NBA:'data:image/png;base64,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'
};
//
var MLB_LOGO = {
    ATL:"https://ssl.gstatic.com/onebox/media/sports/logos/XY1SVEZwciGu2O0ChWKv4A_48x48.png",
    BAL:"https://ssl.gstatic.com/onebox/media/sports/logos/4E3uuwhG5inhsSdR1NPa6Q_48x48.png",
    CHC:"https://ssl.gstatic.com/onebox/media/sports/logos/PBmgKhiGoYOGTl1L5FGaiQ_48x48.png",
    CIN:"https://ssl.gstatic.com/onebox/media/sports/logos/-XhGI3cGCeuXStm06CF_kw_48x48.png",
    CLE:"https://ssl.gstatic.com/onebox/media/sports/logos/RRcIM7GMCdTUDZP3uXJl9g_48x48.png",
    COL:"https://ssl.gstatic.com/onebox/media/sports/logos/Xhoba8Glkl5hAKLPis5WXQ_48x48.png",
    DET:"https://ssl.gstatic.com/onebox/media/sports/logos/7rDj2EZVlcouQNkRgcxCmw_48x48.png",
    HOU:"https://ssl.gstatic.com/onebox/media/sports/logos/ey32o-rV1MBGbst3pFB_sg_48x48.png",
    MIA:"https://ssl.gstatic.com/onebox/media/sports/logos/CcJYNnWBPQcT-lP1fUIf8Q_48x48.png",
    LAD:"https://ssl.gstatic.com/onebox/media/sports/logos/dgxxs-ybyRdTOEWRZ265AQ_48x48.png",
    NYM:"https://ssl.gstatic.com/onebox/media/sports/logos/8VapQG4UqRE64iPYq6W3FQ_48x48.png",
    NYY:"https://ssl.gstatic.com/onebox/media/sports/logos/SvZBOWebmgQGdzqKGbYRCw_48x48.png",
    MIN:"https://ssl.gstatic.com/onebox/media/sports/logos/gBAstfK9v7682fKmomWeMA_48x48.png",
    OAK:"https://ssl.gstatic.com/onebox/media/sports/logos/AJKr46qzAlyyzvI1sL1CbQ_48x48.png",
    PIT:"https://ssl.gstatic.com/onebox/media/sports/logos/9QU7ONeilzMGYb2AxTHzqA_48x48.png",
    PHI:"https://ssl.gstatic.com/onebox/media/sports/logos/DmFsZ1exRh9X0ZrTDt0Gaw_48x48.png",
    WSH:"https://ssl.gstatic.com/onebox/media/sports/logos/jEASG37S2n1Zeq8th2vEiA_48x48.png"
};
//
var NFL_LOGO = {
    ARI:"https://ssl.gstatic.com/onebox/media/sports/logos/5Mh3xcc8uAsxAi3WZvfEyQ_48x48.png",
    ATL:"https://ssl.gstatic.com/onebox/media/sports/logos/QNdwQPxtIRYUhnMBYq-bSA_48x48.png",
    BAL:"https://ssl.gstatic.com/onebox/media/sports/logos/1vlEqqoyb9uTqBYiBeNH-w_48x48.png",
    BUF:"https://ssl.gstatic.com/onebox/media/sports/logos/_RMCkIDTISqCPcSoEvRDhg_48x48.png",
    CAR:"https://ssl.gstatic.com/onebox/media/sports/logos/4BdHvKq4Iyxsp8WaAbpDuQ_48x48.png",
    CIN:"https://ssl.gstatic.com/onebox/media/sports/logos/wDDRqMa40nidAOA5883Vmw_48x48.png",
    DAL:"https://ssl.gstatic.com/onebox/media/sports/logos/-zeHm0cuBjZXc2HRxRAI0g_48x48.png",
    IND:"https://ssl.gstatic.com/onebox/media/sports/logos/zOE7BhKadEjaSrrFjcnR4w_48x48.png",
    JAC:"https://ssl.gstatic.com/onebox/media/sports/logos/HLfqVCxzVx5CUDQ07GLeWg_48x48.png",
    LAR:"https://ssl.gstatic.com/onebox/media/sports/logos/UyYc_V_6Vabrvr7ous98_A_48x48.png",
    MIN:"https://ssl.gstatic.com/onebox/media/sports/logos/Vmg4u0BSYZ-1Mc-5uyvxHg_48x48.png",
    NYJ:"https://ssl.gstatic.com/onebox/media/sports/logos/Rb4y9m3hkTcYVmdl10geqw_48x48.png",
    OAK:"https://ssl.gstatic.com/onebox/media/sports/logos/QysqoqJQsTbiJl8sPL12Yg_48x48.png",
    PHI:"https://ssl.gstatic.com/onebox/media/sports/logos/s4ab0JjXpDOespDSf9Z14Q_48x48.png",
    PIT:"https://ssl.gstatic.com/onebox/media/sports/logos/mdUFLAswQ4jZ6V7jXqaxig_48x48.png",
    SEA:"https://ssl.gstatic.com/onebox/media/sports/logos/iVPY42GLuHmD05DiOvNSVg_48x48.png",
    TEN:"https://ssl.gstatic.com/onebox/media/sports/logos/9J9dhhLeSa3syZ1bWXRjaw_48x48.png",
    WAS:"https://ssl.gstatic.com/onebox/media/sports/logos/z_Or7w7bQ_ALmWUNsdd7AQ_48x48.png"
};




// Create TickerTape Class Object  [[ WILLIAM's PARAMATER NOTES ]]
// auto_start = 1 will play the ticker automatically
// direction = 1 will scroll the ticker left
// inital_pos = the css postion of the slider element when the
// match_width = you must get the full width of this item #ticker-tape #matches-wrapper #matches-slider > div ( width + margin / border)
class TickerTape {
    constructor(feed = null, auto_start = 0, direction = 1, initial_pos = 0, match_width = 10, speed) {
        this.feed = JSON.parse(feed);
        this.direction = direction;
        this.pos = initial_pos;
        this.match_width = match_width;
        this.speed = speed;
        //
        this.current_match_count = 4;
        this.stopped = (auto_start === 0) ? 1 : 0;

        // tracking for play method
        let cat_counter = 0;
        this.master_obj = [];

        this.chicken = "birdface";

        // Kill the feature if the feed is blank or undefined
        if(!feed){
            this.error();
        } else {
            this.prepare();
        }
    }

    error() {
        return 'The feed is down or blank';
    }

    // Set Feed Counts
    feed_category_count() {
        this.category_count = Object.keys(this.feed).length;
    }

    start() {

        console.log('master object');
        console.log(this.master_obj);

        // let feed_container = document.createElement("div");
        // feed_container.className = "matches-wrapper";
        // document.getElementById("ticker-tape").appendChild(feed_container);

        // set stopped to 0;
        this.stopped = 0;

        if(this.stopped === 1){
            // do nothing, this is default for autoplay = 0
        } else {
            // console.log("I am groot");
            var elem = document.getElementById("matches-slider");
            var max_feed_length = -(this.current_match_count * this.match_width);
            // use 15 millisencds for smooth animation
            var id = setInterval(frame.bind(this), 15);

            function frame() {
                if ((this.pos == -1000) || (this.stopped === 1)) {
                    clearInterval(id);
                } else {
                    // TODO
                    // CHECK DIRECTION WOULD GO HERE
                    this.pos = this.pos - this.speed;
                    // elem.style.left = this.pos + "vw";
                    elem.style.transform  = "translateX(" + this.pos + "vw)";
                }
            }

            // while (pos_temp > max_feed_length) {
            //     //text += "The number is " + i;
            //     elem.style.left = pos_temp + "vw";
            //     pos_temp = pos_temp - .008;
            // }


        }


    }

    stop() {
        this.stopped = 1;
    }

    prepare() {

        let feed_to_parse = this.feed;
        let feed_category_count = Object.keys(feed_to_parse).length;
        if(feed_category_count > 0) {

            let catHTMLobj = {};
            let feedHTMLobj = {};

            Object.keys(feed_to_parse).forEach(function (item) {

                // =============   CREATE CATEGORY BOX  =============
                let category_box = document.createElement("div");
                category_box.setAttribute("id", "category-wrapper");
                let category_name = document.createElement("div");
                category_name.setAttribute("id", "feed-category");

                // INSERT CAT NAME AND LOGO FUNCTION
                // TODO refactor this to a function
                    let categoryInnerHtml = '';
                    switch(feed_to_parse[item].name) {
                        case 'MLB':
                            categoryInnerHtml = '<div>MLB</div><div><img class="cat-image" src="' + CAT_LOGO['MLB'] + '" /></div>';
                            break;
                        case 'NFL':
                            categoryInnerHtml = '<div>NFL</div><div><img class="cat-image" src="' + CAT_LOGO['NFL'] + '" /></div>';
                            break;
                        case 'NHL':
                            categoryInnerHtml = '<div>NHL</div><div><img class="cat-image" src="' + CAT_LOGO['NHL'] + '" /></div>';
                            break;
                        case 'NBA':
                            categoryInnerHtml = '<div>NBA</div><div><img class="cat-image" src="' + CAT_LOGO['NBA'] + '" /></div>';
                            break;
                        // College would go here
                    }
                    category_name.innerHTML = categoryInnerHtml;
                    category_box.appendChild(category_name);
                // END TODO

                // Add to the category obj
                catHTMLobj[feed_to_parse[item].name] = category_box;
                // =============   END CREATE CATEGORY BOX  =============

                // =============   CREATE MATCHES SLIDER =============
                let match_count = feed_to_parse[item].matches.length;
                if (match_count > 0) {
                    let matches_slider = document.createElement("div");
                    matches_slider.setAttribute("id", "matches-slider");

                    let feedInnerHtml = '';
                    Object.keys(feed_to_parse[item].matches).forEach(function (item2) {

                        console.log(this.master_obj);

                        // INSERT Teams, Spread, ML, logos
                        // TODO refactor this to a function
                        feedInnerHtml += '<div><div class="match-box">';
                        feedInnerHtml += '<div class="away">';

                        // INSERT TEAM LOGO FUNCTION
                        // TODO refactor this to a function
                        switch (feed_to_parse[item].name) {
                            case 'MLB':
                                feedInnerHtml += '<div><img class="logo-image" src="' + MLB_LOGO[feed_to_parse[item].matches[item2].away_abbreviation] + '" /></div>';
                                break;
                            case 'NFL':
                                feedInnerHtml += '<div><img class="logo-image" src="' + NFL_LOGO[feed_to_parse[item].matches[item2].away_abbreviation] + '" /></div>';
                                break;
                            // Other Sports would go here
                        }
                        // END TODO

                        feedInnerHtml += '<div class="team">' + feed_to_parse[item].matches[item2].away_abbreviation + '</div>';
                        //
                        if (feed_to_parse[item].matches[item2].odds !== undefined) {
                            if (feed_to_parse[item].matches[item2].odds.favourite_team === feed_to_parse[item].matches[item2].away_abbreviation) {
                                feedInnerHtml += '<div class="odds">+' + feed_to_parse[item].matches[item2].odds.spread;
                            } else {
                                feedInnerHtml += '<div class="odds">-' + feed_to_parse[item].matches[item2].odds.spread;
                            }
                            feedInnerHtml += '(' + feed_to_parse[item].matches[item2].odds.away_ml + ')</div>';
                            feedInnerHtml += '</div>';
                        }

                        feedInnerHtml += '<div class="home">';
                        // INSERT TEAM LOGO FUNCTION
                        // TODO refactor this to a function
                        switch (feed_to_parse[item].name) {
                            case 'MLB':
                                feedInnerHtml += '<div><img class="logo-image" src="' + MLB_LOGO[feed_to_parse[item].matches[item2].home_abbreviation] + '" /></div>';
                                break;
                            case 'NFL':
                                feedInnerHtml += '<div><img class="logo-image" src="' + NFL_LOGO[feed_to_parse[item].matches[item2].home_abbreviation] + '" /></div>';
                                break;
                            // Other Sports would go here
                        }
                        // END TODO

                        feedInnerHtml += '<div class="team">' + feed_to_parse[item].matches[item2].home_abbreviation + '</div>';
                        //
                        if (feed_to_parse[item].matches[item2].odds !== undefined) {
                            if (feed_to_parse[item].matches[item2].odds.favourite_team === feed_to_parse[item].matches[item2].home_abbreviation) {
                                feedInnerHtml += '<div class="odds">+' + feed_to_parse[item].matches[item2].odds.spread;
                            } else {
                                feedInnerHtml += '<div class="odds">-' + feed_to_parse[item].matches[item2].odds.spread;
                            }
                            feedInnerHtml += '(' + feed_to_parse[item].matches[item2].odds.home_ml + ')</div>';
                            feedInnerHtml += '</div>';
                        }

                        // TOTAL POINTS LINE
                        if (feed_to_parse[item].matches[item2].odds.total !== undefined) {
                            feedInnerHtml += '<div class="total">Ov ' + feed_to_parse[item].matches[item2].odds.total + ' / Un ' + feed_to_parse[item].matches[item2].odds.total + '</div>';
                        }
                        feedInnerHtml += '</div></div>';

                        feedInnerHtml += '</div>';
                        // END TODO
                    }, this);

                    if(feedInnerHtml !== undefined) {
                        // This will duplicate the items in the slider
                        // allowing the slider to wrap around without blank space
                        // in a functional assignment I would ask what to do with feeds of only 2 matches etc.
                        feedInnerHtml += feedInnerHtml;
                        matches_slider.innerHTML = feedInnerHtml;
                    }

                    // category_box.appendChild(category_name);

                    // Add to the category obj
                    feedHTMLobj[feed_to_parse[item].name] = matches_slider;
                    // =============   END CREATE CATEGORY BOX  =============
                } else {
                    // TODO !!!!!
                    // this.error;
                    console.log('Error - feed is blank');

                }

                // USE THIS TO TRACK IN THE PLAY METHOD LATER ON
                this.master_obj.push(match_count);

            }, this);

            let matches_wrapper = document.createElement("div");
            matches_wrapper.setAttribute("id", "matches-wrapper");
            matches_wrapper.appendChild(feedHTMLobj['MLB']);
            document.getElementById("ticker-tape").appendChild(catHTMLobj['MLB']);
            document.getElementById("ticker-tape").appendChild(matches_wrapper);

            // let matches_wrapper = document.createElement("div");
            // matches_wrapper.setAttribute("id", "matches-wrapper");
            // matches_wrapper.appendChild(feedHTMLobj['NFL']);
            // document.getElementById("ticker-tape").appendChild(catHTMLobj['NFL']);
            // document.getElementById("ticker-tape").appendChild(matches_wrapper);

            // Start the feature if auto_play is on
            if (this.auto_start === 1) {
                this.start();
            }

        } else {
            this.error();
        }
    }
}
// End

// .10 is slow speed
// .04 is a fast speed
let konekTicker = new TickerTape(feed_example, 0, 1, 0, 20.25, .10);


// Attach functions to buttons
document.getElementById("start-feed").onclick = function() {startFeedFunction()};
document.getElementById("stop-feed").onclick = function() {stopFeedFunction()};


// Start and stop button functions, disable each other to prevent multiple clicks
function startFeedFunction() {

    let feed_start_button = document.getElementById("start-feed");
    let feed_stop_button = document.getElementById("stop-feed");

    if( feed_start_button.className === "enabled") {

        let class_name_en = "enabled";
        let class_name_dis = "disabled";
        let start_btn_classes = feed_start_button.className.split(" ");
        let stop_btn_classes = feed_stop_button.className.split(" ");

        feed_start_button.classList.remove(class_name_en);
        feed_stop_button.classList.remove(class_name_dis);

        if (start_btn_classes.indexOf(class_name_dis) == -1) {
            feed_start_button.className += class_name_dis;
        }
        if (stop_btn_classes.indexOf(class_name_en) == -1) {
            feed_stop_button.className += class_name_en;
        }

        konekTicker.start()
    }
}
function stopFeedFunction() {

    let feed_start_button = document.getElementById("start-feed");
    let feed_stop_button = document.getElementById("stop-feed");

    if( feed_stop_button.className === "enabled") {

        let class_name_en = "enabled";
        let class_name_dis = "disabled";
        let start_btn_classes = feed_start_button.className.split(" ");
        let stop_btn_classes = feed_stop_button.className.split(" ");

        feed_start_button.classList.remove(class_name_dis);
        feed_stop_button.classList.remove(class_name_en);

        if (start_btn_classes.indexOf(class_name_en) == -1) {
            feed_start_button.className += class_name_en;
        }
        if (stop_btn_classes.indexOf(class_name_dis) == -1) {
            feed_stop_button.className += class_name_dis;
        }

        konekTicker.stop();
    }
}