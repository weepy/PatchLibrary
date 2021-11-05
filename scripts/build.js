const fs = require("fs")
const path = require("path")

const getAllFiles = function(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath)

  arrayOfFiles = arrayOfFiles || []

  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles)
    } else {
      arrayOfFiles.push(path.join(__dirname, dirPath, "/", file))
    }
  })

  return arrayOfFiles
}


function treeList(dirPath, tree={}) {
    const files = fs.readdirSync(dirPath)

    files.forEach(file =>  {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            tree[file] = {} 
            treeList(dirPath + "/" + file, tree[file])
            // getAllFiles(dirPath + "/" + file, arrayOfFiles)
        } else {
            tree[file] = 1 //file //path.join(__dirname, dirPath, "/", file)
        }
    })

    return tree
}



const files = treeList(__dirname +"/../files")

console.log(files)
let version 
try {
    const text = fs.readFileSync(__dirname + "/../library.json").toString()
    version = (JSON.parse(text).version||0) + 1
}
catch(e) {
    version = 1
}


const library = {
    version,
    createdAt: new Date,
    files
}
fs.writeFileSync(__dirname + "/../library.json", JSON.stringify(library, null, 4))