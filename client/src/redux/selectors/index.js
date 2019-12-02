import { createSelector } from 'reselect'
import matchSorter, {rankings, caseRankings} from 'match-sorter'

export const getJobs = state => Object.keys(state.entities.jobs).map(key => state.entities.jobs[key])
export const getClients = state => Object.keys(state.entities.clients).map(key => state.entities.clients[key])
export const getClientDataTableSortBy = state => state.pages.adminPage.sortBy
export const getClientDataTableSortDir = state => state.pages.adminPage.sortDir
export const getClientDataTableSearchTerm = state => state.pages.adminPage.searchTerm

export const combineJobsContractors = createSelector(
    [getJobs],
    (jobs) => {
        return jobs.map((job) => ({
            ...job,
            "contractorName": job.contractor.name,
            "contractorEmail": job.contractor.email,
            "contractorPhone": job.contractor.phone,
        }))
    }
)


export const combineClientAddress = createSelector(
    [getClients],
    (clients) => {
        return clients.map((client) => ({
            ...client,
            "address/city/zipcode": `${client.address}/${client.city}/${client.zipCode}`
        }))
    }
)

export const getVisibleClients = createSelector(
    [getClients, getClientDataTableSearchTerm],
    (clients, searchTerm) => {
        if(searchTerm.length < 1){
            return clients
        }
        return matchSorter(clients, searchTerm, {threshold: matchSorter.rankings.WORD_STARTS_WITH, keys: ['contact'] })

    }   
)

export const getSortedClients = createSelector(
    [getClientDataTableSortBy, getVisibleClients, getClientDataTableSortDir],
    (sortBy, clients, sortDir) => {
        return clients.sort((indexA, indexB) => {
            const valueA = indexA[sortBy];
            const valueB = indexB[sortBy];
            let sortVal = 0;
            if (valueA > valueB) {
              sortVal = 1;
            }
            if (valueA < valueB) {
              sortVal = -1;
            }
            if (sortVal !== 0 && sortDir === 'ASC') {
              sortVal = sortVal * -1;
            }
            return sortVal;
          });
    }
)