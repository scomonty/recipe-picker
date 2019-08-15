import axios from 'axios';
//const KEY = 'ce74dc883213d736dbd92ae8d48bd050';
const KEY = 'cfc9645b64230e279586d2be7e69d80a';
//const KEY = 'e6aacd46f03b22bbebd031d5924c9767';
//const KEY ='28189418798bf11ccd3ec635ff404476'
const destination = 'https://www.food2fork.com/api/search';
const proxy = 'https://cors-anywhere.herokuapp.com/';


export default axios.create({
	baseURL: `${proxy}${destination}?key=${KEY}`,
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY
	}
});
