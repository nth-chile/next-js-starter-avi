import { config } from '../../../lib/config'

function filesperfolder(itemnumber) {    
    return (
        (Math.ceil((itemnumber+1)/config.filesperfolder)*config.filesperfolder)-config.filesperfolder
    )
}

export default filesperfolder