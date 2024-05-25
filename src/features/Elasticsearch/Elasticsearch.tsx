import elasticsearch from 'elasticsearch-browser';
import { useEffect } from 'react';

/* eslint-disable-next-line */
export interface ElasticsearchProps {}

export function Elasticsearch(props: ElasticsearchProps) {
  useEffect(() => {
    const client = new elasticsearch.Client({ host: 'http://localhost:9200' });

    (async () => {
      const result = await client.search({
        index: 'kibana_sample_data_logs',
        body: {
          query: {
            match_all: {},
          },
        },
      });

      console.log(result);
    })();
  }, []);

  return (
    <div>
      <h1>Welcome to Elasticsearch!</h1>
    </div>
  );
}

export default Elasticsearch;
