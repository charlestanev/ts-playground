// function solve(input) {
//     class Song {
//         constructor(type, name, time) {
//             this.type = type;
//             this.name = name;
//             this.time = time;
//         }
//     }

//     let n = Number(input.shift());
//     let songs = [];

//     for (let i = 0; i < n; i++) {
//         let inputLine = input.shift()
//         let [type, name, time] = inputLine.split('_');
//         songs.push(new Song(type, name, time));
//     }

//     let searchTipe = input.shift();

//     if (searchTipe === 'all') {
//         printSongs(songs)
//     } else {
//         let searchedSongs = songs.filter(x => x.type === searchTipe);
//         printSongs(searchedSongs);
//     }

//     function printSongs(songs){
//         for (const i of songs) {
//             console.log(i.name);
//         }
//     }
// }

// solve([4,
//     'favourite_DownTown_3:14',
//     'listenLater_Andalouse_3:24',
//     'favourite_In To The Night_3:58',
//     'favourite_Live It Up_3:48',
//     'listenLater'])

// solve([
//     3,
//     'favourite_DownTown_3:14',
//     'favourite_Kiss_4:16',
//     'favourite_Smooth Criminal_4:01',
//     'favourite'
// ]);

// solve([
//     2,
//     'like_Replay_3:15',
//     'ban_Photoshop_3:48',
//     'all'
// ]);


// function solve(arr) {
//     let obj = {

//     }
//     for (const line of arr) {
//         let [town, lat, long] = line.split(' | ');

//         let obj = {
//             town: town,
//             lat: lat,
//             long: long
//         }

//         // for (const i in obj) {
//         //     console.log(`${i}: ${obj[i]}`);
//         // }
//         console.log(obj);
        
//     }
// }

// solve(
//     ['Sofia | 42.696552 | 23.32601',
//         'Beijing | 39.913818 | 116.363625']
// )