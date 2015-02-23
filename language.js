function getLanguage() {
  // Variable para guardar el idioma
  var lang;
  
  var nav = navigator.userAgent.toLowerCase();
  if(nav.indexOf("msie") != -1 || nav.indexOf("rv") != -1){ // msi for IE and rv for IE11+
    var req = new XMLHttpRequest();
    req.open('GET', 'resources/inspect-headers.py?filter_name=accept-language', false);
    req.send(null);
    var headers = req.getAllResponseHeaders().toLowerCase();
    var contentLanguage = headers.match( /^content-language\:(.*)$/gm );
    if(contentLanguage[0]) {
      lang= contentLanguage[0].split(": ")[1];
    }
  } else {		
    if (navigator.languages==undefined) {
      if (navigator.language==undefined) {
        // Internet Explorer Compatibility
        lang= navigator.userLanguage.slice(0,2);
      } else {
        // Old navigator compatibility
        lang= navigator.language.slice(0,2);
      }
    } else { 
      lang= navigator.languages[0].slice(0,2);				
    }
  }
  
  return lang;
}
