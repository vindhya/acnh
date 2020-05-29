export const schema = gql`
  type Bug {
    id: Int!
    name: String!
    image: String!
    price: Int!
    location: String!
    timeStart: Int!
    timeEnd: Int!
  }

  type Query {
    bugs: [Bug!]!
    bug(id: Int!): Bug!
  }

  input CreateBugInput {
    name: String!
    image: String!
    price: Int!
    location: String!
    timeStart: Int!
    timeEnd: Int!
  }

  input UpdateBugInput {
    name: String
    image: String
    price: Int
    location: String
    timeStart: Int
    timeEnd: Int
  }

  type Mutation {
    createBug(input: CreateBugInput!): Bug!
    updateBug(id: Int!, input: UpdateBugInput!): Bug!
    deleteBug(id: Int!): Bug!
  }
`
