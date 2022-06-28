import { gql } from "@apollo/client";
export const LAUNCHES_PAST = gql`
  query setOffset($offset: Int) {
    launchesPast(limit: 10, offset: $offset) {
      mission_name
      launch_date_local
      launch_site {
        site_name_long
      }
      links {
        article_link
        video_link
      }
      rocket {
        rocket_name
        first_stage {
          cores {
            flight
          }
        }
      }
      ships {
        name
        home_port
        image
      }
    }
  }
`;
