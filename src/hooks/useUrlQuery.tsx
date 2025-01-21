import { useDebounce } from "@uidotdev/usehooks";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import convertObjectToQueryParams from "@/lib/helpers/convertObjectToQueryParams";
import { IGeneralFilter } from "@/types/general-types";

function useUrlQuery() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const isInitializedRef = useRef(false);

  const [urlQuery, setUrlQuery] = useState<IGeneralFilter>({
    keyword: searchParams.get("search") || undefined,
    page: Math.max(1, Number.parseInt(searchParams.get("page") || "1")),
    limit: Number.parseInt(searchParams.get("page") || "10"),
    status: searchParams.get("status") || undefined,
  });

  const debouncedQuery = useDebounce(urlQuery, 700);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (!isInitializedRef.current) {
      isInitializedRef.current = true;
      return;
    }
    setIsInitialized(true);

    const existingParams = Object.fromEntries(searchParams.entries());
    const queryParams = convertObjectToQueryParams({
      ...existingParams,
      ...debouncedQuery,
    });

    const newUrl = queryParams ? `${pathname}?${queryParams}` : pathname;
    router.replace(newUrl);
  }, [debouncedQuery, pathname, router, searchParams]);

  return { urlQuery, setUrlQuery, debouncedQuery, isInitialized };
}

export default useUrlQuery;
