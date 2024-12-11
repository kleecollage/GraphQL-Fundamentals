import { UsersAPI } from "../dataSources/users2.data";

export interface MyContext {
  // userAPI?: String;
  dataSources: {
    usersAPI: UsersAPI;
  }
}