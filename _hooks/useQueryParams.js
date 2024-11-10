
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const useQueryParams = (serverOrClient = "client") => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

    const setQueryParam = (query, filter) => {
        const params = new URLSearchParams(serverOrClient === "client" ? searchParams: window.location.search);

        if (filter) {
            params.set(query, filter);
        } else {
            params.delete(query); 
        }

        router.replace(`${serverOrClient === "client" ? pathname : window.location.pathname}?${params.toString()}`, { shallow: true }, { scroll: false });
    };

    return { setQueryParam };
};

