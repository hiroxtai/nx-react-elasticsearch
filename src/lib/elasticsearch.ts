import { Client as ElasticsearchClient } from 'elasticsearch-browser';

const elasticsearchClientSingleton = () => {
  return new ElasticsearchClient({
    host: 'localhost:9200',
    log: 'trace',
  });
};

declare const globalThis: {
  elasticsearchGlobal: ReturnType<typeof elasticsearchClientSingleton>;
} & typeof global;

const elasticsearch = globalThis.elasticsearchGlobal ?? elasticsearchClientSingleton();

export default elasticsearch;

if (process.env.NODE_ENV !== 'production') globalThis.elasticsearchGlobal = elasticsearch;
