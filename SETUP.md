# Setting up OneBusAway Developer
[Back to `README.md`](README.md)
## Prerequisites

* [Ruby](https://www.ruby-lang.org/en/downloads/) >= 2.7
* [Node](https://nodejs.org) >= 12
* [Yarn](https://yarnpkg.com)

## Install

```sh
git clone https://github.com/OneBusAway/onebusaway-docs.git
cd onebusaway-docs
bundle install && yarn install
```

## Development

To start your site in development mode, run `bin/bridgetown start` and navigate to [localhost:4000](https://localhost:4000/)!

### Commands

```sh
# running locally
bin/bridgetown start

# load the site up within a Ruby console (IRB)
bin/bridgetown console
```
## Deployment
The website built from this project is deployed automatically to a static hosting service on [Render](https://www.render.com). Please contact the maintainers with any questions.

> Learn more: [Bridgetown CLI Documentation](https://www.bridgetownrb.com/docs/command-line-usage)

