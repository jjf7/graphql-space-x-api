import { useQuery } from "@apollo/client";
import { LAUNCHES_PAST } from "../graphql-launches-past";

export const useLaunchesPast = (page) => {
  const results = useQuery(LAUNCHES_PAST, {
    variables: { offset: page },
  });

  return results;
};
