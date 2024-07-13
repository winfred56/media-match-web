export interface RequestPerMonth {
    January: number,
    February: number,
    March: number,
    April: number,
    May: number,
    June: number,
    July: number,
    August: number,
    September: number,
    October: number,
    November: number,
    December: number,
}

export interface AudioVideoFile{

}

export interface EndPointUsage{
    id: number,
    endpoint: string,
    timestamp: Date,
    status: string,
    data: string
}


export interface TotalRequestThisYear {
    total_request: number
}

export interface FindRequestsMadeToday{
    find_requests_today: EndPointUsage[];
}

export interface FindRequestsMadeLastWeek {
    find_requests_last_week: EndPointUsage[];
}

export interface AddMediaRequestsMadeThisWeek {
    add_requests_this_week: EndPointUsage[];
}

export interface FailedRequests{
    failed_requests: EndPointUsage[];
}

export interface AverageRequestPerWeek{
    average_requests_per_week: number
}