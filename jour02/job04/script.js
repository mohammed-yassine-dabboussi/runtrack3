document.addEventListener('keypress', function(event) {
    var key = event.key;
        if (key >= 'a' && key <= 'z') {
            var textarea = document.getElementById('keylogger');
            if (document.activeElement === textarea) {
                textarea.value += key + key;
            } else {
            textarea.value += key;
            }
        }
});