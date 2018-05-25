function findMost(arr) {
  var h = {};
  var maxNum = 0;
  maxEle = {};
  for (var i = 0; i < arr.length; i++) {
    var key = arr[i];
    h[key] === undefined ? (h[key] = 1) : h[key]++;
    if (h[key] > maxNum) {
      maxEle = key;
      maxNum = h[key];
    }
  }
  return '出现最多的元素为' + maxEle + '出现了' + maxNum + '次';
}


function countWords(message){
  // wirte your code here
  return message.split('').length;

}
countWords('Good morning, I love JavaScript.'); // should return 5

const musicData = [{
    artist: 'Adele',
    name: '25',
    sales: 1731000
  },
  {
    artist: 'Drake',
    name: 'Views',
    sales: 1608000
  },
  {
    artist: 'Beyonce',
    name: 'Lemonade',
    sales: 1554000
  },
  {
    artist: 'Chris Stapleton',
    name: 'Traveller',
    sales: 1085000
  },
  {
    artist: 'Pentatonix',
    name: 'A Pentatonix Christmas',
    sales: 904000
  },
  {
    artist: 'Original Broadway Cast Recording',
    name: 'Hamilton: An American Musical',
    sales: 820000
  },
  {
    artist: 'Twenty One Pilots',
    name: 'Blurryface',
    sales: 738000
  },
  {
    artist: 'Prince',
    name: 'The Very Best of Prince',
    sales: 668000
  },
  {
    artist: 'Rihanna',
    name: 'Anti',
    sales: 603000
  },
  {
    artist: 'Justin Bieber',
    name: 'Purpose',
    sales: 554000
  }
];

const albumSalesStrings = musicData.map(item => `${item.artist} by ${item.name} sold ${item.sales} copies`)

const results = musicData.filter(item => item.name.length >= 10 || item.length <= 10)

const popular = musicData.filter(item => item.sales > 1000000).map(item => `${item.name} is a great performer`)


console.log(albumSalesStrings);
