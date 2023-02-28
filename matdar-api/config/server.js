module.exports = ({ env }) => ({
  host: env('HOST', '64.227.150.200'),
  port: env.int('PORT', 1337),
  proxy: true,
  app: {
    keys: env.array("APP_KEYS", ["testKey1", "testKey2"]),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
