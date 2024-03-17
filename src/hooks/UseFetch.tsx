import { useState, useEffect } from 'react';
import axios from 'axios';

const BASE_URL = 'https://api.nytimes.com/svc/';
const API_KEY = 'y60FlDGALrUJ9n85oed2h8AtJsrKLZV5';

interface Result {
    created_date:string
    multimedia:any;
  uri: string;
  url: string;
  id: string;
  asset_id: number;
  source: string;
  published_date: string;
  updated: string;
  section: string;
  subsection: string;
  nytdsection: string;
  adx_keywords: string;
  column: string;
  byline: string;
  type: string;
  title: string;
  abstract: string;
  des_facet: Array<string>;
  org_facet: Array<string>;
  per_facet: Array<string>;
  geo_facet: Array<string>;
  media: Array<{
    type: string;
    subtype: string;
    caption: string;
    copyright: string;
    approved_for_syndication: number;
    media_metadata: Array<{
      url: string;
      format: string;
      height: number;
      width: number;
    }>;
  }>;
  eta_id: number;
}

interface Data {
  status: string;
  copyright: string;
  section: string;
  last_updated: string;
  num_results: number;
  results: Array<Result>;
}

interface Error {
  message: string;
}

interface FetchState {
  data: Data | null;
  loading: boolean;
  error: Error | null;
}

const useFetch = (url: string): FetchState => {
  const [data, setData] = useState<Data | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Data>(BASE_URL + url + API_KEY);
        setData(response.data);
        setLoading(false);
      } catch (err: any) {
        setError({ message: err.message });
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
