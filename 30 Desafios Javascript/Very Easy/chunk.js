function chunk (numberChunk) {
    let drawChunk = "chunk" + "-chunk".repeat(numberChunk)
    console.log(drawChunk)
}

function chunkb (numberChunk) {
    if (numberChunk == 0) {
        return ""
    } 
    if (numberChunk == 1) {
        return "chunk"
    } else {
        return "chunk-" + chunkb(numberChunk - 1)
    }
}

console.log(chunkb(5))