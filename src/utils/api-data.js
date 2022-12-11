async function bookData(){
    const response = await fetch('https://example-data.draftbit.com/articles?_limit=50');
    const responseJson = await response.json();

    console.log(responseJson);

    return {
        data: responseJson
    }
}

async function bookDetail(id) {
    const response = await fetch(`https://example-data.draftbit.com/articles/${id}`);
    const responseJson = await response.json();

    console.log(responseJson);

    return {
        data: responseJson
    }
}

export {bookData, bookDetail};
