const PORT = 3000;
const axios = require('axios');
const cheerio = require('cheerio');
const { response } = require('express');
const express = require('express');
const res = require('express/lib/response');

const app = express();

const url = 'https://order.syscoireland.com/';
const homepage_links = []
const second_links = []
const item_list = []

axios(url)
.then(response => {
    const html = response.data;
    // console.log(html);
    const $ = cheerio.load(html)
    
    $('.pagebuilder-column', html).each(function(index) {
        // console.log("index = ", index);
        if(index > 1 && index < 14) {
            const url = $(this).find('a').attr('href')
            homepage_links.push(
                url)
        }
        
    })
    console.log(homepage_links)
    getSecondLinks(homepage_links)
}).catch(err => console.log(err))

function getSecondLinks(homepage_links) {
    for(const link of homepage_links) {
        console.log("link = ", link)
        axios(url + link.slice(1))
    }
}


//----------------------------------------------------------
function get_secondary_links(homepage_links) {
    for(i=2; i<3; i++) {
        console.log("homepage_links = ", homepage_links[i]);
        axios(url + homepage_links[i].slice(1))
        .then(response => {
            const next_page = response.data;
            // console.log("next_page = " + next_page);
            const $ = cheerio.load(next_page);
            const links = $('.subcategory-list.all').find('a').each(function() {
                // console.log("this=" + $(this).attr('href'))
                const url = $(this).attr('href')
                second_links.push(url)
            })
            
        console.log("second_links = ", second_links)
        get_item_list(second_links)
        })
        .catch(err => console.log(err))
    }   
}  

function get_item_list(second_links) {
    console.log("get_item_list" + second_links)
    var pages
    for(i=0; i<1; i++) {
        console.log("second_links = " + second_links[i])
        category_array = second_links[i].split('/')
        console.log(second_links[i].split('/'))
        if(category_array.includes('beef')) {
            console.log('YESSSSS');
            pages = 8;
        }
        for(j=1; j<pages+1; j++) {
            axios(second_links[i] + '?p=' + j)
            .then(response => {
                const next_page = response.data;
                const $ = cheerio.load(next_page);
                const links = $('.product-item').find('a').each(function(index) {
                    if(index%3 == 0) {
                        const url = $(this).attr('href')
                        item_list.push(url)
                    }                   
                })
                // console.log(item_list.length)
                for(k=0; k<10; k++) {
                    console.log("item_lists = " + [k] + ': ', item_list[k]) 
                }
                
            get_product_data(item_list)

            })
            .catch(err => console.log(err))
        }   
    }
}

function get_product_data(item_list) {
    console.log("item_list ", item_list)
    const item_data = []
    for(x=0; x<2; x++) {
        var item = item_list[x]
        // console.log(item)
        axios(item_list[x])
        .then(response => {
            const item_page = response.data
            const $ = cheerio.load(item_page)
            $('.product-attribute-nutrition').find('tr').each(function(index) {
                // console.log(index, ': ', $(this))
                const nutrition = $(this).children("td:nth-of-type(1)").text();
                const value = $(this).children("td:nth-of-type(2)").text();
                item_data.push({
                    item,
                    nutrition,
                    value
                })
            })
        })
        .then(() => {
            for(j=0; j<item_data.length; j++) {
                // console.log(item_data[j])
            }
            
        })
    }
}
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
