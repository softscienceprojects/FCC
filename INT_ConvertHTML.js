/* Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.*/


function convertHTML(str) {
   str = str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,"&apos;");
return str;
    
}

convertHTML("<>");

/*  The advanced solution:
function convertHTML(str) {
      // Use Object Lookup to declare as many HTML entities as needed.
      htmlEntities={
        '&':'&amp;',
        '<':'&lt;',
        '>':'&gt;',
        '"':'&quot;',
        '\'':"&apos;"
      };
      //Use map function to return a filtered str with all entities changed automatically.
      return str.split('').map(entity => htmlEntities[entity] || entity).join('');
    }

    // test here
    convertHTML("Dolce & Gabbana");
    
    
    Saving as I hadn't thought of using objects before (dictionaries!) as lookups for replacement. Storing this to 
    remember the next time I come across a similar problem. 
    */
