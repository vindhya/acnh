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
  }

  type Mutation {
    createBugCritter(input: CreateBugCritterInput!): BugCritter!
    updateBugCritter(id: Int!, input: UpdateBugCritterInput!): BugCritter!
    deleteBugCritter(id: Int!): BugCritter!
  }
`
