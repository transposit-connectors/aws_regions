({ http_event }) => {

  return {
    status_code: 200,
    headers: { "Content-Type": "application/json" },
    body: api.run("this.describe_regions")
  };
}

/*
 * For sample code and reference material, visit
 * https://www.transposit.com/docs/building/webhooks
 */