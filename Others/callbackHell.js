function getData(data, callback) {
    setTimeout(() => {
        console.log(`data : ${data}`)
        if (callback) {
            callback()
        }
    }, 1000);
}

getData(1, () => {
    getData(2, () => {
        getData(3)
    })
})