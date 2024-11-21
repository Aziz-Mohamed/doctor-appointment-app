
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const useQueryParams = (serverOrClient = "client") => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // Use it when you only want to change ONE query param
    const setQueryParam = (query, filter) => {
        const params = new URLSearchParams(serverOrClient === "client" ? searchParams: window.location.search);

        if (filter) {
            params.set(query, filter);
        } else {
            params.delete(query); 
        }

        router.replace(`${serverOrClient === "client" ? pathname : window.location.pathname}?${params.toString()}`, { shallow: true }, { scroll: false });
    };

// Use it when you want to change MULTIPLE query params
    const setMultiQueryParams = (queries) => {
        const params = new URLSearchParams(serverOrClient === "client" ? searchParams : window.location.search);

        Object.entries(queries).forEach(([key, value]) => {
          if (value?.toString()) {
            params.set(key, value);
          } else {
            params.delete(key);
          }
        });

        if (params.toString() === "") {
            router.replace(`${serverOrClient === "client" ? pathname : window.location.pathname}`, { shallow: true }, { scroll: false });
        } else {
            router.replace(`${serverOrClient === "client" ? pathname : window.location.pathname}?${params?.toString()}`, { shallow: true }, { scroll: false });
        }
    };
    
    return { setQueryParam, setMultiQueryParams };
};

