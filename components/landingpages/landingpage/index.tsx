import { useState } from 'react'
import Link from 'next/link'
import { mutate } from 'swr'


 


function LandingPage({ landingpage_id, nickname, headline, pageurl, thumburl, vstatus, statviews, statctaclicks, statsurveysaves }) {
  const [deleting, setDeleting ] = useState(false)
  const [disabling, setDisabling ] = useState(false)
  const [statusBtnText, setStatusBtnText ] = useState(["Enabling...","Enable"])

  async function deleteLandingPage() {
    setDeleting(true)
    let res = await fetch(`/api/delete-landingpage?id=${landingpage_id}`, { method: 'DELETE' })
    let json = await res.json()
    if (!res.ok) throw Error(json.message)
    mutate('/api/get-landingpages')
    setDeleting(false)
  }

  async function disableLandingPage() {
    setDisabling(true)
    setStatusBtnText(["Disabling...","Disable"])
    let res = await fetch(`/api/disable-landingpage?id=${landingpage_id}&status=${vstatus}`, { method: 'POST' })
    let json = await res.json()
    if (!res.ok) throw Error(json.message)
    mutate('/api/get-landingpages')
    setDisabling(false)
  }
  

  // return (
  //   <div>
  //     <div className="flex items-center">
  //       <div className="flex ml-4">
  //         <img src={thumburl} width="75" />
  //       </div>
  //       <div className="flex ml-4">
  //         <Link href={`/landingpage/${pageurl}`}>
  //           <a className="font-bold py-2">{nickname}</a>
  //         </Link>
  //       </div>
  //       <div className="flex ml-4">
  //       <ButtonLink
  //           href={`/landingpage/${pageurl}`}
  //           className="h-5 py-0 mx-1"
  //         >
  //           Preview
  //         </ButtonLink>
  //         <ButtonLink
  //           href={`/landingpage/edit/${pageurl}`}
  //           className="h-5 py-0 mx-1"
  //         >
  //           Edit
  //         </ButtonLink>
  //         <Button
  //           disabled={disabling}
  //           onClick={disableLandingPage}
  //           className="h-5 py-0 mx-1"
  //         >
  //           {disabling ? statusBtnText[0] : statusBtnText[1]}
  //         </Button>
  //         <Button
  //           disabled={deleting}
  //           onClick={deleteLandingPage}
  //           className="h-5 py-0 mx-1"
  //         >
  //           {deleting ? 'Deleting ...' : 'Delete'}
  //         </Button>
  //       </div>
  //     </div>
  //   </div>
  // )

  const divStyle = {
    backgroundColor: '#efefef',
    backgroundImage: 'url(' + thumburl + ')',
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center top',

  };

  return (
    
  
      <li className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
        <div>
          <a className="block flex-1 flex flex-col p-8"  style={divStyle} href={`/landingpage/${pageurl}`}>
            
            <dl className="mt-1 flex-grow flex flex-col justify-between">
              <dd className="mt-3">
          

              </dd>
            </dl>
          </a>
        </div>
        <div>
           <h3 className="mt-6 text-gray-900 text-sm font-medium">{nickname}</h3>
        </div>
        <div>
          <div className="-mt-px flex divide-x divide-gray-200">
  


  
            <div className="-ml-px w-0 flex-1 flex">
             <Link href={`/landingpage/${pageurl}`}>
               <a className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-400 font-medium border border-transparent rounded-br-lg hover:text-gray-700">

                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <title>Preview</title>
                  <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
              </svg>

                </a>
              </Link>
            </div>

            <div className="w-0 flex-1 flex">
              <Link href={`/landingpage/edit/${pageurl}`}>
               <a className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-400 font-medium border border-transparent rounded-br-lg hover:text-gray-700">
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <title>Edit</title>
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
                </a>
              </Link>
            </div>

            <div className="-ml-px w-0 flex-1 flex">

              <a onClick={disableLandingPage} className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-400 font-medium border border-transparent rounded-br-lg hover:text-gray-700">
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <title>Disabled</title>
                  <path d="M3.707 2.293a1 1 0 00-1.414 1.414l6.921 6.922c.05.062.105.118.168.167l6.91 6.911a1 1 0 001.415-1.414l-.675-.675a9.001 9.001 0 00-.668-11.982A1 1 0 1014.95 5.05a7.002 7.002 0 01.657 9.143l-1.435-1.435a5.002 5.002 0 00-.636-6.294A1 1 0 0012.12 7.88c.924.923 1.12 2.3.587 3.415l-1.992-1.992a.922.922 0 00-.018-.018l-6.99-6.991zM3.238 8.187a1 1 0 00-1.933-.516c-.8 3-.025 6.336 2.331 8.693a1 1 0 001.414-1.415 6.997 6.997 0 01-1.812-6.762zM7.4 11.5a1 1 0 10-1.73 1c.214.371.48.72.795 1.035a1 1 0 001.414-1.414c-.191-.191-.35-.4-.478-.622z" />
                </svg>

                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <title>Enabled</title>
                  <path fillRule="evenodd" d="M5.05 3.636a1 1 0 010 1.414 7 7 0 000 9.9 1 1 0 11-1.414 1.414 9 9 0 010-12.728 1 1 0 011.414 0zm9.9 0a1 1 0 011.414 0 9 9 0 010 12.728 1 1 0 11-1.414-1.414 7 7 0 000-9.9 1 1 0 010-1.414zM7.879 6.464a1 1 0 010 1.414 3 3 0 000 4.243 1 1 0 11-1.415 1.414 5 5 0 010-7.07 1 1 0 011.415 0zm4.242 0a1 1 0 011.415 0 5 5 0 010 7.072 1 1 0 01-1.415-1.415 3 3 0 000-4.242 1 1 0 010-1.415zM10 9a1 1 0 011 1v.01a1 1 0 11-2 0V10a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
              </a>

            </div>


            <div className="-ml-px w-0 flex-1 flex">
              <a href="#" className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-400 font-medium border border-transparent rounded-br-lg hover:text-gray-700">


                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <title>duplicate</title>
                  <path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z" />
                  <path d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                </svg>
              </a>
            </div>      


            <div className="-ml-px w-0 flex-1 flex">
              <a href="#" className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-400 font-medium border border-transparent rounded-br-lg hover:text-gray-700">


                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <title>View detailed stats</title>
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
              </a>
            </div>         
  
          </div>
  
        </div>
  
      </li>
  
    
  )

}

export default LandingPage



