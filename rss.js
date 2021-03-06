

var frag = document.createDocumentFragment();
var hasBegun = true;
const DOMPARSER = new DOMParser().parseFromString.bind(new DOMParser());
var url = "https://www.warroadhockey.com/event_rss_feed?tags=3717871";
/* Fetch URLs from JSON */
            /* Fetch the RSS Feed */
            fetch(url).then((res) => {
                res.text().then((xmlTxt) => {
                    /* Parse the RSS Feed and display the content */
                   /* try {*/
                        let doc = DOMPARSER(xmlTxt, "text/xml");
                        let heading = document.createElement('h1');
                        heading.textContent = url.hostname;
                        frag.appendChild(heading);
                        doc.querySelectorAll('item').forEach((item) => {
                            let temp = document.importNode(document.querySelector('template').content, true);
                            let i = item.querySelector.bind(item);
                            let t = temp.querySelector.bind(temp);
                            t('h2').textContent = !i('title') ? i('title').textContent : '-';
                            t('a').textContent = t('a').href = !i('link') ? i('link').textContent : '#';
                            t('p').innerHTML = !i('description') ? i('description').textContent : '-';
                            t('h3').textContent = url.hostname;
                            frag.appendChild(temp);
                        });
                   
                    /* }catch (e) {
                        console.error('Error in parsing the feed');
                    }*/
                    alert();
                    if (hasBegun) {
                        document.querySelector('output').textContent = '';
                        hasBegun = false;
                    }
                    document.querySelector('output').appendChild(frag);
                });
            }).catch(() => console.error('Error in fetching the RSS feed'));

