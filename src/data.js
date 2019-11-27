
import { gql } from "apollo-boost";

const Pikachu = {
  query: gql`
    {
      pokemon(name: "Pikachu") {
        id
        number
        name
        attacks {
          special {
            name
            type
            damage
          }
        }
        evolutions {
          id
          number
          name
          weight {
            minimum
            maximum
          }
          attacks {
            fast {
              name
              type
              damage
            }
          }
        }
      }
    }
    `
}

const Bulbasaur = {
  query: gql`
    {
      pokemon(name: "Bulbasaur") {
        id
        number
        name
        attacks {
          special {
            name
            type
            damage
          }
        }
        evolutions {
          id
          number
          name
          weight {
            minimum
            maximum
          }
          attacks {
            fast {
              name
              type
              damage
            }
          }
        }
      }
    }
    `
}

export { Pikachu, Bulbasaur }