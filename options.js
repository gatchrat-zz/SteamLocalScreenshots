
window.addEventListener('load', loadOptions);

function loadOptions() {
    document.getElementById("savebutton").addEventListener('click', saveOptions);
    chrome.storage.sync.get('SteamID', function (result) {
        document.getElementById("sinput").value = result.SteamID;
    });
    
}

function saveOptions() {
    var id = document.getElementById("sinput").value;
   
    chrome.storage.sync.set({'SteamID':id});
   
}

