import useUrlQuery from "@/hooks/useUrlQuery";
import { getAllTickets } from "@/repository/actions/ticket-service";
import { ITicketDetail } from "@/types/ticket-types";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function useQueryTickets() {
  const { urlQuery, setUrlQuery, debouncedQuery, isInitialized } =
    useUrlQuery();

  const handleOnSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setFilteredTickets(
      tickets?.filter(
        ({ email, name, id }) =>
          email.includes(inputValue) ||
          name.includes(inputValue) ||
          id.toString().includes(inputValue),
      ),
    );
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
    if (status === "all") {
      setFilteredTickets(tickets);
      return;
    }

    setFilteredTickets(
      tickets?.filter(({ isCheckedIn }) => {
        return isCheckedIn.toString() === status;
      }),
    );
  };

  const handleEventChange = (status: string | undefined) => {
    if (status === "all") {
      setFilteredTickets(tickets);
      return;
    }

    setFilteredTickets(
      tickets?.filter(({ event }) => {
        return event.toString() === status;
      }),
    );
  };

  const [tickets, setTickets] = useState<ITicketDetail[]>([]);
  const [filteredTickets, setFilteredTickets] = useState<ITicketDetail[]>([]);

  const res = useQuery({
    queryKey: [
      "get-admin-tickets",
      isInitialized ? debouncedQuery.page : urlQuery.page,
      isInitialized ? debouncedQuery.keyword : urlQuery.keyword,
      isInitialized ? debouncedQuery.status : urlQuery.status,
    ],
    queryFn: async () => {
      const res = await getAllTickets(
        isInitialized ? debouncedQuery.page : urlQuery.page,
        isInitialized ? debouncedQuery.status : urlQuery.status,
        isInitialized ? debouncedQuery.keyword : urlQuery.keyword,
      );

      setTickets(res.tickets);
      setFilteredTickets(res.tickets);

      return res;
    },
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
    handleEventChange,
    tickets: filteredTickets,
  };
}
