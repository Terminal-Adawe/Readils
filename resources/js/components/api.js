import axios from 'axios'

class Api {

	async getStories () {
		let response = await axios.get('/api/stories')

        return response.data.stories
       
	}

	async getStory (storyid, pageNo, type, optionid) {
		console.log("sending story ID "+storyid+" with type "+type+" and page number "+pageNo)
		
		try {
		const config = {
        method: 'get',
        url: '/api/story/',
        params:{ storyid: storyid, pageno: pageNo, type: type, optionid: optionid }
    }


    let response = await axios(config)


        return response.data
       
		} catch (err) {
      // throw new Error
      return {err};
    	}
	} 
}

export default Api