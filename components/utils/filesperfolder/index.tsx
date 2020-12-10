function filesperfolder(itemnumber,spacer) {    
    return (
        (Math.ceil((itemnumber+1)/spacer)*spacer)-spacer
    )
}

export default filesperfolder