import elasticsearch from '@/lib/elasticsearch';
import { useQuery } from '@tanstack/react-query';

/* eslint-disable-next-line */
export interface ElasticsearchProps {}

const fetchElasticData = async () => {
  const response = await elasticsearch.search({
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
  const { data, isLoading, error } = useQuery({ queryKey: ['elasticData'], queryFn: fetchElasticData });

  console.log(data);
  return (
    <div>
      <h1>Welcome to Elasticsearch!</h1>
    </div>
  );
}

export default Elasticsearch;
