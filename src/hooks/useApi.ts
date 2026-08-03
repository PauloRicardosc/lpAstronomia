import type { AxiosRequestConfig } from "axios";
import { useQuery } from "react-query";
import type { QueryKey, UseQueryOptions } from "react-query";
import { api } from "../services/api";

export function useApi<T>(
  queryKey: QueryKey,
  url: string,
  mock: T,
  config?: AxiosRequestConfig,
  options?: UseQueryOptions<T>
) {
  return useQuery<T>(
    queryKey,
    async () => {
      try {
        const { data } = await api.get<T>(url, config);
        return data;
      } catch (error) {
        console.error(`Falha ao buscar ${url}, usando mock como fallback.`, error);
        return mock;
      }
    },
    options
  );
}
