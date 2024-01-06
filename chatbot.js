const url = "https://api.openai.com/v1/completions"

//
async function getCompletion(promptText, apikey) {
    //headers
    const headers = {
        'Authorization': `Bearer ${apikey}`,
        'Content-Type': 'application/json'
    };
    const data = {
        'model': 'text-davinci-003',
        'prompt': promptText,
        'max_tokens': 100,
        'temperature': 0,
    };
    try {
        const response = await fetch(url, {
          method: 'POST',
          headers: headers,
          body: JSON.stringify(data)
        });
        const responseData = await response.json();
        const result = responseData.choices[0].text.trim();
        //console.log(result);
        return result;
    } 
    catch (error) {
        console.error('Error:', error);
        return null;
    }
}
//TEST FOR GET COMPLETION -- this is a common function for the following features (translate, revise, rewrite,...)
//or it can also be used for replying normal request
//getCompletion("Translate the following in Vietnamese. Hello how are you?", "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")
//.then(test=>console.log(test));


//-------TRANSLATE
function translate(lang, promptText, apikey) {
    const translatePrompt = "Translate in " + lang + " for this: " + promptText;
    return getCompletion(translatePrompt,apikey);
}
//TEST FOR TRANSLATE
//translate("Vietnamese", "Hello how are you?", "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")
//.then(test=>console.log(test));



//SUMMARIZE
function summarize(promptText, apikey) {
    const summarizePrompt = "Summarize the following: " + promptText;
    return getCompletion(summarizePrompt,apikey);
}
//TEST FOR SUMMARIZE
//summarize("blah blah blah", "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")
//.then(test=>console.log(test));


//REVISE
function revise(context, promptText, apikey) {
    //context: formal/informal/academic
    const revisePrompt = "Rewrite the following with" + context + " context: " + promptText;
    return getCompletion(revisePrompt,apikey);
}
//TEST FOR REVISE
// revise("formal","Hi how are you", "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")
// .then(test=>console.log(test));

//OFFER HELP
//use when put in chat box
function offerhelp(promptText, apikey) {
    const offerPrompt = "Offer me help on translating, rewriting or summarizing the following: " + promptText;
    return getCompletion(offerPrompt,apikey);
}
//TEST FOR OFFER HELP
// offerhelp("Hi how are you", "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")
// .then(test=>console.log(test));

//TEST
//use in the need the check valid/usable key
function checkValid(apikey) {
    const testPrompt = "Hi, reply me.";
    return getCompletion(testPrompt,apikey);
}
