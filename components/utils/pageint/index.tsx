function pageint(pagenumber) {

    var varCurrentPage = 1    
    if (!pagenumber) {
        varCurrentPage = 1
    }
    //@ts-ignore
    if (!isNaN(pagenumber)) {
        varCurrentPage = parseInt(pagenumber)
    }
    return (
        Math.max(varCurrentPage,1)
    )
}

export default pageint