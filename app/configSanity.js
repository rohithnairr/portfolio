import { createClient } from 'next-sanity'

export const client = createClient({
    projectId:"sj3jnmnz",
    dataset:"production",
    apiVersion:"v2021-10-21",
    useCdn:true,
});
export default client;