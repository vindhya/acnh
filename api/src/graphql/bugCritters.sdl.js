export const schema = gql`
  type BugCritter {
    id: Int!
    name: String!
    image: String!
    price: Int!
    location: String!
    timeStart: Int!
    timeEnd: Int!
    monthsNorthHemi: String!
    monthsSouthHemi: String!
    timeStartAlt: Int
    timeEndAlt: Int
  }

  type Query {
    bugCritters: [BugCritter!]!
    bugCritter(id: Int!): BugCritter!
  }

  input CreateBugCritterInput {
    name: String!
    image: String!
    price: Int!
    location: String!
    timeStart: Int!
    timeEnd: Int!
    monthsNorthHemi: String!
    monthsSouthHemi: String!
    timeStartAlt: Int
    timeEndAlt: Int
  }

  input UpdateBugCritterInput {
    name: String
    image: String
    price: Int
    location: String
    timeStart: Int
    timeEnd: Int
    monthsNorthHemi: String
    monthsSouthHemi: String
    timeStartAlt: Int
    timeEndAlt: Int
  }

  type Mutation {
    createBugCritter(input: CreateBugCritterInput!): BugCritter!
    updateBugCritter(id: Int!, input: UpdateBugCritterInput!): BugCritter!
    deleteBugCritter(id: Int!): BugCritter!
  }
`
