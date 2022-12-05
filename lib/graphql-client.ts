import { GraphQLClient } from "graphql-request";


export const gqlClient = new GraphQLClient(process.env.hygraphURL as string,{
    headers: {"Authorization": `Bearer ${process.env.hygraphyToken as string}`}
});


