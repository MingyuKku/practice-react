import React from 'react'
import { fetchItems } from './service/fetch';
import { QueryKey, useInfiniteQuery, useQuery } from '@tanstack/react-query';
import axios from 'axios';


const App = () => {

    const INDEX_KEY: QueryKey = ['infinite-items'];
    const PER_PAGE = 20;

    // https://test-persona-api.hiing.co/v1.10/rooms/1,2,0,15

    const {
        data: items,
        isFetching,
        fetchNextPage,
        fetchPreviousPage,
        hasNextPage,
        isFetchingNextPage,
        status,
    } = useInfiniteQuery({
        queryKey: INDEX_KEY,
        queryFn: ({ pageParam }) => fetchItems(pageParam),
        initialPageParam: 15, // 필수 (초기 페이지 매개변수)
        getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) => {
            // console.log('lastPage 이게 지금 뭐여!', lastPage, lastPageParam)
            // console.log('allPages 이게 지금 뭐여!', allPages, allPageParams)
            const lastItem = lastPage.results[lastPage.results.length - 1];
            const lastItemRegisteredAge = lastItem.registered?.age
            console.log('넥스트 파람', lastItemRegisteredAge)
            return lastItemRegisteredAge;
        }
    })


    if (status === 'pending') {
        return <p>로딩중이다!!!</p>
    } else if (status === 'error') {
        return <p>에러다!!!</p>
    } else {
        return (
            <div>
                <h1>infinite scroll</h1>
                <div className='content'>
                    {items.pages.map((group, i) => (
                        <React.Fragment key={i}>
                            {
                                group.results.map((item:any, idx: any) => (
                                    <div key={ idx }>
                                        <p>{ item?.cell }</p>
                                    </div>
                                ))
                            }
                        </React.Fragment>
                    ))}
                </div>
                <button
                    onClick={() => fetchNextPage()}
                    disabled={!hasNextPage || isFetchingNextPage}
                >
                    {
                        isFetchingNextPage
                        ? 'Loading more...'
                        : hasNextPage
                        ? 'Load More'
                        : 'Nothing more to load'
                    }
                </button>
                <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>
            </div>
        )
    }
}

export default App