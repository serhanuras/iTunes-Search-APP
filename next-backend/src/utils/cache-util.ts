import NodeCache from "node-cache";

const cacheUtil = new NodeCache({ stdTTL: 100, checkperiod: 120 });

export default cacheUtil;
