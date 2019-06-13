console.log("Chrome extension go?");


chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse){
  console.log(message.txt);
  if (message.txt ==="hello"){

    var thanos = document.designMode = 'on';
    let thanos_snap = document.getElementsByTagName('p', 'span', 'a', 'img', 'body');
    
    
    for (elt of thanos_snap) {
      elt.class = thanos;
    }


  }

}