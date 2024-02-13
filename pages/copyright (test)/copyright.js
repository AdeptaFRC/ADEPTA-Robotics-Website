// copyright.js
document.addEventListener("DOMContentLoaded", function() {
    var copyrightSection = document.getElementById('copyrightSection');
    
    if (copyrightSection) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'copyright.html', true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200)
                copyrightSection.innerHTML = xhr.responseText;
        };
        xhr.send();
    }
});
