import React from 'react';
import { useLoaderData } from '@remix-run/react';
import type { LoaderFunctionArgs } from '@remix-run/node';

export const loader = async ({params}: LoaderFunctionArgs) => {
    return params;
};

const Para$param = () => {
    const params = useLoaderData<typeof loader>();
    return (
        <div>
            <div>param: {params['param']}</div>
        </div>
    );
};
export default Para$param;
