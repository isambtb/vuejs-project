import baseApiService from "@/services/BaseApiService";

interface IGetValues {
  id: number;
  value: string;
  created: string;
}

export default async function fetchValuesList(name: string, code: string): Promise<IGetValues[]> {
  const response = await baseApiService.get(`/front_end_test/${name}/${code}/get_rows`);

  return response.data.data;
}
