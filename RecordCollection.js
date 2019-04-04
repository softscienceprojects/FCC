// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
  var newTracks = new Array();
  var myTracks = "tracks"
  var findTracks = collection[myTracks]

  // If prop isn't "tracks" and value isn't empty ("") 
  if (prop !== "tracks" && value !== "") {
    //update or set the value for that record's album property
    collection[id][prop] = value;
  }

    // If prop is "tracks" but the album doesn't have a "tracks" property, 
  if (prop == "tracks" && collection[id][myTracks] == undefined) {
    // create an empty array before 
    newTracks.push(value);
    //adding the new value to the album's corresponding property.
    collection[id][prop] = newTracks;
  }
  //If prop is "tracks" and value isn't empty (""), 
  if (prop == "tracks" && value !== "") {
    //push the value onto the end of the album's existing tracks array.
    collection[id]["tracks"].push(value);
  }

  //If value is empty (""), 
  if (value == "") {
    //delete the given prop property from the album.
    delete collection[id][prop];
  }
  
  return collection;
}
