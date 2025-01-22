import useUrlQuery from "@/hooks/useUrlQuery";
import { getAllTickets } from "@/repository/actions/ticket-service";
import { useQuery } from "@tanstack/react-query";

export default function useQueryTickets() {
  const { urlQuery, setUrlQuery, debouncedQuery, isInitialized } =
    useUrlQuery();

  const handleOnSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setUrlQuery((prev) => ({
      ...prev,
      keyword: inputValue === "" ? undefined : inputValue,
      page: 1,
    }));
  };

  const handleResetSearch = () => {
    if (urlQuery?.keyword) {
      setUrlQuery((prev) => ({
        ...prev,
        keyword: undefined,
        page: 1,
      }));
    }
  };

  const handleStatusChange = (status: string | undefined) => {
    setUrlQuery((prev) => ({
      ...prev,
      status: status === "" ? undefined : status,
      page: 1,
    }));
  };

  const res = useQuery({
    queryKey: [
      "get-admin-tickets",
      isInitialized ? debouncedQuery.page : urlQuery.page,
      isInitialized ? debouncedQuery.keyword : urlQuery.keyword,
      isInitialized ? debouncedQuery.status : urlQuery.status,
    ],
    queryFn: () =>
      getAllTickets(
        isInitialized ? debouncedQuery.page : urlQuery.page,
        isInitialized ? debouncedQuery.status : urlQuery.status,
        isInitialized ? debouncedQuery.keyword : urlQuery.keyword,
      ),
    placeholderData: (prev) => prev,
    refetchOnWindowFocus: false,
    enabled: true,
  });

  return {
    res,
    urlQuery,
    setUrlQuery,
    handleOnSearchChange,
    handleResetSearch,
    handleStatusChange,
  };
}
