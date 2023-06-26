import { useState, useEffect } from "react";

export default function useAsync(handler: any, immediate = true) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(immediate);
  const [error, setError] = useState(null);

  // eslint-disable-next-line space-before-function-paren
  const act = async (...args: undefined[]) => {
    setLoading(true);
    setError(null);

    try {
      const data = await handler(...args);
      setData(data);
      setLoading(false);
      return data;
    } catch (err: any) {
      // eslint-disable-next-line no-console
      console.log("#########INSIDER####################", err);
      setError(err);
      setLoading(false);
      return err;
    }
  };

  useEffect(() => {
    if (immediate) {
      act();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    data,
    loading,
    error,
    act,
  };
}
