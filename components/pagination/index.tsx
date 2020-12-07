import { config } from '../../lib/config'
import pageint from '../utils/pageint'
import Router, { useRouter } from 'next/router'

function* range(start, end, step) {
    while (start <= end) {
      yield start;
      start += step;
    }
  }

function Pagination({ results }) {

    const router = useRouter()
    const varPage = router.query.page?.toString()
    var varCurrentPage = pageint(varPage)

    //PAGE VARIABLES LOGIC
    var varPerPage = config.itemsperpage
    var varPreviousPage = varCurrentPage -1
    var varNextPage = varCurrentPage +1
    var varShowingStart = ((varCurrentPage * varPerPage)-varPerPage+1) 
    varShowingStart = Math.max(varShowingStart,1)
    var varShowingEnd = varShowingStart + (varPerPage-1)
    var varShowingEnd = Math.min(results, varShowingEnd)
    var varShowingTotal = results
    if (varShowingStart > varShowingEnd) {
        varShowingTotal = 0
    }

    //varShowingTotal = 180

    //PAGE NUMBERS LOGIC
    var varPageCount = 1
    if (varShowingTotal >= varShowingEnd) {
        varPageCount = (varShowingTotal / varCurrentPage)

        //USE THE QUOTIENT
        varPageCount = Math.floor(varShowingTotal/varPerPage);

        //SEE IF THERE IS A REMAINDER
        if (varShowingTotal % varPerPage > 0) {
            varPageCount++
        }
    }

    varCurrentPage = Math.min(varCurrentPage,varPageCount)


    var pagNavLowerBound = varCurrentPage - 2
    pagNavLowerBound = Math.max(pagNavLowerBound,1)
    var pagNavUpperBound = pagNavLowerBound + config.pageblocks-1
    pagNavUpperBound = Math.min(varPageCount,pagNavUpperBound)

    let pagenumbers = Array.from(range(pagNavLowerBound,pagNavUpperBound,1)); 



    let setActive = ""
    
    const disabledStyle = {
        pointerEvents: 'none',
        cursor: 'default',
        opacity: '0.2'
      };

    var prevStyle = {}
    if (varPreviousPage <= 0) {
        prevStyle = disabledStyle
    }

    var nextStyle = {}
    if (varCurrentPage >= varPageCount) {
        nextStyle = disabledStyle
    }

    return (
        <div className="bg-white py-3 mt-4 flex items-center justify-between border-t border-gray-200 ">
            <div className="flex-1 flex justify-between sm:hidden">
                {varPreviousPage > 0 &&
                <a href={`/?page=`+ varPreviousPage} className="disabled relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500">
                Previous
                </a>
                
                }
                <span></span>
                {varShowingTotal > varShowingEnd &&
                <a href={`/?page=`+ varNextPage} className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500">
                Next
                </a>
                }
            </div>
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                <div>
                <p className="text-sm text-gray-700">
                    {varShowingTotal > 3 &&
                    <span>
                        Showing
                        <span className="font-medium mx-1">{varShowingStart}</span>
                        to
                        <span className="font-medium mx-1">{varShowingEnd}</span>
                        of
                    </span>
                    }
                    <span className="font-medium mx-1">{varShowingTotal}</span>
                    results
                </p>
                </div>
                <div>
                <nav className="relative z-0 inline-flex  -space-x-px" aria-label="Pagination">
                    
                    {/* PREV BUTTON */}
                    <a href={`/?page=`+ varPreviousPage} style={prevStyle} className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"> 
                        <span className="sr-only">Previous</span>
                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <title>Previous</title>
                            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                    </a>
                    

                    {/* ALWAYS SHOWN - FIRST */}
                    {!pagenumbers.includes(1) &&
                    <a href="/?page=1" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                    1
                    </a>
                    }

                    {/* FIRST BREAK LOGIC HERE */}
                    {pagenumbers[0]-1>1 &&
                    <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                    ...
                    </span>
                    }

                    {/* PAGE CODE LOGIC HERE */}
                    {pagenumbers.map((value, index) => {
                      {value != varCurrentPage ? setActive = "text-gray-700" :  setActive = "text-green-700"}
                      return <a key={index} href={`/?page=`+value} className={`relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium hover:bg-gray-50 `+setActive}>{value}</a>
                    })}

                    {/* SECOND BREAK LOGIC HERE */}
                    {varPageCount > pagNavUpperBound+1 &&
                    <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                    ...
                    </span>
                    }

                    {/* ALMOST ALWAYS SHOWN - LAST */}
                    {varPageCount > pagNavUpperBound &&
                    <a href={`/?page=`+varPageCount} className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                    {varPageCount}
                    </a>
                    }

                    {/* NEXT BUTTON LOGIC */}
                    <a href={`/?page=`+ varNextPage} style={nextStyle} className="disabled:opacity-50 relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                        <span className="sr-only">Next</span>
                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <title>Next</title>
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                    </a>
                </nav>
                </div>
            </div>
        </div>
    )

}

export default Pagination


