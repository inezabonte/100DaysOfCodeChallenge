//This function replaces the word WUB with an empty space and removes any extra spaces
function songDecoder(song){
    song =  song.split('WUB').join(' ');
    return song.replace(/\s+/g,' ').trim();
    
}
  console.log(songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB"));