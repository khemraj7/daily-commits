console.log("Flatten object")

function flattenObject(obj, prefix = '', result = {}) {

    for (let key in obj) {
        let path = prefix ? `${prefix}.${key}` : key

        if (typeof obj[key] === 'object' && obj[key] != null) {
            flattenObject(obj[key], path, result)
        } else {
            console.log(path, obj[key])
            result[path] = obj[key]
        }
    }
    return result
}
const objData = {
    user: {
        name: 'John',
        address: {
            city: 'New York',
            zip: '10001'
        }
    }
};
console.log(flattenObject(objData))
