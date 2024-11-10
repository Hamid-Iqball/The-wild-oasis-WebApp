import { formatDistance, parseISO } from "date-fns";

// Currency Formate function
export function formatCurrency(value){
return new Intl.NumberFormat('en',{style:'currency', currency:'USD'}).format(value)
}


export const formatDistanceFromNow = (dateStr) =>
    formatDistance(parseISO(dateStr), new Date(), {
      addSuffix: true,
    })
      .replace('about ', '')
      .replace('in', 'In');