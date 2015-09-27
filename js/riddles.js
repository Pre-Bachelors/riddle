$(function() {
    var riddles = ["What tastes better than it smells?", 
                   "Remove part of it and you still have a bit. Remove another part, but bit is still there. <wbr />Remove another and it remains. What is it?", 
                   'What starts with "e," ends with "e," and contains one letter?', 
                   "I dig out tiny caves, and store gold and silver in them. I also build bridges of silver and make crowns of gold. They are the smallest you could imagine. Sooner or later everybody needs my help, yet many people are afraid to let me help them. Who am I?", 
                   "To look cool wrap me around your head. Remove two letters and eat me instead.",
                   "At night they come without being fetched, and by day they are lost without being stolen. What are they?",
                   "I stare at you, you stare at me. I have three eyes, yet can't see. Every time I blink, I give you commands. You do as you are told, with your feet and hands. What am I?",
                   "What loses its head in the morning and gets it back at night?",
                   "There are several different kinds, but the one you pick doesn't do its job. What is it?",
                   "With pointed fangs I sit and wait, with piercing force I serve out fate. Grabbing bloodless victims, proclaiming my might; physically joining with a single bite. What am I?" 
    ];
    
    var answers = ["Tongue", "Habit", "Envelope", "Dentist", "Bandanna", "Stars", "Traffic Light", "Pillow", "Lock", "Stapler"];
    
    var coordinates = [
        {minX: 172, maxX: 212, minY: 123, maxY: 142}, 
        {minX: 172, maxX: 342, minY: 401, maxY: 463},
        {minX: 316, maxX: 388, minY: 154, maxY: 313},
        {minX: 266, maxX: 340, minY: 136, maxY: 217},
        {minX: 675, maxX: 720, minY: 128, maxY: 165},
        {minX: 380, maxX: 414, minY: 75, maxY: 118},  
        {minX: 185, maxX: 221, minY: 135, maxY: 277},
        {minX: 157, maxX: 553, minY: 101, maxY: 227}, 
        {minX: 511, maxX: 530, minY: 304, maxY: 323},
        {minX: 169, maxX: 229, minY: 175, maxY: 250}
    ];
    var $heading = $('h2');
    var $page = $('#page');
    var level = 0;
    var $hint = $('#hint');
    
    function updateRiddle(i) {
        $hint.text('Click the answer to go to the next riddle!');
        $heading.html(riddles[i]);
        $page.append('<img src="res/riddles/' + i + '.jpg" alt="Riddle Image" />');
        setTimeout(addListener, 2500);
    }
    
    function gameWon() {
        $hint.remove();
        $heading.html("Congratulations! You've won!");
        var msg = '<article> Here are the answers, in case you "accidentally" ' 
            + 'pressed the answer before you actually figured them out ;) <ul>';
        for (var i = 0; i < 10; i++) {
            msg += '<li>' + riddles[i] + ' <strong>' + answers[i] + '</strong></li>';
        }
        msg += '</ul></article>';
        $page.append(msg);
    }
    
    function nextRiddle() {
        // remove img
        $('img').remove();
        // increment level
        level++;
        if (level < 10) { // until game won
            // call updateRiddle
            updateRiddle(level);
        } else {
            gameWon();
        }
    }
    
    
    updateRiddle(level);
    addListener();
    
    function addListener() { 
        $('img').on('click', function(e){
            var x = e.pageX - this.offsetLeft;
            var y = e.pageY - this.offsetTop;
            if (x >= coordinates[level].minX && x<= coordinates[level].maxX 
                    && y >= coordinates[level].minY && y <= coordinates[level].maxY) {
                $hint.html("Yup!"); 
                console.log("yup");
                nextRiddle();
            } else {
                $hint.html("Nope!"); 
                console.log("nup");
            }
         });
     }
    
    
});