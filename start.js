const { LoremIpsum } = require("lorem-ipsum");


const PORT = process.env.PORT || 5555
const serverAddress = "https://dummy-data-cbkm.herokuapp.com/"



const fmnames = require("./american_names/firstnames_m.json")
const ffnames = require("./american_names/firstnames_f.json")
const surnames = require("./american_names/surnames.json")
const lenfmnames = fmnames.length
const lenffnames = ffnames.length
const lensurnames = surnames.length

const customType = ['paragraph', 'sentence', 'word', 'name', 'phone', 'pic', 'number', 'bool']

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
        max: 16,
        min: 4
    },
    wordsPerSentence: {
        max: 16,
        min: 4
    }
});

function random(max, min = 0) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// Paragraphs

const getParagraphs = (pcount, array = false) => {
    try {
        let count = Number(pcount) || 1
        if (array) {
            data = []
            for (i = 0; i < count; i++) {
                data.push(lorem.generateParagraphs(1))
            }
            return data
        }
        return lorem.generateParagraphs(count)
    } catch (error) {
        console.error(error)
    }

}



//Sentences


const getSentences = (pcount, array) => {
    try {
        let count = Number(pcount) || 1
        if (array) {
            data = []
            for (i = 0; i < count; i++) {
                data.push(lorem.generateSentences(1))
            }
            return data
        }
        return lorem.generateSentences(count)

    } catch (error) {
        console.error(error)
    }
}

//Words

const getWords = (pcount, array = false) => {
    try {
        let count = Number(pcount) || 1
        if (array) {
            data = []
            for (i = 0; i < count; i++) {
                data.push(lorem.generateWords(1))
            }
            return data
        }
        return lorem.generateWords(count)
    } catch (error) {
        console.error(error)

    }
}



//names
const getNames = (pcount, gender = "a", array = false, join = ",") => {

    try {
        let count = Number(pcount) || 1
        let data = []
        for (i = 0; i < count; i++) {
            let name = gender === 'f' ? ffnames : gender === 'm' ? fmnames : random(1) ? fmnames : ffnames
            data.push(`${name[random(name.length)]} ${surnames[random(lensurnames)]}`)
        }
        return array != true ? data.join(join) : data
    } catch (error) {
        console.error(error)
    }
}


const getPicLink = (width, height, pcount, array = false, join = ",") => {
    try {
        var width = Number(width) || 200
        var height = Number(height) || width
        var count = Number(pcount) || 1
        var data = []
        for (var i = 0; i < count; i++)
            data.push(`${serverAddress}getPic/${width}/${height}`)
        return array != true ? data.join(join) : data

    } catch (error) {
        console.log(error)
    }
}

// //Placeholders
const getPlacholderLink = (pcount, params = {}, array = false, join = ",") => {
    try {
        let count = Number(pcount) || 1
        var data = []
        for (var i = 0; i < count; i++)
            data.push(`${serverAddress}/getPlacholder/${params.config || 150}/${params.background || "#cccccc"}/${params.foreground || "#969696"}/?text=${params.text || ""}`)
        return array != true ? data.join(join) : data
    } catch (error) {
        console.log(error)

    }
}
// //profile
const getProfileLink = (pcount, gender = 'a', array = false, join = ",") => {
    try {
        let count = Number(pcount) || 1
        var data = []
        for (var i = 0; i < count; i++) {
            data.push(`${serverAddress}getProfile/${gender}`)
        }
        return array != true ? data.join(join) : data

    }
    catch (error) {
        console.log(error)
    }
}
//coustom
const coustom = (body) => {
    try {
        obj = body || { name: 'name' }
        keys = Object.keys(obj)
        len = keys.length
        result = {}
        for (i = 0; i < len; i++) {
            type = obj[keys[i]].type ? String(obj[keys[i]].type).toLowerCase() : obj[keys[i]]
            option = obj[keys[i]].option || null
            if (customType.includes(type))
                result[keys[i]] = getValue(type, option || { count: 1 })
            else
                result[keys[i]] = 'invalid type ' + type

        }
        return result
    } catch (error) {
        console.error(error)
    }
}


function getValue(type, option = { count: 1 }) {
    let count = Number(option.count) || 1
    switch (type) {
        case 'sentence':
            var max = 8
            var min = 4
            if (Number(option.max) && Number(option.min) && option.min <= option.max) {
                max = option.max
                min = option.min
            }
            else {

            }
            return new LoremIpsum({
                wordsPerSentence: {
                    min,
                    max
                }
            }).generateSentences(count)

        case 'paragraph':
            var max = 16
            var min = 8
            if (Number(option.max) && Number(option.min) && option.min <= option.max) {
                max = option.max
                min = option.min
            }
            else {

            }
            return new LoremIpsum({
                sentencesPerParagraph: {
                    min,
                    max
                }
            }).generateParagraphs(count)

        case 'word':
            return new LoremIpsum().generateWords(count)
        case "name":
            var data = []
            for (var i = 0; i < count; i++) {
                let name = option.gender === 'f' ? ffnames : option.gender === 'm' ? fmnames : random(1) ? fmnames : ffnames
                data.push(`${name[random(name.length)]} ${surnames[random(lensurnames)]}`)
            }
            return data.length > 1 ? data : data[0] || ""
        case 'phone':
            return random(9999999999, 1000000000)
        case 'pic':
            var width = option.width || 200
            var height = option.height || width
            var data = []
            for (var i = 0; i < count; i++)
                data.push(`${serverAddress}getPic/${width}/${height}`)
            console.log(data)
            return data.length > 1 ? data : data[0] || ""

        case 'number':
            var max = 99
            var min = 10
            if (Number(option.max) && Number(option.min) && option.min <= option.max) {
                max = option.max
                min = option.min
                return random(max, min)
            }
        case 'bool':
            return random(1) ? true : false

        default:
            return new LoremIpsum().generateWords(1)

    }

}

// {
//     "paragraphs": {
//       "type": "paragraph",
//       "option": {
//         "max": 16,
//         "min": 4
//       }
//     },
//     "sentence": {
//       "type": "sentence",
//       "option": {
//         "max": 8,
//         "min": 4
//       }
//     },
//     "word": "word",
//     "name": {
//       "type": "name",
//       "option": {
//         "gender": "m"
//       }
//     },
//     "phone": "phone",
//     "pic": {
//       "type": "pic",
//       "option": {
//         "width": 300,
//         "height": 400
//       }
//     },
//     "number": {
//       "type": "number",
//       "option": {
//         "max": 10000,
//         "min": 100
//       }
//     },
//     "bool": "bool"
//   }

module.exports = {
    getParagraphs,
    getSentences,
    getWords,
    getNames,
    getPicLink,
    getPlacholderLink,
    getProfileLink,
    coustom
}