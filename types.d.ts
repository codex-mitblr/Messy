export interface MessScreenInput {
  name: string;
}


export type RootStackParamList = {
  Home;
  messPage: { mess: string};
  GroupPage: {groupID: string};
};
