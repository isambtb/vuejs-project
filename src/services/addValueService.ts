import baseApiService from "@/services/BaseApiService";

interface ICreateValue {
  value: string;
}

export default async function createValue(name: string, code: string, payload: ICreateValue): Promise<void> {
    const response = await baseApiService.post(`/front_end_test/${name}/${code}/create_row`, payload);
}
