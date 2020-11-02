const request = require('request');
const axios = require('axios')
var arbre = {}
request('https://time2watch.io/anime/alpha', function (error, response, body) {
    console.error('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    body = body.split("<ul")[6]
    body = body.split("</ul")[0].split("<a")

    for (const ligne in body) {
        let act = body[ligne].split(" ")[4].split('"')[1]
        console.log(act)
        if (ligne == 2) {
            arbre[act] = {}
            request(`https://time2watch.io/${act}`, function (error, response, corp) {
                var base = corp.split("nhash+")[1].split("'")[1];
                var a = corp.split('<ul class="nav" id="links"')[1].split("var hex_offset")[0].split("<script>var hash")
                for (const lien in a) {
                    console.log("https://time2watch.io/file/" + a[lien].split('"')[1] + base)
                    if (lien == 2) {
                       /* request(`https://time2watch.io/${act}`, function (error, response, lienvi) {
                            console.log(lienvi.split("capcha")[0]);
                        });*/
                        axios.post()

                    }
                }
            });
        }
    }
});
