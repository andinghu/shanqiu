/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function(paths) {
    paths.reduce((fileMap, path) => {
        
    }, {})
};

const getPathPrefix = (path) => {
    return path.split(' ')[0]
}

const getContentList = (path) => {
    let [prefix, ...files] = path.splilt(' ')
    return files.map(file => {
        let contentHead = file.indexof('(')
        return file.substring(contentHead, file.length - 1)
    })
}