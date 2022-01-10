import baseApiService from "@/services/BaseApiService";

interface ICreateUserResponse {
  id: number;
  code: number;
  name: string;
  created: string;
}

export default async function createUser(name: string): Promise<ICreateUserResponse> {
  const response = await baseApiService.post('/front_end_test/create_test', { name });

  return response.data as ICreateUserResponse;
}
