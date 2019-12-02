import axios from 'axios'
import { normalize, schema } from 'normalizr';
import { AUTH_USER, 
    AUTH_ERROR,
    FORGOT_PASSWORD_REQUEST,
     RESET_PASSWORD_REQUEST,
      GET_CLIENTS, GET_CLIENTS_ERROR, CREATE_EXCEL_FILE 
 } from './types'
//  const { ipcRenderer } = window.require('electron');


const getClientListSchema = () => {
        const locationSchema = new schema.Entity("locations", {})
        const jobSchema = new schema.Entity("jobs", {location:locationSchema, })
        const clientSchema = new schema.Entity('clients', {jobs: [jobSchema]})
        const clientListSchema = new schema.Array(clientSchema);
        return clientSchema
}   

const locationSchema = new schema.Entity("locations", {})
const jobSchema = new schema.Entity("jobs", {location:locationSchema, })
const clientSchema = new schema.Entity('clients', {jobs: [jobSchema]})
const clientListSchema = new schema.Array(clientSchema);


export const getClients = () => dispatch => {
    return(
        axios.get('http://localhost:3090/client/clients').then((res)=> {
            const normalizedClients = normalize(res.data, clientListSchema);
            return dispatch({
                type: GET_CLIENTS,
                payload: normalizedClients
            })
        }).catch((err)=> {
            return dispatch({
                type: GET_CLIENTS_ERROR,
                payload: "Damn Daniel"
            })
        })
    )
}

export const sortClientTable = (columnKey, sortDir) => {
    return {
        type: 'SORT_BY',
        columnKey,
        sortDir
    }
}

export const filterClientTable = (searchTerm) => {
    return {
        type: 'FILTER_BY',
        searchTerm
    }
}

// export const downloadExcel = data => dispatch => {
//     ipcRenderer.send('file:excelDownload', data)
//     dispatch({ type: CREATE_EXCEL_FILE })
// }