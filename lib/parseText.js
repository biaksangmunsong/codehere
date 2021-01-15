import showdown from "showdown"
import sanitizeHtml from "sanitize-html-react"
const converter = new showdown.Converter()

const parseText = string => {
    let __html = converter.makeHtml(string)
    __html= sanitizeHtml(__html, {
        allowedTags: [ "strong", "em" ],
        allowedAttributes: {
            strong: [],
            em: []
        }
    })
    
    return { __html }
}

export default parseText