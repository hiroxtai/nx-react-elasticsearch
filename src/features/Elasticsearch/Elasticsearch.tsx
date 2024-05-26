import elasticsearch from 'elasticsearch-browser';
import { useQuery } from 'react-query';

/* eslint-disable-next-line */
export interface ElasticsearchProps {}

const client = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace',
});

const fetchElasticData = async () => {
  const response = await client.search({
    index: 'kibana_sample_data_logs',
    body: {
      query: {
        match_all: {},
      },
    },
  });

  return response.hits.hits;
};

export function Elasticsearch(props: ElasticsearchProps) {
  const { data, isLoading, error } = useQuery('elasticData', fetchElasticData);

  console.log(data);
  return (
    <div>
      <h1>Welcome to Elasticsearch!</h1>
    </div>
  );
}

export default Elasticsearch;
