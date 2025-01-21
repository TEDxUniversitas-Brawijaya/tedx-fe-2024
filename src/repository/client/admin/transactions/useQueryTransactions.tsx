import useUrlQuery from "@/hooks/useUrlQuery";
import { getAllOrders } from "@/repository/actions/order-service";
import { useQuery } from "@tanstack/react-query";

export default function useQueryTransactions() {
  const { urlQuery, setUrlQuery, debouncedQuery, isInitialized } =
    useUrlQuery();

  const handleOnSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setUrlQuery((prev) => ({
      ...prev,
      search: inputValue === "" ? undefined : inputValue,
      page: 1,
    }));
  };

  const handleResetSearch = () => {
    if (urlQuery?.keyword) {
      setUrlQuery((prev) => ({
        ...prev,
        search: undefined,
        page: 1,
      }));
    }
  };

  const res = useQuery({
    queryKey: [
      "get-admin-transactions",
      isInitialized ? debouncedQuery.page : urlQuery.page,
      isInitialized ? debouncedQuery.keyword : urlQuery.keyword,
    ],
    queryFn: () =>
      getAllOrders(
        isInitialized ? debouncedQuery.page : urlQuery.page,
        isInitialized ? debouncedQuery.status : urlQuery.status,
        isInitialized ? debouncedQuery.keyword : urlQuery.keyword,
        10,
      ),
    placeholderData: (prev) => prev,
    refetchOnWindowFocus: false,
  });

  return {
    res,
    urlQuery,
    setUrlQuery,
    handleOnSearchChange,
    handleResetSearch,
  };
}
