function createPlayList(songs) {
    shuffleArr = shuffleArray(songs);
    startIndex = -1;
    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }
    return {
        next: function() {
            startIndex++;
            if (startIndex < shuffleArr.length) {
                return shuffleArr[startIndex]
            } else {
                shuffleArr = shuffleArray(songs);
                startIndex = -1;
                console.log('')
                return this.next();
            }
        }
    };
}



let playList = createPlayList([21,31,42,64,78]);
let count = 20;

while (count > 0) {
    count--;
    //playList.next();
    console.log(playList.next());

}