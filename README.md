## CLI

The CLI is installed globally and provides the `vue` command in your terminal:

``` sh
npm install -g @vue/cli
vue create my-project
```

## CLI Service

`@vue/cli-service` is a dependency installed locally into every project created by `@vue/cli`. It contains the core service that loads other plugins, resolves the final webpack config, and provides the `vue-cli-service` binary to your project. If you are familiar with [create-react-app](https://github.com/facebookincubator/create-react-app), `@vue/cli-service` is essentially the equivalent of `react-scripts`, but more flexible.

See [CLI Service docs](./cli-service.md) for all available commands.