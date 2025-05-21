# Haye TypeScript MCP Server

It is generated with [Stainless](https://www.stainless.com/).

## Installation

### Building

Because it's not published yet, clone the repo and build it:

```sh
git clone git@github.com:faderzz/boomerangme-mcp.git
cd boomerangme-mcp
./scripts/bootstrap
./scripts/build
```

### Running

```sh
# set env vars as needed
export HAYE_API_KEY="My API Key"
node ./packages/mcp-server/dist/index.js
```

> [!NOTE]
> Once this package is [published to npm](https://app.stainless.com/docs/guides/publish), this will become: `npx -y haye-mcp`

### Via MCP Client

[Build the project](#building) as mentioned above.

There is a partial list of existing clients at [modelcontextprotocol.io](https://modelcontextprotocol.io/clients). If you already
have a client, consult their documentation to install the MCP server.

For clients with a configuration JSON, it might look something like this:

```json
{
  "mcpServers": {
    "haye_api": {
      "command": "node",
      "args": ["/path/to/local/boomerangme-mcp/packages/mcp-server", "--client=claude", "--tools=dynamic"],
      "env": {
        "HAYE_API_KEY": "My API Key"
      }
    }
  }
}
```

## Exposing endpoints to your MCP Client

There are two ways to expose endpoints as tools in the MCP server:

1. Exposing one tool per endpoint, and filtering as necessary
2. Exposing a set of tools to dynamically discover and invoke endpoints from the API

### Filtering endpoints and tools

You can run the package on the command line to discover and filter the set of tools that are exposed by the
MCP Server. This can be helpful for large APIs where including all endpoints at once is too much for your AI's
context window.

You can filter by multiple aspects:

- `--tool` includes a specific tool by name
- `--resource` includes all tools under a specific resource, and can have wildcards, e.g. `my.resource*`
- `--operation` includes just read (get/list) or just write operations

### Dynamic tools

If you specify `--tools=dynamic` to the MCP server, instead of exposing one tool per endpoint in the API, it will
expose the following tools:

1. `list_api_endpoints` - Discovers available endpoints, with optional filtering by search query
2. `get_api_endpoint_schema` - Gets detailed schema information for a specific endpoint
3. `invoke_api_endpoint` - Executes any endpoint with the appropriate parameters

This allows you to have the full set of API endpoints available to your MCP Client, while not requiring that all
of their schemas be loaded into context at once. Instead, the LLM will automatically use these tools together to
search for, look up, and invoke endpoints dynamically. However, due to the indirect nature of the schemas, it
can struggle to provide the correct properties a bit more than when tools are imported explicitly. Therefore,
you can opt-in to explicit tools, the dynamic tools, or both.

See more information with `--help`.

All of these command-line options can be repeated, combined together, and have corresponding exclusion versions (e.g. `--no-tool`).

Use `--list` to see the list of available tools, or see below.

### Specifying the MCP Client

Different clients have varying abilities to handle arbitrary tools and schemas.

You can specify the client you are using with the `--client` argument, and the MCP server will automatically
serve tools and schemas that are more compatible with that client.

- `--client=<type>`: Set all capabilities based on a known MCP client

  - Valid values: `openai-agents`, `claude`, `claude-code`, `cursor`
  - Example: `--client=cursor`

Additionally, if you have a client not on the above list, or the client has gotten better
over time, you can manually enable or disable certain capabilities:

- `--capability=<name>`: Specify individual client capabilities
  - Available capabilities:
    - `top-level-unions`: Enable support for top-level unions in tool schemas
    - `valid-json`: Enable JSON string parsing for arguments
    - `refs`: Enable support for $ref pointers in schemas
    - `unions`: Enable support for union types (anyOf) in schemas
    - `formats`: Enable support for format validations in schemas (e.g. date-time, email)
    - `tool-name-length=N`: Set maximum tool name length to N characters
  - Example: `--capability=top-level-unions --capability=tool-name-length=40`
  - Example: `--capability=top-level-unions,tool-name-length=40`

### Examples

1. Filter for read operations on cards:

```bash
--resource=cards --operation=read
```

2. Exclude specific tools while including others:

```bash
--resource=cards --no-tool=create_cards
```

3. Configure for Cursor client with custom max tool name length:

```bash
--client=cursor --capability=tool-name-length=40
```

4. Complex filtering with multiple criteria:

```bash
--resource=cards,accounts --operation=read --tag=kyc --no-tool=create_cards
```

## Importing the tools and server individually

```js
// Import the server, generated endpoints, or the init function
import { server, endpoints, init } from "haye-mcp/server";

// import a specific tool
import listOperationsV2 from "haye-mcp/tools/v2/list-operations-v2";

// initialize the server and all endpoints
init({ server, endpoints });

// manually start server
const transport = new StdioServerTransport();
await server.connect(transport);

// or initialize your own server with specific tools
const myServer = new McpServer(...);

// define your own endpoint
const myCustomEndpoint = {
  tool: {
    name: 'my_custom_tool',
    description: 'My custom tool',
    inputSchema: zodToJsonSchema(z.object({ a_property: z.string() })),
  },
  handler: async (client: client, args: any) => {
    return { myResponse: 'Hello world!' };
  })
};

// initialize the server with your custom endpoints
init({ server: myServer, endpoints: [listOperationsV2, myCustomEndpoint] });
```

## Available Tools

The following tools are available in this MCP server.

### Resource `v2`:

- `list_operations_v2` (`read`): More description
- `send_sms_v2` (`write`): Send SMS to customer

### Resource `v2.cards`:

- `create_v2_cards` (`write`): Create card for customer
- `retrieve_v2_cards` (`read`): Get card information by id (serial number)
- `update_v2_cards` (`write`): Edit card
- `list_v2_cards` (`read`): More description
- `delete_v2_cards` (`write`): Delete card
- `add_point_v2_cards` (`write`): Add point to card
- `add_purchase_v2_cards` (`write`): Add purchase to card
- `add_reward_v2_cards` (`write`): Add reward to card
- `add_scores_v2_cards` (`write`): Add scores to card
- `add_stamp_v2_cards` (`write`): Add stamp to card
- `add_transaction_amount_v2_cards` (`write`): Add amount to card
- `add_visit_v2_cards` (`write`): Add visit to card
- `receive_reward_v2_cards` (`write`): Receive reward
- `redeem_coupon_v2_cards` (`write`): Redeem coupon
- `set_expiration_date_v2_cards` (`write`): Set card expiration date
- `set_membership_tier_v2_cards` (`write`): Set membership card tier and period
- `subtract_point_v2_cards` (`write`): Subtract point from card
- `subtract_purchase_v2_cards` (`write`): Subtract purchase from card
- `subtract_reward_v2_cards` (`write`): Subtract reward from card
- `subtract_scores_v2_cards` (`write`): Subtract scores from card
- `subtract_stamp_v2_cards` (`write`): Subtract stamp from card
- `subtract_transaction_amount_v2_cards` (`write`): Subtract amount from card
- `subtract_visit_v2_cards` (`write`): Subtract visit from card

### Resource `v2.companies`:

- `create_v2_companies` (`write`): Create company
- `retrieve_v2_companies` (`read`): Get company
- `update_v2_companies` (`write`): Edit company
- `list_v2_companies` (`read`): List of companies
- `delete_v2_companies` (`write`): Delete company

### Resource `v2.customers`:

- `create_v2_customers` (`write`): Create customer
- `retrieve_v2_customers` (`read`): Get customer
- `update_v2_customers` (`write`): Edit customer
- `list_v2_customers` (`read`): List of customers
- `delete_v2_customers` (`write`): Delete customer

### Resource `v2.marketplace`:

- `accrue_v2_marketplace` (`write`): Perform an accrual action on a purchase.

A customer's phone number, email, or card serial number is required to find or register a loyalty card.

- `resolve_credentials_v2_marketplace` (`write`): Retrieve a bundle of app installation credentials using any one of them.

For example, on a service webhook or at the application service level,
you may only have the merchant ID and need to obtain the service API token.

- `reverse_v2_marketplace` (`write`): Revert a previously performed accrual action using the transaction ID.

### Resource `v2.profile`:

- `retrieve_v2_profile` (`read`): Get profile
- `update_v2_profile` (`write`): Edit profile

### Resource `v2.profile.agency`:

- `retrieve_profile_v2_agency` (`read`): Get agency profile
- `update_profile_v2_agency` (`write`): Edit agency profile

### Resource `v2.pushes`:

- `retrieve_v2_pushes` (`read`): Get push
- `list_v2_pushes` (`read`): List of push messages
- `send_v2_pushes` (`write`): Send push

### Resource `v2.statistics`:

- `revenue_v2_statistics` (`read`): Revenue statistics

### Resource `v2.tariffs`:

- `retrieve_v2_tariffs` (`read`): Get tariff
- `list_v2_tariffs` (`read`): List of tariffs

### Resource `v2.templates`:

- `retrieve_v2_templates` (`read`): Get template
- `list_v2_templates` (`read`): List of templates

### Resource `v2.templates.reward_tiers`:

- `create_templates_v2_reward_tiers` (`write`): Create reward tier
- `delete_templates_v2_reward_tiers` (`write`): Delete reward tier
