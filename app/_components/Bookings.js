"use client"
import { useState } from "react"


export function AsyncDataFetcher() {

  return (
    <div>
      <button onClick={handleFetchData} disabled={loading}>
        {loading ? "Loading..." : "Fetch Data"}
      </button>
      {data && <div>{data}</div>}
      {error && <div style={{ color: "red" }}>{error.message}</div>}
    </div>
  );
}




// export function AsyncDataFetcher({ children, fetchData }) {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleFetchData = async () => {
//     setLoading(true);
//     try {
//       const data = await fetchData();
//       setData(data);
//     } catch (error) {
//       setError(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <button onClick={handleFetchData} disabled={loading}>
//         {loading ? "Loading..." : "Fetch Data"}
//       </button>
//       {data && <div>{data}</div>}
//       {error && <div style={{ color: "red" }}>{error.message}</div>}
//       {children}
//     </div>
//   );
// }
