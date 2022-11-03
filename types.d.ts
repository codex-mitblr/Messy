export interface MessScreenInput {
  name: string;
}


export type RootStackParamList = {
  LoginPage;
  Home;
  messPage: { mess: string};
  GroupPage: {groupID: string};
};

export interface FoodMenuItem{
 name:string;
 src:string;
 rating: number;

}

export interface MemberInfo{
  name:string,
  mess:string,
  src:string
}