const shout = string => string.toUpperCase();

const whisper = string => string.toLowerCase();

const logShout = string => console.log(shout(string));

const logWhisper = string => console.log(whisper(string));