import { useState } from 'react'
import { mutate } from 'swr'
import { config } from '../../lib/config'
import * as React from "react";
import { Menu, Transition, Listbox, Switch } from "@headlessui/react";

function LandingPage({ landingpage_id, nickname, headline, pageurl, thumburl, vstatus, statviews, statctaclicks, statsurveysaves }) {
  const [deleting, setDeleting ] = useState(false)
  const [disabling, setDisabling ] = useState(false)
  const [isEnabled, setIsEnabled ] = useState(vstatus === 0 ? false : true)

  async function deleteLandingPage() {
    if (confirm("Are you sure you want to delete this landing page?") == true) {
    setDeleting(true)
    let res = await fetch(`/api/delete-landingpage?id=${landingpage_id}`, { method: 'DELETE' })
    let json = await res.json()
    if (!res.ok) throw Error(json.message)
    mutate('/api/landingpage-array-get')
    setDeleting(false)
    }
  }

  async function disableLandingPage() {
    setDisabling(true)
    let res = await fetch(`/api/landingpage-disable?id=${landingpage_id}&status=${isEnabled ? 0 : 1}`, { method: 'POST' })
    setIsEnabled(!isEnabled)
    let json = await res.json()
    if (!res.ok) throw Error(json.message)
    mutate('/api/landingpage-array-get')
    setDisabling(false)
  }

  const handleClone = () => {

  }

  const thumbStyle = {
    backgroundColor: '#efefef',
    backgroundImage: 'url(' + thumburl + ')',
    backgroundSize: '102%',
    minHeight: '100px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    overflow: 'hidden',
  };

  var statratio = 0
  if (statctaclicks > 0) {
    statratio = Math.round((statctaclicks/statviews)*100)+'%'
  }

  return (
    
    
      <li key={landingpage_id} className="col-span-1 flex flex-col text-center bg-white rounded-lg border min-w-full">
        <div className="relative">
          <div className="absolute right-0 top-0 text-xs items-center justify-center content-center">

            <div className="">
              {
                !isEnabled && 
                  <a onClick={disableLandingPage} className="cursor-pointer rounded-bl-lg rounded-tr-lg h-full inline-flex px-1 items-center justify-center text-sm text-red-500 font-medium bg-gray-200 border border-gray-300  hover:text-red-400 focus:text-red-600 focus:shadow-none hover:border-gray-300 hover:shadow hover:bg-gray-200" title="{headline}">
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <title>Disabled</title>
                      <circle cx="10" cy="10" r="5" stroke="none" strokeWidth="3" fill="currentColor" />
                    </svg>
                    </a>
              }
              {
                isEnabled && 
                <a onClick={disableLandingPage} className="cursor-pointer rounded-bl-lg rounded-tr-lg h-full inline-flex px-1 items-center justify-center text-sm text-green-500 font-medium bg-gray-200 border border-gray-300  hover:text-green-400 focus:text-green-600 focus:shadow-none hover:border-gray-300 hover:shadow hover:bg-gray-200">
                  <svg className="animate-pulse w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <title>Enabled</title>
                    <circle cx="10" cy="10" r="5" stroke="none" strokeWidth="3" fill="currentColor" />
                  </svg>
                </a>
              }
            </div>

          </div>
          <div className="border-b border-gray-200">
            <a href={`/landingpage/${pageurl}`}>
              <div className="flex-1 flex flex-col p-8 rounded-t-lg" style={thumbStyle}></div>
              {isEnabled && 
              <div className="py-2 text-sm font-medium text-indigo-700 hover:text-gray-900 hover:bg-gray-100">{nickname}</div>
              }
              {!isEnabled && 
              <div className="py-2 text-sm font-medium text-gray-300 bg-gray-100 hover:text-gray-400">{nickname}</div>
              }
            </a>
          </div>
          <div>
            <div className="flex divide-x divide-gray-200  ">
 
              <div className="w-0 flex-1 flex">
                <div className="relative w-0 flex-1 items-center justify-center text-sm text-gray-400 font-medium">
                  <div className="block text-sm">Views</div>
                  <div className="block text-xs">{statviews}</div>
                </div>
              </div>

              

              <div className="w-0 flex-1 flex">
                <div className="relative w-0 flex-1 items-center justify-center text-sm text-gray-400 font-medium border border-transparent">
                  <div className="block text-sm">Clicks</div>
                  <div className="block text-xs">{statctaclicks}</div>
                </div>
              </div>

              <div className="w-0 flex-1 flex">
                <div className="relative w-0 flex-1 items-center justify-center text-sm text-gray-400 font-medium border border-transparent">
                  <div className="block">Score</div>
                  <div className="block text-xs">{statratio}</div>
                </div>
              </div>              


               {/* OPEN MENU */}

              <div className="flex flex-1">
               <div className="relative flex-1">
                    <Menu>
                    {({ open }) => (
                        <>
                            <>
                                <Menu.Button className="h-full w-auto flex-1 text-sm text-gray-400 font-medium border border-transparent rounded-br-lg hover:text-gray-700" aria-haspopup="true">
                                  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <title>Open Menu</title>
                                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                                  </svg>                                     
                                </Menu.Button>
                            </>
                            

                        <Transition
                            show={open}
                            enter="transition ease-out duration-100 z-50"
                            enterFrom="transform opacity-50 scale-20 z-50"
                            enterTo="transform opacity-100 scale-100 z-50"
                            leave="transition ease-in duration-75 z-50"
                            leaveFrom="transform opacity-100 scale-100 z-50"
                            leaveTo="transform opacity-0 scale-95 z-50"
                        >
                            <Menu.Items
                            static
                            className=" z-50 absolute right-0 w-56 mt-1 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
                            >
                            

                            <div className="py-1">
                              <div
                                onClick={() => navigator.clipboard.writeText(`${config.servername}/landingpage/${pageurl}`) && alert('URL was copied to your clipboard')}
                                className="justify-left content-left hover:bg-gray-100 cursor-pointer "
                                >
                                  <div className="">
                                    <span className=" flex justify-left w-full px-4 py-2 text-sm leading-5 text-left hover:text-gray-400 text-gray-400">
                                      <span className="justify-left text-sm">
                                        <svg className="w-5 h-5 min-w-5 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                          <title>Copy URL to Clipboard</title>
                                          <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                                        </svg>
                                      </span>

                                      <a className="text-gray-400 flex justify-left ml-1 text-left hover:text-gray-400 cursor-pointer ">
                                        <input 
                                          className="text-gray-500 text-xs tracking-tighter py-1 px-1 inline-block w-auto hover:text-green-400 focus:bg-blue-400 focus:text-white"
                                          type="text" 
                                          value={`${config.servername}/landingpage/${pageurl}`}
                                        />
                                        <svg className="ml-1 w-7 h-7 min-w-7 inline-block hover:text-green-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <title>Copy URL to Clipboard</title>
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                                        </svg>
                                      </a>


                                    </span>
                                  </div>

                                    
                              </div>
                              <div className="py-1 border-t">
                                <Menu.Item>
                                {({ active }) => (
                                    
                                    <a
                                    href={`${config.servername}/landingpage/${pageurl}`}
                                    className={`${
                                        active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-400"
                                    } flex justify-left w-full px-4 py-2 text-sm leading-5 text-left hover:text-gray-400`}
                                    >
                                      <span className="justify-left text-sm">
                                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                          <title>Preview</title>
                                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                          <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                                        </svg>
                                      </span>
                                      <span className="ml-2 text-gray-500">
                                      Preview Page
                                      </span>
                                    </a>
                                )}
                                </Menu.Item>

                                 {/* Edit Page */}
                                <Menu.Item>
                                {({ active }) => (
                                    
                                    <a
                                    href={`/landingpage-edit/${pageurl}`}
                                    className={`${
                                        active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-400"
                                    } flex justify-left w-full px-4 py-2 text-sm leading-5 text-left hover:text-gray-400`}
                                    >
                                      <span className="justify-left text-sm">
                                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                          <title>Edit Page</title>
                                          <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />

                                        </svg>
                                      </span>
                                      <span className="ml-2 text-gray-500">
                                      Edit Page
                                      </span>
                                    </a>
                                )}
                                </Menu.Item>

                                

                                {/* DUPLICATE  */}
                                <Menu.Item>
                                {({ active }) => (
                                    
                                    <a
                                    href={`/landingpage-edit/${pageurl}?clone=true`}
                                    className={`${
                                        active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-400"
                                    } flex justify-left w-full px-4 py-2 text-sm leading-5 text-left hover:text-gray-400`}
                                    >
                                      <span className="justify-left text-sm">
                                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                          <title>duplicate</title>
                                          <path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z" />
                                          <path d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                                        </svg>
                                      </span>
                                      <span className="ml-2 text-gray-500">
                                        Duplicate Page
                                      </span>
                                    </a>
                                )}
                                </Menu.Item>

                                <Menu.Item
                                as="span"
                                disabled
                                className=""
                                >
                                {({ active }) => (
                                    
                                    <a
                                    href={`/landingpage/stats/${pageurl}`}
                                    className={`${
                                        active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-400"
                                    } flex w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 cursor-not-allowed opacity-50`}
                                    >
                                      <span className="justify-left text-sm">
                                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                          <title>duplicate</title>
                                          <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />

                                        </svg>
                                      </span>
                                      <span className="ml-2 text-gray-500">
                                      Detailed Stats (Premium)
                                      </span>
                                    </a>
                                )}
                                </Menu.Item>
                              </div>
                            </div>
                            </Menu.Items>
                        </Transition>
                        </>
                    )}
                    </Menu>
                </div>

              </div>

              {/* CLOSE MENU */}

    
            </div>
    
          </div>
        </div>          
      </li>
  
    
  )

}

export default LandingPage



