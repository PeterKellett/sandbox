console.log("spreadsheet.js");

const sheetId = '1z1wufrAIa2xE6tXW4MIW6c2rTkyBYgkCqhgxDWHYdmY';
const base = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?`;
const sheetName = 'cinqual';
const query = encodeURIComponent('Select *')
const url = `${base}&sheet=${sheetName}&tq=${query}`

const data = []
document.addEventListener('DOMContentLoaded', init)

function init() {
    fetch(url)
    .then(res => res.text())
    .then(rep => {
        const jsonData = JSON.parse(rep.substring(47).slice(0, -2));
        console.log(jsonData)
        const values_array = [];
        for (const [key, value] of Object.entries(jsonData.table.rows)) {
            // console.log(`${key}: ${value}`);
            for (const [k, v] of Object.entries(value)) {
                if(v[8] == null) {
                    console.log("k = ", k)
                    console.log("v = ", v)
                    // console.log(ingredient)
                }             
                let ingredient = {
                    product_name: v[7]['v'],
                    EnergyKjoules: null,
                    EnergyKcal: v[9]['v'],
                    Fat : v[12]['v'],
                    Protein : v[11]['v'],
                    Carbohydrates : v[13]['v'],
                    Salt: v[16]['v'],
                    Sugars : null,
                    Fibre : v[17]['v'],
                    Allergens : [],
                }  
                // // const obj = JSON.parse(ingredient)
                values_array.push(ingredient) 
                // if(v[8] == null) {
                //     console.log("k = ", k)
                //     console.log("v = ", v)
                //     console.log(ingredient)
                // }             
                
            }
            
        }
        console.log("values_array = ", values_array)
    })
}