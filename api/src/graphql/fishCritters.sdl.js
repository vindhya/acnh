export const schema = gql`
  type FishCritter {
    id: Int!
    name: String!
    image: String!
    price: Int!
    location: String!
    timeStart: Int!
    timeEnd: Int!
    monthsNorthHemi: String!
    monthsSouthHemi: String!
    shadowSize: Int!
    timeStartAlt: Int
    timeEndAlt: Int
  }

  type Query {
    fishCritters: [FishCritter!]!
    fishCritter(id: Int!): FishCritter!
  }

  input CreateFishCritterInput {
    name: String!
    image: String!
    price: Int!
    location: String!
    timeStart: Int!
    timeEnd: Int!
    monthsNorthHemi: String!
    monthsSouthHemi: String!
    shadowSize: Int!
    timeStartAlt: Int
    timeEndAlt: Int
  }

  input UpdateFishCritterInput {
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
    shadowSize: Int
  }

  type Mutation {
    createFishCritter(input: CreateFishCritterInput!): FishCritter!
    updateFishCritter(id: Int!, input: UpdateFishCritterInput!): FishCritter!
    deleteFishCritter(id: Int!): FishCritter!
  }
`
