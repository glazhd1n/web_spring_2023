let enter = prompt("Who's there?", '');
let log;

enter = (enter == '' || enter == null) ? alert("Canceled") :
(enter == "Other") ? alert("I don't know you") :
(enter == "Admin") ? log = prompt("Password?", ''):
''

log = (log == '' || log == null) ? alert("Canceled") :
(log == "Other") ? alert("Wrong Password") :
(log == "TheMaster") ? alert("Welcome"):
''
